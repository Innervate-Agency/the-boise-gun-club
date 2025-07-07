'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { GlassFusionCard } from './glass-fusion-card';

interface StatItem {
  label: string;
  value: string;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
  icon?: React.ReactNode;
  gradient?: string;
}

interface StatsFusionProps {
  stats: StatItem[];
  className?: string;
  variant?: 'minimal' | 'cards' | 'hero';
}

export function StatsFusion({ stats, className, variant = 'cards' }: StatsFusionProps) {
  if (variant === 'minimal') {
    return (
      <div className={cn('grid grid-cols-2 md:grid-cols-4 gap-6', className)}>
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl font-heading font-black text-gray-900 dark:text-white mb-1">
              {stat.value}
            </div>
            <div className="text-sm font-body text-gray-600 dark:text-gray-400">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6', className)}>
      {stats.map((stat, index) => (
        <GlassFusionCard
          key={index}
          className="text-center"
          headerGradient={stat.gradient || 'from-lahoma-orange to-[var(--abe-red)]'}
          intensity="medium"
        >
          <div className="p-6">
            {stat.icon && (
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-lahoma-orange to-[var(--abe-red)] rounded-xl mb-4">
                {React.cloneElement(stat.icon as React.ReactElement, {
                  className: "h-6 w-6 text-white"
                })}
              </div>
            )}
            <div className="text-3xl font-heading font-black text-gray-900 dark:text-white mb-2">
              {stat.value}
            </div>
            <div className="text-sm font-body text-gray-600 dark:text-gray-400">
              {stat.label}
            </div>
            {stat.change && (
              <div className={cn(
                'text-xs font-body mt-2',
                stat.trend === 'up' && 'text-[var(--owyhee-green)]',
                stat.trend === 'down' && 'text-[var(--abe-red)]',
                stat.trend === 'neutral' && 'text-gray-500'
              )}>
                {stat.change}
              </div>
            )}
          </div>
        </GlassFusionCard>
      ))}
    </div>
  );
}