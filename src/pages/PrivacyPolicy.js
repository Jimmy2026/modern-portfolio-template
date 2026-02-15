import React from 'react';
import { motion } from 'framer-motion';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-page">
      <div className="page-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="section-title">privacy_policy( )</h1>
          <p className="section-description">Last updated: February 2026</p>
        </motion.div>

        <motion.div
          className="policy-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <section className="policy-section">
            <h2>Information Collection</h2>
            <p>
              When you submit the contact form on this website, I collect your name,
              email address, and message content. This information is used solely to
              respond to your inquiry.
            </p>
          </section>

          <section className="policy-section">
            <h2>Data Usage</h2>
            <p>
              Your personal information is used exclusively for communication purposes.
              I do not sell, trade, or transfer your information to third parties.
            </p>
          </section>

          <section className="policy-section">
            <h2>Data Storage</h2>
            <p>
              Contact form submissions are processed through a secure form service.
              Your data is stored securely and retained only as long as necessary to
              respond to your inquiry.
            </p>
          </section>

          <section className="policy-section">
            <h2>Cookies</h2>
            <p>
              This website uses minimal cookies for theme preferences (dark/light mode).
              No tracking or analytics cookies are used.
            </p>
          </section>

          <section className="policy-section">
            <h2>Your Rights</h2>
            <p>
              You have the right to request access to, correction of, or deletion of
              your personal data. Contact me at maodunke@gmail.com for any data-related
              requests.
            </p>
          </section>

          <section className="policy-section">
            <h2>Contact</h2>
            <p>
              If you have questions about this privacy policy, please contact me at{' '}
              <a href="mailto:maodunke@gmail.com">maodunke@gmail.com</a>.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;