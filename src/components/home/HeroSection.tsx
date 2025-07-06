'use client';

import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { Target, Star, Trophy, ArrowRight, Play } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    
    // Mouse tracking for cursor glow effects
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setMousePosition({
                    x: ((e.clientX - rect.left) / rect.width) * 100,
                    y: ((e.clientY - rect.top) / rect.height) * 100,
                });
            }
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('mousemove', handleMouseMove);
            return () => container.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);

    // Scroll animations
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const titleY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

    // Bright fractal images for glows (avoiding muddy ones)
    const brightFractals = [3, 7, 11, 15, 19, 23, 27, 31, 35, 39]; // Cherry-picked bright ones
    const dustTextures = [1, 3, 5, 7, 9]; // Clean dust textures

    return (
        <section ref={containerRef} className="relative min-h-screen overflow-hidden">
            {/* 45-Degree Angled Background Layers */}
            <div className="absolute inset-0">
                {/* Base gradient with 45-degree angle */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2F3135] via-[#4B4B4B] to-[#494657]" />
                
                {/* 45-degree geometric overlay */}
                <div 
                    className="absolute inset-0 opacity-30"
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
                    className="absolute inset-0 opacity-5"
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

            {/* Floating Particles with Physics */}
            <div className="absolute inset-0">
                {[...Array(25)].map((_, i) => (
                    <motion.div
                        key={`particle-${i}`}
                        className="absolute w-2 h-2 rounded-full"
                        style={{
                            backgroundColor: [
                                '#F2CB05', '#F28705', '#F25C05', '#F23005', 
                                '#4982A6', '#3F6331', '#C9D2EF'
                            ][i % 7],
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            opacity: 0.6,
                        }}
                        animate={{
                            y: [0, -80, 0],
                            x: [0, Math.sin(i) * 30, 0],
                            opacity: [0.6, 1, 0.6],
                            scale: [1, 1.8, 1],
                        }}
                        transition={{
                            duration: 8 + Math.random() * 4,
                            repeat: Infinity,
                            delay: Math.random() * 5,
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
                    {/* Trust Indicators with Glassmorphism */}
                    <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
                        {[
                            { text: "★ EST. 1898 ★", color: "#F2CB05", fractal: 7 },
                            { text: "1200+ MEMBERS", color: "#4982A6", fractal: 15 },
                            { text: "320 ACRES", color: "#3F6331", fractal: 23 }
                        ].map((badge, i) => (
                            <motion.div
                                key={i}
                                className="relative px-8 py-4 rounded-2xl backdrop-blur-xl border border-white/10 group cursor-pointer"
                                style={{
                                    background: `linear-gradient(135deg, 
                                        rgba(255, 255, 255, 0.1), 
                                        rgba(255, 255, 255, 0.05))`,
                                    boxShadow: `0 8px 32px rgba(0, 0, 0, 0.3), 
                                               inset 0 1px 0 rgba(255, 255, 255, 0.2)`
                                }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {/* Blurred fractal background for glassmorphism */}
                                <div 
                                    className="absolute inset-0 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                                    style={{
                                        backgroundImage: `url('/images/Fractal/${badge.fractal}.webp')`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        filter: 'blur(20px)',
                                    }}
                                />
                                
                                {/* Dust texture for mica effect */}
                                <div 
                                    className="absolute inset-0 rounded-2xl opacity-30 mix-blend-soft-light"
                                    style={{
                                        backgroundImage: `url('/images/Dust/VintageDust (${(i % 3) + 1}).webp')`,
                                        backgroundSize: '200px 200px',
                                    }}
                                />
                                
                                <span 
                                    className="relative z-10 font-bold text-sm tracking-wide"
                                    style={{ color: badge.color }}
                                >
                                    {badge.text}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Dramatic Headline */}
                    <motion.h1 
                        className="text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black mb-8 font-['Rajdhani'] uppercase tracking-tighter leading-[0.8]"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.2 }}
                    >
                        <span className="block text-[var(--text-primary)]">Idaho's Most</span>
                        <span className="block relative">
                            <span 
                                className="text-transparent bg-clip-text"
                                style={{
                                    backgroundImage: 'linear-gradient(45deg, #F28705, #F2CB05, #F25C05, #F23005)',
                                    backgroundSize: '400% 400%',
                                    animation: 'gradient-shift 4s ease infinite',
                                    filter: 'drop-shadow(0 0 30px rgba(242, 135, 5, 0.5))'
                                }}
                            >
                                Advanced
                            </span>
                        </span>
                        <span className="block text-[var(--text-primary)]">Gun Club</span>
                    </motion.h1>

                    {/* Enhanced Subtitle */}
                    <motion.p 
                        className="text-2xl md:text-3xl lg:text-4xl text-[var(--text-secondary)] mb-16 max-w-5xl mx-auto font-['Noto Sans'] font-light leading-relaxed"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        Experience <span className="text-[#F28705] font-semibold">world-class trap, skeet, and sporting clays</span> at the most innovative facility in the Pacific Northwest.
                    </motion.p>

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
                                className="relative backdrop-blur-xl bg-white/5 border-2 border-white/20 hover:bg-white/10 text-[var(--text-primary)] px-12 py-6 text-xl font-bold rounded-2xl transition-all duration-500"
                                style={{
                                    boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
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
                                <Card className="relative overflow-hidden backdrop-blur-xl bg-transparent border border-white/10 group cursor-pointer h-full">
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
                                        className="absolute inset-0 opacity-40 mix-blend-soft-light"
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
                                                rgba(255, 255, 255, 0.1), 
                                                rgba(255, 255, 255, 0.05))`,
                                            boxShadow: `0 8px 32px rgba(0, 0, 0, 0.3), 
                                                       inset 0 1px 0 rgba(255, 255, 255, 0.2)`
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
    );
}

export default HeroSection;