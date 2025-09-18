import "./CartCalculation.css";
import { useState } from "react";
import Button from "./Button";

export default function CartCalculation() {
  const [input, setInput] = useState("");
  const [promo, setPromo] = useState("");

  const handlePromoCode = (e) => {
    e.preventDefault();
    setPromo(input);
    setInput("");
    if (input.length === 0) {
      alert("Please enter a promo code!");
    } else {
      alert(`Promo Code: ${input} had been added`);
    }
  };
  return (
    <div className="cart-calculation">
      <form>
        <label htmlFor="promo-code">ENTER PROMO CODE:</label>
        <div className="promo-code-container">
          <input
            type="text"
            placeholder="Promo Code"
            id="promo-code"
            name="promo-code"
            className="promo-input"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            autoComplete="off"
          />
          <Button
            children={"Submit"}
            style={{
              width: "30%",
              fontSize: "0.75rem",
              padding: "6px 12px",
              marginLeft: "5px",
            }}
            onClick={handlePromoCode}
          />
        </div>
      </form>
      <div className="calculation">
        <p>
          <span>Shipping: </span>
          <span>TBD</span>
        </p>
        <p>
          <span>Discount: </span>
          <span>{promo ? "-50kr" : "TBD"}</span>
        </p>
        <p>
          <span>Tax: </span>
          <span>25%</span>
        </p>
        <p>
          <span>
            <strong>Estimated Total: </strong>
          </span>
          <span>0</span>
        </p>
        <Button children={"Pay"} style={{ width: "100%", marginTop: "5px" }} />
      </div>
    </div>
  );
}
