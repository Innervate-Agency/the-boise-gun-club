'use client';

import React from 'react';
import HeroSection from '../components/home/HeroSection';
import GalleryPreview from '../components/home/GalleryPreview';
import UpcomingEvents from '../components/home/UpcomingEvents';
import ClubRulesSection from '../components/home/ClubRulesSection';
import ContactInfo from '../components/home/ContactInfo';
import MemberSpotlight from '../components/home/MemberSpotlight';
import PricingSection from '../components/home/PricingSection';

const galleryItems = [
  { id: 1, src: '/images/Fractal/1.webp', alt: 'Opening Day 2023', year: '2023' },
  { id: 2, src: '/images/Fractal/2.webp', alt: 'State Championship', year: '2022' },
  { id: 3, src: '/images/Fractal/3.webp', alt: 'Youth Clinic', year: '2024' },
  { id: 4, src: '/images/Fractal/4.webp', alt: 'Ladies Night', year: '2023' },
];

const memberSpotlight = {
  name: 'Jane Doe',
  quote: 'The Boise Gun Club is my second family. I have grown so much as a shooter and a person here.',
  imageUrl: '/images/membership.webp',
  yearJoined: 2015,
  achievements: ['State Champion 2022', 'Club Volunteer', '100 Straight Patch']
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <HeroSection />
      <GalleryPreview galleryItems={galleryItems} />
      <UpcomingEvents />
      <MemberSpotlight {...memberSpotlight} />
      <PricingSection />
      <ClubRulesSection />
      <ContactInfo />
    </main>
  );
}
