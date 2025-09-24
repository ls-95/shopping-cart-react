export default function TotalPrice({ deliveryPrice, totalPrice, promo }) {
  const total = Number(deliveryPrice) + Number(totalPrice);
  if (promo) {
    let totalWithPromo = total - 50;
    return <>{totalWithPromo}</>;
  } else {
    return <>{total}</>;
  }
}
