'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface FloatingSplash {
  color: string;
  size: number;
  x: string;
  y: string;
  blur: number;
  opacity: number;
  duration: number;
  delay?: number;
}

interface FloatingBackgroundProps {
  children: React.ReactNode;
  className?: string;
  preset?: 'warm' | 'cool' | 'mixed' | 'gunclub' | 'custom';
  customSplashes?: FloatingSplash[];
  intensity?: 'subtle' | 'medium' | 'premium';
  animated?: boolean;
}

const presetSplashes = {
  warm: [
    { color: 'var(--lahoma-orange)', size: 300, x: '20%', y: '10%', blur: 60, opacity: 0.15, duration: 8 },
    { color: 'var(--abe-red)', size: 200, x: '80%', y: '30%', blur: 80, opacity: 0.1, duration: 10, delay: 2 },
    { color: 'var(--leonard-yellow)', size: 150, x: '60%', y: '70%', blur: 70, opacity: 0.12, duration: 12, delay: 4 }
  ],
  cool: [
    { color: 'var(--idaho-sky-blue)', size: 250, x: '15%', y: '20%', blur: 70, opacity: 0.12, duration: 9 },
    { color: 'var(--snakeriver-blue)', size: 180, x: '75%', y: '60%', blur: 90, opacity: 0.08, duration: 11, delay: 1 },
    { color: 'var(--club-house-roof-blue)', size: 220, x: '40%', y: '80%', blur: 75, opacity: 0.1, duration: 13, delay: 3 }
  ],
  mixed: [
    { color: 'var(--lahoma-orange)', size: 280, x: '25%', y: '15%', blur: 65, opacity: 0.12, duration: 8 },
    { color: 'var(--idaho-sky-blue)', size: 200, x: '70%', y: '40%', blur: 80, opacity: 0.09, duration: 10, delay: 2 },
    { color: 'var(--owyhee-green)', size: 160, x: '50%', y: '75%', blur: 70, opacity: 0.11, duration: 12, delay: 4 },
    { color: 'var(--leonard-yellow)', size: 120, x: '85%', y: '20%', blur: 60, opacity: 0.08, duration: 14, delay: 6 }
  ],
  gunclub: [
    { color: 'var(--lahoma-orange)', size: 320, x: '20%', y: '10%', blur: 60, opacity: 0.15, duration: 8 },
    { color: 'var(--leonard-yellow)', size: 200, x: '80%', y: '30%', blur: 80, opacity: 0.12, duration: 10, delay: 2 },
    { color: 'var(--abe-red)', size: 180, x: '60%', y: '70%', blur: 70, opacity: 0.1, duration: 12, delay: 4 },
    { color: 'var(--idaho-sky-blue)', size: 150, x: '10%', y: '60%', blur: 90, opacity: 0.08, duration: 14, delay: 6 },
    { color: 'var(--owyhee-green)', size: 140, x: '90%', y: '80%', blur: 75, opacity: 0.09, duration: 16, delay: 8 }
  ]
};

const intensityMultipliers = {
  subtle: 0.6,
  medium: 1,
  premium: 1.4
};

export function FloatingBackground({
  children,
  className,
  preset = 'gunclub',
  customSplashes,
  intensity = 'medium',
  animated = true
}: FloatingBackgroundProps) {
  const splashes = customSplashes || presetSplashes[preset] || presetSplashes.gunclub;
  const multiplier = intensityMultipliers[intensity];

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {/* Floating color splashes */}
      {splashes.map((splash, index) => (
        <div
          key={index}
          className={cn(
            'absolute rounded-full pointer-events-none',
            animated && 'animate-float'
          )}
          style={{
            left: splash.x,
            top: splash.y,
            width: splash.size * multiplier,
            height: splash.size * multiplier,
            background: `radial-gradient(circle, ${splash.color} 0%, transparent 70%)`,
            filter: `blur(${splash.blur}px)`,
            opacity: splash.opacity * multiplier,
            animationDuration: animated ? `${splash.duration}s` : undefined,
            animationDelay: animated && splash.delay ? `${splash.delay}s` : undefined,
            transform: 'translate(-50%, -50%)'
          }}
        />
      ))}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translate(-50%, -50%) translateY(0px) scale(1); 
          }
          33% { 
            transform: translate(-50%, -50%) translateY(-10px) scale(1.05); 
          }
          66% { 
            transform: translate(-50%, -50%) translateY(5px) scale(0.95); 
          }
        }
        
        .animate-float {
          animation: float ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}