import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import FeaturedProducts from "./components/FeaturedProducts";
import ProductsCards from "./components/ProductsCards";
import Advantages from "./components/Advantages";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <CartProvider>
      <Navbar />

      <Routes>
        <Route  path="/"
          element={
            <>
              <Carousel />
              <FeaturedProducts />
              <ProductsCards />
              <Advantages />
              <Footer />
            </>
          }
        />

        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </CartProvider>
  );
}

export default App;

