'use client';

import TemplatePage from '@/components/layout/TemplatePage';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Section from '@/components/layout/Section';

export default function Page() {
  const page = {
    title: 'Weekly Shoot Schedule',
    description: 'Find our regular hours for trap, skeet, and sporting clays, plus special weekly events designed for all skill levels. Your week of shooting starts here.',
    sections: [
      {
        title: 'Regular Hours',
        subtitle: 'Open Shooting Times',
        description: `Our club offers extensive shooting hours throughout the week to accommodate our members and guests. All 12 of our combination trap and skeet fields, as well as our two world-class sporting clays courses, are open during these times. <br/><br/>Please note that the last squad goes out one hour before closing time. We recommend checking the <a href="/ranges/status" class="text-leonard-yellow hover:underline">live range status</a> page before your visit for any last-minute updates on closures due to weather or private events.`,
        link: '/schedule/reservations',
        linkText: 'Reserve a Time Slot',
        imageUrl: '/images/events.webp'
      },
      {
        title: 'Weekly Leagues',
        subtitle: 'Friendly Competition, Serious Fun',
        description: `Looking to test your skills in a friendly but competitive environment? Our weekly leagues are the perfect opportunity. We offer leagues for Trap, Skeet, and Sporting Clays that run in 8-week seasons throughout the year. <br/><br/>It's a fantastic way to sharpen your abilities, enjoy the camaraderie of fellow shooters, and vie for bragging rights. Shooters of all skill levels are encouraged to join, with handicap systems in place to ensure a level playing field.`,
        link: '/schedule/competitions',
        linkText: 'View League Standings',
        imageUrl: '/images/events.webp'
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                <motion.div 
                  className={`relative h-80 md:h-96 w-full rounded-lg overflow-hidden shadow-2xl ${contentOrder}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Image src={section.imageUrl} alt={section.title} fill className="object-cover transform hover:scale-105 transition-transform duration-500" />
                </motion.div>
                <motion.div 
                  className="text-left"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h2 className="text-4xl font-bold uppercase text-leonard-yellow mb-4">{section.title}</h2>
                  <h3 className="text-2xl font-semibold text-gray-300 mb-6">{section.subtitle}</h3>
                  <div className="text-lg text-gray-200 mb-8 space-y-4" dangerouslySetInnerHTML={{ __html: section.description }} />
                  {section.link && (
                    <Link href={section.link} className="inline-block bg-lahoma-orange text-dark-bg font-bold py-3 px-8 rounded-lg text-lg uppercase tracking-wider hover:bg-leonard-yellow transition-colors duration-300 shadow-lg">
                      {section.linkText}
                    </Link>
                  )}
                </motion.div>
              </div>
            </Section>
          );
        })}
      </div>
    </TemplatePage>
  );
}