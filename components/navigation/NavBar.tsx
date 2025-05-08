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
            {/* Announcements bar - only visible on larger screens */}
            {clubAnnouncements.length > 0 && (
                <div
                    ref={announcementRef}
                    className="hidden lg:block bg-[#E67E22] text-white py-1 px-4 text-center text-sm fixed top-0 w-full z-50"
                >
                    <div className="container mx-auto overflow-hidden relative">
                        <div className="flex space-x-8 animate-marquee whitespace-nowrap">
                            {clubAnnouncements.map((announcement, index) => (
                                <span key={index} className="mx-4">• {announcement}</span>
                            ))}
                            {/* Duplicate announcements to create seamless loop */}
                            {clubAnnouncements.map((announcement, index) => (
                                <span key={`dup-${index}`} className="mx-4">• {announcement}</span>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <nav
                className={`fixed ${clubAnnouncements.length > 0 ? 'top-6 lg:top-8' : 'top-0'} left-0 w-full z-40 transition-all duration-300 ${isScrolled
                    ? 'py-2 backdrop-blur-md bg-[#3A2618]/80 shadow-lg'
                    : 'py-4 bg-transparent'
                    }`}
            >
                <div className="relative">
                    {/* Glassmorphism decorative elements */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute -top-4 left-1/4 w-24 h-24 rounded-full bg-[#E67E22]/20 blur-xl"></div>
                        <div className="absolute -bottom-4 right-1/4 w-32 h-32 rounded-full bg-[#F5E8C7]/20 blur-xl"></div>
                    </div>

                    {/* Border effect */}
                    <div className="absolute inset-0 border-b border-white/10 pointer-events-none"></div>

                    <div className="container mx-auto px-4">
                        <div className="flex items-center justify-between relative z-10">
                            {/* Logo */}
                            <NavLogo />

                            {/* Desktop Navigation */}
                            <div className="hidden lg:flex items-center space-x-8">
                                {navLinks.map((link) => (
                                    <NavLink key={link.href} href={link.href} label={link.label} />
                                ))}

                                {/* Login/Member button with special styling */}
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="relative"
                                >
                                    <Link href="/membership" className="relative z-10 px-6 py-2 rounded-lg bg-[#E67E22] text-white font-dmSans font-bold">
                                        Member Login
                                    </Link>
                                    {/* Smoky effect behind the button */}
                                    <motion.div
                                        className="absolute inset-0 bg-[#F5E8C7]/20 rounded-lg blur-sm -z-10"
                                        whileHover={{
                                            scale: 1.2,
                                            rotate: 5,
                                            opacity: 0.8
                                        }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.div>
                            </div>

                            {/* Mobile menu toggle */}
                            <button
                                className="lg:hidden text-white p-2"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                aria-label="Toggle menu"
                            >
                                <div className="w-6 h-5 flex flex-col justify-between">
                                    <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                                    <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                                    <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <MobileMenu
                            links={navLinks}
                            onClose={() => setIsMobileMenuOpen(false)}
                        />
                    )}
                </AnimatePresence>
            </nav>

            {/* Add some global styles for the announcements animation */}
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