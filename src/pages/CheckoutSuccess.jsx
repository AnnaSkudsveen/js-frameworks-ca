import useStoreCart from "../components/cartStore";
import { useNavigate } from "react-router-dom";

/**
 * CheckoutSuccess component displays a summary of the purchased items
 * and clears the cart upon exiting.
 *
 * - Shows cart items with their total price and quantity.
 * - If cart is already empty, a message is shown.
 * - Includes a button to return to the home page and clear the cart.
 *
 * @component
 * @returns {JSX.Element} Rendered checkout success page.
 */

function CheckoutSuccess() {
  const { cart, clearCart } = useStoreCart();
  const navigate = useNavigate();

  /**
   * Clears the cart and redirects the user to the home page.
   */
  function handleHome() {
    clearCart();
    navigate("/");
  }

  return (
    <div>
      <h1>Checkout Successful</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((product) => {
          return (
            <div key={product.id}>
              <h2>{product.title}</h2>
              <p>Total Price: {product.price * (product.quantity || 1)} kr</p>
              <p>Quantity: {product.quantity || 1}</p>
            </div>
          );
        })
      )}

      <button onClick={handleHome}>Exit</button>
    </div>
  );
}

export default CheckoutSuccess;
