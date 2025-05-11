'use client';

import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface SmokeParticle {
    id: number;
    x: number;
    y: number;
    size: number;
    opacity: number;
    duration: number;
    delay: number;
    image: number;
    scale: number;
    rotate: number;
}

const SmokeAnimation: React.FC = () => {
    const [particles, setParticles] = useState<SmokeParticle[]>([]);
    const [dimensions, setDimensions] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 1200,
        height: typeof window !== 'undefined' ? window.innerHeight : 800
    });
    const controls = useAnimation();

    // Update dimensions on window resize
    useEffect(() => {
        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Generate smoke particles on mount and occasionally refresh them
    useEffect(() => {
        const generateParticles = () => {
            const particleCount = Math.max(3, Math.floor(dimensions.width / 400));
            const newParticles: SmokeParticle[] = [];

            for (let i = 0; i < particleCount; i++) {
                newParticles.push(createParticle(i));
            }

            setParticles(newParticles);
        };

        generateParticles();

        // Regenerate particles occasionally
        const interval = setInterval(() => {
            generateParticles();
        }, 30000); // Every 30 seconds

        return () => clearInterval(interval);
    }, [dimensions]);

    // Create a single smoke particle with random properties
    const createParticle = (id: number): SmokeParticle => {
        // Distribute particles across the screen with some randomness
        const x = Math.random() * dimensions.width;
        const y = Math.random() * dimensions.height;

        // Size should be proportional to screen size for responsiveness
        const sizeBase = Math.min(dimensions.width, dimensions.height) * 0.3;
        const size = sizeBase + Math.random() * sizeBase * 0.5;

        return {
            id,
            x,
            y,
            size,
            opacity: 0.03 + Math.random() * 0.04, // Very subtle opacity
            duration: 15 + Math.random() * 25, // Slower, more gentle movement
            delay: Math.random() * 10, // Staggered start
            image: Math.floor(Math.random() * 9) + 1, // 9 smoke images
            scale: 0.8 + Math.random() * 0.4,
            rotate: Math.random() * 360, // Random initial rotation
        };
    };

    // Prefers-reduced-motion media query support
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setPrefersReducedMotion(mediaQuery.matches);

        const handleChange = (e: MediaQueryListEvent) => {
            setPrefersReducedMotion(e.matches);
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    if (prefersReducedMotion) {
        return null; // Don't render animation if user prefers reduced motion
    }

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute opacity-0"
                    style={{
                        width: particle.size,
                        height: particle.size,
                        left: particle.x,
                        top: particle.y,
                        background: `url('/images/Smoke/Background_0${particle.image}.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: '50%',
                        filter: 'blur(15px)',
                        mixBlendMode: 'overlay',
                        opacity: 0,
                    }}
                    initial={{
                        x: 0,
                        y: 0,
                        opacity: 0,
                        scale: particle.scale,
                        rotate: particle.rotate,
                    }}
                    animate={{
                        y: [0, -particle.size * 0.7],
                        x: [0, (Math.random() * 2 - 1) * 50], // Slight horizontal drift
                        opacity: [0, particle.opacity, 0],
                        scale: [particle.scale, particle.scale * 1.2, particle.scale * 0.9],
                        rotate: [particle.rotate, particle.rotate + (Math.random() * 40 - 20)],
                    }}
                    transition={{
                        duration: particle.duration,
                        delay: particle.delay,
                        repeat: Infinity,
                        repeatDelay: Math.random() * 5,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Add very subtle color tint variations for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/0 to-[var(--accent-secondary)]/[0.01] mix-blend-overlay"></div>
        </div>
    );
};

export default SmokeAnimation; 
