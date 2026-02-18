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
      title: "National Park Service Database",
      subtitle: "Database  Project – University of Oklahoma",
      period: "Fall 2025",
      description:  "Originally an Azure SQL relational database project, I extended it into a full-stack web application by building a Node.js backend and interactive UI to make the system usable beyond raw SQL.",
      points: [
        "Designed a normalized relational schema with foreign keys and structured constraints",
        "Built a Node.js + Express API to expose database functionality through REST endpoints",
        "Added a responsive dashboard with live statistics, activity tracking, and management tools",
        "Implemented donation processing logic and a secure raw SQL interface for advanced queries"
      ],
      tech: ["Node.js", "Express", "SQLite", "JavaScript"],
      github: "https://github.com/Jimmy2026/NationalParkDB",
      demo: "https://nationalparkdb.onrender.com",
    },
    {
      id: 3,
      title: 'Recipe-AI',
      subtitle: 'Software Engineering Group Project — University of Oklahoma',
      period: 'SPRING 2025',
      description: 'A web application that generates custom recipes based on ingredients provided by the user.',
      points: [
          'Allows users to enter ingredients they already have and generates complete recipes tailored to those inputs.',
          'Provides step-by-step cooking instructions along with ingredient measurements and preparation details.',
          'Suggests meal ideas to help reduce food waste and make cooking more accessible.',
          'Delivers real-time results through AI integration, allowing users to quickly explore different recipe options.',
          'Built with a responsive interface so it works smoothly across desktop and mobile devices.'
      ],
      tech: ['React', 'Node.js + Express', 'MongoDB', 'Mongoose', 'Python (TensorFlow)', 'NLP', 'Axios', 'Docker'],
      github: '', // private repository
      demo: 'https://drive.google.com/file/d/1QjINrjBmTg_gTimpyZ74RWT-tMJG2auS/view?usp=sharing'
    },
    {
      id: 4,
      title: 'Ripple Platform',
      subtitle: 'AI-Powered Nonprofit Analytics SaaS',
      period: 'Feb 2026',
      description: 'Full-stack SaaS platform for nonprofit donor management and multi-site analytics, designed to reduce manual data entry through AI-powered automation.',
      points: [
          'Built a multi-tenant system with Next.js and Supabase to manage organizations, sites, donors, and campaigns with proper role-based permissions.',
          'Connected Hugging Face APIs to generate executive summaries and donor outreach drafts from engagement data.',
          'Developed a real-time dashboard showing key metrics across sites, optimizing database queries for faster load times.',
          'Implemented authentication and protected routes using Supabase Auth.',
          'Deployed the application to Vercel with a clean separation between server and client logic.',
      ],
      tech: ['Next.js 14', 'TypeScript', 'Supabase', 'PostgreSQL', 'Hugging Face API', 'Tailwind CSS', 'Vercel'],
      github: 'https://github.com/Jimmy2026/ripple-platform',
      demo: '', // add if deployed
    },
    {
      id: 5,
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
    {
      id: 6,
      title: 'Showing Some Humanity',
      subtitle: 'Advocacy Web Project',
      period: 'AUG–DEC 2023',
      description: 'Single-page advocacy website raising awareness about global food insecurity, built during CodePath\'s Web Development 101 program and redesigned in 2025 with a modern UI.',
      points: [
          'Built a responsive single-page site from scratch using vanilla HTML, CSS, and JavaScript (no frameworks) covering hunger statistics, impact breakdowns, and a working petition form with live signature tracking.',
          'Implemented interactive features including dark mode toggle, scroll-triggered reveal animations, form validation with error handling, and a modal popup — all in native JavaScript without any libraries.',
          'Redesigned the project in 2025 with a production-grade UI: CSS custom properties for theming, Intersection Observer API for scroll animations, CSS Grid and Flexbox layouts, and an earthy typographic design system using Playfair Display and Source Serif 4.',
          'Structured the site around real UN World Food Programme data, translating complex statistics into digestible visual components including a stat grid, regional impact breakdown, and scrolling news ticker.',
      ],
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Jimmy2026/Poverty-Aid-Website',
      demo: 'https://jimmy2026.github.io/Poverty-Aid-Website',
    }
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

