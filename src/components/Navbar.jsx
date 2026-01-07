import React from 'react';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className=" bg-black overflow-hidden p-4 flex justify-between items-center">
      <div className="text-white text-2xl font-bold ms-11">
        Tech-Shop
      </div>
      <div className="flex space-x-11 me-11">
        <FaSearch className="text-white text-xl  cursor-pointer" />
        <FaShoppingCart className="text-white text-xl cursor-pointer" />
        <FaUser className="text-white text-xl cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
