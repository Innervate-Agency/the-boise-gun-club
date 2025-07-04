'use client';

import { motion } from 'framer-motion';
import { useContent } from '@/hooks/useContent';
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
      
      <main className="relative z-10">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <motion.header
              className="text-center mb-16"
              variants={headerVariants}
              initial="hidden"
              animate="visible"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-['Rajdhani'] text-[var(--text-primary)] leading-tight">
                {title}
              </h1>
              <p className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-4xl mx-auto font-['Noto Sans'] leading-relaxed">
                {description}
              </p>
            </motion.header>

            {/* Sample Content */}
            <motion.section
              className="mb-16"
              custom={0}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-['Rajdhani'] text-[var(--text-primary)]">
                Sample Section
              </h2>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed font-['Noto Sans'] mb-6">
                This is sample content to demonstrate the template structure. You can customize this content 
                and add your own sections, images, and interactive elements.
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
