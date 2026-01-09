import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Footer from "../components/Footer";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, getOriginalTotal, getDiscount } = useCart();

  if (cartItems.length === 0) {
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
          className="bg-red-600 px-8 py-3 text-white hover:bg-red-700 transition cursor-pointer"
        >
          Go Shopping
        </button>
      </div>
    );
  }

  return (
    <>
    <div className="min-h-screen bg-black text-white px-8 py-16">
      <h1 className="text-3xl font-semibold mb-8">Your Cart</h1>

      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
        {/* Products */}
        <div className="flex-1">
          <h2 className="text-xl font-medium mb-4">Products</h2>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center gap-4 bg-gray-900 p-4 rounded-md">
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-20 h-20 object-contain"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.info}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-white font-semibold">₹{item.finalPrice.toLocaleString()}</span>
                    <span className="text-gray-500 line-through text-sm">₹{item.originalPrice.toLocaleString()}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="bg-gray-700 px-2 py-1 rounded hover:bg-gray-600"
                  >
                    -
                  </button>
                  <span className="px-3">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="bg-gray-700 px-2 py-1 rounded hover:bg-gray-600"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-400 ml-4 cursor-pointer"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-80">
          <div className="bg-gray-900 p-6 rounded-md">
            <h2 className="text-xl font-medium mb-4">Order Summary</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Original Price:</span>
                <span>₹{getOriginalTotal().toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-green-500">
                <span>Discount:</span>
                <span>-₹{getDiscount().toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery:</span>
                <span className="text-green-500">Free</span>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-4 mb-6">
              <div className="flex justify-between text-lg font-semibold">
                <span>Total:</span>
                <span>₹{getTotalPrice().toLocaleString()}</span>
              </div>
            </div>
            <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-md font-medium cursor-pointer">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Cart;
