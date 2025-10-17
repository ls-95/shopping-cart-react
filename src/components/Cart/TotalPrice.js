import { useEffect } from "react";
import { useCart } from "./CartContext";

export default function TotalPrice({ deliveryPrice, totalPrice, promo }) {
  const { setTotal } = useCart();

  const price = Number(totalPrice);
  const delivery = Number(deliveryPrice);

  let total = delivery + price;

  if (promo) {
    total = Math.max(0, total - 50);
  }

  useEffect(() => {
    setTotal(total);
  }, [total, setTotal]);

  if (price === 0) {
    return <>0</>;
  }

  return <>{total}</>;
}
