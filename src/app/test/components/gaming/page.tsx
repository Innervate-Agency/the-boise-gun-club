'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Trophy, Target, Award, Star, Crown, Zap, TrendingUp, Users, Calendar, Timer, Crosshair, Medal, Flame, Shield, Swords, ChevronUp, ChevronDown, Play, Pause, RotateCcw } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BreadcrumbHero } from '@/components/ui/breadcrumb-hero';

const achievements = [
  {
    id: 1,
    title: 'Trap Master',
    description: 'Break 23 out of 25 clays in trap shooting',
    icon: Target,
    unlocked: true,
    rarity: 'legendary',
    points: 500,
    progress: 100,
    unlockedDate: '2024-06-15'
  },
  {
    id: 2,
    title: 'Skeet Ace',
    description: 'Break 22+ clays in 10 consecutive skeet rounds',
    icon: Crown,
    unlocked: true,
    rarity: 'epic',
    points: 300,
    progress: 100,
    unlockedDate: '2024-06-10'
  },
  {
    id: 3,
    title: 'Clay Crusher',
    description: 'Break 20 consecutive clays in sporting clays',
    icon: Zap,
    unlocked: false,
    rarity: 'rare',
    points: 200,
    progress: 75,
    unlockedDate: null
  },
];

export default function GamingPage() {
  return (
    <div className="min-h-screen bg-cloudy-day-white dark:bg-kent-slate-gray">
      <BreadcrumbHero
        breadcrumbs={[
          { label: 'Components', href: '/test/components' }
        ]}
        title="Gaming Elements"
        description="Gamification components for shotgun sports achievements and scoring"
        icon={Trophy}
        gradient="bg-gradient-to-r from-jerry-orange to-abe-red"
        badges={['5 Components', 'New']}
        backLink={{
          href: '/test/components',
          label: 'Back to Components'
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement) => (
            <Card key={achievement.id} className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl font-heading font-bold text-card-foreground">
                    {achievement.title}
                  </CardTitle>
                  <Badge>{achievement.rarity}</Badge>
                </div>
                <CardDescription className="text-muted-foreground font-body leading-relaxed">
                  {achievement.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Progress: {achievement.progress}%</span>
                  <span>{achievement.points} PTS</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}