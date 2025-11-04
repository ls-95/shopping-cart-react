import "./Payment.css";
import Summary from "../components/payment/Summary";
import Contact from "../components/payment/Contact";
import Delivery from "../components/payment/Delivery";
import Button from "../components/Button";
import { useCart } from "../components/Cart/CartContext";

export default function Payment() {
  const { isChecked } = useCart();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isChecked) {
      alert(
        "Congratulations! Your mock order is complete! 🎉 Thank you for subscribing to our newsletter. We value your enthusiasm. Unfortunately, our newsletter department was laid off in 1998. We’ll get back to you once they respawn."
      );
    } else {
      alert(
        "Congratulations! Your mock order is complete! 🎉 Sadly, you chose not to receive our thrilling newsletter. Our imaginary marketing team is inconsolable. You could still turn this around, you know…"
      );
    }
  };
  return (
    <div className="payment-container">
      <div className="inner-payement-container">
        <Summary />
        <form onSubmit={handleSubmit}>
          <Contact />
          <Delivery />
          <div className="payment-button-section">
            <Button
              children={"Pay"}
              type={"submit"}
              style={{ width: "100%" }}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
