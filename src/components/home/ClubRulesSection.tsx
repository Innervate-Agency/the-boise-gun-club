'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

const clubRules = [
    "Eye and ear protection required at all times on ranges",
    "All firearms must be unloaded when not on the firing line",
    "No rapid fire - maximum 1 shot per second",
    "No steel shot, steel BB, or steel pellets allowed",
    "Shotguns only - no rifles, pistols, or archery equipment",
    "Target loads only - no hunting loads over 1¼ oz",
    "Maximum shot size: #7½ for trap, #8 or #9 for skeet",
    "All shots must be directed at designated targets only",
    "Wait for 'all clear' signal before retrieving targets",
    "No shooting before 9:00 AM or after 6:00 PM weekdays",
    "Weekend hours: 9:00 AM to 5:00 PM",
    "No alcohol or controlled substances on premises",
    "Children under 12 must be supervised at all times",
    "Youth under 18 require parental consent and supervision",
    "Muzzle must always point downrange or skyward",
    "No handling firearms while others are downrange",
    "Report all accidents or incidents immediately",
    "Follow range officer instructions without question",
    "Gate must be locked when leaving if last person",
    "Pick up spent shells and trash - keep it clean",
    "Respect other shooters - wait your turn patiently",
    "No modifications to trap houses or equipment",
    "Guests must be accompanied by member at all times",
    "Payment required before shooting - no exceptions",
    "Club equipment use requires training and authorization"
];

export default function ClubRulesSection() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <section className="relative py-16 sm:py-24 md:py-32 bg-[var(--bg-secondary)]">
            <div className="container mx-auto px-4">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className="font-['Rajdhani'] text-4xl sm:text-5xl md:text-6xl uppercase text-[var(--text-primary)] mb-4">
                        Club <span className="text-[var(--accent-gold)]">Safety Rules</span>
                    </h2>
                    <p className="text-[var(--text-secondary)] text-base sm:text-lg font-['Noto Sans'] max-w-3xl mx-auto">
                        Our comprehensive safety protocols ensure a secure and enjoyable shooting experience for all members and guests. 
                        These rules are strictly enforced to maintain our excellent safety record and family-friendly atmosphere.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-[var(--bg-primary)] rounded-2xl p-6 sm:p-8 shadow-lg"
                    >
                        <h4 className="font-['Rajdhani'] text-xl font-bold text-[var(--text-primary)] mb-6">
                            Range Safety Protocols
                        </h4>
                        <div className="space-y-3">
                            {clubRules.slice(0, 13).map((rule, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                    transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                                    className="flex items-start gap-3"
                                >
                                    <div className="w-2 h-2 rounded-full bg-[var(--accent-gold)] mt-2 flex-shrink-0"></div>
                                    <p className="text-[var(--text-secondary)] leading-relaxed font-['Noto Sans']">{rule}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="bg-[var(--bg-primary)] rounded-2xl p-6 sm:p-8 shadow-lg"
                    >
                        <h4 className="font-['Rajdhani'] text-xl font-bold text-[var(--text-primary)] mb-6">
                            Facility Guidelines
                        </h4>
                        <div className="space-y-3">
                            {clubRules.slice(13).map((rule, index) => (
                                <motion.div
                                    key={index + 13}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                                    transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                                    className="flex items-start gap-3"
                                >
                                    <div className="w-2 h-2 rounded-full bg-[var(--accent-gold)] mt-2 flex-shrink-0"></div>
                                    <p className="text-[var(--text-secondary)] leading-relaxed font-['Noto Sans']">{rule}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-center"
                >
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/about"
                            className="inline-flex items-center justify-center px-6 py-3 bg-[var(--accent-primary)] text-[var(--text-primary)] 
                                     rounded-lg hover:bg-[var(--accent-secondary)] transition-all duration-300 
                                     font-['Rajdhani'] uppercase tracking-wide"
                        >
                            Learn More About Us
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <Link
                            href="/membership"
                            className="inline-flex items-center justify-center px-6 py-3 border-2 border-[var(--accent-primary)] text-[var(--accent-primary)] 
                                     rounded-lg hover:bg-[var(--accent-primary)] hover:text-[var(--text-primary)] 
                                     transition-all duration-300 font-['Rajdhani'] uppercase tracking-wide"
                        >
                            View Membership
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
