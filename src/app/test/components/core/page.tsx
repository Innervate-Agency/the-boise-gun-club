'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Target, Layers, MousePointer, Shield, Edit3 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BreadcrumbHero } from '@/components/ui/breadcrumb-hero';

const coreComponents = [
  {
    name: 'Button',
    description: 'Interactive button component with multiple variants and states',
    href: '/test/components/buttons',
    status: 'stable',
    color: 'from-lahoma-orange to-abe-red',
    icon: 'MousePointer',
    variants: ['Primary', 'Secondary', 'Ghost', 'Destructive'],
    features: ['Accessibility', 'Loading States', 'Icon Support', 'Size Variants'],
    demoContent: 'Join The Elite'
  },
  {
    name: 'Card',
    description: 'Flexible container component for grouping related content',
    href: '/test/components/cards', 
    status: 'stable',
    color: 'from-idaho-sky-blue to-snakeriver-blue',
    icon: 'Layers',
    variants: ['Default', 'Elevated', 'Outline', 'Filled'],
    features: ['Header/Footer', 'Nested Content', 'Hover Effects', 'Shadow Variants'],
    demoContent: 'Content Container'
  },
  {
    name: 'Badge',
    description: 'Small status and labeling component for UI emphasis',
    href: '/test/components/badges',
    status: 'stable',
    color: 'from-owyhee-green to-club-house-lawn-green',
    icon: 'Shield', 
    variants: ['Default', 'Secondary', 'Destructive', 'Outline'],
    features: ['Status Colors', 'Size Options', 'Icon Support', 'Custom Styling'],
    demoContent: 'Elite Member'
  },
  {
    name: 'Input',
    description: 'Form input fields with validation and accessibility',
    href: '/test/components/forms',
    status: 'stable',
    color: 'from-leonard-yellow to-lahoma-orange',
    icon: 'Edit3',
    variants: ['Text', 'Email', 'Password', 'Search'],
    features: ['Validation', 'Placeholder', 'Disabled State', 'Error Handling'],
    demoContent: 'Enter your email...'
  }
];

export default function CoreComponentsPage() {
  return (
    <div className="min-h-screen bg-cloudy-day-white dark:bg-kent-slate-gray">
      <BreadcrumbHero
        breadcrumbs={[
          { label: 'Components', href: '/test/components' }
        ]}
        title="Core Components"
        description="Essential UI building blocks with Stripe-inspired design"
        icon={Layers}
        gradient="bg-gradient-to-r from-lahoma-orange to-abe-red"
        badges={['12 Components', 'Production Ready']}
        backLink={{
          href: '/test/components',
          label: 'Back to Components'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coreComponents.map((component, index) => {
            const IconComponent = component.icon === 'MousePointer' ? MousePointer : 
                                 component.icon === 'Layers' ? Layers : 
                                 component.icon === 'Shield' ? Shield : Edit3;
            
            return (
              <motion.div
                key={component.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden rounded-xl">
                  <div className={`h-32 bg-gradient-to-r ${component.color} relative overflow-hidden rounded-t-xl`}>
                    <div className="absolute inset-0 bg-black/10" />
                    
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/20 text-white border-white/30">
                        {component.status}
                      </Badge>
                    </div>
                    
                    <div className="absolute top-4 left-4">
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <IconComponent className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    
                    <div className="absolute bottom-4 left-4 right-4">
                      {component.name === 'Button' && (
                        <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30">
                          {component.demoContent}
                        </Button>
                      )}
                      {component.name === 'Card' && (
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 border border-white/30">
                          <div className="text-white text-sm font-medium">{component.demoContent}</div>
                          <div className="text-white/80 text-xs">Sample card content</div>
                        </div>
                      )}
                      {component.name === 'Badge' && (
                        <div className="flex gap-2">
                          <Badge className="bg-white/20 text-white border border-white/30">
                            {component.demoContent}
                          </Badge>
                          <Badge variant="outline" className="border-white/30 text-white">
                            Stable
                          </Badge>
                        </div>
                      )}
                      {component.name === 'Input' && (
                        <div className="bg-white/20 backdrop-blur-sm rounded-md p-2 border border-white/30">
                          <div className="text-white/60 text-xs">{component.demoContent}</div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <CardHeader className="pb-3">
                    <CardTitle className="text-2xl font-heading font-bold text-card-foreground group-hover:text-accent-primary transition-colors">
                      {component.name}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground font-body leading-relaxed">
                      {component.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-muted-foreground mb-3 font-heading uppercase">
                        Variants
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {component.variants.map((variant) => (
                          <Badge key={variant} variant="outline" className="text-xs">
                            {variant}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-muted-foreground mb-3 font-heading uppercase">
                        Features
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {component.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-accent-primary rounded-full" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Button asChild size="lg">
                      <Link href={component.href}>
                        View {component.name} Components
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <Card className="p-8 bg-accent-primary/5 border-0">
            <div className="max-w-2xl mx-auto">
              <Target className="h-12 w-12 text-accent-primary mx-auto mb-4" />
              <h3 className="text-2xl font-heading font-bold text-text-primary mb-4">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-muted-foreground font-body mb-6">
                These core components form the foundation of every great user interface. 
                Start building your next project with confidence.
              </p>
              <div className="flex gap-4 justify-center">
                <Button asChild className="bg-accent-primary hover:bg-accent-secondary text-white">
                  <Link href="http://localhost:6006" target="_blank">
                    View in Storybook
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/test/components">
                    Browse All Components
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
