'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { GlassFusionCard } from '@/components/ui/card';
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-red-500" style={{ height: '200px' }}>
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 h-full flex flex-col justify-center">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-heading font-black text-white mb-2">
                Fusion Components
                <span className="text-yellow-400"> Showcase</span>
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
            <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-white mb-4">
              Premium Buttons
            </h2>
            <p className="text-gray-600 dark:text-gray-400 font-body">
              Interactive buttons with hover effects, gradients, and animations
            </p>
          </div>

          {/* Effect Controls */}
          <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-xl">
            <h4 className="font-heading font-semibold text-gray-900 dark:text-white mb-4">Effect Controls</h4>
            <div className="flex flex-wrap gap-2">
              {(['none', 'lift', 'glow', 'pulse', 'shimmer'] as const).map((effect) => (
                <button
                  key={effect}
                  onClick={() => setSelectedEffect(effect)}
                  className={`px-4 py-2 rounded-lg font-body text-sm transition-all ${
                    selectedEffect === effect
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-orange-500/20'
                  }`}
                >
                  {effect.charAt(0).toUpperCase() + effect.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Button Examples */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Button effect={selectedEffect} variant="premium" icon={<Trophy className="w-4 h-4" />}>
              With Icon
            </Button>
            <Button effect={selectedEffect} variant="premium" size="lg">
              Large Button
            </Button>
            <Button effect={selectedEffect} variant="outline">
              Outline Style
            </Button>
            <Button effect={selectedEffect} variant="premium" loading>
              Loading State
            </Button>
          </div>
        </section>

        {/* Glass Fusion Cards Section */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-white mb-4">
              Glass Fusion Cards
            </h2>
            <p className="text-gray-600 dark:text-gray-400 font-body">
              Premium glassmorphism cards with ClickUp-style gradients and floating elements
            </p>
          </div>

          {/* Intensity Controls */}
          <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-xl">
            <h4 className="font-heading font-semibold text-gray-900 dark:text-white mb-4">Intensity Controls</h4>
            <div className="flex gap-2">
              {(['subtle', 'medium', 'premium'] as const).map((intensity) => (
                <button
                  key={intensity}
                  onClick={() => setSelectedIntensity(intensity)}
                  className={`px-4 py-2 rounded-lg font-body text-sm transition-all ${
                    selectedIntensity === intensity
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-orange-500/20'
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
              headerGradient="from-orange-500 to-red-500"
              splashColor="rgb(250 204 21)"
            >
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400 font-body">
                  Unlimited range access, priority booking, and exclusive championship events.
                </p>
                <Button effect="lift" variant="premium" className="w-full">
                  <Crown className="w-4 h-4 mr-2" />
                  Join Elite
                </Button>
              </div>
            </GlassFusionCard>

            <GlassFusionCard
              title="Competition"
              description="Tournament focused"
              badge="Popular"
              intensity={selectedIntensity}
              headerGradient="from-blue-500 to-green-500"
              splashColor="rgb(59 130 246)"
            >
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400 font-body">
                  Professional coaching, equipment rental, and advanced scoring systems.
                </p>
                <Button effect="glow" variant="outline" className="w-full">
                  <Target className="w-4 h-4 mr-2" />
                  Compete
                </Button>
              </div>
            </GlassFusionCard>

            <GlassFusionCard
              title="Recreation"
              description="Family friendly"
              intensity={selectedIntensity}
              headerGradient="from-green-500 to-yellow-400"
              splashColor="rgb(34 197 94)"
            >
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400 font-body">
                  Casual shooting, safety training, and community recreational events.
                </p>
                <Button effect="pulse" variant="secondary" className="w-full">
                  <Play className="w-4 h-4 mr-2" />
                  Start Here
                </Button>
              </div>
            </GlassFusionCard>
          </div>
        </section>

        {/* Floating Background Section */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-white mb-4">
              Floating Backgrounds
            </h2>
            <p className="text-gray-600 dark:text-gray-400 font-body">
              Animated color splashes and floating elements for immersive backgrounds
            </p>
          </div>

          {/* Preset Controls */}
          <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-xl">
            <h4 className="font-heading font-semibold text-gray-900 dark:text-white mb-4">Preset Controls</h4>
            <div className="flex flex-wrap gap-2">
              {(['warm', 'cool', 'mixed', 'gunclub'] as const).map((preset) => (
                <button
                  key={preset}
                  onClick={() => setSelectedPreset(preset)}
                  className={`px-4 py-2 rounded-lg font-body text-sm transition-all ${
                    selectedPreset === preset
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-orange-500/20'
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
                <h3 className="text-4xl font-heading font-bold text-gray-900 dark:text-white mb-6">
                  Experience Premium
                  <span className="text-orange-500"> Design</span>
                </h3>
                <p className="text-xl text-gray-600 dark:text-gray-400 font-body font-light mb-8">
                  This floating background uses the <Badge variant="outline" className="mx-1">{selectedPreset}</Badge> 
                  preset with animated color splashes that create depth and visual interest.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    effect="shimmer" 
                    variant="premium"
                    size="lg"
                    icon={<Crosshair className="w-5 h-5" />}
                  >
                    Explore Components
                  </Button>
                  <Button 
                    effect="lift" 
                    variant="outline" 
                    size="lg"
                    icon={<ArrowRight className="w-5 h-5" />}
                    iconPosition="right"
                  >
                    View Documentation
                  </Button>
                </div>
              </div>
            </div>
          </FloatingBackground>
        </section>

        {/* Complete Showcase */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-white mb-4">
              Complete Integration
            </h2>
            <p className="text-gray-600 dark:text-gray-400 font-body">
              All components working together in harmony
            </p>
          </div>

          <FloatingBackground preset="gunclub" intensity="premium" className="rounded-2xl p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-heading font-bold text-gray-900 dark:text-white mb-6">
                  Ready to Build Something
                  <span className="text-orange-500"> Amazing?</span>
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 font-body mb-8">
                  These fusion components combine the best of Stripe's clean design philosophy 
                  with ClickUp's vibrant gradients, all tailored for the Boise Gun Club brand.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button effect="shimmer" variant="premium" size="lg">
                    <Star className="w-5 h-5 mr-2" />
                    Get Started
                  </Button>
                  <Button effect="glow" variant="outline" size="lg">
                    View Storybook
                  </Button>
                </div>
              </div>
              
              <GlassFusionCard
                title="Premium Experience"
                description="Fusion design system"
                badge="Live Demo"
                intensity="premium"
                headerGradient="from-orange-500 to-yellow-400"
                splashColor="rgb(239 68 68)"
                className="w-full"
              >
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-400 font-body">
                    This card demonstrates the complete fusion component system working together.
                  </p>
                  <div className="flex gap-2">
                    <Badge>Glassmorphism</Badge>
                    <Badge variant="outline">Gradients</Badge>
                    <Badge>Animations</Badge>
                  </div>
                  <Button effect="pulse" variant="premium" className="w-full">
                    Interactive Demo
                  </Button>
                </div>
              </GlassFusionCard>
            </div>
          </FloatingBackground>
        </section>
      </div>
    </div>
  );
}