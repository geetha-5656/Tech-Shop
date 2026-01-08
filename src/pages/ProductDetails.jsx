import React, { useState } from "react";
import { useParams } from "react-router-dom";
import productsData from "../data/productsData";
import reviewsData from "../data/reviewsData";
import ProductsCards from "../components/ProductsCards";
import Advantages from "../components/Advantages";
import Footer from "../components/Footer";

const ProductDetails = () => {
  const { id } = useParams();
  const product = productsData.find(p => p.id === Number(id));

  const [activeTab, setActiveTab] = useState("specs");
  const [activeImg, setActiveImg] = useState(0);

  if (!product) return null;

  const relatedProducts = productsData.filter(p => p.category === product.category && p.id !== product.id).slice(0, 19);

  return (
    <>
    <section className="bg-black text-white px-10 py-16">
     
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        
        {/* LEFT  IMAGES */}
        <div className="flex gap-6">
          <div className="flex flex-col gap-4">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setActiveImg(i)}
                className={`w-20 h-20 object-contain border cursor-pointer ${
                  activeImg === i ? "border-white" : "border-gray-700"
                }`}
              />
            ))}
          </div>

          <div className="flex-1">
            <img
              src={product.images[activeImg]}
              className="w-full max-h-105 object-contain"
            />
          </div>
        </div>

        {/* RIGHT DETAILS */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
          <p className="text-gray-400 mb-3">{product.info}</p>

          {/* RATING */}
          <div className="flex items-center gap-2 text-red-500 mb-4">
            {"★".repeat(product.rateCount)}
            <span className="text-gray-400 text-sm">
              | {product.ratings} Ratings
            </span>
          </div>

          {/* PRICE */}
          <div className="flex items-center gap-4 mb-2">
            <span className="text-3xl font-bold">
              ₹{product.finalPrice.toLocaleString()}
            </span>
            <span className="line-through text-gray-500">
              ₹{product.originalPrice.toLocaleString()}
            </span>
          </div>

          <p className="text-green-500 text-sm mb-6">
            You save ₹{product.originalPrice - product.finalPrice}
          </p>

          {/* OFFERS */}
          <div className="flex gap-4 mb-6">
            <div className="border border-gray-700 px-4 py-2 text-sm">
              No Cost EMI on Credit Card
            </div>
            <div className="border border-gray-700 px-4 py-2 text-sm">
              Pay Later & Cashback
            </div>
          </div>

          {/* ADD TO CART */}
          <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded text-sm">
            Add to cart
          </button>
        </div>
      </div>

      {/* TABS */}
      <div className="flex justify-center gap-10 mt-16 text-sm">
        <button
          onClick={() => setActiveTab("specs")}
          className={activeTab === "specs" ? "text-white border-b-2 border-red-600 pb-1" : "text-gray-400"}
        >
          Specifications
        </button>
        <button
          onClick={() => setActiveTab("overview")}
          className={activeTab === "overview" ? "text-white border-b-2 border-red-600 pb-1" : "text-gray-400"}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={activeTab === "reviews" ? "text-white border-b-2 border-red-600 pb-1" : "text-gray-400"}
        >
          Reviews
        </button>
      </div>

     
      <div className="max-w-4xl mx-auto mt-10 text-gray-300">
        
        {/* SPECIFICATIONS */}
        {activeTab === "specs" && (
          <div className="space-y-4">
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span>Brand</span><span>{product.brand}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span>Model</span><span>{product.title}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span>Category</span><span>{product.category}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span>Connectivity</span><span>{product.connectivity}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span>Type</span><span>{product.type}</span>
            </div>
          </div>
        )}

        {/* OVERVIEW */}
        {activeTab === "overview" && (
          <p className="leading-7">
            Experience immersive sound quality with the {product.title}.
            Designed for comfort and long listening sessions, it delivers
            crystal-clear audio, powerful bass, and reliable connectivity.
            Perfect for music lovers and daily use.
          </p>
        )}

        {/* REVIEWS */}
        {activeTab === "reviews" && (
          <div className="space-y-6">
            {reviewsData.map(review => (
              <div key={review.id} className="border-b border-gray-700 pb-4">
                <div className="flex justify-between mb-1">
                  <h4 className="font-medium">{review.name}</h4>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                <div className="text-red-500 mb-1">
                  {"★".repeat(review.rateCount)}
                </div>
                <p className="text-sm">{review.review}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* RELATED PRODUCTS */}
      <div className="mt-24">
        <ProductsCards title="Related Products" products={relatedProducts} />
      </div>
    </section>

    
    <Advantages />

    
    <Footer />
    </>
  );
};

export default ProductDetails;

