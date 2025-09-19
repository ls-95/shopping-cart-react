import "./Cart.css";
import { useCart } from "../components/CartContext";
import CartCalculation from "../components/CartCalculation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function Cart() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity >= 1) {
      updateQuantity(itemId, newQuantity);
    }
  };

  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId);
  };

  return (
    <div className="cart-container">
      <div className="inner-div">
        <h1 className="cart-title">My Cart</h1>
        <div className="cart-layout">
          <div className="cart-items">
            {cartItems.length < 1 && (
              <h3 className="empty-cart-text">Your cart is empty!</h3>
            )}
            {cartItems.map((item) => (
              <div key={item.id} className="item-container">
                <img
                  src={item.image}
                  alt={item.description}
                  className="cart-image"
                />
                <div className="cart-information">
                  <div className="cart-adjustments">
                    <div className="cart-quantity">
                      <h5 className="title">{item.title}</h5>
                    </div>
                    <div className="cart-quantity-delete-button">
                      <input
                        type="number"
                        name="quantity"
                        min={1}
                        onChange={(e) =>
                          handleQuantityChange(
                            item.id,
                            parseInt(e.target.value)
                          )
                        }
                        value={item.quantity || 1}
                      />
                      <button
                        className="delete-btn"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        <FontAwesomeIcon icon={faTrashCan} />
                      </button>
                    </div>
                  </div>

                  <p className="price">{Math.round(item.price * 10)}kr</p>
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
