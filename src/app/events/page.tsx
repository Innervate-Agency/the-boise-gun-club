'use client';

import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarDaysIcon, ClockIcon, MapPinIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
// import { getShootingSportsImage } from '@/utils/imageUtils';
import { useContent } from '@/hooks/useContent';

const ParticleAnimation = dynamic(() => import('@/components/effects/ParticleAnimation'), { ssr: false });

interface Event {
  id: string;
  title: string;
  date: string;
  time?: string;
  repeats?: string;
  location: string;
  description: string;
  category: string;
  image: string;
  detailsLink?: string;
}

const EventCard: React.FC<{ event: Event, index: number }> = ({ event, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.15, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="glass-premium rounded-xl shadow-2xl overflow-hidden border border-white/20 flex flex-col group hover:border-[var(--accent-primary)]/70 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[var(--accent-primary)]/20"
    >
      <div className="relative h-48 md:h-56 w-full overflow-hidden">
        <Image 
          src={event.image} 
          alt={event.title} 
          fill 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <span className="absolute top-3 right-3 bg-[var(--accent-primary)]/90 text-white text-xs font-semibold px-3 py-1 rounded-full tracking-wide">
          {event.category}
        </span>
      </div>
      <div className="p-5 md:p-6 flex-grow flex flex-col">
        <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-2 leading-tight group-hover:text-[var(--accent-primary)] transition-colors duration-300">
          {event.title}
        </h3>
        
        <div className="space-y-2 text-sm text-[var(--text-secondary)] mb-4">
          <div className="flex items-center">
            <CalendarDaysIcon className="w-4 h-4 mr-2 text-[var(--accent-secondary)]" />
            <span>{event.date}{event.repeats ? <span className="text-[var(--text-secondary)]"> ({event.repeats})</span> : ''}</span>
          </div>
          {event.time && (
            <div className="flex items-center">
              <ClockIcon className="w-4 h-4 mr-2 text-[var(--accent-secondary)]" />
              <span>{event.time}</span>
            </div>
          )}
          <div className="flex items-center">
            <MapPinIcon className="w-4 h-4 mr-2 text-[var(--accent-secondary)]" />
            <span>{event.location}</span>
          </div>
        </div>

        <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-5 flex-grow">
          {event.description}
        </p>

        {event.detailsLink ? (
          <Link 
            href={event.detailsLink}
            className="mt-auto inline-flex items-center justify-center text-sm font-semibold text-[var(--accent-primary)] hover:text-white bg-[var(--bg-secondary)]/50 hover:bg-[var(--accent-primary)]/80 px-5 py-2.5 rounded-md transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[var(--accent-primary)]/30"
          >
            View Details <ChevronRightIcon className="w-4 h-4 ml-1.5 transform transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        ) : (
          (<div className="mt-auto h-[42px]"></div>) // Placeholder for consistent card height if no button
        )}
      </div>
    </motion.div>
  );
};

const EventsPage: React.FC = () => {
  const { content, loading, error } = useContent();
  const pageTitle = "Upcoming Events";

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: "easeOut" }
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
  };
  // Convert content events to the format expected by EventCard
  const events = content?.events?.map(event => {
    // Map category to valid image types for getShootingSportsImage
    // let imageType: 'events' | 'training' | 'membership' | 'ranges' | 'competition' | 'hero' | 'equipment' | 'community' = 'events';
    
    // switch (event.category?.toLowerCase()) {
    //   case 'competition':
    //     imageType = 'competition';
    //     break;
    //   case 'training':
    //     imageType = 'training';
    //     break;
    //   case 'fun shoot':
    //   case 'social':
    //     imageType = 'community';
    //     break;
    //   case 'equipment':
    //     imageType = 'equipment';
    //     break;
    //   default:
    //     imageType = 'events';
    // }

    return {
      id: event.id.toString(),
      title: event.title,
      date: new Date(event.date).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      time: event.time,
      location: event.location,
      description: event.description,
      category: event.category || 'Event',
      image: '/images/events.webp',
      detailsLink: `/events/${event.id}`
    };
  }) || [];

  if (loading) {
    return (
      <div className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] overflow-hidden flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[var(--accent-primary)] mx-auto mb-4"></div>
          <p className="text-xl">Loading events...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] overflow-hidden flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-red-400">Error loading events: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] overflow-hidden">
      <ParticleAnimation />
      
      <motion.header 
        className="relative py-24 md:py-32 text-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/events.jpg')" }} // Consider a specific events header image
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold tracking-tight text-shadow-lg"
            variants={sectionVariants} custom={0}
          >
            {pageTitle}
          </motion.h1>
          <motion.p 
            className="mt-6 text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto"
            variants={sectionVariants} custom={1}
          >
            Stay up-to-date with all the competitions, training sessions, and social gatherings at Boise Gun Club.
          </motion.p>
        </div>
      </motion.header>      <main className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        {/* Add filtering/sorting options here in the future */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {events.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>

        {events.length === 0 && (
          <motion.div 
            initial={{opacity: 0, y: 20}} animate={{opacity:1, y: 0}} transition={{duration: 0.5}}
            className="text-center py-12 text-[var(--text-secondary)] text-lg"
          >
            <p>No upcoming events at the moment. Please check back soon!</p>
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default EventsPage;
