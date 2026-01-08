
import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import AuthModal from "./AuthModal";

const Navbar = () => {
  const [activePanel, setActivePanel] = useState(null);
  const navigate = useNavigate();

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
        <div className="flex gap-8 text-white text-lg">
          <FaSearch
            className="cursor-pointer hover:text-gray-300"
            onClick={() =>
              setActivePanel(activePanel === "search" ? null : "search")
            }
          />

          <FaShoppingCart
            className="cursor-pointer hover:text-gray-300"
            onClick={() => {
              closeAll();
              navigate("/cart");
            }}
          />

          <FaUser
            className="cursor-pointer hover:text-gray-300"
            onClick={() =>
              setActivePanel(activePanel === "auth" ? null : "auth")
            }
          />
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

