import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
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
      github: '', // Add GitHub link if public
      demo: '',   // Add demo link if available
    },
    {
      id: 2,
      title: 'Ripple Platform',
      subtitle: 'AI-Powered Nonprofit Analytics SaaS',
      period: 'Feb 2026',
      description: 'Full-stack SaaS platform for nonprofit donor management and multi-site analytics, designed to reduce manual data entry through AI-powered automation.',
      points: [
          'Designed and built a multi-tenant architecture using Next.js App Router and Supabase Postgres, modeling organizations, sites, donors, campaigns, and interactions with relational integrity and role-based access control.',
          'Integrated Hugging Face inference APIs to generate executive reports and personalized donor outreach drafts from structured engagement data, focusing on prompt reliability and context-aware output.',
          'Built a real-time analytics dashboard with dynamic KPIs across multiple sites, implementing server-side data fetching and optimized queries for performance.',
          'Implemented secure authentication flows using Supabase Auth with protected routes and session-aware rendering.',
          'Structured the application for production-style deployment on Vercel, separating server-only logic from client components and managing environment variables securely.',
      ],
      tech: ['Next.js 14', 'TypeScript', 'Supabase', 'PostgreSQL', 'Hugging Face API', 'Tailwind CSS', 'Vercel'],
      github: 'https://github.com/Jimmy2026/ripple-platform',
      demo: '', // add if deployed
    },
    {
      id: 3,
      title: 'Modern Portfolio Template',
      subtitle: 'Open Source React Template',
      description: 'An open-source portfolio website template I created with a terminal-inspired, cyber-organic design. Built with React and Framer Motion, featuring dark/light mode, smooth animations, and a distinctive aesthetic that breaks away from generic templates. The project is available on GitHub for anyone to use and customize for their own portfolio.',
      points: [
          'Built the entire frontend using React 18, React Router for navigation, and Framer Motion for smooth page transitions and interactive animations.',
          'Designed a unique terminal-inspired UI with function call styling (like work_history(), get_in_touch()) that creates a tech-forward aesthetic different from typical portfolio sites.',
          'Implemented a persistent dark/light theme toggle with CSS variables, allowing users to switch between modes with their preference saved in localStorage.',
          'Created a fully responsive design that adapts seamlessly across desktop, tablet, and mobile devices with custom breakpoints and flexible layouts.',
          'Made the project open source under MIT License, wrote comprehensive documentation, and set it up as a GitHub template for easy reuse by other developers.',
],
      tech: ['React', 'React Router', 'Framer Motion', 'CSS3', 'JavaScript', 'Vercel'],
      github: 'https://github.com/Jimmy2026/modern-portfolio-template',
      demo: 'https://abdulmaliksho.vercel.app',
    },
    {
      id: 4,
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
      github: '', // Add GitHub link if public
      demo: '',   // Add demo link if available
    },
  ];

return (
  <div className="projects-page">
    <div className="page-container">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="section-title">build_log( )</h1>
        <p className="section-description">
          AI & full-stack development work
        </p>
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
              {proj.period && (
                <span className="project-period">{proj.period}</span>
              )}
            </div>

            <p className="project-desc">{proj.description}</p>

            <ul className="project-points">
              {proj.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>

            <div className="project-tech">
              {proj.tech.map((t, i) => (
                <span key={i} className="tech-tag">
                  {t}
                </span>
              ))}
            </div>

            {(proj.github || proj.demo) && (
              <div className="project-links">
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <span>View Code</span>
                    <span className="link-arrow">→</span>
                  </a>
                )}

                {proj.demo && (
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-link-demo"
                  >
                    <span>Live Demo</span>
                    <span className="link-arrow">→</span>
                  </a>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);
};

export default Projects;

