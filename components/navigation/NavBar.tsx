'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import NavLink from './NavLink';
import MobileMenu from './MobileMenu';
import NavLogo from './NavLogo';
import { useNavigation } from './NavigationContext';

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Events', href: '/events' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Membership', href: '/membership' },
    { label: 'Contact', href: '/contact' },
];

export default function NavBar() {
    const { isScrolled, isMobileMenuOpen, setIsMobileMenuOpen, clubAnnouncements } = useNavigation();
    const announcementRef = useRef<HTMLDivElement>(null);

    // Use IntersectionObserver for the announcements section
    useEffect(() => {
        if (!announcementRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.target === announcementRef.current) {
                        entry.target.classList.toggle('announcement-visible', entry.isIntersecting);
                    }
                });
            },
            { threshold: 0.1 }
        );

        observer.observe(announcementRef.current);

        return () => {
            if (announcementRef.current) {
                observer.unobserve(announcementRef.current);
            }
        };
    }, []);

    return (
        <>
            {/* Announcements bar */}
            {clubAnnouncements.length > 0 && (
                <div
                    ref={announcementRef}
                    className="hidden lg:block bg-gradient-to-r from-[#E67E22] to-[#F5A623] text-white py-2 px-4 text-center text-sm fixed top-0 w-full z-50 shadow-md"
                >
                    <div className="container mx-auto overflow-hidden relative">
                        <div className="flex space-x-8 animate-marquee whitespace-nowrap">
                            {clubAnnouncements.map((announcement, index) => (
                                <span key={index} className="mx-4 font-medium">• {announcement}</span>
                            ))}
                            {/* Duplicate announcements to create seamless loop */}
                            {clubAnnouncements.map((announcement, index) => (
                                <span key={`dup-${index}`} className="mx-4 font-medium">• {announcement}</span>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Main Navigation */}
            <nav
                className={`fixed ${clubAnnouncements.length > 0 ? 'top-8 lg:top-10' : 'top-0'} left-0 w-full z-40 transition-all duration-300`}
            >
                <div className={`relative transition-all duration-300 ${isScrolled
                    ? 'py-2 bg-[#1A1A1A]/85 backdrop-blur-lg shadow-lg'
                    : 'py-4 bg-gradient-to-b from-black/50 to-transparent'
                    }`}>
                    {/* Glassmorphism effects */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute -top-4 left-1/4 w-32 h-32 rounded-full bg-[#E67E22]/10 blur-2xl"></div>
                        <div className="absolute -bottom-4 right-1/4 w-40 h-40 rounded-full bg-[#F5E8C7]/10 blur-2xl"></div>
                    </div>

                    {/* Border effect */}
                    <div className={`absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="flex items-center justify-between">
                            {/* Logo */}
                            <NavLogo />

                            {/* Desktop Navigation */}
                            <div className="hidden lg:flex items-center space-x-8">
                                {navLinks.map((link) => (
                                    <NavLink key={link.href} href={link.href} label={link.label} />
                                ))}

                                {/* Member Login Button */}
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="relative"
                                >
                                    <Link
                                        href="/membership"
                                        className="relative z-10 px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#E67E22] to-[#F5A623] text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                                    >
                                        Member Login
                                    </Link>
                                    {/* Button glow effect */}
                                    <div className="absolute inset-0 bg-[#E67E22]/20 rounded-lg blur-xl -z-10 transition-transform duration-300"></div>
                                </motion.div>
                            </div>

                            {/* Mobile Menu Button */}
                            <button
                                className="lg:hidden relative z-10 p-2 text-white"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                aria-label="Toggle menu"
                            >
                                <div className="w-6 h-5 flex flex-col justify-between">
                                    <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                                    <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                                    <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                                </div>
                            </button>
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
            </nav>

            {/* Global styles */}
            <style jsx global>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
                
                .announcement-visible {
                    opacity: 1;
                    transform: translateY(0);
                    transition: opacity 0.5s ease, transform 0.5s ease;
                }
            `}</style>
        </>
    );
} 