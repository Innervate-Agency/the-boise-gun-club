'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface NavItem {
  label: string;
  href: string;
  active?: boolean;
  icon?: React.ReactNode;
}

interface NavigationFusionProps {
  items: NavItem[];
  className?: string;
  variant?: 'glass' | 'solid' | 'minimal';
  orientation?: 'horizontal' | 'vertical';
}

export function NavigationFusion({ 
  items, 
  className, 
  variant = 'glass',
  orientation = 'horizontal' 
}: NavigationFusionProps) {
  const baseClasses = orientation === 'horizontal' 
    ? 'flex items-center space-x-1'
    : 'flex flex-col space-y-1';

  const variantClasses = {
    glass: 'glass-premium p-2 rounded-xl',
    solid: 'bg-white dark:bg-secondary shadow-lg p-2 rounded-xl',
    minimal: 'p-1'
  };

  return (
    <nav className={cn(baseClasses, variantClasses[variant], className)}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            'flex items-center gap-2 px-4 py-2 rounded-lg font-body text-sm transition-all duration-200',
            'hover:bg-white/20 hover:backdrop-blur-sm',
            item.active 
              ? 'bg-lahoma-orange text-white shadow-lg' 
              : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
          )}
        >
          {item.icon}
          {item.label}
        </Link>
      ))}
    </nav>
  );
}