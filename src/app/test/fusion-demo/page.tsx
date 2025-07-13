'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FloatingBackground } from '@/components/ui/floating-background';
import { Badge } from '@/components/ui/badge';

export default function FusionDemoPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <FloatingBackground preset="gunclub" intensity="medium" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold text-primary-foreground mb-4">
            Fusion Component Demo
          </h1>
          <p className="text-xl text-secondary-foreground max-w-2xl mx-auto">
            Testing our Stripe + ClickUp fusion components with proper text contrast
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Glass Fusion Card */}
          <Card
            title="Elite Membership"
            description="$75/year + $6 per round"
            badge="Most Popular"
            variant="gradient"
            intensity="premium"
            hoverEffect={true}
          >
            <Button className="w-full" variant="outline">
              Join Today
            </Button>
          </Card>

          {/* Standard Card with Proper Contrast */}
          <Card className="rounded-xl overflow-hidden">
            <div className="h-24 bg-gradient-to-r from-[var(--color-lahoma-orange)] to-[var(--abe-red)] relative">
              <Badge className="absolute top-4 right-4" variant="secondary">
                Premium
              </Badge>
            </div>
            <CardHeader>
              <CardTitle className="font-heading text-primary-foreground">
                Pro Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-secondary-foreground mb-4">
                Advanced tools for serious shooters
              </p>
              <Button className="w-full">
                Upgrade Now
              </Button>
            </CardContent>
          </Card>

          {/* Glass Effect Card */}
          <Card className="rounded-xl overflow-hidden glass-mica">
            <CardHeader>
              <CardTitle className="font-heading text-primary-foreground">
                Glass Effect
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-secondary-foreground mb-4">
                Windows 11 Mica style glassmorphism
              </p>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Premium Button Showcase */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-heading font-bold text-primary-foreground mb-8">
            Premium Button Effects
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="premium" effect="lift">
              Lift Effect
            </Button>
            <Button variant="premium" effect="glow">
              Glow Effect
            </Button>
            <Button variant="premium" effect="shimmer">
              Shimmer Effect
            </Button>
            <Button variant="premium" effect="pulse">
              Pulse Effect
            </Button>
          </div>
        </div>

        {/* Theme Toggle Test */}
        <div className="mt-12 p-6 bg-muted rounded-xl">
          <h3 className="text-lg font-heading font-bold text-primary-foreground mb-4">
            Text Contrast Test
          </h3>
          <div className="space-y-2">
            <p className="text-primary-foreground">Primary text (should be dark in light mode, white in dark mode)</p>
            <p className="text-secondary-foreground">Secondary text (should be gray in both modes)</p>
            <p className="text-[var(--color-lahoma-orange)] hover:text-[var(--abe-red)]">Brand colored text (should be orange)</p>
          </div>
        </div>
      </div>
    </div>
  );
}