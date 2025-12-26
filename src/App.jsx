import React, { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="app">
      <main>
        <div id="home">
          <Hero />
        </div>

        <About />

        <Skills />

        <section id="projects" style={{ minHeight: '100vh', padding: '100px 20px', textAlign: 'center' }}>
          <h2 className="blink-hover" style={{ fontSize: '3rem', marginBottom: '2rem' }}>Projects</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
            {[1, 2, 3].map(i => (
              <div key={i} style={{ height: '300px', background: '#252729', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
                Project {i}
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
