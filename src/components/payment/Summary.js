import { useCart } from "../Cart/CartContext";
import "../../pages/Payment.css";

export default function Summary() {
  const { cartItems } = useCart();
  return (
    <div className="order-summary">
      <h3 className="section-heading">Order Summary</h3>
      <div className="order-summary-item-container">
        {cartItems.map((item) => (
          <div className="order-summary-item">
            <div>
              <p className="order-summary-item-title">{item.title}</p>
            </div>
            <div>
              <p className="order-summary-item-quantity">{item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
