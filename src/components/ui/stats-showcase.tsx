'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, GlassFusionCard } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LucideIcon } from 'lucide-react';

interface Stat {
  label: string;
  value: string | number;
  icon?: LucideIcon;
  change?: {
    value: string;
    trend: 'up' | 'down' | 'neutral';
  };
  description?: string;
  color?: string;
}

interface StatsShowcaseProps {
  title?: string;
  subtitle?: string;
  stats: Stat[];
  layout?: 'grid' | 'inline' | 'cards' | 'fusion';
  columns?: 2 | 3 | 4 | 5;
  variant?: 'default' | 'glass' | 'minimal' | 'fusion';
  className?: string;
}

const columnClasses = {
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  5: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'
};

const trendColors = {
  up: 'text-[var(--brand-green)] bg-[var(--brand-green)]/10',
  down: 'text-[var(--brand-red-action)] bg-[var(--brand-red-action)]/10',
  neutral: 'text-[var(--muted-foreground)] bg-[var(--muted)]'
};

export function StatsShowcase({
  title,
  subtitle,
  stats,
  layout = 'grid',
  columns = 4,
  variant = 'default',
  className
}: StatsShowcaseProps) {
  const getCardClassName = () => {
    switch (variant) {
      case 'glass':
        return 'bg-[var(--card)]/10 backdrop-blur-md border-[var(--muted)]/20 hover:bg-[var(--card)]/15';
      case 'minimal':
        return 'border-0 bg-transparent hover:bg-[var(--muted)]/50';
      case 'fusion':
        return 'glass-fusion';
      default:
        return 'hover:shadow-lg';
    }
  };

  const getValueClassName = (stat: Stat) => {
    const baseClasses = 'text-3xl md:text-4xl font-heading font-black mb-2';
    
    if (stat.color) {
      return cn(baseClasses, `text-[${stat.color}]`);
    }
    
    return cn(baseClasses, 'text-[var(--card-foreground)]');
  };

  if (layout === 'inline') {
    return (
      <section className={cn('py-12', className)}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {(title || subtitle) && (
            <div className="text-center mb-12">
              {subtitle && (
                <p className="text-lg text-accent-primary font-heading font-semibold mb-2 uppercase tracking-wider">
                  {subtitle}
                </p>
              )}
              {title && (
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-card-foreground">
                  {title}
                </h2>
              )}
            </div>
          )}

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                {stat.icon && (
                  <stat.icon className={cn(
                    'w-6 h-6 mx-auto mb-2',
                    stat.color ? `text-[${stat.color}]` : 'text-accent-primary'
                  )} />
                )}
                <div className={getValueClassName(stat)}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-body">
                  {stat.label}
                </div>
                {stat.change && (
                  <Badge className={cn(
                    'mt-2 text-xs',
                    trendColors[stat.change.trend]
                  )}>
                    {stat.change.value}
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Fusion layout using GlassFusionCard
  if (layout === 'fusion' || variant === 'fusion') {
    return (
      <section className={cn('py-16', className)}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {(title || subtitle) && (
            <div className="text-center mb-12">
              {subtitle && (
                <p className="text-lg text-accent-primary font-heading font-semibold mb-4 uppercase tracking-wider">
                  {subtitle}
                </p>
              )}
              {title && (
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-card-foreground mb-6">
                  {title}
                </h2>
              )}
            </div>
          )}

          <div className={cn('grid gap-6', columnClasses[columns])}>
            {stats.map((stat, index) => (
              <GlassFusionCard
                key={index}
                className="text-center transition-all duration-300 hover:scale-[1.02]"
                headerGradient={stat.color ? `from-[${stat.color}] to-[var(--accent-secondary)]` : 'from-[var(--lahoma-orange)] to-[var(--accent-secondary)]'}
                intensity="medium"
              >
                <CardContent className="p-6">
                  {stat.icon && (
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[var(--lahoma-orange)] to-[var(--accent-secondary)] rounded-xl mb-4">
                      <stat.icon className="h-6 w-6 text-[var(--card)]" />
                    </div>
                  )}
                  
                  <div className={getValueClassName(stat)}>
                    {stat.value}
                  </div>
                  
                  <div className="text-lg font-heading font-semibold text-card-foreground mb-2">
                    {stat.label}
                  </div>
                  
                  {stat.description && (
                    <div className="text-sm text-muted-foreground font-body mb-3">
                      {stat.description}
                    </div>
                  )}
                  
                  {stat.change && (
                    <Badge className={cn(
                      'text-xs',
                      trendColors[stat.change.trend]
                    )}>
                      {stat.change.value}
                    </Badge>
                  )}
                </CardContent>
              </GlassFusionCard>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={cn('py-16', className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {subtitle && (
              <p className="text-lg text-accent-primary font-heading font-semibold mb-4 uppercase tracking-wider">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-card-foreground mb-6">
                {title}
              </h2>
            )}
          </div>
        )}

        <div className={cn('grid gap-6', columnClasses[columns])}>
          {stats.map((stat, index) => (
            <Card key={index} className={cn(
              'transition-all duration-300 hover:scale-[1.02] group',
              getCardClassName()
            )}>
              <CardContent className="p-6 text-center">
                {stat.icon && (
                  <stat.icon className={cn(
                    'w-8 h-8 mx-auto mb-4 transition-transform duration-300 group-hover:scale-110',
                    stat.color ? `text-[${stat.color}]` : 'text-accent-primary'
                  )} />
                )}
                
                <div className={getValueClassName(stat)}>
                  {stat.value}
                </div>
                
                <div className="text-lg font-heading font-semibold text-card-foreground mb-2">
                  {stat.label}
                </div>
                
                {stat.description && (
                  <div className="text-sm text-muted-foreground font-body mb-3">
                    {stat.description}
                  </div>
                )}
                
                {stat.change && (
                  <Badge className={cn(
                    'text-xs',
                    trendColors[stat.change.trend]
                  )}>
                    {stat.change.value}
                  </Badge>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// Preset Components
export const StatsFusion = ({ stats, className, variant = 'cards' }: {
  stats: Stat[];
  className?: string;
  variant?: 'minimal' | 'cards' | 'hero';
}) => {
  if (variant === 'minimal') {
    return (
      <StatsShowcase
        stats={stats}
        layout="inline"
        variant="minimal"
        className={className}
      />
    );
  }

  return (
    <StatsShowcase
      stats={stats}
      layout="fusion"
      variant="fusion"
      columns={4}
      className={className}
    />
  );
};