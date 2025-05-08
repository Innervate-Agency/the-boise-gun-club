'use client';

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
    );
};

export default HeroSection; 