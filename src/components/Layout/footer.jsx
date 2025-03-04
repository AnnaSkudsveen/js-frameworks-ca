import { Link } from "react-router-dom";
function Footer() {
  return (
    <section>
      <Link to="/contact">Contact</Link>
      <p>© {new Date().getFullYear()} My E-Commerce Store</p>
    </section>
  );
}

export default Footer;
