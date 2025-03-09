import React from "react";
import useStoreCart from "../components/store/cartStore";
import { useNavigate } from "react-router-dom";

function CheckoutSuccess() {
  const { cart, clearCart } = useStoreCart();
  const navigate = useNavigate();

  function handleHome() {
    clearCart();
    navigate("/");
  }

  return (
    <div>
      <h1>Checkout Successful</h1>
      {cart.map(function (product) {
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>Total Price: {product.price * product.quantity || 1} kr</p>
          <p>Quantity: {product.quantity || 1}</p>
        </div>;
      })}
      <button onClick={handleHome}>Exit</button>
    </div>
  );
}

export default CheckoutSuccess;
