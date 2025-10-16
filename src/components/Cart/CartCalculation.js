import "./CartCalculation.css";
import Button from "../Button";
import TotalPrice from "./TotalPrice";
import DeliveryOptions from "./DeliveryOptions";
import PromoCode from "./PromoCode";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CartCalculation({ totalPrice }) {
  const navigate = useNavigate();
  const [promo, setPromo] = useState("");
  const [deliveryOption, setDeliveryOption] = useState("");

  const handlePayment = (e) => {
    e.preventDefault();
    console.log(totalPrice);
    if (!totalPrice || totalPrice === 0) {
      alert(
        "You have no items in your cart, ADD SOME!! please 🙂 give me your fake doollars"
      );
      return;
    } else {
      navigate("/payment");
    }
  };

  return (
    <form onSubmit={handlePayment} name="payment">
      <div className="cart-calculation">
        <PromoCode promo={promo} setPromo={setPromo} />
        <DeliveryOptions
          setDeliveryOption={setDeliveryOption}
          totalPrice={totalPrice}
        />
        <div className="calculation">
          <p>
            <span>Shipping: </span>
            <span>
              {deliveryOption === ""
                ? "TBD"
                : totalPrice >= 800
                ? "Free"
                : `${deliveryOption}kr`}
            </span>
          </p>
          <p>
            <span>Discount: </span>
            <span>{promo ? "-50kr" : "TBD"}</span>
          </p>
          <p>
            <span>Tax (included): </span>
            <span>25%</span>
          </p>
          <p>
            <span>
              <strong>Estimated Total: </strong>
            </span>
            <span>
              <strong className="total-price">
                <TotalPrice
                  deliveryPrice={deliveryOption}
                  totalPrice={totalPrice}
                  promo={promo}
                />
                kr
              </strong>
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
