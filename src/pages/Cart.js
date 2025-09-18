import "./Cart.css";
import { useCart } from "../components/CartContext";
import CartCalculation from "../components/CartCalculation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function Cart() {
  const { cartItems } = useCart();
  const { updateQuantity } = useCart();
  const { removeFromCart } = useCart();

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
                  className="cart-image"
                />
                <div className="cart-information">
                  <div className="cart-adjustments">
                    <div className="cart-quantity">
                      <h5 className="title">{items.title}</h5>
                    </div>
                    <div className="cart-quantity-delete-button">
                      <input
                        type="number"
                        name="quantity"
                        onChange={updateQuantity}
                      />
                      <button className="delete-btn" onClick={removeFromCart}>
                        <FontAwesomeIcon icon={faTrashCan} />
                      </button>
                    </div>
                  </div>

                  <p className="price">{Math.round(items.price * 10)}kr</p>
                </div>
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
