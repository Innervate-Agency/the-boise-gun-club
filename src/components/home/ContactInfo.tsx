'use client';

import { motion } from 'framer-motion';
import { useContent } from '@/hooks/useContent';

const ContactInfo = () => {
    const { content, loading } = useContent();

    if (loading) {
        return (
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <div className="text-xl text-gray-600">Loading contact information...</div>
                </div>
            </section>
        );
    }

    const clubInfo = content?.clubInfo || {
        name: "Boise Gun Club",
        address: "123 Gun Club Road, Boise, ID 83702",
        phone: "(208) 555-0123",
        email: "info@boisegunclub.com"
    };

    const hours = content?.hours || {
        weekdays: "Monday - Friday: 9:00 AM - 6:00 PM",
        weekends: "Saturday - Sunday: 8:00 AM - 8:00 PM",
        holidays: "Closed on major holidays"
    };

    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Visit Us</h2>
                    <p className="text-xl text-gray-600">Get in touch or come visit our facility</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
                    >
                        <div className="text-4xl mb-4">📞</div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h3>
                        <div className="space-y-3 text-gray-600">
                            <p className="flex items-center justify-center gap-2">
                                <span className="font-semibold">Phone:</span> {clubInfo.phone}
                            </p>
                            <p className="flex items-center justify-center gap-2">
                                <span className="font-semibold">Email:</span> {clubInfo.email}
                            </p>
                        </div>
                    </motion.div>

                    {/* Location */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
                    >
                        <div className="text-4xl mb-4">📍</div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Location</h3>
                        <p className="text-gray-600 leading-relaxed">
                            {clubInfo.address}
                        </p>
                    </motion.div>

                    {/* Hours */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
                    >
                        <div className="text-4xl mb-4">🕒</div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Hours</h3>
                        <div className="space-y-2 text-gray-600 text-sm">
                            <p>{hours.weekdays}</p>
                            <p>{hours.weekends}</p>
                            <p className="font-medium text-red-600">{hours.holidays}</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactInfo;
