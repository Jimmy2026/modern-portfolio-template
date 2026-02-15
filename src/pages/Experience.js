import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Research Assistant',
      company: 'University of Oklahoma',
      location: 'Norman, OK',
      period: 'FEB 2025 – PRESENT',
      type: 'RESEARCH',
      points: [
        'Investigating AI\'s impact on human cognition and decision-making processes',
        'Conducting literature reviews and analyzing AI models in cognitive science',
        'Processing survey data and experimental results for research publications',
      ],
    },
    {
      title: 'ML Research Assistant',
      company: 'University of Oklahoma',
      location: 'Norman, OK',
      period: 'AUG 2024 – DEC 2024',
      type: 'RESEARCH',
      points: [
        'Engineered Brain-Computer Interface game processing EEG signals for real-time control',
        'Enhanced classification accuracy using advanced ML algorithms',
        'Collaborated on custom software development for neural signal processing',
      ],
    },
    {
      title: 'Peer Tutor',
      company: 'Independence Community College',
      location: 'Independence, KS',
      period: 'JAN 2023 – MAY 2023',
      type: 'EDUCATION',
      points: [
        'Instructed students in Calculus and Algebra, improving academic performance',
        'Customized tutoring sessions for individual learning styles',
      ],
    },
    {
      title: 'Student Employee',
      company: 'Xcetera!',
      location: 'Norman, OK',
      period: 'AUG 2024 – FEB 2025',
      type: 'RETAIL',
      points: [
        'Managed operations at OU campus convenience store',
        'Handled inventory management and customer service',
      ],
    },
  ];

  const skills = {
    'Languages': ['Java', 'JavaScript', 'Python', 'HTML', 'CSS', 'C++'],
    'Frameworks & Tools': ['Git/GitHub', 'Docker', 'Next.js', 'Node.js', 'Prisma', 'Tailwind', 'Hugging Face', 'PsychoPy'],
    'Data & Cloud': ['Azure Data Studio', 'Azure SQL Server', 'Splunk', 'Wireshark'],
  };

  return (
    <div className="experience-page">
      <div className="page-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title">work_history( )</h1>
          <p className="section-description">
            My journey through research, education, and professional work
          </p>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="exp-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="exp-type-badge">{exp.type}</div>
              <div className="exp-header">
                <div>
                  <h3 className="exp-title">{exp.title}</h3>
                  <p className="exp-company">{exp.company}</p>
                </div>
                <div className="exp-meta">
                  <span className="exp-period">{exp.period}</span>
                  <span className="exp-location">{exp.location}</span>
                </div>
              </div>
              <ul className="exp-points">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="skills-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="skills-title">{/*TECHNICAL_SKILLS*/}</h2>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, items], idx) => (
              <div key={idx} className="skill-category">
                <h3 className="skill-category-title">{category}</h3>
                <div className="skill-tags">
                  {items.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
