'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import Image from 'next/image';
import Section from '@/components/layout/Section';

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
    const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

    return (
        <Section isHero background="grid" overlay={false}>
            <div ref={containerRef} className="relative min-h-screen overflow-hidden">            
                {/* Background Image */}
                <motion.div 
                    className="absolute inset-0 w-full h-full"
                    style={{ scale: bgScale }}
                >
                    <div className="relative w-full h-full">
                        <Image
                            src="/images/hero-bg.webp"
                            fill
                            className="object-cover"
                            priority
                            quality={85}
                            alt="Boise Gun Club - Premier Shooting Sports Facility"
                            sizes="100vw"
                        />
                        {/* Dark overlay for text readability */}
                        <div className="absolute inset-0 bg-black/40" />
                    </div>
                </motion.div>

                {/* Content */}
                <div className="container mx-auto px-4 sm:px-6 text-center flex items-center justify-center min-h-screen pt-[80px] md:pt-[90px]">
                    <div className="w-full max-w-4xl">
                        <motion.div style={{ opacity, y: titleY }}>
                        {/* Logo Container */}
                        <div className="mb-8 flex justify-center">
                            <div className="relative w-[200px] h-[200px]">
                                <Image
                                    src="/images/bgcv3-shattered-clay.svg"
                                    fill
                                    alt="Boise Gun Club Logo"
                                    className="drop-shadow-2xl"
                                    priority
                                    sizes="200px"
                                />
                            </div>
                        </div>
                        
                        <h1 className="mb-6 text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-[var(--text-primary)] font-['Rajdhani']">
                            BOISE GUN CLUB
                        </h1>
                    </motion.div>

                        <motion.div style={{ opacity, y: subtitleY }}>
                        <p className="mb-8 text-lg sm:text-xl md:text-2xl text-[var(--text-secondary)] max-w-3xl mx-auto font-['Noto Sans']">
                            Idaho's premier shooting sports facility since 1898. 
                            Experience world-class trap, skeet, and sporting clays ranges 
                            in the heart of the Treasure Valley.
                        </p>
                        </motion.div>

                        <motion.div style={{ opacity, y: ctaY }} className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            href="/membership"
                            className="inline-block bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] 
                                     text-[var(--text-primary)] font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-base sm:text-lg transition-all duration-300 
                                     transform hover:scale-105 shadow-lg hover:shadow-xl font-['Rajdhani']"
                        >
                            BECOME A MEMBER
                        </Link>
                        
                        <Link 
                            href="/ranges"
                            className="inline-block border-2 border-[var(--text-primary)] text-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] 
                                     font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-base sm:text-lg transition-all duration-300 
                                     transform hover:scale-105 shadow-lg hover:shadow-xl font-['Rajdhani']"
                        >
                            EXPLORE RANGES
                        </Link>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    style={{ opacity }}
                >
                    <div className="flex flex-col items-center text-[var(--text-secondary)]">
                        <span className="text-sm mb-2 font-['Noto Sans']">Scroll to explore</span>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-6 h-10 border-2 border-[var(--text-secondary)] rounded-full flex justify-center"
                        >
                            <motion.div
                                animate={{ y: [0, 12, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="w-1 h-3 bg-[var(--text-secondary)] rounded-full mt-2"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}

export default HeroSection;
