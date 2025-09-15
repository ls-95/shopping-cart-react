import "./Cart.css";
import { useCart } from "../components/CartContext";

export default function Cart() {
  const { cartItems } = useCart();
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
                <p className="price">{items.price}</p>
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
                />
                <button className="promo-button">Submit</button>
              </div>
            </form>
            <div className="calculation">
              <p>
                <span>Shipping: </span>
                <span>TBD</span>
              </p>
              <p>
                <span>Discount: </span>
                <span>0</span>
              </p>
              <p>
                <span>Tax: </span>
                <span>TBD</span>
              </p>
              <p>
                <span>
                  <strong>Estimated Total: </strong>
                </span>
                <span>0</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
