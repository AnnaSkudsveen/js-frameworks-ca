import React from "react";
import useStoreCart from "../components/store/cartStore";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart } = useStoreCart();
  const totalCartValue = cart.reduce(
    (total, product) => total + product.price * (product.quantity || 1),
    0
  );
  return (
    <div>
      <h1>In your cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map(function (product) {
            return (
              <div key={product.id}>
                <h2>{product.title}</h2>
                <p>Price: {product.price * product.quantity || 1} kr</p>
                <p>Quantity: {product.quantity || 1}</p>
                <button
                  onClick={function () {
                    removeFromCart(product.id);
                  }}
                >
                  Remove from cart
                </button>
              </div>
            );
          })}
          <h2>Total: {totalCartValue}</h2>
          <Link to="/checkout">Check out</Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
