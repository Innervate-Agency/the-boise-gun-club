'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';

type NavLinkProps = {
    href: string;
    label: string;
    children?: ReactNode;
};

export default function NavLink({ href, label, children }: NavLinkProps) {
    const pathname = usePathname();
    const isActive = pathname === href;
    const [isHovering, setIsHovering] = useState(false);

    return (
        <motion.div
            className="relative flex items-center"
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
        >
            <Link
                href={href}
                className={`relative z-10 text-lg freeform-text transition-colors duration-200 ${isActive ? 'text-[#F5E8C7] font-bold' : 'text-white hover:text-[#F5E8C7]'
                    }`}
            >
                {label}
                {children}
            </Link>

            {/* Smoke wisp effect on hover */}
            {isHovering && (
                <motion.div
                    className="absolute -z-10 rounded-full w-16 h-16 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {/* Multiple smoke particles for more realistic effect */}
                    {[...Array(3)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute bg-gradient-to-t from-[#E67E22]/20 to-[#F5E8C7]/5 rounded-full smoke-wisp"
                            style={{
                                width: `${20 + i * 10}px`,
                                height: `${20 + i * 10}px`,
                                left: `${10 - i * 5}px`,
                                top: `${10 - i * 5}px`,
                                animationDelay: `${i * 0.2}s`,
                            }}
                        />
                    ))}
                </motion.div>
            )}

            {/* Active indicator */}
            {isActive && (
                <motion.div
                    layoutId="activeNavLink"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E67E22] rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                />
            )}
        </motion.div>
    );
} 