import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/sections/NavBar.js";
import Home from "./pages/Home.js";
import Cart from "./pages/Cart.js";
import Footer from "./components/sections/Footer.js";
import { CartProvider } from "./components/CartContext.js";
import { useRef } from "react";
import "./App.css";
import Payment from "./pages/Payment.js";

function App() {
  const handleScrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const footerRef = useRef(null);
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<Home handleScrollToFooter={handleScrollToFooter} />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
          <Footer innerRef={footerRef} />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
