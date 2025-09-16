import "./Cart.css";
import { useCart } from "../components/CartContext";
import CartCalculation from "../components/CartCalculation";

export default function Cart() {
  const { cartItems } = useCart();

  return (
    <div className="cart-container">
      <div className="inner-div">
        <h1 className="cart-title">My Cart</h1>
        <div className="cart-layout">
          <div className="cart-items">
            {cartItems.length < 1 && <h3>Your cart is empty!</h3>}
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
          <div>
            <CartCalculation />
          </div>
        </div>
      </div>
    </div>
  );
}
