import React from "react";
import useStoreCart from "../components/store/cartStore";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart } = useStoreCart();
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
                <p>Total Price: {product.price * product.quantity} kr</p>
                <p>Quantity: {product.quantity}</p>
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
          <Link to="/checkout">Check out</Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
