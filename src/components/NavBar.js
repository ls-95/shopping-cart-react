import { Link } from "react-router-dom";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faOtter,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div>
        <Link className={"link-styles"} to="/">
          <FontAwesomeIcon icon={faHouse} /> Home
        </Link>
      </div>
      <div className="shop-name">
        <FontAwesomeIcon icon={faOtter} /> Otter Bay Co.
      </div>
      <div>
        <Link className={"link-styles"} to="/cart">
          <FontAwesomeIcon icon={faShoppingCart} /> Cart
        </Link>
      </div>
    </nav>
  );
}
