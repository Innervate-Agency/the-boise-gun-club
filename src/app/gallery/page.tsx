'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import SectionHeader from '@/components/common/SectionHeader'
import ClayFragments from '@/components/effects/ClayFragments'
import SmokeAnimation from '@/components/effects/SmokeAnimation'

const galleryImages = [
    { id: 1, src: '/images/events.webp', alt: 'Range Competition', category: 'events' },
    { id: 2, src: '/images/training.webp', alt: 'Training Session', category: 'training' },
    { id: 3, src: '/images/membership.webp', alt: 'Club Members', category: 'members' },
    { id: 4, src: '/images/events.webp', alt: 'Clay Shooting', category: 'events' },
    { id: 5, src: '/images/training.webp', alt: 'Safety Training', category: 'training' },
    { id: 6, src: '/images/membership.webp', alt: 'Annual Meeting', category: 'members' },
];

const categories = ['all', 'events', 'training', 'members'];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function GalleryPage() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    
    const filteredImages = selectedCategory === 'all' 
        ? galleryImages 
        : galleryImages.filter(img => img.category === selectedCategory);

    return (
        <div className="min-h-screen bg-[var(--bg-primary)]">
            <ClayFragments />
            <SmokeAnimation />
            
            <div className="relative z-10">
                {/* Hero Section */}
                <section className="relative py-24 overflow-hidden">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            className="text-center"
                            initial="initial"
                            animate="animate"
                            variants={fadeInUp}
                        >
                            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-black text-[var(--text-primary)] mb-6">
                                Photo <span className="text-accent-primary">Gallery</span>
                            </h1>
                            <p className="font-body text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
                                Explore our facilities, events, and community through our photo collection.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Gallery Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Category Filter */}
                        <motion.div
                            className="flex justify-center mb-12"
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <div className="flex flex-wrap gap-4">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`px-6 py-3 rounded-lg uppercase tracking-wide font-body font-semibold transition-all
                                            ${selectedCategory === category 
                                                ? 'bg-accent-primary text-black' 
                                                : 'glass-premium text-[var(--text-secondary)] hover:bg-accent-primary/20 border border-white/20'
                                            }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </motion.div>

                        {/* Gallery Grid */}
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            variants={staggerChildren}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                        >
                            {filteredImages.map((image) => (
                                <motion.div
                                    key={image.id}
                                    className="group relative overflow-hidden rounded-lg glass-premium border border-white/20"
                                    variants={fadeInUp}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="aspect-video relative">
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <p className="font-heading text-[var(--text-primary)] text-lg font-bold uppercase tracking-wide text-center px-4">
                                                {image.alt}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>
            </div>
        </div>
    );
} 
