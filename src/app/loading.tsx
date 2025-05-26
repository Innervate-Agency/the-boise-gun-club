'use client';

import LoadingSpinner from '@/components/ui/LoadingSpinner';
import dynamic from 'next/dynamic';

const ParticleAnimation = dynamic(() => import('@/components/effects/ParticleAnimation'), { ssr: false });

export default function Loading() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <ParticleAnimation
          colors={['#F28705', '#F2CB05']}
          count={8}
          size={1}
          speed={0.1}
          className="opacity-10"
        />
      </div>
      
      {/* Grid background */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          backgroundImage: 'url(/images/Grid/Grid (3).jpg)',
          backgroundRepeat: 'repeat',
          backgroundSize: 'contain',
          opacity: 0.02,
        }}
      />
      
      {/* Loading content */}
      <div className="relative z-10">
        <LoadingSpinner 
          size="lg" 
          text="Loading Boise Gun Club..."
          className="text-center"
        />
      </div>
    </div>
  );
} 