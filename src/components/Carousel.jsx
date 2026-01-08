
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Carousel = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 3,
      brand: "Boat Airdopes 131",
      title: "Featherweight For Comfort All-Day.",
      price: "₹1,099",
      originalPrice: "₹2,990",
      image: "/src/images/products/boat131-3.png",
    },
    {
      id: 7,
      brand: "Sony WH-XB910N",
      title: "Give Your Favourite Music A Boost.",
      price: "₹13,489",
      originalPrice: "₹19,990",
      image: "/src/images/products/sonyXb910n-1.png",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-125 bg-black overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 flex items-center transition-all duration-1000 ease-in-out
          ${index === currentSlide ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"}`}
        >
          {/* LEFT CONTENT */}
          <div className="w-1/2 px-16 text-white">
            <p className="text-gray-400 text-lg mb-3">{slide.brand}</p>

            <h2 className="text-5xl font-bold leading-tight mb-6">
              {slide.title}
            </h2>

            <div className="mb-6">
              <span className="text-3xl font-bold mr-4">
                {slide.price}
              </span>
              <del className="text-gray-500 text-xl">
                {slide.originalPrice}
              </del>
            </div>

            <button
              className="bg-red-600 hover:bg-red-700 transition px-8 py-3 text-lg rounded-md cursor-pointer"
              onClick={() => navigate(`/product/${slide.id}`)}
            >
              Shop Now
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-1/2 flex justify-center">
            <img
              src={slide.image}
              alt={slide.brand}
              className="max-h-105 object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
