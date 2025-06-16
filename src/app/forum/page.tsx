'use client';

import TemplatePage from '@/components/layout/TemplatePage';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Page() {
  return (
    <TemplatePage
      title="Discussion Forum"
      description="Join member discussions and Q&A sessions."
    >
      <div className="space-y-24">
        
        <motion.section 
          className="glass-mica rounded-2xl p-8 md:p-12 "
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6 font-['Rajdhani']">Recent Discussions</h2>
          <h3 className="text-2xl mb-4 text-[var(--accent-primary)] font-['Rajdhani']">Latest Topics</h3>
          <p className="text-[var(--text-secondary)] mb-6 font-['Noto Sans']">
            Browse the most recent forum discussions.
          </p>
          <div className="flex gap-4">
            <Link href="/forum/general" className="text-[var(--accent-primary)] hover:underline font-['Noto Sans']">
              Learn More →
            </Link>
          </div>
        </motion.section>
        

        <motion.section 
          className="glass-mica rounded-2xl p-8 md:p-12 ml-auto max-w-3xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6 font-['Rajdhani']">Popular Categories</h2>
          <h3 className="text-2xl mb-4 text-[var(--accent-primary)] font-['Rajdhani']">Forum Sections</h3>
          <p className="text-[var(--text-secondary)] mb-6 font-['Noto Sans']">
            Explore different discussion categories.
          </p>
          <div className="flex gap-4">
            <Link href="/forum/matches" className="text-[var(--accent-primary)] hover:underline font-['Noto Sans']">
              Learn More →
            </Link>
          </div>
        </motion.section>
        
      </div>
    </TemplatePage>
  );
}