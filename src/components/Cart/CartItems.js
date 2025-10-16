import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "./CartContext";
import "../../pages/Cart.css";

export default function CartItems() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity >= 1) {
      updateQuantity(itemId, newQuantity);
    }
  };

  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId);
  };

  if (cartItems.length < 1) {
    return <h3 className="empty-cart-text">Your cart is empty!</h3>;
  }

  return (
    <>
      {cartItems.map((item) => (
        <div key={item.id} className="item-container">
          <img src={item.image} alt={item.description} className="cart-image" />
          <div className="cart-information">
            <div className="cart-adjustments">
              <div className="cart-quantity">
                <p className="title">{item.title}</p>
              </div>
              <div className="cart-quantity-delete-button">
                <input
                  type="number"
                  name="quantity"
                  min={1}
                  onChange={(e) => {
                    handleQuantityChange(item.id, parseInt(e.target.value));
                  }}
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
            <p className="price">
              {item.quantity * Math.round(item.price * 10)}kr
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
