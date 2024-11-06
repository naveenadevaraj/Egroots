import React from 'react';
import Navbar from './components/Navbar'; // Adjust the path if needed
import Home from './pages/Home';
import ProductCategories from './pages/ProductCategories';
import TechBanner from './pages/TechBanner';
import Footer from './pages/Footer';

const App = () => {
    return (
        <div>
            <Navbar />
            <div id="home"><Home /></div> {/* Home section */}
            <div id="product-categories"><ProductCategories /></div> {/* Product Categories section */}
            <div id="about"><TechBanner /></div> {/* Tech Banner section */}
            <div id="contact"><Footer /></div> {/* Footer section */}
        </div>
    );
};

export default App;
