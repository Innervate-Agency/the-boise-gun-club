'use client';

import TemplatePage from '@/app/template/page';
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
        imageUrl: 'https://picsum.photos/seed/weekly-hours/800/600'
      },
      {
        title: 'Weekly Leagues',
        subtitle: 'Friendly Competition, Serious Fun',
        description: `Looking to test your skills in a friendly but competitive environment? Our weekly leagues are the perfect opportunity. We offer leagues for Trap, Skeet, and Sporting Clays that run in 8-week seasons throughout the year. <br/><br/>It's a fantastic way to sharpen your abilities, enjoy the camaraderie of fellow shooters, and vie for bragging rights. Shooters of all skill levels are encouraged to join, with handicap systems in place to ensure a level playing field.`,
        link: '/schedule/competitions',
        linkText: 'View League Standings',
        imageUrl: 'https://picsum.photos/seed/weekly-leagues/800/600'
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
                    <Image src={section.imageUrl} alt={section.title} layout="fill" objectFit="cover" className="transform hover:scale-105 transition-transform duration-500" />
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