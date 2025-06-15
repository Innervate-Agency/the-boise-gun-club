'use client';

import TemplatePage from '@/app/template/page';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Section from '@/components/layout/Section';

export default function Page() {
  const page = {
    title: 'Emergency Information & Procedures',
    description: 'In the unlikely event of an emergency, here is the critical information you need to know.',
    sections: [
      {
        title: 'Emergency Action Plan',
        subtitle: 'In Case of Any Emergency',
        description: `In any life-threatening emergency, the first and most important step is to **call 911**. After contacting emergency services, immediately notify the nearest Range Safety Officer or clubhouse staff member. <br/><br/>AEDs (Automated External Defibrillators) and comprehensive first-aid kits are located in the clubhouse and at the sporting clays halfway house.`,
        link: '#',
        linkText: 'View Clubhouse Map',
        imageUrl: 'https://picsum.photos/seed/emergency-plan/800/600'
      },
      {
        title: 'Location & Contact Information',
        subtitle: 'Critical Info for First Responders',
        description: `Our physical address is **123 Gun Club Road, Boise, ID 83709**. Providing this precise address to 911 dispatchers is essential. The direct line to the clubhouse is **(208) 555-1212**. <br/><br/>Please program this number into your phone before visiting.`,
        link: '/contact',
        linkText: 'See All Club Contacts',
        imageUrl: 'https://picsum.photos/seed/emergency-contact/800/600'
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