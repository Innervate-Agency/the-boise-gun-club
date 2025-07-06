'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbHeroProps {
  breadcrumbs: BreadcrumbItem[];
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  gradient: string;
  badges?: string[];
  backLink?: {
    href: string;
    label: string;
  };
}

export function BreadcrumbHero({
  breadcrumbs,
  title,
  description,
  icon: IconComponent,
  gradient,
  badges = [],
  backLink
}: BreadcrumbHeroProps) {
  return (
    <div className={`relative overflow-hidden ${gradient}`} style={{ height: '300px' }}>
      <div className="absolute inset-0 bg-black/10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 h-full flex flex-col justify-center">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-4 mb-6">
          {backLink && (
            <Button asChild variant="ghost" className="text-white hover:bg-white/10">
              <Link href={backLink.href} className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                {backLink.label}
              </Link>
            </Button>
          )}
          
          {breadcrumbs.length > 0 && (
            <nav className="flex items-center space-x-2 text-white/80">
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={crumb.href}>
                  {index > 0 && <ChevronRight className="h-4 w-4" />}
                  <Link 
                    href={crumb.href}
                    className="hover:text-white transition-colors font-body text-sm"
                  >
                    {crumb.label}
                  </Link>
                </React.Fragment>
              ))}
              <ChevronRight className="h-4 w-4" />
              <span className="text-white font-body text-sm">{title}</span>
            </nav>
          )}
        </div>
        
        {/* Title and Icon */}
        <div className="flex items-center gap-6 mb-6">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
            <IconComponent className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-heading font-black text-white mb-2">
              {title}
            </h1>
            <p className="text-xl text-white/90 font-body font-light">
              {description}
            </p>
          </div>
        </div>
        
        {/* Badges */}
        {badges.length > 0 && (
          <div className="flex items-center gap-4">
            {badges.map((badge, index) => (
              <Badge key={index} className="bg-white/20 text-white border border-white/30">
                {badge}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}