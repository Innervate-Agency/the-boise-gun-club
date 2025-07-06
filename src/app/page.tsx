'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Camera, Trophy, Users, Clock, MapPin, Calendar, Target, Star, ArrowRight, Play } from 'lucide-react';

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Mouse tracking for cursor glow effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove);
      return () => hero.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const titleY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  // Bright fractal images for glows (avoiding muddy ones)
  const brightFractals = [3, 7, 11, 15, 19, 23, 27, 31, 35, 39];
  const dustTextures = [1, 3, 5, 7, 9];

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      {/* Homepage Hero - RAZZLE DAZZLE EDITION */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden">
        {/* Theme-Aware Background Layers */}
        <div className="absolute inset-0">
          {/* Base gradient - theme aware */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-primary)] via-[var(--bg-secondary)] to-[var(--bg-tertiary)]" />
          
          {/* 45-degree geometric overlay */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              background: `linear-gradient(45deg, 
                rgba(242, 135, 5, 0.1) 0%, 
                transparent 25%, 
                rgba(242, 203, 5, 0.05) 50%, 
                transparent 75%, 
                rgba(73, 130, 166, 0.08) 100%)`
            }}
          />
          
          {/* Angled grid pattern */}
          <div 
            className="absolute inset-0 opacity-3"
            style={{
              backgroundImage: `url('/images/Grid/Grid (1).webp')`,
              backgroundSize: '400px 400px',
              transform: 'rotate(45deg) scale(1.5)',
              backgroundRepeat: 'repeat'
            }}
          />
        </div>

        {/* Blurred Fractal Glows - ClickUp Style */}
        {brightFractals.slice(0, 6).map((fractalNum, i) => (
          <motion.div
            key={`fractal-${fractalNum}`}
            className="absolute rounded-full blur-3xl opacity-20"
            style={{
              width: `${300 + i * 50}px`,
              height: `${300 + i * 50}px`,
              left: `${10 + i * 15}%`,
              top: `${10 + i * 12}%`,
              backgroundImage: `url('/images/Fractal/${fractalNum}.webp')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(60px) saturate(1.5)',
            }}
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
            className="absolute inset-0 opacity-10 mix-blend-soft-light"
            style={{
              backgroundImage: `url('/images/Dust/VintageDust (${dustNum}).webp')`,
              backgroundSize: '800px 800px',
              backgroundRepeat: 'repeat',
              transform: `rotate(${i * 15}deg) scale(${1 + i * 0.1})`,
            }}
          />
        ))}

        {/* Interactive Mouse Cursor Glow */}
        <motion.div
          className="absolute pointer-events-none rounded-full"
          style={{
            width: '400px',
            height: '400px',
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)',
            background: `radial-gradient(circle, 
              rgba(242, 135, 5, 0.15) 0%, 
              rgba(242, 203, 5, 0.08) 30%, 
              transparent 70%)`
          }}
          animate={{
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Subtle Static Particles */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 rounded-full"
              style={{
                backgroundColor: [
                  '#F2CB05', '#F28705', '#F25C05', '#F23005', 
                  '#4982A6', '#3F6331', '#C9D2EF'
                ][i % 7],
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                opacity: 0.3,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 6 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-20 min-h-screen flex items-center justify-center px-6">
          <motion.div 
            className="text-center max-w-7xl mx-auto"
            style={{ opacity, y: titleY }}
          >
            {/* Original Hero Text */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              {/* Welcome Text */}
              <motion.p 
                className="text-xl md:text-2xl text-[var(--text-primary)] mb-6 font-['Rajdhani'] uppercase tracking-wider font-medium"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1 }}
              >
                Welcome to the
              </motion.p>

              {/* Club Name with SVG */}
              <div className="flex items-center justify-center gap-6 mb-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  <Image
                    src="/images/bgcv3-shattered-clay.svg"
                    alt="Shattered Clay Logo"
                    width={120}
                    height={120}
                    className="h-[80px] w-[80px] md:h-[120px] md:w-[120px] object-contain drop-shadow-lg"
                  />
                </motion.div>
                
                <motion.div 
                  className="text-left"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-['Rajdhani'] uppercase tracking-tight leading-none">
                    <span className="block text-[var(--text-primary)] font-extrabold">BOISE</span>
                    <span className="block text-[var(--text-primary)] font-light">GUN CLUB</span>
                  </h1>
                </motion.div>
              </div>

              {/* Description */}
              <motion.p 
                className="text-lg md:text-xl lg:text-2xl text-[var(--text-secondary)] mb-16 max-w-4xl mx-auto font-['Noto Sans'] font-light leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                Founded in 1898, we are the premier shotgun sports complex in the beautiful state of Idaho. 
                Experience world-class trap, skeet, and sporting clays at our 320-acre facility overlooking the Treasure Valley.
              </motion.p>
            </motion.div>

            {/* CTA Buttons with Glassmorphism */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  asChild
                  size="lg" 
                  className="relative overflow-hidden bg-gradient-to-r from-[#F28705] via-[#F25C05] to-[#F23005] hover:from-[#F23005] hover:to-[#F28705] text-white px-12 py-6 text-xl font-bold rounded-2xl transition-all duration-500 border-0"
                  style={{
                    boxShadow: '0 0 40px rgba(242,135,5,0.4), 0 20px 40px rgba(0,0,0,0.2)',
                  }}
                >
                  <Link href="/membership" className="flex items-center relative z-10">
                    <Trophy className="mr-3 h-6 w-6" />
                    Join The Elite
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  asChild
                  variant="outline" 
                  size="lg"
                  className="relative backdrop-blur-xl bg-white/5 border-2 border-white/15 hover:bg-white/8 text-[var(--text-primary)] px-12 py-6 text-xl font-bold rounded-2xl transition-all duration-500"
                  style={{
                    boxShadow: '0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.15)',
                  }}
                >
                  <Link href="/club-info" className="flex items-center relative z-10">
                    <Play className="mr-3 h-6 w-6" />
                    Virtual Tour
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Feature Cards with True Glassmorphism */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              {[
                { icon: Target, title: "World-Class Ranges", desc: "30 championship-grade fields", color: "#F28705", fractal: 11 },
                { icon: Star, title: "Family Community", desc: "Welcome all skill levels", color: "#F2CB05", fractal: 19 },
                { icon: Trophy, title: "125+ Years Excellence", desc: "Proven tradition", color: "#4982A6", fractal: 27 }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="relative overflow-hidden backdrop-blur-xl bg-transparent border border-white/8 group cursor-pointer h-full">
                    {/* Blurred fractal background */}
                    <div 
                      className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                      style={{
                        backgroundImage: `url('/images/Fractal/${feature.fractal}.webp')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'blur(40px) saturate(1.5)',
                      }}
                    />
                    
                    {/* Mica dust texture */}
                    <div 
                      className="absolute inset-0 opacity-25 mix-blend-soft-light"
                      style={{
                        backgroundImage: `url('/images/Dust/VintageDust (${(i % 3) + 2}).webp')`,
                        backgroundSize: '300px 300px',
                      }}
                    />
                    
                    {/* Glass effect */}
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(135deg, 
                          rgba(255, 255, 255, 0.08), 
                          rgba(255, 255, 255, 0.04))`,
                        boxShadow: `0 8px 32px rgba(0, 0, 0, 0.15), 
                                   inset 0 1px 0 rgba(255, 255, 255, 0.1)`
                      }}
                    />

                    <CardContent className="p-10 text-center relative z-10">
                      <div 
                        className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500"
                        style={{
                          background: `linear-gradient(135deg, ${feature.color}, ${feature.color}88)`,
                          boxShadow: `0 0 30px ${feature.color}40`
                        }}
                      >
                        <feature.icon className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3 font-['Rajdhani'] uppercase">
                        {feature.title}
                      </h3>
                      <p className="text-[var(--text-secondary)] font-['Noto Sans']">
                        {feature.desc}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          style={{ opacity }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center text-[var(--text-secondary)]">
            <span className="text-sm mb-2 font-['Noto Sans']">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-[var(--text-secondary)] rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-[var(--text-secondary)] rounded-full mt-2"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Photo Submission Incentive - Replace Gallery */}
      <section className="py-24 bg-[var(--bg-secondary)] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-[var(--accent-primary)]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-[var(--accent-secondary)]/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-primary)] font-['Rajdhani'] uppercase tracking-tight">
              Share Your Shot,<br />
              <span className="text-[var(--accent-primary)]">Become Our Hero!</span>
            </h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto font-['Noto Sans'] font-light">
              Submit your best shooting photos and we'll feature them as the hero image on our homepage! 
              Every month, we showcase a different member's photo as the first thing visitors see.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center group hover:scale-105 transition-all duration-300 bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)] border-0 shadow-xl hover:shadow-2xl">
              <CardContent className="p-8">
                <div className="relative">
                  <Camera className="w-12 h-12 text-[var(--accent-primary)] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-[var(--accent-primary)]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-['Rajdhani'] uppercase tracking-wide">Hero Homepage Feature</h3>
                <p className="text-[var(--text-secondary)] font-['Noto Sans'] font-light leading-relaxed">Monthly rotation of member photos as our main hero image</p>
              </CardContent>
            </Card>
            <Card className="text-center group hover:scale-105 transition-all duration-300 bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)] border-0 shadow-xl hover:shadow-2xl">
              <CardContent className="p-8">
                <div className="relative">
                  <Trophy className="w-12 h-12 text-[var(--accent-primary)] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-[var(--accent-primary)]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-['Rajdhani'] uppercase">Photo Contest Prizes</h3>
                <p className="text-[var(--text-secondary)] font-['Noto Sans']">Quarterly competitions with range time and gear prizes</p>
              </CardContent>
            </Card>
            <Card className="text-center group hover:scale-105 transition-all duration-300 bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)] border-0 shadow-xl hover:shadow-2xl">
              <CardContent className="p-8">
                <div className="relative">
                  <Users className="w-12 h-12 text-[var(--accent-primary)] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-[var(--accent-primary)]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-['Rajdhani'] uppercase">Member Spotlight</h3>
                <p className="text-[var(--text-secondary)] font-['Noto Sans']">Photo + story featured in newsletter and social media</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <Button asChild size="lg" className="bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] text-white px-8">
              <Link href="/photo-submission">Submit Your Photos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Membership CTA - Clean and Simple */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Join the Club
              </h2>
              <p className="text-xl text-[var(--text-secondary)] mb-8">
                $75 annual membership gives you access to reduced shooting fees, priority registration, 
                and a welcoming community of fellow shooting sports enthusiasts.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Badge className="bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]">$6/round</Badge>
                  <span>Member rate vs $8 daily rate</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className="bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]">Priority</Badge>
                  <span>Competition registration</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className="bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]">Community</Badge>
                  <span>Access to member events and forums</span>
                </div>
              </div>
              <Button asChild size="lg" className="bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] text-white">
                <Link href="/membership">Join Today</Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/images/membership.webp"
                width={600}
                height={400}
                className="rounded-xl"
                alt="Club Membership"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-primary)] font-['Rajdhani'] uppercase tracking-tight">
              Upcoming <span className="text-[var(--accent-primary)]">Events</span>
            </h2>
            <p className="text-xl text-[var(--text-secondary)] font-['Noto Sans'] font-light">
              From competitive shoots to casual fun days, there's always action at the club.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:scale-105 transition-all duration-500 bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)] border-0 shadow-xl hover:shadow-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="p-6 relative z-10">
                <Badge className="mb-3 bg-[var(--brand-red-action)]/10 text-[var(--brand-red-action)] border border-[var(--brand-red-action)]/20 group-hover:bg-[var(--brand-red-action)]/20 transition-colors duration-300">Competition</Badge>
                <h3 className="text-xl font-bold mb-3 font-['Rajdhani'] uppercase">Winter Turkey Shoot Classic</h3>
                <p className="text-[var(--text-secondary)] mb-4 font-['Noto Sans']">Traditional turkey shoot competition. Best score takes home the bird.</p>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)] mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>December 15th</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <Users className="w-4 h-4" />
                  <span>85 attending</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <Badge className="mb-3 bg-[var(--accent-tertiary)]/10 text-[var(--accent-tertiary)] border border-[var(--accent-tertiary)]/20 group-hover:bg-[var(--accent-tertiary)]/20 transition-colors duration-300">Fun Shoot</Badge>
                <h3 className="text-xl font-bold mb-3 font-['Rajdhani'] uppercase">Members-Only Poker Shoot</h3>
                <p className="text-[var(--text-secondary)] mb-4 font-['Noto Sans']">Five stands, five cards. Best poker hand wins the pot.</p>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)] mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>December 22nd</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <Users className="w-4 h-4" />
                  <span>60 attending</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <Badge className="mb-3 bg-[var(--brand-blue)]/10 text-[var(--brand-blue)] border border-[var(--brand-blue)]/20 group-hover:bg-[var(--brand-blue)]/20 transition-colors duration-300">Training</Badge>
                <h3 className="text-xl font-bold mb-3 font-['Rajdhani'] uppercase">Introduction to Trap Clinic</h3>
                <p className="text-[var(--text-secondary)] mb-4 font-['Noto Sans']">New to trap shooting? Learn the basics from certified instructors.</p>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)] mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>January 12th</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <Users className="w-4 h-4" />
                  <span>25 attending</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/events">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-primary)] font-['Rajdhani'] uppercase tracking-tight">
              Shooting <span className="text-[var(--accent-primary)]">Rates</span>
            </h2>
            <p className="text-xl text-[var(--text-secondary)] font-['Noto Sans'] font-light">
              Fair pricing for world-class facilities and instruction.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card className="relative">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 font-['Rajdhani'] uppercase">Daily Rate</h3>
                <div className="text-5xl font-bold text-[var(--accent-primary)] mb-4">$8</div>
                <p className="text-[var(--text-secondary)] mb-6">per round</p>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[var(--accent-primary)] rounded-full"></div>
                    <span>Access to all ranges</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[var(--accent-primary)] rounded-full"></div>
                    <span>Equipment rental available</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[var(--accent-primary)] rounded-full"></div>
                    <span>Guest privileges</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="relative border-2 border-[var(--accent-primary)]">
              <CardContent className="p-8 text-center">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[var(--accent-primary)] text-white">Popular</Badge>
                <h3 className="text-2xl font-bold mb-4 font-['Rajdhani'] uppercase">Member Rate</h3>
                <div className="text-5xl font-bold text-[var(--accent-primary)] mb-4">$6</div>
                <p className="text-[var(--text-secondary)] mb-6">per round + $75 annual fee</p>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[var(--accent-primary)] rounded-full"></div>
                    <span>$2 savings per round</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[var(--accent-primary)] rounded-full"></div>
                    <span>Priority competition registration</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[var(--accent-primary)] rounded-full"></div>
                    <span>Member events access</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[var(--accent-primary)] rounded-full"></div>
                    <span>Clubhouse privileges</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Member Testimonial */}
      <section className="py-24 bg-[var(--bg-secondary)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-[var(--text-primary)] font-['Rajdhani'] uppercase tracking-tight">
            Member <span className="text-[var(--accent-primary)]">Spotlight</span>
          </h2>
          
          <Card>
            <CardContent className="p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <Image
                  src="/images/membership.webp"
                  width={150}
                  height={150}
                  className="rounded-full"
                  alt="Jane Doe"
                />
                <div className="text-left">
                  <blockquote className="text-2xl font-light italic text-[var(--text-primary)] mb-6 font-['Noto Sans']">
                    "The Boise Gun Club is my second family. I have grown so much as a shooter and a person here. The welcoming community and excellent facilities make this the best place to enjoy shotgun sports."
                  </blockquote>
                  <div>
                    <p className="font-bold text-lg font-['Rajdhani'] uppercase">Jane Doe</p>
                    <p className="text-[var(--text-secondary)] font-['Noto Sans']">Member since 2015</p>
                    <div className="flex gap-2 mt-2">
                      <Badge>State Champion 2022</Badge>
                      <Badge>100 Straight Patch</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Club Rules Preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-['Rajdhani'] uppercase tracking-tight">
                Safety <span className="text-[var(--accent-primary)]">First</span>
              </h2>
              <p className="text-xl text-[var(--text-secondary)] mb-8 font-['Noto Sans'] font-light">
                Our comprehensive safety rules ensure everyone has a safe, enjoyable experience. We maintain the highest standards for shotgun sports.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--accent-primary)] flex items-center justify-center text-white text-sm font-bold mt-1">1</div>
                  <div>
                    <h4 className="font-bold font-['Rajdhani'] uppercase">Eye & Ear Protection Required</h4>
                    <p className="text-[var(--text-secondary)] font-['Noto Sans']">Safety glasses and hearing protection mandatory at all times</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--accent-primary)] flex items-center justify-center text-white text-sm font-bold mt-1">2</div>
                  <div>
                    <h4 className="font-bold font-['Rajdhani'] uppercase">Shotgun Ammunition Only</h4>
                    <p className="text-[var(--text-secondary)] font-['Noto Sans']">This is a shotgun-only facility - no rifle or pistol ammunition</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--accent-primary)] flex items-center justify-center text-white text-sm font-bold mt-1">3</div>
                  <div>
                    <h4 className="font-bold font-['Rajdhani'] uppercase">Range Officer Authority</h4>
                    <p className="text-[var(--text-secondary)] font-['Noto Sans']">Follow all range officer commands immediately</p>
                  </div>
                </div>
              </div>
              
              <Button asChild variant="outline" size="lg">
                <Link href="/rules">View All Safety Rules</Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/images/training.webp"
                width={600}
                height={400}
                className="rounded-xl"
                alt="Safety Training"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Map */}
      <section className="py-24 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-primary)] font-['Rajdhani'] uppercase tracking-tight">
              Get In <span className="text-[var(--accent-primary)]">Touch</span>
            </h2>
            <p className="text-xl text-[var(--text-secondary)] font-['Noto Sans'] font-light">
              Visit us at Idaho's premier shotgun sports facility.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <Clock className="w-8 h-8 text-[var(--accent-primary)] mb-4" />
                  <h3 className="text-xl font-bold mb-3 font-['Rajdhani'] uppercase">Range Hours</h3>
                  <div className="space-y-2 text-[var(--text-secondary)] font-['Noto Sans']">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday - Sunday: 8:00 AM - 8:00 PM</p>
                    <p>Closed major holidays</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <MapPin className="w-8 h-8 text-[var(--accent-primary)] mb-4" />
                  <h3 className="text-xl font-bold mb-3 font-['Rajdhani'] uppercase">Location</h3>
                  <div className="space-y-2 text-[var(--text-secondary)] font-['Noto Sans']">
                    <p>123 Gun Club Road</p>
                    <p>Boise, ID 83702</p>
                    <p>20 minutes from downtown Boise</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 font-['Rajdhani'] uppercase">Contact Info</h3>
                  <div className="space-y-2 text-[var(--text-secondary)] font-['Noto Sans']">
                    <p>Phone: (208) 555-0123</p>
                    <p>Email: info@boisegunclub.com</p>
                  </div>
                  <Button asChild className="mt-4 bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] text-white">
                    <Link href="/club-info">Get Directions</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="h-96 bg-gray-200 rounded-xl flex items-center justify-center">
              <p className="text-gray-500 font-['Noto Sans']">Interactive Map Coming Soon</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
