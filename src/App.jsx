import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app">
      <main>
        <div id="home">
          <Hero />
        </div>

        {/* Placeholder sections for navigation */}
        <About />

        <section id="skills" style={{ minHeight: '100vh', padding: '100px 20px', textAlign: 'center', background: 'var(--bg-dark)' }}>
          <h2 className="blink-hover" style={{ fontSize: '3rem', marginBottom: '2rem' }}>Skills</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            {['Photoshop', 'Illustrator', 'Figma', 'React', 'UI/UX', 'Branding'].map(skill => (
              <span key={skill} style={{ padding: '0.5rem 1.5rem', background: 'rgba(212, 255, 0, 0.1)', border: '1px solid var(--accent-color)', borderRadius: '20px', color: 'var(--accent-color)' }}>
                {skill}
              </span>
            ))}
          </div>
        </section>

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
          <button className="btn-primary" style={{ background: 'var(--accent-color)', color: '#000', border: 'none', padding: '1rem 2.5rem', borderRadius: '50px', fontWeight: '700' }}>
            Send Message
          </button>
        </section>
      </main>

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
