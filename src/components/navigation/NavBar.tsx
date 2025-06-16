'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileMenu from './MobileMenu';
import NavLogo from './NavLogo';
import MegaMenu from './MegaMenu';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { useNavigation } from './NavigationContext';

// Navigation items with consolidated club info
const navLinks = [
    { label: 'HOME', href: '/' },
    { label: 'CLUB INFO', href: '/club-info' },
    { label: 'MUSEUM', href: '/museum' },
    { label: 'EVENTS', href: '/events' },
    { label: 'MEMBERSHIP', href: '/membership' },
];

// Clean modern navigation item component
const NavItem = ({ label, href, isActive }: {
    label: string;
    href: string;
    isActive: boolean;
}) => {
    return (
        <Link href={href}>
            <motion.div
                className="relative flex items-center cursor-pointer px-2 py-1"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 1 }}
                transition={{ duration: 0.2 }}
                style={{
                    color: isActive ? 'var(--accent-primary)' : 'var(--text-primary)'
                }}
            >
                <span className={`text-xl tracking-wide`}>
                    {label}
                </span>

                {/* Orange underline on hover */}
                <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--accent-primary)]"
                    initial={{ scaleX: isActive ? 1 : 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                />
            </motion.div>
        </Link>
    );
};

export default function NavBar() {
    const { 
        isScrolled, 
        isMobileMenuOpen, 
        setIsMobileMenuOpen, 
        clubAnnouncements,
        setTotalNavHeight
    } = useNavigation();
    
    const announcementBarRef = useRef<HTMLDivElement>(null);
    const mainNavBarRef = useRef<HTMLElement>(null);
    const pathname = usePathname();
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
    const [announcementBarActualHeight, setAnnouncementBarActualHeight] = useState(0);

    // Intersection observer for announcements section
    useEffect(() => {
        const currentRef = announcementBarRef.current;
        if (!currentRef) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.target === currentRef) {
                        entry.target.classList.toggle('announcement-visible', entry.isIntersecting);
                    }
                });
            },
            { threshold: 0.1 }
        );

        observer.observe(currentRef);

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    // Calculate and set total navigation height and announcement bar height
    useEffect(() => {
        const calculateHeights = () => {
            let currentTotalNavHeight = 0;
            let currentAnnBarHeight = 0;
            const typicalRemBase = 18;

            if (clubAnnouncements.length > 0 && announcementBarRef.current) {
                const isAnnBarDisplayed = window.getComputedStyle(announcementBarRef.current).display !== 'none';
                if (isAnnBarDisplayed) {
                    const annOffsetHeight = announcementBarRef.current.offsetHeight;
                    currentAnnBarHeight = annOffsetHeight;
                    currentTotalNavHeight += (annOffsetHeight || (2.25 * typicalRemBase));
                }
            }

            if (mainNavBarRef.current) {
                currentTotalNavHeight += (mainNavBarRef.current.offsetHeight || (isScrolled ? (4.25 * typicalRemBase) : (5 * typicalRemBase)));
            }
            
            setTotalNavHeight(currentTotalNavHeight);
            setAnnouncementBarActualHeight(currentAnnBarHeight);
        };

        calculateHeights();
        window.addEventListener('resize', calculateHeights);
        const timeoutId = setTimeout(calculateHeights, 100);

        return () => {
            window.removeEventListener('resize', calculateHeights);
            clearTimeout(timeoutId);
        };

    }, [clubAnnouncements, isScrolled, pathname, setTotalNavHeight]);

    return (
        <div className="w-full">
            {/* Announcements bar */}
            {clubAnnouncements.length > 0 && (
                <div
                    ref={announcementBarRef}
                    className="hidden lg:block bg-[var(--accent-primary)] text-white py-2 px-4 text-center text-sm fixed top-0 w-full z-50 shadow-md"
                >
                    <div className="container mx-auto overflow-hidden relative">
                        <div className="animate-marquee whitespace-nowrap">
                            {clubAnnouncements.map((announcement, index) => (
                                <span key={index} className="mx-8 font-medium">• {announcement}</span>
                            ))}
                        </div>
                    </div>
                </div>
            )}
            
            {/* Main Navigation */}
            <header
                ref={mainNavBarRef}
                className="fixed top-0 left-0 w-full z-40 transition-all duration-500"
                style={{ 
                    top: `${announcementBarActualHeight}px`
                }}
            >
                <div
                    className={`relative transition-all duration-500 ${isScrolled
                        ? 'py-3 glass-premium'
                        : 'py-4 backdrop-blur-[10px] bg-gradient-to-b from-[var(--bg-primary)]/80 to-transparent'
                        }`}
                >
                    {/* Subtle grid texture beneath glass */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                        <div className="absolute inset-0 grid-bg opacity-10" />
                    </div>

                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="flex items-center justify-between h-16 md:h-20">
                            {/* Logo */}
                            <div className="flex-shrink-0">
                                <NavLogo />
                            </div>

                            {/* Desktop Navigation */}
                            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                                {navLinks.map((link) => (
                                    <NavItem
                                        key={link.href}
                                        href={link.href}
                                        label={link.label}
                                        isActive={pathname === link.href}
                                    />
                                ))}

                                {/* Mega Menu Button */}
                                <motion.button
                                    onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                                    className="flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-[var(--accent-primary)]/10 transition-colors"
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Bars3Icon className="w-5 h-5 text-[var(--text-primary)]" />
                                    <span className="text-lg xl:text-xl tracking-wide text-[var(--text-primary)]">MENU</span>
                                </motion.button>

                                {/* Member Login Button */}
                                <motion.div
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="relative flex-shrink-0"
                                >
                                    <Link
                                        href="/membership"
                                        className="relative btn-gradient block px-4 lg:px-6 py-2.5 rounded font-bold shadow-lg tracking-wide text-sm lg:text-base"
                                    >
                                        MEMBER LOGIN
                                    </Link>
                                </motion.div>
                            </nav>

                            {/* Mobile Menu Button */}
                            <div className="lg:hidden flex items-center">
                                <button
                                    className="relative z-10 p-2 text-[var(--text-primary)]"
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    aria-label="Toggle menu"
                                >
                                    <div className="relative w-6 h-5 flex flex-col justify-between">
                                        <span className={`block w-6 h-0.5 bg-[var(--text-primary)] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                                        <span className={`block w-6 h-0.5 bg-[var(--text-primary)] transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                                        <span className={`block w-6 h-0.5 bg-[var(--text-primary)] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <MobileMenu
                            links={navLinks}
                            onClose={() => setIsMobileMenuOpen(false)}
                        />
                    )}
                </AnimatePresence>

                {/* Mega Menu */}
                <MegaMenu 
                    isOpen={isMegaMenuOpen} 
                    onClose={() => setIsMegaMenuOpen(false)} 
                />
            </header>
            
            {/* Global styles */}
            <style jsx global>{`
                @keyframes marquee {
                    0% { transform: translateX(100%); }
                    100% { transform: translateX(-100%); }
                }
                
                .animate-marquee {
                    animation: marquee 20s linear infinite;
                    display: inline-block;
                }
                
                .announcement-visible {
                    opacity: 1;
                    transform: translateY(0);
                    transition: opacity 0.5s ease, transform 0.5s ease;
                }
            `}</style>
        </div>
    );
}
