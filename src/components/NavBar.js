import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "../pages/Home.js";
import Cart from "../pages/Cart.js";

export default function NavBar() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/cart">Cart</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}
