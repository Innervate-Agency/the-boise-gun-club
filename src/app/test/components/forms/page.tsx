'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText, Search, Filter, Shield, User, Mail, Phone, Calendar, MapPin, Target, Lock, AlertCircle, CheckCircle, Eye, EyeOff } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { BreadcrumbHero } from '@/components/ui/breadcrumb-hero';

export default function FormsPage() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <BreadcrumbHero
        breadcrumbs={[
          { label: 'Components', href: '/test/components' }
        ]}
        title="Form Components"
        description="Complete form system with validation, auto-completion and smart interactions"
        icon={FileText}
        gradient="bg-gradient-to-r from-blue-500 to-blue-600"
        badges={['8 Components', 'Production Ready']}
        backLink={{
          href: '/test/components',
          label: 'Back to Components'
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-600 p-8">
            <h2 className="text-2xl font-heading font-bold text-text-primary mb-6 flex items-center gap-3">
              <Target className="w-6 h-6 text-orange-500" />
              Membership Registration
            </h2>
            <form className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-text-primary">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name <span className="text-red-500">*</span></Label>
                    <Input id="first-name" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name <span className="text-red-500">*</span></Label>
                    <Input id="last-name" placeholder="Smith" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email-form">Email *</Label>
                  <Input type="email" id="email-form" placeholder="john.smith@email.com" required />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-text-primary">Account Security</h3>
                <div className="space-y-2">
                  <Label htmlFor="password">Password <span className="text-red-500">*</span></Label>
                  <Input type="password" id="password" placeholder="Minimum 8 characters" required />
                </div>
              </div>
              <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                <Shield className="w-5 h-5" />
                Submit Registration
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}