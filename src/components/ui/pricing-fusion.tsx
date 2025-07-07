'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { GlassFusionCard } from './glass-fusion-card';
import { PremiumButton } from './premium-button';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap, Crown } from 'lucide-react';

interface PricingFeature {
  name: string;
  included: boolean;
  highlight?: boolean;
}

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: PricingFeature[];
  popular?: boolean;
  premium?: boolean;
  buttonText: string;
  onSelect: () => void;
  gradient?: string;
  icon?: React.ReactNode;
}

interface PricingFusionProps {
  tiers: PricingTier[];
  className?: string;
}

export function PricingFusion({ tiers, className }: PricingFusionProps) {
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8', className)}>
      {tiers.map((tier) => (
        <GlassFusionCard
          key={tier.name}
          className={cn(tier.popular && 'scale-105 z-10')}
          headerGradient={tier.gradient || 'from-[var(--lahoma-orange)] to-[var(--abe-red)]'}
          badge={tier.popular ? 'Most Popular' : tier.premium ? 'Premium' : undefined}
        >
          <div className="text-center p-6">
            <h3 className="text-2xl font-heading font-bold mb-2">{tier.name}</h3>
            <div className="mb-4">
              <span className="text-4xl font-heading font-black">{tier.price}</span>
              <span className="text-lg text-gray-600 dark:text-gray-400">/{tier.period}</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 font-body mb-6">{tier.description}</p>
            
            <ul className="space-y-3 mb-8">
              {tier.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Check className={cn('h-4 w-4', feature.included ? 'text-[var(--owyhee-green)]' : 'text-gray-400')} />
                  <span className={cn('font-body text-sm', !feature.included && 'opacity-50')}>
                    {feature.name}
                  </span>
                </li>
              ))}
            </ul>
            
            <PremiumButton
              onClick={tier.onSelect}
              className="w-full"
              effect={tier.popular ? 'glow' : 'lift'}
            >
              {tier.buttonText}
            </PremiumButton>
          </div>
        </GlassFusionCard>
      ))}
    </div>
  );
}