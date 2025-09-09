import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.js";
import Home from "./pages/Home.js";
import Cart from "./pages/Cart.js";
import Footer from "./components/Footer.js";
import { useRef } from "react";
import "./App.css";

function App() {
  const handleScrollToItems = () => {
    itemRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const itemRef = useRef(null);
  const footerRef = useRef(null);
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                handleScrollToItems={handleScrollToItems}
                handleScrollToFooter={handleScrollToFooter}
                itemRef={itemRef}
              />
            }
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer innerRef={footerRef} />
      </BrowserRouter>
    </div>
  );
}

export default App;
