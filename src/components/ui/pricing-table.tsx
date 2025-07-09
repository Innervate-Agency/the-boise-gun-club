'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, GlassFusionCard } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { 
  Check, 
  X, 
  Star, 
  Crown, 
  Zap, 
  Trophy, 
  Shield, 
  Users, 
  Target, 
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  TrendingUp
} from 'lucide-react';

interface PricingFeature {
  name: string;
  included: boolean | 'limited' | number | string;
  description?: string;
  highlight?: boolean;
}

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: {
    monthly: number;
    annually: number;
    setup?: number;
  };
  icon?: React.ComponentType<any>;
  features: PricingFeature[];
  popular?: boolean;
  recommended?: boolean;
  badge?: string;
  color?: string;
  ctaText?: string;
  ctaVariant?: 'default' | 'outline' | 'secondary';
}

interface PricingTableProps {
  plans: PricingPlan[];
  showAnnualDiscount?: boolean;
  showFeatureComparison?: boolean;
  variant?: 'default' | 'compact' | 'detailed' | 'fusion';
  className?: string;
}

interface PricingCardProps {
  plan: PricingPlan;
  isAnnual?: boolean;
  variant?: 'default' | 'compact' | 'detailed' | 'fusion';
  showFeatures?: boolean;
  className?: string;
}

// Single Pricing Card Component
export function PricingCard({
  plan,
  isAnnual = false,
  variant = 'default',
  showFeatures = true,
  className
}: PricingCardProps) {
  const price = isAnnual ? plan.price.annually : plan.price.monthly;
  const originalPrice = isAnnual ? plan.price.monthly * 12 : undefined;
  const savings = originalPrice ? originalPrice - plan.price.annually : 0;

  const getCardClassName = () => {
    if (plan.popular || plan.recommended) {
      return 'border-2 border-accent-primary shadow-2xl scale-105 relative';
    }
    return 'border-0 shadow-lg hover:shadow-xl transition-shadow duration-300';
  };

  const IconComponent = plan.icon || Target;

  // Fusion variant using GlassFusionCard
  if (variant === 'fusion') {
    return (
      <GlassFusionCard
        className={cn(
          'transition-all duration-300 hover:scale-[1.02]',
          plan.popular || plan.recommended ? 'scale-105 z-10' : '',
          className
        )}
        headerGradient={plan.color ? `from-[${plan.color}] to-[var(--accent-secondary)]` : 'from-[var(--lahoma-orange)] to-[var(--accent-secondary)]'}
        badge={plan.badge || (plan.popular ? 'Most Popular' : plan.recommended ? 'Recommended' : undefined)}
        intensity="medium"
      >
        <div className="text-center p-6">
          <div className="flex items-center justify-center mb-4">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[var(--lahoma-orange)] to-[var(--accent-secondary)] rounded-xl">
              <IconComponent className="h-6 w-6 text-[var(--card)]" />
            </div>
          </div>
          
          <h3 className="text-2xl font-heading font-bold mb-2">{plan.name}</h3>
          <p className="text-[var(--muted-foreground)] dark:text-[var(--muted-foreground)] font-body mb-6">{plan.description}</p>
          
          <div className="mb-6">
            <span className="text-4xl font-heading font-black">${price}</span>
            <span className="text-lg text-[var(--muted-foreground)] dark:text-[var(--muted-foreground)]">/{isAnnual ? 'year' : 'month'}</span>
            {isAnnual && savings > 0 && (
              <div className="text-sm text-[var(--brand-green)] dark:text-green-400 mt-1">
                Save ${savings}/year
              </div>
            )}
          </div>
          
          {showFeatures && (
            <ul className="space-y-3 mb-8 text-left">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Check className={cn('h-4 w-4', feature.included ? 'text-[var(--owyhee-green)]' : 'text-[var(--muted-foreground)]')} />
                  <span className={cn('font-body text-sm', !feature.included && 'opacity-50')}>
                    {feature.name}
                  </span>
                </li>
              ))}
            </ul>
          )}
          
          <Button
            variant="premium"
            effect={plan.popular || plan.recommended ? 'glow' : 'lift'}
            className="w-full"
          >
            {plan.ctaText || 'Get Started'}
          </Button>
        </div>
      </GlassFusionCard>
    );
  }

  return (
    <Card className={cn(getCardClassName(), 'overflow-hidden', className)}>
      {/* Popular Badge */}
      {(plan.popular || plan.recommended) && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <Badge className="bg-accent-primary text-[var(--card)] px-4 py-1 text-sm font-heading font-semibold">
            {plan.badge || (plan.popular ? 'Most Popular' : 'Recommended')}
          </Badge>
        </div>
      )}

      {/* Header */}
      <CardHeader className={cn(
        'text-center',
        (plan.popular || plan.recommended) ? 'bg-gradient-to-br from-accent-primary/10 to-brand-blue/10' : 'bg-muted/20'
      )}>
        <div className="flex items-center justify-center mb-4">
          <div className={cn(
            'w-12 h-12 rounded-xl flex items-center justify-center',
            plan.color ? `bg-gradient-to-br ${plan.color}` : 'bg-gradient-to-br from-accent-primary to-brand-blue'
          )}>
            <IconComponent className="w-6 h-6 text-[var(--card)]" />
          </div>
        </div>

        <CardTitle className="text-2xl font-heading font-bold text-card-foreground mb-2">
          {plan.name}
        </CardTitle>

        <CardDescription className="text-muted-foreground font-body mb-4">
          {plan.description}
        </CardDescription>

        {/* Pricing */}
        <div className="space-y-2">
          <div className="flex items-end justify-center gap-1">
            <span className="text-4xl font-bold text-card-foreground font-heading">
              ${price}
            </span>
            <span className="text-muted-foreground font-body mb-1">
              /{isAnnual ? 'year' : 'month'}
            </span>
          </div>

          {/* Annual Savings */}
          {isAnnual && savings > 0 && (
            <div className="text-sm text-accent-primary font-medium">
              Save ${savings} per year
            </div>
          )}

          {/* Setup Fee */}
          {plan.price.setup && (
            <div className="text-xs text-muted-foreground">
              + ${plan.price.setup} setup fee
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="p-6">
        {/* CTA Button */}
        <Button
          className={cn(
            'w-full mb-6 font-heading font-semibold',
            (plan.popular || plan.recommended) 
              ? 'bg-accent-primary hover:bg-accent-secondary text-[var(--card)]' 
              : 'bg-card hover:bg-muted'
          )}
          variant={plan.ctaVariant || ((plan.popular || plan.recommended) ? 'default' : 'outline')}
        >
          {plan.ctaText || 'Get Started'}
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>

        {/* Features */}
        {showFeatures && variant !== 'compact' && (
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-card-foreground mb-3">
              What's included:
            </h4>
            <div className="space-y-2">
              {plan.features.map((feature, index) => (
                <div
                  key={index}
                  className={cn(
                    'flex items-start gap-3 text-sm',
                    feature.highlight && 'bg-accent-primary/5 -mx-2 px-2 py-1 rounded-md'
                  )}
                >
                  <div className="mt-0.5">
                    {feature.included === true ? (
                      <Check className="w-4 h-4 text-accent-primary" />
                    ) : feature.included === false ? (
                      <X className="w-4 h-4 text-muted-foreground" />
                    ) : typeof feature.included === 'number' ? (
                      <div className="w-4 h-4 bg-accent-primary text-[var(--card)] rounded-full flex items-center justify-center text-xs font-bold">
                        {feature.included}
                      </div>
                    ) : (
                      <Badge variant="outline" className="text-xs">
                        {feature.included}
                      </Badge>
                    )}
                  </div>
                  <div className="flex-1">
                    <span className={cn(
                      'font-body',
                      feature.included === false 
                        ? 'text-muted-foreground line-through' 
                        : 'text-card-foreground'
                    )}>
                      {feature.name}
                    </span>
                    {feature.description && (
                      <div className="text-xs text-muted-foreground mt-1">
                        {feature.description}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Compact Features */}
        {showFeatures && variant === 'compact' && (
          <div className="space-y-2">
            <div className="text-sm text-muted-foreground">
              {plan.features.filter(f => f.included === true).length} features included
            </div>
            <div className="flex flex-wrap gap-1">
              {plan.features
                .filter(f => f.included === true)
                .slice(0, 3)
                .map((feature, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {feature.name}
                  </Badge>
                ))}
              {plan.features.filter(f => f.included === true).length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{plan.features.filter(f => f.included === true).length - 3} more
                </Badge>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// Full Pricing Table Component
export function PricingTable({
  plans,
  showAnnualDiscount = true,
  showFeatureComparison = true,
  variant = 'default',
  className
}: PricingTableProps) {
  const [isAnnual, setIsAnnual] = useState(false);

  // Calculate potential savings for annual billing
  const maxSavings = Math.max(...plans.map(plan => 
    (plan.price.monthly * 12) - plan.price.annually
  ));

  return (
    <div className={cn('space-y-8', className)}>
      {/* Header with Toggle */}
      <div className="text-center space-y-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-card-foreground mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
            Join the Boise Gun Club with flexible membership options designed for every shooter.
          </p>
        </div>

        {/* Billing Toggle */}
        {showAnnualDiscount && (
          <div className="flex items-center justify-center gap-4">
            <span className={cn(
              'font-medium font-heading',
              !isAnnual ? 'text-card-foreground' : 'text-muted-foreground'
            )}>
              Monthly
            </span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
            />
            <div className="flex items-center gap-2">
              <span className={cn(
                'font-medium font-heading',
                isAnnual ? 'text-card-foreground' : 'text-muted-foreground'
              )}>
                Annual
              </span>
              {maxSavings > 0 && (
                <Badge className="bg-accent-primary text-[var(--card)]">
                  Save up to ${maxSavings}
                </Badge>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Pricing Cards Grid */}
      <div className={cn(
        'grid gap-8',
        plans.length === 2 ? 'md:grid-cols-2 max-w-4xl mx-auto' :
        plans.length === 3 ? 'md:grid-cols-3 max-w-6xl mx-auto' :
        'md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto'
      )}>
        {plans.map((plan) => (
          <PricingCard
            key={plan.id}
            plan={plan}
            isAnnual={isAnnual}
            variant={variant}
            showFeatures={!showFeatureComparison}
          />
        ))}
      </div>

      {/* Feature Comparison Table */}
      {showFeatureComparison && variant === 'detailed' && (
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-heading font-bold text-card-foreground mb-2">
              Compare Plans
            </h3>
            <p className="text-muted-foreground font-body">
              See what's included in each membership level
            </p>
          </div>

          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 font-heading font-semibold text-card-foreground">
                      Features
                    </th>
                    {plans.map((plan) => (
                      <th key={plan.id} className="text-center p-4 min-w-[150px]">
                        <div className="font-heading font-bold text-card-foreground">
                          {plan.name}
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">
                          ${isAnnual ? plan.price.annually : plan.price.monthly}
                          /{isAnnual ? 'year' : 'month'}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* Get all unique features */}
                  {Array.from(new Set(plans.flatMap(plan => plan.features.map(f => f.name)))).map((featureName) => (
                    <tr key={featureName} className="border-b hover:bg-muted/20">
                      <td className="p-4 font-body text-card-foreground">
                        {featureName}
                      </td>
                      {plans.map((plan) => {
                        const feature = plan.features.find(f => f.name === featureName);
                        return (
                          <td key={plan.id} className="p-4 text-center">
                            {feature ? (
                              feature.included === true ? (
                                <Check className="w-5 h-5 text-accent-primary mx-auto" />
                              ) : feature.included === false ? (
                                <X className="w-5 h-5 text-muted-foreground mx-auto" />
                              ) : typeof feature.included === 'number' ? (
                                <Badge className="bg-accent-primary text-[var(--card)]">
                                  {feature.included}
                                </Badge>
                              ) : (
                                <Badge variant="outline">
                                  {feature.included}
                                </Badge>
                              )
                            ) : (
                              <X className="w-5 h-5 text-muted-foreground mx-auto" />
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      )}

      {/* FAQ or Additional Info */}
      <div className="text-center space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 justify-center">
            <Shield className="w-5 h-5 text-accent-primary" />
            <span className="text-sm text-muted-foreground font-body">
              No long-term contracts
            </span>
          </div>
          <div className="flex items-center gap-3 justify-center">
            <Clock className="w-5 h-5 text-accent-primary" />
            <span className="text-sm text-muted-foreground font-body">
              Cancel anytime
            </span>
          </div>
          <div className="flex items-center gap-3 justify-center">
            <Users className="w-5 h-5 text-accent-primary" />
            <span className="text-sm text-muted-foreground font-body">
              Family-friendly environment
            </span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground font-body">
          Questions about membership? <a href="/contact" className="text-accent-primary hover:text-accent-secondary underline">Contact us</a> for personalized assistance.
        </p>
      </div>
    </div>
  );
}

// Export default sample plans for development
export const samplePlans: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    description: 'Perfect for casual shooters and beginners',
    price: {
      monthly: 49,
      annually: 470,
      setup: 50
    },
    icon: Target,
    features: [
      { name: 'Range Access', included: 'limited', description: '10 visits per month' },
      { name: 'Equipment Rental', included: true },
      { name: 'Safety Course', included: true },
      { name: 'Guest Privileges', included: 2 },
      { name: 'Event Discounts', included: '10%' },
      { name: 'Priority Booking', included: false },
      { name: 'Private Lessons', included: false },
      { name: 'Tournament Entry', included: false }
    ],
    ctaText: 'Start Basic',
    ctaVariant: 'outline'
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'Most popular choice for regular shooters',
    price: {
      monthly: 89,
      annually: 890
    },
    icon: Star,
    popular: true,
    badge: 'Most Popular',
    features: [
      { name: 'Range Access', included: true, description: 'Unlimited visits' },
      { name: 'Equipment Rental', included: true },
      { name: 'Safety Course', included: true },
      { name: 'Guest Privileges', included: 4 },
      { name: 'Event Discounts', included: '20%' },
      { name: 'Priority Booking', included: true },
      { name: 'Private Lessons', included: 2, description: 'Per month' },
      { name: 'Tournament Entry', included: true }
    ],
    ctaText: 'Go Premium'
  },
  {
    id: 'elite',
    name: 'Elite',
    description: 'For serious competitors and enthusiasts',
    price: {
      monthly: 149,
      annually: 1490
    },
    icon: Crown,
    recommended: true,
    color: 'from-lahoma-orange to-accent-primary',
    features: [
      { name: 'Range Access', included: true, description: 'Unlimited + 24/7 access' },
      { name: 'Equipment Rental', included: true },
      { name: 'Safety Course', included: true },
      { name: 'Guest Privileges', included: true, description: 'Unlimited' },
      { name: 'Event Discounts', included: '30%' },
      { name: 'Priority Booking', included: true },
      { name: 'Private Lessons', included: true, description: 'Unlimited' },
      { name: 'Tournament Entry', included: true },
      { name: 'Personal Locker', included: true, highlight: true },
      { name: 'VIP Events', included: true, highlight: true }
    ],
    ctaText: 'Join Elite'
  }
];

// PricingFusion preset component
export function PricingFusion({
  plans = samplePlans,
  showAnnualDiscount = true,
  showFeatureComparison = false,
  className
}: Omit<PricingTableProps, 'variant'>) {
  return (
    <PricingTable
      plans={plans}
      showAnnualDiscount={showAnnualDiscount}
      showFeatureComparison={showFeatureComparison}
      variant="fusion"
      className={className}
    />
  );
}