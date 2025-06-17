'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

const pricingFeatures = [
    "Unlimited access to all shooting ranges",
    "Priority event registration",
    "Guest privileges (2 guests per visit)",
    "Equipment storage locker",
    "Monthly club newsletter",
    "Voting rights in club decisions",
    "Access to members-only events",
    "Discounted instruction rates"
];

export default function PricingSection() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <section className="relative py-16 sm:py-24 md:py-32 bg-[var(--bg-primary)]">
            <div className="container mx-auto px-4">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className="font-['Rajdhani'] text-4xl sm:text-5xl md:text-6xl uppercase text-[var(--text-primary)] mb-4">
                        Shooting <span className="text-[var(--accent-gold)]">Rates</span>
                    </h2>
                    <p className="text-[var(--text-secondary)] text-base sm:text-lg font-['Noto Sans'] max-w-3xl mx-auto">
                        Choose from our competitive day rates or unlock significant savings with an annual membership. 
                        Both options include access to our world-class trap, skeet, and sporting clays facilities.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
                    {/* Day Rate Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-[var(--bg-secondary)] rounded-2xl p-6 sm:p-8 shadow-lg"
                    >
                        <h3 className="font-['Rajdhani'] text-2xl font-bold text-[var(--text-primary)] mb-2">
                            DAY RATE
                        </h3>
                        <div className="text-4xl sm:text-5xl font-bold text-[var(--accent-gold)] mb-1">$8</div>
                        <div className="text-[var(--text-secondary)] font-['Noto Sans'] mb-8">per round of 25</div>
                        
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-[var(--accent-gold)]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="font-['Noto Sans'] text-[var(--text-secondary)]">Access to all ranges</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-[var(--accent-gold)]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="font-['Noto Sans'] text-[var(--text-secondary)]">Equipment rental available</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-[var(--accent-gold)]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="font-['Noto Sans'] text-[var(--text-secondary)]">Professional instruction</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-[var(--accent-gold)]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="font-['Noto Sans'] text-[var(--text-secondary)]">Safe, welcoming environment</span>
                            </div>
                        </div>

                        <Link 
                            href="/visit"
                            className="block w-full mt-8 px-6 py-3 border-2 border-[var(--accent-primary)] text-[var(--accent-primary)] 
                                     rounded-lg hover:bg-[var(--accent-primary)] hover:text-[var(--text-primary)] transition-all duration-300 
                                     font-['Rajdhani'] uppercase tracking-wide text-center"
                        >
                            Visit Today
                        </Link>
                    </motion.div>

                    {/* Membership Rate Card - Featured */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="bg-[var(--bg-secondary)] rounded-2xl p-6 sm:p-8 shadow-lg relative"
                    >
                        {/* Featured badge */}
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                            <div className="bg-[var(--accent-gold)] text-[var(--text-primary)] px-6 py-2 rounded-full text-sm font-bold font-['Rajdhani'] uppercase tracking-wide">
                                Best Value
                            </div>
                        </div>

                        <h3 className="font-['Rajdhani'] text-2xl font-bold text-[var(--text-primary)] mb-2">
                            MEMBER RATE
                        </h3>
                        <div className="text-4xl sm:text-5xl font-bold text-[var(--accent-gold)] mb-1">$6</div>
                        <div className="text-[var(--text-secondary)] font-['Noto Sans'] mb-1">per round of 25</div>
                        <div className="text-sm text-[var(--accent-gold)] font-bold mb-8 font-['Noto Sans']">
                            Save $2 per round!
                        </div>
                        
                        <div className="space-y-4">
                            {pricingFeatures.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                                    transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
                                    className="flex items-center gap-3"
                                >
                                    <svg className="w-5 h-5 text-[var(--accent-gold)]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="font-['Noto Sans'] text-[var(--text-secondary)]">{feature}</span>
                                </motion.div>
                            ))}
                        </div>

                        <Link
                            href="/membership"
                            className="block w-full mt-8 px-6 py-3 bg-[var(--accent-primary)] text-[var(--text-primary)] 
                                     rounded-lg hover:bg-[var(--accent-secondary)] transition-all duration-300 
                                     font-['Rajdhani'] uppercase tracking-wide text-center"
                        >
                            Join Today
                        </Link>
                    </motion.div>
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-center mt-12 sm:mt-16"
                >
                    <div className="bg-[var(--bg-secondary)] rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
                        <h4 className="font-['Rajdhani'] text-xl font-bold text-[var(--text-primary)] mb-4">
                            READY TO EXPERIENCE EXCELLENCE?
                        </h4>
                        <p className="text-[var(--text-secondary)] mb-6 font-['Noto Sans'] leading-relaxed">
                            Join Idaho's premier shotgun sports facility and discover why we've been the choice 
                            of champions since 1973. Whether you're a seasoned competitor or just starting out, 
                            our welcoming community and world-class facilities are here for you.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="px-6 py-3 bg-[var(--accent-primary)] text-[var(--text-primary)] 
                                         rounded-lg hover:bg-[var(--accent-secondary)] transition-all duration-300 
                                         font-['Rajdhani'] uppercase tracking-wide"
                            >
                                Visit Us Today
                            </Link>
                            <Link
                                href="/events"
                                className="px-6 py-3 border-2 border-[var(--accent-primary)] text-[var(--accent-primary)] 
                                         rounded-lg hover:bg-[var(--accent-primary)] hover:text-[var(--text-primary)] 
                                         transition-all duration-300 font-['Rajdhani'] uppercase tracking-wide"
                            >
                                View Schedule
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
