'use client';

import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  text?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  className = '',
  text = 'Loading...'
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  return (
    <div className={`flex flex-col items-center justify-center gap-4 ${className}`}>
      {/* Clay target spinner */}
      <motion.div
        className={`${sizeClasses[size]} relative`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border-4 border-[var(--accent-primary)]/20" />
        
        {/* Spinning segment */}
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[var(--accent-primary)] border-r-[var(--accent-secondary)]" />
        
        {/* Inner dot */}
        <div className="absolute inset-2 rounded-full bg-[var(--accent-primary)]" />
        <div className="absolute inset-3 rounded-full bg-[var(--bg-primary)]" />
      </motion.div>
      
      {/* Loading text */}
      {text && (
        <motion.p
          className={`font-body text-[var(--text-secondary)] ${textSizeClasses[size]}`}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
};

export default LoadingSpinner; 