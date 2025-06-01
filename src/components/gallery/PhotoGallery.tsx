'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { GalleryProvider, useGallery } from './GalleryContext';
import PhotoModal from './PhotoModal';
import FilterControls from './FilterControls';
import useDeterministicRandom from '../../hooks/useDeterministicRandom';
import UnsplashImage from '../ui/UnsplashImage';
import { getShootingSportsImage } from '../../utils/imageUtils';
import './Gallery.css';

// Masonry layout component
function MasonryGrid({ children }: { children: React.ReactNode }) {
    return (
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {children}
        </div>
    );
}

// Subtle mist effect component
function MistEffect() {
    // Client-side only indicator
    const [isMounted, setIsMounted] = useState(false);
    // Use deterministic random for consistent rendering
    const { getRandomValue } = useDeterministicRandom(15, 12345);
    
    useEffect(() => {
        setIsMounted(true);
    }, []);
    
    if (!isMounted) {
        return null;
    }
    
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {Array.from({ length: 3 }).map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-96 h-96 bg-gradient-to-t from-white/2 to-transparent rounded-full blur-3xl"
                    animate={{
                        x: [
                            getRandomValue(i * 3, -30, 30),
                            getRandomValue(i * 3 + 1, -30, 30),
                            getRandomValue(i * 3 + 2, -30, 30)
                        ],
                        y: [
                            getRandomValue(i * 5, 0, 80),
                            getRandomValue(i * 5 + 1, -80, 0),
                            getRandomValue(i * 5 + 2, 0, 80)
                        ],
                        opacity: [0, 0.08, 0]
                    }}
                    transition={{
                        duration: 15 + getRandomValue(i * 7, 0, 8),
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    style={{
                        left: `${getRandomValue(i * 11, 0, 100)}%`,
                        top: `${getRandomValue(i * 13, 0, 100)}%`
                    }}
                />
            ))}
        </div>
    );
}

// Glass photo card effect component  
function GlassPhotoCard({ children, onClick }: { children: React.ReactNode, onClick: () => void }) {
    return (
        <div
            className="relative group cursor-pointer glass-premium rounded-2xl overflow-hidden
                     hover:scale-[1.02] transition-all duration-500"
            onClick={onClick}
        >
            {/* Glassmorphism background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            {children}
        </div>
    );
}

function GalleryContent() {
    const { photos, selectedPhoto, setSelectedPhoto, filter } = useGallery();
    const containerRef = useRef<HTMLDivElement>(null);

    // Filter photos based on selected category
    const filteredPhotos = photos.filter(photo =>
        filter === 'all' ? true : photo.category === filter
    );

    // Intersection Observer for lazy loading
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '100px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        const images = containerRef.current?.querySelectorAll('.gallery-image');
        images?.forEach(img => observer.observe(img));

        return () => observer.disconnect();
    }, [filteredPhotos]);

    return (
        <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] relative overflow-hidden">
            {/* Background effects */}
            <MistEffect />
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent-primary)]/5 to-[var(--accent-secondary)]/5" />

            <div className="container mx-auto px-4 py-16 relative z-10">
                {/* Gallery header */}
                <div className="text-center mb-12">
                    <h1 className="font-['Refrigerator_Deluxe'] text-5xl md:text-6xl font-bold mb-4 tracking-wider text-[var(--accent-gold)] uppercase">
                        PHOTO ARCHIVES
                    </h1>
                    <p className="text-xl text-[var(--text-secondary)] font-['Museo']">
                        A journey through time at Boise Gun Club
                    </p>
                </div>

                {/* Filter controls */}
                <FilterControls />

                {/* Photo grid */}
                <div ref={containerRef} className="mt-8">
                    <MasonryGrid>
                        {filteredPhotos.map((photo) => (
                            <motion.div
                                key={photo.id}
                                layoutId={`photo-${photo.id}`}
                                className="gallery-image mb-4 opacity-0 transition-opacity duration-500"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                <GlassPhotoCard onClick={() => setSelectedPhoto(photo)}>
                                    {/* Glass overlay effect */}
                                    <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-br from-[var(--accent-primary)]/10 to-[var(--accent-secondary)]/5" />
                                    
                                    <Image
                                        src={photo.src}
                                        alt={photo.alt}
                                        width={photo.width}
                                        height={photo.height}
                                        className="w-full h-auto transition-transform duration-300 relative z-0"
                                        placeholder="blur"
                                        blurDataURL={photo.blurDataUrl}
                                    />

                                    {/* Photo info overlay with glassmorphism */}
                                    <div className="absolute inset-x-0 bottom-0 p-6 text-white opacity-0 transform 
                                                  translate-y-4 transition-all group-hover:opacity-100 
                                                  group-hover:translate-y-0 z-20 backdrop-blur-sm bg-black/30">
                                        <h3 className="text-lg font-bold font-['Refrigerator_Deluxe'] mb-1 uppercase tracking-wide">
                                            {photo.alt}
                                        </h3>
                                        <p className="text-sm text-[var(--accent-gold)] font-['Museo']">
                                            {photo.photographer} • {photo.year}
                                        </p>
                                    </div>
                                </GlassPhotoCard>
                            </motion.div>
                        ))}
                    </MasonryGrid>
                </div>
            </div>

            {/* Photo modal */}
            <AnimatePresence>
                {selectedPhoto && <PhotoModal />}
            </AnimatePresence>
        </div>
    );
}

export default function PhotoGallery() {
    return (
        <GalleryProvider>
            <GalleryContent />
        </GalleryProvider>
    );
}