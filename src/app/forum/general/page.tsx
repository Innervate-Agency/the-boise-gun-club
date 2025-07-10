'use client';

import TemplatePage from '@/components/layout/TemplatePage';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Section from '@/components/layout/Section';

export default function Page() {
  const page = {
    title: 'Forum: General Discussion',
    description: 'A place for all other club-related chat, from shotgun talk and reloading tips to off-topic conversations.',
    sections: [
      {
        title: 'The Gunsmith\'s Corner',
        subtitle: 'All About Shotguns',
        description: `This is the place to talk about the tools of our trade. Discuss the merits of different shotgun brands, the nuances of gun fit, cleaning and maintenance best practices, and the latest innovations in shotgun technology.`,
        link: '#',
        linkText: 'Go to Gunsmith\'s Corner',
        imageUrl: '/images/events.webp'
      },
      {
        title: 'The Reloading Bench',
        subtitle: 'Crafting the Perfect Load',
        description: `For the dedicated reloaders, this forum is for you. Share and discuss load data, ask questions about presses and components, and explore the science and art of crafting the perfect, consistent shotshell for your discipline. <br/><br/>**Disclaimer:** Always consult published load data. Use any information shared here at your own risk.`,
        link: '#',
        linkText: 'Go to the Reloading Bench',
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
          const background = index % 2 === 0 ? 'grid' : 'dots';

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
                    <h2 className="text-3xl font-bold uppercase text-color-leonard-yellow mb-2">{section.title}</h2>
                    <h3 className="text-xl font-semibold text-gray-300 mb-4">{section.subtitle}</h3>
                    <div className="text-lg text-gray-200 mb-6 space-y-4" dangerouslySetInnerHTML={{ __html: section.description }} />
                    {section.link && (
                      <Link href={section.link} className="inline-block bg-color-lahoma-orange text-dark-bg font-bold py-2 px-6 rounded-lg hover:bg-color-leonard-yellow transition-colors duration-300">
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