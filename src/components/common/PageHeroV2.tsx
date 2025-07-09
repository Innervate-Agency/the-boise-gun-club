"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface PageHeroV2Props {
  title: React.ReactNode;
  subtitle: string;
  backgroundImageUrl?: string;
  gradient?: string;
  children?: React.ReactNode;
  className?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export function PageHeroV2({
  title,
  subtitle,
  backgroundImageUrl,
  gradient = 'from-accent-primary/80 to-accent-secondary/80',
  children,
  className,
  icon: Icon,
}: PageHeroV2Props) {
  const backgroundStyle = backgroundImageUrl
    ? { backgroundImage: `url(${backgroundImageUrl})` }
    : {};

  return (
    <div
      className={cn(
        'relative overflow-hidden bg-cover bg-center h-[300px]',
        className
      )}
      style={backgroundStyle}
    >
      {/* Gradient Overlay */}
      <div
        className={cn(
          'absolute inset-0',
          gradient,
          !backgroundImageUrl && 'bg-gradient-to-r'
        )}
      />
      
      {/* Optional Pattern/Noise Overlay */}
      <div className="absolute inset-0 bg-black/5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="flex items-center gap-6">
          {Icon && (
            <div className="w-16 h-16 bg-card/20 dark:bg-card/50 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Icon className="h-8 w-8 text-card-foreground" />
            </div>
          )}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-heading font-black text-card-foreground mb-2">
              {title}
            </h1>
            <p className="text-xl text-card-foreground/90 font-body font-light">
              {subtitle}
            </p>
          </div>
        </div>

        {children && <div className="mt-6">{children}</div>}
      </div>
    </div>
  );
}
