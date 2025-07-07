'use client';

import TemplatePage from '@/components/layout/TemplatePage';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Section from '@/components/layout/Section';

export default function Page() {
  const page = {
    title: 'Local Weather Conditions',
    description: 'A detailed weather forecast and our policies on operating during inclement weather.',
    sections: [
      {
        title: 'Live Boise Forecast',
        subtitle: 'Plan Your Shooting Day',
        description: `Here is the up-to-the-minute weather forecast for the club's location. We operate in most conditions, including rain and snow, but understanding the wind and temperature can help you prepare for a more comfortable and successful day of shooting.`,
        link: '#',
        linkText: 'View Detailed Radar',
        imageUrl: '/images/events.webp'
      },
      {
        title: 'Inclement Weather Policy',
        subtitle: 'When We Pause for Safety',
        description: `The safety of our shooters and staff is our absolute priority. We will immediately suspend all shooting activities in the event of lightning in the area or sustained high winds that make conditions unsafe. <br/><br/>Updates on weather-related closures will always be posted on the <a href="/ranges/status" class="text-leonard-yellow hover:underline">Range Status</a> page.`,
        link: '/ranges/status',
        linkText: 'Check Live Range Status',
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