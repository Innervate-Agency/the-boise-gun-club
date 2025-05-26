'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const ParticleAnimation = dynamic(() => import('@/components/effects/ParticleAnimation'), { ssr: false });

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <ParticleAnimation
          colors={['#F28705', '#F2CB05']}
          count={15}
          size={2}
          speed={0.2}
          className="opacity-20"
        />
      </div>
      
      {/* Grid background */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          backgroundImage: 'url(/images/Grid/Grid (3).jpg)',
          backgroundRepeat: 'repeat',
          backgroundSize: 'contain',
          opacity: 0.05,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 Text */}
          <h1 className="font-heading text-8xl md:text-9xl uppercase text-[var(--accent-primary)] mb-4">
            404
          </h1>
          
          {/* Clay target animation */}
          <motion.div
            className="inline-block mb-8"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="w-24 h-24 bg-[var(--accent-secondary)] rounded-full relative">
              <div className="absolute inset-2 bg-[var(--accent-primary)] rounded-full" />
              <div className="absolute inset-4 bg-[var(--bg-primary)] rounded-full" />
            </div>
          </motion.div>
          
          <h2 className="font-heading text-3xl md:text-4xl uppercase text-[var(--text-primary)] mb-4">
            Target Not Found
          </h2>
          
          <p className="font-body text-lg md:text-xl text-[var(--text-secondary)] mb-8 max-w-md mx-auto">
            Looks like this clay pigeon flew off course. Let&apos;s get you back on target.
          </p>
          
          <Link
            href="/"
            className="inline-block bg-[var(--accent-primary)] text-white px-8 py-4 rounded-lg font-body text-lg font-semibold uppercase tracking-wider hover:bg-[var(--accent-secondary)] transition-colors duration-300"
          >
            Return Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
} 