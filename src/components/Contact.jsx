import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github } from 'lucide-react';

const Contact = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleDone = () => {
    const subject = encodeURIComponent("Portfolio Contact");
    const body = encodeURIComponent(message);
    window.location.href = `mailto:nilashree018@gmail.com?subject=${subject}&body=${body}`;
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-overlay">
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              y: [0, -15, 0]
            }}
            transition={{
              scale: { duration: 0.3 },
              opacity: { duration: 0.3 },
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="contact-modal"
          >
            <div className="modal-header">
              <h2>CONTACT ME</h2>
            </div>

            <div className="modal-body">
              <div className="input-group">
                <div className="label-box">From</div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="modal-input"
                />
              </div>

              <div className="input-group">
                <div className="label-box">To</div>
                <input
                  type="text"
                  value="nilashree018@gmail.com"
                  readOnly
                  className="modal-input readonly"
                />
              </div>

              <div className="input-group full-width">
                <textarea
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="modal-textarea"
                />
              </div>

              <button className="done-btn" onClick={handleDone}>
                DONE
              </button>

              <a
                href="https://github.com/shreeboopathi"
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                <Github size={24} />
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>

          <style jsx>{`
            .modal-overlay {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: rgba(0, 0, 0, 0.8);
              backdrop-filter: blur(5px);
              display: flex;
              align-items: center;
              justify-content: center;
              z-index: 2000;
            }

            .contact-modal {
              background: #d1d5db;
              width: 90%;
              max-width: 500px;
              padding: 2rem;
              border-radius: 20px;
              box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 1.5rem;
              border: 1px solid rgba(255, 255, 255, 0.2);
            }

            .modal-header h2 {
              background: linear-gradient(to bottom, #ffffff, #a0a0a0);
              color: #000;
              padding: 0.75rem 2.5rem;
              border-radius: 10px;
              border: 2px solid #000;
              font-weight: 900;
              letter-spacing: 1px;
              box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
              margin: 0;
            }

            .modal-body {
              width: 100%;
              display: flex;
              flex-direction: column;
              gap: 1rem;
              align-items: center;
            }

            .input-group {
              display: flex;
              width: 100%;
              gap: 0.5rem;
            }

            .label-box {
              background: linear-gradient(to bottom, #ffffff, #a0a0a0);
              color: #000;
              padding: 0.5rem 1rem;
              border-radius: 10px;
              border: 2px solid #000;
              font-weight: 700;
              min-width: 80px;
              text-align: center;
              display: flex;
              align-items: center;
              justify-content: center;
              box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            }

            .modal-input {
              flex: 1;
              padding: 0.75rem 1rem;
              border-radius: 10px;
              border: 2px solid #000;
              background: #f3f4f6;
              color: #000;
              font-size: 1rem;
              box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1);
            }

            .modal-input.readonly {
              background: #e5e7eb;
              color: #4b5563;
            }

            .modal-textarea {
              width: 100%;
              height: 100px;
              padding: 1rem;
              border-radius: 10px;
              border: 2px solid #000;
              background: linear-gradient(to bottom, #ffffff, #d1d5db);
              color: #000;
              font-size: 1rem;
              resize: none;
              box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1);
            }

            .done-btn {
              background: linear-gradient(to bottom, #ffffff, #a0a0a0);
              color: #000;
              padding: 0.75rem 3rem;
              border-radius: 10px;
              border: 2px solid #000;
              font-weight: 900;
              font-size: 1.2rem;
              cursor: pointer;
              transition: transform 0.2s;
              box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
              margin-top: 1rem;
            }

            .done-btn:hover {
              transform: scale(1.05);
            }

            .github-link {
              display: flex;
              align-items: center;
              gap: 0.5rem;
              color: #000;
              text-decoration: none;
              font-weight: 700;
              margin-top: 1rem;
              transition: opacity 0.2s;
            }

            .github-link:hover {
              opacity: 0.7;
            }
          `}</style>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Contact;
