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
  SheetDescription, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { 
  Menu, 
  X, 
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
  MapPin
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
  {
    title: 'About',
    children: [
      {
        title: 'Club Information',
        href: '/club-info',
        description: 'Learn about our history, facilities, and mission',
        icon: Target
      },
      {
        title: 'Facilities',
        href: '/facilities',
        description: 'Tour our world-class shooting ranges and amenities',
        icon: MapPin
      },
      {
        title: 'Safety Rules',
        href: '/rules',
        description: 'Essential safety guidelines for all members',
        icon: Shield
      },
      {
        title: 'Gallery',
        href: '/gallery',
        description: 'Photos from events and club activities',
        icon: Camera
      }
    ]
  },
  {
    title: 'Membership',
    children: [
      {
        title: 'Join Today',
        href: '/membership',
        description: 'Become a member and enjoy exclusive benefits',
        icon: Users,
        badge: 'Popular'
      },
      {
        title: 'Member Portal',
        href: '/portal',
        description: 'Access your account and member resources',
        icon: Star,
        external: true
      },
      {
        title: 'Benefits',
        href: '/membership/benefits',
        description: 'Explore all member perks and privileges',
        icon: Trophy
      }
    ]
  },
  {
    title: 'Events',
    children: [
      {
        title: 'Event Calendar',
        href: '/events',
        description: 'Upcoming competitions and club activities',
        icon: Calendar
      },
      {
        title: 'Weekly Schedule',
        href: '/schedule',
        description: 'Regular shooting schedules and league info',
        icon: BookOpen
      },
      {
        title: 'Tournaments',
        href: '/tournaments',
        description: 'Competitive events and championships',
        icon: Trophy,
        badge: 'New'
      }
    ]
  },
  {
    title: 'Contact',
    href: '/contact',
    icon: Phone
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
        variantClasses = 'bg-card/95 backdrop-blur-sm border-border/40';
        scrollClasses = isScrolled ? 'bg-card shadow-lg border-border' : '';
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
                    {item.children ? (
                      <>
                        <NavigationMenuTrigger className="font-heading font-medium text-card-foreground hover:text-accent-primary data-[state=open]:text-accent-primary">
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="grid w-[600px] gap-3 p-6">
                            <div className="grid grid-cols-2 gap-4">
                              {item.children.map((child, childIndex) => (
                                <Link
                                  key={childIndex}
                                  href={child.href!}
                                  className={cn(
                                    'group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-primary focus:bg-muted focus:text-accent-primary',
                                    isActive(child.href!) && 'bg-muted text-accent-primary'
                                  )}
                                  target={child.external ? '_blank' : undefined}
                                  rel={child.external ? 'noopener noreferrer' : undefined}
                                >
                                  <div className="flex items-center gap-2 mb-1">
                                    {child.icon && (
                                      <child.icon className="w-4 h-4 text-accent-primary" />
                                    )}
                                    <div className="text-sm font-medium leading-none font-heading">
                                      {child.title}
                                    </div>
                                    {child.badge && (
                                      <Badge variant="secondary" className="text-xs">
                                        {child.badge}
                                      </Badge>
                                    )}
                                    {child.external && (
                                      <ExternalLink className="w-3 h-3 text-muted-foreground" />
                                    )}
                                  </div>
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground font-body">
                                    {child.description}
                                  </p>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link
                        href={item.href!}
                        className={cn(
                          'font-heading font-medium text-card-foreground hover:text-accent-primary transition-colors px-3 py-2 rounded-md',
                          isActive(item.href!) && 'text-accent-primary bg-muted'
                        )}
                      >
                        {item.title}
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
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
                <SheetDescription className="text-left font-body">
                  Explore the Boise Gun Club
                </SheetDescription>
              </SheetHeader>
              
              <div className="mt-6 space-y-4">
                {navigationData.map((item, index) => (
                  <div key={index}>
                    {item.children ? (
                      <div className="space-y-2">
                        <div className="font-heading font-semibold text-card-foreground px-3 py-2">
                          {item.title}
                        </div>
                        <div className="space-y-1 ml-4">
                          {item.children.map((child, childIndex) => (
                            <Link
                              key={childIndex}
                              href={child.href!}
                              className={cn(
                                'flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors hover:bg-muted hover:text-accent-primary font-body',
                                isActive(child.href!) && 'bg-muted text-accent-primary'
                              )}
                              onClick={() => setIsMobileMenuOpen(false)}
                              target={child.external ? '_blank' : undefined}
                              rel={child.external ? 'noopener noreferrer' : undefined}
                            >
                              {child.icon && (
                                <child.icon className="w-4 h-4 text-accent-primary" />
                              )}
                              <span className="flex-1">{child.title}</span>
                              {child.badge && (
                                <Badge variant="secondary" className="text-xs">
                                  {child.badge}
                                </Badge>
                              )}
                              {child.external && (
                                <ExternalLink className="w-3 h-3 text-muted-foreground" />
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href!}
                        className={cn(
                          'flex items-center gap-3 px-3 py-2 rounded-md transition-colors hover:bg-muted hover:text-accent-primary font-heading font-medium',
                          isActive(item.href!) && 'bg-muted text-accent-primary'
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.icon && (
                          <item.icon className="w-4 h-4 text-accent-primary" />
                        )}
                        {item.title}
                      </Link>
                    )}
                  </div>
                ))}
                
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