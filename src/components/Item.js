import { useState, useEffect } from "react";
import "./Item.css";
import Button from "./Button";

export default function Item({ innerRef, handleScrollToItems }) {
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
            <Button children={"Add To Cart"} />
          </div>
        ))}
      </div>
      <div className="back-to-top-button">
        <Button children={"Back to top"} onClick={handleScrollToItems} />
      </div>
    </div>
  );
}
