import "./CartTotal.css";

export default function CartTotal({ totalPrice }) {
  return (
    <div className="cart-total-container">
      <div>
        <p className="total-text">TOTAL:</p>
      </div>
      <div>
        <p className="total-price">{totalPrice}kr</p>
      </div>
    </div>
  );
}
