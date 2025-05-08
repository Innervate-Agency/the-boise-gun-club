// use client
'use client';

import SmokyButton from '../../components/ui/SmokeyButton';
import GlassCard from '../../components/ui/GlassCard';

export default function Home() {

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-leonard-yellow">Welcome to Boise Gun Club</h1>
      <p className="mb-8">Your premier destination for shooting sports in the Treasure Valley.</p>

      <div className="mb-8">
        <SmokyButton>View Events</SmokyButton>
        <SmokyButton variant="secondary" className="ml-4">Learn More</SmokyButton>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
  );
}