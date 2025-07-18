'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Trophy, Target, Star, ArrowRight, MapPin, Users, Calendar, 
  ShoppingBag, MessageCircle, BookOpen, Building2, Shield, Mail, Send, Phone
} from 'lucide-react';
import { ContactForm } from '@/components/ui/contact-form';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog';
import { Input } from "@/components/ui/input";

export function SplashPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);

  // Bright fractal images for glows
  const brightFractals = [3, 7, 11, 15, 19, 23, 27, 31, 35, 39];
  const dustTextures = [1, 3, 5, 7, 9];

  const features = [
    { 
      icon: MapPin, 
      badgeTitle: "Directory & Marketplace",
      title: "Find Local Experts", 
      desc: "Complete directory of gun shops, ranges, instructors, and gunsmiths across Treasure Valley",
      colorClass: "idaho-sky-blue",
      detailedContent: {
        title: "Pillar 1: Directory & Marketplace",
        subtitle: "The comprehensive hub for every firearms business in Treasure Valley",
        content: [
          "Find trusted local gun shops, shooting ranges, certified instructors, and skilled gunsmiths all in one convenient searchable directory.",
          "Read reviews and ratings from fellow community members to make informed decisions about where to shop and train.",
          "Access detailed business profiles with services offered, hours, contact information, and specialties to find exactly what you need."
        ],
        features: ["Local Gun Shops", "Shooting Ranges", "Certified Instructors", "Gunsmith Services", "Equipment Appraisals", "Customer Reviews"]
      }
    },
    { 
      icon: Calendar, 
      badgeTitle: "Unified Events",
      title: "Never Miss Out", 
      desc: "All shooting events, competitions, and training from every club in the valley",
      colorClass: "wildeye-susan-yellow",
      detailedContent: {
        title: "Pillar 2: Unified Event Calendar",
        subtitle: "Every firearms event in Treasure Valley, all in one place",
        content: [
          "Stay up-to-date with all shooting events, competitions, and training opportunities from every club and range in Treasure Valley.",
          "Get event notifications, RSVP to competitions, and add events directly to your personal calendar.",
          "Access detailed event information including schedules, registration requirements, and contact details in one convenient location."
        ],
        features: ["Competition Calendar", "Training Schedules", "Gun Shows", "Club Events", "Event Notifications", "Easy Registration"]
      }
    },
    { 
      icon: ShoppingBag, 
      badgeTitle: "Service Marketplace",
      title: "Book & Buy", 
      desc: "Training, gunsmithing, gear - book services and buy accessories in one place",
      colorClass: "lahoma-orange",
      detailedContent: {
        title: "Pillar 3: Integrated Service Marketplace",
        subtitle: "Book services and purchase accessories through one platform",
        content: [
          "Book appointments with trusted local gunsmiths, Cerakote specialists, and certified training instructors with just a few clicks.",
          "Browse and purchase accessories, optics, and gear from local shops with convenient online ordering and pickup options.",
          "Access verified professionals with transparent pricing, availability, and customer reviews to make confident service decisions."
        ],
        features: ["Easy Booking", "Secure Payments", "Verified Professionals", "Online Shopping", "Customer Reviews", "Appointment Scheduling"]
      }
    },
    { 
      icon: MessageCircle, 
      badgeTitle: "Community Forum",
      title: "Connect & Share", 
      desc: "Discussion, tips, and classifieds - the social hub for Treasure Valley",
      colorClass: "owyhee-field-green",
      detailedContent: {
        title: "Pillar 4: Community Forum",
        subtitle: "The social backbone that keeps users coming back",
        content: [
          "Connect with fellow shooting enthusiasts, share experiences, and get advice from knowledgeable community members.",
          "Buy, sell, and trade optics, accessories, and gear with trusted local community members in a safe, moderated environment.",
          "Access dedicated discussion areas for different shooting sports, safety topics, and general firearms conversation."
        ],
        features: ["Community Discussion", "Safety Forums", "Competition Talk", "Gear Trading", "Expert Advice", "Family-Friendly"]
      }
    },
    { 
      icon: BookOpen, 
      badgeTitle: "Content Engine",
      title: "Stay Informed", 
      desc: "Idaho gun laws, safety guides, reviews, and comprehensive firearms wiki",
      colorClass: "scoring-bench-red",
      detailedContent: {
        title: "Pillar 5: Content Engine & SEO",
        subtitle: "Authority-building content that drives massive organic traffic",
        content: [
          "Access comprehensive, up-to-date information about Idaho gun laws, safety regulations, and legal requirements for responsible ownership.",
          "Read detailed reviews of local shops, ranges, and services written by fellow community members with real experiences.",
          "Learn from expert articles covering firearm safety, maintenance tips, competition techniques, and local shooting sports."
        ],
        features: ["Idaho Gun Laws", "Safety Guides", "Local Reviews", "Expert Articles", "Maintenance Tips", "Competition Guides"]
      }
    },
    { 
      icon: Building2, 
      badgeTitle: "Brand & Apparel",
      title: "Build The Brand", 
      desc: "High-quality apparel and merchandise that people actually want to wear",
      colorClass: "gunclub-orange",
      detailedContent: {
        title: "Pillar 6: Brand & Apparel Line",
        subtitle: "Building brand recognition through quality merchandise",
        content: [
          "Show your pride in Treasure Valley's firearms community with high-quality apparel and accessories designed by local enthusiasts.",
          "Choose from a variety of styles including t-shirts, hoodies, hats, and accessories featuring Idaho-inspired designs and club logos.",
          "Support the local firearms community while representing your passion for shooting sports with gear that's built to last."
        ],
        features: ["Quality Apparel", "Idaho Designs", "Club Merchandise", "Online Shopping", "Local Pride", "Durable Materials"]
      }
    }
  ];

  return (
    <main className="min-h-screen overflow-hidden">
      <section ref={heroRef} className="relative min-h-screen">
        {/* Clean Background Base */}
        <div className="absolute inset-0 bg-cloudy-day-white dark:bg-kent-slate-gray" />

        {/* ClickUp-Style Organic Gradient Flow */}
        <div className="absolute inset-0">
          {/* Flowing gradient meshes like ClickUp - Light Mode */}
          <div 
            className="absolute inset-0 opacity-5 blur-2xl dark:opacity-10 dark:hidden"
            style={{
              background: `var(--splash-gradient-light)`,
            }}
          />
          {/* Flowing gradient meshes like ClickUp - Dark Mode */}
          <div 
            className="absolute inset-0 opacity-5 blur-2xl dark:opacity-10 hidden dark:block"
            style={{
              background: `var(--splash-gradient-dark)`,
            }}
          />
          {/* Secondary flowing layer - Light Mode */}
          <div 
            className="absolute inset-0 opacity-5 blur-3xl dark:opacity-10 dark:hidden"
            style={{
              background: `var(--splash-gradient-secondary-light)`,
            }}
          />
          {/* Secondary flowing layer - Dark Mode */}
          <div 
            className="absolute inset-0 opacity-5 blur-3xl dark:opacity-10 hidden dark:block"
            style={{
              background: `var(--splash-gradient-secondary-dark)`,
            }}
          />
        </div>


        {/* Hero Content */}
        <div className="relative z-20 min-h-screen flex items-center justify-center px-6 pt-36">
          <div className="text-center max-w-7xl mx-auto">
            {/* Coming Soon Badge */}
            <motion.div
              className="flex justify-center mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="premium" className="text-base px-6 py-2 bg-gradient-premium shadow-premium border border-leonard-yellow/20">
                Launching August 1st, 2025
              </Badge>
            </motion.div>

            {/* Main Title */}
            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              {/* Clean Title - No Logo */}
              <motion.div 
                className="text-center mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <h1 className="text-7xl md:text-8xl lg:text-9xl font-heading uppercase tracking-tight leading-[0.8] drop-shadow-lg">
                  <span className="block font-black text-gradient-heading">THE BOISE</span>
                  <span className="block font-light text-gradient-heading">GUN CLUB</span>
                </h1>
              </motion.div>

              {/* Subtitle - Regional Collective */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="mb-6"
              >
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading text-leonard-yellow">
                  A TREASURE VALLEY FIREARM & FIREARM SPORT COLLECTIVE
                </h2>
              </motion.div>

              {/* Description */}
              <motion.p 
                className="text-lg md:text-xl lg:text-2xl text-desert-cliff-brown dark:text-don-gray mb-12 max-w-5xl mx-auto font-sans leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                The comprehensive digital hub uniting ALL Treasure Valley firearms communities. 
                Featuring every club&apos;s events, all regional businesses, and connecting enthusiasts, families, and professionals across Idaho&apos;s premier firearms region.
              </motion.p>
            </motion.div>


            {/* Feature Grid - Stripe Style */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.0 }}
            >
              {features.map((feature, i) => (
                <Card 
                  key={i}
                  className="group cursor-pointer transition-stripe-fast relative overflow-hidden shadow-card-default hover:shadow-card-hover hover:-translate-y-2 border-t-4"
                  variant="default"
                  interactive={true}
                  animate={true}
                  onClick={() => setSelectedFeature(i)}
                  style={{ 
                    borderTopColor: `var(--color-${feature.colorClass})`
                  }}>
                    <div className="absolute inset-0 mica-noise opacity-20"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-stripe-fast pointer-events-none"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-stripe-fast pointer-events-none"></div>
                    <CardContent className="p-4 text-left relative z-10">
                      {/* Badge with icon and original title */}
                      <div className="inline-flex items-center px-4 py-2 rounded-full border mb-6 backdrop-blur-sm"
                           style={{ 
                             backgroundColor: `color-mix(in srgb, var(--color-${feature.colorClass}) 12%, transparent)`,
                             borderColor: `color-mix(in srgb, var(--color-${feature.colorClass}) 25%, transparent)`
                           }}>
                        <feature.icon className="w-4 h-4 mr-2" style={{ color: `var(--color-${feature.colorClass})` }} />
                        <span className="text-sm font-heading font-semibold" style={{ color: `var(--color-${feature.colorClass})` }}>
                          {feature.badgeTitle}
                        </span>
                      </div>
                      
                      {/* New Stripe-style title */}
                      <h3 className="text-3xl font-heading font-bold text-craters-of-the-moon dark:text-chester-white mb-3 tracking-tight">
                        {feature.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-desert-cliff-brown dark:text-don-gray font-sans text-lg leading-relaxed opacity-90 mb-4">
                        {feature.desc}
                      </p>
                      
                      {/* Learn More Button */}
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="mt-auto transition-stripe-fast hover:bg-white/50 dark:hover:bg-ed-charcoal/50"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedFeature(i);
                        }}
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
              ))}
            </motion.div>

            {/* Feature Detail Dialog */}
            {selectedFeature !== null && (
              <Dialog open={selectedFeature !== null} onOpenChange={() => setSelectedFeature(null)}>
                <DialogContent size="lg" className="max-w-4xl backdrop-blur-xl border shadow-2xl !fixed !top-1/2 !left-1/2 !-translate-x-1/2 !-translate-y-1/2 !z-50" style={{
                  backgroundColor: `color-mix(in srgb, var(--color-${features[selectedFeature].colorClass}) 6%, rgba(248, 246, 241, 0.75))`,
                  borderColor: `color-mix(in srgb, var(--color-${features[selectedFeature].colorClass}) 20%, transparent)`
                }}>
                  <DialogTitle className="sr-only">{features[selectedFeature].detailedContent.title}</DialogTitle>
                  
                  {/* Color-matched background gradient */}
                  <div className="absolute inset-0 opacity-15 pointer-events-none" style={{
                    background: `radial-gradient(circle at 30% 20%, color-mix(in srgb, var(--color-${features[selectedFeature].colorClass}) 12%, transparent) 0%, transparent 50%)`
                  }}></div>
                  
                  <div className="p-6 relative z-10">
                    {/* Header */}
                    <div className="text-left mb-8">
                      <div className="flex items-start mb-4">
                        <div className="p-4 rounded-full border mr-4" style={{
                          backgroundColor: `color-mix(in srgb, var(--color-${features[selectedFeature].colorClass}) 12%, transparent)`,
                          borderColor: `color-mix(in srgb, var(--color-${features[selectedFeature].colorClass}) 25%, transparent)`
                        }}>
                          {React.createElement(features[selectedFeature].icon, { 
                            className: "w-8 h-8", 
                            style: { color: `var(--color-${features[selectedFeature].colorClass})` }
                          })}
                        </div>
                        <div>
                          <h2 className="text-4xl font-heading font-bold text-craters-of-the-moon dark:text-chester-white mb-3">
                            {features[selectedFeature].detailedContent.title}
                          </h2>
                          <p className="text-xl text-desert-cliff-brown dark:text-don-gray font-sans">
                            {features[selectedFeature].detailedContent.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                      {features[selectedFeature].detailedContent.content.map((paragraph, idx) => (
                        <p key={idx} className="text-lg text-desert-cliff-brown dark:text-don-gray font-sans leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {/* Features List */}
                    <div className="mt-8">
                      <h3 className="text-2xl font-heading font-semibold text-craters-of-the-moon dark:text-chester-white mb-4">
                        Key Features
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {features[selectedFeature].detailedContent.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 rounded-full" style={{
                              backgroundColor: `var(--color-${features[selectedFeature].colorClass})`
                            }}></div>
                            <span className="text-desert-cliff-brown dark:text-don-gray font-sans">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Close Button */}
                    <div className="flex justify-start mt-8">
                      <Button 
                        variant="premium" 
                        onClick={() => setSelectedFeature(null)}
                        className="px-8 py-3"
                      >
                        Got It
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            )}

            {/* Contact CTA Section */}
            <motion.div 
              className="flex justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.8 }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      variant="premium"
                      size="lg" 
                      className="px-8 py-4 text-lg font-heading font-semibold"
                    >
                      <Phone className="mr-3 h-5 w-5" />
                      Get In Touch
                      <ArrowRight className="ml-3 h-5 w-5" />
                    </Button>
                  </motion.div>
                </DialogTrigger>
                <DialogContent size="lg" className="max-w-4xl backdrop-blur-xl border shadow-2xl !fixed !top-1/2 !left-1/2 !-translate-x-1/2 !-translate-y-1/2 !z-50" style={{
                  backgroundColor: `color-mix(in srgb, var(--color-leonard-yellow) 6%, rgba(248, 246, 241, 0.75))`,
                  borderColor: `color-mix(in srgb, var(--color-leonard-yellow) 20%, transparent)`
                }}>
                  <DialogTitle className="sr-only">Connect with The Boise Gun Club</DialogTitle>
                  
                  {/* Color-matched background gradient for Leonard Yellow */}
                  <div className="absolute inset-0 opacity-15 pointer-events-none" style={{
                    background: `radial-gradient(circle at 30% 20%, color-mix(in srgb, var(--color-leonard-yellow) 12%, transparent) 0%, transparent 50%)`
                  }}></div>
                  
                  <div className="[&_[data-slot=card]]:bg-transparent [&_[data-slot=card]]:border-0 [&_[data-slot=card]]:shadow-none relative z-10">
                    <ContactForm 
                      title="Connect with The Boise Gun Club"
                      subtitle="Questions? Partnerships? Let's Talk"
                      description="Whether you're interested in joining our regional firearms community, exploring partnership opportunities, or have questions about our upcoming platform, we'd love to hear from you."
                      variant="minimal"
                      showContactInfo={false}
                      formType="contact"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>


          </div>
        </div>

        {/* Professional Footer */}
        <footer className="relative z-20 mt-24 border-t border-leonard-yellow/10 bg-pure-white/5 dark:bg-ed-charcoal/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-12">
            
            {/* Two Column Layout: Vision + Contact Form */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              {/* Left Column - Project Vision */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2.0 }}
              >
                <h4 className="font-heading font-semibold text-craters-of-the-moon dark:text-chester-white mb-6 text-2xl">
                  The Vision
                </h4>
                <div className="space-y-4">
                  <p className="text-desert-cliff-brown dark:text-don-gray font-sans text-base leading-relaxed">
                    The Boise Gun Club is transforming into Treasure Valley&apos;s first comprehensive firearms community platform. 
                    We&apos;re building a digital ecosystem that connects gun shops, ALL local firearm clubs, certified instructors, 
                    gunsmiths, and enthusiasts across Idaho&apos;s premier region.
                  </p>
                  <p className="text-desert-cliff-brown dark:text-don-gray font-sans text-base leading-relaxed">
                    Our platform will feature every club&apos;s events in one unified calendar - from BGC trap shoots to Capitol City competitions. 
                    Complete business directory, community forum, service marketplace, and educational resource center. 
                    From finding local gunsmithing services to booking NRA-certified instruction, from accessing Idaho gun law guides to coordinating community events.
                  </p>
                  <p className="text-desert-cliff-brown dark:text-don-gray font-sans text-base leading-relaxed">
                    This isn&apos;t just a website; it&apos;s a digital collective bringing together families, professionals, and enthusiasts 
                    from every firearms community in Treasure Valley. Built with safety-first principles and family-friendly values.
                  </p>
                </div>
              </motion.div>

              {/* Right Column - Launch Notification Signup */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2.2 }}
              >
                <Card className="mica-glass h-fit relative overflow-hidden">
                  <div className="absolute inset-0 mica-noise"></div>
                  <CardContent className="p-8 relative z-10">
                    <div className="flex items-center mb-4">
                      <Mail className="w-6 h-6 text-leonard-yellow mr-3" />
                      <h3 className="text-xl font-heading font-semibold text-craters-of-the-moon dark:text-chester-white">
                        Get Notified When We Launch
                      </h3>
                    </div>
                    
                    <p className="text-desert-cliff-brown dark:text-don-gray font-sans mb-6 text-sm leading-relaxed">
                      Be the first to know when Idaho&apos;s premier firearms community platform goes live. Get early access to the comprehensive directory, unified event calendar, and marketplace.
                    </p>
                    
                    <form className="space-y-4">
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        className="w-full px-4 py-3 rounded-lg bg-pure-white/10 border border-leonard-yellow/20 text-craters-of-the-moon dark:text-chester-white placeholder:text-desert-cliff-brown/70 dark:placeholder:text-don-gray/70 font-sans focus:outline-none focus:ring-2 focus:ring-leonard-yellow/50 focus:border-leonard-yellow/30"
                        required
                      />
                      <Button variant="premium" className="w-full px-6 py-3 font-heading font-semibold">
                        <Send className="w-4 h-4 mr-2" />
                        Notify Me
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
            
            {/* Bottom Row - Branding and Copyright */}
            <div className="pt-8 border-t border-leonard-yellow/10 flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Left side - Brand name */}
              <div className="flex items-center gap-4">
                <h5 className="text-lg font-heading font-bold text-craters-of-the-moon dark:text-chester-white">
                  THE BOISE GUN CLUB
                </h5>
                <div className="flex items-center gap-2 text-desert-cliff-brown dark:text-don-gray font-sans text-xs">
                  <Shield className="w-4 h-4" />
                  <span>
                    Professional development by Innervate Agency. Proudly serving Idaho&apos;s firearms community.
                  </span>
                </div>
              </div>
              {/* Right side - Copyright */}
              <p className="text-desert-cliff-brown dark:text-don-gray font-sans text-xs">
                © 2025 Innervate Agency. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
}