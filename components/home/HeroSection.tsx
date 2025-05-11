'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useAnimation, MotionStyle } from 'framer-motion';
import Link from 'next/link';
import { useThrottledCallback } from 'use-debounce';
// import WavyGridBackground from './effects/WavyGridBackground'; // No longer using WavyGridBackground
import { ClayTarget } from './effects/ClayTarget';
import { SmokeCanvas } from './effects/SmokeCanvas'; // Assuming this is your smoke component
// import { useInView } from 'react-intersection-observer';

/**
 * HeroSection Component
 * 
 * This component serves as the main hero section for the homepage. It includes:
 * - A dynamic background with motion effects using Framer Motion.
 * - Interactive perspective animations based on mouse movement.
 * - A welcoming heading and description for the shotgun sports complex.
 * - Call-to-action buttons for membership and event schedules.
 * - Visual effects like a clay target animation and a shotgun shell with falling BBs.
 * - Accessibility features such as reduced motion support.
 */

const HeroSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
// const [isInView, setIsInView] = useState(false); // Removed as unused
// const { ref, inView } = useInView({ // Removed as unused
//     root: null,
//     rootMargin: '0px',
//     threshold: 0.1,
//     triggerOnce: true,
//     initialInView: true,
// });
// useEffect(() => { // Removed as unused
//     setIsInView(inView);
// }, [inView]);

    // Mouse-based perspective animations are removed as per the new request for static background
    // const MAX_ROTATION = 8;
    // const rotateXSpring = useSpring(0, { stiffness: 180, damping: 25 });
    // const rotateYSpring = useSpring(0, { stiffness: 180, damping: 25 });

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        const updatePrefersReducedMotion = (matches: boolean) => {
            setPrefersReducedMotion(matches);
            // if (matches) { // No spring-based rotations to reset now
            //     rotateXSpring.set(0, false);
            //     rotateYSpring.set(0, false);
            // }
        };
        updatePrefersReducedMotion(mediaQuery.matches);
        const handleChange = (e: MediaQueryListEvent) => updatePrefersReducedMotion(e.matches);
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []); // Removed spring dependencies

    // Mouse move and leave handlers for perspective are no longer needed
    // const handlePointerMove = useThrottledCallback(...);
    // const handlePointerLeave = useThrottledCallback(...);

    // backgroundWrapperStyle and variants are no longer needed for WavyGrid
    // const backgroundWrapperStyle: MotionStyle = { ... };
    // const backgroundVariants = { ... };
    // const backgroundAnimation = useAnimation();
    // useEffect(() => { backgroundAnimation.start('visible'); }, [backgroundAnimation]);

    const { scrollYProgress: shellScrollYProgress } = useScroll();
    const shellY = useTransform(shellScrollYProgress, [0, 1], [0, -100]);
    const shellStyle = { y: shellY };
    const shellAnimation = useAnimation();
    useEffect(() => { shellAnimation.start('visible'); }, [shellAnimation]);

    return (
        <div
            ref={containerRef}
            className="relative overflow-hidden h-screen bg-[var(--dark-bg)] text-[var(--text-primary)]" // Use dark-bg as fallback
            // onPointerMove and onPointerLeave removed
            // style={{ perspective: '1000px' }} // Perspective for dynamic grid removed
        >
            {/* Static Background Image Layer */}
            <div
                className="absolute inset-0 z-0" // z-0 to be behind everything
                style={{
                    backgroundImage: "url('/images/Grid/Grid (3).jpg')", // Assuming this path
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />

            {/* Gradient Overlay */}
            <div
                className="absolute inset-0 z-1" // z-1 to be above image, below smoke and content
                style={{
                    background: 'linear-gradient(to bottom, rgba(18, 18, 18, 0.6) 0%, rgba(242, 135, 5, 0.4) 70%, rgba(242, 135, 5, 0.7) 100%)', // Dark to Lahoma Orange, transparent
                }}
            />

            {/* Smoke Effects Layer */}
            {!prefersReducedMotion && (
                <div className="absolute inset-0 z-2 pointer-events-none"> {/* z-2 for smoke */}
                    <SmokeCanvas /> {/* Assuming SmokeCanvas handles its own positioning and animation */}
                </div>
            )}

            {/* Content layer - ensure z-index is highest */}
            <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-6"> {/* Main content on z-10 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    {/* Main heading */}
                    <motion.h1
                        className="text-6xl md:text-8xl font-['Refrigerator_Deluxe'] mb-6 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        WELCOME TO{" "}
                        <span className="gradient-text">
                            Idaho&apos;s Premier Shotgun Sports Complex
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        className="text-xl font-['Museo_Sans'] md:text-2xl text-[var(--text-secondary)] mb-12 font-body max-w-3xl mx-auto "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        Join our community of passionate shooters featuring state-of-the-art ranges and world-class training facilities since 1898.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-6 justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href="/membership"
                                className="block bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white font-bold py-4 px-8 rounded-lg text-lg md:text-xl transition-all duration-300 shadow-lg font-heading pulse hover:shadow-[0_0_20px_rgba(242,93,39,0.3)]"
                            >
                                BECOME A MEMBER
                            </Link>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href="/events"
                                className="block border-2 border-[var(--accent-primary)] text-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/5 py-4 px-8 rounded-lg text-lg md:text-xl transition-all duration-300 shadow-lg font-heading"
                            >
                                VIEW SCHEDULE
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Clay target animation */}
                {!prefersReducedMotion && (
                    <div className="absolute -right-20 top-1/4 md:right-[-120px] opacity-90">
                        <ClayTarget
                            onClick={() => { }}
                        />
                    </div>
                )}
            </div>

            {/* Scroll Affordance */}
            <motion.div
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10" // Ensure this is above gradient/smoke
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                style={shellStyle}
            >
                {/* ... Shotgun shell ... */}
                <div className="relative w-8 h-16">
                    <motion.div
                        className="absolute top-0 w-8 h-12 bg-gradient-to-b from-[#F2B950] to-[#F27127] rounded-t-lg"
                        animate={{ y: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    {Array.from({ length: 3 }).map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 rounded-full bg-[#808080]"
                            style={{ left: `${(i + 1) * 8}px`, top: "50%" }}
                            animate={{ y: [0, 30], opacity: [1, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2, ease: "easeIn" }}
                        />
                    ))}
                </div>
                <motion.span
                    className="text-[var(--text-secondary)] text-sm uppercase tracking-wider"
                    animate={{ y: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    Scroll to Explore
                </motion.span>
            </motion.div>

            {/* Optional: Bottom fade for content area, ensure it's above the main background gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--dark-bg)] to-transparent z-5" />
        </div>
    );
};

export default HeroSection;
