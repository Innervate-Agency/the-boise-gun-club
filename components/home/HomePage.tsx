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

            {/* Upcoming Events Section - Modern Glassmorphic */}
            <section className="relative py-20 overflow-hidden">
                {/* Background elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-[url('/images/Grid/Grid (2).jpg')] bg-cover opacity-15 mix-blend-screen retrowave-grid"></div>
                    <SmokeAnimation />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    {/* Section header */}
                    <div className="text-center mb-16">
                        <h2 className="font-['Refrigerator_Deluxe'] text-4xl md:text-5xl font-bold text-[var(--text-primary)] tracking-wider mb-4 psychedelic-text">
                            UPCOMING EVENTS
                        </h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] mx-auto"></div>
                    </div>

                    {/* Events - Horizontal glassmorphic cards */}
                    <div className="space-y-6">
                        {upcomingEvents.map((event, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="backdrop-blur-md bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded overflow-hidden shadow-lg relative"
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            >
                                <div className="flex flex-col md:flex-row">
                                    {/* Date column */}
                                    <div className="w-full md:w-40 flex-shrink-0 bg-[var(--accent-primary)]/10 p-4 flex flex-row md:flex-col items-center md:items-start justify-between md:justify-center text-[var(--accent-primary)]">
                                        <div className="text-center md:text-left">
                                            <div className="text-lg md:text-2xl font-bold font-['Refrigerator_Deluxe']">
                                                {event.date.split(' ')[1].replace(',', '')}
                                            </div>
                                            <div className="text-sm md:text-base font-['Museo']">
                                                {event.date.split(' ')[0]} {event.time}
                                            </div>
                                        </div>
                                        <div className="text-xs px-2 py-1 rounded bg-[var(--accent-primary)]/20 uppercase md:mt-3">
                                            {event.category}
                                        </div>
                                    </div>

                                    {/* Event content */}
                                    <div className="p-6 flex-grow">
                                        <h3 className="text-xl font-bold mb-2 text-[var(--text-primary)] font-['Refrigerator_Deluxe']">
                                            {event.title}
                                        </h3>
                                        <p className="text-[var(--text-secondary)] mb-4 text-sm font-['Museo']">
                                            {event.description}
                                        </p>
                                        <Link href="/events" className="text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] font-['Refrigerator_Deluxe'] text-sm flex items-center">
                                            LEARN MORE
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>

                                {/* Hover effect - subtle smoke */}
                                <div className="absolute inset-0 bg-[url('/images/Smoke/Background_01.jpg')] bg-cover opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
                            </motion.div>
                        ))}
                    </div>

                    {/* View all events button */}
                    <div className="mt-10 text-center">
                        <Link href="/events" className="inline-block px-8 py-3 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] hover:from-[var(--accent-secondary)] hover:to-[var(--accent-primary)] text-white rounded font-['Refrigerator_Deluxe'] shadow-lg transition-all duration-300 pulse">
                            VIEW ALL EVENTS
                        </Link>
                    </div>
                </div>
            </section>

            {/* Facility Highlights Section */}
            <section className="relative py-20 bg-[var(--bg-secondary)]">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-[url('/images/Grid/Grid (4).jpg')] bg-cover opacity-5 mix-blend-screen retrowave-grid"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="font-['Refrigerator_Deluxe'] text-4xl md:text-5xl font-bold text-[var(--text-primary)] tracking-wider mb-4 gradient-text">
                            FACILITY HIGHLIGHTS
                        </h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-[var(--accent-tertiary)] to-[var(--accent-quaternary)] mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

            {/* Stats & Testimonial Section */}
            <section className="relative py-20 bg-[var(--accent-darkred)]">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-[url('/images/Grid/Grid (3).jpg')] bg-cover opacity-5 mix-blend-screen"></div>
                    <SmokeAnimation />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Stats */}
                        <div>
                            <h2 className="font-['Refrigerator_Deluxe'] text-3xl font-bold text-white mb-10">
                                CLUB STATISTICS
                            </h2>
                            <div className="grid grid-cols-2 gap-8">
                                {clubStats.map((stat, index) => (
                                    <StatCard
                                        key={index}
                                        value={stat.value}
                                        label={stat.label}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Testimonial */}
                        <div>
                            <h2 className="font-['Refrigerator_Deluxe'] text-3xl font-bold text-white mb-10">
                                MEMBER TESTIMONIAL
                            </h2>
                            <div className="backdrop-blur-md bg-white/20 border border-white/20 p-6 rounded shadow-lg relative glass-effect">
                                {/* Grid pattern within glass panel */}
                                <div className="absolute inset-0 bg-[url('/images/Grid/Grid (1).jpg')] bg-cover opacity-5 mix-blend-overlay"></div>

                                <div className="relative z-10">
                                    <div className="text-[var(--accent-gold)] text-4xl leading-none mb-2">"</div>
                                    <p className="text-white italic mb-6 font-['Museo']">
                                        {testimonial.quote}
                                    </p>
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 rounded-full overflow-hidden border border-[var(--accent-gold)]/30">
                                            <Image
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                width={60}
                                                height={60}
                                                className="object-cover vintage-filter"
                                            />
                                        </div>
                                        <div className="ml-3">
                                            <div className="text-white font-['Refrigerator_Deluxe']">{testimonial.name}</div>
                                            <div className="text-[var(--accent-gold)] text-sm font-['Museo']">{testimonial.title}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Photo Gallery Preview */}
            <section className="relative py-20 bg-[var(--bg-primary)]">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-[url('/images/Grid/Grid (2).jpg')] bg-cover opacity-10 mix-blend-screen retrowave-grid"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="font-['Refrigerator_Deluxe'] text-4xl md:text-5xl font-bold tracking-wider mb-4 gradient-text">
                            PHOTO GALLERY
                        </h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-[var(--accent-orangered)] to-[var(--accent-yellow)] mx-auto"></div>
                    </div>

                    <PhotoGallery photos={galleryPhotos} />

                    <div className="text-center mt-12">
                        <Link href="/gallery" className="inline-block px-8 py-3 bg-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/90 text-white backdrop-blur-sm rounded transition-all duration-300 hover:scale-105">
                            VIEW FULL GALLERY
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-16 bg-gradient-to-r from-[var(--accent-orangered)] to-[var(--accent-primary)]">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <h2 className="font-['Refrigerator_Deluxe'] text-3xl font-bold text-white mb-2">
                                BECOME A MEMBER TODAY
                            </h2>
                            <p className="text-white/90 max-w-xl font-['Museo']">
                                Join our community and enjoy exclusive access to our ranges, events, and training programs.
                            </p>
                        </div>
                        <div>
                            <Link href="/membership" className="inline-block px-8 py-3 bg-[var(--accent-gold)] text-[var(--accent-darkred)] hover:bg-[var(--accent-yellow)] rounded font-['Refrigerator_Deluxe'] shadow-lg transition-all duration-300 hover:rotate-1">
                                JOIN NOW
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Retro sun effect */}
                <div className="absolute bottom-0 left-0 w-full h-4 bg-[url('/images/Grid/Grid (3).jpg')] bg-repeat-x opacity-30"></div>
            </section>
        </div>
    );
};

export default HomePage; 