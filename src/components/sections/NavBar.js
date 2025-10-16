import { Link } from "react-router-dom";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faOtter,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../Cart/CartContext";

export default function NavBar() {
  const { totalQuantity } = useCart();
  return (
    <nav className="navbar">
      <div>
        <Link className={"link-styles"} to="/">
          <FontAwesomeIcon icon={faHouse} /> Home
        </Link>
      </div>
      <div className="shop-name">
        <FontAwesomeIcon icon={faOtter} />{" "}
        <span className="shop-name-text">Otter Bay Co.</span>
      </div>
      <div>
        <Link className={"link-styles"} to="/cart">
          <FontAwesomeIcon icon={faShoppingCart} /> Cart
          {totalQuantity > 0 && (
            <span className="cart-count">{totalQuantity}</span>
          )}
        </Link>
      </div>
    </nav>
  );
}
