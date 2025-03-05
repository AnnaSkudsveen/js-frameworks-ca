import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Product() {
  const [product, setProduct] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    async function getProduct(url) {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setProduct(json.data);
      } catch (error) {
        console.error("Error: ", error);
      }
    }
    getProduct(`https://v2.api.noroff.dev/online-shop/${id}`);
  }, [id]);

  if (!product) {
    return <p>Loading products...</p>;
  }

  console.log(product);

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <img src={product.image.url} alt={product.image.alt} />
      <p>Price: {product.price} kr</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
