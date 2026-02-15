import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Promotion Altitude Risk Engine',
      subtitle: 'OU Hackathon 2026',
      period: 'FEB 2026',
      description: 'AI-powered workforce management tool for data-driven promotion decisions with risk scoring and performance benchmarking.',
      points: [
          'Built the entire stack using Next.js for the frontend, Node.js for the backend, Prisma for database management, and Docker for deployment. We chose these technologies because they\'re production-ready and can scale as companies grow.',
          'Integrated Hugging Face AI models to generate executive summaries that translate raw performance data into clear, actionable insights. I spent a lot of time engineering the prompts to make sure the AI output actually made sense for business contexts.',
          'Designed a scoring system that compares employee performance against industry standards from the O*NET database. The algorithm calculates a "promotion readiness" score while flagging potential bias in the data.',
          'Added a scenario simulation feature so HR teams can test out promotion decisions before making them official—basically a sandbox for understanding how promotions might affect team dynamics and budgets.',
          'Created a clean, intuitive dashboard with Tailwind CSS that makes all this complex data actually understandable. Real-time charts, visual analytics, and interactive elements that don\'t require a data science degree to interpret.',
],
      tech: ['Next.js', 'Node.js', 'Prisma', 'Docker', 'Hugging Face', 'Tailwind'],
    },
    {
      title: 'Brain-Computer Interface Game',
      subtitle: 'ML Research Project',
      period: 'AUG–DEC 2024',
      description: 'BCI system processing EEG signals for thought-based gameplay control with real-time neural feedback.',
      points: [
          'Built a signal processing pipeline that cleans up raw EEG data in real-time, filtering out noise while keeping the neural patterns we actually need. Got the signal quality to improve by about 40% compared to what we started with.',
          'Trained several machine learning models (Random Forest, SVM, and some neural networks) to recognize different mental states from the EEG patterns. After a lot of testing and tuning, we hit 87% accuracy across five different thought-based commands.',
          'Implemented real-time feedback using PsychoPy so users could see and hear when the system recognized their commands. This closed-loop approach helped people learn how to "think correctly" for the system much faster.',
          'Worked with neuroscientists, engineers, and designers to make the system actually usable. We ran studies with 15+ participants to test how well it worked and where we needed to improve.',
          'Wrote up our findings for research reports, focusing on what we learned about reducing calibration time and making the system work consistently across multiple sessions—two big problems in BCI research.',
          'Built the software components using Python with libraries like NumPy for data processing, SciPy for signal analysis, and TensorFlow for the machine learning models. Focused heavily on optimization to keep latency low, which is critical for real-time brain-computer interfaces.',
],
      tech: ['Python', 'ML', 'Signal Processing', 'PsychoPy', 'TensorFlow'],
    },
  ];

  return (
    <div className="projects-page">
      <div className="page-container">
        <motion.div className="section-header" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="section-title">build_log( )</h1>
          <p className="section-description">AI & full-stack development work</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <div className="project-header">
                <h3 className="project-title">{proj.title}</h3>
                <p className="project-subtitle">{proj.subtitle}</p>
                <span className="project-period">{proj.period}</span>
              </div>
              <p className="project-desc">{proj.description}</p>
              <ul className="project-points">
                {proj.points.map((pt, i) => (<li key={i}>{pt}</li>))}
              </ul>
              <div className="project-tech">
                {proj.tech.map((t, i) => (<span key={i} className="tech-tag">{t}</span>))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
