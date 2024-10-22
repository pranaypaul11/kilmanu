import React from 'react';
import { Twitter, Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';
import './footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-columns">
          {/* Features Column */}
          <div>
            <h3 className="footer-heading">Features</h3>
            <ul className="footer-list">
              <li className="footer-item">Green Score™</li>
              <li className="footer-item">Corporate</li>
              <li className="footer-item">Green Credit™</li>
              <li className="footer-item">Brand</li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="footer-heading">Resources</h3>
            <ul className="footer-list">
              <li className="footer-item">FAQs</li>
              <li className="footer-item">Stories</li>
              <li className="footer-item">Know Your Air Quality Index - AQI</li>
              <li className="footer-item">Carbon Directory</li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="footer-heading">Support</h3>
            <ul className="footer-list">
              <li className="footer-item">Raise an enquiry</li>
              <li className="footer-item">Reach Us</li>
              <li className="footer-item">Careers</li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-list">
              <li className="footer-item">Cookies Policy</li>
              <li className="footer-item">Privacy Policy</li>
              <li className="footer-item">Terms of use</li>
              <li className="footer-item">Terms of services</li>
            </ul>
          </div>

          {/* Get Started Column */}
          <div>
            <h3 className="footer-heading">Get Started</h3>
            <ul className="footer-list">
              <li className="footer-item">Get the App</li>
              <li className="footer-item">Request a Demo</li>
              <li className="footer-item">Admin/ Community Leader Login</li>
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="footer-social">
          <h3 className="footer-heading">Find us on social media</h3>
          <div className="footer-social-icons">
            <Twitter className="social-icon" />
            <Instagram className="social-icon" />
            <Facebook className="social-icon" />
            <Linkedin className="social-icon" />
            <Youtube className="social-icon" />
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          &copy; 2024 KRNY Innovations Private Limited
        </div>
      </div>
    </footer>
  );
};

export default Footer;
