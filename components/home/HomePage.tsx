'use client';

import { FC, useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import HeroSection from './HeroSection';
import EventCard from './EventCard';
import PhotoGallery from './PhotoGallery';
import Link from 'next/link';
import Image from 'next/image';

// Sample data - replace with actual data from your API/backend
const upcomingEvents = [
    {
        title: "Annual Trap Shooting Competition",
        date: "July 15, 2024",
        time: "9:00 AM",
        category: "competition" as const,
        description: "Join us for our biggest event of the year! Compete in various categories and win amazing prizes.",
        imageUrl: "/images/events/trap-shooting.jpg"
    },
    {
        title: "Beginner Shotgun Safety Course",
        date: "July 20, 2024",
        time: "10:00 AM",
        category: "training" as const,
        description: "Comprehensive safety course for new shooters. Covers firearm safety, range rules, and basic shooting techniques. All equipment provided.",
        imageUrl: "/images/events/safety-course.jpg"
    },
    {
        title: "Monthly Club Meeting & Potluck",
        date: "July 25, 2024",
        time: "6:00 PM",
        category: "social" as const,
        description: "Monthly meeting to discuss club business, upcoming events, and share a meal together. Bring your favorite dish!",
        imageUrl: "/images/events/club-meeting.jpg"
    },
];

// Sample photos for gallery
const galleryPhotos = [
    {
        id: 1,
        src: "/images/gallery/clay-shooting-1.jpg",
        alt: "Championship Winner 1978",
        year: "1978"
    },
    {
        id: 2,
        src: "/images/gallery/clubhouse-vintage.jpg",
        alt: "Original Clubhouse",
        year: "1975"
    },
    {
        id: 3,
        src: "/images/gallery/trap-range.jpg",
        alt: "Trap Range Opening Day",
        year: "1982"
    },
    {
        id: 4,
        src: "/images/gallery/team-photo.jpg",
        alt: "Club Team",
        year: "1979"
    },
];

// Facility highlights
const facilityHighlights = [
    {
        title: "RANGES",
        icon: "/images/clay1.jpg",
        description: "Our facility features 10 trap fields, 5 skeet fields, and a 15-station sporting clays course, all equipped with state-of-the-art target throwing systems.",
        linkText: "Explore Our Ranges",
        link: "/ranges"
    },
    {
        title: "TRAINING",
        icon: "/images/shotgun1.jpg",
        description: "Professional instruction for all skill levels. From beginners to advanced competitors, our certified instructors will help you improve your technique.",
        linkText: "Training Programs",
        link: "/training"
    },
    {
        title: "COMPETITIONS",
        icon: "/images/range1.jpg",
        description: "We host ATA registered shoots, local competitions, and championship events throughout the year. Test your skills against the best in Idaho.",
        linkText: "Competition Schedule",
        link: "/competitions"
    }
];

// Club statistics
const clubStats = [
    { value: "125", label: "YEARS OF HISTORY" },
    { value: "250+", label: "ACTIVE MEMBERS" },
    { value: "15", label: "SHOOTING LANES" },
    { value: "30+", label: "ANNUAL EVENTS" }
];

// Featured testimonial
const testimonial = {
    quote: "The Boise Gun Club has been my second home for over 30 years. The community here is unmatched and the facilities are world-class.",
    name: "John Winchester",
    title: "Member Since 1992",
    image: "/images/members/john-winchester.jpg"
};

// Subtle smoke animation component
const SmokeAnimation: FC = () => {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {Array.from({ length: 3 }).map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute opacity-10"
                    style={{
                        width: '300px',
                        height: '300px',
                        left: `${20 + i * 30}%`,
                        top: `${30 + i * 20}%`,
                        background: `url('/images/Smoke/Background_0${i + 1}.jpg')`,
                        backgroundSize: 'cover',
                        borderRadius: '50%',
                        filter: 'blur(20px)'
                    }}
                    animate={{
                        y: [0, -50, 0],
                        opacity: [0.05, 0.1, 0.05],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration: 10 + i * 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            ))}
        </div>
    );
};

// Animated section divider
const SectionDivider: FC = () => {
    return (
        <div className="flex items-center justify-center my-10">
            <div className="h-px w-16 bg-[#F25D27]/30"></div>
            <div className="mx-4 h-2 w-2 rounded-full bg-[#F25D27]/50"></div>
            <div className="h-px w-16 bg-[#F25D27]/30"></div>
        </div>
    );
};

// Glassmorphic facility highlight card
const FacilityCard: FC<{
    title: string;
    icon: string;
    description: string;
    linkText: string;
    link: string;
}> = ({ title, icon, description, linkText, link }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: false, amount: 0.2 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-md bg-white/90 border border-[var(--accent-primary)]/20 p-6 rounded shadow-lg relative overflow-hidden h-full glass-effect"
        >
            {/* Subtle grid pattern within glass panel */}
            <div className="absolute inset-0 bg-[url('/images/Grid/Grid (1).jpg')] bg-cover opacity-5 mix-blend-overlay pointer-events-none"></div>

            <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3 flex-shrink-0 border border-[var(--accent-primary)]/30">
                    <Image src={icon} alt={title} width={60} height={60} className="object-cover" />
                </div>
                <h3 className="text-xl text-[var(--text-primary)] font-['Refrigerator_Deluxe']">{title}</h3>
            </div>

            <p className="text-[var(--text-secondary)] mb-4 text-sm font-['Museo']">{description}</p>

            <Link href={link} className="text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] font-['Refrigerator_Deluxe'] text-sm flex items-center">
                {linkText}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </Link>
        </motion.div>
    );
};

// Animated statistic component
const StatCard: FC<{ value: string; label: string }> = ({ value, label }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="text-center"
        >
            <motion.div
                className="text-4xl md:text-5xl font-bold text-[var(--accent-gold)] mb-1 font-['Refrigerator_Deluxe']"
                initial={{ y: 20 }}
                animate={isInView ? { y: 0 } : { y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {value}
            </motion.div>
            <div className="text-white text-sm font-['Museo']">{label}</div>
        </motion.div>
    );
};

const HomePage: FC = () => {
    return (
        <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
            {/* Hero Section */}
            <HeroSection />

            {/* Upcoming Events Section - Modern Glassmorphism */}
            <section className="relative py-32 overflow-hidden">
                {/* Background elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-[url('/images/Grid/Grid (2).jpg')] bg-cover opacity-15 mix-blend-screen retrowave-grid"></div>
                    <SmokeAnimation />

                    {/* Enhanced glow orbs */}
                    <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[var(--accent-primary)]/5 to-[var(--accent-secondary)]/10 blur-[120px]"></div>
                    <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[var(--accent-darkred)]/5 to-[var(--accent-gold)]/10 blur-[150px]"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    {/* Section header with 3D typography */}
                    <div className="text-center mb-24">
                        <div className="inline-block relative">
                            <h2 className="font-heading text-5xl md:text-6xl font-bold tracking-wider mb-6 uppercase psychedelic-text">
                                Upcoming Events
                            </h2>
                            <div className="absolute -bottom-4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-primary)] to-transparent"></div>
                        </div>
                        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto mt-6 font-body text-lg">
                            Join us for these exciting upcoming events at the Boise Gun Club
                        </p>
                    </div>

                    {/* Events - Modern horizontal cards with mica effect */}
                    <div className="space-y-8">
                        {upcomingEvents.map((event, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.7, delay: index * 0.1 }}
                                className="backdrop-blur-xl bg-[rgba(18,18,18,0.5)] border border-[rgba(255,255,255,0.08)] rounded-2xl overflow-hidden shadow-2xl relative group"
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            >
                                {/* Hover glow effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-[var(--accent-primary)]/0 via-[var(--accent-primary)]/5 to-[var(--accent-primary)]/0"></div>

                                {/* Decorative gradient line */}
                                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--accent-primary)] to-transparent opacity-40"></div>

                                <div className="flex flex-col md:flex-row">
                                    {/* Date column with enhanced styling */}
                                    <div className="w-full md:w-52 flex-shrink-0 bg-gradient-to-br from-[var(--accent-primary)]/20 to-[var(--accent-secondary)]/5 p-6 flex flex-row md:flex-col items-center md:items-start justify-between md:justify-center text-[var(--accent-primary)]">
                                        <div className="text-center md:text-left">
                                            <div className="text-2xl md:text-3xl font-bold font-heading mb-1">
                                                {event.date.split(' ')[1].replace(',', '')}
                                            </div>
                                            <div className="text-base md:text-lg font-body opacity-80">
                                                {event.date.split(' ')[0]} {event.time}
                                            </div>
                                        </div>
                                        <div className="text-xs px-3 py-1.5 rounded-full bg-[var(--accent-primary)]/20 uppercase mt-3 font-heading tracking-wider">
                                            {event.category}
                                        </div>
                                    </div>

                                    {/* Event content */}
                                    <div className="p-8 flex-grow">
                                        <h3 className="text-2xl font-bold mb-3 text-[var(--text-primary)] font-heading">
                                            {event.title}
                                        </h3>
                                        <p className="text-[var(--text-secondary)] mb-4 text-base font-body leading-relaxed">
                                            {event.description}
                                        </p>
                                        <Link href="/events" className="group inline-flex items-center font-heading text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] transition-colors duration-300">
                                            <span>LEARN MORE</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* View all events button with modern hover effect */}
                    <div className="mt-16 text-center">
                        <Link href="/events" className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white rounded-lg font-heading shadow-lg overflow-hidden">
                            <span className="relative z-10">VIEW ALL EVENTS</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                            {/* Button glow */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-x-0 group-hover:scale-x-100 bg-white/20 origin-left"></div>
                            {/* External glow */}
                            <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg blur-md bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]"></div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Divider with clay target animation */}
            <div className="relative h-32 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--accent-primary)]/30 to-transparent"></div>
                    <div className="absolute w-12 h-12 bg-[var(--bg-primary)] rounded-full flex items-center justify-center border border-[var(--accent-primary)]/20">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--accent-primary)]/80 to-[var(--accent-secondary)]/80"></div>
                    </div>
                </div>
            </div>

            {/* Facility Highlights Section - Modern Cards with Depth */}
            <section className="relative py-32 bg-[var(--bg-secondary)]">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-[url('/images/Grid/Grid (4).jpg')] bg-cover opacity-5 mix-blend-screen retrowave-grid"></div>
                    {/* Enhanced lighting effects */}
                    <div className="absolute top-0 right-0 left-0 h-[30%] bg-gradient-to-b from-[var(--accent-tertiary)]/5 to-transparent"></div>
                    <div className="absolute bottom-0 right-0 left-0 h-[30%] bg-gradient-to-t from-[var(--accent-quaternary)]/5 to-transparent"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-24">
                        <div className="md:max-w-2xl">
                            <h2 className="font-heading text-5xl md:text-6xl font-bold tracking-wider mb-6 gradient-text text-right md:text-left">
                                FACILITY HIGHLIGHTS
                            </h2>
                            <div className="h-1 w-24 bg-gradient-to-r from-[var(--accent-tertiary)] to-[var(--accent-quaternary)] md:ml-0 ml-auto"></div>
                        </div>
                        <p className="text-[var(--text-secondary)] md:max-w-md mt-4 md:mt-0 text-lg font-body text-right md:text-right">
                            Our world-class facilities provide the perfect environment for shooters of all skill levels
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {facilityHighlights.map((item, index) => (
                            <FacilityCard
                                key={index}
                                title={item.title}
                                icon={item.icon}
                                description={item.description}
                                linkText={item.linkText}
                                link={item.link}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Divider with angled design */}
            <div className="relative h-32 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 skew-y-2 bg-[var(--accent-darkred)]"></div>
                </div>
            </div>

            {/* Stats & Testimonial Section - Elevated Design */}
            <section className="relative py-32 bg-[var(--accent-darkred)]">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-[url('/images/Grid/Grid (3).jpg')] bg-cover opacity-10 mix-blend-screen"></div>
                    <SmokeAnimation />
                    {/* Enhanced dot matrix pattern */}
                    <div className="absolute inset-0 opacity-5"
                        style={{
                            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
                            backgroundSize: '40px 40px'
                        }}></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                        {/* Stats with enhanced visualization */}
                        <div>
                            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-12">
                                CLUB STATISTICS
                            </h2>
                            <div className="grid grid-cols-2 gap-x-8 gap-y-12">
                                {clubStats.map((stat, index) => (
                                    <StatCard
                                        key={index}
                                        value={stat.value}
                                        label={stat.label}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Testimonial with premium mica design */}
                        <div>
                            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-12">
                                MEMBER TESTIMONIAL
                            </h2>
                            <div className="backdrop-blur-xl bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.1)] p-8 rounded-2xl shadow-2xl relative overflow-hidden">
                                {/* Decorative elements */}
                                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                                <div className="absolute -right-14 -top-14 w-28 h-28 rounded-full bg-gradient-to-br from-[var(--accent-gold)]/20 to-transparent blur-2xl"></div>

                                <div className="relative z-10">
                                    <div className="text-[var(--accent-gold)] text-6xl leading-none mb-2 font-heading">"</div>
                                    <p className="text-white text-lg italic mb-8 font-body leading-relaxed">
                                        {testimonial.quote}
                                    </p>
                                    <div className="flex items-center">
                                        <div className="w-14 h-14 rounded-full overflow-hidden border border-[var(--accent-gold)]/40 shadow-lg">
                                            <Image
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                width={70}
                                                height={70}
                                                className="object-cover vintage-filter"
                                            />
                                        </div>
                                        <div className="ml-4">
                                            <div className="text-white text-lg font-heading">{testimonial.name}</div>
                                            <div className="text-[var(--accent-gold)] text-sm font-body">{testimonial.title}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Divider with clay target animation */}
            <div className="relative h-32 overflow-hidden bg-gradient-to-b from-[var(--accent-darkred)] to-[var(--bg-primary)]">
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {/* Clay target particles */}
                    {Array.from({ length: 5 }).map((_, i) => (
                        <motion.div
                            key={`clay-${i}`}
                            className="absolute w-1 h-1 bg-[var(--accent-primary)] rounded-full"
                            style={{
                                left: `${30 + Math.random() * 40}%`,
                                top: '100%',
                                opacity: 0.6 + Math.random() * 0.4,
                                boxShadow: '0 0 8px 2px rgba(242, 135, 5, 0.3)'
                            }}
                            animate={{
                                y: [0, -120 - Math.random() * 40],
                                x: [0, (Math.random() * 60) - 30],
                                opacity: [0.8, 0],
                                scale: [1, 0.5]
                            }}
                            transition={{
                                duration: 2 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 3
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Photo Gallery Preview - Modern Immersive Layout */}
            <section className="relative py-32 bg-[var(--bg-primary)]">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-[url('/images/Grid/Grid (2).jpg')] bg-cover opacity-10 mix-blend-screen retrowave-grid"></div>
                    {/* Enhanced lighting effects */}
                    <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[var(--accent-orangered)]/10 to-transparent"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-24">
                        <div>
                            <h2 className="font-heading text-5xl md:text-6xl font-bold tracking-wider mb-6 gradient-text">
                                PHOTO GALLERY
                            </h2>
                            <div className="h-1 w-24 bg-gradient-to-r from-[var(--accent-orangered)] to-[var(--accent-yellow)]"></div>
                        </div>
                        <p className="text-[var(--text-secondary)] md:max-w-sm mt-4 md:mt-0 text-lg font-body">
                            Explore the rich history and vibrant community of the Boise Gun Club
                        </p>
                    </div>

                    <PhotoGallery photos={galleryPhotos} />

                    <div className="text-center mt-16">
                        <Link href="/gallery" className="group relative inline-flex items-center gap-2 px-8 py-4 bg-[var(--accent-primary)]/90 hover:bg-[var(--accent-primary)] text-white rounded-lg font-heading transition-all duration-300 overflow-hidden">
                            <span className="relative z-10">VIEW FULL GALLERY</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                            {/* Hover effect */}
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-primary)]/80 transition-transform duration-500"></div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section - Premium Gradient Design */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-orangered)] to-[var(--accent-primary)]">
                    {/* Animated backdrop pattern */}
                    <div className="absolute inset-0 opacity-20"
                        style={{
                            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255, 255, 255, 0.1) 20px, rgba(255, 255, 255, 0.1) 40px)`,
                            backgroundSize: '120px 120px',
                        }}
                    ></div>
                </div>

                {/* Floating orbs */}
                <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-white/5 blur-3xl"></div>
                <div className="absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full bg-[var(--accent-yellow)]/10 blur-3xl"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                        <div className="md:max-w-xl">
                            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
                                BECOME A MEMBER TODAY
                            </h2>
                            <p className="text-white/90 text-lg font-body leading-relaxed">
                                Join our community and enjoy exclusive access to our ranges, events, and training programs. Experience the tradition and excellence that defines the Boise Gun Club.
                            </p>
                        </div>
                        <div className="flex-shrink-0">
                            <Link href="/membership" className="group relative inline-block px-10 py-5 bg-[var(--accent-gold)] text-[var(--accent-darkred)] hover:bg-[var(--accent-yellow)] rounded-lg font-heading text-xl shadow-2xl transition-all duration-300 overflow-hidden">
                                <span className="relative z-10">JOIN NOW</span>
                                {/* Button glow */}
                                <div className="absolute inset-0 -translate-y-full group-hover:translate-y-0 bg-white/20 transition-transform duration-300"></div>
                                {/* External glow */}
                                <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 scale-105 transition-opacity duration-300 rounded-lg blur-md bg-[var(--accent-gold)]"></div>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom grid effect */}
                <div className="absolute bottom-0 left-0 w-full h-4 bg-[url('/images/Grid/Grid (3).jpg')] bg-repeat-x opacity-30"></div>
            </section>
        </div>
    );
};

export default HomePage; 
