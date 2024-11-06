import React from 'react';
import { Helmet } from 'react-helmet';
import './style/ProductCategories.css';

const ProductCategories = () => {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <div className="product-container">
        <div className="sub-heading">
          <p>TECH SOLUTIONS</p>
        </div>
        <div className="heading">
          <h1>Product Categories</h1>
        </div>

        <div className="categories-container">
          {/* Educational Kit Section */}
          <div className="category educational-kit">
            <div className="overlay">
              <h2>EDUCATIONAL KITS</h2>
              <p>Spark your curiosity! Master the art of electronics and robotics with ease!</p>
              <button
                className="button"
                onClick={() =>
                  window.open(`${process.env.PUBLIC_URL}/file/microcontroller.pdf`, '_blank')
                }
              >
                Brochure
              </button>
            </div>
          </div>

          {/* Competition Bots Section */}
          <div className="category competition-bots">
            <div className="overlay">
              <h2>COMPETITION BOTS</h2>
              <p>Advanced robotics for competitions and projects.</p>
              <button
                className="button"
                onClick={() =>
                  window.open(`${process.env.PUBLIC_URL}/file/bot.pdf`, '_blank')
                }
              >
                Brochure
              </button>
            </div>
          </div>

          {/* Custom PCB Section */}
          <div className="category custom-pcb">
            <div className="overlay">
              <h2>CUSTOM PCB</h2>
              <p>"Custom PCBs for Tomorrow's Technology."</p>
              <button className="button" onClick={() => window.open('https://forms.gle/88eatftsZRqovRDc9', '_blank')}>Order Now!</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCategories;
