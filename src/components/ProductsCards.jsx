
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import productsData from "../data/productsData";

const ProductsCards = ({
  title = "Top Products",
  products = productsData.slice(0, 19),
  showFilters = true, 
  showBrowseAll = true, 
}) => {
  const navigate = useNavigate();
  const { addToCart, cartItems } = useCart();

  const [recentlyAdded, setRecentlyAdded] = useState(new Set());
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Headphones", "Earbuds", "Earphones", "Neckbands"];

  const handleAddToCart = (product) => {
    addToCart(product);
    setRecentlyAdded((prev) => new Set([...prev, product.id]));
  };

  useEffect(() => {
    if (recentlyAdded.size > 0) {
      const timer = setTimeout(() => setRecentlyAdded(new Set()), 2000);
      return () => clearTimeout(timer);
    }
  }, [recentlyAdded]);

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter(
          (product) =>
            product.category.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <section className="bg-black px-8 py-16">
      {/* TITLE */}
      <h2 className="text-center text-white text-2xl font-semibold mb-6">
        {title}
      </h2>

     
      {showFilters && (
        <div className="flex justify-center gap-8 mb-12 text-sm">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1 rounded transition ${
                activeCategory === cat
                  ? "bg-red-600 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {filteredProducts.map((product) => (
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
                className="h-40 object-contain hover:scale-105 transition"
              />
            </div>

            {/* RATING */}
            <div className="flex gap-1 mb-2 text-red-500">
              {"★".repeat(product.rateCount)}
            </div>

            {/* TITLE */}
            <h3 className="text-white text-sm font-medium mb-1">
              {product.title}
            </h3>

            <p className="text-gray-400 text-xs mb-4">{product.info}</p>

            {/* PRICE */}
            <div className="flex gap-3 items-center mb-4">
              <span className="text-white font-semibold">
                ₹{product.finalPrice.toLocaleString()}
              </span>
              <span className="text-gray-500 line-through text-sm">
                ₹{product.originalPrice.toLocaleString()}
              </span>
            </div>

            {/* ADD TO CART */}
            <button
              onClick={() => handleAddToCart(product)}
              className={`w-full text-white py-2 text-sm rounded transition ${
                recentlyAdded.has(product.id)
                  ? "bg-green-600"
                  : "bg-red-600 hover:bg-red-700"
              }`}
            >
              {recentlyAdded.has(product.id)
                ? "Added to Cart"
                : "Add to Cart"}
            </button>
          </div>
        ))}

        {/* BROWSE ALL */}
        {showBrowseAll && (
          <div
            onClick={() => navigate("/products")}
            className="border border-gray-700 rounded-md flex items-center justify-center cursor-pointer hover:border-red-600 bg-[#0e0e0e]"
          >
            <h3 className="text-white text-lg font-medium text-center">
              Browse All <br /> Products →
            </h3>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsCards;





