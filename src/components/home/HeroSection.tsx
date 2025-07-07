'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Trophy, Target, Star, ArrowRight, Play } from 'lucide-react';

export default function HeroSection() {
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
    <section ref={heroRef} className="relative min-h-screen overflow-hidden">
      {/* Theme-Aware Background Layers */}
      <div className="absolute inset-0">
        {/* Base gradient - theme aware */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-primary)] via-[var(--bg-secondary)] to-[var(--bg-tertiary)]" />
        
        {/* 45-degree geometric overlay */}
        <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-[#f28705]/10 via-transparent via-[#f2cb05]/5 to-[#4982a6]/8" />
        
        {/* Angled grid pattern */}
        <div className="absolute inset-0 opacity-3 bg-[url('/images/Grid/Grid_(1).webp')] bg-[length:400px_400px] bg-repeat rotate-45 scale-150" />
      </div>

      {/* Blurred Fractal Glows - ClickUp Style */}
      {brightFractals.slice(0, 6).map((fractalNum, i) => (
        <motion.div
          key={`fractal-${fractalNum}`}
          className={`absolute rounded-full blur-3xl opacity-20 
            bg-[url('/images/Fractal/${fractalNum}.webp')] bg-cover bg-center
            ${i === 0 ? 'w-[300px] h-[300px] left-[10%] top-[10%]' : ''}
            ${i === 1 ? 'w-[350px] h-[350px] left-[25%] top-[22%]' : ''}
            ${i === 2 ? 'w-[400px] h-[400px] left-[40%] top-[34%]' : ''}
            ${i === 3 ? 'w-[450px] h-[450px] left-[55%] top-[46%]' : ''}
            ${i === 4 ? 'w-[500px] h-[500px] left-[70%] top-[58%]' : ''}
            ${i === 5 ? 'w-[550px] h-[550px] left-[85%] top-[70%]' : ''}
            blur-[60px] saturate-150`}
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
            bg-[url('/images/Dust/VintageDust_(${dustNum}).webp')] bg-[length:800px_800px] bg-repeat
            ${i === 0 ? 'rotate-0 scale-100' : ''}
            ${i === 1 ? 'rotate-[15deg] scale-110' : ''}
            ${i === 2 ? 'rotate-[30deg] scale-[1.2]' : ''}
            ${i === 3 ? 'rotate-[45deg] scale-[1.3]' : ''}
            ${i === 4 ? 'rotate-[60deg] scale-[1.4]' : ''}`}
        />
      ))}

      {/* Interactive Mouse Cursor Glow */}
      <motion.div
        className="absolute pointer-events-none rounded-full w-[400px] h-[400px] 
          bg-[radial-gradient(circle,rgba(242,135,5,0.15)_0%,rgba(242,203,5,0.08)_30%,transparent_70%)]
          -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
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
        {[...Array(8)].map((_, i) => {
          const colors = ['bg-[#F2CB05]', 'bg-[#F28705]', 'bg-[#F25C05]', 'bg-[#F23005]', 'bg-[#4982A6]', 'bg-[#3F6331]', 'bg-[#C9D2EF]'];
          const positions = ['left-[25%] top-[30%]', 'left-[60%] top-[20%]', 'left-[80%] top-[40%]', 'left-[30%] top-[70%]', 'left-[70%] top-[60%]', 'left-[40%] top-[80%]', 'left-[85%] top-[25%]', 'left-[15%] top-[50%]'];
          return (
          <motion.div
            key={`particle-${i}`}
            className={`absolute w-1 h-1 rounded-full opacity-30 ${colors[i % 7]} ${positions[i]}`}
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
        )})}
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
              className="text-xl md:text-2xl text-[var(--text-primary)] mb-6 font-heading uppercase tracking-wider font-medium"
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
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading uppercase tracking-tight leading-none">
                  <span className="block text-[var(--text-primary)] font-extrabold">BOISE</span>
                  <span className="block text-[var(--text-primary)] font-light">GUN CLUB</span>
                </h1>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p 
              className="text-lg md:text-xl lg:text-2xl text-[var(--text-secondary)] mb-16 max-w-4xl mx-auto font-body font-light leading-relaxed"
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
                className="relative overflow-hidden bg-gradient-to-r from-[#F28705] via-[#F25C05] to-[#F23005] hover:from-[#F23005] hover:to-[#F28705] text-white px-12 py-6 text-xl font-bold rounded-2xl transition-all duration-500 border-0 shadow-[0_0_40px_rgba(242,135,5,0.4),0_20px_40px_rgba(0,0,0,0.2)]"
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
                className="relative backdrop-blur-xl bg-white/5 border-2 border-white/15 hover:bg-white/8 text-[var(--text-primary)] px-12 py-6 text-xl font-bold rounded-2xl transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.15)]"
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
                  <div className={`absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500 
                    bg-[url('/images/Fractal/${feature.fractal}.webp')] bg-cover bg-center blur-[40px] saturate-150`} />
                  
                  {/* Mica dust texture */}
                  <div className={`absolute inset-0 opacity-25 mix-blend-soft-light 
                    bg-[url('/images/Dust/VintageDust_(${(i % 3) + 2}).webp')] bg-[length:300px_300px]`} />
                  
                  {/* Glass effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/8 to-white/4 
                    shadow-[0_8px_32px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.1)]" />

                  <CardContent className="p-10 text-center relative z-10">
                    <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500
                      ${feature.color === '#F28705' ? 'bg-gradient-to-br from-[#F28705] to-[#F28705]/50 shadow-[0_0_30px_#F28705]/25' : ''}
                      ${feature.color === '#F2CB05' ? 'bg-gradient-to-br from-[#F2CB05] to-[#F2CB05]/50 shadow-[0_0_30px_#F2CB05]/25' : ''}
                      ${feature.color === '#4982A6' ? 'bg-gradient-to-br from-[#4982A6] to-[#4982A6]/50 shadow-[0_0_30px_#4982A6]/25' : ''}`}
                    >
                      <feature.icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3 font-heading uppercase">
                      {feature.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] font-body">
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
          <span className="text-sm mb-2 font-body">Scroll to explore</span>
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
  );
}