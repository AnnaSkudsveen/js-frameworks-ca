import React, { useState, useEffect } from "react";
import GetData from "./GetData";
import { Link } from "react-router-dom";

function SearchBar() {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
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
