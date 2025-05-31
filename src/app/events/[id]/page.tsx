'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useContent } from '@/hooks/useContent';

interface EventPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function EventDetailPage({ params }: EventPageProps) {
  const [resolvedParams, setResolvedParams] = useState<{ id: string } | null>(null);
  
  useEffect(() => {
    params.then(setResolvedParams);
  }, [params]);
  const { content, loading } = useContent();
  const [event, setEvent] = useState<any>(null);

  useEffect(() => {
    if (content?.events && resolvedParams) {
      const foundEvent = content.events.find((e: any) => e.id.toString() === resolvedParams.id);
      setEvent(foundEvent);
    }
  }, [content, resolvedParams]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-[var(--text-secondary)]">Loading...</div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">Event Not Found</h1>
          <Link href="/events" className="text-[var(--accent-primary)] hover:underline">
            ← Back to Events
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Back Link */}
          <Link 
            href="/events" 
            className="inline-flex items-center text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] mb-8 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Events
          </Link>

          {/* Event Header */}
          <div className="bg-[var(--bg-secondary)] rounded-lg p-8 mb-8 border border-[var(--glass-border)]">
            <h1 className="text-4xl md:text-5xl font-bold font-[\'Refrigerator_Deluxe\'] uppercase mb-4">
              {event.title}
            </h1>
            
            <div className="flex flex-wrap gap-6 text-lg text-[var(--text-secondary)]">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{event.date}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{event.time}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{event.location}</span>
              </div>
            </div>
          </div>

          {/* Event Description */}
          <div className="bg-[var(--bg-secondary)] rounded-lg p-8 mb-8 border border-[var(--glass-border)]">
            <h2 className="text-2xl font-bold font-[\'Refrigerator_Deluxe\'] uppercase mb-4">
              Event Details
            </h2>
            <p className="text-lg leading-relaxed text-[var(--text-secondary)]">
              {event.description || 'Join us for this exciting event at the Boise Gun Club. More details coming soon!'}
            </p>
          </div>

          {/* Registration CTA */}
          <div className="bg-[var(--bg-secondary)] rounded-lg p-8 border border-[var(--glass-border)] text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Join?</h3>
            <p className="text-[var(--text-secondary)] mb-6">
              Spots are limited. Register now to secure your place.
            </p>
            <button className="px-8 py-3 bg-[var(--accent-primary)] text-white rounded-lg font-bold hover:bg-[var(--accent-secondary)] transition-colors">
              Register for This Event
            </button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}