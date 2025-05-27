'use client';

import { motion } from 'framer-motion';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const ContactInfo = () => {
    const clubInfo = {
        name: "Boise Gun Club",
        address: "14109 Gowen Rd, Boise, ID 83709",
        phone: "(208) 362-5900",
        email: "info@boisegunclub.com"
    };

    const hours = {
        weekdays: "Tuesday - Friday: 10:00 AM - 6:00 PM",
        saturday: "Saturday: 9:00 AM - 5:00 PM", 
        sunday: "Sunday: 10:00 AM - 4:00 PM",
        closed: "Closed Mondays & Major Holidays"
    };

    const contactCards = [
        {
            icon: PhoneIcon,
            title: "Call Us",
            content: (
                <div className="space-y-2">
                    <a href={`tel:${clubInfo.phone}`} className="text-xl font-['Museo'] text-white hover:text-[var(--accent-gold)] transition-colors">
                        {clubInfo.phone}
                    </a>
                    <p className="text-sm text-white/50">Tue-Sun, Business Hours</p>
                </div>
            )
        },
        {
            icon: MapPinIcon,
            title: "Visit Us",
            content: (
                <div className="space-y-2">
                    <p className="text-lg font-['Museo'] text-white/90 leading-relaxed">
                        {clubInfo.address}
                    </p>
                    <a 
                        href="https://maps.google.com/?q=14109+Gowen+Rd+Boise+ID+83709" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-[var(--accent-gold)] hover:text-[var(--accent-secondary)] transition-colors"
                    >
                        Get Directions
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </div>
            )
        },
        {
            icon: ClockIcon,
            title: "Range Hours",
            content: (
                <div className="space-y-1.5">
                    <p className="text-sm font-['Museo'] text-white/80">{hours.weekdays}</p>
                    <p className="text-sm font-['Museo'] text-white/80">{hours.saturday}</p>
                    <p className="text-sm font-['Museo'] text-white/80">{hours.sunday}</p>
                    <p className="text-sm font-['Museo'] text-[var(--accent-gold)] mt-2">{hours.closed}</p>
                </div>
            )
        }
    ];

    return (
        <section className="relative py-24 md:py-32 overflow-hidden">
            {/* Background with subtle texture */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a1614]/50 to-[#121212]" />
            
            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-['Refrigerator_Deluxe'] text-5xl md:text-6xl uppercase text-white mb-4">
                        Get In <span className="text-[var(--accent-gold)]">Touch</span>
                    </h2>
                    <p className="text-white/60 text-lg font-['Museo'] max-w-2xl mx-auto">
                        Ready to join Idaho's premier shooting sports facility? We're here to help.
                    </p>
                </motion.div>

                {/* Contact Cards Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {contactCards.map((card, index) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group"
                        >
                            {/* Glass card */}
                            <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/10 rounded-2xl p-8 h-full hover:border-white/20 transition-all duration-300">
                                {/* Icon */}
                                <div className="mb-6">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--accent-primary)]/20 to-[var(--accent-secondary)]/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <card.icon className="w-7 h-7 text-[var(--accent-gold)]" />
                                    </div>
                                </div>
                                
                                {/* Content */}
                                <h3 className="font-['Refrigerator_Deluxe'] text-2xl text-white uppercase mb-4">{card.title}</h3>
                                {card.content}
                                
                                {/* Hover glow */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--accent-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Map Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    {/* Glass container for map */}
                    <div className="backdrop-blur-xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 rounded-2xl p-2 shadow-2xl">
                        <div className="aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.7974851234567!2d-116.123456!3d43.567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDM0JzA0LjQiTiAxMTbCsDA3JzI0LjQiVw!5e0!3m2!1sen!2sus!4v1234567890"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale contrast-125 opacity-80"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center mt-16"
                >
                    <p className="text-white/60 font-['Museo'] text-lg mb-6">
                        Have questions about membership or our facilities?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="group relative inline-flex items-center">
                            <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity" />
                            <button className="relative backdrop-blur-sm bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white px-8 py-4 rounded-xl font-['Refrigerator_Deluxe'] uppercase tracking-wider transition-all duration-300 group-hover:scale-105 shadow-xl">
                                Contact Us
                            </button>
                        </Link>
                        
                        <Link href="/membership" className="group relative inline-flex items-center">
                            <button className="relative backdrop-blur-md bg-white/[0.08] border border-white/20 text-white px-8 py-4 rounded-xl font-['Refrigerator_Deluxe'] uppercase tracking-wider transition-all duration-300 group-hover:bg-white/[0.12] group-hover:scale-105 group-hover:border-white/30 shadow-xl">
                                Join Now
                            </button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactInfo;
