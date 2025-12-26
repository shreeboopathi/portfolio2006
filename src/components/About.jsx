import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
    const text = "I am a Computer Science student with a strong interest in software development and problem-solving. I enjoy learning new technologies and applying my knowledge to real-world applications. My academic background has helped me build a solid foundation in programming, operating systems, databases, and computer networks. I am eager to grow as a developer and contribute to meaningful projects.";

    const [displayedText, setDisplayedText] = useState("");
    const [isDone, setIsDone] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    useEffect(() => {
        if (isInView) {
            let i = 0;
            const interval = setInterval(() => {
                setDisplayedText(text.slice(0, i));
                i++;
                if (i > text.length) {
                    clearInterval(interval);
                    setIsDone(true);
                }
            }, 30); // Speed of typing
            return () => clearInterval(interval);
        }
    }, [isInView]);

    return (
        <section id="about" ref={ref} className="about-section">
            <h2 className="blink-hover section-title">About Me</h2>
            <div className="about-content">
                <p className={`typing-text ${!isDone && isInView ? 'typing-cursor' : ''}`}>
                    {displayedText}
                </p>
            </div>

            <style jsx>{`
        .about-section {
          min-height: 100vh;
          padding: 100px 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          background: var(--bg-dark);
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

        .typing-text {
          font-size: 1.25rem;
          line-height: 1.8;
          color: var(--text-gray);
          min-height: 150px;
          display: inline;
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2.5rem;
          }
          .typing-text {
            font-size: 1.1rem;
          }
        }
      `}</style>
        </section>
    );
};

export default About;
