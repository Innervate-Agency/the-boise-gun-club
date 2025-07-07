'use client';

import React, { useState } from 'react';
import { PremiumButton } from '@/components/ui/premium-button';
import { GlassFusionCard } from '@/components/ui/glass-fusion-card';
import { FloatingBackground } from '@/components/ui/floating-background';
import { Badge } from '@/components/ui/badge';
import { 
  Trophy, 
  Target, 
  Star, 
  Zap, 
  ArrowRight, 
  Play,
  Sparkles,
  Crown,
  Crosshair
} from 'lucide-react';

export default function FusionComponentsPage() {
  const [selectedEffect, setSelectedEffect] = useState<'none' | 'lift' | 'glow' | 'pulse' | 'shimmer'>('lift');
  const [selectedIntensity, setSelectedIntensity] = useState<'subtle' | 'medium' | 'premium'>('medium');
  const [selectedPreset, setSelectedPreset] = useState<'warm' | 'cool' | 'mixed' | 'gunclub'>('gunclub');

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]" style={{ height: '200px' }}>
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 h-full flex flex-col justify-center">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-heading font-black text-white mb-2">
                Fusion Components
                <span className="text-[var(--accent-tertiary)]"> Showcase</span>
              </h1>
              <p className="text-xl text-white/90 font-body font-light">
                Interactive demo of our premium Stripe + ClickUp fusion components
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Premium Buttons Section */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-heading font-bold text-[var(--text-primary)] mb-4">
              Premium Buttons
            </h2>
            <p className="text-[var(--text-secondary)] font-body">
              Interactive buttons with hover effects, gradients, and animations
            </p>
          </div>

          {/* Effect Controls */}
          <div className="mb-8 p-6 bg-[var(--bg-secondary)] rounded-xl">
            <h4 className="font-heading font-semibold text-[var(--text-primary)] mb-4">Effect Controls</h4>
            <div className="flex flex-wrap gap-2">
              {(['none', 'lift', 'glow', 'pulse', 'shimmer'] as const).map((effect) => (
                <button
                  key={effect}
                  onClick={() => setSelectedEffect(effect)}
                  className={`px-4 py-2 rounded-lg font-body text-sm transition-all ${
                    selectedEffect === effect
                      ? 'bg-[var(--accent-primary)] text-white'
                      : 'bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:bg-[var(--accent-primary)]/20'
                  }`}
                >
                  {effect.charAt(0).toUpperCase() + effect.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Button Examples */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <PremiumButton effect={selectedEffect} icon={<Trophy className="w-4 h-4" />}>
              With Icon
            </PremiumButton>
            <PremiumButton effect={selectedEffect} size="lg">
              Large Button
            </PremiumButton>
            <PremiumButton effect={selectedEffect} variant="outline">
              Outline Style
            </PremiumButton>
            <PremiumButton effect={selectedEffect} loading>
              Loading State
            </PremiumButton>
          </div>
        </section>

        {/* Glass Fusion Cards Section */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-heading font-bold text-[var(--text-primary)] mb-4">
              Glass Fusion Cards
            </h2>
            <p className="text-[var(--text-secondary)] font-body">
              Premium glassmorphism cards with ClickUp-style gradients and floating elements
            </p>
          </div>

          {/* Intensity Controls */}
          <div className="mb-8 p-6 bg-[var(--bg-secondary)] rounded-xl">
            <h4 className="font-heading font-semibold text-[var(--text-primary)] mb-4">Intensity Controls</h4>
            <div className="flex gap-2">
              {(['subtle', 'medium', 'premium'] as const).map((intensity) => (
                <button
                  key={intensity}
                  onClick={() => setSelectedIntensity(intensity)}
                  className={`px-4 py-2 rounded-lg font-body text-sm transition-all ${
                    selectedIntensity === intensity
                      ? 'bg-[var(--accent-primary)] text-white'
                      : 'bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:bg-[var(--accent-primary)]/20'
                  }`}
                >
                  {intensity.charAt(0).toUpperCase() + intensity.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Card Examples */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <GlassFusionCard
              title="Championship"
              description="Elite membership tier"
              badge="Premium"
              intensity={selectedIntensity}
              headerGradient="from-[var(--accent-primary)] to-[var(--accent-secondary)]"
              splashColor="var(--accent-tertiary)"
            >
              <div className="space-y-4">
                <p className="text-[var(--text-secondary)] font-body">
                  Unlimited range access, priority booking, and exclusive championship events.
                </p>
                <PremiumButton effect="lift" className="w-full">
                  <Crown className="w-4 h-4 mr-2" />
                  Join Elite
                </PremiumButton>
              </div>
            </GlassFusionCard>

            <GlassFusionCard
              title="Competition"
              description="Tournament focused"
              badge="Popular"
              intensity={selectedIntensity}
              headerGradient="from-[var(--brand-blue)] to-[var(--brand-green)]"
              splashColor="var(--brand-blue)"
            >
              <div className="space-y-4">
                <p className="text-[var(--text-secondary)] font-body">
                  Professional coaching, equipment rental, and advanced scoring systems.
                </p>
                <PremiumButton effect="glow" variant="outline" className="w-full">
                  <Target className="w-4 h-4 mr-2" />
                  Compete
                </PremiumButton>
              </div>
            </GlassFusionCard>

            <GlassFusionCard
              title="Recreation"
              description="Family friendly"
              intensity={selectedIntensity}
              headerGradient="from-[var(--brand-green)] to-[var(--accent-tertiary)]"
              splashColor="var(--brand-green)"
            >
              <div className="space-y-4">
                <p className="text-[var(--text-secondary)] font-body">
                  Casual shooting, safety training, and community recreational events.
                </p>
                <PremiumButton effect="pulse" variant="secondary" className="w-full">
                  <Play className="w-4 h-4 mr-2" />
                  Start Here
                </PremiumButton>
              </div>
            </GlassFusionCard>
          </div>
        </section>

        {/* Floating Background Section */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-heading font-bold text-[var(--text-primary)] mb-4">
              Floating Backgrounds
            </h2>
            <p className="text-[var(--text-secondary)] font-body">
              Animated color splashes and floating elements for immersive backgrounds
            </p>
          </div>

          {/* Preset Controls */}
          <div className="mb-8 p-6 bg-[var(--bg-secondary)] rounded-xl">
            <h4 className="font-heading font-semibold text-[var(--text-primary)] mb-4">Preset Controls</h4>
            <div className="flex flex-wrap gap-2">
              {(['warm', 'cool', 'mixed', 'gunclub'] as const).map((preset) => (
                <button
                  key={preset}
                  onClick={() => setSelectedPreset(preset)}
                  className={`px-4 py-2 rounded-lg font-body text-sm transition-all ${
                    selectedPreset === preset
                      ? 'bg-[var(--accent-primary)] text-white'
                      : 'bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:bg-[var(--accent-primary)]/20'
                  }`}
                >
                  {preset.charAt(0).toUpperCase() + preset.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Background Example */}
          <FloatingBackground 
            preset={selectedPreset} 
            intensity="premium" 
            className="min-h-[400px] rounded-2xl border border-white/10"
          >
            <div className="h-full flex items-center justify-center p-12">
              <div className="text-center max-w-2xl">
                <h3 className="text-4xl font-heading font-bold text-[var(--text-primary)] mb-6">
                  Experience Premium
                  <span className="text-[var(--accent-primary)]"> Design</span>
                </h3>
                <p className="text-xl text-[var(--text-secondary)] font-body font-light mb-8">
                  This floating background uses the <Badge variant="outline" className="mx-1">{selectedPreset}</Badge> 
                  preset with animated color splashes that create depth and visual interest.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <PremiumButton 
                    effect="shimmer" 
                    size="lg"
                    icon={<Crosshair className="w-5 h-5" />}
                  >
                    Explore Components
                  </PremiumButton>
                  <PremiumButton 
                    effect="lift" 
                    variant="outline" 
                    size="lg"
                    icon={<ArrowRight className="w-5 h-5" />}
                    iconPosition="right"
                  >
                    View Documentation
                  </PremiumButton>
                </div>
              </div>
            </div>
          </FloatingBackground>
        </section>

        {/* Complete Showcase */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-heading font-bold text-[var(--text-primary)] mb-4">
              Complete Integration
            </h2>
            <p className="text-[var(--text-secondary)] font-body">
              All components working together in harmony
            </p>
          </div>

          <FloatingBackground preset="gunclub" intensity="premium" className="rounded-2xl p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-heading font-bold text-[var(--text-primary)] mb-6">
                  Ready to Build Something
                  <span className="text-[var(--accent-primary)]"> Amazing?</span>
                </h3>
                <p className="text-lg text-[var(--text-secondary)] font-body mb-8">
                  These fusion components combine the best of Stripe's clean design philosophy 
                  with ClickUp's vibrant gradients, all tailored for the Boise Gun Club brand.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <PremiumButton effect="shimmer" size="lg">
                    <Star className="w-5 h-5 mr-2" />
                    Get Started
                  </PremiumButton>
                  <PremiumButton effect="glow" variant="outline" size="lg">
                    View Storybook
                  </PremiumButton>
                </div>
              </div>
              
              <GlassFusionCard
                title="Premium Experience"
                description="Fusion design system"
                badge="Live Demo"
                intensity="premium"
                headerGradient="from-[var(--accent-primary)] to-[var(--accent-tertiary)]"
                splashColor="var(--accent-secondary)"
                className="w-full"
              >
                <div className="space-y-4">
                  <p className="text-[var(--text-secondary)] font-body">
                    This card demonstrates the complete fusion component system working together.
                  </p>
                  <div className="flex gap-2">
                    <Badge>Glassmorphism</Badge>
                    <Badge variant="outline">Gradients</Badge>
                    <Badge>Animations</Badge>
                  </div>
                  <PremiumButton effect="pulse" className="w-full">
                    Interactive Demo
                  </PremiumButton>
                </div>
              </GlassFusionCard>
            </div>
          </FloatingBackground>
        </section>
      </div>
    </div>
  );
}