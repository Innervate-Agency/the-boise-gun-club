'use client';

import TemplatePage from '@/components/layout/TemplatePage';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Section from '@/components/layout/Section';

export default function Page() {
  const page = {
    title: 'Forum: Match Discussion',
    description: 'The place to discuss upcoming competitions, find squadmates, share results, and talk strategy.',
    sections: [
      {
        title: 'Squadding & Team-Finding',
        subtitle: 'Find a Squad for the Next Big Shoot',
        description: `Don't have a full squad for the upcoming tournament? Post here to find other members to team up with. This is the best place to coordinate and ensure you have a group to shoot with.`,
        link: '#',
        linkText: 'View the Squadding Board',
        imageUrl: 'https://picsum.photos/seed/match-squadding/800/600'
      },
      {
        title: 'Post-Match Banter & Results',
        subtitle: 'Share Your Experience',
        description: `Just finished a competition? Come here to congratulate the winners, discuss the target presentations, and share your triumphs and tribulations from the course. This is where the community comes together to celebrate the sport.`,
        link: '#',
        linkText: 'Join the Post-Match Discussion',
        imageUrl: 'https://picsum.photos/seed/match-results/800/600'
      }
    ]
  };

  return (
    <TemplatePage
      title={page.title}
      description={page.description}
    >
      <div className="space-y-0">
        {page.sections.map((section, index) => {
          const contentOrder = index % 2 === 1 ? 'md:order-first' : '';
          const background = index % 2 === 0 ? 'grid' : 'mist';

          return (
            <Section key={index} background={background}>
              <motion.div
                className="glass-mica rounded-2xl p-8 md:p-12"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                  <div className={`relative h-64 md:h-80 w-full rounded-lg overflow-hidden ${contentOrder}`}>
                    <Image src={section.imageUrl} alt={section.title} fill className="object-cover transform hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="text-left">
                    <h2 className="text-3xl font-bold uppercase text-leonard-yellow mb-2">{section.title}</h2>
                    <h3 className="text-xl font-semibold text-gray-300 mb-4">{section.subtitle}</h3>
                    <div className="text-lg text-gray-200 mb-6 space-y-4" dangerouslySetInnerHTML={{ __html: section.description }} />
                    {section.link && (
                      <Link href={section.link} className="inline-block bg-lahoma-orange text-dark-bg font-bold py-2 px-6 rounded-lg hover:bg-leonard-yellow transition-colors duration-300">
                        {section.linkText}
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            </Section>
          );
        })}
      </div>
    </TemplatePage>
  );
}