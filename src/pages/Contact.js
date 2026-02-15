import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e) => {
  e.preventDefault();

  const response = await fetch('https://formspree.io/f/xqedqqqd', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form)
  });

  if (response.ok) {
    alert('Message sent! I\'ll get back to you soon.');
    setForm({ name: '', email: '', message: '' });
  } else {
    alert('Oops! Something went wrong. Please try again.');
  }
};

  return (
    <div className="contact-page">
      <div className="page-container">
        <motion.div className="section-header" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="section-title">get_in_touch( )</h1>
          <p className="section-description">Let's collaborate on something amazing</p>
        </motion.div>

        <div className="contact-grid">
          <motion.div className="contact-info" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <div className="info-card">
              <span className="info-label">EMAIL</span>
              <a href="mailto:maodunke@gmail.com" className="info-value">maodunke@gmail.com</a>
            </div>
            <div className="info-card">
              <span className="info-label">PHONE</span>
              <a href="tel:+14059568995" className="info-value">(405) 956-8995</a>
            </div>
            <div className="info-card">
              <span className="info-label">LOCATION</span>
              <span className="info-value">Norman, OK 73072</span>
            </div>
            <div className="social-links">
              <a href="https://github.com/Jimmy2026" target="_blank" rel="noopener noreferrer" className="social-btn">GITHUB</a>
              <a href="https://linkedin.com/in/abdulmalikshodunke" target="_blank" rel="noopener noreferrer" className="social-btn">LINKEDIN</a>
            </div>
          </motion.div>

          <motion.form className="contact-form" onSubmit={handleSubmit} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
            <div className="form-group">
              <label>NAME</label>
              <input type="text" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} required />
            </div>
            <div className="form-group">
              <label>EMAIL</label>
              <input type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} required />
            </div>
            <div className="form-group">
              <label>MESSAGE</label>
              <textarea value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} rows="6" required></textarea>
            </div>
            <button type="submit" className="submit-btn">SEND_MESSAGE( ) →</button>
            <p className="form-note">
                By submitting this form, I agree to the{' '}
                <a href="/privacy" className="privacy-link">Privacy Policy</a>.
                </p>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
