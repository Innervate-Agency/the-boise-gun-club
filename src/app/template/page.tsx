'use client';

import { motion } from 'framer-motion';
import { useContent } from '@/hooks/useContent';
import ParticleAnimation from '@/components/effects/ParticleAnimation';
import Link from 'next/link';

interface TemplatePageProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

const TemplatePage: React.FC<TemplatePageProps> = ({ title, description, children }) => {
  const { content, loading, error } = useContent();

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: "easeOut" }
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
  };

  if (loading) {
    return (
      <div className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] overflow-hidden flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[var(--accent-primary)] mx-auto mb-4"></div>
          <p className="text-xl font-['Noto Sans']">Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] overflow-hidden flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-red-400 font-['Noto Sans']">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] overflow-hidden">
      <ParticleAnimation />
      
      <motion.header 
        className="relative py-24 md:py-32 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold tracking-tight text-shadow-lg font-['Rajdhani']"
            variants={sectionVariants} custom={0}
          >
            {title}
          </motion.h1>
          <motion.p 
            className="mt-6 text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl font-['Noto Sans']"
            variants={sectionVariants} custom={1}
          >
            {description}
          </motion.p>
        </div>
      </motion.header>

      <main className="relative z-10 py-24">
        <div className="container mx-auto px-4">
          {/* Default content structure with zig-zag layout */}
          <div className="space-y-24">
            {/* Left-aligned section */}
            <motion.section 
              className="glass-mica rounded-2xl p-8 md:p-12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6 font-['Rajdhani']">Section Title</h2>
              <h3 className="text-2xl mb-4 text-[var(--accent-primary)] font-['Rajdhani']">Subtitle</h3>
              <p className="text-[var(--text-secondary)] mb-6 font-['Noto Sans']">
                Section description goes here. This provides context for the content below.
              </p>
              <div className="flex gap-4">
                <Link href="/related-page" className="text-[var(--accent-primary)] hover:underline font-['Noto Sans']">
                  Related Link →
                </Link>
              </div>
            </motion.section>

            {/* Right-aligned section */}
            <motion.section 
              className="glass-mica rounded-2xl p-8 md:p-12 ml-auto max-w-3xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6 font-['Rajdhani']">Another Section</h2>
              <h3 className="text-2xl mb-4 text-[var(--accent-primary)] font-['Rajdhani']">Subtitle</h3>
              <p className="text-[var(--text-secondary)] mb-6 font-['Noto Sans']">
                Another section description. This creates a natural flow down the page.
              </p>
              <div className="flex gap-4">
                <Link href="/another-page" className="text-[var(--accent-primary)] hover:underline font-['Noto Sans']">
                  Another Link →
                </Link>
              </div>
            </motion.section>

            {/* Custom content */}
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default TemplatePage; 