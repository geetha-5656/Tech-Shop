import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const SearchBar = ({ onCancel, onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() !== "") {
      onSearch(query);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center justify-center w-full px-2">
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

        {/* Cancel idon*/}
        <FaTimes
          className="text-gray-500 cursor-pointer hover:text-red-500 ml-2 text-lg sm:text-xl"
          onClick={onCancel}
        />
      </div>
    </div>
  );
};

export default SearchBar;