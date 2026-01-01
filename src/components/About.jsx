import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const text = "I am a Computer Science student with a strong interest in software development and problem-solving. I enjoy learning new technologies and applying my knowledge to real-world applications. My academic background has helped me build a solid foundation in programming, operating systems, databases, and computer networks. I am eager to grow as a developer and contribute to meaningful projects.";

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  // Variants for the blur-in effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      scale: [0, 1.3, 0.9, 1.1, 1],
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        times: [0, 0.4, 0.6, 0.8, 1],
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" ref={ref} className="about-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5 }}
        style={{ display: 'flex', gap: '20px' }}
      >
        {"About Me".split(" ").map((word, i) => (
          <span key={i} style={{ display: 'flex' }}>
            {word.split("").map((letter, j) => (
              <span key={j} className="neon-text">{letter}</span>
            ))}
          </span>
        ))}
      </motion.h2>

      <motion.div
        className="about-content"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <p className="blur-text">
          {text.split(" ").map((word, i) => (
            <motion.span
              key={i}
              variants={itemVariants}
              className="neon-text"
              style={{ display: 'inline-block', marginRight: '0.3em' }}
            >
              {word}
            </motion.span>
          ))}
        </p>
      </motion.div>

      <style jsx>{`
        .about-section {
          height: 100vh;
          padding: 100px 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          background: transparent;
          overflow: hidden;
        }

        .section-title {
          font-size: 3.5rem;
          margin-bottom: 3rem;
          color: var(--text-white);
        }

        .about-content {
          max-width: 900px;
          margin: 0 auto;
        }

        .blur-text {
          font-size: 1.25rem;
          line-height: 1.8;
          color: var(--text-gray);
          min-height: 150px;
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2.5rem;
          }
          .blur-text {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
