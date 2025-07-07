'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import useDeterministicRandom from '../../hooks/useDeterministicRandom';

// Define the mist particle properties
interface MistParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  scale: number;
  rotate: number;
}

interface MorningMistProps {
  count?: number;
  seed?: number;
  intensity?: 'subtle' | 'medium' | 'dense';
}

const MorningMistAnimation: React.FC<MorningMistProps> = ({ 
  count = 3,
  seed = 789,
  intensity = 'subtle'
}) => {
  // Client-side only indicator
  const [isMounted, setIsMounted] = useState(false);
  // Store generated particles
  const [particles, setParticles] = useState<MistParticle[]>([]);
  const [dimensions, setDimensions] = useState({
    width: 1200,
    height: 800
  });
  
  // Use deterministic random for consistent rendering
  const { getRandomValue } = useDeterministicRandom(count * 10, seed);
  
  // Check for reduced motion preference
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
    
    // Update dimensions
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });
    
    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

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

  // Generate mist particles on mount and occasionally refresh them
  useEffect(() => {
    // Only run if component is mounted
    if (!isMounted) return;

    // Create a single mist particle with deterministic random properties
    const createParticle = (id: number): MistParticle => {
      // Distribute particles across the screen with deterministic randomness
      const x = getRandomValue(id * 3, -100, dimensions.width + 100);
      const y = getRandomValue(id * 3 + 1, dimensions.height * 0.3, dimensions.height);

      // Size should be proportional to screen size for responsiveness
      const sizeBase = Math.min(dimensions.width, dimensions.height) * 0.4;
      const size = sizeBase + getRandomValue(id * 3 + 2, 0, sizeBase * 0.6);

      // Intensity-based opacity adjustments
      const opacityMultipliers: Record<'subtle' | 'medium' | 'dense', number> = {
        subtle: 0.8,
        medium: 1.2,
        dense: 1.8
      };

      return {
        id,
        x,
        y,
        size,
        opacity: (0.015 + getRandomValue(id * 5, 0, 0.02)) * opacityMultipliers[intensity], // Very subtle opacity
        duration: 20 + getRandomValue(id * 7, 0, 30), // Slow, gentle movement
        delay: getRandomValue(id * 11, 0, 15), // Staggered start
        scale: 0.7 + getRandomValue(id * 17, 0, 0.5),
        rotate: getRandomValue(id * 19, 0, 360), // Random initial rotation
      };
    };

    const generateParticles = () => {
      // Adjust particle count based on screen size and intensity
      const intensityMultipliers: Record<'subtle' | 'medium' | 'dense', number> = {
        subtle: 1,
        medium: 1.5,
        dense: 2.5
      };
      
      const particleCount = Math.max(2, Math.floor(dimensions.width / 500)) * intensityMultipliers[intensity];
      const newParticles: MistParticle[] = [];

      for (let i = 0; i < particleCount; i++) {
        newParticles.push(createParticle(i));
      }

      setParticles(newParticles);
    };

    generateParticles();

    // Regenerate particles occasionally for natural variation
    const interval = setInterval(() => {
      generateParticles();
    }, 45000); // Every 45 seconds

    return () => clearInterval(interval);
    
  }, [dimensions, isMounted, getRandomValue, count, intensity]);

  if (prefersReducedMotion || !isMounted) {
    return null; // Don't render animation if user prefers reduced motion or if not mounted
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
            borderRadius: '50%',
            filter: 'blur(20px)',
            background: `radial-gradient(circle, 
              rgba(255, 255, 255, ${particle.opacity * 0.3}) 0%, 
              rgba(240, 248, 255, ${particle.opacity * 0.2}) 30%, 
              rgba(200, 220, 240, ${particle.opacity * 0.1}) 60%, 
              transparent 100%)`,
            mixBlendMode: 'screen',
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
            y: [0, -particle.size * 0.4],
            x: [0, getRandomValue(particle.id * 21, -30, 30)], // Gentle horizontal drift
            opacity: [0, particle.opacity * 0.7, particle.opacity, particle.opacity * 0.5, 0],
            scale: [particle.scale, particle.scale * 1.1, particle.scale * 1.3, particle.scale * 0.8],
            rotate: [particle.rotate, particle.rotate + getRandomValue(particle.id * 23, -15, 15)],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            repeatDelay: getRandomValue(particle.id * 29, 5, 15),
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Subtle atmospheric layers for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[var(--bg-primary)]/[0.01] to-transparent mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.005] via-transparent to-transparent mix-blend-screen"></div>
    </div>
  );
};

export default MorningMistAnimation;
