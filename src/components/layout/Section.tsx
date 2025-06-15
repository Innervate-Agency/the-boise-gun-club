'use client';

import { FC, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Section: FC<{ 
    children: React.ReactNode;
    className?: string;
    background?: 'mist' | 'grid' | 'gradient' | 'none';
    overlay?: boolean;
}> = ({ children, className = '', background = 'none', overlay = true }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });
    
    const bgStyles = {
        mist: "bg-gradient-to-br from-[var(--bg-secondary)]/5 via-transparent to-[var(--bg-primary)]/10",
        grid: "bg-[url('/images/Grid/Grid (1).webp')] bg-cover",
        gradient: "bg-gradient-to-br from-[var(--bg-secondary)] via-[var(--bg-primary)] to-[var(--bg-secondary)]",
        none: ""
    };

    return (
        <motion.section
            ref={ref}
            className={`relative py-16 md:py-24 ${className}`}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
        >
            {/* Background layer */}
            {background !== 'none' && (
                <div className={`absolute inset-0 ${bgStyles[background]} opacity-20`} />
            )}
            
            {/* Overlay gradient */}
            {overlay && (
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--bg-primary)] to-transparent opacity-80" />
            )}
            
            {/* Content */}
            <div className="relative z-10 container mx-auto px-4">
                {children}
            </div>
        </motion.section>
    );
};

export default Section; 