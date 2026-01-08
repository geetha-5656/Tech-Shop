
import React from "react";
import { useNavigate } from "react-router-dom";
import productsData from "../data/productsData";

const ProductsCards = ({ title = "TOP PRODUCTS", products = productsData.slice(0, 19) }) => {
  const navigate = useNavigate();

  return (
    <section className="bg-black px-8 py-16">
      <h2 className="text-center text-white text-2xl font-semibold mb-12">
        {title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {/* PRODUCT CARDS */}
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-700 rounded-md p-4 bg-[#0e0e0e] hover:border-red-600 transition"
          >
            {/* IMAGE */}
            <div
              className="flex justify-center mb-4 cursor-pointer"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <img
                src={product.images[0]}
                alt={product.title}
                className="h-40 object-contain hover:scale-105 transition duration-300"
              />
            </div>

            {/* RATING */}
            <div className="flex gap-1 mb-2">
              {"★".repeat(product.rateCount)}
            </div>

            {/* TITLE */}
            <h3 className="text-white text-sm font-medium mb-1">
              {product.title}
            </h3>

            <p className="text-gray-400 text-xs mb-4">
              {product.info}
            </p>

            {/* PRICE */}
            <div className="flex gap-3 items-center mb-4">
              <span className="text-white font-semibold">
                ₹{product.finalPrice.toLocaleString()}
              </span>
              <span className="text-gray-500 line-through text-sm">
                ₹{product.originalPrice.toLocaleString()}
              </span>
            </div>

            {/* BUTTON */}
            <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 text-sm rounded">
              Add to cart
            </button>
          </div>
        ))}

        {/* 20th CARD – BROWSE ALL */}
        <div
          onClick={() => navigate("/products")}
          className="border border-gray-700 rounded-md flex items-center justify-center cursor-pointer hover:border-red-600 transition bg-[#0e0e0e]"
        >
          <h3 className="text-white text-lg font-medium">
            Browse All <br /> Products →
          </h3>
        </div>
      </div>
    </section>
  );
};

export default ProductsCards;




