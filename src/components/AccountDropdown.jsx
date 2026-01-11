import React from "react";

const AccountDropdown = ({ onLogin }) => {
  return (
    <div className="absolute right-0 top-10 w-64 bg-[#0e0e0e] border border-gray-700 rounded-md shadow-lg p-4 z-50">
      
      <p className="text-white text-sm font-semibold mb-1">Hello!</p>
      <p className="text-gray-400 text-xs mb-4">
        Access account and manage orders
      </p>

      <button
        onClick={onLogin}
        className="w-full border border-gray-500 text-white py-2 text-sm rounded hover:bg-red-600 hover:border-red-600 transition"
      >
        Login / Signup
      </button>

      <p className="text-gray-500 text-xs mt-3">Please Login</p>
    </div>
  );
};

export default AccountDropdown;
