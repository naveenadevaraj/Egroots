import React from 'react'
import { useEffect } from "react";
import Header from './home/Header'
import Products from './home/Products'
import About from './home/About'
import Footer from './home/Footer'
function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
       <Header/> 
       <Products/>
       <About/>
       <Footer/>
    </div>
  )
}

export default Home