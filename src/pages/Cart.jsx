import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-3xl text-white mb-4">
        Your Cart is Empty 🛒
      </h1>

      <p className="text-gray-400 mb-8">
        Looks like you haven’t added anything yet
      </p>

      <button
        onClick={() => navigate("/")}
        className="bg-red-600 px-8 py-3 text-white hover:bg-red-700 transition"
      >
        Go Shopping
      </button>
    </div>
  );
};

export default Cart;
