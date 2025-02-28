import React from 'react';
import "../../styles/Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="contact-section">
          <div className="social-links">
            <a href="https://github.com/SajidAli92" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github" />
            </a>
            <a href="https://linkedin.com/in/sajidali2ns" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin" />
            </a>
            <a href="https://instagram.com/inshacle.7" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram" />
            </a>
            <a href="https://wa.me/917033214254?text=Hello!%20I%20want%20to%20know%20more%20about%20your%20Expense%20Management%20System." target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp" />
            </a>
          </div>
        </div>
        <div className="copyright-section">
          <p>© 2025 Expense Management System. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;