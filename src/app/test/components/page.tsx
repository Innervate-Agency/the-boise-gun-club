'use client';

import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import GradientCard from '@/components/ui/GradientCard';
import GlassCard from '@/components/ui/GlassCard';
import Badge from '@/components/ui/Badge';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import NewThemeToggle from '@/components/ui/NewThemeToggle';
import FractalBackground from '@/components/effects/FractalBackground';
import { useTheme } from 'next-themes';
import SectionHero from '@/components/layout/SectionHero';

const positions = ['top-left', 'top-right', 'bottom-left', 'bottom-right'] as const;

function randomPosition() {
  return positions[Math.floor(Math.random() * positions.length)];
}

export default function ComponentShowcase() {
  const { resolvedTheme } = useTheme();
  const darkMode = resolvedTheme === 'dark';
  const overlayLight = '#FAF5EB';
  const overlayDark = '#000';
  const overlayColor = darkMode ? overlayDark : overlayLight;

  return (
    <div className="min-h-screen bg-background p-8">
      <SectionHero
        title="Component Showcase"
        subtitle="A comprehensive showcase of all UI components in the design system. Use this page as a reference for component usage and styling."
        accentType="fractal"
      />
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Theme Toggle */}
        <section className="relative space-y-6" style={{ background: overlayColor }}>
          <FractalBackground position={randomPosition()} blurAmount={80} zIndex={0} darkMode={darkMode} />
          <h2 className="text-3xl font-heading font-bold relative z-10">Theme Controls</h2>
          <div className="flex items-center gap-4 relative z-10">
            <NewThemeToggle />
          </div>
        </section>

        {/* Buttons */}
        <section className="relative space-y-6" style={{ background: overlayColor }}>
          <FractalBackground position={randomPosition()} blurAmount={80} zIndex={0} darkMode={darkMode} />
          <h2 className="text-3xl font-heading font-bold relative z-10">Buttons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <div className="space-y-6">
              <h3 className="text-xl font-heading">Primary Buttons</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" size="sm">Small</Button>
                <Button variant="primary" size="md">Medium</Button>
                <Button variant="primary" size="lg">Large</Button>
                <Button variant="primary" disabled>Disabled</Button>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-heading">Secondary Buttons</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="secondary" size="sm">Small</Button>
                <Button variant="secondary" size="md">Medium</Button>
                <Button variant="secondary" size="lg">Large</Button>
                <Button variant="secondary" disabled>Disabled</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="relative space-y-6" style={{ background: overlayColor }}>
          <FractalBackground position={randomPosition()} blurAmount={80} zIndex={0} darkMode={darkMode} />
          <h2 className="text-3xl font-heading font-bold relative z-10">Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            <div className="space-y-4">
              <h3 className="text-xl font-heading">Standard Card</h3>
              <Card className="p-6">
                <h4 className="text-lg font-heading font-bold mb-2">Card Title</h4>
                <p className="text-text-secondary">This is a standard card component with basic styling.</p>
              </Card>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-heading">Gradient Card</h3>
              <GradientCard className="p-6">
                <h4 className="text-lg font-heading font-bold mb-2">Gradient Card</h4>
                <p className="text-text-secondary">A card with a beautiful gradient background effect.</p>
              </GradientCard>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-heading">Glass Card</h3>
              <GlassCard className="p-6">
                <h4 className="text-lg font-heading font-bold mb-2">Glass Card</h4>
                <p className="text-text-secondary">A card with a modern glassmorphism effect.</p>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Badges */}
        <section className="relative space-y-6" style={{ background: overlayColor }}>
          <FractalBackground position={randomPosition()} blurAmount={80} zIndex={0} darkMode={darkMode} />
          <h2 className="text-3xl font-heading font-bold relative z-10">Badges</h2>
          <div className="flex flex-wrap gap-4 relative z-10">
            <Badge variant="primary">Primary</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="info">Info</Badge>
            <Badge variant="gold">Gold</Badge>
          </div>
        </section>

        {/* Loading States */}
        <section className="relative space-y-6" style={{ background: overlayColor }}>
          <FractalBackground position={randomPosition()} blurAmount={80} zIndex={0} darkMode={darkMode} />
          <h2 className="text-3xl font-heading font-bold relative z-10">Loading States</h2>
          <div className="flex items-center gap-8 relative z-10">
            <LoadingSpinner size="sm" />
            <LoadingSpinner size="md" />
            <LoadingSpinner size="lg" />
          </div>
        </section>

        {/* Interactive Demo */}
        <section className="relative space-y-6" style={{ background: overlayColor }}>
          <FractalBackground position={randomPosition()} blurAmount={80} zIndex={0} darkMode={darkMode} />
          <h2 className="text-3xl font-heading font-bold relative z-10">Interactive Demo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <Card className="p-6">
              <h3 className="text-xl font-heading font-bold mb-4">Button Interactions</h3>
              <div className="flex flex-wrap gap-4">
                <Button 
                  variant="primary" 
                  onClick={() => alert('Primary button clicked!')}
                >
                  Click Me
                </Button>
                <Button 
                  variant="secondary" 
                  onClick={() => alert('Secondary button clicked!')}
                >
                  Click Me Too
                </Button>
              </div>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-heading font-bold mb-4">Card Interactions</h3>
              <p className="text-text-secondary mb-4">
                Hover over the cards above to see their interactive states and animations.
              </p>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
} 