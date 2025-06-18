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
                py-3 md:py-4
            `}
            style={{ 
                height: totalNavHeight
            }}
        >
            {/* Subtle grid texture beneath the glass effect */}
            <div className="absolute inset-0 grid-bg opacity-5 pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex items-center justify-between h-full">
                    {/* Logo */}
                    <Link href="/" className="relative z-10 flex items-center group focus:outline-none" aria-label="Boise Gun Club Home">
                        <div className="flex items-center gap-3">
                            {/* Clay SVG accent */}
                            <Image
                                src="/images/bgcv3-shattered-clay.svg"
                                alt="Clay Target Logo"
                                width={40}
                                height={40}
                                className="h-10 w-10 object-contain drop-shadow-md transition-transform group-hover:scale-110"
                                priority
                            />
                            <div className="flex flex-col items-center justify-center leading-tight">
                                <span className="text-xs tracking-widest uppercase text-[var(--accent-primary)] font-semibold mb-1 font-heading">established 1898</span>
                                <span className="flex flex-row items-baseline gap-1">
                                    <span className="text-2xl md:text-3xl font-extrabold uppercase font-heading">BOISE</span>
                                    <span className="text-2xl md:text-3xl font-light uppercase font-heading">GUNCLUB</span>
                                </span>
                                <span className="text-xs md:text-sm font-light text-[var(--text-secondary)] mt-1 font-heading text-center">
                                    Idaho's Premier Shotgun Sports Complex
                                </span>
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
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
