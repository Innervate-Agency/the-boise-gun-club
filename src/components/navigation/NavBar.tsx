'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars3Icon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { useNavigation } from './NavigationContext';
import Image from 'next/image';
import MegaMenu from './MegaMenu';
import MobileMenu from './MobileMenu';

// Clean navigation structure from GOLD_EXTRACTED.md
const links = [
    { href: '/', label: 'Home' },
    { href: '/club-info', label: 'Club Info' },
    { href: '/membership', label: 'Membership' },
    { href: '/forum', label: 'Forums' }
];

export default function NavBar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { totalNavHeight, setTotalNavHeight } = useNavigation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Calculate and set the total navigation height
    useEffect(() => {
        const navElement = document.querySelector('header');
        if (navElement) {
            setTotalNavHeight(navElement.offsetHeight);
        }
    }, [setTotalNavHeight]);

    return (
        <header 
            className={`
                fixed top-0 left-0 right-0
                transition-all duration-300
                ${isScrolled 
                    ? 'bg-white/10 backdrop-blur-lg border-b border-white/10 shadow-lg' 
                    : 'bg-transparent'}
                z-50
                h-[80px] md:h-[90px] flex items-center
            `}
        >
            {/* Subtle grid texture beneath the glass effect */}
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('/images/Grid/Grid_(1).webp')] bg-[length:400px_400px] bg-repeat" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex items-center">
                <div className="flex items-center justify-between w-full h-full">
                    {/* Logo (left-aligned) */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="relative z-10 flex items-center group focus:outline-none" aria-label="Boise Gun Club Home">
                            <div className="flex items-center gap-3">
                                {/* Clay SVG accent - much smaller */}
                                <Image
                                    src="/images/bgcv3-shattered-clay.svg"
                                    alt="Clay Target Logo"
                                    width={40}
                                    height={40}
                                    className="h-[40px] w-[40px] md:h-[50px] md:w-[50px] object-contain drop-shadow-md transition-transform group-hover:scale-105"
                                    priority
                                />
                                <div className="flex flex-col leading-tight">
                                    {/* Established */}
                                    <span className="text-xs tracking-wider uppercase text-[var(--accent-primary)] font-medium font-heading">established 1898</span>
                                    {/* BOISEGUNCLUB */}
                                    <span className="flex items-baseline gap-0">
                                        <span className="text-lg md:text-xl font-bold uppercase font-heading tracking-wide">BOISE</span>
                                        <span className="text-lg md:text-xl font-light uppercase font-heading tracking-wide">GUNCLUB</span>
                                    </span>
                                    {/* Tagline */}
                                    <span className="text-xs font-medium text-[var(--text-secondary)] font-heading">
                                        Idaho's Premier Shotgun Sports Complex
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Menu (center) */}
                    <nav className="hidden md:flex items-center space-x-8 flex-grow justify-center">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`
                                    text-sm font-medium tracking-wide
                                    ${pathname === link.href 
                                        ? 'text-[var(--accent-primary)]' 
                                        : 'text-[var(--text-primary)] hover:text-[var(--accent-secondary)]'
                                    }
                                    transition-colors duration-200
                                `}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Right side buttons */}
                    <div className="flex items-center space-x-4">
                        {/* Mega Menu Button */}
                        <button
                            onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                            className={`
                                hidden md:flex items-center space-x-2
                                px-4 py-2 rounded-lg
                                bg-white/5 hover:bg-white/10 backdrop-blur-sm
                                border border-white/10 hover:border-white/20
                                text-sm font-medium tracking-wide
                                transition-all duration-200
                            `}
                        >
                            <span>Club Services</span>
                            <ChevronDownIcon className={`w-4 h-4 transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Sign Up Button */}
                        <Link
                            href="/auth/signup"
                            className={`
                                hidden md:flex items-center
                                px-4 py-2 rounded-lg
                                bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)]
                                text-white font-medium tracking-wide
                                transition-all duration-200
                            `}
                        >
                            Sign Up
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-200"
                        >
                            <Bars3Icon className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mega Menu */}
            {isMegaMenuOpen && (
                <MegaMenu isOpen={isMegaMenuOpen} onClose={() => setIsMegaMenuOpen(false)} />
            )}

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <MobileMenu links={links} onClose={() => setIsMobileMenuOpen(false)} />
            )}
        </header>
    );
}
