const fs = require('fs');
const path = require('path');
const pages = require('./new-page-content.js');

const generatePageContent = (page) => {
  return `'use client';

import TemplatePage from '@/app/template/page';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Page() {
  return (
    <TemplatePage
      title="${page.title}"
      description="${page.description}"
    >
      <div className="space-y-24">
        ${page.sections.map((section, index) => `
        <motion.section 
          className="glass-mica rounded-2xl p-8 md:p-12 ${index % 2 === 1 ? 'ml-auto max-w-3xl' : ''}"
          initial={{ opacity: 0, x: ${index % 2 === 0 ? '-50' : '50'} }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6 font-['Rajdhani']">${section.title}</h2>
          <h3 className="text-2xl mb-4 text-[var(--accent-primary)] font-['Rajdhani']">${section.subtitle}</h3>
          <p className="text-[var(--text-secondary)] mb-6 font-['Noto Sans']">
            ${section.description}
          </p>
          <div className="flex gap-4">
            <Link href="${section.link}" className="text-[var(--accent-primary)] hover:underline font-['Noto Sans']">
              ${section.linkText || 'Learn More →'}
            </Link>
          </div>
        </motion.section>
        `).join('\\n')}
      </div>
    </TemplatePage>
  );
}`;
};

pages.forEach((page) => {
  const pageDirPath = path.join('src/app', page.path);
  const pageFilePath = path.join(pageDirPath, 'page.tsx');
  const pageContent = generatePageContent(page);

  // Ensure the directory exists before writing the file
  fs.mkdirSync(pageDirPath, { recursive: true });

  fs.writeFileSync(pageFilePath, pageContent);
  console.log(`Created ${page.path}/page.tsx`);
});