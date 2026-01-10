
import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import productsData from "../data/productsData";

const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute right-4 top-1/2 -translate-y-1/2 z-10
               w-10 h-10 bg-black/70 rounded-full
               flex items-center justify-center cursor-pointer
               hover:bg-red-600 transition"
  >
    <span className="text-white text-2xl">›</span>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute left-4 top-1/2 -translate-y-1/2 z-10
               w-10 h-10 bg-black/70 rounded-full
               flex items-center justify-center cursor-pointer
               hover:bg-red-600 transition"
  >
    <span className="text-white text-2xl">‹</span>
  </div>
);

const FeaturedProducts = () => {
  const products = [
    {
      name: "boAt Airdopes 203",
      price: "₹1,074",
      originalPrice: "₹1,990",
      image: "/src/images/products/boat203-1.png",
    },
    {
      name: "boAt Rockerz 518",
      price: "₹1,299",
      originalPrice: "₹3,990",
      image: "/src/images/products/boat518-1.png",
    },
    {
      name: "JBL Tune 760NC",
      price: "₹5,999",
      originalPrice: "₹7,999",
      image: "/src/images/products/jbl760nc-1.png",
    },
    {
      name: "boAt Rockerz 255",
      price: "₹899",
      originalPrice: "₹2,990",
      image: "/src/images/products/boat255r-1.png",
    },
    {
      name: "JBL Endurance Run Sports",
      price: "₹999",
      originalPrice: "₹1,599",
      image: "/src/images/products/jbl-endu-1.png",
    },
  ];

  const settings = {
    centerMode: true,
    centerPadding: "120px",
    slidesToShow: 3,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: true,
    pauseOnHover: false,
    nextArrow: <NextArrow />,
    prevArrow: <></>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerPadding: "60px",
        },
      },
    ],
  };

  return (
    <section className="bg-gray-950 px-10 py-16 h-113">
      <h2 className="text-white text-2xl font-bold tracking-widest mb-12 text-center">
        FEATURED PRODUCTS
      </h2>

      <Slider {...settings}>
        {products.map((item, index) => {
          const product = productsData.find(p => p.title === item.name);
          return (
            <div key={index} className="px-4">
              <Link to={`/product/${product.id}`}>
                <div className="product-slide text-center cursor-pointer">
                  <p className="text-gray-400 text-sm mb-4">
                    {item.name}
                  </p>

                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-48 mx-auto object-contain mb-6"
                  />
                  <div className="text-white font-semibold">
                    {item.name}
                  </div>

                  <div className="text-white font-semibold">
                    {item.price}
                    <del className="text-gray-500 text-sm ml-2">
                      {item.originalPrice}
                    </del>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default FeaturedProducts;

