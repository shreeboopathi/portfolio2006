import React from 'react';
import { motion } from 'framer-motion';
import { Home, User, Code2, Briefcase, Mail } from 'lucide-react';

const Navbar = () => {
    const navItems = [
        { id: 'home', label: 'Home', icon: <Home size={20} /> },
        { id: 'about', label: 'About Me', icon: <User size={20} /> },
        { id: 'skills', label: 'Skills', icon: <Code2 size={20} /> },
        { id: 'projects', label: 'Projects', icon: <Briefcase size={20} /> },
        { id: 'contact', label: 'Contact Me', icon: <Mail size={20} /> },
    ];

    return (
        <nav className="bottom-nav">
            <div className="nav-container">
                {navItems.map((item) => (
                    <motion.a
                        key={item.id}
                        href={`#${item.id}`}
                        className="nav-item"
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="nav-icon">{item.icon}</span>
                        <span className="nav-label">{item.label}</span>
                    </motion.a>
                ))}
            </div>

            <style jsx>{`
        .bottom-nav {
          position: fixed;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1000;
          width: auto;
          padding: 0.5rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 100px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        .nav-container {
          display: flex;
          gap: 0.5rem;
          padding: 0.25rem;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1.5rem;
          border-radius: 100px;
          color: var(--text-white);
          transition: all 0.3s ease;
          font-weight: 500;
          font-size: 0.9rem;
        }

        .nav-item:hover {
          background: rgba(255, 255, 255, 0.1);
          color: var(--accent-color);
        }

        .nav-icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .bottom-nav {
            bottom: 1rem;
            width: 90%;
          }
          
          .nav-label {
            display: none;
          }
          
          .nav-item {
            padding: 1rem;
            flex: 1;
            justify-content: center;
          }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
