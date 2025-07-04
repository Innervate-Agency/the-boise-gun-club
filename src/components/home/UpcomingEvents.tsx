'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarDaysIcon, ClockIcon, MapPinIcon, UsersIcon } from '@heroicons/react/24/outline';
import CMSContent from '@/components/cms/CMSContent';
import eventsData from '@/data/events-calendar.json';

// Enhanced events with proper formatting for display
const formatEventForDisplay = (event: any) => {
    const eventDate = new Date(event.date);
    return {
        ...event,
        date: eventDate.getDate().toString(),
        month: eventDate.toLocaleString('default', { month: 'short' }).toUpperCase(),
        attendees: event.currentRegistrations?.toString() || '0',
        desc: event.description,
        details: event.details,
        time: event.time,
        location: event.location,
        image: event.image || '/images/events.webp'
    };
};

// Get the next 4 upcoming events
const upcomingEvents = eventsData.events
    .filter(event => new Date(event.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 4)
    .map(formatEventForDisplay);

const UpcomingEvents = () => {
    const [selectedEvent, setSelectedEvent] = useState(upcomingEvents[0]);

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="relative">
                {/* Enhanced Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <h2 className="font-['Rajdhani'] text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase text-[var(--text-primary)] mb-8 leading-none">
                        Upcoming <span className="text-[var(--accent-primary)] retro-glow">Events</span>
                    </h2>
                    <p className="text-[var(--text-secondary)] text-lg sm:text-xl md:text-2xl font-['Noto Sans'] max-w-3xl mx-auto leading-relaxed">
                        From competitive shoots to casual fun days, there's always action at the club.
                    </p>
                </motion.div>

                {/* Modern Events Grid Layout */}
                <div className="grid lg:grid-cols-5 gap-8">
                    {/* Event Cards List - Left Side */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Try to load CMS content first, fall back to static */}
                        <div className="cms-content-wrapper">
                            <CMSContent type="featured-events" limit={4} />
                        </div>
                        
                        {/* Static content as backup (hidden when CMS loads) */}
                        <div className="static-content-backup">
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            {upcomingEvents.map((event, index) => (
                                <motion.div
                                    key={event.id}
                                    variants={cardVariants}
                                    onClick={() => setSelectedEvent(event)}
                                    className={`group cursor-pointer transition-all duration-300 ${
                                        selectedEvent?.id === event.id 
                                            ? 'scale-[1.02]' 
                                            : 'hover:scale-[1.01]'
                                    }`}
                                >
                                    <div className={`bg-[var(--bg-secondary)] rounded-xl border relative overflow-hidden ${
                                        selectedEvent?.id === event.id
                                            ? 'border-[var(--accent-primary)]/30 glow-subtle'
                                            : 'border-[var(--text-primary)]/5 hover:border-[var(--accent-primary)]/20'
                                    }`}>
                                        {/* Active Indicator */}
                                        {selectedEvent?.id === event.id && (
                                            <motion.div 
                                                className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--accent-primary)] to-[var(--accent-secondary)]"
                                                layoutId="activeIndicator"
                                            />
                                        )}
                                        
                                        <div className="p-6">
                                            <div className="flex items-start gap-4">
                                                {/* Enhanced Date Block */}
                                                <div className={`flex flex-col items-center justify-center rounded-xl w-16 h-16 transition-all duration-300 ${
                                                    selectedEvent?.id === event.id
                                                        ? 'bg-gradient-to-br from-[var(--accent-primary)]/20 to-[var(--accent-secondary)]/20 border border-[var(--accent-primary)]/30'
                                                        : 'bg-[var(--bg-primary)] border border-[var(--text-primary)]/10 group-hover:border-[var(--accent-primary)]/20'
                                                }`}>
                                                    <span className="font-['Rajdhani'] text-xl font-bold text-[var(--text-primary)]">{event.date}</span>
                                                    <span className="text-xs text-[var(--text-secondary)] uppercase font-['Noto Sans']">{event.month}</span>
                                                </div>
                                                
                                                {/* Enhanced Event Info */}
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-start justify-between mb-2">
                                                        <h4 className="font-['Rajdhani'] text-lg font-bold text-[var(--text-primary)] uppercase">{event.title}</h4>
                                                        <span className={`px-2 py-1 rounded-full text-xs font-['Noto Sans'] whitespace-nowrap ml-2 ${
                                                            event.category === 'Competition' ? 'bg-red-500/10 text-red-400 border border-red-500/20' :
                                                            event.category === 'Fun Shoot' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' :
                                                            'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                                                        }`}>
                                                            {event.category}
                                                        </span>
                                                    </div>
                                                    
                                                    <p className="text-sm text-[var(--text-secondary)] font-['Noto Sans'] line-clamp-2 leading-relaxed mb-4">
                                                        {event.desc}
                                                    </p>
                                                    
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center gap-2">
                                                            <UsersIcon className="w-4 h-4 text-[var(--accent-primary)]" />
                                                            <span className="text-xs text-[var(--text-secondary)] font-['Noto Sans']">
                                                                {event.attendees} attending
                                                            </span>
                                                        </div>
                                                        <motion.div
                                                            className="text-xs text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] transition-colors font-['Rajdhani'] uppercase tracking-wider"
                                                            whileHover={{ x: 4 }}
                                                        >
                                                            View Details →
                                                        </motion.div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                        </div>
                        
                        {/* Enhanced View All Link */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="pt-6"
                        >
                            <Link
                                href="/events"
                                className="bg-[var(--bg-secondary)] hover:bg-[var(--accent-primary)] text-[var(--text-primary)] py-3 px-6 rounded-lg transition-all duration-300 w-full text-center"
                            >
                                View Full Calendar
                            </Link>
                        </motion.div>
                    </div>

                    {/* Enhanced Selected Event Details - Right Side */}
                    <div className="lg:col-span-3">
                        {selectedEvent && (
                            <motion.div
                                key={selectedEvent.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="sticky top-24"
                            >
                                <div className="bg-[var(--bg-secondary)] rounded-xl overflow-hidden shadow-lg">
                                    {/* Enhanced Event Image */}
                                    <div className="relative h-72 sm:h-96">
                                        <Image
                                            src={selectedEvent.image}
                                            alt={selectedEvent.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 60vw"
                                            priority={selectedEvent.id === upcomingEvents[0].id}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                                        
                                        {/* Enhanced Title Overlay */}
                                        <div className="absolute bottom-0 left-0 right-0 p-8">
                                            <h3 className="font-['Rajdhani'] text-3xl sm:text-4xl md:text-5xl text-white uppercase mb-2 leading-none">
                                                {selectedEvent.title}
                                            </h3>
                                            <p className="text-gray-300 font-['Noto Sans'] text-lg">
                                                {selectedEvent.desc}
                                            </p>
                                        </div>
                                    </div>
                                    
                                    {/* Enhanced Event Details */}
                                    <div className="p-8">
                                        {/* Modern Meta Info Cards */}
                                        <div className="grid sm:grid-cols-3 gap-6 mb-8">
                                            <div className="bg-[var(--bg-primary)] rounded-lg p-6 text-center">
                                                <CalendarDaysIcon className="w-8 h-8 text-[var(--accent-primary)] mx-auto mb-2" />
                                                <p className="text-xs text-[var(--text-secondary)] font-['Noto Sans'] uppercase tracking-wider mb-1">Date</p>
                                                <p className="text-[var(--text-primary)] font-['Rajdhani'] text-lg font-bold">{selectedEvent.date} {selectedEvent.month}</p>
                                            </div>
                                            <div className="bg-[var(--bg-primary)] rounded-lg p-6 text-center">
                                                <ClockIcon className="w-8 h-8 text-[var(--accent-primary)] mx-auto mb-2" />
                                                <p className="text-xs text-[var(--text-secondary)] font-['Noto Sans'] uppercase tracking-wider mb-1">Time</p>
                                                <p className="text-[var(--text-primary)] font-['Rajdhani'] text-lg font-bold">{selectedEvent.time}</p>
                                            </div>
                                            <div className="bg-[var(--bg-primary)] rounded-lg p-6 text-center">
                                                <MapPinIcon className="w-8 h-8 text-[var(--accent-primary)] mx-auto mb-2" />
                                                <p className="text-xs text-[var(--text-secondary)] font-['Noto Sans'] uppercase tracking-wider mb-1">Location</p>
                                                <p className="text-[var(--text-primary)] font-['Rajdhani'] text-lg font-bold">{selectedEvent.location}</p>
                                            </div>
                                        </div>
                                        
                                        {/* Enhanced Description */}
                                        <div className="mb-8">
                                            <h4 className="font-['Rajdhani'] text-xl font-bold text-[var(--text-primary)] uppercase mb-4">Event Details</h4>
                                            <p className="text-[var(--text-secondary)] font-['Noto Sans'] leading-relaxed text-lg">
                                                {selectedEvent.details}
                                            </p>
                                        </div>
                                        
                                        {/* Modern CTA Button */}
                                        <Link
                                            href={`/events/${selectedEvent.id}`}
                                            className="bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 w-full text-center"
                                        >
                                            <span className="relative z-10">Register for Event</span>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
        </div>
    );
};

export default UpcomingEvents;
