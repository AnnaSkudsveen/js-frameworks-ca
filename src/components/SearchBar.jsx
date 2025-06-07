import React, { useState, useEffect } from "react";
import GetData from "./GetData";
import { Link } from "react-router-dom";

/**
 * A search bar component that fetches products and displays matching suggestions.
 *
 * Users can type a query into the input, and matching product titles will be shown as links.
 * Clicking a suggestion navigates to the product's detail page.
 *
 * @component
 * @returns {JSX.Element} A search input with auto-suggestions for product titles.
 */
function SearchBar() {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    /**
     * Fetches all products for search suggestions.
     * Uses GetData to retrieve product list.
     */
    async function fetchProducts() {
      try {
        setLoading(true);
        const data = await GetData();
        setSuggestions(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const filteredSuggestions = suggestions.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="SearchBar">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
      />
      {loading && <p>Loading...</p>}
      {search && filteredSuggestions.length > 0 && (
        <div>
          {filteredSuggestions.map((product) => (
            <div key={product.id}>
              <Link to={`/product/${product.id}`}>
                <div className="SearchBarLink">
                  <img className="searchImg" src={product.image.url} alt="" />
                  <h2>{product.title}</h2>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
