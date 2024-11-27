import React from 'react';
import './Footer.css'; // Assuming you want to keep the CSS in a separate file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <ul>
          <li><a href="#">Explore the BBC</a></li>
          <li><a href="#">Home</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Sport</a></li>
          <li><a href="#">Business</a></li>
          <li><a href="#">Innovation</a></li>
          <li><a href="#">Culture</a></li>
          <li><a href="#">Travel</a></li>
          <li><a href="#">Earth</a></li>
          <li><a href="#">Video</a></li>
          <li><a href="#">Live</a></li>
        </ul>
      </div>
      <div className="footer-policy">
        <ul>
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">About the BBC</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Cookies</a></li>
          <li><a href="#">Accessibility Help</a></li>
          <li><a href="#">Parental Guidance</a></li>
          <li><a href="#">Contact the BBC</a></li>
        </ul>
      </div>
      <div className="footer-ads">
        <ul>
          <li><a href="#">BBC emails for you</a></li>
          <li><a href="#">Advertise with us</a></li>
        </ul>
      </div>
      <div className="footer-copyright">
        <p>
          Copyright © 2024 BBC. The BBC is not responsible for the content of external sites. 
          <a href="#">Read about our approach to external linking</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
