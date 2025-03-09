import React from "react";
import ProductCard from "../components/ProductCard.jsx";
import SearchBar from "../components/SearchBar.jsx";

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
