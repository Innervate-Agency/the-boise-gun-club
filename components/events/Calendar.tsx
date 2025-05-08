'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarProvider, useCalendar } from './CalendarContext';
import MonthView from './MonthView';
import WeekView from './WeekView';
import EventList from './EventList';
import EventDetail from './EventDetail';

// Terminal typing effect hook
function useTypingEffect(text: string, speed: number = 50) {
    const [displayedText, setDisplayedText] = useState('');
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        let currentIndex = 0;
        setIsComplete(false);
        setDisplayedText('');

        const interval = setInterval(() => {
            if (currentIndex < text.length) {
                setDisplayedText(prev => prev + text[currentIndex]);
                currentIndex++;
            } else {
                setIsComplete(true);
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed]);

    return { displayedText, isComplete };
}

// Calendar header with retro styling
function CalendarHeader() {
    const { viewMode, setViewMode } = useCalendar();
    const { displayedText } = useTypingEffect('BOISE GUN CLUB - EVENT TERMINAL v1.0', 70);

    return (
        <div className="border-b border-[#FFB000]/30 pb-4 mb-6">
            <div className="flex items-center justify-between">
                <motion.h2
                    className="font-['VT323'] text-2xl text-[#FFB000] tracking-wider"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {displayedText}_
                </motion.h2>
                <div className="flex gap-4">
                    {(['month', 'week', 'list'] as const).map((mode) => (
                        <button
                            key={mode}
                            onClick={() => setViewMode(mode)}
                            className={`px-4 py-2 font-['VT323'] uppercase tracking-wider text-sm
                                ${viewMode === mode
                                    ? 'text-[#FFB000] border border-[#FFB000]'
                                    : 'text-[#FFB000]/60 hover:text-[#FFB000] transition-colors'
                                }`}
                        >
                            {mode}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

// Main Calendar component
function CalendarContent() {
    const { viewMode, selectedEvent } = useCalendar();
    const [showScanline, setShowScanline] = useState(true);

    // Toggle scanline effect periodically
    useEffect(() => {
        const interval = setInterval(() => {
            setShowScanline(prev => !prev);
        }, 16); // 60fps

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative min-h-screen bg-[#0A3200] text-[#FFB000] p-8">
            {/* Scanline effect */}
            {showScanline && (
                <div
                    className="absolute left-0 right-0 h-[2px] bg-[#FFB000]/10 pointer-events-none"
                    style={{
                        top: `${Math.random() * 100}%`,
                        boxShadow: '0 0 10px rgba(255, 176, 0, 0.2)',
                        transition: 'top 0.1s linear'
                    }}
                />
            )}

            {/* CRT screen effect */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[#0A3200]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FFB000]/5 to-transparent opacity-50" />
            </div>

            {/* Main content */}
            <div className="relative z-10">
                <CalendarHeader />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Calendar views */}
                    <div className={`${selectedEvent ? 'lg:col-span-2' : 'lg:col-span-3'}`}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={viewMode}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                {viewMode === 'month' && <MonthView />}
                                {viewMode === 'week' && <WeekView />}
                                {viewMode === 'list' && <EventList />}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Event details sidebar */}
                    {selectedEvent && (
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            className="lg:col-span-1"
                        >
                            <EventDetail />
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
}

// Exported Calendar component with provider
export default function Calendar() {
    return (
        <CalendarProvider>
            <CalendarContent />
        </CalendarProvider>
    );
} 