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
    <section className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-5xl md:text-6xl font-bold tracking-wider mb-6 uppercase">
            Club Gallery
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto mt-6 font-body text-lg">
            Explore our rich history through these memorable moments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-lg shadow-lg group"
            >
              <div className="aspect-w-4 aspect-h-3 relative">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-70"></div>
              </div>
              <div className="absolute bottom-0 left-0 p-4 w-full">
                <div className="text-white text-lg font-bold font-heading">{item.alt}</div>
                <div className="text-[var(--accent-gold)] text-sm font-body">{item.year}</div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/gallery" className="inline-block px-8 py-3 border-2 border-[var(--accent-primary)] text-[var(--accent-primary)] hover:bg-[var(--accent-primary)] hover:text-white transition-colors duration-300 font-heading tracking-wider">
            VIEW FULL GALLERY
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
