'use client';

<<<<<<< HEAD
import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Logo from '@components/common/Logo';

// Time-based gradient configurations
const gradientsByTime = {
    morning: {
        from: 'from-[#4A6741]/90',
        via: 'via-[#4A6741]/70',
        to: 'to-[#212529]/90'
    },
    afternoon: {
        from: 'from-[#4A6741]/80',
        via: 'via-[#D4A76A]/60',
        to: 'to-[#212529]/90'
    },
    evening: {
        from: 'from-[#212529]/90',
        via: 'via-[#D4A76A]/50',
        to: 'to-[#4A6741]/80'
    },
    night: {
        from: 'from-[#212529]/95',
        via: 'via-[#212529]/80',
        to: 'to-[#4A6741]/70'
    }
};

const HeroSection: FC = () => {
    const [timeOfDay, setTimeOfDay] = useState<keyof typeof gradientsByTime>('morning');

    // Update gradient based on time of day
    useEffect(() => {
        const updateTimeOfDay = () => {
            const hour = new Date().getHours();
            if (hour >= 5 && hour < 12) setTimeOfDay('morning');
            else if (hour >= 12 && hour < 17) setTimeOfDay('afternoon');
            else if (hour >= 17 && hour < 20) setTimeOfDay('evening');
            else setTimeOfDay('night');
        };

        updateTimeOfDay();
        const interval = setInterval(updateTimeOfDay, 60000); // Update every minute

        return () => clearInterval(interval);
    }, []);

    const currentGradient = gradientsByTime[timeOfDay];

    return (
        <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/hero-bg.webp"
                    alt="Boise Gun Club Range"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                    quality={90}
                />
                {/* Time-aware gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-b ${currentGradient.from} ${currentGradient.via} ${currentGradient.to}`} />
            </div>

            {/* Content Container */}
            <div className="relative container mx-auto px-4 text-center">
                {/* Logo and Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="mb-12"
                >
                    <div className="relative mb-8 mx-auto">
                        <Logo className="w-32 h-32 md:w-44 md:h-44 text-[#D4A76A] mx-auto
                                      filter drop-shadow-lg" />
                        <motion.div
                            className="absolute inset-0 bg-[#D4A76A]/20 blur-2xl rounded-full"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.5, 0.3, 0.5]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </div>
                    <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-4
                                 tracking-tight leading-tight">
                        Boise Gun Club
                    </h1>
                    <p className="font-inter text-lg md:text-xl text-[#D4A76A] font-light
                                tracking-wide max-w-2xl mx-auto">
                        Where precision meets tradition in Idaho's premier shooting facility
                    </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                >
                    <Link
                        href="/membership"
                        className="px-8 py-3 bg-[#D4A76A] text-[#212529] rounded
                                 font-inter font-medium text-lg tracking-wide
                                 transition-all duration-300 ease-out
                                 hover:bg-[#D4A76A]/90 hover:translate-y-[-2px]
                                 focus:outline-none focus:ring-2 focus:ring-[#D4A76A]/50
                                 min-w-[180px]"
                    >
                        Join Now
                    </Link>
                    <Link
                        href="/events"
                        className="px-8 py-3 bg-transparent text-white rounded
                                 font-inter font-medium text-lg tracking-wide
                                 border-2 border-white/20
                                 transition-all duration-300 ease-out
                                 hover:bg-white/10 hover:border-white/30
                                 focus:outline-none focus:ring-2 focus:ring-white/30
                                 min-w-[180px]"
                    >
                        View Events
                    </Link>
                </motion.div>

                {/* Subtle scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <div className="w-[2px] h-12 bg-white/20 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-[#D4A76A]
                                      animate-scrollIndicator" />
                    </div>
                </motion.div>
            </div>
        </section>
=======
import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import ImageGallery from '@components/common/ImageGallery';

// Sample upcoming event data
const upcomingEvent = {
    title: "Summer Shooting Competition",
    date: "July 15, 2023",
    url: "/events/summer-competition"
};

const HeroSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Use transform values for parallax effects
    const yBg = useTransform(scrollYProgress, [0, 1], [0, 400]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    // State for bubble animation
    const [bubbles, setBubbles] = useState<Array<{ id: number, x: number, y: number, size: number, delay: number }>>([]);

    // Generate bubbles for background
    useEffect(() => {
        const newBubbles = [];
        for (let i = 0; i < 12; i++) {
            newBubbles.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: 20 + Math.random() * 80,
                delay: Math.random() * 5
            });
        }
        setBubbles(newBubbles);
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative overflow-hidden min-h-[80vh] bg-[#1E352F]"
        >
            {/* 70s Style Bubble Background */}
            <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
                <motion.div
                    className="absolute inset-0 z-0"
                    style={{ y: yBg }}
                >
                    {bubbles.map(bubble => (
                        <motion.div
                            key={bubble.id}
                            className="absolute rounded-full bg-[#FFC300]/20"
                            style={{
                                left: `${bubble.x}%`,
                                top: `${bubble.y}%`,
                                width: bubble.size,
                                height: bubble.size,
                            }}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{
                                scale: [0, 1.2, 1],
                                opacity: [0, 0.7, 0.5]
                            }}
                            transition={{
                                duration: 3,
                                delay: bubble.delay,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                        />
                    ))}
                </motion.div>
            </div>

            {/* 70s Geometric Pattern */}
            <div className="absolute inset-0 z-0 opacity-10">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="seventies-geo" width="60" height="60" patternUnits="userSpaceOnUse">
                            <path d="M0,30 L60,30 M30,0 L30,60" stroke="#FFC300" strokeWidth="1" />
                            <circle cx="30" cy="30" r="20" fill="none" stroke="#FFC300" strokeWidth="1" />
                            <rect x="5" y="5" width="50" height="50" fill="none" stroke="#E67E22" strokeWidth="1" rx="10" ry="10" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#seventies-geo)" />
                </svg>
            </div>

            {/* Main Content Container */}
            <div className="container mx-auto px-4 relative z-10 pt-20 pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    {/* Left column: Text and CTA */}
                    <motion.div
                        className="flex flex-col space-y-6 z-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-white" style={{
                            fontFamily: 'var(--font-dm-sans)',
                            letterSpacing: '-0.04em',
                            textShadow: '2px 2px 0px #FFC300'
                        }}>
                            BOISE GUN CLUB
                        </h1>

                        <h2 className="text-2xl md:text-3xl italic text-[#FFC300]" style={{
                            fontFamily: 'var(--font-space-grotesk)',
                        }}>
                            Where Tradition Meets Precision
                        </h2>

                        <p className="text-white/80 text-lg md:text-xl max-w-md">
                            Join our community of passionate shooters in Idaho's premier gun club, featuring state-of-the-art ranges and world-class training facilities.
                        </p>

                        {/* Groovy call-to-action buttons with bubble effect */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link href="/membership">
                                <motion.div
                                    className="relative group"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#F5E8C7] to-[#E67E22] rounded-full blur-md group-hover:blur-lg transition-all duration-300 -z-10" />
                                    <button
                                        className="relative z-0 bg-[#FFC300] hover:bg-[#E67E22] transition-colors duration-300 text-[#1E352F] font-bold py-4 px-8 rounded-full text-lg"
                                        style={{ fontFamily: 'var(--font-dm-sans)' }}
                                    >
                                        JOIN NOW
                                    </button>
                                </motion.div>
                            </Link>

                            <Link href="/events">
                                <motion.button
                                    className="bg-transparent hover:bg-white/10 border-2 border-white/70 text-white py-4 px-8 rounded-full text-lg transition-colors duration-300"
                                    style={{ fontFamily: 'var(--font-dm-sans)' }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    VIEW EVENTS
                                </motion.button>
                            </Link>
                        </div>

                        {/* Upcoming Event Banner */}
                        {upcomingEvent && (
                            <motion.div
                                className="mt-8 p-4 rounded-lg bg-[#36454F]/80 backdrop-blur-sm border-l-4 border-[#FFC300]"
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.6 }}
                            >
                                <p className="text-white text-sm uppercase tracking-wider mb-1">Upcoming Event</p>
                                <h3 className="text-[#FFC300] text-xl font-bold mb-1">{upcomingEvent.title}</h3>
                                <div className="flex justify-between items-center">
                                    <p className="text-white/80">{upcomingEvent.date}</p>
                                    <Link
                                        href={upcomingEvent.url}
                                        className="text-[#FFC300] hover:text-white transition-colors duration-200 text-sm font-bold uppercase flex items-center gap-1"
                                    >
                                        Learn More
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </Link>
                                </div>
                            </motion.div>
                        )}
                    </motion.div>

                    {/* Right column: Image Gallery */}
                    <motion.div
                        style={{ opacity }}
                        className="hidden lg:block relative h-full"
                    >
                        <ImageGallery withParallax={true} withVintageEffect={true} />
                    </motion.div>
                </div>

                {/* Mobile Gallery (shown below content on small screens) */}
                <motion.div
                    className="lg:hidden mt-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <ImageGallery withParallax={false} withVintageEffect={true} />
                </motion.div>
            </div>

            {/* Bottom Wave Design - 70s Inspired */}
            <div className="absolute bottom-0 left-0 right-0 h-24 z-0 overflow-hidden">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-full">
                    <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        fill="#36454F"
                    ></path>
                </svg>
            </div>
        </div>
>>>>>>> a24a0d8 (Implemented the hero section of the home page)
    );
};

export default HeroSection; 