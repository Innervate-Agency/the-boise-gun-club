"use client";

import { useEffect, useRef, useState } from 'react';

export interface ScrollMotionOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  delay?: number;
}

export interface ScrollMotionState {
  isInView: boolean;
  hasBeenVisible: boolean;
  progress: number;
}

/**
 * Professional scroll motion hook following our "balanced approach" philosophy
 * - Respects prefers-reduced-motion
 * - Provides subtle, purposeful animations
 * - Optimized for performance
 * - Suitable for gun club professional context
 */
export function useScrollMotion({
  threshold = 0.1,
  rootMargin = '0px 0px -10% 0px',
  once = true,
  delay = 0,
}: ScrollMotionOptions = {}): [React.RefObject<HTMLElement>, ScrollMotionState] {
  const elementRef = useRef<HTMLElement>(null);
  const [state, setState] = useState<ScrollMotionState>({
    isInView: false,
    hasBeenVisible: false,
    progress: 0,
  });

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // If user prefers reduced motion, show immediately
    if (prefersReducedMotion) {
      setState({
        isInView: true,
        hasBeenVisible: true,
        progress: 1,
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isIntersecting = entry.isIntersecting;
          const progress = Math.min(1, Math.max(0, entry.intersectionRatio / threshold));

          if (delay > 0 && isIntersecting) {
            setTimeout(() => {
              setState((prev) => ({
                ...prev,
                isInView: true,
                hasBeenVisible: true,
                progress,
              }));
            }, delay);
          } else {
            setState((prev) => ({
              isInView: isIntersecting,
              hasBeenVisible: prev.hasBeenVisible || isIntersecting,
              progress,
            }));
          }

          // Unobserve after first view if once is true
          if (once && isIntersecting) {
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: Array.from({ length: 21 }, (_, i) => i / 20), // 0, 0.05, 0.1, ..., 1
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, once, delay, prefersReducedMotion]);

  return [elementRef, state];
}

/**
 * Preset motion variants for common use cases
 */
export const motionPresets = {
  // Subtle fade-in from bottom (professional, non-distracting)
  fadeUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
  },

  // Gentle scale-in for cards and components
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] },
  },

  // Slide from left for navigation and sidebars
  slideLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] },
  },

  // Slide from right for secondary content
  slideRight: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] },
  },

  // Simple fade for text content
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] },
  },

  // Staggered children animation
  stagger: {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  },
};

/**
 * Get appropriate motion variant based on element type and context
 */
export function getMotionVariant(
  elementType: 'card' | 'text' | 'nav' | 'hero' | 'button' | 'default' = 'default'
) {
  switch (elementType) {
    case 'card':
      return motionPresets.scaleIn;
    case 'text':
      return motionPresets.fade;
    case 'nav':
      return motionPresets.slideLeft;
    case 'hero':
      return motionPresets.fadeUp;
    case 'button':
      return motionPresets.scaleIn;
    default:
      return motionPresets.fadeUp;
  }
}