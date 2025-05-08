'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type ViewMode = 'month' | 'week' | 'list';
type EventCategory = 'competition' | 'training' | 'social' | 'maintenance';

export interface CalendarEvent {
    id: string;
    title: string;
    start: Date;
    end: Date;
    description: string;
    location: string;
    category: EventCategory;
    registrationStatus: 'open' | 'closed' | 'waitlist';
    maxParticipants?: number;
    currentParticipants?: number;
}

interface CalendarContextType {
    selectedDate: Date;
    setSelectedDate: (date: Date) => void;
    viewMode: ViewMode;
    setViewMode: (mode: ViewMode) => void;
    selectedEvent: CalendarEvent | null;
    setSelectedEvent: (event: CalendarEvent | null) => void;
    events: CalendarEvent[];
    addEvent: (event: CalendarEvent) => void;
    removeEvent: (eventId: string) => void;
}

const CalendarContext = createContext<CalendarContextType | undefined>(undefined);

// Sample events data
const sampleEvents: CalendarEvent[] = [
    {
        id: '1',
        title: 'Summer Shooting Competition',
        start: new Date(2024, 6, 15, 9, 0),
        end: new Date(2024, 6, 15, 17, 0),
        description: 'Annual summer shooting competition with multiple categories and prizes.',
        location: 'Main Range',
        category: 'competition',
        registrationStatus: 'open',
        maxParticipants: 50,
        currentParticipants: 32
    },
    {
        id: '2',
        title: 'Basic Firearms Training',
        start: new Date(2024, 6, 20, 10, 0),
        end: new Date(2024, 6, 20, 15, 0),
        description: 'Introductory firearms training for beginners.',
        location: 'Training Range',
        category: 'training',
        registrationStatus: 'open',
        maxParticipants: 20,
        currentParticipants: 15
    },
    // Add more sample events as needed
];

export function CalendarProvider({ children }: { children: ReactNode }) {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [viewMode, setViewMode] = useState<ViewMode>('month');
    const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
    const [events, setEvents] = useState<CalendarEvent[]>(sampleEvents);

    // Load preferences from localStorage on mount
    useEffect(() => {
        const savedViewMode = localStorage.getItem('calendarViewMode');
        if (savedViewMode) {
            setViewMode(savedViewMode as ViewMode);
        }
    }, []);

    // Save preferences to localStorage when they change
    useEffect(() => {
        localStorage.setItem('calendarViewMode', viewMode);
    }, [viewMode]);

    const addEvent = (event: CalendarEvent) => {
        setEvents(prev => [...prev, event]);
    };

    const removeEvent = (eventId: string) => {
        setEvents(prev => prev.filter(event => event.id !== eventId));
    };

    return (
        <CalendarContext.Provider
            value={{
                selectedDate,
                setSelectedDate,
                viewMode,
                setViewMode,
                selectedEvent,
                setSelectedEvent,
                events,
                addEvent,
                removeEvent
            }}
        >
            {children}
        </CalendarContext.Provider>
    );
}

export function useCalendar() {
    const context = useContext(CalendarContext);
    if (context === undefined) {
        throw new Error('useCalendar must be used within a CalendarProvider');
    }
    return context;
} 