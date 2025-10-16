import { useEffect, useState } from "react";
import "./CartCalculation.css";

let options = ["Standard Delivery: 49kr", "Home Delivery: 79kr"];

export default function DeliveryOptions({ setDeliveryOption, totalPrice }) {
  let [selected, setSelected] = useState("");

  useEffect(() => {
    if (selected !== "") {
      if (totalPrice >= 800) {
        setDeliveryOption("0");
      } else {
        if (selected === options[0]) {
          setDeliveryOption("49");
        } else if (selected === options[1]) {
          setDeliveryOption("79");
        }
      }
    }
  }, [totalPrice, selected, setDeliveryOption]);

  const handleDeliveryChange = (e) => {
    const selectedOption = e.target.value;
    setSelected(selectedOption);
  };

  return (
    <div className="selection-container">
      <select value={selected} onChange={handleDeliveryChange} required>
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
