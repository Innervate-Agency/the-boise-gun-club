'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import Image from 'next/image';
import { HeroImage } from '../ui/UnsplashImage';

function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Smooth parallax transforms
    const titleY = useTransform(scrollYProgress, [0, 0.5], [0, -150]);
    const subtitleY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
    const ctaY = useTransform(scrollYProgress, [0, 0.5], [0, -80]);
    const bgScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.15]);
    const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);    return (
        <section ref={containerRef} className="relative min-h-[110vh] overflow-hidden bg-[#2F2F2F]">
            {/* Background layers for depth */}
            <div className="absolute inset-0">
                {/* Hero background image with Unsplash integration */}
                <motion.div 
                    className="absolute inset-0 opacity-40"
                    style={{ scale: bgScale }}
                >
                    <HeroImage
                        fill={true}
                        className="object-cover"
                        priority={true}
                        quality={85}
                        alt="Boise Gun Club - Premier Shooting Sports Facility"
                        width={1920}
                        height={1080}
                    />
                </motion.div>
                
                {/* Base smoke texture overlay */}
                <motion.div 
                    className="absolute inset-0 opacity-20"
                    style={{ scale: bgScale }}
                >
                    <Image
                        src="/images/Smoke/Background_05.webp"
                        alt=""
                        fill
                        className="object-cover"
                        quality={85}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                        sizes="100vw"
                    />
                </motion.div>
                
                {/* Animated smoke layers */}
                <div className="smoke-layer" style={{ animationDelay: '0s' }} />
                <div className="smoke-layer" style={{ animationDelay: '7s', opacity: 0.2 }} />
                <div className="smoke-layer" style={{ animationDelay: '14s', opacity: 0.15 }} />
                
                {/* Gradient overlays for atmosphere */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#2F2F2F]/50 via-transparent to-[#2F2F2F]/80" />
                <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#1E1E1E]/40 to-[#2F2F2F]/90" />
                
                {/* Warm color wash */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B4513]/10 via-transparent to-[#D2691E]/10 mix-blend-overlay" />
            </div>

            {/* Floating glass panels for depth - Enhanced */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Large floating glass panel - left */}
                <motion.div
                    className="absolute -left-24 top-16 w-[650px] h-[450px] rounded-3xl animate-float"
                    initial={{ x: -150, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    style={{ y: titleY }}
                >
                    <div className="w-full h-full glass-premium" />
                </motion.div>
                
                {/* Medium floating glass panel - right */}
                <motion.div
                    className="absolute -right-16 bottom-32 w-[450px] h-[350px] rounded-2xl animate-float"
                    initial={{ x: 150, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                    style={{ y: subtitleY, animationDelay: '2s' }}
                >
                    <div className="w-full h-full glass-premium" />
                </motion.div>
                
                {/* Small accent panels */}
                <motion.div
                    className="absolute left-1/3 top-1/4 w-[220px] h-[220px] rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.3 }}
                    transition={{ duration: 2, delay: 0.5 }}
                >
                    <div className="w-full h-full backdrop-blur-sm bg-gradient-to-br from-[var(--accent-gold)]/10 to-transparent border border-[var(--accent-gold)]/20 animate-pulse-glow" />
                </motion.div>
            </div>

            {/* Shattered Clay SVG - Floating accent with glow */}
            <motion.div
                className="absolute right-12 top-16 w-[350px] h-[350px] md:w-[450px] md:h-[450px]"
                initial={{ scale: 0, rotate: -180, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 0.20 }}
                transition={{ duration: 1.8, ease: "easeOut" }}
                style={{ y: titleY }}
            >
                <div className="relative w-full h-full">
                    {/* Glow effect behind SVG */}
                    <div className="absolute inset-0 bg-[var(--accent-primary)]/20 blur-3xl animate-pulse-glow" />                    <Image
                        src="/images/bgcv3-shattered-clay.svg"
                        alt=""
                        width={400}
                        height={400}
                        className="w-full h-full relative z-10"
                        priority={true}
                        placeholder="blur"
                        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzMzMzMzMyIvPjwvc3ZnPg=="
                    />
                </div>
            </motion.div>

            {/* Main Content */}
            <motion.div
                className="relative z-10 flex flex-col items-center justify-center h-full min-h-[110vh] px-4 md:px-8 pt-20 pb-32"
                style={{ opacity }}
            >
                {/* Club Badge/Logo - Enhanced */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="mb-12 md:mb-16"
                    style={{ y: titleY }}
                >
                    <div className="relative">
                        {/* Outer glow ring */}
                        <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-[var(--accent-primary)]/30 to-[var(--accent-secondary)]/20 blur-2xl animate-pulse-glow" />
                        
                        {/* Glass badge background */}
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full glass-premium flex items-center justify-center relative">
                            {/* Inner glow */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--accent-primary)]/20 to-transparent blur-xl" />
                            
                            {/* Badge content */}
                            <div className="relative text-center">
                                <div className="text-[var(--accent-gold)] font-['Refrigerator_Deluxe'] text-2xl md:text-3xl font-bold retro-glow">BGC</div>
                                <div className="text-white/60 font-['Museo'] text-xs tracking-wider">EST. 1898</div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Title Stack - Enhanced with retro glow */}
                <div className="text-center max-w-6xl mx-auto">
                    <motion.h1
                        initial={{ y: 70, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                        className="font-['Refrigerator_Deluxe'] text-7xl md:text-9xl lg:text-[10rem] leading-[0.85] mb-8 tracking-tighter uppercase"
                        style={{ y: titleY }}
                    >
                        <span className="block text-white retro-glow">Boise</span>
                        <span className="block mt-1 md:mt-2 bg-gradient-to-r from-[var(--accent-primary)] via-[var(--accent-gold)] to-[var(--accent-secondary)] bg-clip-text text-transparent retro-glow">
                            Gun Club
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                        className="font-['Museo'] text-xl md:text-2xl lg:text-3xl text-white/70 max-w-4xl mx-auto mb-16"
                        style={{ y: subtitleY }}
                    >
                        Forging champions and camaraderie since 1898.
                        <span className="block mt-2 text-lg md:text-xl text-white/50">
                            Experience the legacy. Discover your potential.
                        </span>
                    </motion.p>
                </div>

                {/* CTA Buttons with enhanced glass effect */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-6 md:gap-8"
                    style={{ y: ctaY }}
                >
                    {/* Primary CTA - Enhanced */}
                    <Link href="/membership" className="group relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition-all duration-500 animate-pulse-glow" />
                        <button className="relative backdrop-blur-sm bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white px-10 md:px-12 py-5 md:py-6 rounded-xl font-['Refrigerator_Deluxe'] text-lg md:text-xl tracking-wider uppercase transition-all duration-300 group-hover:scale-105 shadow-2xl vintage-hover">
                            <span className="relative z-10">Join The Club</span>
                        </button>
                    </Link>

                    {/* Secondary CTA with glass - Enhanced */}
                    <Link href="/ranges" className="group relative">
                        <button className="relative glass-premium text-white px-10 md:px-12 py-5 md:py-6 rounded-xl font-['Refrigerator_Deluxe'] text-lg md:text-xl tracking-wider uppercase transition-all duration-300 group-hover:scale-105 shadow-xl vintage-hover">
                            <span className="relative z-10">Visit Ranges</span>
                        </button>
                    </Link>
                </motion.div>
            </motion.div>

            {/* Sophisticated Scroll Indicator - Enhanced */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: [0, 10, 0], opacity: 1 }}
                transition={{
                    opacity: { delay: 1.5, duration: 0.5 },
                    y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
            >
                <div className="glass-premium rounded-full px-4 py-2">
                    <span className="text-xs font-['Museo'] text-white/40 uppercase tracking-wider">Scroll to explore</span>
                </div>
                
                {/* Animated arrow with glow */}
                <div className="relative h-8 w-[2px] bg-gradient-to-b from-[var(--accent-gold)]/60 to-transparent rounded-full overflow-hidden">
                    <motion.div
                        className="absolute top-0 left-0 w-full h-2 bg-[var(--accent-gold)] rounded-full shadow-[0_0_10px_rgba(242,203,5,0.8)]"
                        animate={{ y: [0, 30, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
            </motion.div>
        </section>
    );
}

export default HeroSection;
