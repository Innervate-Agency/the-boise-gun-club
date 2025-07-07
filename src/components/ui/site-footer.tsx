'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram, 
  Youtube,
  Twitter,
  Target,
  Trophy,
  Users,
  Calendar,
  Shield,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

interface FooterLink {
  title: string;
  href: string;
  external?: boolean;
  badge?: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: 'About Club',
    links: [
      { title: 'Club Information', href: '/club-info' },
      { title: 'Our History', href: '/history' },
      { title: 'Facilities Tour', href: '/facilities' },
      { title: 'Safety Rules', href: '/rules' },
      { title: 'Photo Gallery', href: '/gallery' }
    ]
  },
  {
    title: 'Membership',
    links: [
      { title: 'Join Today', href: '/membership', badge: 'Popular' },
      { title: 'Member Benefits', href: '/membership/benefits' },
      { title: 'Member Portal', href: '/portal', external: true },
      { title: 'Pricing Plans', href: '/membership/pricing' },
      { title: 'Application', href: '/membership/apply' }
    ]
  },
  {
    title: 'Events & Training',
    links: [
      { title: 'Event Calendar', href: '/events' },
      { title: 'Weekly Schedule', href: '/schedule' },
      { title: 'Tournaments', href: '/tournaments', badge: 'New' },
      { title: 'Safety Courses', href: '/training/safety' },
      { title: 'Private Lessons', href: '/training/lessons' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { title: 'Contact Us', href: '/contact' },
      { title: 'FAQ', href: '/faq' },
      { title: 'Weather Policy', href: '/weather' },
      { title: 'Range Rules', href: '/range-rules' },
      { title: 'Equipment Rental', href: '/equipment' }
    ]
  }
];

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '(208) 362-8686',
    href: 'tel:+12083628686'
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@boisegunclub.com',
    href: 'mailto:info@boisegunclub.com'
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '13570 W Flamingo Rd, Boise, ID 83713',
    href: 'https://maps.google.com/?q=13570+W+Flamingo+Rd,+Boise,+ID+83713'
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon-Sat: 9AM-7PM, Sun: 10AM-5PM',
    href: '/hours'
  }
];

const socialLinks = [
  {
    name: 'Facebook',
    icon: Facebook,
    href: 'https://facebook.com/boisegunclub',
    color: 'hover:text-blue-600'
  },
  {
    name: 'Instagram',
    icon: Instagram,
    href: 'https://instagram.com/boisegunclub',
    color: 'hover:text-pink-600'
  },
  {
    name: 'YouTube',
    icon: Youtube,
    href: 'https://youtube.com/@boisegunclub',
    color: 'hover:text-red-600'
  },
  {
    name: 'Twitter',
    icon: Twitter,
    href: 'https://twitter.com/boisegunclub',
    color: 'hover:text-blue-400'
  }
];

interface SiteFooterProps {
  variant?: 'default' | 'glass' | 'minimal';
  showNewsletter?: boolean;
  showSocial?: boolean;
  className?: string;
}

export function SiteFooter({
  variant = 'default',
  showNewsletter = true,
  showSocial = true,
  className
}: SiteFooterProps) {
  const getFooterClassName = () => {
    switch (variant) {
      case 'glass':
        return 'bg-black/80 backdrop-blur-md text-white';
      case 'minimal':
        return 'bg-muted/50 border-t';
      default:
        return 'bg-card border-t border-border';
    }
  };

  return (
    <footer className={cn(getFooterClassName(), 'mt-auto', className)}>
      {/* Newsletter Section */}
      {showNewsletter && (
        <div className="border-b border-border/40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-4xl mx-auto text-center">
              <Target className="w-12 h-12 text-accent-primary mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-card-foreground mb-4">
                Stay in the Loop
              </h3>
              <p className="text-lg text-muted-foreground font-body mb-8 max-w-2xl mx-auto">
                Get the latest news on events, competitions, and club updates delivered to your inbox.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                  required
                />
                <Button 
                  type="submit"
                  className="bg-accent-primary hover:bg-accent-secondary text-white font-heading font-semibold"
                >
                  Subscribe
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
              
              <p className="text-xs text-muted-foreground mt-4 font-body">
                No spam, unsubscribe at any time. Read our{' '}
                <Link href="/privacy" className="text-accent-primary hover:text-accent-secondary underline">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Club Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <Image
                src="/images/bgcv3-shattered-clay.svg"
                alt="Boise Gun Club"
                width={48}
                height={48}
                className="h-12 w-12 group-hover:scale-110 transition-transform duration-300"
              />
              <div>
                <div className="font-heading font-bold text-xl text-card-foreground">
                  BOISE GUN CLUB
                </div>
                <div className="text-sm text-muted-foreground font-body">
                  Excellence Since 1898
                </div>
              </div>
            </Link>
            
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              Idaho's premier shotgun sports complex, offering world-class facilities, 
              expert instruction, and a welcoming community for shooters of all skill levels.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center gap-3 text-sm hover:text-accent-primary transition-colors group"
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <info.icon className="w-4 h-4 text-accent-primary group-hover:scale-110 transition-transform" />
                  <span className="font-body text-muted-foreground group-hover:text-card-foreground">
                    {info.value}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="lg:col-span-1">
              <h4 className="font-heading font-semibold text-card-foreground mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-accent-primary transition-colors font-body flex items-center gap-2 group"
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                    >
                      <span className="group-hover:translate-x-1 transition-transform">
                        {link.title}
                      </span>
                      {link.badge && (
                        <Badge variant="secondary" className="text-xs">
                          {link.badge}
                        </Badge>
                      )}
                      {link.external && (
                        <ExternalLink className="w-3 h-3" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground font-body">
              © {new Date().getFullYear()} Boise Gun Club. All rights reserved.
            </div>

            {/* Social Links */}
            {showSocial && (
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground font-body hidden sm:block">
                  Follow us:
                </span>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        'p-2 rounded-full bg-muted hover:bg-muted/80 text-muted-foreground transition-all duration-300 hover:scale-110',
                        social.color
                      )}
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Legal Links */}
            <div className="flex items-center gap-4 text-sm">
              <Link 
                href="/privacy" 
                className="text-muted-foreground hover:text-accent-primary transition-colors font-body"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="text-muted-foreground hover:text-accent-primary transition-colors font-body"
              >
                Terms of Service
              </Link>
              <Link 
                href="/sitemap" 
                className="text-muted-foreground hover:text-accent-primary transition-colors font-body"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}