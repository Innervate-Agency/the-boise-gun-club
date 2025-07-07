import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import UpcomingEvents from '@/components/home/UpcomingEvents';
import MemberSpotlight from '@/components/home/MemberSpotlight';
import PricingSection from '@/components/home/PricingSection';
import ClubRulesSection from '@/components/home/ClubRulesSection';
import PhotoSubmissionSection from '@/components/home/PhotoSubmissionSection';
import ContactInfo from '@/components/home/ContactInfo';
import GalleryPreview from '@/components/home/GalleryPreview';
import { client } from '@/lib/strapi'; // Assuming a Strapi client library
import { Testimonial } from '@/types/content'; // Assuming a Testimonial type

async function getHomePageData() {
  // In a real app, you would fetch this from your Strapi instance
  // For now, we'll use mock data that matches the Strapi structure.
  const testimonials: Testimonial[] = await client.find('testimonials', {
    filters: { featured: { $eq: true } },
    pagination: { limit: 1 },
  });
  
  const galleryItems = await client.find('gallery-items', {
    sort: 'year:desc',
    pagination: { limit: 4 },
  });

  return {
    memberSpotlight: testimonials[0] || null,
    galleryItems: galleryItems.results || [],
  };
}

export default async function HomePage() {
  const { memberSpotlight, galleryItems } = await getHomePageData();

  return (
    <main className="min-h-screen bg-bg-primary text-text-primary">
      <HeroSection />
      <UpcomingEvents />
      {memberSpotlight && <MemberSpotlight {...memberSpotlight} />}
      <PricingSection />
      <ClubRulesSection />
      {galleryItems.length > 0 && <GalleryPreview galleryItems={galleryItems} />}
      <PhotoSubmissionSection />
      <ContactInfo />
    </main>
  );
}
