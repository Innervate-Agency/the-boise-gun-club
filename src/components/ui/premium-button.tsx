'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

interface PremiumButtonProps extends React.ComponentProps<"button"> {
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  effect?: 'none' | 'lift' | 'glow' | 'pulse' | 'shimmer';
  children?: React.ReactNode;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'premium';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

export function PremiumButton({
  children,
  className,
  loading = false,
  icon,
  iconPosition = 'left',
  effect = 'lift',
  disabled,
  variant = 'premium',
  size = 'default',
  ...props
}: PremiumButtonProps) {
  const isDisabled = disabled || loading;
  
  const effectClass = {
    none: '',
    lift: 'btn-lift',
    glow: 'btn-glow', 
    pulse: 'btn-pulse',
    shimmer: 'btn-shimmer'
  }[effect];

  return (
    <Button
      variant={variant}
      size={size}
      className={cn(
        'font-heading font-semibold rounded-xl relative overflow-hidden',
        'transition-all duration-300 transform',
        // Premium gradient styling
        variant === 'premium' && [
          'bg-gradient-to-r from-[var(--accent-primary)] via-[var(--accent-secondary)] to-[var(--accent-tertiary)]',
          'hover:from-[var(--accent-tertiary)] hover:via-[var(--accent-primary)] hover:to-[var(--accent-secondary)]',
          'text-white font-bold shadow-lg hover:shadow-xl',
          'stripe-shadow-lg hover:stripe-shadow-xl'
        ],
        effectClass,
        isDisabled && 'opacity-50 cursor-not-allowed pointer-events-none',
        className
      )}
      disabled={isDisabled}
      {...props}
    >
      {/* Left icon */}
      {icon && iconPosition === 'left' && !loading && (
        <span className="mr-2 relative z-10">
          {icon}
        </span>
      )}
      
      {/* Loading spinner */}
      {loading && (
        <Loader2 className="w-4 h-4 animate-spin mr-2 relative z-10" />
      )}
      
      {/* Button content */}
      <span className="relative z-10">
        {loading ? 'Processing...' : children}
      </span>
      
      {/* Right icon */}
      {icon && iconPosition === 'right' && !loading && (
        <span className="ml-2 relative z-10">
          {icon}
        </span>
      )}
    </Button>
  );
}