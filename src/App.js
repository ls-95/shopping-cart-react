import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.js";
import Home from "./pages/Home.js";
import Cart from "./pages/Cart.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
