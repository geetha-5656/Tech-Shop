import { useState } from 'react'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import FeaturedProducts from './components/FeaturedProducts'
import ProductsCards from './components/ProductsCards'

function App() {

  return (
    <>

    <Navbar />
   <Carousel/>
   <FeaturedProducts/>
   <ProductsCards/>
    </>
  )
}

export default App
