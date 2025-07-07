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

  return (
    <Button
      variant={variant}
      size={size}
      className={cn(
        // Base Stripe-style button
        'relative font-medium rounded-lg border-0 overflow-hidden',
        'transition-all duration-200 ease-out',
        'focus:ring-2 focus:ring-lahoma-orange/20 focus:ring-offset-2',
        
        // Size variants (Stripe-style)
        size === 'sm' && 'px-3 py-1.5 text-sm',
        size === 'default' && 'px-4 py-2.5 text-sm',
        size === 'lg' && 'px-6 py-3 text-base',
        
        // Premium variant with brand colors (subtle approach)
        variant === 'premium' && [
          'bg-leonard-yellow',
          'hover:bg-lahoma-orange',
          'text-black shadow-lg hover:shadow-xl',
          'transform hover:scale-[1.02] active:scale-[0.98]',
          'relative overflow-hidden',
          'before:absolute before:inset-0 before:bg-gradient-to-br before:from-lahoma-orange/20 before:to-transparent before:opacity-0 before:hover:opacity-100 before:transition-opacity before:duration-300'
        ],
        
        // Outline variant (Stripe-style)
        variant === 'outline' && [
          'bg-white border border-gray-300 text-gray-700',
          'hover:bg-gray-50 hover:border-gray-400',
          'shadow-sm hover:shadow-md'
        ],
        
        // Effects
        effect === 'lift' && 'hover:-translate-y-0.5 transition-transform duration-200',
        effect === 'glow' && 'hover:shadow-2xl hover:shadow-[#F28705]/25',
        effect === 'pulse' && 'hover:animate-pulse',
        effect === 'shimmer' && 'relative bg-gradient-to-r from-[#F2CB05] via-[#F28705] to-[#F2CB05] bg-[length:200%_100%] hover:bg-[position:100%_0] transition-all duration-500',
        
        isDisabled && 'opacity-50 cursor-not-allowed transform-none hover:transform-none',
        className
      )}
      disabled={isDisabled}
      {...props}
    >
      {/* Shimmer overlay for shimmer effect */}
      {effect === 'shimmer' && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      )}
      
      {/* Button content */}
      <div className="relative flex items-center justify-center gap-2">
        {/* Left icon */}
        {icon && iconPosition === 'left' && !loading && (
          <span className="flex-shrink-0">
            {icon}
          </span>
        )}
        
        {/* Loading spinner */}
        {loading && (
          <Loader2 className="w-4 h-4 animate-spin flex-shrink-0" />
        )}
        
        {/* Text content */}
        <span className="font-medium">
          {loading ? 'Loading...' : children}
        </span>
        
        {/* Right icon */}
        {icon && iconPosition === 'right' && !loading && (
          <span className="flex-shrink-0">
            {icon}
          </span>
        )}
      </div>
    </Button>
  );
}