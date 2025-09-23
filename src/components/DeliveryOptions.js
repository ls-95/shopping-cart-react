import { useState } from "react";
import "./CartCalculation.css";

export default function DeliveryOptions({ setDeliveryOption }) {
  let [selected, setSelected] = useState("");
  let options = ["Standard Delivery - 49kr", "Home Delivery - 79kr"];

  const handleDeliveryChange = (e) => {
    const selectedOption = e.target.value;
    setSelected(selectedOption);

    if (selectedOption === options[0]) {
      setDeliveryOption("49");
    } else if (selectedOption === options[1]) {
      setDeliveryOption("79");
    }
  };

  return (
    <div className="selection-container">
      <select value={selected} onChange={handleDeliveryChange} required>
        <option value="">Delivery...</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
