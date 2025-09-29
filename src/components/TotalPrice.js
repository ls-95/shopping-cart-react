export default function TotalPrice({ deliveryPrice, totalPrice, promo }) {
  const price = Number(totalPrice);
  const delivery = Number(deliveryPrice);

  if (price === 0) {
    return <>0</>;
  }

  let total = delivery + price;

  if (promo) {
    total = Math.max(0, total - 50);
  }

  return <>{total}</>;
}
