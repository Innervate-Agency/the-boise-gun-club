'use client'

import { PageHero } from '@/components/ui/page-hero';
import { GalleryGrid } from '@/components/ui/gallery-showcase';
import { Camera } from 'lucide-react';

const sampleImages = [
  {
    id: '1',
    src: '/images/events.webp',
    alt: 'Shooter taking aim at clay targets',
    title: 'Championship Tournament 2024',
    description: 'Action shot from our annual championship tournament',
    photographer: 'Club Photography Team',
    date: '2024-01-15',
    category: 'Tournaments',
    tags: ['tournament', 'action', 'shooting'],
    likes: 24,
    downloads: 8,
    featured: true
  },
  {
    id: '2',
    src: '/images/training.webp',
    alt: 'Clay target fragments in slow motion',
    title: 'Perfect Shot',
    description: 'Capturing the moment of impact in stunning detail',
    photographer: 'Mike Rodriguez',
    date: '2024-01-12',
    category: 'Action',
    tags: ['clay targets', 'action', 'slow motion'],
    likes: 18,
    downloads: 12
  },
  {
    id: '3',
    src: '/images/membership.webp',
    alt: 'Safety equipment and shooting gear',
    title: 'Safety First',
    description: 'Essential safety equipment for all shooters',
    photographer: 'Sarah Johnson',
    date: '2024-01-10',
    category: 'Safety',
    tags: ['safety', 'equipment', 'gear'],
    likes: 15,
    downloads: 6,
    type: 'image' as const
  },
  {
    id: '4',
    src: '/images/hero-bg.webp',
    alt: 'Club facilities overview',
    title: 'World Class Facilities',
    description: 'Our state-of-the-art shooting ranges and amenities',
    photographer: 'Club Staff',
    date: '2024-01-08',
    category: 'Facilities',
    tags: ['facilities', 'ranges', 'amenities'],
    likes: 20,
    downloads: 10
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-bg-primary text-text-primary">
      <PageHero
        title="Photo Gallery"
        subtitle="Explore our facilities, events, and community through our photo collection."
        icon={Camera}
        backgroundPreset="cool"
        gradient="from-brand-blue to-brand-blue-dark"
      />
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid
            images={sampleImages}
            variant="masonry"
            showFilters={true}
            showStats={true}
            columns={3}
          />
        </div>
      </section>
    </main>
  );
}