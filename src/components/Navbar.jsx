
import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import SearchBar from "./SearchBar";
import AuthModal from "./AuthModal";
import productsData from "../data/productsData";

const Navbar = () => {
  const [activePanel, setActivePanel] = useState(null);
  const navigate = useNavigate();
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full h-16 bg-black px-6 md:px-11 flex items-center justify-between z-50 shadow-md">

        {/* LOGO */}
        <div
          onClick={() => {
            setActivePanel(null);
            navigate("/");
          }}
          className="text-white text-xl font-bold cursor-pointer"
        >
          Tech-Shop
        </div>

        {/* SEARCH BAR */}
        {activePanel === "search" && (
          <div className="absolute left-1/2 -translate-x-1/2 w-[70%] md:w-[40%]">
            <SearchBar
              onCancel={() => setActivePanel(null)}
              onSearch={(query) => {
                const product = productsData.find((p) =>
                  p.title.toLowerCase().includes(query.toLowerCase())
                );
                navigate(product ? `/product/${product.id}` : "/products");
                setActivePanel(null);
              }}
            />
          </div>
        )}

        {/* ICONS */}
        <div className="flex items-center gap-6 text-white text-lg relative">

          {/* SEARCH ICON */}
          <FaSearch
            className="cursor-pointer hover:text-gray-300"
            onClick={() =>
              setActivePanel(activePanel === "search" ? null : "search")
            }
          />

          {/* CART ICON */}
          <div className="relative">
            <FaShoppingCart
              className="cursor-pointer hover:text-gray-300"
              onClick={() => {
                setActivePanel(null);
                navigate("/cart");
              }}
            />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs h-5 w-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </div>

          {/* USER ICON */}
          <div className="relative">
            <FaUser
              className="cursor-pointer hover:text-gray-300"
              onClick={() =>
                setActivePanel(activePanel === "account" ? null : "account")
              }
            />

            {/* ACCOUNT DROPDOWN */}
            {activePanel === "account" && (
              <div className="absolute right-0 top-9 w-64 bg-[#0e0e0e] border border-gray-700 rounded-md shadow-lg p-4">
                <p className="text-white text-sm font-semibold mb-1">
                  Hello!
                </p>
                <p className="text-gray-400 text-xs mb-4">
                  Access account and manage orders
                </p>

                <button
                  onClick={() => setActivePanel("auth")}
                  className="w-full border border-gray-600 text-white py-2 text-sm rounded hover:bg-red-600 hover:border-red-600 transition"
                >
                  Login / Signup
                </button>

                <p className="text-gray-500 text-xs mt-3">
                  Please Login
                </p>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* AUTH MODAL */}
      {activePanel === "auth" && (
        <AuthModal close={() => setActivePanel(null)} />
      )}

     
      <div className="h-16" />
    </>
  );
};

export default Navbar;


