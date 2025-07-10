'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import MembershipCard, { MembershipTier } from './MembershipCard';

// Sample membership tiers data
const membershipTiers: MembershipTier[] = [
    {
        id: 'basic',
        name: 'Basic',
        price: 29.99,
        period: 'month',
        description: 'Perfect for beginners looking to get started with shooting sports.',
        benefits: [
            'Access to main shooting range',
            'Basic safety training',
            'Locker rental',
            'Monthly newsletter',
            'Member discounts on ammo'
        ]
    },
    {
        id: 'premium',
        name: 'Premium',
        price: 49.99,
        period: 'month',
        description: 'Our most popular membership with additional perks and privileges.',
        benefits: [
            'All Basic benefits',
            'Access to all ranges',
            'Priority lane booking',
            'Quarterly training sessions',
            'Guest passes (2/month)',
            'Advanced shooting clinics'
        ],
        featured: true
    },
    {
        id: 'elite',
        name: 'Elite',
        price: 99.99,
        period: 'month',
        description: 'The ultimate membership for serious shooting enthusiasts.',
        benefits: [
            'All Premium benefits',
            'Private range access',
            'Personal locker room',
            'Unlimited guest passes',
            'Competition entry fees included',
            'Private instructor sessions',
            'Custom gun fitting service'
        ]
    }
];

const MembershipOptions = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                rootMargin: '0px',
                threshold: 0.1,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const handleMembershipSelect = (tierId: string) => {
        // Handle membership selection (e.g., redirect to signup page)
        // TODO: Implement membership selection logic
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <section className="relative py-20 overflow-hidden bg-ed-charcoal">
            {/* Decorative background elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,var(--craters-moon)_25%,transparent_25%),linear-gradient(-45deg,var(--craters-moon)_25%,transparent_25%),linear-gradient(45deg,transparent_75%,var(--craters-moon)_75%),linear-gradient(-45deg,transparent_75%,var(--craters-moon)_75%)] bg-[20px_20px] [background-position:0_0,0_10px,10px_-10px,-10px_0px]" />
            </div>

            <div className="container mx-auto px-4">
                {/* Section header */}
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-5xl font-bold mb-6 text-leonard-yellow"
                        initial={{ opacity: 0, y: -20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        MEMBERSHIP TIERS
                    </motion.h2>
                    <motion.p
                        className="text-xl text-white/80 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Choose the perfect membership that suits your shooting journey
                    </motion.p>
                </div>

                {/* Membership cards grid */}
                <motion.div
                    ref={ref}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    {membershipTiers.map((tier) => (
                        <MembershipCard
                            key={tier.id}
                            tier={tier}
                            onSelect={handleMembershipSelect}
                        />
                    ))}
                </motion.div>

                {/* Bottom note */}
                <motion.p
                    className="text-center mt-12 text-white/60 text-sm"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    All memberships include access to club events and basic facilities.
                    <br />
                    Prices are subject to change. Additional fees may apply.
                </motion.p>
            </div>
        </section>
    );
};

export default MembershipOptions;