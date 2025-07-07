import type { Meta, StoryObj } from '@storybook/react';
import { PremiumButton } from '@/components/ui/premium-button';
import { GlassFusionCard } from '@/components/ui/glass-fusion-card';
import { FloatingBackground } from '@/components/ui/floating-background';
import { Trophy, Target, Star, Zap, ArrowRight } from 'lucide-react';

const meta: Meta = {
  title: 'Components/Fusion/Premium Suite',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Premium components combining Stripe design with ClickUp gradients and Boise Gun Club branding.',
      },
    },
  },
};

export default meta;

// Premium Button Stories
export const PremiumButtons: StoryObj = {
  render: () => (
    <div className="space-y-8 p-8">
      <div>
        <h2 className="text-2xl font-heading font-bold mb-4">Premium Button Effects</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <PremiumButton effect="none">
            Default
          </PremiumButton>
          <PremiumButton effect="lift" icon={<Trophy className="w-4 h-4" />}>
            Lift Effect
          </PremiumButton>
          <PremiumButton effect="glow" icon={<Zap className="w-4 h-4" />}>
            Glow Effect
          </PremiumButton>
          <PremiumButton effect="pulse" icon={<Target className="w-4 h-4" />}>
            Pulse Effect
          </PremiumButton>
          <PremiumButton effect="shimmer" icon={<Star className="w-4 h-4" />}>
            Shimmer Effect
          </PremiumButton>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-heading font-bold mb-4">Button Sizes</h3>
        <div className="flex items-center gap-4">
          <PremiumButton size="sm" effect="lift">Small</PremiumButton>
          <PremiumButton size="default" effect="lift">Default</PremiumButton>
          <PremiumButton size="lg" effect="lift">Large</PremiumButton>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-heading font-bold mb-4">Loading States</h3>
        <div className="flex items-center gap-4">
          <PremiumButton loading>Loading...</PremiumButton>
          <PremiumButton disabled>Disabled</PremiumButton>
        </div>
      </div>
    </div>
  ),
};

// Glass Fusion Card Stories
export const GlassFusionCards: StoryObj = {
  render: () => (
    <div className="space-y-8 p-8">
      <h2 className="text-2xl font-heading font-bold mb-4">Glass Fusion Cards</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <GlassFusionCard
          title="Premium Card"
          description="Subtitle with glassmorphism"
          badge="New"
          intensity="premium"
          headerGradient="from-[#F23005] to-[#f07b1d]"
          splashColor="#E3C03C"
        >
          <p className="text-muted-foreground font-body">
            This is a premium glass fusion card with all the effects enabled.
          </p>
        </GlassFusionCard>

        <GlassFusionCard
          title="Medium Intensity"
          badge="Beta"
          intensity="medium"
          headerGradient="from-[#5198cd] to-[#6f7822]"
          splashColor="#5198cd"
        >
          <p className="text-muted-foreground font-body">
            Medium intensity glassmorphism for balanced visual hierarchy.
          </p>
        </GlassFusionCard>

        <GlassFusionCard
          title="Subtle Effect"
          intensity="subtle"
          variant="gradient"
          headerGradient="from-[#6f7822] to-[#909233]"
        >
          <p className="text-muted-foreground font-body">
            Subtle glassmorphism for supporting content.
          </p>
        </GlassFusionCard>
      </div>
    </div>
  ),
};

// Floating Background Stories
export const FloatingBackgrounds: StoryObj = {
  render: () => (
    <div className="space-y-8">
      <h2 className="text-2xl font-heading font-bold mb-4 p-8">Floating Backgrounds</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <FloatingBackground preset="gunclub" intensity="premium" className="min-h-[300px] rounded-xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-heading font-bold text-card-foreground mb-4">
              Gun Club Preset
            </h3>
            <p className="text-muted-foreground font-body mb-6">
              Premium intensity with animated color splashes using our brand colors.
            </p>
            <PremiumButton effect="lift" icon={<ArrowRight className="w-4 h-4" />}>
              Learn More
            </PremiumButton>
          </div>
        </FloatingBackground>

        <FloatingBackground preset="warm" intensity="medium" className="min-h-[300px] rounded-xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-heading font-bold text-card-foreground mb-4">
              Warm Preset
            </h3>
            <p className="text-muted-foreground font-body mb-6">
              Medium intensity with warm orange and red tones.
            </p>
            <PremiumButton effect="glow" variant="outline">
              Explore
            </PremiumButton>
          </div>
        </FloatingBackground>

        <FloatingBackground preset="cool" intensity="subtle" className="min-h-[300px] rounded-xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-heading font-bold text-card-foreground mb-4">
              Cool Preset
            </h3>
            <p className="text-muted-foreground font-body mb-6">
              Subtle intensity with blue and green tones.
            </p>
            <PremiumButton effect="pulse" variant="secondary">
              Discover
            </PremiumButton>
          </div>
        </FloatingBackground>

        <FloatingBackground preset="mixed" intensity="medium" className="min-h-[300px] rounded-xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-heading font-bold text-card-foreground mb-4">
              Mixed Preset
            </h3>
            <p className="text-muted-foreground font-body mb-6">
              Balanced mix of all brand colors with medium intensity.
            </p>
            <PremiumButton effect="shimmer">
              Get Started
            </PremiumButton>
          </div>
        </FloatingBackground>
      </div>
    </div>
  ),
};

// Combined Showcase
export const CompleteShowcase: StoryObj = {
  render: () => (
    <FloatingBackground preset="gunclub" intensity="premium" className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-heading font-black text-card-foreground mb-4">
            Premium Fusion
            <span className="text-accent-primary"> Components</span>
          </h1>
          <p className="text-xl text-muted-foreground font-body font-light max-w-3xl mx-auto">
            Stripe-inspired design meets ClickUp gradients with Boise Gun Club branding
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <GlassFusionCard
            title="Championship"
            description="Elite member benefits"
            badge="Premium"
            intensity="premium"
            headerGradient="from-[#F23005] to-[#f07b1d]"
            splashColor="#E3C03C"
          >
            <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300 font-body">
                Unlimited range access, priority booking, and exclusive events.
              </p>
              <PremiumButton effect="lift" className="w-full">
                Join Now
              </PremiumButton>
            </div>
          </GlassFusionCard>

          <GlassFusionCard
            title="Competition"
            description="Tournament ready"
            badge="Popular"
            intensity="medium"
            headerGradient="from-[#5198cd] to-[#6f7822]"
            splashColor="#5198cd"
          >
            <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300 font-body">
                Professional coaching, equipment rental, and scoring systems.
              </p>
              <PremiumButton effect="glow" variant="outline" className="w-full">
                Learn More
              </PremiumButton>
            </div>
          </GlassFusionCard>

          <GlassFusionCard
            title="Recreation"
            description="Family friendly"
            intensity="subtle"
            headerGradient="from-[#6f7822] to-[#909233]"
            splashColor="#6f7822"
          >
            <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300 font-body">
                Casual shooting, safety training, and community events.
              </p>
              <PremiumButton effect="pulse" variant="secondary" className="w-full">
                Get Started
              </PremiumButton>
            </div>
          </GlassFusionCard>
        </div>

        <div className="text-center">
          <PremiumButton 
            effect="shimmer" 
            size="lg" 
            icon={<Trophy className="w-5 h-5" />}
            iconPosition="left"
          >
            Explore All Components
          </PremiumButton>
        </div>
      </div>
    </FloatingBackground>
  ),
};