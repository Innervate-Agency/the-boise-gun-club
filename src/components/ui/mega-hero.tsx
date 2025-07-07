'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { PremiumButton } from './premium-button';
import { FloatingBackground } from './floating-background';
import { Badge } from '@/components/ui/badge';

interface MegaHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCTA?: {
    text: string;
    onClick: () => void;
    icon?: React.ReactNode;
  };
  secondaryCTA?: {
    text: string;
    onClick: () => void;
    icon?: React.ReactNode;
  };
  badges?: string[];
  backgroundPreset?: 'warm' | 'cool' | 'mixed' | 'gunclub';
  height?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  gradient?: string;
  centerContent?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

const heightStyles = {
  sm: 'min-h-[400px]',
  md: 'min-h-[500px]', 
  lg: 'min-h-[600px]',
  xl: 'min-h-[700px]',
  full: 'min-h-screen'
};

export function MegaHero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  badges = [],
  backgroundPreset = 'gunclub',
  height = 'lg',
  gradient = 'from-[var(--lahoma-orange)] to-[var(--abe-red)]',
  centerContent = true,
  icon,
  className
}: MegaHeroProps) {
  return (
    <FloatingBackground
      preset={backgroundPreset}
      intensity="premium"
      className={cn(
        'relative overflow-hidden',
        `bg-gradient-to-br ${gradient}`,
        heightStyles[height],
        className
      )}
    >
      {/* Glass overlay for depth */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />
      
      {/* Content container */}
      <div className={cn(
        'relative z-20 h-full flex flex-col',
        centerContent ? 'justify-center items-center text-center' : 'justify-center',
        'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'
      )}>
        
        {/* Icon */}
        {icon && (
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl shadow-2xl">
              {React.cloneElement(icon as React.ReactElement, {
                className: "h-10 w-10 text-white"
              })}
            </div>
          </div>
        )}
        
        {/* Title */}
        <h1 className={cn(
          'text-5xl md:text-6xl lg:text-7xl font-heading font-black text-white mb-6 leading-tight',
          centerContent ? 'text-center' : 'text-left'
        )}>
          {title}
        </h1>
        
        {/* Subtitle with gradient text */}
        {subtitle && (
          <h2 className={cn(
            'text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-6',
            'bg-gradient-to-r from-[var(--leonard-yellow)] via-white to-[var(--leonard-yellow)] bg-clip-text text-transparent',
            centerContent ? 'text-center' : 'text-left'
          )}>
            {subtitle}
          </h2>
        )}
        
        {/* Description */}
        {description && (
          <p className={cn(
            'text-xl text-white/90 max-w-3xl mb-12 font-body font-light leading-relaxed',
            centerContent ? 'text-center mx-auto' : 'text-left'
          )}>
            {description}
          </p>
        )}
        
        {/* CTAs */}
        {(primaryCTA || secondaryCTA) && (
          <div className={cn(
            'flex gap-4 mb-8',
            centerContent ? 'justify-center' : 'justify-start',
            'flex-col sm:flex-row'
          )}>
            {primaryCTA && (
              <PremiumButton
                onClick={primaryCTA.onClick}
                size="lg"
                effect="glow"
                intensity="premium"
                gradient="from-white to-white/90"
                hoverGradient="from-white/90 to-white"
                className="text-[var(--lahoma-orange)] font-bold shadow-2xl hover:shadow-white/20"
                icon={primaryCTA.icon}
              >
                {primaryCTA.text}
              </PremiumButton>
            )}
            
            {secondaryCTA && (
              <PremiumButton
                onClick={secondaryCTA.onClick}
                variant="outline"
                size="lg"
                effect="lift"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                icon={secondaryCTA.icon}
              >
                {secondaryCTA.text}
              </PremiumButton>
            )}
          </div>
        )}
        
        {/* Badges */}
        {badges.length > 0 && (
          <div className={cn(
            'flex gap-4 flex-wrap',
            centerContent ? 'justify-center' : 'justify-start'
          )}>
            {badges.map((badge, index) => (
              <Badge
                key={index}
                className="bg-white/20 backdrop-blur-sm text-white border-white/30 font-body"
              >
                {badge}
              </Badge>
            ))}
          </div>
        )}
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    </FloatingBackground>
  );
}