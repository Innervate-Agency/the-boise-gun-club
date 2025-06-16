'use client';

import TemplatePage from '@/components/layout/TemplatePage';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Section from '@/components/layout/Section';

export default function Page() {
  const page = {
    title: 'Volunteer Opportunities',
    description: 'Our club thrives on the power of our volunteers. Learn how you can get involved and make a difference.',
    sections: [
      {
        title: 'The Heart of the Club',
        subtitle: 'Why Volunteering Matters',
        description: `As a 100% volunteer-run organization, your contributions are what allow us to maintain pristine facilities, run successful events, and keep membership dues affordable. We require each member to contribute 10 volunteer hours per year or pay a $200 work fee in lieu of service.`,
        link: '#',
        linkText: 'Log Your Volunteer Hours',
        imageUrl: 'https://picsum.photos/seed/volunteer-why/800/600'
      },
      {
        title: 'Find Your Role',
        subtitle: 'Opportunities for Everyone',
        description: `There are countless ways to help, regardless of your skills or physical abilities. We need assistance with range maintenance, target setting, event registration, groundskeeping, and special projects. <br/><br/>Check our volunteer board or contact our coordinator to find an opportunity that's right for you.`,
        link: '/contact',
        linkText: 'Contact the Volunteer Coordinator',
        imageUrl: 'https://picsum.photos/seed/volunteer-roles/800/600'
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