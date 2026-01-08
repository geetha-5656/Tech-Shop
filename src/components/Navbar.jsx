// import React from 'react';
// import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';

// const Navbar = () => {
//   return (
//     <nav className=" bg-black overflow-hidden p-4 flex justify-between items-center">
//       <div className="text-white text-2xl font-bold ms-11">
//         Tech-Shop
//       </div>
//       <div className="flex space-x-11 me-11">
//         <FaSearch className="text-white text-xl  cursor-pointer" />
//         <FaShoppingCart className="text-white text-xl cursor-pointer" />
//         <FaUser className="text-white text-xl cursor-pointer" />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [activePanel, setActivePanel] = useState(null); 
  // "search" | "user" | null

  const navigate = useNavigate();

  return (
    <>
      {/* FIXED NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-black px-11 py-4 flex justify-between items-center z-50">
        
        {/* LOGO */}
        <div
          className="text-white text-xl font-bold cursor-pointer"
          onClick={() => {
            setActivePanel(null);
            navigate("/");
          }}
        >
          Tech-Shop
        </div>

        {/* ICONS */}
        <div className="flex gap-8 text-white text-lg">
          {/* SEARCH */}
          <FaSearch
            className="cursor-pointer"
            onClick={() =>
              setActivePanel(activePanel === "search" ? null : "search")
            }
          />

          {/* CART */}
          <FaShoppingCart
            className="cursor-pointer"
            onClick={() => {
              setActivePanel(null);
              navigate("/cart");
            }}
          />

          {/* USER */}
          <FaUser
            className="cursor-pointer"
            onClick={() =>
              setActivePanel(activePanel === "user" ? null : "user")
            }
          />
        </div>
      </nav>

      {/* SEARCH BAR (SAME PAGE OVERLAY) */}
      {activePanel === "search" && (
        <div className="fixed top-[64px] left-0 w-full z-40">
          <SearchBar />
        </div>
      )}

      {/* USER DROPDOWN */}
      {activePanel === "user" && (
        <div className="fixed top-[64px] right-11 w-64 bg-[#111] border border-gray-700 p-4 text-gray-300 rounded z-40">
          <h4 className="text-white font-medium">Hello!</h4>
          <p className="text-sm mb-4">
            Access account and manage orders
          </p>

          <button className="w-full border border-gray-500 py-2 mb-3 hover:bg-gray-800 transition">
            Login / Signup
          </button>

          <p className="text-xs text-gray-400">Please Login</p>
        </div>
      )}

      {/* SPACE FOR FIXED NAVBAR */}
      <div className="h-[64px]" />
    </>
  );
};

export default Navbar;
