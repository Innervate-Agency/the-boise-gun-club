// use client
'use client';

import HeroSection from '@components/home/HeroSection';
import SmokyButton from '../../components/ui/SmokeyButton';
import GlassCard from '../../components/ui/GlassCard';

export default function Home() {
  return (
    <main>
      <HeroSection />

      <div className="container mx-auto p-8 py-16">
        <h2 className="text-3xl font-bold mb-10 text-leonard-yellow text-center" style={{
          fontFamily: 'var(--font-dm-sans)',
          letterSpacing: '-0.04em'
        }}>
          EXPERIENCE THE TRADITION
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <GlassCard>
            <h3 className="text-xl font-bold mb-2 text-leonard-yellow">Membership</h3>
            <p className="mb-4">Join our community of shooting enthusiasts.</p>
            <SmokyButton variant="secondary">Join Now</SmokyButton>
          </GlassCard>

          <GlassCard>
            <h3 className="text-xl font-bold mb-2 text-leonard-yellow">Events</h3>
            <p className="mb-4">Check out our upcoming competitions and gatherings.</p>
            <SmokyButton variant="secondary">See Calendar</SmokyButton>
          </GlassCard>

          <GlassCard>
            <h3 className="text-xl font-bold mb-2 text-leonard-yellow">Training</h3>
            <p className="mb-4">Improve your skills with our certified instructors.</p>
            <SmokyButton variant="secondary">Learn More</SmokyButton>
          </GlassCard>
        </div>
      </div>
    </main>
  );
}