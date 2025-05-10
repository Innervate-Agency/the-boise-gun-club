'use client';

import { FC, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface EventCardProps {
    title: string;
    date: string;
    time: string;
    category: 'competition' | 'training' | 'social' | 'maintenance';
    description: string;
    imageUrl: string;
}

// Updated color scheme based on brand guidelines
const categoryColors = {
    competition: '#F25D27', // Brand orange
    training: '#2484BF',    // Brand blue
    social: '#F2B950',      // Yellow
    maintenance: '#96A7CF'  // Light blue/slate
};

const EventCard: FC<EventCardProps> = ({
    title,
    date,
    time,
    category,
    description,
    imageUrl
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: false, amount: 0.2 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="h-full"
        >
            {/* Glassmorphic card */}
            <motion.div
                className="relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/10 rounded shadow-lg h-full flex flex-col"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
                {/* Subtle grid pattern */}
                <div className="absolute inset-0 bg-[url('/images/Grid/Grid (1).jpg')] bg-cover opacity-5 mix-blend-overlay pointer-events-none"></div>

                {/* Event image */}
                <div className="relative h-48 overflow-hidden">
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-70"></div>

                    {/* Category tag */}
                    <div
                        className="absolute top-4 right-4 px-3 py-1 rounded text-xs font-bold uppercase"
                        style={{
                            backgroundColor: `${categoryColors[category]}30`,
                            color: categoryColors[category]
                        }}
                    >
                        {category}
                    </div>

                    {/* Date and time */}
                    <div className="absolute bottom-4 left-4 text-white">
                        <div className="text-lg font-bold font-['Refrigerator_Deluxe']">
                            {date}
                        </div>
                        <div className="text-sm opacity-90 font-['Museo']">
                            {time}
                        </div>
                    </div>
                </div>

                {/* Event content */}
                <div className="p-5 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-3 font-['Refrigerator_Deluxe']">
                        {title}
                    </h3>

                    <p className="text-white/70 text-sm mb-5 flex-grow font-['Museo']">
                        {description.length > 120
                            ? `${description.substring(0, 120)}...`
                            : description}
                    </p>

                    <Link
                        href="/events"
                        className="text-[#F25D27] hover:text-[#F25D27]/80 font-['Refrigerator_Deluxe'] text-sm flex items-center self-start mt-auto"
                    >
                        LEARN MORE
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>

                {/* Subtle smoke effect on hover */}
                <div className="absolute inset-0 bg-[url('/images/Smoke/Background_01.jpg')] bg-cover opacity-0 hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
        </motion.div>
    );
};

export default EventCard; 