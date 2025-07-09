import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import UpcomingEvents from '@/components/home/UpcomingEvents';
import MemberSpotlight from '@/components/home/MemberSpotlight';
import PricingSection from '@/components/home/PricingSection';
import ClubRulesSection from '@/components/home/ClubRulesSection';
import PhotoSubmissionSection from '@/components/home/PhotoSubmissionSection';
import ContactInfo from '@/components/home/ContactInfo';
import { ScrollMotion, ScrollGrid } from '@/components/effects/ScrollMotion';

const memberSpotlight = {
  name: 'Jane Doe',
  quote: 'The Boise Gun Club is my second family. I have grown so much as a shooter and a person here. The welcoming community and excellent facilities make this the best place to enjoy shotgun sports.',
  imageUrl: '/images/membership.webp',
  yearJoined: 2015,
  achievements: ['State Champion 2022', 'Club Volunteer', '100 Straight Patch']
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      {/* Hero section - no animation needed, immediate impact */}
      <HeroSection />
      
      {/* Upcoming Events - subtle fade-up */}
      <ScrollMotion variant="card" delay={100}>
        <UpcomingEvents />
      </ScrollMotion>
      
      {/* Member Spotlight - fade-up with slight delay */}
      <ScrollMotion variant="text" delay={200}>
        <MemberSpotlight {...memberSpotlight} />
      </ScrollMotion>
      
      {/* Pricing Section - card-style animation */}
      <ScrollMotion variant="card" delay={150}>
        <PricingSection />
      </ScrollMotion>
      
      {/* Club Rules - professional text animation */}
      <ScrollMotion variant="text" delay={100}>
        <ClubRulesSection />
      </ScrollMotion>
      
      {/* Photo Submission - card animation with delay */}
      <ScrollMotion variant="card" delay={200}>
        <PhotoSubmissionSection />
      </ScrollMotion>
      
      {/* Contact Info - final section, simple fade */}
      <ScrollMotion variant="default">
        <ContactInfo />
      </ScrollMotion>
    </main>
  );
}