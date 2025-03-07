import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CheckPrice from "../components/price";
// import { Button } from "../components/Button";

function ProductCard() {
  const url = "https://v2.api.noroff.dev/online-shop/";

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setProducts(json.data);
      } catch (error) {
        console.error("Error: ", error);
      }
    }
    getData();
  }, []);

  if (!products) {
    return <p>Loading products...</p>;
  }

  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <img
            src={product.image.url}
            alt={product.image.alt}
            className="productImage"
          />
          <CheckPrice product={product} />
          <Link to={`/product/${product.id}`}>View product</Link>
        </div>
      ))}
    </>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <ProductCard />
    </div>
  );
}

export default Home;
