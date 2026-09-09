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
        delayChildren: 1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
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
              M.S. COMPUTER SCIENCE
              <span className="title-divider"> | </span>
              AI RESEARCHER
              <span className="title-divider"> | </span>
              INSTRUCTOR
              <span className="title-suffix">{' />'}</span>
            </motion.h2>

            <motion.div
              className="hero-description"
              variants={itemVariants}
            >
              <p className="about-text">
                I’m a Computer Science master’s student at the University of Oklahoma
                working across artificial intelligence, software development, and
                human-centered computing.
              </p>

              <p className="about-text">
                My research has explored how reliance on AI can influence human
                cognition and decision-making, resulting in peer-reviewed work
                published through the ASEE Annual Conference. I have also worked
                with machine learning and EEG data in brain-computer interface
                research.
              </p>

              <p className="about-text">
                Alongside research, I serve as a graduate teaching assistant and
                instructor at OU, where I design course materials, lead classes,
                and support students in developing stronger academic and
                problem-solving skills.
              </p>

              <p className="about-text">
                I enjoy building full-stack and AI-powered applications and
                exploring how software, machine learning, and human behavior
                intersect.
              </p>
            </motion.div>

            <motion.div className="hero-cta" variants={itemVariants}>
              <Link to="/projects" className="cta-primary">
                <span className="cta-text">VIEW_PROJECTS( )</span>
                <span className="cta-arrow">→</span>
              </Link>

              <Link to="/contact" className="cta-secondary">
                <span className="cta-text">CONTACT</span>
              </Link>

              <a
                href="/resume.pdf"
                className="cta-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="cta-text">RESUME.PDF</span>
                <span className="cta-arrow">→</span>
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* About / Education Section */}
        <motion.section
          className="about-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="about-grid">
            <div className="education-section">
              <h3 className="education-title">Education</h3>

              <div className="education-card">
                <img
                  src="/ou.png"
                  alt="University of Oklahoma logo"
                  className="edu-logo"
                />

                <div className="edu-info">
                  <p className="edu-date">AUG 2026 – PRESENT</p>

                  <h4 className="edu-school">
                    University of Oklahoma
                  </h4>

                  <p className="edu-degree">
                    Master of Science in Computer Science
                  </p>

                  <p className="edu-courses">
                    Courses: AI Software Engineering, Data Networks,
                    Responsible and Ethical AI & Machine Learning
                  </p>
                </div>
              </div>

              <div className="education-card">
                <img
                  src="/ou.png"
                  alt="University of Oklahoma logo"
                  className="edu-logo"
                />

                <div className="edu-info">
                  <p className="edu-date">MAY 2026</p>

                  <h4 className="edu-school">
                    University of Oklahoma
                  </h4>

                  <p className="edu-degree">
                    Bachelor of Science in Computer Science
                  </p>

                  <p className="edu-courses">
                    Courses: Data Structures and Algorithms, Theory of
                    Computation, Operating Systems, Software Engineering,
                    Database Management, Parallel and Distributed Computing
                  </p>
                </div>
              </div>

              <div className="education-card">
                <img
                  src="/indycc.png"
                  alt="Independence Community College logo"
                  className="edu-logo"
                />

                <div className="edu-info">
                  <p className="edu-date">2022 – 2023</p>

                  <h4 className="edu-school">
                    Independence Community College
                  </h4>

                  <p className="edu-degree">
                    Computer Science
                  </p>

                  <p className="edu-courses">
                    All-Kansas Academic Team Award recipient
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Stack */}
          <div className="tech-stack">
            <h3 className="tech-title">technical_stack( )</h3>

            <div className="tech-grid">
              {[
                'Python',
                'Java',
                'JavaScript',
                'React',
                'Next.js',
                'Node.js',
                'Docker',
                'Prisma',
                'Tailwind CSS',
                'Azure',
                'Hugging Face',
                'PsychoPy',
                'AI / ML',
                'EEG Analysis',
              ].map((tech, idx) => (
                <motion.span
                  key={tech}
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