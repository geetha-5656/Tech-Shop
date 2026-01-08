import React from "react";
import { footMenu, footSocial } from "../data/footerData.jsx";
import { ChevronUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 pt-16">
   
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
      
        <div>
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">
            Tech-Shop
          </h2>
          <p className="text-sm leading-6 mb-6">
            Subscribe to our Email alerts to receive early discount offers,
            and new products info.
          </p>

          <input
            type="email"
            placeholder="Email Address*"
            className="w-full bg-transparent border border-gray-600 px-4 py-3 mb-4 outline-none focus:border-gray-400"
          />

          <button className="bg-red-600 text-white px-8 py-3 rounded-sm hover:bg-red-700 transition">
            Subscribe
          </button>
        </div>

      
        {footMenu.map((section) => (
          <div key={section.id}>
            <h3 className="text-lg text-gray-200 font-medium mb-6">
              {section.title}
            </h3>
            <ul className="space-y-4 text-sm">
              {section.menu.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.path}
                    className="hover:text-gray-200 transition"
                  >
                    {item.link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-800 mt-16"></div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          2025 | All Rights Reserved ©.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-6">
          {footSocial.map((item) => (
            <a
              key={item.id}
              href={item.path}
              className="text-gray-400 hover:text-white text-lg transition"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll To Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-red-600 p-3 rounded-md text-white hover:bg-red-700 transition"
      >
        <ChevronUp />
      </button>
    </footer>
  );
};

export default Footer;
