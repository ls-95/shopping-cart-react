import { useEffect } from "react";
import "./CartCalculation.css";
import { useCart } from "./CartContext";

let options = ["Standard Delivery: 49kr", "Home Delivery: 79kr"];

export default function DeliveryOptions({ totalPrice }) {
  const { selectedDelivery, setSelectedDelivery, setDeliveryOption } =
    useCart();
  useEffect(() => {
    if (selectedDelivery !== "") {
      if (totalPrice >= 800) {
        setDeliveryOption("0");
      } else {
        if (selectedDelivery === options[0]) {
          setDeliveryOption("49");
        } else if (selectedDelivery === options[1]) {
          setDeliveryOption("79");
        }
      }
    }
  }, [totalPrice, selectedDelivery, setDeliveryOption]);

  const handleDeliveryChange = (e) => {
    const selectedOption = e.target.value;
    setSelectedDelivery(selectedOption);
  };

  return (
    <div className="selection-container">
      <select value={selectedDelivery} onChange={handleDeliveryChange} required>
        <option value="" disabled hidden>
          Delivery...
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
