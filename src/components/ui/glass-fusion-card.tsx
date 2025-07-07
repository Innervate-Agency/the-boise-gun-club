'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface GlassFusionCardProps {
  children?: React.ReactNode;
  className?: string;
  headerGradient?: string;
  splashColor?: string;
  title?: string;
  description?: string;
  badge?: string;
  intensity?: 'subtle' | 'medium' | 'premium';
  variant?: 'glass' | 'solid' | 'gradient';
  hoverEffect?: boolean;
}

const intensityStyles = {
  subtle: 'backdrop-blur-sm bg-white/5 border-white/10',
  medium: 'backdrop-blur-md bg-white/10 border-white/15', 
  premium: 'backdrop-blur-xl bg-white/15 border-white/20'
};

const variantStyles = {
  glass: 'glass-fusion',
  solid: 'bg-white dark:bg-secondary shadow-xl',
  gradient: 'bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl'
};

export function GlassFusionCard({
  children,
  className,
  headerGradient = 'from-[var(--accent-primary)] to-[var(--accent-secondary)]',
  splashColor = 'var(--accent-tertiary)',
  title,
  description,
  badge,
  intensity = 'premium',
  variant = 'glass',
  hoverEffect = true,
  ...props
}: GlassFusionCardProps) {
  return (
    <Card 
      className={cn(
        'overflow-hidden border-0 transition-all duration-300',
        variantStyles[variant],
        intensityStyles[intensity],
        hoverEffect && 'hover:scale-[1.02] hover:-translate-y-1',
        'shadow-[0_20px_60px_rgba(50,50,93,0.18),0_4px_6px_rgba(0,0,0,0.05)]',
        'hover:shadow-[0_25px_80px_rgba(50,50,93,0.25),0_8px_15px_rgba(0,0,0,0.1)]',
        className
      )}
      {...props}
    >
      {/* ClickUp-style gradient header with floating splashes */}
      {(title || badge) && (
        <div className={cn('h-24 bg-gradient-to-r relative overflow-hidden', headerGradient)}>
          {/* Floating color splash */}
          <div 
            className="absolute top-0 right-0 w-20 h-20 rounded-full blur-2xl opacity-30"
            style={{ background: `radial-gradient(circle, ${splashColor} 0%, transparent 70%)` }}
          />
          
          {/* Another splash for depth */}
          <div 
            className="absolute bottom-0 left-0 w-16 h-16 rounded-full blur-xl opacity-20"
            style={{ background: `radial-gradient(circle, ${splashColor} 0%, transparent 70%)` }}
          />
          
          {/* Stripe-style badge */}
          {badge && (
            <div className="absolute top-4 right-4">
              <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 font-body">
                {badge}
              </Badge>
            </div>
          )}
          
          {/* Title in header */}
          {title && (
            <div className="absolute bottom-4 left-6">
              <h3 className="text-xl font-heading font-bold text-white">
                {title}
              </h3>
            </div>
          )}
          
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
        </div>
      )}
      
      {/* Content area with enhanced glass effect */}
      <div className="relative">
        {(title || description) && !(title && badge) && (
          <CardHeader>
            {title && (
              <CardTitle className="font-heading text-gray-900 dark:text-white">
                {title}
              </CardTitle>
            )}
            {description && (
              <CardDescription className="font-body text-gray-600 dark:text-gray-300">
                {description}
              </CardDescription>
            )}
          </CardHeader>
        )}
        
        {children && (
          <CardContent className={cn(!title && !description && 'pt-6')}>
            {children}
          </CardContent>
        )}
      </div>
    </Card>
  );
}