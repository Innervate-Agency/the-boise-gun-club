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
        <section className="section-spacing bg-[var(--bg-secondary)] relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/5 via-transparent to-[var(--accent-secondary)]/5"></div>
            
            <div className="stripe-container relative z-10">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--accent-primary)] mb-4 font-refrigerator">
                        SHOOTING RATES
                    </h2>
                    <h3 className="text-2xl md:text-3xl text-[var(--text-secondary)] mb-6 font-museo">
                        Affordable Excellence for Every Shooter
                    </h3>
                    <p className="text-lg text-[var(--text-primary)] max-w-3xl mx-auto leading-relaxed font-museo">
                        Choose from our competitive day rates or unlock significant savings with an annual membership. 
                        Both options include access to our world-class trap, skeet, and sporting clays facilities.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Day Rate Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="pricing-card"
                    >
                        <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2 font-refrigerator">
                            DAY RATE
                        </h3>
                        <div className="pricing-amount">$8</div>
                        <div className="pricing-unit">per round of 25</div>
                        
                        <div className="mt-8 space-y-4">
                            <div className="pricing-feature">
                                <svg className="pricing-feature-icon" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="font-museo">Access to all ranges</span>
                            </div>
                            <div className="pricing-feature">
                                <svg className="pricing-feature-icon" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="font-museo">Equipment rental available</span>
                            </div>
                            <div className="pricing-feature">
                                <svg className="pricing-feature-icon" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="font-museo">Professional instruction</span>
                            </div>
                            <div className="pricing-feature">
                                <svg className="pricing-feature-icon" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="font-museo">Safe, welcoming environment</span>
                            </div>
                        </div>

                        <button className="w-full mt-8 px-6 py-3 border-2 border-[var(--accent-primary)] text-[var(--accent-primary)] rounded-lg hover:bg-[var(--accent-primary)] hover:text-white transition-colors font-refrigerator uppercase tracking-wide">
                            Visit Today
                        </button>
                    </motion.div>

                    {/* Membership Rate Card - Featured */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="pricing-card relative"
                    >
                        {/* Featured badge */}
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                            <div className="bg-[var(--accent-green)] text-white px-6 py-2 rounded-full text-sm font-bold font-refrigerator uppercase tracking-wide">
                                Best Value
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2 font-refrigerator">
                            MEMBER RATE
                        </h3>
                        <div className="pricing-amount">$6</div>
                        <div className="pricing-unit">per round of 25</div>
                        <div className="text-sm text-[var(--accent-green)] font-bold mt-2 font-museo">
                            Save $2 per round!
                        </div>
                        
                        <div className="mt-8 space-y-4">
                            {pricingFeatures.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                                    transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
                                    className="pricing-feature"
                                >
                                    <svg className="pricing-feature-icon" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="font-museo">{feature}</span>
                                </motion.div>
                            ))}
                        </div>

                        <Link
                            href="/membership"
                            className="block w-full mt-8 px-6 py-3 bg-[var(--accent-primary)] text-white rounded-lg hover:bg-[var(--accent-secondary)] transition-colors font-refrigerator uppercase tracking-wide text-center"
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
                    className="text-center mt-16"
                >
                    <div className="stripe-card max-w-2xl mx-auto">
                        <h4 className="text-xl font-bold text-[var(--accent-primary)] mb-4 font-refrigerator">
                            READY TO EXPERIENCE EXCELLENCE?
                        </h4>
                        <p className="text-[var(--text-primary)] mb-6 font-museo leading-relaxed">
                            Join Idaho's premier shotgun sports facility and discover why we've been the choice 
                            of champions since 1973. Whether you're a seasoned competitor or just starting out, 
                            our welcoming community and world-class facilities are here for you.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="px-6 py-3 bg-[var(--accent-primary)] text-white rounded-lg hover:bg-[var(--accent-secondary)] transition-colors font-refrigerator uppercase tracking-wide"
                            >
                                Visit Us Today
                            </Link>
                            <Link
                                href="/events"
                                className="px-6 py-3 border-2 border-[var(--accent-primary)] text-[var(--accent-primary)] rounded-lg hover:bg-[var(--accent-primary)] hover:text-white transition-colors font-refrigerator uppercase tracking-wide"
                            >
                                View Schedule
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
            
            <div className="section-divider"></div>
        </section>
    );
}
