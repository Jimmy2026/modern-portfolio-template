import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Jimmy2026',
      icon: 'GH',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/abdulmalikshodunke',
      icon: 'LI',
    },
    {
      name: 'Email',
      url: 'mailto:maodunke@gmail.com',
      icon: '@',
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <p className="footer-tagline">Building The Future One Step At A Time</p>
          </div>

          <div className="footer-links">
            <span className="footer-label">{/* CONNECT */}</span>
            <div className="social-grid">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="social-icon">{link.icon}</span>
                  <span className="social-name">{link.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-text">
            <span className="footer-code">{'<coded_by>'}</span>{' '}
              <a href="/" className="footer-name-link">AbdulMalik Shodunke</a>
            <span className="footer-code">{'</>'}</span>
          </p>
          <p className="footer-year">© {new Date().getFullYear()} —{' '}
              <a href="/privacy" className="footer-privacy-link">Privacy Policy</a>
          </p>
        </div>
      </div>

      <div className="footer-scan"></div>
    </footer>
  );
};

export default Footer;
