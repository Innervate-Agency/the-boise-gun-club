'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

export interface PhotoMetadata {
    id: string;
    src: string;
    blurDataUrl: string;
    alt: string;
    width: number;
    height: number;
    category: 'range' | 'events' | 'historical' | 'members';
    photographer?: string;
    year?: number;
    description?: string;
}

interface GalleryContextType {
    photos: PhotoMetadata[];
    selectedPhoto: PhotoMetadata | null;
    setSelectedPhoto: (photo: PhotoMetadata | null) => void;
    filter: string;
    setFilter: (filter: string) => void;
    sortBy: 'date' | 'photographer';
    setSortBy: (sortBy: 'date' | 'photographer') => void;
}

const GalleryContext = createContext<GalleryContextType | undefined>(undefined);

// Sample photo data
const samplePhotos: PhotoMetadata[] = [
    {
        id: '1',
        src: '/images/training.webp',
        blurDataUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==',
        alt: 'Training facility and instruction area',
        width: 1920,
        height: 1080,
        category: 'range',
        photographer: 'Club Staff',
        year: 2023,
        description: 'Professional training facilities for all skill levels.'
    },
    {
        id: '2',
        src: '/images/events.webp',
        blurDataUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==',
        alt: 'Annual shooting competition and events',
        width: 1600,
        height: 1200,
        category: 'events',
        photographer: 'Event Photographer',
        year: 2023,
        description: 'Annual competitions and club events throughout the year.'
    },
    {
        id: '3',
        src: '/images/membership.webp',
        blurDataUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==',
        alt: 'Club membership and community',
        width: 1920,
        height: 1280,
        category: 'members',
        photographer: 'Club Staff',
        year: 2023,
        description: 'Our welcoming community of shooting sports enthusiasts.'
    }
];

export function GalleryProvider({ children }: { children: ReactNode }) {
    const [photos] = useState<PhotoMetadata[]>(samplePhotos);
    const [selectedPhoto, setSelectedPhoto] = useState<PhotoMetadata | null>(null);
    const [filter, setFilter] = useState('all');
    const [sortBy, setSortBy] = useState<'date' | 'photographer'>('date');

    return (
        <GalleryContext.Provider
            value={{
                photos,
                selectedPhoto,
                setSelectedPhoto,
                filter,
                setFilter,
                sortBy,
                setSortBy
            }}
        >
            {children}
        </GalleryContext.Provider>
    );
}

export function useGallery() {
    const context = useContext(GalleryContext);
    if (context === undefined) {
        throw new Error('useGallery must be used within a GalleryProvider');
    }
    return context;
} 