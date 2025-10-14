import "./Payment.css";
import Summary from "../components/payment/Summary";
import Contact from "../components/payment/Contact";
import Delivery from "../components/payment/Delivery";
import Button from "../components/Button";

export default function Payment() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Congratulations! You have just completed your fake order! 🎉");
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
