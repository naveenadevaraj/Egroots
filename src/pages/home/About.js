import React, { useRef } from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Home.css'; 
import groot from '../photos/Egroot.png';
import GrootVoice from '../photos/groot-voice.mp3';
import { Helmet } from 'react-helmet';

const About = () => {
  useEffect(()=> {
    AOS.init({duration:2000});
  }, []);

  const audioRef = useRef(null); 
  
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
    <div className="entire-body">     
      <div className="who-we-are-container">
          <div className="image-container" data-aos="fade-right">
            <img
              src={groot} // Replace with the correct path if necessary
              alt="Groot on Circuit"
              className="groot-image zoom-out-image"
              onMouseEnter={playVoice} /* Play voice when mouse enters image */
            />
            <audio ref={audioRef} src={GrootVoice}></audio> {/* Audio element */}
          </div>
          <div className="text-container" data-aos="fade-up">
            <h2>Who We Are?</h2>
            <p>
              E-groots is specialized in electronics, embedded systems, and custom PCB designs, empowering businesses
              and individuals with tailored solutions for education and automation. We create cutting-edge tech products, educational kits, and robotic systems that solve
              real-world challenges with reliability and scalability.
            </p>
          </div>
      </div>
    </div>
  </>
  );
};

export default About;
