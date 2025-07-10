'use client'

import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Shield,
  Eye,
  AlertTriangle,
  Target,
  Phone,
  Heart,
  CheckCircle,
  XCircle,
  Zap
} from 'lucide-react';
import { PageHero } from '@/components/ui/page-hero';
import { FeatureGrid } from '@/components/ui/feature-grid';

const coreRules = [
  {
    title: "Eye & Ear Protection Required",
    description: "Safety glasses and hearing protection are mandatory at all times on club grounds",
    icon: Eye,
  },
  {
    title: "Shotgun Ammunition Only", 
    description: "This is a shotgun-only facility. No rifle or pistol ammunition permitted under any circumstances",
    icon: Target,
  },
  {
    title: "Range Officer Authority",
    description: "Follow all range officer commands immediately and without question",
    icon: Shield,
  },
  {
    title: "Muzzle Control",
    description: "Always keep your firearm pointed in a safe direction - downrange or at the ground",
    icon: AlertTriangle,
  }
]

const safetyRules = [
  {
    category: "Firearm Safety",
    icon: Shield,
    rules: [
      "Always treat every firearm as if it were loaded",
      "Never point a firearm at anything you don't intend to destroy",
      "Keep your finger off the trigger until ready to shoot",
      "Be sure of your target and what's beyond it",
      "Action must remain open and unloaded until on the shooting station",
      "No handling of firearms behind the shooting line",
      "Only load when it's your turn to shoot",
      "Firearms must be unloaded when moving between stations"
    ]
  },
  // ... other rules ...
]

export default function RulesPage() {
  return (
    <main className="min-h-screen bg-bg-primary text-text-primary">
      
      <PageHero
        title="Safety First"
        subtitle="Club Rules & Regulations"
        description="Our comprehensive safety rules ensure everyone enjoys a safe, positive experience. These rules are strictly enforced for the protection of all members and guests."
        primaryAction={{ text: 'Read All Rules', onClick: () => document.getElementById('rules')?.scrollIntoView({ behavior: 'smooth' }) }}
        secondaryAction={{ text: 'Emergency Info', onClick: () => document.getElementById('emergency')?.scrollIntoView({ behavior: 'smooth' }) }}
        icon={Shield}
        backgroundPreset="gunclub"
        gradient="from-brand-red-action to-color-lahoma-orange"
      />

      <FeatureGrid
        title="Core Safety Rules"
        description="These fundamental rules are absolutely mandatory and strictly enforced. Violation of any core rule may result in immediate removal from the facility."
        features={coreRules}
        columns={2}
        cardVariant="glass"
        className="py-24 bg-bg-secondary"
      />

      <section id="rules" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading uppercase tracking-tight text-text-primary">
              Complete Safety <span className="text-accent-primary">Guidelines</span>
            </h2>
            <p className="text-xl text-text-secondary font-body font-light">
              Comprehensive rules covering all aspects of safe operation at our facility.
            </p>
          </div>

          <div className="space-y-12">
            {safetyRules.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border-b border-accent-primary/20">
                    <div className="flex items-center gap-4">
                      <category.icon className="w-8 h-8 text-accent-primary" />
                      <h3 className="text-2xl font-bold font-heading uppercase text-text-primary">
                        {category.category}
                      </h3>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      {category.rules.map((rule, ruleIndex) => (
                        <div key={ruleIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-accent-primary mt-0.5 flex-shrink-0" />
                          <span className="text-text-secondary font-body font-light leading-relaxed">
                            {rule}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
    </main>
  );
}
