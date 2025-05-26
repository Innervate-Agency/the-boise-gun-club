'use client';

import { createContext, useState, useContext, Dispatch, SetStateAction } from 'react';
import MonthView from './MonthView';
import EventList from './EventList';
import EventDetail from './EventDetail';

// Define the context type
interface CalendarContextType {
    selectedDate: Date;
    setSelectedDate: Dispatch<SetStateAction<Date>>;
    viewMode: string;
    setViewMode: Dispatch<SetStateAction<string>>;
    selectedEvent: any;
    setSelectedEvent: Dispatch<SetStateAction<any>>;
}

// Context for managing calendar state
const CalendarContext = createContext<CalendarContextType | null>(null);

const CalendarContainer = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [viewMode, setViewMode] = useState('month'); // 'month' or 'week'
    const [selectedEvent, setSelectedEvent] = useState(null);

    return (
        <CalendarContext.Provider value={{ selectedDate, setSelectedDate, viewMode, setViewMode, selectedEvent, setSelectedEvent }}>
            <div className="calendar-container bg-[#0A3200] text-[#FFB000] min-h-screen p-4">
                <MonthView />
                <EventList />
                {selectedEvent && <EventDetail />}
            </div>
        </CalendarContext.Provider>
    );
};

export const useCalendarContext = (): CalendarContextType => {
    const context = useContext(CalendarContext);
    if (!context) {
        throw new Error('useCalendarContext must be used within a CalendarContainer');
    }
    return context;
};

export default CalendarContainer;