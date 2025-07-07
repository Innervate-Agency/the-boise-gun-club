'use client';

import React from 'react';
import HeroSection from '../components/home/HeroSection';
import UpcomingEvents from '../components/home/UpcomingEvents';
import MemberSpotlight from '../components/home/MemberSpotlight';
import PricingSection from '../components/home/PricingSection';
import ClubRulesSection from '../components/home/ClubRulesSection';
import PhotoSubmissionSection from '../components/home/PhotoSubmissionSection';
import ContactInfo from '../components/home/ContactInfo';

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
      <HeroSection />
      <UpcomingEvents />
      <MemberSpotlight {...memberSpotlight} />
      <PricingSection />
      <ClubRulesSection />
      <PhotoSubmissionSection />
      <ContactInfo />
    </main>
  );
}