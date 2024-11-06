import React from 'react';
import './style/TechBanner.css'; 
import groot from '../images/groot.jpg';
import { Helmet } from 'react-helmet';
import pcb from '../images/pcb.jpeg';

const TechBanner = () => {
  return (
  <>
  <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet"></link>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet"/>
      </Helmet>
    <div className="entire-body">
      {/* Tech Banner Section */}
      <div className="banner-container">
        <div className="content-container">
          <h1>Innovative Tech Solutions for All</h1>
          <p>
            At e-groots, we create cutting-edge tech products, educational kits, and robotic systems that solve
            real-world challenges with reliability and scalability.
          </p>
        </div>
        <div className="circuit-image">
          <img
            src={pcb} // Replace with the correct path if necessary
            alt="Groot on Circuit"
            className="circuit-image-display"
          />
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="who-we-are-container">
          <div className="image-container">
            <img
              src={groot} // Replace with the correct path if necessary
              alt="Groot on Circuit"
              className="groot-image"
            />
          </div>
          <div className="text-container">
            <h2>Who We Are?</h2>
            <p>
              E-groots is specialized in electronics, embedded systems, and custom PCB designs, empowering businesses
              and individuals with tailored solutions for education and automation.
            </p>
          </div>
      </div>
    </div>
  </>
  );
};

export default TechBanner;
