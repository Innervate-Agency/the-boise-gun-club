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
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Input } from "@/components/ui/input";

export function SplashPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  // Bright fractal images for glows
  const brightFractals = [3, 7, 11, 15, 19, 23, 27, 31, 35, 39];
  const dustTextures = [1, 3, 5, 7, 9];

  const features = [
    { 
      icon: MapPin, 
      badgeTitle: "Regional Directory",
      title: "Find Local Experts", 
      desc: "Complete directory of gun shops, ranges, instructors, and gunsmiths across Treasure Valley",
      colorClass: "idaho-sky-blue",
      borderClass: "border-t-idaho-sky-blue border-b-idaho-sky-blue"
    },
    { 
      icon: Calendar, 
      badgeTitle: "Unified Event Calendar",
      title: "Never Miss Out", 
      desc: "All shooting events, competitions, and training from every club in the valley - including BGC, Capitol City, and more",
      colorClass: "wildeye-susan-yellow",
      borderClass: "border-t-wildeye-susan-yellow border-b-wildeye-susan-yellow"
    },
    { 
      icon: ShoppingBag, 
      badgeTitle: "Service Marketplace",
      title: "Book & Buy", 
      desc: "Training, gunsmithing, gear - book services and buy accessories all in one place",
      colorClass: "lahoma-orange",
      borderClass: "border-t-lahoma-orange border-b-lahoma-orange"
    },
    { 
      icon: MessageCircle, 
      badgeTitle: "Community Forum",
      title: "Connect & Share", 
      desc: "Discussion, tips, and classifieds - the social hub for Treasure Valley firearms",
      colorClass: "owyhee-field-green",
      borderClass: "border-t-owyhee-field-green border-b-owyhee-field-green"
    },
    { 
      icon: BookOpen, 
      badgeTitle: "Content & Knowledge",
      title: "Stay Informed", 
      desc: "Idaho gun laws, safety guides, reviews, and comprehensive firearms wiki",
      colorClass: "scoring-bench-red",
      borderClass: "border-t-scoring-bench-red border-b-scoring-bench-red"
    },
    { 
      icon: Building2, 
      badgeTitle: "Business Network",
      title: "Grow Your Business", 
      desc: "Professional services, industry connections, and marketing opportunities",
      colorClass: "gunclub-orange",
      borderClass: "border-t-gunclub-orange border-b-gunclub-orange"
    }
  ];

  return (
    <main className="min-h-screen overflow-hidden">
      <section ref={heroRef} className="relative min-h-screen">
        {/* Clean Background Base */}
        <div className="absolute inset-0 bg-cloudy-day-white dark:bg-kent-slate-gray" />

        {/* ClickUp-Style Organic Gradient Flow */}
        <div className="absolute inset-0">
          {/* Flowing gradient meshes like ClickUp */}
          <div 
            className="absolute inset-0 opacity-25 blur-2xl"
            style={{
              background: `
                radial-gradient(ellipse 1000px 400px at 30% 20%, var(--color-leonard-yellow) 0%, transparent 50%),
                radial-gradient(ellipse 800px 600px at 70% 60%, var(--color-lahoma-orange) 0%, transparent 60%),
                radial-gradient(ellipse 600px 800px at 20% 80%, var(--color-idaho-sky-blue) 0%, transparent 55%),
                radial-gradient(ellipse 1200px 300px at 80% 10%, var(--color-wildeye-susan-yellow) 0%, transparent 45%),
                radial-gradient(ellipse 500px 700px at 90% 70%, var(--color-owyhee-field-green) 0%, transparent 50%)
              `,
            }}
          />
          {/* Secondary flowing layer */}
          <div 
            className="absolute inset-0 opacity-15 blur-3xl"
            style={{
              background: `
                radial-gradient(ellipse 1200px 200px at 50% 30%, var(--color-sand-dune-brown) 0%, transparent 60%),
                radial-gradient(ellipse 300px 900px at 10% 50%, var(--color-leonard-yellow) 0%, transparent 40%),
                radial-gradient(ellipse 900px 400px at 60% 90%, var(--color-lahoma-orange) 0%, transparent 55%)
              `,
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
                  <span className="block text-craters-of-the-moon dark:text-chester-white font-black bg-gradient-to-r from-craters-of-the-moon via-craters-of-the-moon to-desert-cliff-brown bg-clip-text">THE BOISE</span>
                  <span className="block text-craters-of-the-moon dark:text-chester-white font-light bg-gradient-to-r from-craters-of-the-moon via-craters-of-the-moon to-desert-cliff-brown bg-clip-text">GUN CLUB</span>
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
                <motion.div
                  key={i}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + i * 0.1 }}
                >
                  <div className={`h-full group cursor-pointer mica-glass rounded-lg hover:scale-splash-102 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-black/20 border-t-4 border-b-0 group-hover:border-b-[8px] border-l-0 border-r-0 ${feature.borderClass} relative overflow-hidden`}>
                    <div className="absolute inset-0 mica-noise"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    <div className="p-8 h-full text-left relative z-10">
                      {/* Badge with icon and original title */}
                      <div className={`inline-flex items-center px-3 py-1 rounded-full bg-${feature.colorClass}/10 border border-${feature.colorClass}/20 mb-4`}>
                        <feature.icon className={`w-4 h-4 text-${feature.colorClass} mr-2`} />
                        <span className={`text-sm font-heading font-medium text-${feature.colorClass}`}>
                          {feature.badgeTitle}
                        </span>
                      </div>
                      
                      {/* New Stripe-style title */}
                      <h3 className="text-3xl font-heading font-bold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-muted-foreground font-sans text-lg leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

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