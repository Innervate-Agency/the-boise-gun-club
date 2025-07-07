'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { 
  Menu, 
  Target, 
  Trophy, 
  Users, 
  Calendar, 
  BookOpen, 
  Phone, 
  ChevronDown,
  ExternalLink,
  Star,
  Shield,
  Camera,
  MapPin,
  Newspaper
} from 'lucide-react';

interface NavigationItem {
  title: string;
  href?: string;
  description?: string;
  icon?: React.ComponentType<any>;
  badge?: string;
  external?: boolean;
  children?: NavigationItem[];
}

const navigationData: NavigationItem[] = [
  { title: 'Home', href: '/' },
  { title: 'Club Info', href: '/club-info' },
  { title: 'Membership', href: '/membership' },
  { title: 'Events', href: '/events' },
  { title: 'News', href: '/news' },
  { title: 'Forums', href: 'https://forums.boisegunclub.com', external: true },
];

const megaMenuItems: NavigationItem[] = [
    {
      title: 'Club Schedule',
      icon: Calendar,
      children: [
        { label: 'Weekly Shoot Schedule', href: '/schedule/weekly', description: 'Regular shooting hours and events' },
        { label: 'Competition Calendar', href: '/schedule/competitions', description: 'Upcoming tournaments and matches' },
        { label: 'Training Sessions', href: '/schedule/training', description: 'Instructor-led courses' },
        { label: 'Range Reservations', href: '/schedule/reservations', description: 'Book your shooting time' }
      ]
    },
    {
      title: 'Member Services',
      icon: Users,
      children: [
        { label: 'Member Portal', href: '/admin', description: 'Access your account' },
        { label: 'Payment Center', href: '/members/billing', description: 'Dues and fee payments' },
        { label: 'Member Directory', href: '/members/directory', description: 'Connect with fellow members' },
        { label: 'Volunteer Opportunities', href: '/members/volunteer', description: 'Help support the club' }
      ]
    },
    {
      title: 'Safety & Operations',
      icon: Shield,
      children: [
        { label: 'Rules & Safety', href: '/rules', description: 'Safety and facility guidelines' },
        { label: 'Emergency Info', href: '/emergency', description: 'Important contact numbers' },
        { label: 'Weather Conditions', href: '/weather', description: 'Current shooting conditions' },
        { label: 'Range Status', href: '/ranges/status', description: 'Real-time availability' }
      ]
    }
];

interface SiteNavigationProps {
  variant?: 'default' | 'glass' | 'solid';
  showLogo?: boolean;
  fixed?: boolean;
  className?: string;
}

export function SiteNavigation({
  variant = 'default',
  showLogo = true,
  fixed = true,
  className
}: SiteNavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getNavClassName = () => {
    const baseClasses = 'w-full border-b transition-all duration-300 z-50';
    const positionClasses = fixed ? 'fixed top-0' : 'relative';
    
    let variantClasses = '';
    let scrollClasses = '';

    switch (variant) {
      case 'glass':
        variantClasses = 'bg-white/10 backdrop-blur-md border-white/20';
        scrollClasses = isScrolled ? 'bg-white/20 shadow-lg' : '';
        break;
      case 'solid':
        variantClasses = 'bg-card border-border';
        scrollClasses = isScrolled ? 'shadow-lg' : '';
        break;
      default:
        variantClasses = 'bg-card/80 dark:bg-card/80 backdrop-blur-sm border-border/40';
        scrollClasses = isScrolled ? 'bg-card/95 shadow-lg border-border' : '';
        break;
    }

    return cn(baseClasses, positionClasses, variantClasses, scrollClasses);
  };

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav className={cn(getNavClassName(), className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          {showLogo && (
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/images/bgcv3-shattered-clay.svg"
                alt="Boise Gun Club"
                width={40}
                height={40}
                className="h-8 w-8 lg:h-10 lg:w-10 group-hover:scale-110 transition-transform duration-300"
              />
              <div className="hidden sm:block">
                <div className="font-heading font-bold text-lg lg:text-xl text-card-foreground">
                  BOISE GUN CLUB
                </div>
                <div className="text-xs text-muted-foreground font-body">
                  Est. 1898
                </div>
              </div>
            </Link>
          )}

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <NavigationMenu>
              <NavigationMenuList className="gap-6">
                {navigationData.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <Link
                      href={item.href!}
                      className={cn(
                        'font-heading font-medium text-card-foreground hover:text-accent-primary transition-colors px-3 py-2 rounded-md',
                        isActive(item.href!) && 'text-accent-primary bg-muted'
                      )}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                    >
                      {item.title}
                    </Link>
                  </NavigationMenuItem>
                ))}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-heading font-medium text-card-foreground hover:text-accent-primary data-[state=open]:text-accent-primary">
                    Club Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[600px] gap-3 p-6 grid-cols-3">
                      {megaMenuItems.map((section, sectionIndex) => (
                        <div key={sectionIndex}>
                          <h3 className="font-heading font-semibold text-card-foreground mb-3 flex items-center gap-2">
                            <section.icon className="w-4 h-4 text-accent-primary" />
                            {section.title}
                          </h3>
                          <div className="space-y-1">
                            {section.children?.map((child, childIndex) => (
                              <Link
                                key={childIndex}
                                href={child.href!}
                                className="block p-2 rounded-md hover:bg-muted"
                              >
                                <div className="text-sm font-medium text-card-foreground">{child.label}</div>
                                <p className="text-xs text-muted-foreground">{child.description}</p>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* CTA Button */}
            <Button 
              asChild
              className="bg-accent-primary hover:bg-accent-secondary text-white font-heading font-semibold"
            >
              <Link href="/membership">
                Join Today
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden p-2"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-left font-heading">
                  Navigation
                </SheetTitle>
              </SheetHeader>
              
              <div className="mt-6 space-y-4">
                {navigationData.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href!}
                    className={cn(
                      'block px-3 py-2 rounded-md text-lg font-medium',
                      isActive(item.href!) ? 'bg-muted text-accent-primary' : 'text-card-foreground hover:bg-muted'
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                  >
                    {item.title}
                  </Link>
                ))}
                <div className="pt-4 border-t">
                  <h3 className="px-3 py-2 font-heading font-semibold">Club Services</h3>
                  {megaMenuItems.map((section) => (
                    <div key={section.title} className="ml-4 mt-2 space-y-1">
                      {section.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href!}
                          className="block p-2 rounded-md hover:bg-muted text-sm"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="pt-4 mt-6 border-t">
                  <Button 
                    asChild
                    className="w-full bg-accent-primary hover:bg-accent-secondary text-white font-heading font-semibold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link href="/membership">
                      Join Today
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}