import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import UnsplashImage from '../ui/UnsplashImage';

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
    <section className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-['Refrigerator_Deluxe'] text-5xl md:text-6xl uppercase text-white mb-4"
          >
            Club <span className="text-[var(--accent-gold)]">Gallery</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/60 max-w-2xl mx-auto font-['Museo'] text-lg"
          >
            Capturing moments of excellence since 1898
          </motion.p>
        </div>

        {/* Gallery Grid with Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Glass card container */}
              <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/10 rounded-xl overflow-hidden shadow-2xl hover:shadow-[0_20px_50px_rgba(242,135,5,0.15)] transition-all duration-500">                {/* Image container with vintage treatment */}
                <div className="aspect-[4/3] relative overflow-hidden">
                  <UnsplashImage
                    fallback={item.src}
                    category="events"
                    alt={item.alt}
                    fill={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-all duration-700 group-hover:scale-110 filter brightness-95 contrast-110"
                    width={800}
                    height={600}
                  />
                  
                  {/* Gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  
                  {/* Vintage filter overlay */}
                  <div className="absolute inset-0 mix-blend-multiply bg-gradient-to-br from-[#8B4513]/10 to-transparent opacity-30" />
                  
                  {/* Year badge */}
                  <div className="absolute top-4 right-4 backdrop-blur-md bg-black/30 border border-white/20 rounded-full px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs font-['Museo'] text-[var(--accent-gold)]">{item.year}</span>
                  </div>
                </div>
                
                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 transform transition-transform duration-500 group-hover:translate-y-0 translate-y-2">
                  <h3 className="text-white text-lg font-['Refrigerator_Deluxe'] uppercase tracking-wide mb-1 transition-colors duration-300 group-hover:text-[var(--accent-gold)]">
                    {item.alt}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-white/50 text-sm font-['Museo']">
                      View Details
                    </p>
                    <svg 
                      className="w-4 h-4 text-white/50 transform transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/5 to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA with glass effect */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link href="/gallery" className="group relative inline-flex items-center">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
            
            {/* Button */}
            <button className="relative backdrop-blur-sm bg-gradient-to-r from-[var(--accent-primary)]/90 to-[var(--accent-secondary)]/90 text-white px-8 py-4 rounded-xl font-['Refrigerator_Deluxe'] uppercase tracking-wider transition-all duration-300 group-hover:scale-105 shadow-xl flex items-center gap-3">
              <span>Explore Full Gallery</span>
              <svg 
                className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryPreview;
