// Sidebar Component
import React from 'react';
import './styles/Sidebar.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'

const Sidebar = () => {
    useEffect(()=> {
        AOS.init({duration:2000});
      }, []);

  return (
    <div className="sidebar" data-aos="fade-right">
      <div className="filters">
        <h3>BROWSE BY</h3>
        <div className="filter-category">
          <ul className='sidebar-links'>
          <li><Link to="/products" className="sidebar-link">All Products</Link></li>
          <li><Link to="/competition-bots" className="sidebar-link">Competition Bots</Link></li>
          <li><Link to="/electronics-kit" className="sidebar-link">Electronics Kit</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
