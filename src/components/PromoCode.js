import { useState } from "react";
import Button from "./Button";
import "./CartCalculation.css";

export default function PromoCode({ setPromo }) {
  const [input, setInput] = useState("");
  const [correctPromoCode, setCorrectPromoCode] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handlePromoCode = (e) => {
    e.preventDefault();

    if (input.length === 0) {
      alert("Please enter a promo code!");
      setCorrectPromoCode(false);
      setShowMessage(false);
      return;
    } else if (input === "WELCOME50") {
      setPromo(input);
      setInput("");
      setCorrectPromoCode(true);
      setTimeout(() => setShowMessage(true), 50);
    } else {
      alert("Please enter a valid promo code!");
      setCorrectPromoCode(false);
      setShowMessage(false);
      return;
    }
  };
  return (
    <>
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
      {correctPromoCode && (
        <p className={`promo-code-text ${showMessage ? "show" : ""}`}>
          <strong>"WELCOME50"</strong> has been added!
        </p>
      )}
    </>
  );
}
