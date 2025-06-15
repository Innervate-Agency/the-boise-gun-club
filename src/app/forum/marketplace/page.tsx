'use client';

import TemplatePage from '@/app/template/page';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Section from '@/components/layout/Section';

export default function Page() {
  const page = {
    title: 'Forum: The Marketplace',
    description: 'A private classifieds section for members to buy, sell, and trade shotguns, reloading equipment, and shooting accessories.',
    sections: [
      {
        title: 'Marketplace Rules & Disclaimer',
        subtitle: 'Read Before Posting',
        description: `This is a private service for active members. All transactions are strictly between the buyer and seller; the club assumes no liability. All firearm sales must fully comply with all federal, state, and local laws, including transfers through a licensed FFL dealer where required. <br/><br/>Please read the full rules before posting.`,
        link: '#',
        linkText: 'Read Full Marketplace Rules',
        imageUrl: 'https://picsum.photos/seed/marketplace-rules/800/600'
      },
      {
        title: 'Browse the Listings',
        subtitle: 'Find Your Next Shotgun or Gear',
        description: `Explore listings organized into clear categories: Sporting Shotguns, Trap & Skeet Guns, Reloading Presses & Components, Shooting Vests & Gear, and Wanted to Buy. <br/><br/>You might just find that piece of equipment you've been looking for.`,
        link: '#',
        linkText: 'Go to the Marketplace',
        imageUrl: 'https://picsum.photos/seed/marketplace-listings/800/600'
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