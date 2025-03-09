import { NavLink } from "react-router-dom";
import useStoreCart from "../cartStore";
import logo from "/images/shopping_cart.png";

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
