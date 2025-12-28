import React, { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import hospitalAppImg from './assets/hospital_app.png';
import gamifiedEduImg from './assets/gamified_edu.png';
import portfolioImg from './assets/portfolio_showcase.png';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

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

  return (
    <div className="app">
      <main>
        <div id="home">
          <Hero />
        </div>

        <About />

        <Skills />

        <section id="projects" style={{ minHeight: '100vh', padding: '100px 20px', textAlign: 'center' }}>
          <h2 className="blink-hover" style={{ fontSize: '3rem', marginBottom: '3rem' }}>Projects</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', maxWidth: '1200px', margin: '0 auto' }}>
            {projects.map((project) => (
              <div
                key={project.id}
                className="project-card"
                style={{
                  minHeight: '400px',
                  background: '#1a1a1a',
                  borderRadius: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '20px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  transition: 'all 0.3s ease',
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

                <h3 style={{ color: 'var(--text-white)', fontSize: '1.5rem', marginBottom: '15px' }}>{project.name}</h3>

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

        <section id="contact" style={{ minHeight: '100vh', padding: '100px 20px', textAlign: 'center', background: 'var(--bg-dark)' }}>
          <h2 className="blink-hover" style={{ fontSize: '3rem', marginBottom: '2rem' }}>Contact Me</h2>
          <p style={{ color: 'var(--text-gray)', marginBottom: '2rem' }}>Let's work together on your next project!</p>
          <button
            onClick={() => setIsContactOpen(true)}
            className="btn-primary"
            style={{ background: 'var(--accent-color)', color: '#000', border: 'none', padding: '1rem 2.5rem', borderRadius: '50px', fontWeight: '700' }}
          >
            Send Message
          </button>
        </section>
      </main>

      <Contact isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      <Navbar />

      <style jsx>{`
        .app {
          width: 100%;
        }
        
        section {
          scroll-margin-top: 2rem;
        }

        h2 {
          color: var(--text-white);
        }
      `}</style>
    </div>
  );
}

export default App;
