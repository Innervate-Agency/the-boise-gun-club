'use client';

// Import necessary libraries and components
import { FC, useRef } from 'react';
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
  loading: () => <div className="absolute inset-0 pointer-events-none" />
});

// Add Gallery component import
import GalleryPreview from '../components/home/GalleryPreview';
import ContactInfo from '../components/home/ContactInfo';

// Real gallery items with proper vintage feel
const galleryItems = [
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1566479179817-0ddb5fa87cd9?w=800&q=80",
        alt: "Clay Target Mid-Flight",
        year: "2023"
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=800&q=80",
        alt: "Trap Shooting Competition",
        year: "2023"
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1584819399096-8f9c5bdb0e19?w=800&q=80",
        alt: "Sporting Clays Course",
        year: "2022"
    },
    {
        id: 4,
        src: "https://images.unsplash.com/photo-1609205807490-b2f7e577e41c?w=800&q=80",
        alt: "Championship Trophy Display",
        year: "2023"
    },
];

// Facility highlights with real images
const facilityHighlights = [
    {
        title: "ELITE RANGES, LEGENDARY SHOTS",
        icon: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=200&q=80",
        description: "Ten trap fields, five skeet havens, and a sprawling 15-station sporting clays journey. Precision-lit for twilight dominance. This is where marksmen are made.",
        linkText: "Survey Your Domain",
        link: "/ranges"
    },
    {
        title: "MASTERY UNDER GUIDANCE",
        icon: "https://images.unsplash.com/photo-1566479179817-0ddb5fa87cd9?w=200&q=80",
        description: "Our NSCA certified sages don't just teach; they sculpt shooters. From your first clay to Olympic aspirations, we forge skill into art.",
        linkText: "Hone Your Craft",
        link: "/training"
    },
    {
        title: "THE ARENA OF CHAMPIONS",
        icon: "https://images.unsplash.com/photo-1584819399096-8f9c5bdb0e19?w=200&q=80",
        description: "Host to revered state championships and prestigious ATA registered clashes. Test your mettle in weekly leagues or vie for the coveted Governor's Cup.",
        linkText: "Enter the Gauntlet",
        link: "/competitions"
    }
];

// Updated club statistics
const clubStats = [
    { value: "127+", label: "YEARS SHAPING LEGENDS" },
    { value: "1,200+", label: "DISCERNING MEMBERS" },
    { value: "20", label: "FIELDS OF GLORY" },
    { value: "50+", label: "SIGNATURE SHOWDOWNS" }
];

// Real testimonials with authentic voice
const testimonials = [
    {
        quote: "Since '73, this ain't just a club, it's a proving ground. Best clays west of the Mississippi, period. These folks are the real deal.",
        name: "Buck 'Hawkeye' Henderson",
        title: "Founding Sharpshooter",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
    },
    {
        quote: "My old man brought me. I brought my boy. Three generations of Morrisons, dusting clays and makin' memories. This place is in our blood.",
        name: "Earl 'Deadeye' Morrison Jr.",
        title: "Legacy Member, Est. 1981",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80"
    }
];

// Enhanced glass facility card
const FacilityCard: FC<{
    title: string;
    icon: string;
    description: string;
    linkText: string;
    link: string;
    index: number;
}> = ({ title, icon, description, linkText, link, index }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
            className="group relative"
        >
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/10 to-[var(--accent-secondary)]/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Glass card */}
            <div className="relative glass-premium p-8 rounded-2xl overflow-hidden h-full hover:scale-[1.02] transition-all duration-500">
                {/* Subtle texture overlay */}
                <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none"
                     style={{ backgroundImage: `url('/images/Grid/Grid (2).webp')`, backgroundSize: 'cover' }} />
                
                {/* Content */}
                <div className="relative z-10">
                    <div className="flex items-center mb-6">
                        <div className="w-16 h-16 rounded-xl overflow-hidden mr-4 flex-shrink-0 border border-white/20 shadow-lg">
                            <Image src={icon} alt={title} width={64} height={64} className="object-cover" />
                        </div>
                        <h3 className="text-2xl text-white font-['Refrigerator_Deluxe'] uppercase tracking-wide">{title}</h3>
                    </div>
                    <p className="text-white/70 mb-6 font-['Museo'] leading-relaxed">{description}</p>
                    <Link
                        href={link}
                        className="inline-flex items-center text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] font-['Refrigerator_Deluxe'] text-sm uppercase tracking-wider transition-colors group/link"
                    >
                        {linkText}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

// Enhanced stat card with glass effect
const StatCard: FC<{ value: string; label: string; index: number }> = ({ value, label, index }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative group"
        >
            <div className="backdrop-blur-md bg-white/[0.05] border border-white/10 rounded-xl p-6 text-center hover:bg-white/[0.08] transition-all duration-300">
                <motion.div
                    className="text-5xl md:text-6xl font-bold text-[var(--accent-gold)] mb-2 font-['Refrigerator_Deluxe']"
                    initial={{ y: 20 }}
                    animate={isInView ? { y: 0 } : { y: 20 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                    {value}
                </motion.div>
                <div className="text-white/60 text-sm font-['Museo'] uppercase tracking-wider">{label}</div>
            </div>
        </motion.div>
    );
};

// Section wrapper with background effects
const Section: FC<{ 
    children: React.ReactNode;
    className?: string;
    background?: 'smoke' | 'grid' | 'gradient' | 'none';
    overlay?: boolean;
}> = ({ children, className = '', background = 'none', overlay = true }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    const bgStyles = {
        smoke: "bg-[url('/images/Smoke/Background_03.webp')] bg-cover bg-center",
        grid: "bg-[url('/images/Grid/Grid (1).webp')] bg-cover",
        gradient: "bg-gradient-to-br from-[#1a1614] via-[#121212] to-[#1a1614]",
        none: ""
    };

    return (
        <motion.section
            ref={ref}
            className={`relative py-24 md:py-32 ${className}`}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
        >
            {/* Background layer */}
            {background !== 'none' && (
                <div className={`absolute inset-0 ${bgStyles[background]} opacity-20`} />
            )}
            
            {/* Overlay gradient */}
            {overlay && (
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(18,18,18,0.8)] to-transparent" />
            )}
            
            {/* Content */}
            <div className="relative z-10 container mx-auto px-4">
                {children}
            </div>
        </motion.section>
    );
};

const HomePage: FC = () => {
    return (
        <main className="min-h-screen bg-[#121212] text-white overflow-x-hidden">
            {/* Hero Section - Simplified for performance */}
            <HeroSection />
            
            {/* Upcoming Events with smoke background */}
            <Section background="smoke" className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-transparent to-[#121212] opacity-90" />
                <div className="relative z-10">
                    <UpcomingEvents />
                </div>
            </Section>

            {/* Our Facilities with grid texture */}
            <Section background="grid">
                <div className="text-center mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-6xl font-bold text-[var(--accent-gold)] mb-4 font-['Refrigerator_Deluxe'] uppercase"
                    >
                        Our Facilities
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-xl text-white/60 max-w-3xl mx-auto font-['Museo']"
                    >
                        World-class shooting facilities designed for champions
                    </motion.p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {facilityHighlights.map((facility, index) => {
                        if (index === 0) {
                            return (
                                <div key={facility.title} className="md:col-span-3">
                                    <FacilityCard {...facility} index={index} />
                                </div>
                            );
                        }
                        return null; // Render remaining items in a different structure
                    })}
                </div>
                {facilityHighlights.length > 1 && (
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:max-w-4xl md:mx-auto">
                        {facilityHighlights.slice(1).map((facility, index) => (
                            <div key={facility.title} className="md:col-span-1">
                                <FacilityCard {...facility} index={index + 1} />
                            </div>
                        ))}
                    </div>
                )}
            </Section>

            {/* Gallery Preview with sophisticated glass */}
            <Section background="gradient" className="relative">
                <SmokeAnimation />
                <GalleryPreview galleryItems={galleryItems} />
            </Section>

            {/* Club Statistics with glass panels */}
            <Section background="smoke">
                <div className="text-center mb-12">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-6xl font-bold text-[var(--accent-gold)] mb-4 font-['Refrigerator_Deluxe'] uppercase"
                    >
                        By The Numbers
                    </motion.h2>
                </div>
                
                {/* Glass container for stats */}
                <div className="glass-premium rounded-3xl p-8 md:p-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                        {clubStats.map((stat, index) => (
                            <StatCard
                                key={index}
                                {...stat}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </Section>

            {/* Testimonials with layered glass */}
            <Section background="grid">
                <div className="max-w-5xl mx-auto">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-6xl font-bold text-[var(--accent-gold)] mb-12 font-['Refrigerator_Deluxe'] uppercase text-center"
                    >
                        Member Stories
                    </motion.h2>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index === 0 ? -50 : 50, y: index === 1 ? 20 : 0 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.15 }}
                                className="group"
                            >
                                {/* Background glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/5 to-transparent rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                
                                {/* Glass card */}
                                <div className="relative glass-premium p-8 rounded-2xl vintage-photo">
                                    <blockquote className="text-xl md:text-2xl text-white/80 mb-6 font-['Museo'] italic leading-relaxed">
                                        "{testimonial.quote}"
                                    </blockquote>
                                    <div className="flex items-center">
                                        <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-white/20">
                                            <Image 
                                                src={testimonial.image} 
                                                alt={testimonial.name} 
                                                width={56} 
                                                height={56} 
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <div className="text-[var(--accent-gold)] font-bold font-['Refrigerator_Deluxe'] uppercase">
                                                {testimonial.name}
                                            </div>
                                            <div className="text-white/50 text-sm font-['Museo']">
                                                {testimonial.title}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Contact Information with final glass treatment */}
            <Section background="smoke" overlay={false}>
                <ContactInfo />
            </Section>
        </main>
    );
};

export default HomePage;
