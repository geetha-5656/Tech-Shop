import React, { useState, useMemo } from "react";
import productsData from "../data/productsData";
import ProductsCards from "../components/ProductsCards";

const AllProducts = () => {
  const [sortBy, setSortBy] = useState("latest");
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [maxPrice, setMaxPrice] = useState(20000);

  /* ---------- HANDLERS ---------- */
  const toggleValue = (value, list, setList) => {
    setList(
      list.includes(value)
        ? list.filter((i) => i !== value)
        : [...list, value]
    );
  };

  const clearFilters = () => {
    setSortBy("latest");
    setBrands([]);
    setCategories([]);
    setMaxPrice(20000);
  };

  /* ---------- FILTER + SORT ---------- */
  const filteredProducts = useMemo(() => {
    let filtered = [...productsData];

    if (brands.length) {
      filtered = filtered.filter((p) => brands.includes(p.brand));
    }

    if (categories.length) {
      filtered = filtered.filter((p) =>
        categories.includes(p.category)
      );
    }

    filtered = filtered.filter((p) => p.finalPrice <= maxPrice);

    switch (sortBy) {
      case "priceLow":
        filtered.sort((a, b) => a.finalPrice - b.finalPrice);
        break;
      case "priceHigh":
        filtered.sort((a, b) => b.finalPrice - a.finalPrice);
        break;
      case "topRated":
        filtered.sort((a, b) => b.rateCount - a.rateCount);
        break;
      default:
        break;
    }

    return filtered;
  }, [brands, categories, maxPrice, sortBy]);

  return (
    <section className="bg-black text-white px-8 py-14">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-10">

        {/* ================= FILTER BAR ================= */}
        <aside className="col-span-12 md:col-span-3 bg-[#0e0e0e] border border-gray-700 rounded-md p-5 h-fit sticky top-24">

          <button
            onClick={clearFilters}
            className="w-full bg-red-600 py-2 mb-6 text-sm rounded hover:bg-red-700"
          >
            Clear Filters
          </button>

          {/* SORT */}
          <h4 className="text-sm font-semibold mb-3">Sort By</h4>
          <div className="space-y-2 text-sm text-gray-400 mb-6">
            {[
              { id: "latest", label: "Latest" },
              { id: "featured", label: "Featured" },
              { id: "topRated", label: "Top Rated" },
              { id: "priceLow", label: "Price (Lowest First)" },
              { id: "priceHigh", label: "Price (Highest First)" },
            ].map((opt) => (
              <p
                key={opt.id}
                onClick={() => setSortBy(opt.id)}
                className={`cursor-pointer ${
                  sortBy === opt.id ? "text-red-500" : "hover:text-white"
                }`}
              >
                {opt.label}
              </p>
            ))}
          </div>

          {/* BRANDS */}
          <h4 className="text-sm font-semibold mb-3">Brands</h4>
          <div className="space-y-2 text-sm mb-6">
            {["JBL", "boAt", "Sony"].map((brand) => (
              <label key={brand} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={brands.includes(brand)}
                  onChange={() => toggleValue(brand, brands, setBrands)}
                />
                {brand}
              </label>
            ))}
          </div>

          {/* CATEGORY */}
          <h4 className="text-sm font-semibold mb-3">Category</h4>
          <div className="space-y-2 text-sm mb-6">
            {["Headphones", "Earbuds", "Earphones", "Neckbands"].map((cat) => (
              <label key={cat} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={categories.includes(cat)}
                  onChange={() =>
                    toggleValue(cat, categories, setCategories)
                  }
                />
                {cat}
              </label>
            ))}
          </div>

          {/* PRICE */}
          <h4 className="text-sm font-semibold mb-3">Price</h4>
          <input
            type="range"
            min="0"
            max="20000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full accent-red-600"
          />
          <p className="text-sm text-gray-400 mt-2">
            Up to ₹{maxPrice.toLocaleString()}
          </p>
        </aside>

        {/* ================= PRODUCTS ================= */}
        <div className="col-span-12 md:col-span-9">
          <ProductsCards
            title="All Products"
            products={filteredProducts}
            showFilters={false}
            showBrowseAll={false}
          />
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
