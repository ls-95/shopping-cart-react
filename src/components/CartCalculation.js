import "./CartCalculation.css";
import { useState } from "react";
import Button from "./Button";

export default function CartCalculation() {
  const [input, setInput] = useState("");
  const [promo, setPromo] = useState("");
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
            style={{ width: "30%", fontSize: "0.75rem", padding: "6px 12px" }}
            onClick={(e) => {
              e.preventDefault();
              alert(`Promo Code: ${input} had been added`);
              setPromo(input);
              setInput("");
            }}
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
        <Button children={"Pay"} style={{ width: "100%" }} />
      </div>
    </div>
  );
}
