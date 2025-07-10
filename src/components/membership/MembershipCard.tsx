'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react'; // Added useMemo
import useDeterministicRandom from '../../hooks/useDeterministicRandom';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export type MembershipTier = {
    id: string;
    name: string;
    price: number;
    period: 'month' | 'year';
    description: string;
    benefits: string[];
    featured?: boolean;
};

type MembershipCardProps = {
    tier: MembershipTier;
    onSelect: (tierId: string) => void;
};

const MembershipCard = ({ tier, onSelect }: MembershipCardProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    
    // Use deterministic random for consistent rendering
    const { getRandomValue } = useDeterministicRandom(24, parseInt(tier.id, 36) || 42);
    
    useEffect(() => {
        setIsMounted(true);
    }, []);
      // Mist particles for hover effect with deterministic positions
    const mistParticles = useMemo(() => {
        return Array.from({ length: 6 }, (_, i) => ({
            id: i,
            delay: i * 0.15,
            x: isMounted ? getRandomValue(i * 2, -15, 15) : 0,
            y: isMounted ? -getRandomValue(i * 2 + 1, 15, 40) : -20,
        }));
    }, [isMounted, getRandomValue]); // Memoize mistParticles

    return (
        <motion.div
            className={`relative group overflow-hidden rounded-2xl ${tier.featured ? 'scale-105' : ''
                }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px',
            }}
        >
            {/* Background layers */}
            <div className="absolute inset-0 bg-[var(--craters-moon)]/20 backdrop-blur-md" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10" />

            {/* Parallel lines background pattern */}
            <div className="absolute inset-0 overflow-hidden opacity-20">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,var(--color-leonard-yellow)_10px,var(--color-leonard-yellow)_11px)]" />
            </div>            {/* Subtle mist effect particles */}
            {isHovered && mistParticles.map(particle => (
                <motion.div
                    key={particle.id}
                    className="absolute w-6 h-6 rounded-full bg-white/5 backdrop-blur-md"
                    initial={{ opacity: 0, x: 0, y: 0, scale: 0.3 }}
                    animate={{
                        opacity: [0, 0.2, 0],
                        x: particle.x,
                        y: particle.y,
                        scale: 1.2,
                    }}
                    transition={{
                        duration: 1.5,
                        delay: particle.delay,
                        ease: 'easeOut',
                    }}
                />
            ))}

            {/* Card content */}
            <div className="relative p-8 transform-gpu transition-transform duration-500 hover:scale-[1.02]">
                {/* Featured badge */}
                {tier.featured && (
                    <div className="absolute -top-1 -right-1 bg-[var(--color-leonard-yellow)] text-[var(--craters-moon)] px-4 py-1 rounded-bl-lg rounded-tr-lg font-bold text-sm transform rotate-3">
                        MOST POPULAR
                    </div>
                )}

                {/* Tier name with Art Deco styling */}
                <h3 className="text-3xl font-bold mb-4 text-[var(--color-leonard-yellow)] font-heading tracking-wider text-shadow shadow-black/50">
                    {tier.name.toUpperCase()}
                </h3>

                {/* Price */}
                <div className="mb-6">
                    <span className="text-4xl font-bold text-white dark:text-white">${tier.price}</span>
                    <span className="text-white/70 dark:text-white/70">/{tier.period}</span>
                </div>

                {/* Description */}
                <p className="text-white/80 dark:text-white/80 mb-6">{tier.description}</p>

                {/* Benefits list */}
                <ul className="space-y-3 mb-8">
                    {tier.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-white/90 dark:text-white/90">
                            <Check className="w-5 h-5 mr-3 text-[var(--color-leonard-yellow)]" />
                            {benefit}
                        </li>
                    ))}
                </ul>

                {/* CTA Button */}
                <Button
                    onClick={() => onSelect(tier.id)}
                    className="w-full py-4 px-8 rounded-lg bg-[var(--color-leonard-yellow)] text-[var(--craters-moon)] font-heading uppercase tracking-wide font-bold text-lg hover:brightness-95 transform transition-all duration-300 hover:shadow-xl"
                >
                    Select {tier.name}
                </Button>
            </div>
        </motion.div>
    );
};

export default MembershipCard;