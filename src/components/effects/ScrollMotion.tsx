"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useScrollMotion, motionPresets, getMotionVariant, ScrollMotionOptions } from '@/hooks/useScrollMotion';
import { cn } from '@/lib/utils';

export interface ScrollMotionProps extends ScrollMotionOptions {
  children: React.ReactNode;
  className?: string;
  variant?: 'card' | 'text' | 'nav' | 'hero' | 'button' | 'default';
  customVariants?: {
    initial?: any;
    animate?: any;
    transition?: any;
  };
  stagger?: boolean;
  disabled?: boolean;
}

/**
 * Professional scroll motion wrapper component
 * Implements our "balanced approach" philosophy - sophisticated but not overwhelming
 * Perfect for gun club context where professionalism is paramount
 */
export function ScrollMotion({
  children,
  className,
  variant = 'default',
  customVariants,
  stagger = false,
  disabled = false,
  threshold = 0.1,
  rootMargin = '0px 0px -10% 0px',
  once = true,
  delay = 0,
}: ScrollMotionProps) {
  const [ref, { isInView, hasBeenVisible }] = useScrollMotion({
    threshold,
    rootMargin,
    once,
    delay,
  });

  if (disabled) {
    return <div className={className}>{children}</div>;
  }

  // Use custom variants if provided, otherwise get preset
  const motionVariants = customVariants || getMotionVariant(variant);

  // For staggered animations, wrap in container
  if (stagger) {
    return (
      <motion.div
        ref={ref}
        className={className}
        initial="initial"
        animate={hasBeenVisible ? "animate" : "initial"}
        variants={{
          initial: {},
          animate: {
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.1,
            },
          },
        }}
      >
        {React.Children.map(children, (child, index) => (
          <motion.div
            key={index}
            variants={motionVariants}
          >
            {child}
          </motion.div>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="initial"
      animate={hasBeenVisible ? "animate" : "initial"}
      variants={motionVariants}
    >
      {children}
    </motion.div>
  );
}

/**
 * Specialized components for common use cases
 */

export function ScrollFadeUp({ children, className, ...props }: Omit<ScrollMotionProps, 'variant'>) {
  return (
    <ScrollMotion variant="default" className={className} {...props}>
      {children}
    </ScrollMotion>
  );
}

export function ScrollCard({ children, className, ...props }: Omit<ScrollMotionProps, 'variant'>) {
  return (
    <ScrollMotion variant="card" className={className} {...props}>
      {children}
    </ScrollMotion>
  );
}

export function ScrollText({ children, className, ...props }: Omit<ScrollMotionProps, 'variant'>) {
  return (
    <ScrollMotion variant="text" className={className} {...props}>
      {children}
    </ScrollMotion>
  );
}

/**
 * Hero section with parallax-style background movement
 * Subtle movement that doesn't cause motion sickness
 */
export function ScrollHero({ 
  children, 
  className,
  backgroundElement,
  parallaxStrength = 0.5,
  ...props 
}: ScrollMotionProps & {
  backgroundElement?: React.ReactNode;
  parallaxStrength?: number;
}) {
  const [ref, { progress }] = useScrollMotion({
    threshold: 0,
    rootMargin: '0px',
    once: false,
  });

  return (
    <motion.div
      ref={ref}
      className={cn("relative overflow-hidden", className)}
      initial="initial"
      animate="animate"
      variants={getMotionVariant('hero')}
      {...props}
    >
      {/* Parallax background */}
      {backgroundElement && (
        <motion.div
          className="absolute inset-0 will-change-transform"
          style={{
            y: progress * 100 * parallaxStrength,
          }}
        >
          {backgroundElement}
        </motion.div>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}

/**
 * Grid container with staggered children animation
 * Perfect for card grids, feature lists, etc.
 */
export function ScrollGrid({ 
  children, 
  className,
  staggerDelay = 0.1,
  ...props 
}: ScrollMotionProps & {
  staggerDelay?: number;
}) {
  return (
    <ScrollMotion
      className={className}
      stagger={true}
      customVariants={{
        animate: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1,
          },
        },
      }}
      {...props}
    >
      {children}
    </ScrollMotion>
  );
}