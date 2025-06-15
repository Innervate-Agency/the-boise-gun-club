'use client';

// Import necessary libraries and components
import { FC, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import HeroSection from '../components/home/HeroSection';
import UpcomingEvents from '../components/home/UpcomingEvents';
import UnsplashImage from '../components/ui/UnsplashImage';
import { getOptimizedImageUrl, getShootingSportsImage } from '../utils/imageUtils';
import Section from '../components/layout/Section';

// Dynamic imports for client-side only components
const ParticleAnimation = dynamic(() => import('../components/effects/ParticleAnimation'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 pointer-events-none"></div>
});

const DividerClayParticles = dynamic(() => import('../components/effects/DividerClayParticles'), {
  ssr: false
});

// ClayFragments removed - was causing ChunkLoadError

// Import MorningMistAnimation directly (no dynamic loading needed)
import MorningMistAnimation from '../components/effects/MorningMistAnimation';

// Add Gallery component import
import GalleryPreview from '../components/home/GalleryPreview';
import ContactInfo from '../components/home/ContactInfo';
import ClubRulesSection from '../components/home/ClubRulesSection';
import PricingSection from '../components/home/PricingSection';

// Real gallery items with Unsplash integration
const galleryItems = [
    {
        id: 1,
        src: getShootingSportsImage('events', { width: 800, height: 600 }),
        alt: "Clay Target Mid-Flight",
        year: "2023"
    },
    {
        id: 2,
        src: getShootingSportsImage('competition', { width: 800, height: 600 }),
        alt: "Trap Shooting Competition",
        year: "2023"
    },
    {
        id: 3,
        src: getShootingSportsImage('ranges', { width: 800, height: 600 }),
        alt: "Sporting Clays Course",
        year: "2022"
    },    {
        id: 4,
        src: getShootingSportsImage('competition', { width: 800, height: 600 }),
        alt: "Championship Trophy Display",
        year: "2023"
    },
];

// Facility highlights with Unsplash images
const facilityHighlights = [
    {
        title: "ELITE RANGES, LEGENDARY SHOTS",
        icon: getShootingSportsImage('ranges', { width: 200, height: 200 }),
        description: "Ten trap fields, five skeet havens, and a sprawling 15-station sporting clays journey. Precision-lit for twilight dominance. This is where marksmen are made.",
        linkText: "Survey Your Domain",
        link: "/ranges"
    },
    {
        title: "MASTERY UNDER GUIDANCE",
        icon: getShootingSportsImage('training', { width: 200, height: 200 }),
        description: "Our NSCA certified sages don't just teach; they sculpt shooters. From your first clay to Olympic aspirations, we forge skill into art.",
        linkText: "Hone Your Craft",
        link: "/training"
    },
    {
        title: "THE ARENA OF CHAMPIONS",
        icon: getShootingSportsImage('competition', { width: 200, height: 200 }),
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
const testimonials = [    {
        quote: "Since '73, this ain't just a club, it's a proving ground. Best clays west of the Mississippi, period. These folks are the real deal.",
        name: "Buck 'Hawkeye' Henderson",
        title: "Founding Sharpshooter",
        image: getOptimizedImageUrl('/images/hero-bg.webp', 'veteran shooter portrait', { width: 200, height: 200 })
    },
    {
        quote: "My old man brought me. I brought my boy. Three generations of Morrisons, dusting clays and makin' memories. This place is in our blood.",
        name: "Earl 'Deadeye' Morrison Jr.",
        title: "Legacy Member, Est. 1981",
        image: getOptimizedImageUrl('/images/events.webp', 'family shooting tradition', { width: 200, height: 200 })
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
                        <h3 className="text-2xl text-[var(--text-primary)] uppercase tracking-wide">{title}</h3>
                    </div>
                    <p className="text-[var(--text-primary)]/70 mb-6 leading-relaxed">{description}</p>
                    <Link
                        href={link}
                        className="inline-flex items-center text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] text-sm uppercase tracking-wider transition-colors group/link"
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
                    className="text-5xl md:text-6xl font-bold text-[var(--accent-secondary)] mb-2"
                    initial={{ y: 20 }}
                    animate={isInView ? { y: 0 } : { y: 20 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                    {value}
                </motion.div>
                <div className="text-[var(--text-primary)]/60 text-sm uppercase tracking-wider">{label}</div>
            </div>
        </motion.div>
    );
};

const HomePage: FC = () => {
    return (
        <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] overflow-x-hidden">
            {/* Hero Section - Full width */}
            <HeroSection />
              {/* Upcoming Events with mist background */}
            <Section background="mist" className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)] via-transparent to-[var(--bg-primary)] opacity-90" />
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
                        className="text-5xl md:text-6xl font-bold text-[var(--accent-gold)] mb-4 font-['Rajdhani'] uppercase"
                    >
                        Our Facilities
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto font-['Noto Sans']"
                    >
                        World-class shooting facilities designed for champions
                    </motion.p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {facilityHighlights.map((facility, index) => (
                        <FacilityCard key={facility.title} {...facility} index={index} />
                    ))}
                </div>
            </Section>            {/* Gallery Preview with sophisticated glass */}
            <Section background="gradient" className="relative">
                <MorningMistAnimation intensity="subtle" />
                {/* ClayFragments removed - was broken */}
                <GalleryPreview galleryItems={galleryItems} />
            </Section>

            {/* Club Rules Section */}
            <ClubRulesSection />

            {/* Pricing Section */}
            <PricingSection />

            {/* Club Statistics with glass panels */}
            <Section background="mist">
                <div className="text-center mb-12">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-6xl font-bold text-[var(--accent-gold)] mb-4 font-['Rajdhani'] uppercase"
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
                        className="text-5xl md:text-6xl font-bold text-[var(--accent-gold)] mb-12 font-['Rajdhani'] uppercase text-center"
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
                                    <blockquote className="text-xl md:text-2xl text-[var(--text-primary)]/80 mb-6 font-['Noto Sans'] italic leading-relaxed">
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
                                            <div className="text-[var(--accent-gold)] font-bold font-['Rajdhani'] uppercase">
                                                {testimonial.name}
                                            </div>
                                            <div className="text-[var(--text-primary)]/50 text-sm font-['Noto Sans']">
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
            <Section background="mist" overlay={false}>
                <ContactInfo />
            </Section>
        </main>
    );
};

export default HomePage;
