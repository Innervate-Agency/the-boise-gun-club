'use client';

import Calendar from '@/components/events/Calendar';

export default function EventsPage() {
    return (
        <main className="relative z-0 w-full flex flex-col min-h-screen">
            <div className="flex-grow relative z-10">
                <Calendar />
            </div>
        </main>
    );
}
