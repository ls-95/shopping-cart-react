import "./Payment.css";
import Summary from "../components/payement/Summary";
import Contact from "../components/payement/Contact";
import Delivery from "../components/payement/Delivery";
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
          <Button children={"Pay"} type={"submit"} />
        </form>
      </div>
    </div>
  );
}
