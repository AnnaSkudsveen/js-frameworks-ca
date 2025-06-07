import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useStoreCart from "../components/cartStore";
import CheckPrice from "../components/price";

/**
 * Product component fetches and displays the details of a single product.
 *
 * This component:
 * - Fetches product details using the product ID from the URL.
 * - Displays the product's title, description, image, and price.
 * - Allows the user to add the product to the cart.
 * - Displays the product's reviews (if any).
 *
 * @component
 * @example
 * // Renders a product's details based on the ID in the URL
 * <Product />
 *
 * @returns {JSX.Element} A product page with details, pricing, reviews, and an option to add the product to the cart.
 */
function Product() {
  const [product, setProduct] = useState(null);
  let { id } = useParams();
  const { addToCart } = useStoreCart();

  useEffect(() => {
    /**
     * Fetches the product data from the API based on the provided product ID.
     *
     * @param {string} url - The API URL for the product data.
     */
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
