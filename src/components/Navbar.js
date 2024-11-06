import React from 'react';
import './Navbar.css'; // Import the CSS file for styling
import logo from '../images/LOGO.png';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="E-GROOTS Logo" />
            </div>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li> {/* Use anchor links for navigation */}
                <li><a href="#product-categories">Products</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    );
};

export default Navbar;
