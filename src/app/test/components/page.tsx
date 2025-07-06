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
  TrendingUp,
  Search,
  Code,
  Palette
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ComponentCategory {
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType<any>;
  color: string;
  status: 'stable' | 'beta' | 'experimental' | 'new';
  features: string[];
  componentCount: number;
}

const categories: ComponentCategory[] = [
  {
    title: 'Core Components',
    description: 'Essential UI building blocks with Stripe-inspired design and accessibility',
    href: '/test/components/core',
    icon: Layers,
    color: 'from-[#F28705] to-[#F25C05]',
    status: 'stable',
    features: ['Buttons', 'Cards', 'Badges', 'Inputs'],
    componentCount: 12
  },
  {
    title: 'Form Components',
    description: 'Complete form system with validation, auto-completion and smart interactions',
    href: '/test/components/forms',
    icon: FileText,
    color: 'from-[#5198cd] to-[#4982A6]',
    status: 'stable',
    features: ['Validation', 'Auto-complete', 'Multi-step', 'File Upload'],
    componentCount: 8
  },
  {
    title: 'Data Display',
    description: 'Tables, charts, and data visualization with real-time updates',
    href: '/test/components/data',
    icon: BarChart3,
    color: 'from-[#6f7822] to-[#3F6331]',
    status: 'stable',
    features: ['Tables', 'Charts', 'Progress', 'Statistics'],
    componentCount: 6
  },
  {
    title: 'Navigation',
    description: 'Advanced navigation patterns with mega menus and breadcrumbs',
    href: '/test/components/navigation',
    icon: Radar,
    color: 'from-[#F2CB05] to-[#F28705]',
    status: 'stable',
    features: ['Mega Menu', 'Breadcrumbs', 'Tabs', 'Dropdown'],
    componentCount: 7
  },
  {
    title: 'Feedback',
    description: 'Loading states, alerts, and user feedback components',
    href: '/test/components/feedback',
    icon: Activity,
    color: 'from-[#F23005] to-[#8C394B]',
    status: 'stable',
    features: ['Loading', 'Alerts', 'Toasts', 'Modals'],
    componentCount: 9
  },
  {
    title: 'Gaming Elements',
    description: 'Gamification components for shotgun sports achievements and scoring',
    href: '/test/components/gaming',
    icon: Trophy,
    color: 'from-[#F25C05] to-[#F23005]',
    status: 'new',
    features: ['Leaderboards', 'Achievements', 'Scoring', 'Competitions'],
    componentCount: 5
  }
];

const statusStyles = {
  stable: 'bg-white/20 text-white border border-white/30',
  beta: 'bg-white/20 text-white border border-white/30', 
  experimental: 'bg-white/20 text-white border border-white/30',
  new: 'bg-white/20 text-white border border-white/30'
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
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTab, setSelectedTab] = useState('all');

  const filteredCategories = categories.filter(category =>
    category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-[var(--cloudy-day-white)] dark:bg-[var(--kent-slate-gray)]">
      {/* Compact Hero Section with Search */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[var(--lahoma-orange)] to-[var(--abe-red)]" style={{ height: '300px' }}>
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 h-full flex flex-col justify-center">
          
          {/* Title and Icon */}
          <div className="flex items-center gap-6 mb-6">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Target className="h-8 w-8 text-white" />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-heading font-black text-white mb-2">
                Component
                <span className="text-[var(--leonard-yellow)]"> Arsenal</span>
              </h1>
              <p className="text-xl text-white/90 font-body font-light">
                Production-ready components built with shadcn/ui, styled like Stripe, enhanced with ClickUp gradients
              </p>
            </div>
            
            {/* Search Bar */}
            <div className="w-80 hidden lg:block">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/60" />
                <Input
                  placeholder="Search components..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60"
                />
              </div>
            </div>
          </div>
          
          {/* Stats and Mobile Search */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6 text-sm text-white/90">
              <span className="flex items-center gap-2">
                <Code className="h-4 w-4 text-[var(--leonard-yellow)]" />
                47+ Components
              </span>
              <span className="flex items-center gap-2">
                <Palette className="h-4 w-4 text-white" />
                Stripe Design
              </span>
              <span className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-white" />
                ClickUp Gradients
              </span>
            </div>
            
            {/* Mobile Search */}
            <div className="w-64 lg:hidden">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/60" />
                <Input
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Components Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Tabs */}
        <div className="mb-12">
          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 gap-1">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="core">Core</TabsTrigger>
              <TabsTrigger value="forms">Forms</TabsTrigger>
              <TabsTrigger value="data">Data</TabsTrigger>
              <TabsTrigger value="navigation">Nav</TabsTrigger>
              <TabsTrigger value="feedback">Feedback</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Component Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.href}
                variants={cardVariants}
                className="group"
              >
                <Link href={category.href}>
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-white dark:bg-[var(--ed-charcoal)] group-hover:scale-[1.02]">
                    {/* Stripe-style gradient header */}
                    <div className={`h-32 bg-gradient-to-r ${category.color} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/5" />
                      
                      {/* Status badge */}
                      <div className="absolute top-4 right-4">
                        <Badge className={statusStyles[category.status]}>
                          {category.status}
                        </Badge>
                      </div>
                      
                      {/* Icon */}
                      <div className="absolute bottom-4 left-6">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      
                      {/* Component count */}
                      <div className="absolute bottom-4 right-6">
                        <div className="text-right">
                          <div className="text-2xl font-bold text-white">{category.componentCount}</div>
                          <div className="text-xs text-white/80">components</div>
                        </div>
                      </div>
                      
                      {/* Subtle pattern overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                    </div>

                    <CardHeader className="pb-3">
                      <CardTitle className="text-xl font-['Rajdhani'] font-bold text-slate-800 dark:text-white group-hover:text-[var(--lahoma-orange)] transition-colors">
                        {category.title}
                      </CardTitle>
                      <CardDescription className="text-slate-600 dark:text-[var(--don-gray)] font-['Noto Sans'] font-light leading-relaxed">
                        {category.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="pt-0">
                      {/* Features */}
                      <div className="space-y-3 mb-6">
                        <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider font-heading">
                          Key Features
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {category.features.map((feature, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="text-xs"
                            >
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Action */}
                      <Button 
                        variant="ghost" 
                        className="w-full group-hover:bg-accent-primary/10 group-hover:text-accent-primary transition-colors font-heading font-semibold"
                      >
                        Explore Components
                        <motion.div
                          className="ml-2"
                          animate={{ x: [0, 4, 0] }}
                          transition={{ 
                            repeat: Infinity, 
                            duration: 2,
                            ease: "easeInOut" 
                          }}
                        >
                          →
                        </motion.div>
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Statistics Section with Stripe-style cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-['Rajdhani'] font-bold text-[var(--craters-moon)] dark:text-white mb-4">
              Component Statistics
            </h2>
            <p className="text-[var(--desert-cliff-brown)] dark:text-[var(--don-gray)] font-['Noto Sans'] font-light">
              Everything you need to build a world-class gun club website
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Total Components', value: '47+', color: 'from-[var(--lahoma-orange)] to-[var(--abe-red)]' },
              { label: 'Component Categories', value: '6', color: 'from-[var(--leonard-yellow)] to-[var(--lahoma-orange)]' },
              { label: 'Design Patterns', value: '25+', color: 'from-[var(--club-house-roof-blue)] to-[var(--club-house-walk-gray)]' },
              { label: 'Lines of Code', value: '10k+', color: 'from-[var(--club-house-lawn-green)] to-[var(--owyhee-green)]' }
            ].map((stat, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white dark:bg-[var(--ed-charcoal)] overflow-hidden">
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg mx-auto mb-3 flex items-center justify-center`}>
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-[var(--craters-moon)] dark:text-white mb-1 font-['Rajdhani']">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[var(--desert-cliff-brown)] dark:text-[var(--don-gray)] font-['Noto Sans']">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}