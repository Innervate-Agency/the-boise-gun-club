'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FloatingBackground } from '@/components/ui/floating-background';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  badge?: string;
  primaryAction?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  secondaryAction?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  backgroundPreset?: 'warm' | 'cool' | 'mixed' | 'gunclub';
  intensity?: 'subtle' | 'medium' | 'premium';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showScrollIndicator?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const sizeStyles = {
  sm: 'py-16 md:py-20',
  md: 'py-20 md:py-28', 
  lg: 'py-24 md:py-32',
  xl: 'py-32 md:py-40'
};

const titleSizes = {
  sm: 'text-3xl md:text-4xl',
  md: 'text-4xl md:text-5xl',
  lg: 'text-5xl md:text-6xl', 
  xl: 'text-6xl md:text-7xl'
};

export function PageHero({
  title,
  subtitle,
  description,
  badge,
  primaryAction,
  secondaryAction,
  backgroundPreset = 'gunclub',
  intensity = 'premium',
  size = 'lg',
  showScrollIndicator = false,
  className,
  children
}: PageHeroProps) {
  return (
    <FloatingBackground 
      preset={backgroundPreset} 
      intensity={intensity}
      className={cn('relative overflow-hidden', sizeStyles[size], className)}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {badge && (
            <div className="mb-6">
              <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 font-body text-sm px-4 py-2">
                {badge}
              </Badge>
            </div>
          )}

          {subtitle && (
            <p className="text-lg md:text-xl text-accent-primary font-heading font-semibold mb-4 uppercase tracking-wider">
              {subtitle}
            </p>
          )}

          <h1 className={cn(
            'font-heading font-black text-card-foreground mb-6 leading-tight',
            titleSizes[size]
          )}>
            {title}
          </h1>

          {description && (
            <p className="text-lg md:text-xl text-muted-foreground font-body font-light max-w-3xl mx-auto mb-8 leading-relaxed">
              {description}
            </p>
          )}

          {(primaryAction || secondaryAction) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              {primaryAction && (
                <Button
                  size="lg"
                  className="bg-accent-primary hover:bg-accent-secondary text-white font-heading font-semibold px-8 py-4 text-lg"
                  onClick={primaryAction.onClick}
                >
                  {primaryAction.text}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              )}
              
              {secondaryAction && (
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-card-foreground hover:bg-white/10 font-heading font-semibold px-8 py-4 text-lg backdrop-blur-sm"
                  onClick={secondaryAction.onClick}
                >
                  {secondaryAction.text}
                </Button>
              )}
            </div>
          )}

          {children && (
            <div className="mb-8">
              {children}
            </div>
          )}
        </div>
      </div>

      {showScrollIndicator && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center text-white/70">
            <span className="text-sm font-body mb-2">Scroll down</span>
            <ChevronDown className="w-6 h-6" />
          </div>
        </div>
      )}
    </FloatingBackground>
  );
}