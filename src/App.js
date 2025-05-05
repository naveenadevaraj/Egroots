import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Bots from './pages/Bots';
import Kit from './pages/Kit';
import ProductDetail from './pages/ProductDetails';
import CartPage from './pages/CartPage';
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<ProductList/>}/>
      <Route path="/competition-bots" element={<Bots/>}/>
      <Route path="/electronics-kit" element={<Kit/>}/>
      <Route path="/product/:productId" element={<ProductDetail />} /> 
      <Route path="/cart" element={<CartPage />} />
    </Routes>
    </>
  );
}

export default App;
