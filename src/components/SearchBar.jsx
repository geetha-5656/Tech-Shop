import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import productsData from "../data/productsData";

const SearchBar = ({ onCancel, onSearch }) => {
  const [query, setQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (query.trim() !== "") {
      const filtered = productsData.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
      setShowDropdown(true);
    } else {
      setFilteredProducts([]);
      setShowDropdown(false);
    }
  }, [query]);

  const handleSearch = () => {
    if (query.trim() !== "") {
      onSearch(query);
      setShowDropdown(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleProductSelect = (product) => {
    onSearch(product.title);
    setShowDropdown(false);
    setQuery("");
  };

  return (
    <div className="flex items-center justify-center w-full px-2 relative">
      <div className="flex items-center bg-white rounded-md shadow-md w-full sm:w-2/3 max-w-2xl px-3 py-2">
        {/* Input */}
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyPress}
          className="flex-1 outline-none px-2 text-gray-700 text-sm sm:text-base"
          autoFocus
        />

        {/* Search button */}
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 ml-2 text-sm sm:text-base cursor-pointer"
        >
          Search
        </button>

        {/* Cancel icon*/}
        <FaTimes
          className="text-gray-500 cursor-pointer hover:text-red-500 ml-2 text-lg sm:text-xl"
          onClick={onCancel}
        />
      </div>

      {/* Dropdown */}
      {showDropdown && filteredProducts.length > 0 && (
        <div className="absolute top-full mt-1 w-full sm:w-2/3 max-w-2xl bg-white border border-gray-300 rounded-md shadow-lg z-50 max-h-60 overflow-y-auto">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => handleProductSelect(product)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
            >
              {product.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;