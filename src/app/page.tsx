'use client';

// Import necessary libraries and components
import { FC, useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import HeroSection from '../components/home/HeroSection';
import UpcomingEvents from '../components/home/UpcomingEvents';

// Dynamic imports for client-side only components
const ParticleAnimation = dynamic(() => import('../components/effects/ParticleAnimation'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 pointer-events-none"></div>
});

const DividerClayParticles = dynamic(() => import('../components/effects/DividerClayParticles'), {
  ssr: false
});

// Import SmokeAnimation with dynamic loading
const SmokeAnimation = dynamic(() => import('../components/effects/SmokeAnimation'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 pointer-events-none"></div>
});

// Add Gallery component import
import GalleryPreview from '../components/home/GalleryPreview';

// Sample data - replace with actual data from your API/backend
const upcomingEvents = [
    {
        id: 1,
        title: "Annual Championship",
        date: "2023-11-15",
        location: "Main Range",
    },
    {
        id: 2,
        title: "Winter League",
        date: "2023-12-01",
        location: "Clubhouse",
    },
];      

// Gallery
const galleryItems = [
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
// This is placeholder data. Replace with dynamic content from an API or database if needed.
const testimonial = {
    quote: "The Boise Gun Club has been my second home for over 30 years. The community here is unmatched and the facilities are world-class.",
    name: "John Winchester",
    title: "Member Since 1992",
    image: "/images/members/john-winchester.jpg"
};

// Inline SmokeAnimation component removed - using dynamically imported component instead

// Glassmorphic facility highlight card
const FacilityCard: FC<{
    title: string;
    icon: string;
    description: string;
    linkText: string;
    link: string;
}> = ({ title, icon, description, linkText, link }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

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
                <h3 className="text-xl text-[var(--text-primary)] font-refrigerator">{title}</h3>
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
    // Add client-side rendering state
    const [isMounted, setIsMounted] = useState(false);
    
    useEffect(() => {
        setIsMounted(true);
    }, []);
    
    return (
        <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
            {/* Hero Section */}
            <HeroSection />
            
            {/* Upcoming Events Section */}
            <UpcomingEvents />

            {/* Gallery Section */}
            <GalleryPreview galleryItems={galleryItems} />

            {/* Divider with clay target animation */}
            <div className="relative h-32 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--accent-primary)]/30 to-transparent"></div>
                </div>
            </div>
            
            {/* Facility Highlights Section */}
            <section className="relative py-24 overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-5xl font-bold mb-4">OUR FACILITIES</h2>
                        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto font-body text-lg">
                            Experience our state-of-the-art shooting facilities designed for sportsmen of all skill levels
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                    <ParticleAnimation 
                        colors={['#FFD700', '#F5F5DC', '#FFB700', '#FFF8DC']} 
                        count={10} 
                        maxDistance={60}
                        size={3}
                        speed={2}
                    />
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
                                    <div className="text-[var(--accent-gold)] text-6xl leading-none mb-2 font-heading">&ldquo;</div>
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
                    {/* Clay target particles - client-side only */}
                    {isMounted && <DividerClayParticles />}
                </div>
            </div>

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
                        <Link href="/membership" className="joinNowButton">
                            <span className="relative z-10">JOIN NOW</span>
                        </Link>
                    </div>
                </div>

                {/* Bottom grid effect */}
                <div className="absolute bottom-0 left-0 w-full h-4 bg-[url('/images/Grid/Grid (3).jpg')] bg-repeat-x opacity-30"></div>
            </section>
        </div>
    );
};

export default HomePage;
