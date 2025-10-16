import "./Cart.css";
import { useCart } from "../components/Cart/CartContext";
import CartItems from "../components/Cart/CartItems";
import CartCalculation from "../components/Cart/CartCalculation";
import CartTotal from "../components/Cart/CartItemsTotal";

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
          <hr />
          <div>
            <CartCalculation totalPrice={totalPrice} />
          </div>
        </div>
      </div>
    </div>
  );
}
