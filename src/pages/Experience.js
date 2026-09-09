import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Graduate Teaching Assistant / Instructor',
      company: 'University of Oklahoma',
      location: 'Norman, OK',
      period: 'AUG 2026 – PRESENT',
      type: 'TEACHING',
      points: [
        'Serve as instructor for multiple sections of UNIV 1002: Foundations Math Support',
        'Develop and deliver lessons on study strategies, time management, goal setting, and academic success',
        'Design course materials, classroom activities, assignments, and assessments aligned with course objectives',
        'Evaluate student work, provide individualized feedback, and connect students with university resources',
      ],
    },
    {
      title: 'Research Assistant',
      company: 'University of Oklahoma',
      location: 'Norman, OK',
      period: 'FEB 2025 – JUN 2026',
      type: 'AI RESEARCH',
      points: [
        'Investigated how AI reliance influences human cognition, decision-making, and learning behaviors',
        'Conducted literature reviews and analyzed research at the intersection of AI and cognitive science',
        'Collected and analyzed survey and experimental data related to AI-assisted reasoning',
        'Contributed to peer-reviewed research published and presented at university and national conferences',
      ],
    },
    {
      title: 'ML Research Assistant',
      company: 'University of Oklahoma',
      location: 'Norman, OK',
      period: 'AUG 2024 – DEC 2024',
      type: 'ML / BCI',
      points: [
        'Engineered a Brain-Computer Interface game using EEG signals for real-time gameplay control',
        'Applied machine learning techniques to improve neural signal classification and system responsiveness',
        'Processed EEG data and extracted features for thought-based interaction',
        'Collaborated with researchers on software development and neural signal processing',
      ],
    },
    {
      title: 'Parking Appeals Board Member',
      company: 'University of Oklahoma',
      location: 'Norman, OK',
      period: 'OCT 2024 – MAY 2026',
      type: 'UNIVERSITY SERVICE',
      points: [
        'Reviewed parking citation appeals by evaluating written statements, supporting evidence, and university policies',
        'Made independent, evidence-based determinations while applying university policies consistently and fairly',
        'Collaborated with board members to assess cases and support equitable outcomes',
      ],
    },
    {
      title: 'Peer Tutor',
      company: 'Independence Community College',
      location: 'Independence, KS',
      period: 'JAN 2023 – MAY 2023',
      type: 'EDUCATION',
      points: [
        'Instructed students in college-level Calculus and Algebra',
        'Adapted tutoring sessions to individual learning needs and problem-solving approaches',
      ],
    },
  ];

  const skills = {
    Languages: ['Java', 'JavaScript', 'Python', 'HTML', 'CSS', 'C++'],
    'Frameworks & Tools': [
      'Git/GitHub',
      'Docker',
      'Next.js',
      'Node.js',
      'Prisma',
      'Tailwind CSS',
      'Hugging Face',
      'PsychoPy',
    ],
    'Data & Cloud': [
      'Azure Data Studio',
      'Azure SQL Server',
      'Splunk',
      'Wireshark',
    ],
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
            My experience across computer science research, teaching, and
            university service
          </p>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.title}-${exp.period}`}
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
                {exp.points.map((point, index) => (
                  <li key={index}>{point}</li>
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
          <h2 className="skills-title">technical_skills( )</h2>

          <div className="skills-grid">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="skill-category">
                <h3 className="skill-category-title">{category}</h3>

                <div className="skill-tags">
                  {items.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
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