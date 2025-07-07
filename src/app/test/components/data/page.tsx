'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, BarChart3, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const dataComponents = [
  {
    name: 'Data Tables',
    description: 'Sortable, filterable tables with pagination and selection',
    status: 'stable',
    variants: ['Basic Table', 'Sortable', 'Filterable', 'Paginated'],
    features: ['Column Sorting', 'Row Selection', 'Search Filter', 'Export Data']
  },
  {
    name: 'Charts & Graphs',
    description: 'Interactive charts for score tracking and performance data',
    status: 'stable', 
    variants: ['Line Chart', 'Bar Chart', 'Pie Chart', 'Area Chart'],
    features: ['Real-time Updates', 'Tooltips', 'Zoom/Pan', 'Responsive']
  },
  {
    name: 'Statistics Cards',
    description: 'Key metric displays with trend indicators and comparisons',
    status: 'stable',
    variants: ['Basic Stat', 'Trend Card', 'Comparison', 'KPI Card'],
    features: ['Trend Arrows', 'Percentage Change', 'Color Coding', 'Time Periods']
  },
  {
    name: 'Progress Indicators',
    description: 'Visual progress displays for scores and achievements',
    status: 'stable',
    variants: ['Progress Bar', 'Circular Progress', 'Step Progress', 'Score Ring'],
    features: ['Animated Fill', 'Custom Colors', 'Labels', 'Milestones']
  },
  {
    name: 'Leaderboards',
    description: 'Ranking displays for competition results and scores',
    status: 'new',
    variants: ['Top 10', 'Full Ranking', 'Category Leaders', 'Recent Scores'],
    features: ['Auto Update', 'Position Changes', 'Score History', 'Filtering']
  },
  {
    name: 'Score Cards',
    description: 'Individual shooting round scorecards and summaries',
    status: 'stable',
    variants: ['Trap Card', 'Skeet Card', 'Sporting Clays', 'Summary Card'],
    features: ['Round Tracking', 'Hit/Miss Display', 'Totals', 'Historical Data']
  }
];

export default function DataDisplayPage() {
  return (
    <div className="min-h-screen bg-cloudy-day-white dark:bg-kent-slate-gray">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-owyhee-green to-club-house-lawn-green">
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
              <BarChart3 className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-heading font-black text-white mb-2">
                Data Display
              </h1>
              <p className="text-xl text-white/90 font-body font-light">
                Tables, charts, and data visualization with real-time updates
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Badge className="bg-white/20 text-white border border-white/30">
              6 Components
            </Badge>
            <Badge className="bg-white/20 text-white border border-white/30">
              Real-time Ready
            </Badge>
          </div>
        </div>
      </div>

      {/* Components Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dataComponents.map((component, index) => (
            <motion.div
              key={component.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-2xl font-heading font-bold text-card-foreground">
                      {component.name}
                    </CardTitle>
                    <Badge className={
                      component.status === 'stable' 
                        ? 'bg-owyhee-green/10 text-owyhee-green border border-owyhee-green/20'
                        : component.status === 'new'
                        ? 'bg-abe-red/10 text-abe-red border border-abe-red/20'
                        : 'bg-idaho-sky-blue/10 text-idaho-sky-blue border border-idaho-sky-blue/20'
                    }>
                      {component.status}
                    </Badge>
                  </div>
                  <CardDescription className="text-muted-foreground font-body leading-relaxed">
                    {component.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  {/* Variants */}
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
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-muted-foreground mb-3 font-heading uppercase">
                      Features
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {component.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <TrendingUp className="w-3 h-3 text-owyhee-green" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-owyhee-green hover:bg-club-house-lawn-green text-white">
                    View Examples
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Action Section */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-to-r from-owyhee-green/5 to-club-house-lawn-green/5 border-0">
            <div className="max-w-2xl mx-auto">
              <BarChart3 className="h-12 w-12 text-owyhee-green mx-auto mb-4" />
              <h3 className="text-2xl font-heading font-bold text-text-primary mb-4">
                Data-Driven Insights
              </h3>
              <p className="text-muted-foreground font-body mb-6">
                Transform shooting scores and club metrics into actionable insights with our 
                comprehensive data visualization components.
              </p>
              <div className="flex gap-4 justify-center">
                <Button asChild className="bg-owyhee-green hover:bg-club-house-lawn-green text-white">
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
