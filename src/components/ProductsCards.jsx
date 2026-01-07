import React, { useState } from "react";

const categories = [
  "All",
  "Headphones",
  "Earbuds",
  "Earphones",
  "Neckbands",
];

const ProductsCards = () => {
  const [active, setActive] = useState("All");

  return (
    <section className="bg-black py-20">
      {/* Heading */}
      <h2 className="text-center text-white text-2xl font-semibold mb-10 ">
        Top Products
      </h2>

      {/* Category Tabs */}
      <div className="flex justify-center gap-6 ">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`px-4 py-1.5 text-sm rounded-md transition
              ${
                active === item
                  ? "bg-red-600 text-white cursor-pointer"
                  : "text-gray-400 hover:text-white cursor-pointer"
              }`}
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  );
};

export default ProductsCards;
