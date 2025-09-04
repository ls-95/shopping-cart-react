import { useState, useEffect } from "react";
import "./Item.css";

export default function Item({ ref }) {
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
    <div className="product-container" ref={ref}>
      {products.map((product) => (
        <div key={product.id} className="item">
          <img
            src={product.image}
            alt={product.description}
            className="image"
          />
          <h3 className="title">{product.title}</h3>
          <p className="price">{product.price}</p>
        </div>
      ))}
    </div>
  );
}
