import "./CartCalculation.css";
import Button from "./Button";
import TotalPrice from "./TotalPrice";
import DeliveryOptions from "./DeliveryOptions";
import PromoCode from "./PromoCode";
import { useState } from "react";

export default function CartCalculation({ totalPrice }) {
  const [promo, setPromo] = useState("");
  const [deliveryOption, setDeliveryOption] = useState("");

  return (
    <form>
      <div className="cart-calculation">
        <PromoCode promo={promo} setPromo={setPromo} />
        <DeliveryOptions setDeliveryOption={setDeliveryOption} />
        <div className="calculation">
          <p>
            <span>Shipping: </span>
            <span>{deliveryOption === "" ? "TBD" : `${deliveryOption}kr`}</span>
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
            <span>
              <TotalPrice />
            </span>
          </p>
          <Button
            type={"submit"}
            children={"Pay"}
            style={{ width: "100%", marginTop: "15px" }}
          />
        </div>
      </div>
    </form>
  );
}
