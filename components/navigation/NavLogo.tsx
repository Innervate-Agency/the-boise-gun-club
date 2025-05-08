'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NavLogo() {
    return (
        <motion.div
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
        >
            <Link href="/" className="flex items-center">
                <div className="relative">
                    {/* Logo text with special font styling to mimic Cooper Black */}
                    <h1 className="text-2xl md:text-3xl cooper-style text-white">
                        Boise Gun Club
                    </h1>

                    {/* Smoky effect on hover */}
                    <motion.div
                        className="absolute -inset-2 -z-10 bg-gradient-to-r from-[#E67E22]/20 to-[#F5E8C7]/20 rounded-lg opacity-0 blur-md"
                        whileHover={{ opacity: 1, scale: 1.1, rotate: -1 }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
            </Link>
        </motion.div>
    );
} 