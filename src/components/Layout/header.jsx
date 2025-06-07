import { NavLink } from "react-router-dom";
import useStoreCart from "../cartStore";
import logo from "/images/shopping_cart.png";

/**
 * Navbar component that provides navigation links for the site.
 * Includes:
 * - Link to home page.
 * - Link to cart with a dynamic item count.
 * - Link to contact page.
 *
 * Utilizes global cart state from `useStoreCart` to display the number of items.
 *
 * @component
 * @example
 * return (
 *   <Navbar />
 * )
 *
 * @returns {JSX.Element} The navigation bar element.
 */
function Navbar() {
  const { cart } = useStoreCart();
  const totalItems = cart.reduce(
    (total, product) => total + (product.quantity || 0),
    0
  );
  return (
    <nav id="navbar">
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink>
      <NavLink to="/cart">
        <div className="cartIconContainer">
          <img src={logo} alt="Shopping Cart" style={{ height: "2rem" }} />
          <div className="cartCount">{totalItems}</div>
        </div>
      </NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}

export default Navbar;
