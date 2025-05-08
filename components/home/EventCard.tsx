'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
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

const categoryColors = {
    competition: 'bg-[#FF6B35]',
    training: 'bg-[#4ECDC4]',
    social: 'bg-[#FFB000]',
    maintenance: 'bg-[#96A7CF]'
};

const EventCard: FC<EventCardProps> = ({
    title,
    date,
    time,
    category,
    description,
    imageUrl
}) => {
    return (
        <motion.div
            className="relative group"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            {/* Glass card container */}
            <div className="relative overflow-hidden rounded-lg bg-white/10 backdrop-blur-md
                          border border-white/20 shadow-xl">
                {/* Wood grain texture overlay */}
                <div className="absolute inset-0 opacity-5 mix-blend-overlay 
                              bg-[url('/textures/wood-grain.png')] pointer-events-none" />

                {/* Smoke effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity
                              bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />

                {/* Event image */}
                <div className="relative h-48 overflow-hidden">
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Category badge */}
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full 
                                   font-vt323 text-white text-sm ${categoryColors[category]}`}>
                        {category.toUpperCase()}
                    </div>
                </div>

                {/* Content area */}
                <div className="p-6 space-y-4">
                    {/* Title */}
                    <h3 className="font-space-grotesk text-2xl font-bold text-amber-100
                                 tracking-wider leading-tight">
                        {title}
                    </h3>

                    {/* Date/Time info */}
                    <div className="flex items-center space-x-4 font-vt323 text-white/80">
                        <span>{date}</span>
                        <div className="w-1 h-1 bg-white/40 rounded-full" />
                        <span>{time}</span>
                    </div>

                    {/* Description */}
                    <p className="text-white/70 line-clamp-2">
                        {description}
                    </p>

                    {/* CTA Button */}
                    <Link href={`/events/${encodeURIComponent(title)}`}
                        className="inline-block mt-4 px-6 py-2 rounded-lg
                                   bg-white/10 backdrop-blur border border-white/20
                                   font-vt323 text-lg text-white
                                   transition-all duration-300
                                   hover:bg-white/20 hover:border-white/30
                                   hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                        VIEW DETAILS {'>'}
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default EventCard; 