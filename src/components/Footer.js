import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Book Store. All rights reserved.</p>
        <p>Created with React</p>
        <div className="footer-links">
          <a href="mailto:info@bookstore.com">Email</a> | 
          <a href="tel:+996700000000">Phone</a> | 
          <a href="#">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
