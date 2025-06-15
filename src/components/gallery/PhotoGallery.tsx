'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { getShootingSportsImage } from '../../utils/imageUtils';
import { XMarkIcon } from '@heroicons/react/24/solid';

const galleryItems = [
    { id: 'events', category: 'Events', alt: "Clay Target Mid-Flight" },
    { id: 'competition', category: 'Competition', alt: "Trap Shooting Competition" },
    { id: 'ranges', category: 'Ranges', alt: "Sporting Clays Course" },
    { id: 'training', category: 'Training', alt: "Shooting Instruction" },
    { id: 'community', category: 'Community', alt: "Members Socializing" },
];

export default function PhotoGallery() {
    const [featuredImage, setFeaturedImage] = useState(galleryItems[0]);
    const [modalImage, setModalImage] = useState<typeof galleryItems[0] | null>(null);

    const thumbnails = galleryItems.filter(item => item.id !== featuredImage.id);

    return (
        <>
            <div className="w-full">
                {/* Main Featured Image */}
                <motion.div 
                    layoutId={`gallery-item-${featuredImage.id}`} 
                    className="relative w-full h-96 md:h-[500px] rounded-xl overflow-hidden cursor-pointer group mb-4"
                    onClick={() => setModalImage(featuredImage)}
                >
                    <Image
                        src={getShootingSportsImage(featuredImage.id as any, { width: 1200, height: 800 })}
                        alt={featuredImage.alt}
                        layout="fill"
                        objectFit="cover"
                        className="transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6">
                        <h3 className="text-2xl font-bold uppercase text-white">{featuredImage.category}</h3>
                        <p className="text-lg text-gray-300">{featuredImage.alt}</p>
                    </div>
                </motion.div>

                {/* Thumbnail Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {thumbnails.map(item => (
                        <motion.div
                            key={item.id}
                            layoutId={`gallery-item-${item.id}`}
                            className="relative h-32 md:h-48 rounded-lg overflow-hidden cursor-pointer group"
                            onClick={() => setFeaturedImage(item)}
                        >
                            <Image
                                src={getShootingSportsImage(item.id as any, { width: 400, height: 400 })}
                                alt={item.alt}
                                layout="fill"
                                objectFit="cover"
                                className="transform group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                            <p className="absolute bottom-2 left-2 text-white font-bold uppercase text-sm">{item.category}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Full-screen Modal */}
            <AnimatePresence>
                {modalImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
                        onClick={() => setModalImage(null)}
                    >
                        <motion.div className="relative w-full h-full max-w-5xl max-h-[90vh]">
                            <Image
                                src={getShootingSportsImage(modalImage.id as any, { width: 1920, height: 1080, quality: 95 })}
                                alt={modalImage.alt}
                                layout="fill"
                                objectFit="contain"
                            />
                        </motion.div>
                        <motion.button 
                            className="absolute top-4 right-4 text-white bg-white/10 p-2 rounded-full hover:bg-white/20"
                            onClick={() => setModalImage(null)}
                        >
                            <XMarkIcon className="h-6 w-6" />
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}