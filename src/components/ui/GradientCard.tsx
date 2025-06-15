import { ReactNode } from 'react';

interface GradientCardProps {
  children: ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'glass';
}

export default function GradientCard({ 
  children, 
  className = '',
  padding = 'md',
  variant = 'default'
}: GradientCardProps) {
  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };
  
  const baseClass = variant === 'glass' ? 'clickup-glass' : 'clickup-glass-card';
  
  return (
    <div className={`${baseClass} ${paddings[padding]} ${className}`}>
      {children}
    </div>
  );
} 