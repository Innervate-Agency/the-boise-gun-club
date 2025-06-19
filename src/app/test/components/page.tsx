'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  MousePointer, 
  Shield, 
  Layers, 
  Activity, 
  Sparkles, 
  FileText, 
  BarChart3, 
  Radar, 
  Trophy, 
  Camera, 
  Gamepad2, 
  Globe,
  Target,
  Crosshair,
  Zap,
  TrendingUp
} from 'lucide-react';
import FractalBackground from '@/components/effects/FractalBackground';

interface ComponentCategory {
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType<any>;
  color: string;
  status: 'stable' | 'beta' | 'experimental' | 'new';
  features: string[];
}

const categories: ComponentCategory[] = [
  {
    title: 'Interactive Buttons',
    description: 'Advanced button components with micro-interactions, haptic feedback, and dynamic states',
    href: '/test/components/buttons',
    icon: MousePointer,
    color: 'brand-primary',
    status: 'stable',
    features: ['Haptic Feedback', 'Loading States', 'Gesture Support', 'Voice Commands']
  },
  {
    title: 'Smart Badges',
    description: 'Intelligent status indicators with real-time updates and notification systems',
    href: '/test/components/badges',
    icon: Shield,
    color: 'brand-green',
    status: 'stable',
    features: ['Real-time Updates', 'Achievement System', 'Pulse Animations', 'Smart Grouping']
  },
  {
    title: 'Dynamic Cards',
    description: 'Next-gen card layouts with 3D transforms, parallax effects, and interactive content',
    href: '/test/components/cards',
    icon: Layers,
    color: 'brand-blue',
    status: 'stable',
    features: ['3D Transforms', 'Parallax Effects', 'Gesture Controls', 'Smart Layouts']
  },
  {
    title: 'Advanced Loading',
    description: 'Sophisticated loading states with progress tracking and skeleton animations',
    href: '/test/components/loading',
    icon: Activity,
    color: 'brand-secondary',
    status: 'stable',
    features: ['Skeleton UI', 'Progress Tracking', 'Smart Preloading', 'Error Recovery']
  },
  {
    title: 'Motion Effects',
    description: 'Cutting-edge animations with physics-based motion and gesture interactions',
    href: '/test/components/effects',
    icon: Sparkles,
    color: 'brand-primary',
    status: 'stable',
    features: ['Physics Engine', 'Gesture Recognition', 'Particle Systems', 'GPU Acceleration']
  },
  {
    title: 'Smart Forms',
    description: 'Intelligent form components with real-time validation and auto-completion',
    href: '/test/components/forms',
    icon: FileText,
    color: 'brand-blue',
    status: 'stable',
    features: ['Real-time Validation', 'Auto-completion', 'Voice Input', 'Smart Suggestions']
  },
  {
    title: 'Data Visualization',
    description: 'Interactive charts and graphs with real-time data streaming and 3D rendering',
    href: '/test/components/charts',
    icon: BarChart3,
    color: 'brand-secondary',
    status: 'new',
    features: ['Real-time Streaming', '3D Rendering', 'Interactive Legends', 'Export Tools']
  },
  {
    title: 'Navigation Systems',
    description: 'Advanced navigation with breadcrumbs, mega menus, and spatial awareness',
    href: '/test/components/navigation',
    icon: Radar,
    color: 'brand-green',
    status: 'new',
    features: ['Spatial Navigation', 'Mega Menus', 'Breadcrumb AI', 'Voice Navigation']
  },
  {
    title: 'Gaming Elements',
    description: 'Gamification components with leaderboards, achievements, and interactive scoring',
    href: '/test/components/gaming',
    icon: Trophy,
    color: 'brand-secondary',
    status: 'beta',
    features: ['Leaderboards', 'Achievement System', 'Score Tracking', 'Competition UI']
  },
  {
    title: 'Media Players',
    description: 'Advanced media components with 360° support, live streaming, and AR overlays',
    href: '/test/components/media',
    icon: Camera,
    color: 'brand-primary',
    status: 'beta',
    features: ['360° Support', 'Live Streaming', 'AR Overlays', 'Interactive Controls']
  },
  {
    title: 'Gesture Controls',
    description: 'Touch, swipe, and gesture recognition with haptic feedback and voice commands',
    href: '/test/components/gestures',
    icon: Gamepad2,
    color: 'brand-blue',
    status: 'experimental',
    features: ['Multi-touch', 'Voice Commands', 'Haptic Feedback', 'Eye Tracking']
  },
  {
    title: 'AR/VR Components',
    description: 'Augmented and virtual reality interfaces with 3D models and spatial computing',
    href: '/test/components/arvr',
    icon: Globe,
    color: 'brand-primary',
    status: 'experimental',
    features: ['3D Models', 'Spatial Computing', 'Hand Tracking', 'Mixed Reality']
  }
];

const statusColors = {
  stable: 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800',
  beta: 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800',
  experimental: 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-300 dark:border-yellow-800',
  new: 'bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-900/20 dark:text-orange-300 dark:border-orange-800'
};

const getBrandColorClasses = (colorKey: string) => {
  const colorMap = {
    'brand-primary': 'bg-gradient-to-r from-[#F23005] to-[#F23005]/80',
    'brand-secondary': 'bg-gradient-to-r from-[#F2CB05] to-[#F28705]',
    'brand-blue': 'bg-gradient-to-r from-[#5198cd] to-[#4982A6]',
    'brand-green': 'bg-gradient-to-r from-[#6f7822] to-[#3F6331]'
  };
  return colorMap[colorKey as keyof typeof colorMap] || 'bg-gradient-to-r from-slate-500 to-slate-600';
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24
    }
  }
};

export default function ComponentsOverview() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('/images/Grid/Grid(1).webp')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Target className="h-16 w-16 text-[#F23005] animate-pulse" />
                <Crosshair className="h-8 w-8 text-[#F28705] absolute top-4 left-4 animate-spin" style={{ animationDuration: '3s' }} />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
              COMPONENT <span className="text-[#F23005]">ARSENAL</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              The most advanced, interactive, and badass component library for building the coolest gun club website in the country. 
              Featuring bleeding-edge animations, AI-powered interactions, and next-gen UX patterns.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-[#F2CB05]" />
                Lightning Fast
              </span>
              <span className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[#F23005]" />
                AI-Enhanced
              </span>
              <span className="flex items-center gap-2">
                <Target className="h-4 w-4 text-[#6f7822]" />
                Precision Built
              </span>
              <span className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-[#5198cd]" />
                Future Ready
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Components Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.href}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  z: 50
                }}
                whileTap={{ scale: 0.98 }}
                className="group"
              >
                <Link href={category.href}>
                  <div className="relative h-full bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden transition-all duration-300 hover:shadow-2xl">
                    {/* Gradient Header */}
                    <div className={`h-24 ${getBrandColorClasses(category.color)} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/10"></div>
                      <div className="absolute top-4 right-4">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full border ${statusColors[category.status]}`}>
                          {category.status}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <IconComponent className="h-8 w-8 text-white drop-shadow-lg" />
                      </div>
                      {/* Animated background pattern */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-2 group-hover:text-[#F23005] transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 leading-relaxed">
                        {category.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-2">
                        <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                          Key Features
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {category.features.map((feature, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-md"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700">
                        <div className="flex items-center justify-between text-sm font-medium text-[#F23005] group-hover:text-[#F28705] transition-colors">
                          <span>Explore Components</span>
                          <motion.div
                            animate={{ x: [0, 4, 0] }}
                            transition={{ 
                              repeat: Infinity, 
                              duration: 2,
                              ease: "easeInOut" 
                            }}
                          >
                            →
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#F23005]/5 to-[#F28705]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-8 shadow-2xl">
            <h2 className="text-3xl font-heading font-bold text-white mb-8">
              Component Arsenal Statistics
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#F23005] mb-2">150+</div>
                <div className="text-slate-300 text-sm">Interactive Components</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#F2CB05] mb-2">50+</div>
                <div className="text-slate-300 text-sm">Animation Patterns</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#6f7822] mb-2">12</div>
                <div className="text-slate-300 text-sm">Component Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#5198cd] mb-2">∞</div>
                <div className="text-slate-300 text-sm">Customization Options</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 