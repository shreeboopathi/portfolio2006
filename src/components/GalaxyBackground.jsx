import React from 'react';
import { motion } from 'framer-motion';

const GalaxyBackground = () => {
    // Generate random stars
    const stars = Array.from({ length: 150 }).map((_, i) => ({
        id: i,
        size: Math.random() * 2 + 1,
        top: Math.random() * 100 + '%',
        left: Math.random() * 100 + '%',
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 5
    }));

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: -1,
            backgroundColor: '#000000',
            overflow: 'hidden',
            pointerEvents: 'none'
        }}>
            {/* Deep Space Gradients (Nebulae) */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    position: 'absolute',
                    top: '-10%',
                    left: '-10%',
                    width: '60%',
                    height: '60%',
                    background: 'radial-gradient(circle, rgba(212, 255, 0, 0.08) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                }}
            />
            <motion.div
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    position: 'absolute',
                    bottom: '-10%',
                    right: '-10%',
                    width: '70%',
                    height: '70%',
                    background: 'radial-gradient(circle, rgba(0, 212, 255, 0.05) 0%, transparent 70%)',
                    filter: 'blur(80px)',
                }}
            />

            {/* Stars */}
            {stars.map((star) => (
                <motion.div
                    key={star.id}
                    initial={{ opacity: 0.1 }}
                    animate={{
                        opacity: [0.1, 0.8, 0.1],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: star.duration,
                        repeat: Infinity,
                        delay: star.delay,
                        ease: "linear"
                    }}
                    style={{
                        position: 'absolute',
                        top: star.top,
                        left: star.left,
                        width: star.size,
                        height: star.size,
                        backgroundColor: '#ffffff',
                        borderRadius: '50%',
                        boxShadow: '0 0 5px #ffffff'
                    }}
                />
            ))}

            {/* Subtle Grid Lines for Depth */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
                backgroundSize: '50px 50px',
                maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
            }} />
        </div>
    );
};

export default GalaxyBackground;
