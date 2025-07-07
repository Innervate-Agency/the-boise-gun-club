'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
  badge?: string;
  link?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  color?: string;
}

interface FeatureGridProps {
  title?: string;
  subtitle?: string;
  description?: string;
  features: Feature[];
  columns?: 1 | 2 | 3 | 4;
  cardVariant?: 'default' | 'glass' | 'gradient';
  className?: string;
}

const columnClasses = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
};

export function FeatureGrid({
  title,
  subtitle,
  description,
  features,
  columns = 3,
  cardVariant = 'default',
  className
}: FeatureGridProps) {
  const getCardClassName = (feature: Feature) => {
    const baseClasses = 'h-full transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 group';
    
    switch (cardVariant) {
      case 'glass':
        return cn(
          baseClasses,
          'bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15'
        );
      case 'gradient':
        return cn(
          baseClasses,
          'bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border-white/10'
        );
      default:
        return cn(baseClasses, 'hover:shadow-xl');
    }
  };

  const getIconClassName = (feature: Feature) => {
    const baseClasses = 'w-8 h-8 mb-4 transition-transform duration-300 group-hover:scale-110';
    
    if (feature.color) {
      return cn(baseClasses, `text-[${feature.color}]`);
    }
    
    return cn(baseClasses, 'text-accent-primary');
  };

  return (
    <section className={cn('py-16 md:py-24', className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle || description) && (
          <div className="text-center mb-16 max-w-3xl mx-auto">
            {subtitle && (
              <p className="text-lg text-accent-primary font-heading font-semibold mb-4 uppercase tracking-wider">
                {subtitle}
              </p>
            )}
            
            {title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-card-foreground mb-6">
                {title}
              </h2>
            )}
            
            {description && (
              <p className="text-lg text-muted-foreground font-body leading-relaxed">
                {description}
              </p>
            )}
          </div>
        )}

        <div className={cn('grid gap-8', columnClasses[columns])}>
          {features.map((feature, index) => (
            <Card key={index} className={getCardClassName(feature)}>
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <feature.icon className={getIconClassName(feature)} />
                  {feature.badge && (
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl font-heading font-bold text-card-foreground group-hover:text-accent-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <CardDescription className="text-muted-foreground font-body leading-relaxed mb-6">
                  {feature.description}
                </CardDescription>
                
                {feature.link && (
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-accent-primary hover:text-accent-secondary font-heading font-semibold group-hover:translate-x-1 transition-all"
                    onClick={feature.link.onClick}
                  >
                    {feature.link.text}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}