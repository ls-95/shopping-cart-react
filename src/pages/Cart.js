import "./Cart.css";
import { useCart } from "../components/CartContext";
import CartItems from "../components/CartItems";
import CartCalculation from "../components/CartCalculation";
import CartTotal from "../components/CartItemsTotal";

export default function Cart() {
  const { cartItems } = useCart();

  const totalPrice = cartItems.reduce((sum, item) => {
    return sum + item.quantity * Math.round(item.price * 10);
  }, 0);

  return (
    <div className="cart-container">
      <div className="inner-div">
        <h2 className="cart-title">My Cart</h2>
        <div className="cart-layout">
          <div className="cart-items">
            <CartItems />
            <CartTotal totalPrice={totalPrice} />
          </div>
          <div>
            <CartCalculation totalPrice={totalPrice} />
          </div>
        </div>
      </div>
    </div>
  );
}
