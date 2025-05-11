'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const events = [
    {
        id: 1,
        date: "15",
        month: "June",
        title: "Annual Trap Shooting Competition",
        desc: "Join us for the biggest event of the year! Compete in various categories and win amazing prizes.",
        link: "#",
        attendees: 127
    },
    {
        id: 2,
        date: "20",
        month: "June",
        title: "Beginner Shotgun Safety Course",
        desc: "Learn safe handling, proper techniques, basic shooting techniques. All equipment provided.",
        link: "#",
        attendees: 45
    },
    {
        id: 3,
        date: "25",
        month: "July",
        title: "Monthly Club Meeting & Potluck",
        desc: "Monthly meeting for all members, upcoming events, and share a meal together with your favorite dish!",
        link: "#",
        attendees: 89
    },
    {
        id: 4,
        date: "10",
        month: "August",
        title: "Women's Shooting Workshop",
        desc: "Designed specifically for women shooters, this workshop covers advanced techniques and networking.",
        link: "#",
        attendees: 32
    }
];

const UpcomingEvents = () => {
    const [selectedEvent, setSelectedEvent] = useState(events[0]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        event: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    return (
        <section className="py-32 bg-black relative overflow-hidden">
            {/* Section Header - Centered */}
            <div className="text-center mb-20">
                <h2 className="font-['Refrigerator_Deluxe'] text-5xl text-white mb-4">
                    UPCOMING EVENTS
                </h2>
                <p className="text-white/60 text-lg max-w-2xl mx-auto px-6">
                    Join our most exciting upcoming events at the Boise Gun Club
                </p>
            </div>

            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-5 gap-12">
                    {/* Left Column - 60% - CTA and Info */}
                    <div className="lg:col-span-3 space-y-8">
                        {/* Current Event Highlight */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-[#1a1a1a] to-black border border-[#F28705]/20 rounded-lg p-8"
                        >
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="shrink-0">
                                    <div className="w-20 h-20 bg-gradient-to-br from-[#F28705] to-[#E85E27] rounded-lg flex flex-col items-center justify-center text-white">
                                        <span className="text-2xl font-bold">{selectedEvent.date}</span>
                                        <span className="text-xs uppercase">{selectedEvent.month}</span>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-['Refrigerator_Deluxe'] text-2xl text-white mb-2">
                                        {selectedEvent.title}
                                    </h3>
                                    <p className="text-white/70 mb-4">{selectedEvent.desc}</p>
                                    <div className="flex items-center gap-4">
                                        <span className="text-sm text-[#F28705]">{selectedEvent.attendees} attending</span>
                                        <Link
                                            href={selectedEvent.link}
                                            className="bg-[#F28705] text-white px-4 py-2 rounded text-sm hover:bg-[#E85E27] transition-colors"
                                        >
                                            More Info
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Quick Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-[#1a1a1a] to-black border border-[#F28705]/20 rounded-lg p-8"
                        >
                            <h3 className="font-['Refrigerator_Deluxe'] text-xl text-white mb-6">
                                Request Event Info
                            </h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Full Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="bg-black/50 border border-white/10 rounded px-4 py-3 text-white placeholder:text-white/40 focus:border-[#F28705] focus:outline-none transition-colors"
                                        required
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="bg-black/50 border border-white/10 rounded px-4 py-3 text-white placeholder:text-white/40 focus:border-[#F28705] focus:outline-none transition-colors"
                                        required
                                    />
                                </div>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white placeholder:text-white/40 focus:border-[#F28705] focus:outline-none transition-colors"
                                />
                                <select
                                    name="event"
                                    value={formData.event}
                                    onChange={handleChange}
                                    className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white focus:border-[#F28705] focus:outline-none transition-colors"
                                    required
                                >
                                    <option value="">Select an Event</option>
                                    {events.map(event => (
                                        <option key={event.id} value={event.id} className="bg-black">
                                            {event.title}
                                        </option>
                                    ))}
                                </select>
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-[#F28705] to-[#E85E27] text-white py-3 rounded font-['Refrigerator_Deluxe'] text-lg hover:opacity-90 transition-opacity"
                                >
                                    GET EVENT INFO
                                </button>
                            </form>
                        </motion.div>

                        {/* Social Proof */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col md:flex-row gap-6 bg-gradient-to-br from-[#1a1a1a] to-black border border-[#F28705]/20 rounded-lg p-6"
                        >
                            <div className="text-center md:text-left">
                                <div className="text-4xl font-bold text-[#F28705]">500+</div>
                                <div className="text-white/60 text-sm">Members Registered</div>
                            </div>
                            <div className="hidden md:block w-px bg-white/10" />
                            <div className="text-center md:text-left">
                                <div className="text-4xl font-bold text-[#F28705]">15+</div>
                                <div className="text-white/60 text-sm">Annual Events</div>
                            </div>
                            <div className="hidden md:block w-px bg-white/10" />
                            <div className="text-center md:text-left">
                                <div className="text-4xl font-bold text-[#F28705]">4.9★</div>
                                <div className="text-white/60 text-sm">Average Rating</div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column - 40% - Event List */}
                    <div className="lg:col-span-2">
                        <div className="space-y-4">
                            {events.map((event, index) => (
                                <motion.div
                                    key={event.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => setSelectedEvent(event)}
                                    className={`relative cursor-pointer transition-all duration-300 ${selectedEvent.id === event.id
                                        ? 'bg-gradient-to-br from-[#F28705]/10 to-[#E85E27]/5 border-[#F28705]/50'
                                        : 'bg-gradient-to-br from-[#1a1a1a] to-black border-white/10 hover:border-[#F28705]/30'
                                        } border rounded-lg p-6`}
                                >
                                    <div className="flex gap-4">
                                        <div className="shrink-0">
                                            <div className={`w-14 h-14 rounded-lg flex flex-col items-center justify-center text-white ${selectedEvent.id === event.id
                                                ? 'bg-gradient-to-br from-[#F28705] to-[#E85E27]'
                                                : 'bg-[#2a2a2a]'
                                                }`}>
                                                <span className="text-lg font-bold">{event.date}</span>
                                                <span className="text-xs uppercase">{event.month}</span>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-['Refrigerator_Deluxe'] text-lg text-white mb-1">
                                                {event.title}
                                            </h3>
                                            <p className="text-sm text-white/60 mb-2 line-clamp-2">
                                                {event.desc}
                                            </p>
                                            <div className="flex items-center justify-between">
                                                <span className="text-xs text-[#F28705]">{event.attendees} attending</span>
                                                <Link
                                                    href={event.link}
                                                    className="text-xs text-white/60 hover:text-[#F28705] transition-colors"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    Learn More →
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {selectedEvent.id === event.id && (
                                        <div className="absolute inset-0 rounded-lg shadow-[0_0_50px_rgba(242,135,5,0.1)] pointer-events-none" />
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        {/* View All Events Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-8"
                        >
                            <Link
                                href="/events"
                                className="block w-full text-center border border-[#F28705] text-[#F28705] py-3 rounded font-['Refrigerator_Deluxe'] hover:bg-[#F28705]/10 transition-colors"
                            >
                                VIEW ALL EVENTS
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpcomingEvents;
