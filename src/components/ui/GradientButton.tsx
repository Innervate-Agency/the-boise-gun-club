import { ReactNode, ButtonHTMLAttributes } from 'react';

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function GradientButton({ 
  children, 
  variant = 'primary',
  size = 'md',
  className = '',
  ...props 
}: GradientButtonProps) {
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  const baseClass = variant === 'primary' ? 'btn-gradient-primary' : 'btn-gradient-secondary';
  
  return (
    <button 
      className={`${baseClass} ${sizes[size]} rounded-lg ${className}`}
      {...props}
    >
      {children}
    </button>
  );
} 