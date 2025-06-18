import { ReactNode } from 'react';

interface GradientCardProps {
  children: ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  variant?: 'default' | 'glass';
}

export default function GradientCard({ 
  children, 
  className = '',
  padding = 'md',
  variant = 'default'
}: GradientCardProps) {
  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };
  
  const baseClass = variant === 'glass' 
    ? 'glass-mica' 
    : 'glass-mica-hover';
  
  return (
    <div 
      className={`
        ${baseClass}
        ${paddings[padding]}
        rounded-lg
        border border-[var(--glass-border)]
        shadow-lg
        transition-all duration-300
        relative
        overflow-hidden
        group
        ${className}
      `}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/10 via-transparent to-[var(--accent-secondary)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
} 