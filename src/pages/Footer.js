import React, { useRef } from 'react';
import './style/Footer.css'; // Import your CSS file for styling
import Egroot from "../images/Egroot.png"
import GrootVoice from '../images/groot-voice.mp3';
import { Helmet } from 'react-helmet';
const Footer = () => {
  const audioRef = useRef(null); // Ref to control the audio playback

  // Function to play the audio on hover
  const playVoice = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };


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
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* Left section: E-groots.in and queries */}
        <div className="footer-left">
          <h2>E-groots.in <i className="fab fa-instagram"></i></h2>
          <p className="text">"Tailored Precision, Powered by Innovation."</p>
          <div className="queries-section">
            <h3>FOR QUERIES:</h3>
            <p>+91 9344262677</p>
            <p>+91 8220286583</p>
            <p>+91 8883477338</p>
            <p>egroots.in@gmail.com</p>
          </div>
        </div>

        {/* Center section: Image */}
        <div className="footer-center">
        <img
            src={Egroot}
            alt="Groot"
            className="Egroot-image zoom-out-image"
            onMouseEnter={playVoice} /* Play voice when mouse enters image */
          />
          <audio ref={audioRef} src={GrootVoice}></audio> {/* Audio element */}
        </div>

        {/* Right section: Address and Contact Form */}
        <div className="footer-right">
          <div className="address-section">
            <h3>ADDRESS</h3>
            <p>
              Sathy - Bhavani State Highway,<br/>
              Alathukombai Post,<br/>
              Sathyamangalam, Tamil Nadu, India - 638401.
            </p>
          </div>
          <div className="contact-form">
            <h3>GET IN TOUCH</h3>
            <form>
              <input
                type="email"
                placeholder="Your email for updates"
                className="email-input"
              />
              <button className="subscribe-button">Subscribe for latest updates</button>
            </form>
          </div>
        </div>
        
      </div>
      
      {/* Bottom section: Copyright */}
      <div className="footer-bottom">
        <p>© 2024. All rights reserved.</p>
      </div>
    </footer>
  </>
  );
};

export default Footer;
