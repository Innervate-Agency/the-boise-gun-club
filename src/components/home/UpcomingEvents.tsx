'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarDaysIcon, ClockIcon, MapPinIcon, UsersIcon } from '@heroicons/react/24/outline';
import { EventImage, TrainingImage, MembershipImage } from '../ui/UnsplashImage';

// Real events with authentic content
const upcomingEvents = [
    {
        id: 1,
        date: '15',
        month: 'DEC',
        title: 'Winter Turkey Shoot Classic',
        desc: 'Traditional turkey shoot competition. Best score takes home the bird.',
        attendees: '85',
        details: 'Join us for our annual Winter Turkey Shoot. 50 targets, Lewis Class scoring. Entry includes lunch and a chance at door prizes. Frozen turkeys for class winners!',
        time: '9:00 AM - 3:00 PM',
        location: 'Trap Fields 1-5',
        image: '/images/events.webp',
        category: 'Competition'
    },
    {
        id: 2,
        date: '22',
        month: 'DEC',
        title: 'Members-Only Poker Shoot',
        desc: 'Five stands, five cards. Best poker hand wins the pot.',
        attendees: '60',
        details: 'Our famous poker shoot is back! $20 buy-in, re-buys allowed. Shoot five stations, draw a card at each. High hand takes 60% of the pot, second place 30%, third 10%.',
        time: '1:00 PM - 5:00 PM',
        location: 'Skeet Fields',
        image: '/images/training.webp',
        category: 'Fun Shoot'
    },
    {
        id: 3,
        date: '05',
        month: 'JAN',
        title: 'New Year Sporting Clays',
        desc: 'Start 2024 right with 100 targets on our sporting clays course.',
        attendees: '120',
        details: 'Kick off the new year with our challenging sporting clays course. 100 targets across 15 stations. Hot coffee and donuts provided. Squads start every 30 minutes.',
        time: '8:00 AM - 2:00 PM',
        location: 'Sporting Clays Course',
        image: '/images/membership.webp',
        category: 'Competition'
    },
    {
        id: 4,
        date: '12',
        month: 'JAN',
        title: 'Introduction to Trap Clinic',
        desc: 'New to trap shooting? Learn the basics from certified instructors.',
        attendees: '25',
        details: 'Perfect for beginners! Learn safety, etiquette, and technique. Includes gun rental, ammunition, and one-on-one instruction. Limited to 25 participants.',
        time: '10:00 AM - 12:00 PM',
        location: 'Training Range',
        image: '/images/hero-bg.webp',
        category: 'Training'
    }
];

const UpcomingEvents = () => {
    const [selectedEvent, setSelectedEvent] = useState(upcomingEvents[0]);

    return (
        <section className="relative py-24 md:py-32">
            {/* Section Header */}
            <div className="container mx-auto px-4 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl"
                >
                    <h2 className="font-['Rajdhani'] text-5xl md:text-6xl uppercase text-white mb-4">
                        Upcoming <span className="text-[var(--accent-gold)]">Events</span>
                    </h2>
                    <p className="text-white/60 text-lg font-['Noto Sans']">
                        From competitive shoots to casual fun days, there's always action at the club.
                    </p>
                </motion.div>
            </div>

            {/* Events Grid */}
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Event List - Left Side */}
                    <div className="lg:col-span-1 space-y-4">
                        {upcomingEvents.map((event, index) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => setSelectedEvent(event)}
                                className={`group cursor-pointer transition-all duration-300 ${
                                    selectedEvent?.id === event.id 
                                        ? 'scale-[1.02]' 
                                        : 'hover:scale-[1.01]'
                                }`}
                            >
                                {/* Glass card */}
                                <div className={`relative backdrop-blur-xl border rounded-xl p-5 transition-all duration-300 ${
                                    selectedEvent?.id === event.id
                                        ? 'bg-gradient-to-br from-white/[0.12] to-white/[0.06] border-[var(--accent-primary)]/30 shadow-2xl'
                                        : 'bg-white/[0.05] border-white/10 hover:bg-white/[0.08] hover:border-white/20'
                                }`}>
                                    {/* Active indicator */}
                                    {selectedEvent?.id === event.id && (
                                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-gradient-to-b from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-r-full" />
                                    )}
                                    
                                    <div className="flex items-start gap-4">
                                        {/* Date block */}
                                        <div className={`flex flex-col items-center justify-center rounded-lg w-16 h-16 transition-all duration-300 ${
                                            selectedEvent?.id === event.id
                                                ? 'bg-gradient-to-br from-[var(--accent-primary)]/20 to-[var(--accent-secondary)]/10'
                                                : 'bg-white/[0.05] group-hover:bg-white/[0.08]'
                                        }`}>
                                            <span className="font-['Rajdhani'] text-2xl text-white">{event.date}</span>
                                            <span className="text-xs text-white/60 uppercase">{event.month}</span>
                                        </div>
                                        
                                        {/* Event info */}
                                        <div className="flex-1">
                                            <h4 className="font-['Rajdhani'] text-lg text-white mb-1">{event.title}</h4>
                                            <p className="text-sm text-white/60 font-['Noto Sans'] line-clamp-2">{event.desc}</p>
                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center gap-3">
                                                    <span className="text-xs text-[var(--accent-gold)] font-['Noto Sans']">{event.category}</span>
                                                    <span className="text-xs text-white/40">•</span>
                                                    <span className="text-xs text-white/60 font-['Noto Sans'] flex items-center gap-1">
                                                        <UsersIcon className="w-3 h-3" />
                                                        {event.attendees} attending
                                                    </span>
                                                </div>
                                                <Link href={`/events/${event.id}`} className="text-xs text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] transition-colors">
                                                    View →
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                        
                        {/* View all events link */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="pt-4"
                        >
                            <Link
                                href="/events"
                                className="group inline-flex items-center gap-2 text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] font-['Rajdhani'] text-sm uppercase tracking-wider transition-colors"
                            >
                                View Full Calendar
                                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Selected Event Details - Right Side */}
                    <div className="lg:col-span-2">
                        {selectedEvent && (
                            <motion.div
                                key={selectedEvent.id}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                className="sticky top-24"
                            >
                                {/* Main glass card */}                                <div className="backdrop-blur-xl bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                                    {/* Event image */}
                                    <div className="relative h-64 md:h-80">
                                        <EventImage
                                            alt={selectedEvent.title}
                                            fill={true}
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 66vw"
                                            width={800}
                                            height={600}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                        
                                        {/* Category badge */}
                                        <div className="absolute top-4 right-4">
                                            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-4 py-1">
                                                <span className="text-sm font-['Noto Sans'] text-white/90">{selectedEvent.category}</span>
                                            </div>
                                        </div>
                                        
                                        {/* Title overlay */}
                                        <div className="absolute bottom-0 left-0 right-0 p-8">
                                            <h3 className="font-['Rajdhani'] text-3xl md:text-4xl text-white uppercase mb-2">
                                                {selectedEvent.title}
                                            </h3>
                                        </div>
                                    </div>
                                    
                                    {/* Event details */}
                                    <div className="p-8">
                                        {/* Meta info */}
                                        <div className="grid md:grid-cols-3 gap-4 mb-6">
                                            <div className="flex items-center gap-3">
                                                <CalendarDaysIcon className="w-5 h-5 text-[var(--accent-gold)]" />
                                                <div>
                                                    <p className="text-xs text-white/40 font-['Noto Sans']">Date</p>
                                                    <p className="text-white font-['Noto Sans']">{selectedEvent.date} {selectedEvent.month}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <ClockIcon className="w-5 h-5 text-[var(--accent-gold)]" />
                                                <div>
                                                    <p className="text-xs text-white/40 font-['Noto Sans']">Time</p>
                                                    <p className="text-white font-['Noto Sans']">{selectedEvent.time}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <MapPinIcon className="w-5 h-5 text-[var(--accent-gold)]" />
                                                <div>
                                                    <p className="text-xs text-white/40 font-['Noto Sans']">Location</p>
                                                    <p className="text-white font-['Noto Sans']">{selectedEvent.location}</p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Description */}
                                        <p className="text-white/70 font-['Noto Sans'] leading-relaxed mb-8">
                                            {selectedEvent.details}
                                        </p>
                                        
                                        {/* CTA Button */}
                                        <Link
                                            href={`/events/${selectedEvent.id}`}
                                            className="group relative inline-flex items-center justify-center w-full"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity" />
                                            <button className="relative w-full backdrop-blur-sm bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white px-8 py-4 rounded-xl font-['Rajdhani'] uppercase tracking-wider transition-all duration-300 group-hover:scale-[1.02] shadow-xl">
                                                Register for Event
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpcomingEvents;
