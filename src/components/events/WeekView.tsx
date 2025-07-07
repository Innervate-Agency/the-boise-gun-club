'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useCalendar } from './CalendarContext';
import { Button } from '@/components/ui/button';

function getWeekDays(date: Date): Date[] {
    const start = new Date(date);
    start.setDate(date.getDate() - date.getDay());

    return Array.from({ length: 7 }, (_, i) => {
        const day = new Date(start);
        day.setDate(start.getDate() + i);
        return day;
    });
}

function getTimeSlots(): string[] {
    return Array.from({ length: 24 }, (_, i) => {
        const hour = i.toString().padStart(2, '0');
        return `${hour}:00`;
    });
}

const WeekView = () => {
    const { selectedDate, setSelectedDate, events, setSelectedEvent } = useCalendar();
    const [weekDays, setWeekDays] = useState<Date[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const timeSlots = getTimeSlots();

    useEffect(() => {
        setWeekDays(getWeekDays(selectedDate));
        // Simulate loading for terminal effect
        const timer = setTimeout(() => setIsLoading(false), 1000);
        return () => clearTimeout(timer);
    }, [selectedDate]);

    const navigateWeek = (direction: 'prev' | 'next') => {
        const newDate = new Date(selectedDate);
        newDate.setDate(newDate.getDate() + (direction === 'next' ? 7 : -7));
        setSelectedDate(newDate);
    };

    if (isLoading) {
        return (
            <div className="font-mono text-[var(--lahoma-orange)] animate-pulse">
                LOADING WEEK DATA...
            </div>
        );
    }

    return (
        <div className="font-mono text-[var(--lahoma-orange)]">
            {/* Week navigation */}
            <div className="flex justify-between items-center mb-6">
                <Button
                    variant="ghost"
                    onClick={() => navigateWeek('prev')}
                    className="text-[var(--lahoma-orange)] hover:text-[var(--lahoma-orange)]/80 transition-colors"
                >
                    {'<< PREV WEEK'}
                </Button>
                <h3 className="text-xl">
                    {`WEEK OF ${weekDays[0].toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${weekDays[6].toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`}
                </h3>
                <Button
                    variant="ghost"
                    onClick={() => navigateWeek('next')}
                    className="text-[var(--lahoma-orange)] hover:text-[var(--lahoma-orange)]/80 transition-colors"
                >
                    {'NEXT WEEK >>'}
                </Button>
            </div>

            {/* Week grid */}
            <div className="relative overflow-x-auto">
                <div className="grid grid-cols-8 min-w-[800px]">
                    {/* Time column */}
                    <div className="border-r border-[var(--lahoma-orange)]/30">
                        <div className="h-12" /> {/* Empty corner cell */}
                        {timeSlots.map(time => (
                            <div
                                key={time}
                                className="h-16 border-t border-[var(--lahoma-orange)]/30 pr-2 text-right text-[var(--lahoma-orange)]/70"
                            >
                                {time}
                            </div>
                        ))}
                    </div>

                    {/* Days columns */}
                    {weekDays.map((day, dayIndex) => (
                        <div key={day.toISOString()} className="relative">
                            {/* Day header */}
                            <div
                                className={`h-12 border-b border-[var(--lahoma-orange)]/30 text-center py-2
                                    ${day.toDateString() === new Date().toDateString()
                                        ? 'text-[var(--lahoma-orange)] bg-[var(--lahoma-orange)]/10'
                                        : 'text-[var(--lahoma-orange)]/70'
                                    }`}
                            >
                                <div>{day.toLocaleDateString('en-US', { weekday: 'short' })}</div>
                                <div>{day.getDate()}</div>
                            </div>

                            {/* Time slots */}
                            {timeSlots.map((time, timeIndex) => {
                                const currentEvents = events.filter(event => {
                                    const eventDate = event.start.toDateString() === day.toDateString();
                                    const eventHour = event.start.getHours() === parseInt(time);
                                    return eventDate && eventHour;
                                });

                                return (
                                    <div
                                        key={`${dayIndex}-${timeIndex}`}
                                        className="h-16 border-t border-[var(--lahoma-orange)]/30 relative"
                                    >
                                        {currentEvents.map(event => (
                                            <motion.div
                                                key={event.id}
                                                className="absolute inset-x-1 bg-[var(--lahoma-orange)]/20 border border-[var(--lahoma-orange)]/30
                                                         cursor-pointer hover:bg-[var(--lahoma-orange)]/30 transition-colors p-1"
                                                style={{
                                                    top: '0',
                                                    height: `${(event.end.getHours() - event.start.getHours()) * 64}px`
                                                }}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                onClick={() => setSelectedEvent(event)}
                                            >
                                                <div className="text-xs text-[var(--lahoma-orange)] truncate">
                                                    {event.title}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>

            {/* Terminal decoration */}
            <div className="mt-8 text-xs text-[var(--lahoma-orange)]/50">
                {'> '}Displaying week schedule... Type 'help' for commands_
            </div>
        </div>
    );
};

export default WeekView; 