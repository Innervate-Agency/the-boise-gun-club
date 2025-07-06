'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Activity, Loader2, AlertTriangle, CheckCircle, Info } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const feedbackComponents = [
  {
    name: 'Loading States',
    description: 'Skeleton loaders, spinners, and progress indicators for async operations',
    status: 'stable',
    color: 'from-[#F23005] to-[#8C394B]',
    icon: 'Loader2',
    variants: ['Spinner', 'Skeleton', 'Progress Bar', 'Pulse'],
    features: ['Multiple Sizes', 'Custom Colors', 'Accessibility', 'Smooth Animation'],
    demoContent: 'Loading...'
  },
  {
    name: 'Alert Messages',
    description: 'Contextual feedback messages for success, error, warning, and info states',
    status: 'stable',
    color: 'from-[#6f7822] to-[#3F6331]',
    icon: 'AlertTriangle',
    variants: ['Success', 'Error', 'Warning', 'Info'],
    features: ['Auto Dismiss', 'Manual Close', 'Rich Content', 'Icon Support'],
    demoContent: 'Range is now open'
  },
  {
    name: 'Toast Notifications',
    description: 'Non-intrusive notifications that appear temporarily to provide feedback',
    status: 'stable',
    color: 'from-[#5198cd] to-[#4982A6]',
    icon: 'CheckCircle',
    variants: ['Top Right', 'Bottom Right', 'Center', 'Custom Position'],
    features: ['Auto Dismiss', 'Action Buttons', 'Progress Bar', 'Stack Management'],
    demoContent: 'Score saved!'
  },
  {
    name: 'Modal Dialogs',
    description: 'Overlay windows for confirmations, forms, and detailed content',
    status: 'stable',
    color: 'from-[#F2CB05] to-[#F28705]',
    icon: 'Info',
    variants: ['Confirmation', 'Form Modal', 'Full Screen', 'Drawer'],
    features: ['Focus Management', 'Escape Handling', 'Backdrop Click', 'Responsive'],
    demoContent: 'Confirm action'
  }
];

export default function FeedbackPage() {
  return (
    <div className="min-h-screen bg-[var(--cloudy-day-white)] dark:bg-[var(--kent-slate-gray)]">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#F23005] to-[#8C394B]">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center gap-4 mb-6">
            <Button asChild variant="ghost" className="text-white hover:bg-white/10">
              <Link href="/test/components" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Components
              </Link>
            </Button>
          </div>
          
          <div className="flex items-center gap-6 mb-6">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Activity className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-['Rajdhani'] font-black text-white mb-2">
                Feedback
              </h1>
              <p className="text-xl text-white/90 font-['Noto Sans'] font-light">
                Loading states, alerts, and user feedback components
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Badge className="bg-white/20 text-white border border-white/30">
              9 Components
            </Badge>
            <Badge className="bg-white/20 text-white border border-white/30">
              UX Optimized
            </Badge>
          </div>
        </div>
      </div>

      {/* Components Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {feedbackComponents.map((component, index) => {
            const IconComponent = component.icon === 'Loader2' ? Loader2 : 
                                 component.icon === 'AlertTriangle' ? AlertTriangle : 
                                 component.icon === 'CheckCircle' ? CheckCircle : Info;
            
            return (
              <motion.div
                key={component.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                  {/* Stripe-style gradient header with component preview */}
                  <div className={`h-32 bg-gradient-to-r ${component.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10" />
                    
                    {/* Status badge */}
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/20 text-white border border-white/30">
                        {component.status}
                      </Badge>
                    </div>
                    
                    {/* Icon */}
                    <div className="absolute top-4 left-4">
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <IconComponent className={`h-4 w-4 text-white ${component.icon === 'Loader2' ? 'animate-spin' : ''}`} />
                      </div>
                    </div>
                    
                    {/* Component Preview */}
                    <div className="absolute bottom-4 left-4 right-4">
                      {component.name === 'Loading States' && (
                        <div className="flex items-center gap-2">
                          <Loader2 className="h-4 w-4 text-white animate-spin" />
                          <span className="text-white text-sm">{component.demoContent}</span>
                        </div>
                      )}
                      {component.name === 'Alert Messages' && (
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 border border-white/30 flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-white" />
                          <span className="text-white text-sm">{component.demoContent}</span>
                        </div>
                      )}
                      {component.name === 'Toast Notifications' && (
                        <div className="bg-white/30 backdrop-blur-sm rounded-lg p-2 border border-white/30 text-center">
                          <span className="text-white text-sm font-medium">{component.demoContent}</span>
                        </div>
                      )}
                      {component.name === 'Modal Dialogs' && (
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 border border-white/30 text-center">
                          <div className="text-white text-sm font-medium mb-1">{component.demoContent}</div>
                          <div className="flex gap-2 justify-center">
                            <div className="bg-white/30 rounded px-2 py-1 text-xs text-white">Cancel</div>
                            <div className="bg-white rounded px-2 py-1 text-xs text-slate-800">Confirm</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <CardHeader className="pb-3">
                    <CardTitle className="text-2xl font-['Rajdhani'] font-bold text-slate-800 dark:text-white group-hover:text-[var(--lahoma-orange)] transition-colors">
                      {component.name}
                    </CardTitle>
                    <CardDescription className="text-slate-600 dark:text-[var(--don-gray)] font-['Noto Sans'] leading-relaxed">
                      {component.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    {/* Variants */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-slate-700 dark:text-white mb-3 font-['Rajdhani'] uppercase">
                        Variants
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {component.variants.map((variant) => (
                          <Badge key={variant} variant="outline" className="text-xs border-slate-300 text-slate-600">
                            {variant}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-slate-700 dark:text-white mb-3 font-['Rajdhani'] uppercase">
                        Features
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {component.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2 text-sm text-slate-600 dark:text-[var(--don-gray)]">
                            <Activity className="w-3 h-3 text-[#F23005]" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Button className={`w-full bg-gradient-to-r ${component.color} hover:opacity-90 text-white border-0`}>
                      View Examples
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
        
        {/* Action Section */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-to-r from-[#F23005]/5 to-[#8C394B]/5 border-0">
            <div className="max-w-2xl mx-auto">
              <Activity className="h-12 w-12 text-[#F23005] mx-auto mb-4" />
              <h3 className="text-2xl font-['Rajdhani'] font-bold text-slate-800 dark:text-white mb-4">
                Communicate Clearly
              </h3>
              <p className="text-slate-600 dark:text-[var(--don-gray)] font-['Noto Sans'] mb-6">
                Keep users informed with clear feedback components that enhance the 
                overall experience and reduce uncertainty.
              </p>
              <div className="flex gap-4 justify-center">
                <Button asChild className="bg-[#F23005] hover:bg-[#8C394B] text-white">
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