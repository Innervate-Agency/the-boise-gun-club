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
        'font-heading font-semibold rounded-xl',
        effectClass,
        isDisabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      disabled={isDisabled}
      {...props}
    >
      {/* Left icon */}
      {icon && iconPosition === 'left' && !loading && (
        <span className="mr-2">
          {icon}
        </span>
      )}
      
      {/* Loading spinner */}
      {loading && (
        <Loader2 className="w-4 h-4 animate-spin mr-2" />
      )}
      
      {/* Button content */}
      {loading ? 'Processing...' : children}
      
      {/* Right icon */}
      {icon && iconPosition === 'right' && !loading && (
        <span className="ml-2">
          {icon}
        </span>
      )}
    </Button>
  );
}