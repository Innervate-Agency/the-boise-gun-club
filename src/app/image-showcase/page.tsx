'use client';

import React from 'react';
import { motion } from 'framer-motion';
import LocalImage, { HeroImage, EventImage, TrainingImage, MembershipImage } from '@/components/ui/UnsplashImage';

const ImageShowcasePage = () => {
  const categories = [
    { name: 'Hero Images', category: 'hero' as const, description: 'Stunning background images for hero sections' },
    { name: 'Events', category: 'events' as const, description: 'Competitive shooting events and tournaments' },
    { name: 'Training', category: 'training' as const, description: 'Instruction and skill development sessions' },
    { name: 'Membership', category: 'membership' as const, description: 'Community and club facilities' },
    { name: 'Ranges', category: 'ranges' as const, description: 'Shooting range facilities and equipment' },
    { name: 'Competition', category: 'competition' as const, description: 'Championships and competitive events' },
    { name: 'Equipment', category: 'equipment' as const, description: 'Shooting sports gear and accessories' },
    { name: 'Community', category: 'community' as const, description: 'Social events and club gatherings' }
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-['Rajdhani'] text-6xl md:text-8xl uppercase text-[var(--text-primary)] mb-4">
            Image <span className="text-[var(--accent-gold)]">Showcase</span>
          </h1>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto font-['Noto Sans'] text-lg">
            High-quality shooting sports photography from our local image gallery
          </p>
        </motion.div>

        {/* Hero Section Demo */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="font-['Rajdhani'] text-4xl text-center mb-8 text-[var(--accent-gold)]">
            HERO IMAGE INTEGRATION
          </h2>
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <HeroImage
              fill={true}
              className="object-cover"
              priority={true}
              width={1920}
              height={600}
              alt="Dynamic Hero Background"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
              <div className="px-8">
                <h3 className="font-['Rajdhani'] text-4xl uppercase text-[var(--text-primary)] mb-2">
                  Dynamic Hero Backgrounds
                </h3>
                <p className="text-[var(--text-secondary)] font-['Noto Sans'] text-lg">
                  Automatically sourced from curated shooting sports photography
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Category Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="font-['Rajdhani'] text-4xl text-center mb-12 text-[var(--accent-gold)]">
            CATEGORY EXAMPLES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((cat, index) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="group"
              >
                <div className="backdrop-blur-xl bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/10 rounded-xl overflow-hidden shadow-2xl hover:shadow-[0_20px_50px_rgba(242,135,5,0.15)] transition-all duration-500">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <LocalImage
                      fallback="/images/hero-bg.webp"
                      alt={cat.name}
                      fill={true}
                      className="object-cover transition-all duration-700 group-hover:scale-110"
                      width={400}
                      height={300}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-['Rajdhani'] text-xl uppercase text-[var(--text-primary)] mb-2">
                      {cat.name}
                    </h3>
                    <p className="text-[var(--text-secondary)] text-sm font-['Noto Sans']">
                      {cat.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Convenience Components Demo */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="mt-20"
        >
          <h2 className="font-['Rajdhani'] text-4xl text-center mb-12 text-[var(--accent-gold)]">
            CONVENIENCE COMPONENTS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Event Image */}
            <div className="backdrop-blur-xl bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/10 rounded-xl overflow-hidden">
              <div className="relative h-48">
                <EventImage
                  fill={true}
                  className="object-cover"
                  width={400}
                  height={300}
                  alt="Event Photography"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-['Noto Sans'] text-[var(--text-primary)]">
                    &lt;EventImage /&gt;
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-['Rajdhani'] text-lg text-[var(--text-primary)]">Event Component</h3>
                <p className="text-[var(--text-secondary)] text-sm">Pre-configured for event imagery</p>
              </div>
            </div>

            {/* Training Image */}
            <div className="backdrop-blur-xl bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/10 rounded-xl overflow-hidden">
              <div className="relative h-48">
                <TrainingImage
                  fill={true}
                  className="object-cover"
                  width={400}
                  height={300}
                  alt="Training Photography"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-['Noto Sans'] text-[var(--text-primary)]">
                    &lt;TrainingImage /&gt;
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-['Rajdhani'] text-lg text-[var(--text-primary)]">Training Component</h3>
                <p className="text-[var(--text-secondary)] text-sm">Pre-configured for training imagery</p>
              </div>
            </div>

            {/* Membership Image */}
            <div className="backdrop-blur-xl bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/10 rounded-xl overflow-hidden">
              <div className="relative h-48">
                <MembershipImage
                  fill={true}
                  className="object-cover"
                  width={400}
                  height={300}
                  alt="Membership Photography"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-['Noto Sans'] text-[var(--text-primary)]">
                    &lt;MembershipImage /&gt;
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-['Rajdhani'] text-lg text-[var(--text-primary)]">Membership Component</h3>
                <p className="text-[var(--text-secondary)] text-sm">Pre-configured for membership imagery</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Technical Features */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-20 mb-16"
        >
          <h2 className="font-['Rajdhani'] text-4xl text-center mb-12 text-[var(--accent-gold)]">
            TECHNICAL FEATURES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Automatic Fallbacks',
                description: 'Local images when API unavailable',
                icon: '🔄'
              },
              {
                title: 'Loading States',
                description: 'Shimmer animations during load',
                icon: '✨'
              },
              {
                title: 'Error Handling',
                description: 'Graceful degradation to fallbacks',
                icon: '🛡️'
              },
              {
                title: 'Performance',
                description: 'WebP format and optimization',
                icon: '⚡'
              }
            ].map((feature, index) => (
              <div key={index} className="backdrop-blur-xl bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/10 rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-['Rajdhani'] text-lg text-[var(--text-primary)] mb-2">{feature.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm font-['Noto Sans']">{feature.description}</p>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ImageShowcasePage;
