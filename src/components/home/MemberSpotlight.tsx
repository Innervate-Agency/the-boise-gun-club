'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface MemberSpotlightProps {
    name: string;
    quote: string;
    imageUrl: string;
    yearJoined: number;
    achievements?: string[];
}

const MemberSpotlight: FC<MemberSpotlightProps> = ({
    name,
    quote,
    imageUrl,
    yearJoined,
    achievements = []
}) => {
    return (
        <section className="relative py-16 sm:py-24 md:py-32 bg-[var(--bg-secondary)]">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className="font-['Rajdhani'] text-4xl sm:text-5xl md:text-6xl uppercase text-[var(--text-primary)] mb-4">
                        Member <span className="text-[var(--accent-gold)]">Spotlight</span>
                    </h2>
                    <p className="text-[var(--text-secondary)] text-base sm:text-lg font-['Noto Sans'] max-w-2xl mx-auto">
                        Meet our exceptional members who make the Boise Gun Club community special
                    </p>
                </motion.div>

                {/* Member Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative bg-[var(--bg-primary)] rounded-2xl shadow-lg overflow-hidden"
                >
                    <div className="p-6 sm:p-8">
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            {/* Member photo */}
                            <div className="relative w-48 h-48 flex-shrink-0">
                                <div className="absolute inset-0 rounded-full border-2 border-[var(--accent-gold)]/30" />
                                <Image
                                    src={imageUrl}
                                    alt={name}
                                    fill
                                    className="object-cover rounded-full"
                                    sizes="(max-width: 768px) 192px, 192px"
                                    priority
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-1 text-center md:text-left">
                                {/* Quote */}
                                <div className="relative mb-6">
                                    <span className="absolute -top-6 -left-4 text-6xl text-[var(--accent-gold)]/20 font-serif">"</span>
                                    <p className="text-[var(--text-secondary)] text-lg italic relative z-10">
                                        {quote}
                                    </p>
                                    <span className="absolute -bottom-8 -right-4 text-6xl text-[var(--accent-gold)]/20 font-serif">"</span>
                                </div>

                                {/* Member info */}
                                <div className="mt-8">
                                    <h3 className="font-['Rajdhani'] text-2xl font-bold text-[var(--text-primary)] tracking-wider">
                                        {name}
                                    </h3>
                                    <p className="font-['Noto Sans'] text-[var(--text-secondary)] mt-1">
                                        Member since {yearJoined}
                                    </p>
                                </div>

                                {/* Achievements */}
                                {achievements.length > 0 && (
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {achievements.map((achievement, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 rounded-full text-sm bg-[var(--bg-secondary)] 
                                                         border border-[var(--accent-gold)]/20 font-['Noto Sans'] 
                                                         text-[var(--text-secondary)]"
                                            >
                                                {achievement}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default MemberSpotlight; 