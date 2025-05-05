import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet';
import CircuitVideo from "../photos/circuit.mp4";
import '../styles/Header.css';

export default function Header() {
  useEffect(()=> {
    AOS.init({duration:2000});
  }, []);
  return (
    <>
      {/* Use Helmet to inject Google Fonts into the head */}
      <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet"></link>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet"/>
      </Helmet>

      <div className="homepage">
        {/* Video background */}
        <video autoPlay muted loop className="video-background">
          <source src={CircuitVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div class="video-overlay"></div>
        <div className="content" data-aos="fade-down">
          {/* Main headline */}
          <h1 className="headline" >"Your Ideas, Our Circuits – <br/>Perfectly Aligned."</h1>
          
          {/* Subheadline/description */}
          <p className="subheadline" >Empowering Education and Robotics for Everyone</p>

          {/* Buttons for actions */}
          <div className="buttons">
          <button 
          className="shop-button" 
          aria-label="Shop button" 
          onClick={() => window.open('https://forms.gle/88eatftsZRqovRDc9', '_blank')}
          >
          Shop
          </button>

            <button 
              className="call-button" 
              aria-label="Call Us button" 
              onClick={() => window.location.href = 'tel:+918015221905'}
            >
              Call Us!
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
