'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Radar, Menu, Navigation, Compass, Layers } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BreadcrumbHero } from '@/components/ui/breadcrumb-hero';
import { SiteNavigation } from '@/components/ui/site-navigation';
import { SmartBreadcrumbs } from '@/components/ui/breadcrumb';
import { VoiceNavigation } from '@/components/ui/voice-navigation';
import { SpatialNavigation } from '@/components/ui/spatial-navigation';
import { TabNavigation } from '@/components/ui/tab-navigation';

export default function NavigationPage() {
  return (
    <div className="min-h-screen bg-cloudy-day-white dark:bg-kent-slate-gray">
      <BreadcrumbHero
        breadcrumbs={[
          { label: 'Components', href: '/test/components' }
        ]}
        title="Navigation"
        description="Advanced navigation patterns with mega menus and breadcrumbs"
        icon={Radar}
        gradient="bg-gradient-to-r from-leonard-yellow to-lahoma-orange"
        badges={['7 Components', 'Production Ready']}
        backLink={{
          href: '/test/components',
          label: 'Back to Components'
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <Card>
          <CardHeader>
            <CardTitle>Site Navigation</CardTitle>
          </CardHeader>
          <CardContent>
            <SiteNavigation fixed={false} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Smart Breadcrumbs</CardTitle>
          </CardHeader>
          <CardContent>
            <SmartBreadcrumbs items={[
              { label: 'Home', href: '/', icon: Compass },
              { label: 'Ranges', href: '/ranges', icon: Target },
              { label: 'Trap Range', href: '/ranges/trap', icon: null },
            ]} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Voice Navigation</CardTitle>
          </CardHeader>
          <CardContent>
            <VoiceNavigation />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Spatial Navigation</CardTitle>
          </CardHeader>
          <CardContent>
            <SpatialNavigation />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Tab Navigation</CardTitle>
          </CardHeader>
          <CardContent>
            <TabNavigation />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}