'use client';

import { motion } from 'framer-motion';
import { useCalendar } from './CalendarContext';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const EventDetail = () => {
    const { selectedEvent, setSelectedEvent } = useCalendar();

    if (!selectedEvent) return null;

    const formatDate = (date: Date) => {
        return date.toLocaleString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    return (
        <motion.div
            className="font-mono border border-[var(--color-lahoma-orange)]/30 p-6 bg-[var(--owyhee-green-dark)] relative text-[var(--color-lahoma-orange)]"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
        >
            {/* Close button */}
            <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 text-[var(--color-lahoma-orange)] hover:text-[var(--color-lahoma-orange)]/80 transition-colors"
            >
                <X className="h-6 w-6" />
            </Button>

            {/* Event header */}
            <div className="mb-6">
                <div className="text-xs text-[var(--color-lahoma-orange)]/70 mb-2">EVENT DETAILS:</div>
                <h3 className="text-2xl text-[var(--color-lahoma-orange)] mb-2">{selectedEvent.title}</h3>
                <div className="flex items-center text-[var(--color-lahoma-orange)]/80 text-sm">
                    <span className="mr-2">[STATUS]</span>
                    <span className={`
                        ${selectedEvent.registrationStatus === 'open' ? 'text-green-500' :
                            selectedEvent.registrationStatus === 'waitlist' ? 'text-yellow-500' :
                                'text-red-500'
                        }
                    `}>
                        {selectedEvent.registrationStatus.toUpperCase()}
                    </span>
                </div>
            </div>

            {/* Event details in terminal style */}
            <div className="space-y-4">
                <div>
                    <div className="text-[var(--color-lahoma-orange)]/70">START:</div>
                    <div>{formatDate(selectedEvent.start)}</div>
                </div>

                <div>
                    <div className="text-[var(--color-lahoma-orange)]/70">END:</div>
                    <div>{formatDate(selectedEvent.end)}</div>
                </div>

                <div>
                    <div className="text-[var(--color-lahoma-orange)]/70">LOCATION:</div>
                    <div>{selectedEvent.location}</div>
                </div>

                <div>
                    <div className="text-[var(--color-lahoma-orange)]/70">CATEGORY:</div>
                    <div className="inline-block px-2 py-1 bg-[var(--color-lahoma-orange)]/20 text-[var(--color-lahoma-orange)]">
                        {selectedEvent.category.toUpperCase()}
                    </div>
                </div>

                {selectedEvent.maxParticipants && (
                    <div>
                        <div className="text-[var(--color-lahoma-orange)]/70">CAPACITY:</div>
                        <div className="flex items-center space-x-2">
                            <div className="flex-1 h-2 bg-[var(--color-lahoma-orange)]/20 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-[var(--color-lahoma-orange)]"
                                    initial={{ width: 0 }}
                                    animate={{
                                        width: `${(selectedEvent.currentParticipants! / selectedEvent.maxParticipants) * 100}%`
                                    }}
                                    transition={{ duration: 1 }}
                                />
                            </div>
                            <span>
                                {selectedEvent.currentParticipants}/{selectedEvent.maxParticipants}
                            </span>
                        </div>
                    </div>
                )}

                <div>
                    <div className="text-[var(--color-lahoma-orange)]/70">DESCRIPTION:</div>
                    <div className="mt-2 text-[var(--color-lahoma-orange)]/90 leading-relaxed">
                        {selectedEvent.description}
                    </div>
                </div>

                {/* Register button */}
                {selectedEvent.registrationStatus !== 'closed' && (
                    <Button
                        className="w-full mt-6 py-3 px-6 bg-[var(--color-lahoma-orange)] text-[var(--owyhee-green-dark)] font-bold hover:bg-[var(--color-lahoma-orange)]/90 transition-colors"
                    >
                        {selectedEvent.registrationStatus === 'waitlist'
                            ? 'JOIN WAITLIST'
                            : 'REGISTER NOW'}
                    </Button>
                )}
            </div>

            {/* Terminal decoration */}
            <div className="mt-8 text-xs text-[var(--color-lahoma-orange)]/50">
                {'> '}System ready for registration...
            </div>
        </motion.div>
    );
};

export default EventDetail;