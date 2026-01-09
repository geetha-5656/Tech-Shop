
import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import SearchBar from "./SearchBar";
import AuthModal from "./AuthModal";

const Navbar = () => {
  const [activePanel, setActivePanel] = useState(null);
  const [tooltip, setTooltip] = useState({ show: false, text: "", position: 0 });
  const navigate = useNavigate();
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const closeAll = () => setActivePanel(null);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full h-16 bg-black px-11 py-4 flex justify-between items-center z-50 shadow-md">
        
        <div
          className="text-white text-xl font-bold cursor-pointer"
          onClick={() => {
            closeAll();
            navigate("/");
          }}
        >
          Tech-Shop
        </div>

        {/* ICONS */}
        <div className="flex gap-8 text-white text-lg relative">
          <div
            className="relative flex flex-col items-center"
            onMouseEnter={() => setTooltip({ show: true, text: "Search", position: 0 })}
            onMouseLeave={() => setTooltip({ show: false, text: "", position: 0 })}
          >
            <FaSearch
              className="cursor-pointer hover:text-gray-300"
              onClick={() =>
                setActivePanel(activePanel === "search" ? null : "search")
              }
            />
            {tooltip.show && tooltip.position === 0 && (
              <div className="absolute top-8 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg z-50 whitespace-nowrap">
                {tooltip.text}
              </div>
            )}
          </div>

          <div
            className="relative flex flex-col items-center"
            onMouseEnter={() => setTooltip({ show: true, text: "Cart", position: 1 })}
            onMouseLeave={() => setTooltip({ show: false, text: "", position: 0 })}
          >
            <FaShoppingCart
              className="cursor-pointer hover:text-gray-300"
              onClick={() => {
                closeAll();
                navigate("/cart");
              }}
            />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
            {tooltip.show && tooltip.position === 1 && (
              <div className="absolute top-8 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg z-50 whitespace-nowrap">
                {tooltip.text}
              </div>
            )}
          </div>

          <div
            className="relative flex flex-col items-center"
            onMouseEnter={() => setTooltip({ show: true, text: "Account", position: 2 })}
            onMouseLeave={() => setTooltip({ show: false, text: "", position: 0 })}
          >
            <FaUser
              className="cursor-pointer hover:text-gray-300"
              onClick={() =>
                setActivePanel(activePanel === "auth" ? null : "auth")
              }
            />
            {tooltip.show && tooltip.position === 2 && (
              <div className="absolute top-8 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg z-50 whitespace-nowrap">
                {tooltip.text}
              </div>
            )}
          </div>
        </div>
      </nav>

    
       {activePanel === "search" && (
        <div className="fixed top-16 left-0 w-full z-40">
          <SearchBar />
        </div>
      )}

      {/* LOGIN / SIGNUP  */}
      {activePanel === "auth" && (
        <AuthModal close={() => setActivePanel(null)} />
      )}

     
      <div className="h-16" />
    </>
  );
};

export default Navbar;

