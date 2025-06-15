'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const museumArtifacts = [
    {
        title: "Original Club Charter - 1973",
        description: "The founding document that established Boise Gun Club as Idaho's premier shotgun sports facility.",
        year: "1973",
        category: "Documents"
    },
    {
        title: "Champion Trophy Collection",
        description: "Over 200 trophies from state, regional, and national championships won by club members.",
        year: "1973-Present",
        category: "Awards"
    },
    {
        title: "Vintage Winchester Model 12",
        description: "Original trap gun used by founding member 'Hawkeye' Henderson to set club records.",
        year: "1950s",
        category: "Firearms"
    },
    {
        title: "Historic Trap House Equipment",
        description: "Original mechanical trap throwers that served the club for over three decades.",
        year: "1970s-2000s",
        category: "Equipment"
    },
    {
        title: "Championship Photographs",
        description: "Gallery of memorable moments from five decades of competitive shooting excellence.",
        year: "1973-Present",
        category: "Photography"
    },
    {
        title: "Club Member Hall of Fame",
        description: "Honoring the legends who shaped our club's rich tradition of marksmanship and sportsmanship.",
        year: "1973-Present",
        category: "Legacy"
    }
];

const timelineMilestones = [
    {
        year: "1973",
        title: "Club Founded",
        description: "A group of dedicated shooters established Boise Gun Club with a vision of creating Idaho's finest shotgun sports facility."
    },
    {
        year: "1978",
        title: "First State Championship",
        description: "BGC member Buck Henderson wins the first of many Idaho State Trap Championships, putting the club on the competitive map."
    },
    {
        year: "1985",
        title: "Facility Expansion",
        description: "Added skeet fields and sporting clays course, transforming BGC into a comprehensive shotgun sports destination."
    },
    {
        year: "1992",
        title: "National Recognition",
        description: "Hosted the Pacific Northwest Regional Championships, establishing BGC as a premier competition venue."
    },
    {
        year: "2010",
        title: "Modern Upgrades",
        description: "Complete facility modernization with new trap houses, electronic scoring, and improved safety systems."
    },
    {
        year: "2023",
        title: "50th Anniversary",
        description: "Celebrating five decades of excellence with over 500 active members and countless champions."
    }
];

export default function MuseumPage() {
    const heroRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);
    const artifactsRef = useRef<HTMLDivElement>(null);
    
    const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
    const timelineInView = useInView(timelineRef, { once: true, amount: 0.2 });
    const artifactsInView = useInView(artifactsRef, { once: true, amount: 0.2 });

    return (
        <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] pt-20">
            {/* Hero Section */}
            <section className="section-spacing bg-gradient-to-br from-[var(--accent-primary)]/10 via-[var(--bg-primary)] to-[var(--accent-secondary)]/5 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0"
                         style={{ 
                             backgroundImage: `url('/images/Grid/Grid (2).webp')`, 
                             backgroundSize: '150px 150px',
                             backgroundRepeat: 'repeat'
                         }} />
                </div>
                
                <div className="stripe-container relative z-10">
                    <motion.div
                        ref={heroRef}
                        initial={{ opacity: 0, y: 30 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-[var(--accent-primary)] mb-6">
                            CLUB MUSEUM
                        </h1>
                        <h2 className="text-3xl md:text-4xl text-[var(--text-secondary)] mb-8">
                            Preserving 50 Years of Excellence
                        </h2>
                        <p className="text-xl text-[var(--text-primary)] max-w-4xl mx-auto leading-relaxed">
                            Step into our museum and discover the rich heritage of Boise Gun Club. From our founding in 1973 
                            to becoming Idaho's premier shotgun sports facility, every artifact tells the story of dedication, 
                            sportsmanship, and the pursuit of excellence that defines our community.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-center"
                    >
                        <div className="inline-flex space-x-4">
                            <Link
                                href="/about"
                                className="px-8 py-4 bg-[var(--accent-primary)] text-white rounded-lg hover:bg-[var(--accent-secondary)] transition-colors uppercase tracking-wide"
                            >
                                Learn Our Story
                            </Link>
                            <Link
                                href="/membership"
                                className="px-8 py-4 border-2 border-[var(--accent-primary)] text-[var(--accent-primary)] rounded-lg hover:bg-[var(--accent-primary)] hover:text-white transition-colors uppercase tracking-wide"
                            >
                                Join the Legacy
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="section-spacing bg-[var(--bg-secondary)] relative">
                <div className="stripe-container">
                    <motion.div
                        ref={timelineRef}
                        initial={{ opacity: 0, y: 30 }}
                        animate={timelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-[var(--accent-primary)] mb-4">
                            CLUB TIMELINE
                        </h2>
                        <h3 className="text-2xl md:text-3xl text-[var(--text-secondary)] mb-6">
                            Five Decades of Milestones
                        </h3>
                        <p className="text-lg text-[var(--text-primary)] max-w-3xl mx-auto leading-relaxed">
                            From humble beginnings to championship glory, explore the key moments that shaped 
                            Boise Gun Club into the institution it is today.
                        </p>
                    </motion.div>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[var(--accent-primary)] opacity-20"></div>
                        
                        <div className="space-y-16">
                            {timelineMilestones.map((milestone, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    animate={timelineInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    transition={{ duration: 0.8, delay: index * 0.2 }}
                                    className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                                >
                                    {/* Content */}
                                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                                        <div className="stripe-card glass-card">
                                            <div className="text-3xl font-bold text-[var(--accent-primary)] mb-2">
                                                {milestone.year}
                                            </div>
                                            <h4 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                                                {milestone.title}
                                            </h4>
                                            <p className="text-[var(--text-secondary)] leading-relaxed">
                                                {milestone.description}
                                            </p>
                                        </div>
                                    </div>
                                    
                                    {/* Timeline dot */}
                                    <div className="w-2/12 flex justify-center">
                                        <div className="w-6 h-6 bg-[var(--accent-primary)] rounded-full border-4 border-[var(--bg-primary)] relative z-10"></div>
                                    </div>
                                    
                                    {/* Spacer */}
                                    <div className="w-5/12"></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Museum Artifacts */}
            <section className="section-spacing bg-[var(--bg-primary)] relative">
                <div className="stripe-container">
                    <motion.div
                        ref={artifactsRef}
                        initial={{ opacity: 0, y: 30 }}
                        animate={artifactsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-[var(--accent-primary)] mb-4">
                            MUSEUM COLLECTION
                        </h2>
                        <h3 className="text-2xl md:text-3xl text-[var(--text-secondary)] mb-6">
                            Artifacts of Excellence
                        </h3>
                        <p className="text-lg text-[var(--text-primary)] max-w-3xl mx-auto leading-relaxed">
                            Each piece in our collection represents a chapter in the ongoing story of Boise Gun Club. 
                            These artifacts preserve the memories, achievements, and spirit of our shooting community.
                        </p>
                    </motion.div>

                    <div className="stripe-grid">
                        {museumArtifacts.map((artifact, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={artifactsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className="stripe-card glass-card"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <span className="px-3 py-1 bg-[var(--accent-primary)] text-white text-xs rounded-full uppercase tracking-wide">
                                        {artifact.category}
                                    </span>
                                    <span className="text-[var(--text-secondary)] text-sm">
                                        {artifact.year}
                                    </span>
                                </div>
                                <h4 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                                    {artifact.title}
                                </h4>
                                <p className="text-[var(--text-secondary)] leading-relaxed">
                                    {artifact.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="section-spacing bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="stripe-container relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            BECOME PART OF THE STORY
                        </h2>
                        <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                            The next chapter in Boise Gun Club's history is being written today. 
                            Join our community and help us continue the tradition of excellence for future generations.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/membership"
                                className="px-8 py-4 bg-white text-[var(--accent-primary)] rounded-lg hover:bg-gray-100 transition-colors uppercase tracking-wide"
                            >
                                Join Today
                            </Link>
                            <Link
                                href="/contact"
                                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-[var(--accent-primary)] transition-colors uppercase tracking-wide"
                            >
                                Visit Museum
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
