'use client';

import TemplatePage from '@/components/layout/TemplatePage';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Section from '@/components/layout/Section';

export default function Page() {
  const page = {
    title: 'Competition Calendar',
    description: 'From registered NSCA and NSSA tournaments to our famous club fun shoots, find your next challenge here.',
    sections: [
      {
        title: 'Registered Tournaments',
        subtitle: 'NSCA & NSSA Sanctioned Events',
        description: `As a premier shotgun facility, we are proud to host a full calendar of registered shoots. These events draw competitors from across the region and offer a chance to test your skills against the best. <br/><br/>All scores are submitted to the respective governing bodies. Pre-registration is highly encouraged as these events often fill up quickly.`,
        link: '/forum/matches',
        linkText: 'Register for an Event',
        imageUrl: 'https://picsum.photos/seed/registered-shoots/800/600'
      },
      {
        title: 'Fun Shoots & Club Events',
        subtitle: 'Casual, Themed Competitions',
        description: `Join us for our popular fun shoots! These events are designed for shooters of all abilities and focus on having a great time. Events include our annual Turkey Shoot, charity fundraisers, and unique themed competitions like "zombie apocalypse" sporting clays. <br/><br/>It's a great way to enjoy the sport in a relaxed and social atmosphere.`,
        link: '/gallery',
        linkText: 'See Past Event Photos',
        imageUrl: 'https://picsum.photos/seed/fun-shoots/800/600'
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