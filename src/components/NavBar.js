import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "../pages/Home.js";
import Cart from "../pages/Cart.js";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faOtter,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  return (
    <BrowserRouter>
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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}
