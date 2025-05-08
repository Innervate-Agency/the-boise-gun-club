'use client';

import { FC } from 'react';
import HeroSection from './HeroSection';
import EventCard from './EventCard';
import NewsCard from './NewsCard';
import MemberSpotlight from './MemberSpotlight';

// Sample data - replace with actual data from your API/backend
const upcomingEvents = [
    {
        title: "Annual Trap Shooting Competition",
        date: "July 15, 2024",
        time: "9:00 AM",
        category: "competition" as const,
        description: "Join us for our biggest event of the year! Compete in various categories and win amazing prizes.",
        imageUrl: "/images/events/trap-shooting.jpg"
    },
    // Add more events...
];

const newsItems = [
    {
        title: "New Range Safety Protocols",
        date: "June 1, 2024",
        excerpt: "We're implementing new safety measures to ensure the best experience for all members.",
        imageUrl: "/images/news/safety.jpg",
        category: "Safety"
    },
    // Add more news items...
];

const featuredMember = {
    name: "John Winchester",
    quote: "The Boise Gun Club has been my second home for over 30 years. The community here is unmatched.",
    imageUrl: "/images/members/john-winchester.jpg",
    yearJoined: 1992,
    achievements: ["State Champion 1995", "Safety Instructor", "Club President 2010-2015"]
};

const HomePage: FC = () => {
    return (
        <div className="min-h-screen bg-[#1A1A1A] text-white">
            <HeroSection />

            {/* Upcoming Events Section */}
            <section className="relative py-16">
                {/* Decorative background elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-64
                                  bg-gradient-to-b from-[#FF6B35]/5 to-transparent" />
                    <div className="absolute inset-0 bg-[url('/textures/wood-grain.png')]
                                  opacity-5 mix-blend-overlay" />
                </div>

                <div className="container mx-auto px-4">
                    {/* Section header */}
                    <div className="text-center mb-12">
                        <h2 className="font-space-grotesk text-4xl md:text-5xl font-bold
                                     text-amber-100 tracking-wider mb-4">
                            UPCOMING EVENTS
                        </h2>
                        <div className="flex items-center justify-center gap-4">
                            <div className="w-16 h-px bg-amber-200/30" />
                            <span className="font-vt323 text-amber-200/50">JOIN US</span>
                            <div className="w-16 h-px bg-amber-200/30" />
                        </div>
                    </div>

                    {/* Events grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {upcomingEvents.map((event, index) => (
                            <EventCard key={index} {...event} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Member Spotlight Section */}
            <section className="py-16 bg-black/30">
                <div className="container mx-auto px-4">
                    <h2 className="font-space-grotesk text-4xl text-center font-bold
                                 text-amber-100 tracking-wider mb-12">
                        MEMBER SPOTLIGHT
                    </h2>
                    <MemberSpotlight {...featuredMember} />
                </div>
            </section>

            {/* Club News Section */}
            <section className="relative py-16">
                <div className="container mx-auto px-4">
                    {/* Section header */}
                    <div className="text-center mb-12">
                        <h2 className="font-space-grotesk text-4xl font-bold
                                     text-amber-100 tracking-wider mb-4">
                            CLUB NEWS
                        </h2>
                        <div className="flex items-center justify-center gap-4">
                            <div className="w-16 h-px bg-amber-200/30" />
                            <span className="font-vt323 text-amber-200/50">STAY INFORMED</span>
                            <div className="w-16 h-px bg-amber-200/30" />
                        </div>
                    </div>

                    {/* News grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {newsItems.map((news, index) => (
                            <NewsCard key={index} {...news} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage; 