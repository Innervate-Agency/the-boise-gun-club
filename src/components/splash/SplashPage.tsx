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
      desc: "Gun shops, ranges, instructors across Treasure Valley",
      colorClass: "idaho-sky-blue",
      borderClass: "border-t-idaho-sky-blue border-b-idaho-sky-blue"
    },
    { 
      icon: ShoppingBag, 
      badgeTitle: "Service Marketplace",
      title: "Book & Buy", 
      desc: "Training, gunsmithing, gear - all in one place",
      colorClass: "lahoma-orange",
      borderClass: "border-t-lahoma-orange border-b-lahoma-orange"
    },
    { 
      icon: MessageCircle, 
      badgeTitle: "Community Forum",
      title: "Connect & Share", 
      desc: "Connect with enthusiasts, share knowledge",
      colorClass: "owyhee-field-green",
      borderClass: "border-t-owyhee-field-green border-b-owyhee-field-green"
    },
    { 
      icon: Calendar, 
      badgeTitle: "Event Hub",
      title: "Never Miss Out", 
      desc: "Competitions, training, club meetings - unified calendar",
      colorClass: "wildeye-susan-yellow",
      borderClass: "border-t-wildeye-susan-yellow border-b-wildeye-susan-yellow"
    },
    { 
      icon: BookOpen, 
      badgeTitle: "Resource Center",
      title: "Stay Informed", 
      desc: "Idaho gun laws, safety guides, educational content",
      colorClass: "scoring-bench-red",
      borderClass: "border-t-scoring-bench-red border-b-scoring-bench-red"
    },
    { 
      icon: Building2, 
      badgeTitle: "Business Network",
      title: "Grow Your Business", 
      desc: "Professional services and industry connections",
      colorClass: "gunclub-orange",
      borderClass: "border-t-gunclub-orange border-b-gunclub-orange"
    }
  ];

  return (
    <main className="min-h-screen overflow-hidden">
      <section ref={heroRef} className="relative min-h-screen">
        {/* Theme-Aware Background Layers */}
        <div className="absolute inset-0">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-cloudy-day-white dark:bg-kent-slate-gray" />
          
          {/* ClickUp-Style Color Splashes */}
          <div className="absolute inset-0 bg-clickup-splash-composite opacity-60" />
          
          {/* 45-degree geometric overlay */}
          <div className="absolute inset-0 opacity-15 bg-gradient-to-br from-lahoma-orange/10 via-transparent via-leonard-yellow/5 to-idaho-sky-blue/8" />
          
          {/* Angled grid pattern */}
          <div className="absolute inset-0 opacity-10 bg-[url('/images/Grid/Grid_(1).webp')] bg-splash-grid bg-repeat rotate-splash-45 scale-splash-150" />
        </div>

        {/* Blurred Fractal Glows - ClickUp Style */}
        {brightFractals.slice(0, 6).map((fractalNum, i) => (
          <motion.div
            key={`fractal-${fractalNum}`}
            className={`absolute rounded-full opacity-20 
              bg-[url('/images/Fractal/${fractalNum}.webp')] bg-cover bg-center
              ${i === 0 ? 'w-splash-glow-1 h-splash-glow-1 left-[10%] top-[10%]' : ''}
              ${i === 1 ? 'w-splash-glow-2 h-splash-glow-2 left-[25%] top-[22%]' : ''}
              ${i === 2 ? 'w-splash-glow-3 h-splash-glow-3 left-[40%] top-[34%]' : ''}
              ${i === 3 ? 'w-splash-glow-4 h-splash-glow-4 left-[55%] top-[46%]' : ''}
              ${i === 4 ? 'w-splash-glow-5 h-splash-glow-5 left-[70%] top-[58%]' : ''}
              ${i === 5 ? 'w-splash-glow-6 h-splash-glow-6 left-[85%] top-[70%]' : ''}
              blur-splash saturate-150`}
            animate={{
              scale: [0.8, 1.2, 0.8],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
          />
        ))}

        {/* Windows 11 Mica Noise Texture */}
        {dustTextures.map((dustNum, i) => (
          <div
            key={`dust-${dustNum}`}
            className={`absolute inset-0 opacity-10 mix-blend-soft-light 
              bg-[url('/images/Dust/VintageDust_(${dustNum}).webp')] bg-splash-dust bg-repeat
              ${i === 0 ? 'rotate-0 scale-100' : ''}
              ${i === 1 ? 'rotate-splash-15 scale-splash-110' : ''}
              ${i === 2 ? 'rotate-splash-30 scale-splash-120' : ''}
              ${i === 3 ? 'rotate-splash-45 scale-splash-130' : ''}
              ${i === 4 ? 'rotate-splash-60 scale-splash-140' : ''}`}
          />
        ))}


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
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading uppercase tracking-tight leading-[0.85]">
                  <span className="block text-craters-of-the-moon dark:text-chester-white font-bold">THE BOISE</span>
                  <span className="block text-craters-of-the-moon dark:text-chester-white font-light">GUN CLUB</span>
                </h1>
              </motion.div>

              {/* Subtitle - Regional Collective */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="mb-6"
              >
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading text-leonard-yellow mb-2">
                  A TREASURE VALLEY FIREARM
                </h2>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading text-lahoma-orange">
                  & FIREARM SPORT COLLECTIVE
                </h2>
              </motion.div>

              {/* Description */}
              <motion.p 
                className="text-lg md:text-xl lg:text-2xl text-desert-cliff-brown dark:text-don-gray mb-12 max-w-5xl mx-auto font-sans leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                The comprehensive digital hub for Treasure Valley's firearms community. 
                Connecting gun shops, ranges, instructors, and enthusiasts across Idaho's premier region.
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
                  <div className={`h-full group cursor-pointer bg-white dark:bg-card/95 backdrop-blur-sm border border-border/50 rounded-lg hover:scale-splash-102 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-black/20 border-t-2 border-b-0 group-hover:border-b-[5px] border-l-0 border-r-0 ${feature.borderClass} relative overflow-hidden`}>
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
                    We're building a digital ecosystem that connects gun shops, firearm clubs, certified instructors, 
                    gunsmiths, and enthusiasts across Idaho's premier region.
                  </p>
                  <p className="text-desert-cliff-brown dark:text-don-gray font-sans text-base leading-relaxed">
                    Our platform will feature a complete business directory, unified event calendar, community forum, 
                    service marketplace, and educational resource center. From finding local gunsmithing services to 
                    booking private instruction, from accessing Idaho gun law guides to coordinating community events — 
                    we're creating the central hub for everything firearms-related in Treasure Valley.
                  </p>
                  <p className="text-desert-cliff-brown dark:text-don-gray font-sans text-base leading-relaxed">
                    This isn't just a website; it's a digital collective bringing together the entire regional firearms 
                    community under one professional, accessible platform. Built by firearms enthusiasts, for firearms enthusiasts.
                  </p>
                </div>
              </motion.div>

              {/* Right Column - Launch Notification Signup */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2.2 }}
              >
                <Card className="glass-medium h-fit">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <Mail className="w-6 h-6 text-leonard-yellow mr-3" />
                      <h3 className="text-xl font-heading font-semibold text-craters-of-the-moon dark:text-chester-white">
                        Get Notified When We Launch
                      </h3>
                    </div>
                    
                    <p className="text-desert-cliff-brown dark:text-don-gray font-sans mb-6 text-sm leading-relaxed">
                      Be the first to know when the Treasure Valley's premier firearms community platform goes live.
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
                    Professional development by Innervate Agency. Domain established 2017.
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