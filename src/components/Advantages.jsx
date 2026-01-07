import React from "react";
import {
  Truck,
  ShieldCheck,
  Tag,
  CreditCard,
} from "lucide-react";

const Advantages = () => {
  return (
    <section className="bg-linear-to-b from-gray-950 to-[#111] py-16">
      {/* Heading */}
      <h2 className="text-center text-gray-200 text-2xl font-bold  mb-12 ">
        OUR ADVANTAGES
      </h2>

      {/* Advantages Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Express Delivery */}
        <div className="flex items-center gap-4">
          <Truck className="text-red-600 w-7 h-7" />
          <div>
            <h4 className="text-white text-sm font-medium">
              Express Delivery
            </h4>
            <p className="text-gray-400 text-xs">
              Ships in 24 Hours
            </p>
          </div>
        </div>

        {/* Brand Warranty */}
        <div className="flex items-center gap-4">
          <ShieldCheck className="text-red-600 w-7 h-7" />
          <div>
            <h4 className="text-white text-sm font-medium">
              Brand Warranty
            </h4>
            <p className="text-gray-400 text-xs">
              100% Original products
            </p>
          </div>
        </div>

        {/* Exciting Deals */}
        <div className="flex items-center gap-4">
          <Tag className="text-red-600 w-7 h-7" />
          <div>
            <h4 className="text-white text-sm font-medium">
              Exciting Deals
            </h4>
            <p className="text-gray-400 text-xs">
              On all prepaid orders
            </p>
          </div>
        </div>

        {/* Secure Payments */}
        <div className="flex items-center gap-4">
          <CreditCard className="text-red-600 w-7 h-7" />
          <div>
            <h4 className="text-white text-sm font-medium">
              Secure Payments
            </h4>
            <p className="text-gray-400 text-xs">
              SSL / Secure certificate
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Advantages;
