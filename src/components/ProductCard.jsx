import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CheckPrice from "../components/price";
import GetData from "./GetData";

/**
 * Component that fetches and displays a list of product cards.
 * Each card shows an image, title, price (including discount logic),
 * and a link to the product detail page.
 *
 * @component
 * @returns {JSX.Element} A list of product cards or a loading message.
 */

function ProductCard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const data = await GetData();
      setProducts(data);
    }
    getProducts();
  }, []);

  if (products.length === 0) {
    return <p>Loading products...</p>;
  }
  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <img
            src={product.image.url}
            alt={product.image.alt}
            className="productImage"
          />
          <h2>{product.title}</h2>
          <CheckPrice product={product} />
          <Link to={`/product/${product.id}`}>View product</Link>
        </div>
      ))}
    </>
  );
}

export default ProductCard;
