'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Simple gallery data - replace with real photos later
const galleryImages = [
    { id: 1, src: '/images/events.webp', alt: 'Range Competition', category: 'events' },
    { id: 2, src: '/images/training.webp', alt: 'Training Session', category: 'training' },
    { id: 3, src: '/images/membership.webp', alt: 'Club Members', category: 'members' },
    { id: 4, src: '/images/events.webp', alt: 'Clay Shooting', category: 'events' },
    { id: 5, src: '/images/training.webp', alt: 'Safety Training', category: 'training' },
    { id: 6, src: '/images/membership.webp', alt: 'Annual Meeting', category: 'members' },
];

const categories = ['all', 'events', 'training', 'members'];

export default function GalleryPage() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    
    const filteredImages = selectedCategory === 'all' 
        ? galleryImages 
        : galleryImages.filter(img => img.category === selectedCategory);

    return (
        <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] py-24">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="font-['Refrigerator_Deluxe'] text-5xl font-bold text-[var(--accent-gold)] mb-4 uppercase">
                        Photo Gallery
                    </h1>
                    <p className="text-xl text-[var(--text-secondary)] font-['Museo']">
                        Memories from Boise Gun Club
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex justify-center mb-8">
                    <div className="flex gap-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2 rounded-lg font-['Refrigerator_Deluxe'] uppercase tracking-wide transition-all
                                    ${selectedCategory === category 
                                        ? 'bg-[var(--accent-primary)] text-black' 
                                        : 'bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:bg-[var(--accent-primary)]/20'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Simple Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredImages.map((image) => (
                        <motion.div
                            key={image.id}
                            className="group relative overflow-hidden rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)]"
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="aspect-video relative">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <p className="text-white font-['Refrigerator_Deluxe'] text-lg uppercase tracking-wide">
                                        {image.alt}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
} 
