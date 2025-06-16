'use client';

import TemplatePage from '@/components/layout/TemplatePage';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Section from '@/components/layout/Section';

export default function Page() {
  const page = {
    title: 'Range Reservations',
    description: 'Book your time on our trap, skeet, and sporting clays courses to guarantee your spot.',
    sections: [
      {
        title: 'Online Booking Portal',
        subtitle: 'Reserve Your Squad\'s Spot',
        description: `While walk-ins are welcome, we highly recommend making a reservation, especially for groups or during peak weekend hours. Our online portal allows members to book a specific time on any of our fields or courses up to two weeks in advance. <br/><br/>This is the best way to ensure your preferred time is available.`,
        link: '#',
        linkText: 'Access Booking Portal',
        imageUrl: 'https://picsum.photos/seed/booking-portal/800/600'
      },
      {
        title: 'Corporate & Group Events',
        subtitle: 'A Unique Outing for Your Team',
        description: `Host a memorable event at our club. We specialize in corporate team-building events, client entertainment, and private parties. Our packages include all necessary equipment, safety instruction, and a catered meal option. <br/><br/>It's a safe, exciting, and unique experience that your group will talk about for years to come.`,
        link: '/contact',
        linkText: 'Inquire About Group Rates',
        imageUrl: 'https://picsum.photos/seed/corporate-events/800/600'
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