'use client';

import TemplatePage from '@/components/layout/TemplatePage';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Section from '@/components/layout/Section';

export default function Page() {
  const page = {
    title: 'Live Range Status',
    description: 'Get real-time updates on range conditions, closures, and field availability before you visit.',
    sections: [
      {
        title: 'Current Operating Conditions',
        subtitle: 'What to Expect on the Range Today',
        description: `This section provides live updates from the clubhouse. Check here for information on weather-related delays or closures, any ongoing maintenance projects, or fields reserved for private events. <br/><br/>We strive to keep this updated in real-time to ensure you have a smooth experience upon arrival.`,
        link: '/weather',
        linkText: 'View Local Forecast',
        imageUrl: 'https://picsum.photos/seed/range-conditions/800/600'
      },
      {
        title: 'Upcoming Maintenance & Events',
        subtitle: 'Plan Your Visit Around Scheduled Closures',
        description: `To maintain our world-class facilities, we occasionally need to close specific fields or courses for maintenance. We also host major tournaments that may reserve large portions of the club. <br/><br/>This calendar provides a forward-looking view of these events so you can plan your shooting schedule accordingly.`,
        link: '/schedule/competitions',
        linkText: 'See Full Competition Schedule',
        imageUrl: 'https://picsum.photos/seed/range-maintenance/800/600'
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