'use client';

import { GlassFusionCard } from '@/components/ui/glass-fusion-card';
import { PremiumButton } from '@/components/ui/premium-button';
import { FloatingBackground } from '@/components/ui/floating-background';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function FusionDemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--cloudy-day-white)] to-[var(--overcast)] dark:from-[var(--kent-slate-gray)] dark:to-[var(--pigeon-clay-gray)] relative">
      <FloatingBackground preset="gunclub" intensity="medium" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            Fusion Component Demo
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Testing our Stripe + ClickUp fusion components with proper text contrast
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Glass Fusion Card */}
          <GlassFusionCard
            title="Elite Membership"
            description="$75/year + $6 per round"
            badge="Most Popular"
            variant="gradient"
            intensity="premium"
            hoverEffect={true}
          >
            <Button className="w-full bg-white/20 hover:bg-white/30 text-white">
              Join Today
            </Button>
          </GlassFusionCard>

          {/* Standard Card with Proper Contrast */}
          <Card className="rounded-xl overflow-hidden">
            <div className="h-24 bg-gradient-to-r from-[var(--lahoma-orange)] to-[var(--abe-red)] relative">
              <Badge className="absolute top-4 right-4 bg-white/20 text-white border-white/30">
                Premium
              </Badge>
            </div>
            <CardHeader>
              <CardTitle className="font-heading text-gray-900 dark:text-white">
                Pro Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Advanced tools for serious shooters
              </p>
              <Button className="w-full bg-[var(--lahoma-orange)] hover:bg-[var(--abe-red)] text-white">
                Upgrade Now
              </Button>
            </CardContent>
          </Card>

          {/* Glass Effect Card */}
          <Card className="rounded-xl overflow-hidden glass-mica">
            <CardHeader>
              <CardTitle className="font-heading text-white">
                Glass Effect
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/80 mb-4">
                Windows 11 Mica style glassmorphism
              </p>
              <Button variant="outline" className="w-full text-white border-white/30 hover:bg-white/10">
                Learn More
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Premium Button Showcase */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-8">
            Premium Button Effects
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <PremiumButton effect="lift" intensity="premium">
              Lift Effect
            </PremiumButton>
            <PremiumButton effect="glow" intensity="premium">
              Glow Effect
            </PremiumButton>
            <PremiumButton effect="shimmer" intensity="premium">
              Shimmer Effect
            </PremiumButton>
            <PremiumButton effect="pulse" intensity="premium">
              Pulse Effect
            </PremiumButton>
          </div>
        </div>

        {/* Theme Toggle Test */}
        <div className="mt-12 p-6 bg-white/10 dark:bg-black/10 rounded-xl backdrop-blur-sm">
          <h3 className="text-lg font-heading font-bold text-gray-900 dark:text-white mb-4">
            Text Contrast Test
          </h3>
          <div className="space-y-2">
            <p className="text-gray-900 dark:text-white">Primary text (should be dark in light mode, white in dark mode)</p>
            <p className="text-gray-600 dark:text-gray-300">Secondary text (should be gray in both modes)</p>
            <p className="text-[var(--lahoma-orange)] hover:text-[var(--abe-red)]">Brand colored text (should be orange)</p>
          </div>
        </div>
      </div>
    </div>
  );
}