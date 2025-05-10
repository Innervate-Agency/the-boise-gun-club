'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

// Smoke wisp component
const SmokeWisp = ({ index }: { index: number }) => {
    const randomX = Math.random() * 100;
    const randomDelay = Math.random() * 5;
    const randomDuration = 20 + Math.random() * 30;

    return (
        <motion.div
            className="absolute opacity-[0.08] blur-xl"
            style={{
                width: '300px',
                height: '300px',
                left: `${randomX}%`,
                top: '20%',
                background: 'url("/images/Smoke/Background_0' + ((index % 9) + 1) + '.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '50%',
            }}
            initial={{ opacity: 0, scale: 0.5, y: 100 }}
            animate={{
                opacity: [0, 0.08, 0],
                scale: [0.7, 1.2],
                y: [100, -200],
                x: [0, Math.random() * 100 - 50]
            }}
            transition={{
                duration: randomDuration,
                ease: "easeOut",
                delay: randomDelay,
                repeat: Infinity,
                repeatDelay: Math.random() * 5
            }}
        />
    );
};

// Clay target component
const ClayTarget = ({ broken = false }: { broken?: boolean }) => {
    return broken ? (
        // Broken clay target with fragments
        <div className="relative">
            {Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute bg-[var(--accent-primary)]"
                    style={{
                        width: `${8 + Math.random() * 15}px`,
                        height: `${8 + Math.random() * 15}px`,
                        borderRadius: '50%',
                        left: '50%',
                        top: '50%',
                    }}
                    initial={{ x: 0, y: 0, opacity: 1 }}
                    animate={{
                        x: Math.random() * 100 - 50,
                        y: Math.random() * 100 - 50,
                        opacity: [1, 0],
                        scale: [1, 0.5]
                    }}
                    transition={{
                        duration: 1.5,
                        ease: "easeOut",
                        delay: 0.1 * i
                    }}
                />
            ))}
        </div>
    ) : (
        // Whole clay target
        <motion.div
            className="w-12 h-12 rounded-full bg-[var(--accent-primary)] shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
        />
    );
};

// Typewriter effect
const TypewriterText = ({ text }: { text: string }) => {
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                setDisplayText(prev => prev + text.charAt(i));
                i++;
            } else {
                clearInterval(timer);
            }
        }, 80);

        return () => clearInterval(timer);
    }, [text]);

    return (
        <span className="inline-block relative">
            {displayText}
            <span className="absolute -right-[0.5em] top-0 h-full w-[0.3em] bg-[var(--accent-gold)] animate-blink"></span>
        </span>
    );
};

// Retro sun effect
const RetroSun = () => {
    return (
        <div className="absolute bottom-40 left-1/2 -translate-x-1/2 z-0 opacity-50">
            <div className="relative w-60 h-60">
                <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-b from-[var(--accent-orangered)] to-[var(--accent-gold)] retrowave-sun"
                    animate={{
                        scale: [1, 1.05, 1],
                        y: [0, -5, 0]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Sun rays */}
                {Array.from({ length: 12 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute top-1/2 left-1/2 w-40 h-1 bg-[var(--accent-primary)]/30"
                        style={{
                            transformOrigin: 'left center',
                            rotate: `${i * 30}deg`,
                        }}
                        animate={{
                            opacity: [0.2, 0.4, 0.2],
                            scaleX: [1, 1.1, 1]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.2
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

// Disco ball glimmer effect
const DiscoGlimmer = () => {
    return (
        <motion.div
            className="absolute top-20 right-20 w-20 h-20 rounded-full disco-effect"
            animate={{
                rotate: 360
            }}
            transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
            }}
        />
    );
};

const HeroSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Use transform values for parallax effects
    const yBg = useTransform(scrollYProgress, [0, 1], [0, 300]);
    const opacityBg = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
    const gridScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    // Smoke particles
    const wisps = Array.from({ length: 8 }, (_, i) => i);

    // Trigger clay target animation on scroll
    const [targetBroken, setTargetBroken] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100 && !targetBroken) {
                setTargetBroken(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [targetBroken]);

    return (
        <div
            ref={containerRef}
            className="relative overflow-hidden h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]"
        >
            {/* Base layer - Grid background with parallax */}
            <motion.div 
                className="absolute inset-0 w-full h-full z-0"
                style={{ 
                    y: yBg,
                    opacity: opacityBg,
                    scale: gridScale
                }}
            >
                <div className="absolute inset-0 bg-[var(--bg-primary)]"></div>

                {/* Perspective grid with retrowave glow */}
                <div className="absolute inset-0 bg-[url('/images/Grid/Grid (3).jpg')] bg-cover bg-center opacity-40 mix-blend-screen retrowave-grid"></div>

                {/* Colored gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--accent-darkred)]/20 to-[var(--accent-gold)]/10 mix-blend-screen"></div>

                {/* Subtle grain texture */}
                <div className="absolute inset-0 bg-[url('/textures/grain.png')] opacity-10 mix-blend-multiply"></div>
            </motion.div>

            {/* Retro sun effect */}
            <RetroSun />

            {/* Disco glimmer */}
            <DiscoGlimmer />

            {/* Light smoke wisps drifting across grid */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-1">
                {wisps.map((_, i) => (
                    <SmokeWisp key={i} index={i} />
                ))}
            </div>

            {/* Content layer */}
            <div className="relative z-10 container mx-auto h-full flex items-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-20 md:mt-0 max-w-3xl"
                >
                    {/* Clay target animation positioned to the side */}
                    <div className="absolute -right-4 top-1/3 md:right-24 opacity-90">
                        <ClayTarget broken={targetBroken} />
                    </div>

                    {/* Glassmorphic card */}
                    <div className="backdrop-blur-md bg-[var(--glass-bg)] border border-[var(--glass-border)] p-8 md:p-10 rounded shadow-xl relative overflow-hidden glass-effect">
                        {/* Subtle grid pattern within glass panel */}
                        <div className="absolute inset-0 bg-[url('/images/Grid/Grid (1).jpg')] bg-cover opacity-5 mix-blend-overlay pointer-events-none"></div>

                        {/* Logo & Text content */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <h1
                                className="text-5xl md:text-7xl font-bold mb-4 leading-none"
                                style={{
                                    fontFamily: "'Refrigerator_Deluxe', sans-serif",
                                    letterSpacing: "0.01em",
                                    textTransform: "uppercase",
                                    background: "var(--gradient-primary)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                BOISE GUN CLUB
                            </h1>

                            <h2 className="text-lg md:text-xl mb-6 text-[var(--accent-primary)] font-['Museo']">
                                <TypewriterText text="Idaho's Premier Shotgun Sports Facility" />
                            </h2>

                            <p className="text-[var(--text-primary)] text-base md:text-lg mb-8 max-w-md font-['Museo']">
                                Join our community of passionate shooters featuring state-of-the-art ranges and world-class training facilities since 1898.
                            </p>

                            {/* Retro CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                                <motion.div
                                    className="relative"
                                    whileHover={{ scale: 1.03, rotate: 1 }}
                                    whileTap={{ scale: 0.98, rotate: -1 }}
                                >
                                    <Link
                                        href="/membership"
                                        className="block bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] hover:from-[var(--accent-secondary)] hover:to-[var(--accent-primary)] text-white font-bold py-3 px-8 rounded text-base md:text-lg transition-all duration-300 shadow-lg font-['Refrigerator_Deluxe'] pulse"
                                    >
                                        BECOME A MEMBER
                                    </Link>

                                    {/* Subtle glow effect */}
                                    <div className="absolute inset-0 -z-10 bg-[var(--accent-primary)] blur-md opacity-30 rounded"></div>
                                </motion.div>

                                <motion.div
                                    className="relative"
                                    whileHover={{ scale: 1.03, rotate: -1 }}
                                    whileTap={{ scale: 0.98, rotate: 1 }}
                                >
                                    <Link 
                                        href="/events"
                                        className="block border-2 border-[var(--accent-darkred)] text-[var(--accent-darkred)] hover:bg-[var(--accent-darkred)]/5 py-3 px-8 rounded text-base md:text-lg transition-all duration-300 shadow-lg font-['Refrigerator_Deluxe']"
                                    >
                                        VIEW SCHEDULE
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[var(--bg-primary)] to-transparent z-5"></div>
        </div>
    );
};

export default HeroSection; 