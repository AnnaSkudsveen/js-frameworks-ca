import { Link } from "react-router-dom";

/**
 * Footer component for the application.
 *
 * @component
 * @example
 * return (
 *   <Footer />
 * )
 *
 * @returns {JSX.Element} A section containing a contact link and current year copyright.
 */
function Footer() {
  return (
    <section>
      <Link to="/contact">Contact</Link>
      <p>© {new Date().getFullYear()} My E-Commerce Store</p>
    </section>
  );
}

export default Footer;
