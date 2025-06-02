'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import Image from 'next/image';

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
        <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-[var(--bg-primary)]">
            {/* Background Image */}
            <motion.div 
                className="absolute inset-0"
                style={{ scale: bgScale }}
            >
                <Image
                    src="/images/hero-bg.webp"
                    fill={true}
                    className="object-cover"
                    priority={true}
                    quality={85}
                    alt="Boise Gun Club - Premier Shooting Sports Facility"
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/40" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 flex min-h-screen items-center justify-center">
                <div className="container mx-auto px-6 text-center">
                    <motion.div style={{ opacity, y: titleY }}>
                        {/* Actual Logo */}
                        <div className="mb-8 flex justify-center">
                            <Image
                                src="/images/bgcv3-shattered-clay.svg"
                                width={200}
                                height={200}
                                alt="Boise Gun Club Logo"
                                className="drop-shadow-2xl"
                                priority
                            />
                        </div>
                        
                        <h1 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-7xl font-['Rajdhani']">
                            BOISE GUN CLUB
                        </h1>
                    </motion.div>

                    <motion.div style={{ opacity, y: subtitleY }}>
                        <p className="mb-8 text-xl text-white/90 md:text-2xl max-w-3xl mx-auto font-['Noto Sans']">
                            Idaho's premier shooting sports facility since 1898. 
                            Experience world-class trap, skeet, and sporting clays ranges 
                            in the heart of the Treasure Valley.
                        </p>
                    </motion.div>

                    <motion.div style={{ opacity, y: ctaY }} className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                        <Link 
                            href="/membership"
                            className="inline-block bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] 
                                     text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 
                                     transform hover:scale-105 shadow-lg hover:shadow-xl font-['Rajdhani']"
                        >
                            BECOME A MEMBER
                        </Link>
                        
                        <Link 
                            href="/ranges"
                            className="inline-block border-2 border-white text-white hover:bg-white hover:text-[var(--bg-primary)] 
                                     font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 
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
                <div className="flex flex-col items-center text-white/70">
                    <span className="text-sm mb-2 font-['Noto Sans']">Scroll to explore</span>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
                    >
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-1 h-3 bg-white/70 rounded-full mt-2"
                        />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}

export default HeroSection;
