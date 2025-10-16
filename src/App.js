import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/sections/NavBar.js";
import Home from "./pages/Home.js";
import Cart from "./pages/Cart.js";
import Footer from "./components/sections/Footer.js";
import { CartProvider } from "./components/Cart/CartContext.js";
import { useRef, useState, useEffect } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faCheck } from "@fortawesome/free-solid-svg-icons";
import Payment from "./pages/Payment.js";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [showPromoModal, setShowPromoModal] = useState(false);
  const [email, setEmail] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [copied, setCopied] = useState(false);

  const handleScrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const footerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPromoModal(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setShowPromoModal(false);
  };

  const handleGetDiscount = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email)) {
      setPromoCode("WELCOME50");
    } else {
      alert("Please enter a valid email address");
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(promoCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <ScrollToTop />
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
      {showPromoModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>
              ×
            </button>
            <h2>Get 50kr Off!</h2>
            {!promoCode ? (
              <>
                <p>Enter your email for 50kr off your first order</p>
                <input
                  type="email"
                  placeholder="Enter your email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="promo-btn" onClick={handleGetDiscount}>
                  Get Discount
                </button>
              </>
            ) : (
              <>
                <p>Here's your promo code:</p>
                <div className="promo-code-container">
                  <div className="promo-code-display">{promoCode}</div>
                  <button className="copy-btn" onClick={handleCopyCode}>
                    {copied ? (
                      <FontAwesomeIcon icon={faCheck} />
                    ) : (
                      <FontAwesomeIcon icon={faCopy} />
                    )}
                  </button>
                </div>
                <p>Use this code at checkout!</p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
