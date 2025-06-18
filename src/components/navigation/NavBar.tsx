'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars3Icon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { useNavigation } from './NavigationContext';
import Image from 'next/image';
import MegaMenu from './MegaMenu';
import MobileMenu from './MobileMenu';

// Navigation items with consolidated club info
const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/ranges', label: 'Ranges' },
    { href: '/schedule', label: 'Schedule' },
    { href: '/members', label: 'Members' },
    { href: '/forum', label: 'Forum' }
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
                ${isScrolled ? 'glass-mica' : 'bg-transparent'}
                z-50
                h-[120px] md:h-[150px] flex items-center
            `}
        >
            {/* Subtle grid texture beneath the glass effect */}
            <div className="absolute inset-0 grid-bg opacity-5 pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex items-center">
                <div className="flex items-center justify-between w-full h-full">
                    {/* Logo (left-aligned) */}
                    <div className="flex-shrink-0 max-w-[400px] w-full flex items-center justify-start">
                        <Link href="/" className="relative z-10 flex items-center group focus:outline-none w-full" aria-label="Boise Gun Club Home">
                            <div className="flex items-center gap-6 w-full">
                                {/* Clay SVG accent - responsive size */}
                                <Image
                                    src="/images/bgcv3-shattered-clay.svg"
                                    alt="Clay Target Logo"
                                    width={120}
                                    height={120}
                                    className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] lg:h-[120px] lg:w-[120px] object-contain drop-shadow-md transition-transform group-hover:scale-105"
                                    priority
                                />
                                <div className="flex flex-col items-center justify-center leading-tight w-full">
                                    {/* Established */}
                                    <span className="text-base md:text-lg tracking-widest uppercase text-[var(--accent-primary)] font-bold mb-2 font-heading" style={{ fontFamily: 'Rajdhani, sans-serif' }}>established 1898</span>
                                    {/* BOISEGUNCLUB */}
                                    <span className="flex flex-row items-baseline gap-0 w-full justify-center">
                                        <span className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase font-heading" style={{ fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.04em' }}>BOISE</span>
                                        <span className="text-3xl md:text-4xl lg:text-5xl font-light uppercase font-heading" style={{ fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.04em' }}>GUNCLUB</span>
                                    </span>
                                    {/* Tagline */}
                                    <span className="block w-full text-center text-xs md:text-base lg:text-lg font-medium text-[var(--text-secondary)] mt-2 font-heading" style={{ fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.03em' }}>
                                        Idaho's Premier Shotgun Sports Complex
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Menu (fills remaining space, left of logo) */}
                    <nav className="hidden md:flex items-center space-x-8 flex-grow justify-start">
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
                                glass-mica-hover
                                text-sm font-medium tracking-wide
                                transition-all duration-200
                            `}
                        >
                            <span>Club Services</span>
                            <ChevronDownIcon className={`w-4 h-4 transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Member Login Button */}
                        <Link
                            href="/membership"
                            className={`
                                hidden md:flex items-center
                                px-4 py-2 rounded-lg
                                glass-mica-hover
                                text-sm font-medium tracking-wide
                                transition-all duration-200
                            `}
                        >
                            Member Login
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 rounded-lg glass-mica-hover"
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
