'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function NavLogo() {
    return (
        <motion.div 
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}        >
            <Link href="/" className="flex items-center">
                <div className="flex items-center">
                    <Image src="/images/bgcv3-shattered-clay.svg" alt="Boise Gun Club Logo" width={110} height={110} />

                    {/* Logo text with proper font heading class */}
                    <div>
                        <p className="text-[8px] md:text-[10px] text-white/70 uppercase tracking-wider">
                            Est. 1898
                        </p>
                        <h1 className="text-lg md:text-2xl text-white tracking-wide">
                            <span className="font-[900]">BOISE</span>
                            <span className="font-[100]">GUNCLUB</span>
                        </h1>
                        <p className="text-[7px] md:text-[9px] text-white/70 uppercase tracking-wider">
                            Idaho&apos;s Premier Shotgun Sports Facility
                        </p>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
