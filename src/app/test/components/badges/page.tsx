'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Star, 
  Award, 
  Target, 
  Trophy, 
  Clock, 
  CheckCircle, 
  AlertTriangle,
  Users,
  Calendar,
  MapPin,
  Zap
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  ClipboardIcon,
  ClipboardDocumentCheckIcon,
  ArrowLeftIcon,
  CheckCircleIcon,
  UserIcon,
  CalendarIcon,
  TrophyIcon
} from '@heroicons/react/24/solid';
import Link from 'next/link';

// Code snippet component
function CodeSnippet({ title, code }: { title: string; code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-900 rounded-lg p-4 relative">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-slate-400 font-mono">{title}</span>
        <button
          onClick={handleCopy}
          className="text-slate-400 hover:text-white transition-colors p-1"
          title="Copy code"
        >
          {copied ? '✓' : '📋'}
        </button>
      </div>
      <pre className="text-sm text-slate-300 overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
}

// Interactive prop controls
function PropControl({ label, value, onChange, options }: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-medium text-slate-600 dark:text-slate-400">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="text-sm border border-slate-200 dark:border-slate-700 rounded px-2 py-1 bg-white dark:bg-slate-800"
      >
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default function BadgesPlayground() {
  const [variant, setVariant] = useState('primary');
  const [size, setSize] = useState('md');

  const badgeVariants = [
    'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'gold'
  ];

  const gunClubBadges = [
    { variant: 'gold', icon: Trophy, text: 'Master Shooter', description: 'Top competition performer' },
    { variant: 'primary', icon: Target, text: 'Expert', description: 'Advanced skill level' },
    { variant: 'success', icon: CheckCircle, text: 'Certified', description: 'Safety certified member' },
    { variant: 'info', icon: Shield, text: 'Member', description: 'Active club member' },
    { variant: 'warning', icon: Clock, text: 'Pending', description: 'Application in review' },
    { variant: 'danger', icon: AlertTriangle, text: 'Suspended', description: 'Temporary suspension' },
    { variant: 'secondary', icon: Users, text: 'Guest', description: 'Visiting member' },
    { variant: 'gold', icon: Award, text: 'Champion', description: 'Tournament winner' }
  ];

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
              <Shield className="h-16 w-16 text-[var(--accent-primary)] animate-pulse" />
            </div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
              BADGE <span className="text-[var(--accent-primary)]">SYSTEM</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Smart status indicators and achievement badges for gun club members. 
              Real-time updates, notification systems, and skill level tracking.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Interactive Demo Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Live Demo Panel */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-8">
            <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-6">
              Interactive Demo
            </h2>
            
            {/* Prop Controls */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <PropControl
                label="Variant"
                value={variant}
                onChange={setVariant}
                options={badgeVariants}
              />
              <PropControl
                label="Size"
                value={size}
                onChange={setSize}
                options={['sm', 'md', 'lg']}
              />
            </div>

            {/* Live Preview */}
            <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-8 mb-6">
              <div className="flex items-center justify-center">
                <Badge variant={variant as any} size={size as any}>
                  {variant.charAt(0).toUpperCase() + variant.slice(1)} Badge
                </Badge>
              </div>
            </div>

            {/* Code Output */}
            <CodeSnippet
              title="Generated Code"
              code={`<Badge variant="${variant}" size="${size}">
  ${variant.charAt(0).toUpperCase() + variant.slice(1)} Badge
</Badge>`}
            />
          </div>

          {/* All Variants Panel */}
          <div className="space-y-8">
            {/* All Badge Variants */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-8">
              <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-6">
                All Badge Variants
              </h3>
              <div className="space-y-6">
                {/* Small Size */}
                <div>
                  <h4 className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-3">Small Size</h4>
                  <div className="flex flex-wrap gap-2">
                    {badgeVariants.map((v) => (
                      <Badge key={`sm-${v}`} variant={v as any} size="sm">
                        {v}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Medium Size */}
                <div>
                  <h4 className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-3">Medium Size</h4>
                  <div className="flex flex-wrap gap-2">
                    {badgeVariants.map((v) => (
                      <Badge key={`md-${v}`} variant={v as any} size="md">
                        {v}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Large Size */}
                <div>
                  <h4 className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-3">Large Size</h4>
                  <div className="flex flex-wrap gap-2">
                    {badgeVariants.map((v) => (
                      <Badge key={`lg-${v}`} variant={v as any} size="lg">
                        {v}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Badges with Icons */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-8">
              <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-6">
                Badges with Icons
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <Badge variant="gold" size="md">
                  <Trophy className="w-3 h-3 mr-1" />
                  Champion
                </Badge>
                <Badge variant="primary" size="md">
                  <Target className="w-3 h-3 mr-1" />
                  Expert
                </Badge>
                <Badge variant="success" size="md">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Certified
                </Badge>
                <Badge variant="info" size="md">
                  <Shield className="w-3 h-3 mr-1" />
                  Member
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Gun Club Badge System */}
        <div className="mt-16">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-8">
            <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-8">
              Gun Club Badge System
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {gunClubBadges.map((badge, index) => {
                const IconComponent = badge.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6 text-center"
                  >
                    <div className="flex justify-center mb-4">
                      <IconComponent className="w-8 h-8 text-slate-600 dark:text-slate-400" />
                    </div>
                    <Badge variant={badge.variant as any} size="md" className="mb-3">
                      {badge.text}
                    </Badge>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {badge.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Real-World Examples */}
        <div className="mt-16">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-8">
            <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-8">
              Real-World Usage Examples
            </h2>
            <div className="space-y-8">
              {/* Member Profile Example */}
              <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  Member Profile Card
                </h3>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 dark:text-white">John Smith</h4>
                      <p className="text-slate-600 dark:text-slate-400">Member since 2018</p>
                    </div>
                    <div className="flex gap-2">
                      <Badge variant="gold" size="sm">
                        <Trophy className="w-3 h-3 mr-1" />
                        Champion
                      </Badge>
                      <Badge variant="success" size="sm">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Certified
                      </Badge>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="primary" size="sm">Expert Marksman</Badge>
                    <Badge variant="info" size="sm">Safety Officer</Badge>
                    <Badge variant="secondary" size="sm">Instructor</Badge>
                  </div>
                </div>
              </div>

              {/* Event Registration Example */}
              <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  Event Registration Status
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white">Monthly Competition</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">March 15, 2025</p>
                      </div>
                    </div>
                    <Badge variant="success" size="sm">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Registered
                    </Badge>
                  </div>
                  
                  <div className="flex items-center justify-between bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white">Spring Tournament</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">April 20, 2025</p>
                      </div>
                    </div>
                    <Badge variant="warning" size="sm">
                      <Clock className="w-3 h-3 mr-1" />
                      Pending
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Notification Example */}
              <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  Notification Badges
                </h3>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <button className="p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                      <Calendar className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                    </button>
                    <Badge variant="danger" size="sm" className="absolute -top-2 -right-2 min-w-[20px] h-5 rounded-full text-xs">
                      3
                    </Badge>
                  </div>
                  
                  <div className="relative">
                    <button className="p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                      <Trophy className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                    </button>
                    <Badge variant="gold" size="sm" className="absolute -top-2 -right-2 min-w-[20px] h-5 rounded-full text-xs">
                      1
                    </Badge>
                  </div>
                  
                  <div className="relative">
                    <button className="p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                      <Zap className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                    </button>
                    <Badge variant="primary" size="sm" className="absolute -top-2 -right-2 min-w-[20px] h-5 rounded-full text-xs">
                      5
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Guidelines */}
        <div className="mt-16">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-8">
            <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-6">
              Usage Guidelines
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Badge Meanings</h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li><strong>Gold:</strong> Highest achievements, championships</li>
                  <li><strong>Primary:</strong> Important status, expert level</li>
                  <li><strong>Success:</strong> Completed, certified, approved</li>
                  <li><strong>Info:</strong> General information, member status</li>
                  <li><strong>Warning:</strong> Pending, attention needed</li>
                  <li><strong>Danger:</strong> Issues, suspensions, alerts</li>
                  <li><strong>Secondary:</strong> Neutral status, guest access</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Best Practices</h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li>• Use consistent sizing within sections</li>
                  <li>• Add icons for better visual clarity</li>
                  <li>• Keep text concise and meaningful</li>
                  <li>• Use appropriate colors for context</li>
                  <li>• Consider accessibility and contrast</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Code Examples */}
        <div className="mt-16">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-8">
            <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-6">
              Implementation Examples
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <CodeSnippet
                title="Basic Badge"
                code={`import { Badge } from '@/components/ui/badge';

<Badge variant="primary">
  Member
</Badge>`}
              />
              <CodeSnippet
                title="Badge with Icon"
                code={`import { Trophy } from 'lucide-react';

<Badge variant="gold">
  <Trophy className="w-3 h-3 mr-1" />
  Champion
</Badge>`}
              />
              <CodeSnippet
                title="Notification Badge"
                code={`<div className="relative">
  <button>
    <Calendar className="w-5 h-5" />
  </button>
  <Badge 
    variant="danger" 
    size="sm"
    className="absolute -top-2 -right-2"
  >
    3
  </Badge>
</div>`}
              />
              <CodeSnippet
                title="Member Status"
                code={`<div className="flex gap-2">
  <Badge variant="gold">
    <Trophy className="w-3 h-3 mr-1" />
    Champion
  </Badge>
  <Badge variant="success">
    <CheckCircle className="w-3 h-3 mr-1" />
    Certified
  </Badge>
</div>`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 