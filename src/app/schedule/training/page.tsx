'use client';

import TemplatePage from '@/components/layout/TemplatePage';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Section from '@/components/layout/Section';
import { Button } from '@/components/ui/button';

export default function Page() {
  const page = {
    title: 'Training & Instruction',
    description: 'Whether you\'ve never held a shotgun or you\'re looking to gain a competitive edge, our certified instructors are here to help.',
    sections: [
      {
        title: 'New Shooter Introduction',
        subtitle: 'Learn the Fundamentals Safely',
        description: `Our "First Shots" program is the perfect introduction to the world of shotgun sports. In a private, one-on-one setting, a certified instructor will guide you through firearm safety, range etiquette, and the core mechanics of breaking clays in trap, skeet, and sporting. <br/><br/>We provide everything you need, including a shotgun, ammunition, and safety gear.`,
        link: '/contact',
        linkText: 'Book Your First Lesson',
        imageUrl: '/images/events.webp'
      },
      {
        title: 'Advanced Competitive Coaching',
        subtitle: 'Refine Your Mental and Physical Game',
        description: `For the experienced shooter, our advanced coaching sessions focus on taking your performance to the next level. Our instructors, many of whom are master-class competitors themselves, can help diagnose issues, refine your technique, and develop a stronger mental game for competition. <br/><br/>Video analysis and personalized drills are available.`,
        link: '/contact',
        linkText: 'Meet Our Instructors',
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
                    <h2 className="text-3xl font-heading uppercase text-[var(--accent-primary)] mb-2">{section.title}</h2>
                    <h3 className="text-xl font-heading text-secondary-foreground mb-4">{section.subtitle}</h3>
                    <div className="text-lg text-primary-foreground mb-6 space-y-4" dangerouslySetInnerHTML={{ __html: section.description }} />
                    {section.link && (
                      <Button asChild>
                        <Link href={section.link}>{section.linkText}</Link>
                      </Button>
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