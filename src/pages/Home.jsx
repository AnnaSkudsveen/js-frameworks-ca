import React from "react";
import ProductCard from "../components/ProductCard.jsx";
import SearchBar from "../components/SearchBar.jsx";

/**
 * Home component renders the main page of the website, displaying all products.
 *
 * The component includes:
 * - A `SearchBar` for searching products by title.
 * - A list of all products rendered through `ProductCard` components.
 *
 * @component
 * @returns {JSX.Element} Home page displaying products and search functionality.
 */
function Home() {
  return (
    <section className="bodySection">
      <SearchBar />
      <h1>All Products</h1>
      <section className="Products">
        <ProductCard />
      </section>
    </section>
  );
}

export default Home;
