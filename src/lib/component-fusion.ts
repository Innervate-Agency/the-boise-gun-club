/**
 * Component Fusion Utility
 * 
 * This utility provides standardized Premium and Elite variant patterns
 * that can be applied across all UI components for consistent enhancement.
 * 
 * Philosophy: Balanced sophistication for professional gun club context
 */

import { type VariantProps } from "class-variance-authority";

/**
 * Standard fusion variants that can be applied to any component
 */
export const fusionVariants = {
  variant: {
    // Premium variant: Professional with subtle enhancement
    premium: [
      // Base styling
      "relative overflow-hidden group",
      // Background and borders
      "bg-gradient-to-br from-card via-card to-color-leonard-yellow/5",
      "border-color-leonard-yellow/30 border",
      // Shadows and elevation
      "shadow-lg hover:shadow-xl hover:shadow-color-lahoma-orange/25",
      // Hover effects
      "hover:scale-[1.02] hover:from-color-leonard-yellow/5 hover:to-color-lahoma-orange/10",
      // Transitions
      "transition-all duration-300",
      // Dark mode
      "dark:from-card dark:to-color-leonard-yellow/5",
    ].join(" "),
    
    // Elite variant: Maximum impact while maintaining professionalism
    elite: [
      // Base styling
      "relative overflow-hidden group",
      // Advanced styling
      "bg-card border-2 border-transparent bg-clip-padding",
      // Enhanced shadows
      "shadow-lg hover:shadow-2xl hover:shadow-color-lahoma-orange/35",
      // Sophisticated hover effects
      "hover:scale-[1.02]",
      // Premium transitions
      "transition-all duration-300",
      // Dark mode
      "dark:bg-card",
    ].join(" "),
  }
} as const;

/**
 * Enhanced effects that can be added to Premium/Elite variants
 */
export const fusionEffects = {
  // Floating orbs for Premium variants
  premiumOrbs: `
    /* Floating orb effects */
    .premium-orbs::before {
      content: '';
      position: absolute;
      top: -1.5rem;
      right: -1.5rem;
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      background: linear-gradient(45deg, var(--color-leonard-yellow), var(--color-lahoma-orange));
      opacity: 0.3;
      filter: blur(1rem);
      transition: opacity 0.5s ease;
    }
    
    .premium-orbs:hover::before {
      opacity: 0.5;
    }
    
    .premium-orbs::after {
      content: '';
      position: absolute;
      bottom: -1rem;
      left: -1rem;
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      background: linear-gradient(45deg, var(--color-lahoma-orange), var(--color-leonard-yellow));
      opacity: 0.2;
      filter: blur(0.75rem);
      transition: opacity 0.5s ease;
    }
    
    .premium-orbs:hover::after {
      opacity: 0.4;
    }
  `,

  // Animated border for Elite variants
  eliteBorder: `
    /* Elite animated border */
    .elite-border::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(45deg, var(--color-leonard-yellow), var(--color-lahoma-orange), var(--color-leonard-yellow));
      background-size: 200% 200%;
      border-radius: inherit;
      opacity: 0.3;
      animation: gradient-shift 3s ease infinite;
      transition: opacity 0.5s ease;
    }
    
    .elite-border:hover::before {
      opacity: 0.6;
    }
    
    @keyframes gradient-shift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  `,

  // Glow effects with proper contrast
  glowEffects: `
    /* Professional glow effects */
    .glow-orange {
      box-shadow: 0 0 20px rgba(242, 135, 5, 0.3);
    }
    
    .glow-yellow {
      box-shadow: 0 0 20px rgba(242, 203, 5, 0.3);
    }
    
    .glow-subtle {
      box-shadow: 0 0 15px rgba(242, 135, 5, 0.15);
    }
    
    /* Hover glow enhancement */
    .hover-glow:hover {
      box-shadow: 0 0 25px rgba(242, 135, 5, 0.4);
    }
  `,
} as const;

/**
 * Component-specific enhancement patterns
 */
export const componentEnhancements = {
  button: {
    premium: {
      className: "bg-gradient-to-r from-color-leonard-yellow to-color-lahoma-orange text-black shadow-lg hover:shadow-xl hover:scale-105 focus-visible:ring-color-leonard-yellow/50 border border-color-leonard-yellow/20",
      effects: ["hover-glow"],
    },
    elite: {
      className: "bg-gradient-to-r from-color-leonard-yellow via-color-lahoma-orange to-color-leonard-yellow bg-[length:200%_100%] text-black shadow-xl hover:shadow-2xl hover:scale-110 focus-visible:ring-color-leonard-yellow/50 border-2 border-color-leonard-yellow/30 animate-shimmer",
      effects: ["glow-orange"],
    },
  },
  
  card: {
    premium: {
      className: fusionVariants.variant.premium,
      effects: ["premium-orbs"],
    },
    elite: {
      className: fusionVariants.variant.elite,
      effects: ["elite-border"],
    },
  },
  
  input: {
    premium: {
      className: "border-color-leonard-yellow/30 focus:border-color-leonard-yellow focus:ring-color-leonard-yellow/20 bg-gradient-to-r from-background to-color-leonard-yellow/5",
      effects: ["glow-subtle"],
    },
    elite: {
      className: "border-2 border-color-leonard-yellow/50 focus:border-color-leonard-yellow focus:ring-color-leonard-yellow/30 bg-gradient-to-r from-background via-color-leonard-yellow/5 to-color-lahoma-orange/5",
      effects: ["glow-orange"],
    },
  },
  
  badge: {
    premium: {
      className: "bg-gradient-to-r from-color-leonard-yellow to-color-lahoma-orange text-black shadow-md border border-color-leonard-yellow/20",
      effects: [],
    },
    elite: {
      className: "bg-gradient-to-r from-color-leonard-yellow via-color-lahoma-orange to-color-leonard-yellow bg-[length:200%_100%] text-black shadow-lg border-2 border-color-leonard-yellow/30 animate-shimmer",
      effects: ["glow-subtle"],
    },
  },
  
  select: {
    premium: {
      className: "border-color-leonard-yellow/30 focus:border-color-leonard-yellow focus:ring-color-leonard-yellow/20",
      effects: [],
    },
    elite: {
      className: "border-2 border-color-leonard-yellow/50 focus:border-color-leonard-yellow focus:ring-color-leonard-yellow/30",
      effects: ["glow-subtle"],
    },
  },
  
  alert: {
    premium: {
      className: "border-color-leonard-yellow/40 bg-gradient-to-r from-color-leonard-yellow/10 to-color-lahoma-orange/10",
      effects: [],
    },
    elite: {
      className: "border-2 border-color-leonard-yellow/60 bg-gradient-to-r from-color-leonard-yellow/15 to-color-lahoma-orange/15",
      effects: ["glow-subtle"],
    },
  },
} as const;

/**
 * Utility function to generate enhanced variant styles
 */
export function generateFusionVariants(componentType: keyof typeof componentEnhancements) {
  const enhancements = componentEnhancements[componentType];
  
  return {
    premium: enhancements.premium.className,
    elite: enhancements.elite.className,
  };
}

/**
 * CSS class generator for component effects
 */
export function getFusionEffectClasses(effects: string[]): string {
  return effects.join(' ');
}

/**
 * TypeScript helper for fusion variant props
 */
export type FusionVariant = 'premium' | 'elite';

export interface FusionVariantProps {
  variant?: 'default' | FusionVariant;
}

/**
 * Standard fusion CSS to be added to globals.css
 */
export const fusionCSS = `
/* === FUSION COMPONENT EFFECTS === */
/* Professional enhancement effects for Premium/Elite variants */

${fusionEffects.premiumOrbs}
${fusionEffects.eliteBorder}
${fusionEffects.glowEffects}

/* Shimmer animation for elite components */
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

.animate-shimmer {
  animation: shimmer 3s ease-in-out infinite;
}

/* Scale utilities for hover effects */
.scale-98 { transform: scale(0.98); }
.scale-102 { transform: scale(1.02); }
.scale-105 { transform: scale(1.05); }
.scale-110 { transform: scale(1.10); }

/* Professional transitions */
.transition-fast { transition: all 150ms cubic-bezier(0.215, 0.61, 0.355, 1); }
.transition-smooth { transition: all 300ms cubic-bezier(0.215, 0.61, 0.355, 1); }

/* Focus ring utilities */
.focus-ring-leonard { 
  @apply focus-visible:ring-2 focus-visible:ring-color-leonard-yellow focus-visible:ring-offset-2; 
}

.focus-ring-lahoma { 
  @apply focus-visible:ring-2 focus-visible:ring-color-lahoma-orange focus-visible:ring-offset-2; 
}
`;

/**
 * Template for adding fusion variants to existing components
 */
export const componentTemplate = `
// Add these variants to your existing buttonVariants (or equivalent)
premium: "${componentEnhancements.button.premium.className}",
elite: "${componentEnhancements.button.elite.className}",

// Add fusion effects to component return
{variant === 'premium' && (
  <div className="premium-orbs absolute inset-0 pointer-events-none" />
)}

{variant === 'elite' && (
  <div className="elite-border absolute inset-0 pointer-events-none" />
)}
`;