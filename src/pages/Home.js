import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'ABDULMALIK SHODUNKE';
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 80);
    
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="home-page">
      <div className="page-container">
        {/* Hero Section */}
        <section className="hero-section">
          <motion.div
            className="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="hero-label" variants={itemVariants}>
              <span className="label-line"></span>
              <span className="label-text">SYSTEM_INITIALIZED</span>
            </motion.div>

            <div className="hero-name-container">
                <img
                    src="/profile-image.jpg"
                    alt="AbdulMalik Shodunke"
                    className="hero-image"
                />
                <h1 className="hero-name">
                    {displayText}
                    <span className="cursor-blink">_</span>
                </h1>
            </div>

            <motion.h2 className="hero-title" variants={itemVariants}>
              <span className="title-prefix">{'<'}</span>
              COMPUTER SCIENCE STUDENT
              <span className="title-divider"> | </span>
              AI RESEARCHER
              <span className="title-suffix">{' />'}</span>
            </motion.h2>

            <motion.p className="hero-description" variants={itemVariants}>
              Welcome to my corner of the internet. I'm a CS student who likes building things,
                breaking things (ethically), and figuring out how technology actually works. Stick
                around if you want to see what I've been working on.
            </motion.p>

            <motion.div className="hero-cta" variants={itemVariants}>
              <Link to="/projects" className="cta-primary">
                <span className="cta-text">VIEW_PROJECTS( )</span>
                <span className="cta-arrow">→</span>
              </Link>
              <Link to="/contact" className="cta-secondary">
                <span className="cta-code">{/**/}</span>
                <span className="cta-text">CONTACT</span>
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <motion.section
          className="about-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-header">
            <h2 className="section-title">who_am_i( )</h2>
          </div>

          <div className="about-grid">
            <div className="about-content">
              <p className="about-text">
                  I'm a Computer Science student at the University of Oklahoma with interests spanning software engineering, AI, and cybersecurity. I enjoy working on projects that sit at the intersection of these fields and exploring where technology can have real impact.
              </p>
              <p className="about-text">
                  Currently, I'm researching how AI influences human cognition and decision-making processes. Previously, I worked on Brain-Computer Interface systems that translate EEG signals into computer commands. I've also built full-stack applications at hackathons and hold a CodePath Cybersecurity certification.
              </p>
              <p className="about-text">
                  Long-term, I'm interested in roles where I can work on technically challenging problems—whether that's building scalable systems, developing AI applications, or working in security. Outside of coding, I'm into video games and reading manhwa, which honestly keeps me sane between projects and deadlines.
              </p>
            </div>

            <div className="education-section">
                <h3 className="education-title">Education</h3>
                <div className="education-card">
                    <h4 className="edu-school">University of Oklahoma</h4>
                    <p className="edu-degree">Bachelors' in Computer Science</p>
                    <p className="edu-date">2023 - 2026</p>
                </div>

                <div className="education-card">
                    <h4 className="edu-school">Independence Community College</h4>
                    <p className="edu-degree">Computer Science</p>
                    <p className="edu-date">2022 - 2023</p>
                </div>
            </div>
          </div>

          <div className="tech-stack">
            <h3 className="tech-title">{/*TECH_STACK*/}</h3>
            <div className="tech-grid">
              {['Python', 'Java', 'JavaScript', 'React', 'Next.js', 'Node.js', 
                'Docker', 'Azure', 'ML/AI', 'EEG Analysis'].map((tech, idx) => (
                <motion.span
                  key={idx}
                  className="tech-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Home;
