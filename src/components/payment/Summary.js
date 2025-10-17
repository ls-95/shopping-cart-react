import { useCart } from "../Cart/CartContext";
import "../../pages/Payment.css";

export default function Summary() {
  const { cartItems, deliveryOption, total, promoCode } = useCart();
  return (
    <div className="order-summary">
      <h3 className="section-heading">Order Summary</h3>
      <div className="order-summary-item-container">
        {cartItems.map((item) => (
          <div className="order-summary-item" key={item.id}>
            <div className="order-summary-item-title-container">
              <p className="order-summary-item-title">{item.title}</p>
            </div>
            <div className="order-summary-item-quantity-container">
              <p className="order-summary-item-quantity">
                {item.quantity} x{" "}
                <strong>{Math.round(item.price) * 10}kr</strong>
              </p>
            </div>
          </div>
        ))}
        <hr />
        <div>
          <div className="order-summary-item">
            <p>Delivery Fee:</p>
            <p>{deliveryOption === "0" ? "FREE" : `${deliveryOption}kr`}</p>
          </div>
          <div className="order-summary-item">
            <p>Discount:</p>
            <p>{promoCode ? "-50kr" : "None"}</p>
          </div>
          <div className="order-summary-item">
            <p>Tax (included):</p>
            <p>{Math.round(total * 0.25)}kr</p>
          </div>
          <div className="order-summary-item">
            <p>
              <strong>Total Price:</strong>
            </p>
            <p className="order-summary-total-price">
              <strong>{total}kr</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
