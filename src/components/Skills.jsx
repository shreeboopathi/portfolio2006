import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Palette,
  Figma,
  Cpu,
  Globe,
  Database,
  Terminal,
  Smartphone,
  Layers,
  Zap
} from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: 'React', icon: <Code2 size={40} />, color: '#61DAFB' },
    { name: 'Design', icon: <Palette size={40} />, color: '#FF4D4D' },
    { name: 'Figma', icon: <Figma size={40} />, color: '#A259FF' },
    { name: 'Systems', icon: <Cpu size={40} />, color: '#FF944D' },
    { name: 'Web Dev', icon: <Globe size={40} />, color: '#4DFF94' },
    { name: 'Databases', icon: <Database size={40} />, color: '#4D94FF' },
    { name: 'CLI', icon: <Terminal size={40} />, color: '#D4FF00' },
    { name: 'Mobile', icon: <Smartphone size={40} />, color: '#FF4DFF' },
    { name: 'UI/UX', icon: <Layers size={40} />, color: '#00D4FF' },
    { name: 'Performance', icon: <Zap size={40} />, color: '#FFD700' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title" style={{ display: 'flex', gap: '15px' }}>
        {"My Skills".split(" ").map((word, i) => (
          <span key={i} style={{ display: 'flex' }}>
            {word.split("").map((letter, j) => (
              <span key={j} className="neon-text">{letter}</span>
            ))}
          </span>
        ))}
      </h2>

      <motion.div
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card neon-block-hover floating-card"
            variants={itemVariants}
          >
            <div className="icon-container" style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <span className="skill-name" style={{ display: 'flex' }}>
              {skill.name.split("").map((letter, i) => (
                <span key={i} className="neon-text">{letter}</span>
              ))}
            </span>
          </motion.div>
        ))}
      </motion.div>

      <style jsx>{`
        .skills-section {
          height: 100vh;
          padding: 100px 2rem;
          background: transparent;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .section-title {
          font-size: 3.5rem;
          margin-bottom: 4rem;
          color: var(--text-white);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 2rem;
          max-width: 1000px;
          width: 100%;
        }

        .skill-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .icon-container {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }

        .skill-card:hover .icon-container {
          transform: translateY(-5px);
        }

        .skill-name {
          color: var(--text-white);
          font-weight: 500;
          font-size: 1rem;
          opacity: 0.8;
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2.5rem;
          }
          .skills-grid {
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 1rem;
          }
          .skill-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
