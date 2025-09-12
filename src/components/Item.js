import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContent";
import "./Item.css";
import Button from "./Button";

export default function Item({ innerRef, handleScrollToItems }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    console.log(product);
  };

  const handleNavigateToCart = () => {
    navigate("/cart");
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container" ref={innerRef}>
      <h2>Shop</h2>
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="item" id={product.id}>
            <div className="image-container">
              <img
                src={product.image}
                alt={product.description}
                className="image"
              />
            </div>
            <div className="item-information">
              <h3 className="title">{product.title}</h3>
              <p className="price">${product.price}</p>
            </div>
            <div className="item-button-container"></div>
            <Button
              children={"Add To Cart"}
              onClick={() => handleAddToCart(product)}
            />
          </div>
        ))}
      </div>
      <div className="items-button">
        <span>
          <Button children={"Back to top"} onClick={handleScrollToItems} />
        </span>
        <span>
          <Button children={"View Cart"} onClick={handleNavigateToCart} />
        </span>
      </div>
    </div>
  );
}
