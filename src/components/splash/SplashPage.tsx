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
          "A searchable database of every gun-related business and service in the region, from FFLs and shooting ranges to gunsmiths and training instructors.",
          "Integrated service booking system allowing users to book and pay for gunsmithing, training classes, and other services directly through the platform.",
          "Aggregated accessory store - a unified e-commerce storefront for non-firearm items where local shops can list inventory, creating a local 'Amazon for gun stuff.'"
        ],
        features: ["Gun Shops & FFLs", "Shooting Ranges", "Gunsmiths & Services", "Training & Instruction", "Appraisal Services", "Service Booking System"]
      }
    },
    { 
      icon: Calendar, 
      badgeTitle: "Unified Events",
      title: "Never Miss Out", 
      desc: "All shooting events, competitions, and training from every club in the valley",
      colorClass: "wildeye-susan-yellow",
      detailedContent: {
        title: "Unified Event Calendar",
        subtitle: "Every firearms event in Treasure Valley, all in one place",
        content: [
          "Aggregated calendar pulling events from all local clubs and ranges - gun shows, competitions, training classes, and community events.",
          "Never miss a BGC trap shoot, Capitol City competition, or any other regional firearms event.",
          "Integrated with the content engine to drive massive organic traffic and establish authority in the local firearms community."
        ],
        features: ["All Club Events", "Competitions", "Training Classes", "Gun Shows", "Community Events", "Automatic Updates"]
      }
    },
    { 
      icon: ShoppingBag, 
      badgeTitle: "Service Marketplace",
      title: "Book & Buy", 
      desc: "Training, gunsmithing, gear - book services and buy accessories in one place",
      colorClass: "lahoma-orange",
      detailedContent: {
        title: "Integrated Service Marketplace",
        subtitle: "Book services and purchase accessories through one platform",
        content: [
          "Seamless booking system for gunsmithing, Cerakote applications, training classes, and other professional services.",
          "5-10% commission on all services booked through the platform, creating sustainable revenue while connecting customers with providers.",
          "Direct integration with local businesses, helping them grow while building our community ecosystem."
        ],
        features: ["Service Booking", "Payment Processing", "Commission System", "Business Integration", "Customer Reviews", "Scheduling Management"]
      }
    },
    { 
      icon: MessageCircle, 
      badgeTitle: "Community Forum",
      title: "Connect & Share", 
      desc: "Discussion, tips, and classifieds - the social hub for Treasure Valley",
      colorClass: "owyhee-field-green",
      detailedContent: {
        title: "Pillar 3: Community Forum",
        subtitle: "The social backbone that keeps users coming back",
        content: [
          "Dedicated sections for general discussion, Idaho gun laws, and competition shooting across all firearm sports.",
          "Gear & accessories classifieds for non-firearm items - optics, accessories, and gear trading without legal complications.",
          "Heavily moderated, family-friendly environment focused on education, safety, and community building."
        ],
        features: ["General Discussion", "Idaho Gun Laws", "Competition Shooting", "Gear Classifieds", "Tips & Advice", "Moderated Environment"]
      }
    },
    { 
      icon: BookOpen, 
      badgeTitle: "Content Engine",
      title: "Stay Informed", 
      desc: "Idaho gun laws, safety guides, reviews, and comprehensive firearms wiki",
      colorClass: "scoring-bench-red",
      detailedContent: {
        title: "Pillar 2: Content Engine & SEO",
        subtitle: "Authority-building content that drives massive organic traffic",
        content: [
          "The Gun Wiki - a user-editable but heavily moderated encyclopedia of firearms, optics, and gear, optimized for search.",
          "High-quality blog featuring articles, reviews of local shops/ranges, interviews with local smiths, and comprehensive Idaho gun law guides.",
          "Content strategy designed to dominate local search and establish The Boise Gun Club as the definitive firearms authority in Idaho."
        ],
        features: ["Gun Wiki", "Blog & Articles", "Local Reviews", "Idaho Gun Laws", "SEO Optimization", "Expert Interviews"]
      }
    },
    { 
      icon: Building2, 
      badgeTitle: "Brand & Apparel",
      title: "Build The Brand", 
      desc: "High-quality apparel and merchandise that people actually want to wear",
      colorClass: "gunclub-orange",
      detailedContent: {
        title: "Pillar 4: Brand & Apparel Line",
        subtitle: "Building brand recognition through quality merchandise",
        content: [
          "Print-on-Demand apparel line using services like Printful - zero inventory risk, only produce what sells.",
          "High-quality, well-designed apparel that people actually want to wear, building brand recognition throughout the community.",
          "Direct-to-consumer revenue stream while promoting The Boise Gun Club brand at ranges, events, and throughout Treasure Valley."
        ],
        features: ["Print-on-Demand", "Quality Designs", "Zero Inventory Risk", "Brand Building", "Direct Sales", "Community Presence"]
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
                Featuring every club's events, all regional businesses, and connecting enthusiasts, families, and professionals across Idaho's premier firearms region.
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
                        onClick={() => setSelectedFeature(i)}
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
                <DialogContent size="lg" className="max-w-4xl bg-dialog-light backdrop-blur-xl border border-leonard-yellow/20 shadow-2xl">
                  <DialogTitle className="sr-only">{features[selectedFeature].detailedContent.title}</DialogTitle>
                  <div className="p-6">
                    {/* Header */}
                    <div className="text-center mb-8">
                      <div className="flex justify-center mb-4">
                        <div className="p-4 rounded-full bg-gradient-to-r from-leonard-yellow/20 to-lahoma-orange/20 border border-leonard-yellow/30">
                          {React.createElement(features[selectedFeature].icon, { className: "w-8 h-8 text-leonard-yellow" })}
                        </div>
                      </div>
                      <h2 className="text-4xl font-heading font-bold text-craters-of-the-moon dark:text-chester-white mb-3">
                        {features[selectedFeature].detailedContent.title}
                      </h2>
                      <p className="text-xl text-desert-cliff-brown dark:text-don-gray font-sans">
                        {features[selectedFeature].detailedContent.subtitle}
                      </p>
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
                            <div className="w-2 h-2 bg-leonard-yellow rounded-full"></div>
                            <span className="text-desert-cliff-brown dark:text-don-gray font-sans">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Close Button */}
                    <div className="flex justify-center mt-8">
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
                <DialogContent variant="glass" size="lg" className="max-w-4xl">
                  <DialogTitle className="sr-only">Connect with The Boise Gun Club</DialogTitle>
                  <ContactForm 
                    title="Connect with The Boise Gun Club"
                    subtitle="Questions? Partnerships? Let's Talk"
                    description="Whether you're interested in joining our regional firearms community, exploring partnership opportunities, or have questions about our upcoming platform, we'd love to hear from you."
                    variant="minimal"
                    showContactInfo={false}
                    formType="contact"
                  />
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
                    The Boise Gun Club is transforming into Treasure Valley's first comprehensive firearms community platform. 
                    We're building a digital ecosystem that connects gun shops, ALL local firearm clubs, certified instructors, 
                    gunsmiths, and enthusiasts across Idaho's premier region.
                  </p>
                  <p className="text-desert-cliff-brown dark:text-don-gray font-sans text-base leading-relaxed">
                    Our platform will feature every club's events in one unified calendar - from BGC trap shoots to Capitol City competitions. 
                    Complete business directory, community forum, service marketplace, and educational resource center. 
                    From finding local gunsmithing services to booking NRA-certified instruction, from accessing Idaho gun law guides to coordinating community events.
                  </p>
                  <p className="text-desert-cliff-brown dark:text-don-gray font-sans text-base leading-relaxed">
                    This isn't just a website; it's a digital collective bringing together families, professionals, and enthusiasts 
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
                      Be the first to know when Idaho's premier firearms community platform goes live. Get early access to the comprehensive directory, unified event calendar, and marketplace.
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
                    Professional development by Innervate Agency. Proudly serving Idaho's firearms community.
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