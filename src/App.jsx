import { useState } from 'react'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import FeaturedProducts from './components/FeaturedProducts'
import ProductsCards from './components/ProductsCards'
import Advantages from './components/Advantages'

function App() {

  return (
    <>

    <Navbar />
   <Carousel/>
   <FeaturedProducts/>
   <ProductsCards/>
   <Advantages/>
    </>
  )
}

export default App
