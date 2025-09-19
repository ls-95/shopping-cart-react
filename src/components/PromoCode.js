import { useState } from "react";
import Button from "./Button";

export default function PromoCode({ promo, setPromo }) {
  const [input, setInput] = useState("");

  const handlePromoCode = (e) => {
    e.preventDefault();
    setPromo(input);
    setInput("");
    if (input.length === 0) {
      alert("Please enter a promo code!");
      return;
    } else {
      setPromo(input);
      setInput("");
      alert(`Promo Code: ${input} had been added`);
    }
  };
  return (
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
            marginTop: "5px",
          }}
          onClick={handlePromoCode}
        />
      </div>
    </form>
  );
}
