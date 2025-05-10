'use client';

import { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface Photo {
    id: number;
    src: string;
    alt: string;
    year: string;
}

interface PhotoGalleryProps {
    photos: Photo[];
}

// Modern glassmorphic photo frame
const GlassPhotoFrame: FC<{ photo: Photo, onClick: () => void }> = ({ photo, onClick }) => {
    return (
        <motion.div
            className="relative overflow-hidden rounded cursor-pointer group"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
        >
            {/* Photo container with aspect ratio */}
            <div className="relative aspect-square overflow-hidden">
                {/* Grid overlay for texture */}
                <div className="absolute inset-0 bg-[url('/images/Grid/Grid (2).jpg')] opacity-10 mix-blend-overlay z-10 pointer-events-none"></div>

                {/* Glass effect border */}
                <div className="absolute inset-0 border border-white/10 z-20 pointer-events-none"></div>

                {/* The image */}
                <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-all duration-300 filter"
                />

                {/* Hover overlay with info */}
                <div className="absolute bottom-0 left-0 right-0 bg-[#121212]/70 backdrop-blur-sm p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-30">
                    <p className="text-white font-bold font-['Refrigerator_Deluxe']">{photo.alt}</p>
                    <p className="text-[#F25D27] text-sm font-['Museo']">{photo.year}</p>
                </div>
            </div>
        </motion.div>
    );
};

// Subtle smoke transition effect
const SmokeTransition: FC = () => {
    return (
        <motion.div
            className="fixed inset-0 z-[60] pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ duration: 1 }}
        >
            <div className="absolute inset-0 bg-[url('/images/Smoke/Background_01.jpg')] bg-cover opacity-30 mix-blend-overlay"></div>
        </motion.div>
    );
};

const PhotoGallery: FC<PhotoGalleryProps> = ({ photos }) => {
    const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
    const [showTransition, setShowTransition] = useState(false);

    const handlePhotoClick = (photo: Photo) => {
        setShowTransition(true);
        setTimeout(() => {
            setSelectedPhoto(photo);
            setTimeout(() => setShowTransition(false), 300);
        }, 500);
    };

    return (
        <div className="relative">
            {/* Grid layout */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {photos.map((photo) => (
                    <GlassPhotoFrame
                        key={photo.id}
                        photo={photo}
                        onClick={() => handlePhotoClick(photo)}
                    />
                ))}
            </div>

            {/* Modal for expanded view */}
            <AnimatePresence>
                {selectedPhoto && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-[#121212]/90 backdrop-blur-sm p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedPhoto(null)}
                    >
                        <motion.div
                            className="relative max-w-4xl max-h-[80vh] w-full overflow-hidden bg-white/10 backdrop-blur-md rounded border border-white/10 shadow-2xl"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Background grid pattern */}
                            <div className="absolute inset-0 bg-[url('/images/Grid/Grid (3).jpg')] bg-cover opacity-5 mix-blend-overlay pointer-events-none"></div>

                            {/* The expanded image */}
                            <div className="relative aspect-auto w-full p-4">
                                <Image
                                    src={selectedPhoto.src}
                                    alt={selectedPhoto.alt}
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto object-contain"
                                />
                            </div>

                            {/* Photo details */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#121212]/70 backdrop-blur-sm text-white">
                                <h3 className="text-xl font-bold text-white font-['Refrigerator_Deluxe']">{selectedPhoto.alt}</h3>
                                <p className="text-[#F25D27] font-['Museo']">{selectedPhoto.year}</p>
                            </div>

                            {/* Close button */}
                            <button
                                className="absolute top-4 right-4 z-30 w-10 h-10 bg-[#F25D27] rounded-full flex items-center justify-center text-white hover:bg-[#F25D27]/80 transition-colors"
                                onClick={() => setSelectedPhoto(null)}
                            >
                                ✕
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Smoke transition effect */}
            {showTransition && <SmokeTransition />}
        </div>
    );
};

export default PhotoGallery; 