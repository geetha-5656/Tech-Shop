import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import FeaturedProducts from "./components/FeaturedProducts";
import ProductsCards from "./components/ProductsCards";
import Advantages from "./components/Advantages";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
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
      </Routes>
    </>
  );
}

export default App;

