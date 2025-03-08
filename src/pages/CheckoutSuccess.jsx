import React, { useEffect } from "react";
import useStoreCart from "../components/store/cartStore";
import { useNavigate } from "react-router-dom";

function CheckoutSuccess() {
  const { cart, clearCart } = useStoreCart();
  const navigate = useNavigate();
  useEffect(() => {
    clearCart(); // Clear the cart immediately after the page loads
    navigate("/"); // Navigate to home page after clearing the cart
  }, [clearCart, navigate]);

  return (
    <div>
      <h1>Checkout Successful</h1>
      {cart.map(function (product) {
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>Total Price: {product.price * product.quantity} kr</p>
          <p>Quantity: {product.quantity}</p>
        </div>;
      })}
    </div>
  );
}

export default CheckoutSuccess;
