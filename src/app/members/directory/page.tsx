'use client';

import TemplatePage from '@/components/layout/TemplatePage';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Section from '@/components/layout/Section';

export default function Page() {
  const page = {
    title: 'Member Directory',
    description: 'Connect with fellow shooting enthusiasts in our private, opt-in member directory.',
    sections: [
      {
        title: 'Find a Fellow Member',
        subtitle: 'Connect and Form Squads',
        description: `Looking to connect with other members? Our directory is a great way to find fellow shooters. To protect our members' privacy, the directory is only visible to logged-in members and only displays information that individuals have consented to share.`,
        link: '#',
        linkText: 'Search the Directory',
        imageUrl: '/images/events.webp'
      },
      {
        title: 'Manage Your Directory Profile',
        subtitle: 'Choose What You Share',
        description: `You are in complete control of your information. By default, you are not listed. If you wish to be included, you can opt-in via your member profile and select exactly which details (e.g., name, city, disciplines shot) you want to make visible to other members.`,
        link: '/members/portal',
        linkText: 'Update Your Privacy Settings',
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