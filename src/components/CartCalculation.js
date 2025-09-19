import "./CartCalculation.css";
import Button from "./Button";
import PromoCode from "./PromoCode";
import { useState } from "react";

export default function CartCalculation() {
  const [promo, setPromo] = useState("");

  return (
    <div className="cart-calculation">
      <PromoCode promo={promo} setPromo={setPromo} />
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
        <Button children={"Pay"} style={{ width: "100%", marginTop: "15px" }} />
      </div>
    </div>
  );
}
