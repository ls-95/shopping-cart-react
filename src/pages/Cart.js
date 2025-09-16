import "./Cart.css";
import { useCart } from "../components/CartContext";
import { useState } from "react";
import CartCalculation from "../components/CartCalculation";

export default function Cart() {
  const { cartItems } = useCart();
  const [input, setInput] = useState("");
  const [promo, setPromo] = useState("");

  return (
    <div className="cart-container">
      <div className="inner-div">
        <h1 className="cart-title">My Cart</h1>
        <div className="cart-layout">
          <div className="cart-items">
            {cartItems.map((items) => (
              <div key={items.id} className="item-container" id="items.id">
                <img
                  src={items.image}
                  alt={items.description}
                  className="image"
                />
                <h5 className="title">{items.title}</h5>
                <p className="price">{Math.round(items.price * 10)}kr</p>
              </div>
            ))}
          </div>
          <div className="cart-calculation">
            <form>
              <label>Enter Promo Code</label>
              <div className="promo-code-container">
                <input
                  type="text"
                  placeholder="Promo Code"
                  id="promo-code"
                  name="promo-code"
                  className="promo-input"
                  onChange={(e) => setInput(e.target.value)}
                  value={input}
                />
                <button
                  className="promo-button"
                  onClick={(e) => {
                    e.preventDefault();
                    alert(`Promo Code: ${input} had been added`);
                    setPromo(input);
                    setInput("");
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
            <CartCalculation promo={promo} />
          </div>
        </div>
      </div>
    </div>
  );
}
