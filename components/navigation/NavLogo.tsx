'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function NavLogo() {
    return (
        <motion.div
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
        >
            <Link href="/" className="flex items-center">
                <div className="relative flex items-center">
                    {/* Clay target icon (placeholder - replace with actual logo) */}
                    <div className="relative w-10 h-10 mr-3 hidden sm:block">
                        <div className="absolute inset-0 rounded-full bg-[#F25D27]"></div>

                        {/* Fragments animation on hover */}
                        <motion.div
                            className="absolute inset-0"
                            whileHover="hover"
                        >
                            {Array.from({ length: 5 }).map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-2 h-2 bg-[#F25D27] rounded-full"
                                    style={{
                                        left: '50%',
                                        top: '50%',
                                        transform: 'translate(-50%, -50%)'
                                    }}
                                    variants={{
                                        hover: {
                                            x: Math.random() * 20 - 10,
                                            y: Math.random() * 20 - 10,
                                            opacity: [1, 0],
                                            transition: {
                                                duration: 0.6,
                                                delay: i * 0.1
                                            }
                                        }
                                    }}
                                />
                            ))}
                        </motion.div>
                    </div>

                    {/* Logo text with proper font heading class */}
                    <div>
                        <h1 className="text-xl md:text-2xl font-bold text-white font-heading tracking-wide">
                            BOISE GUN CLUB
                        </h1>
                        <p className="text-[8px] md:text-[10px] text-white/70 uppercase tracking-wider font-body">
                            Est. 1898 • Idaho's Premier Shotgun Sports Facility
                        </p>
                    </div>

                    {/* Subtle glow effect on hover */}
                    <motion.div
                        className="absolute -inset-2 -z-10 bg-[#F25D27]/10 rounded-lg opacity-0 blur-md"
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
            </Link>
        </motion.div>
    );
} 