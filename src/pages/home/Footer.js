import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Footer.css'; // Import your CSS file for styling
import { Helmet } from 'react-helmet';
const Footer = () => {
  useEffect(()=> {
    AOS.init({duration:2000});
  }, []);

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
    <footer id="footer" className="footer-container" >
      <div className="footer-content">
        
        {/* Left section: E-groots.in and queries */}
        <div className="footer-left">
          <h2>Egroots.in <i className="fab fa-instagram"></i></h2>
          <p className="text">"Tailored Precision, Powered by Innovation."</p>
          <div className="queries-section">
            <h3>FOR QUERIES:</h3>
            <p>+91 9344262677</p>
            <p>+91 8220286583</p>
            <p>+91 8883477338</p>
            <p>egroots.in@gmail.com</p>
          </div>
        </div>
        <div className='footer-center'>
          <div className='map-frame'>
          <iframe width="400" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=400&amp;height=400&amp;hl=en&amp;q=Sathy%20-%20Bhavani%20State%20Highway,%20Alathukombai%20Post,%20Sathyamangalam,%20Tamil%20Nadu,%20India%20-%20638401.+(Egroots)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps systems</a></iframe>
          </div>
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
          {/* <div className="contact-form">
            <h3>FOLLOW US ON</h3>
            <form>
              <input
                type="email"
                placeholder="Your email for updates"
                className="email-input"
              />
              <button className="subscribe-button">Subscribe for latest updates</button>
            </form>
          </div> */}
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
