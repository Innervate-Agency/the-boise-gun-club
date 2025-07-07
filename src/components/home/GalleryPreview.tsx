import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  year: string;
}

interface GalleryPreviewProps {
  galleryItems: GalleryItem[];
}

const GalleryPreview: FC<GalleryPreviewProps> = ({ galleryItems }) => {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 bg-[var(--bg-secondary)]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl uppercase text-[var(--text-primary)] mb-4"
          >
            Club <span className="text-[var(--accent-gold)]">Gallery</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[var(--text-secondary)] max-w-2xl mx-auto font-body text-base sm:text-lg"
          >
            Capturing moments of excellence since 1898
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[var(--bg-primary)]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                
                {/* Year badge */}
                <div className="absolute top-4 right-4 backdrop-blur-md bg-black/30 border border-white/20 rounded-full px-3 py-1">
                  <span className="text-xs font-body text-[var(--accent-gold)]">{item.year}</span>
                </div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                  <h3 className="text-[var(--text-primary)] text-base sm:text-lg font-heading uppercase tracking-wide mb-1">
                    {item.alt}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-[var(--text-secondary)] text-sm font-body">
                      View Details
                    </p>
                    <svg 
                      className="w-4 h-4 text-[var(--text-secondary)] transform transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <Link 
            href="/gallery" 
            className="inline-flex items-center gap-2 bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] 
                     text-[var(--text-primary)] font-bold py-3 px-6 rounded-lg text-base transition-all duration-300 
                     transform hover:scale-105 shadow-lg hover:shadow-xl font-heading"
          >
            <span>Explore Full Gallery</span>
            <svg 
              className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryPreview;
