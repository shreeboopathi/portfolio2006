import React, { useState, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import GalaxyBackground from './components/GalaxyBackground';
import hospitalAppImg from './assets/hospital_app.png';
import gamifiedEduImg from './assets/gamified_edu.png';
import portfolioImg from './assets/portfolio_showcase.png';

const SECTIONS = ['home', 'about', 'skills', 'projects', 'contact'];

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const lastScrollTime = useRef(0);

  const projects = [
    {
      id: 1,
      name: 'Hospital App',
      image: hospitalAppImg,
      link: 'https://curenest-web-front.lovable.app/',
      showButton: true
    },
    {
      id: 2,
      name: 'Gamified Education',
      image: gamifiedEduImg,
      link: 'https://gamified-edu.lovable.app/',
      showButton: true
    },
    {
      id: 3,
      name: 'Modern Portfolio',
      image: portfolioImg,
      link: 'https://github.com/shreeboopathi/antigravity/deployments/github-pages',
      showButton: true
    }
  ];

  const triggerTransition = useCallback((targetIndex) => {
    if (isTransitioning || targetIndex === currentIndex) return;
    if (targetIndex < 0 || targetIndex >= SECTIONS.length) return;

    setIsTransitioning(true);

    // Middle of the liquid animation: Update the current view
    setTimeout(() => {
      setCurrentIndex(targetIndex);
    }, 600);

    // End of the animation
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1200);
  }, [currentIndex, isTransitioning]);

  // Handle Wheel Events for Scrolling
  useEffect(() => {
    const handleWheel = (e) => {
      // Don't trigger if already transitioning or inside a scrollable element that hasn't reached its end
      if (isTransitioning) return;

      const now = Date.now();
      if (now - lastScrollTime.current < 1500) return; // Debounce for smooth transition

      // Check for deep scroll in Projects (only section with potential overflow)
      const projectsEl = document.getElementById('projects');
      if (currentIndex === 3 && projectsEl) {
        const isScrollingDown = e.deltaY > 0;
        const isAtBottom = projectsEl.scrollHeight - projectsEl.scrollTop <= projectsEl.clientHeight + 50;
        const isAtTop = projectsEl.scrollTop <= 50;

        if (isScrollingDown && !isAtBottom) return;
        if (!isScrollingDown && !isAtTop) return;
      }

      if (Math.abs(e.deltaY) > 50) {
        const direction = e.deltaY > 0 ? 1 : -1;
        const nextIndex = currentIndex + direction;

        if (nextIndex >= 0 && nextIndex < SECTIONS.length) {
          e.preventDefault();
          triggerTransition(nextIndex);
          lastScrollTime.current = now;
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentIndex, isTransitioning, triggerTransition]);

  // Handle Navbar Click
  const handleNavClick = (id) => {
    const index = SECTIONS.indexOf(id);
    if (index !== -1) {
      triggerTransition(index);
    }
  };

  return (
    <div className="app-main-container" style={{
      background: 'transparent',
      height: '100vh',
      width: '100vw',
      overflow: 'hidden',
      position: 'fixed'
    }}>
      <GalaxyBackground />
      {/* Absolute Liquid Layers */}
      <AnimatePresence>
        {isTransitioning && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: 'fixed',
                inset: 0,
                zIndex: 10001,
                backgroundColor: '#d4ff00',
                pointerEvents: 'none',
                mixBlendMode: 'difference'
              }}
            />
            <motion.div
              style={{
                position: 'fixed',
                inset: 0,
                zIndex: 10002,
                pointerEvents: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                <motion.path
                  initial={{ d: "M 0 100 Q 50 100 100 100 L 100 100 Q 50 100 0 100 Z" }}
                  animate={{
                    d: [
                      "M 0 100 Q 50 100 100 100 L 100 100 Q 50 100 0 100 Z",
                      "M 0 100 Q 50 -50 100 100 L 100 0 Q 50 150 0 0 Z",
                      "M 0 0 Q 50 0 100 0 L 100 0 Q 50 0 0 0 Z"
                    ]
                  }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  fill="#d4ff00"
                />
              </svg>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <motion.div
        className="section-wrapper"
        animate={{
          y: `-${currentIndex * 100}vh`,
          scale: isTransitioning ? 0.95 : 1,
          filter: isTransitioning ? 'blur(15px)' : 'blur(0px)',
          opacity: isTransitioning ? 0.3 : 1
        }}
        transition={{
          y: { duration: 0 }, // Jump instantly while covered
          default: { duration: 0.8, ease: "easeInOut" }
        }}
        style={{
          height: '100vh',
          width: '100%'
        }}
      >
        <div id="home" style={{ height: '100vh', width: '100%' }}><Hero /></div>
        <div id="about" style={{ height: '100vh', width: '100%' }}><About /></div>
        <div id="skills" style={{ height: '100vh', width: '100%' }}><Skills /></div>

        <section id="projects" style={{
          height: '100vh',
          width: '100%',
          padding: '100px 20px',
          textAlign: 'center',
          overflowY: 'auto',
          backgroundColor: 'transparent'
        }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '3rem', display: 'flex', justifyContent: 'center', gap: '10px' }}>
            {"Projects".split("").map((l, i) => <span key={i} className="neon-text">{l}</span>)}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', maxWidth: '1200px', margin: '0 auto' }}>
            {projects.map((project) => (
              <div
                key={project.id}
                className="project-card floating-card"
                style={{
                  minHeight: '400px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '20px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  width: '100%',
                  height: '240px',
                  borderRadius: '16px',
                  background: '#252729',
                  marginBottom: '20px',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    <span style={{ color: 'var(--text-gray)', fontSize: '1.2rem' }}>{project.name}</span>
                  )}
                </div>
                <h3 style={{ color: 'var(--text-white)', fontSize: '1.5rem', marginBottom: '15px' }}>
                  {project.name.split(" ").map((word, i) => (
                    <span key={i} className="neon-text" style={{ marginRight: '0.4em' }}>{word}</span>
                  ))}
                </h3>
                <div style={{ marginTop: 'auto', width: '100%' }}>
                  {project.showButton && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn"
                      style={{
                        display: 'inline-block',
                        width: '100%',
                        padding: '12px 0',
                        backgroundColor: 'var(--accent-color)',
                        color: '#000',
                        borderRadius: '12px',
                        fontWeight: '700',
                        fontSize: '1.1rem',
                        transition: 'transform 0.2s, background-color 0.2s',
                        textAlign: 'center'
                      }}
                    >
                      open
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" style={{
          height: '100vh',
          width: '100%',
          padding: '100px 20px',
          textAlign: 'center',
          background: 'transparent'
        }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '2rem', display: 'flex', justifyContent: 'center', gap: '10px' }}>
            {"Contact Me".split(" ").map((w, i) => (
              <span key={i} style={{ display: 'flex' }}>
                {w.split("").map((l, j) => <span key={j} className="neon-text">{l}</span>)}
              </span>
            ))}
          </h2>
          <p style={{ color: 'var(--text-gray)', marginBottom: '2rem' }}>Let's work together on your next project!</p>
          <button
            onClick={() => setIsContactOpen(true)}
            className="btn-primary"
            style={{ background: 'var(--accent-color)', color: '#000', border: 'none', padding: '1rem 2.5rem', borderRadius: '50px', fontWeight: '700' }}
          >
            Send Message
          </button>
        </section>
      </motion.div>

      <Contact isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <Navbar onNavClick={handleNavClick} />

      <style>{`
        .app-main-container {
          overflow: hidden;
          background: #000;
        }
        .section-wrapper {
          display: flex;
          flex-direction: column;
        }
        section, div[id] {
          height: 100vh;
          width: 100vw;
          flex-shrink: 0;
        }
        #projects::-webkit-scrollbar {
          width: 6px;
        }
        #projects::-webkit-scrollbar-thumb {
          background: var(--accent-color);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}

export default App;
