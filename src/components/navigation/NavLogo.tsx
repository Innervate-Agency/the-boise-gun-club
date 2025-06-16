'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function NavLogo() {
    return (
        <motion.div 
            className="relative flex-shrink-0"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}        >
            <Link href="/" className="flex items-center">
                <div className="flex items-center space-x-2 lg:space-x-3">
                    <div className="flex-shrink-0">
                        <Image 
                            src="/images/bgcv3-shattered-clay.svg" 
                            alt="Boise Gun Club Logo" 
                            width={60} 
                            height={60}
                            className="md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px]"
                        />
                    </div>

                    {/* Logo text with proper font heading class */}
                    <div className="flex flex-col">
                        <p className="text-[8px] md:text-[10px] text-white/70 uppercase tracking-wider leading-tight">
                            Est. 1898
                        </p>
                        <h1 className="text-sm md:text-lg lg:text-xl xl:text-2xl text-white tracking-wide leading-tight">
                            <span className="font-[900]">BOISE</span>
                            <span className="font-[100]">GUNCLUB</span>
                        </h1>
                        <p className="text-[7px] md:text-[9px] text-white/70 uppercase tracking-wider leading-tight">
                            Idaho&apos;s Premier Shotgun Sports Facility
                        </p>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
