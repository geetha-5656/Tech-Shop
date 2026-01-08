import React, { useState } from "react";


const SearchBar = () => {
  return (
    <div className="bg-[#111] border-t border-gray-700 px-11 py-4">
      <input
        type="text"
        placeholder="Search for products..."
        className="w-full bg-black border border-gray-600 px-4 py-2 text-white outline-none"
      />
    </div>
  );
};

export default SearchBar;