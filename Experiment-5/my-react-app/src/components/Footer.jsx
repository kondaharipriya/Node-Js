import React from 'react';
import '../App.css';
import Facebook from '../assets/images/facebook.png';
import Twitter from '../assets/images/twitter.png';
import Instagram from '../assets/images/instagram.png';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="social_media">
            <a href="#"><img src={Facebook} alt="Facebook" /></a>
            <a href="#"><img src={Twitter} alt="Twitter" /></a>
            <a href="#"><img src={Instagram} alt="Instagram" /></a>
          </div>

          <p>&copy; 2023 ACE Book Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;