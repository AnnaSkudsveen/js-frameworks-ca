import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useStoreCart from "../components/cartStore";
import CheckPrice from "../components/price";

function Product() {
  const [product, setProduct] = useState(null);
  let { id } = useParams();
  const { addToCart } = useStoreCart();

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

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <img src={product.image.url} alt={product.image.alt} />
      <CheckPrice product={product} />
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <div>
        <h2>Reviews</h2>
        {product.reviews.length > 0 ? (
          product.reviews.map((review) => (
            <div>
              <h3>{review.username}</h3>
              <p>{review.description}</p>
              <p>{review.rating}/5</p>
            </div>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
    </div>
  );
}

export default Product;
