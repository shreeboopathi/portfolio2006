import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Layers, Figma, Code, Cpu, PenTool } from 'lucide-react';
import profileImg from '../assets/shree_profile.jpg';

const Hero = () => {
  const orbitIcons = [
    { icon: <Palette size={24} />, color: '#ff4d4d', label: 'Design' },
    { icon: <Layers size={24} />, color: '#4d94ff', label: 'Layers' },
    { icon: <Figma size={24} />, color: '#a259ff', label: 'Figma' },
    { icon: <Code size={24} />, color: '#d4ff00', label: 'Code' },
    { icon: <Cpu size={24} />, color: '#ff944d', label: 'Tech' },
    { icon: <PenTool size={24} />, color: '#4dff94', label: 'Art' },
  ];

  return (
    <section className="hero-section">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
        >
          <motion.h3
            className="greeting blink-hover"
            initial={{ width: 0 }}
            animate={{ width: "fit-content" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{ overflow: "hidden", whiteSpace: "nowrap" }}
          >
            Hello I'M
          </motion.h3>
          <motion.h1
            className="name blink-hover"
            initial={{ width: 0 }}
            animate={{ width: "fit-content" }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            style={{ overflow: "hidden", whiteSpace: "nowrap" }}
          >
            Shree
          </motion.h1>
          <motion.h2
            className="title blink-hover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            A Creative <span className="highlight">Graphic Designer</span>
          </motion.h2>
        </motion.div>

        <div className="hero-visual">
          <div className="orbit-container">
            {/* Halo Effect */}
            <div className="halo"></div>

            {/* Profile Image */}
            <div className="profile-wrapper">
              <img
                src={profileImg}
                alt="Shree"
                className="profile-img"
              />
            </div>

            {/* Orbiting Icons */}
            <div className="orbit-path">
              {orbitIcons.map((item, index) => (
                <motion.div
                  key={index}
                  className="orbiting-icon"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    transformOrigin: 'center',
                  }}
                >
                  <div
                    className="icon-badge"
                    style={{
                      backgroundColor: item.color,
                      transform: `rotate(-${(360 / orbitIcons.length) * index}deg) translateY(-180px) rotate(0deg)`,
                      left: '50%',
                      top: '50%',
                      marginLeft: '-20px',
                      marginTop: '-20px',
                    }}
                  >
                    {item.icon}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          position: relative;
          overflow: hidden;
        }

        .hero-content {
          max-width: 1200px;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-text {
          z-index: 2;
        }

        .greeting {
          color: var(--accent-color);
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          font-weight: 500;
        }

        .name {
          font-size: 6rem;
          font-weight: 900;
          line-height: 1;
          margin-bottom: 1rem;
          letter-spacing: -2px;
        }

        .title {
          font-size: 2rem;
          color: var(--text-white);
          margin-bottom: 2.5rem;
        }

        .highlight {
          color: var(--accent-color);
        }

        .hero-buttons {
          display: flex;
          gap: 1.5rem;
        }

        .btn-primary {
          background: var(--accent-color);
          color: #000;
          border: none;
          padding: 1rem 2.5rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1.1rem;
        }

        .btn-secondary {
          background: #fff;
          color: #000;
          border: none;
          padding: 1rem 2.5rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1.1rem;
        }

        .hero-visual {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .orbit-container {
          position: relative;
          width: 400px;
          height: 400px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .halo {
          position: absolute;
          width: 250px;
          height: 250px;
          background: radial-gradient(circle, var(--accent-color) 0%, transparent 70%);
          border-radius: 50%;
          opacity: 0.3;
          filter: blur(20px);
          animation: pulse 4s infinite alternate;
        }

        @keyframes pulse {
          from { transform: scale(1); opacity: 0.3; }
          to { transform: scale(1.2); opacity: 0.5; }
        }

        .profile-wrapper {
          width: 300px;
          height: 300px;
          border-radius: 50%;
          overflow: hidden;
          z-index: 1;
          border: 4px solid rgba(255, 255, 255, 0.1);
        }

        .profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .orbit-path {
          position: absolute;
          width: 360px;
          height: 360px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
        }

        .orbiting-icon {
          position: absolute;
          top: 0;
          left: 0;
        }

        .icon-badge {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
          position: absolute;
        }

        @media (max-width: 968px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2rem;
          }
          
          .hero-buttons {
            justify-content: center;
          }

          .name {
            font-size: 4rem;
          }

          .orbit-container {
            width: 300px;
            height: 300px;
          }

          .profile-wrapper {
            width: 220px;
            height: 220px;
          }

          .orbit-path {
            width: 280px;
            height: 280px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
