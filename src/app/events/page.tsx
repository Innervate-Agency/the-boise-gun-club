'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Target, 
  Trophy, 
  Users,
  Calendar,
  DollarSign
} from 'lucide-react';
import { PageHero } from '@/components/ui/page-hero';

const featuredEvents = [
  {
    title: "Idaho State Sporting Clays Championship",
    description: "Premier sporting clays competition featuring 100 targets across 15 stations.",
    date: "March 15-16, 2025",
    time: "8:00 AM - 6:00 PM",
    fee: "$85 Entry Fee",
    attendees: "150 Shooters Expected",
    image: "/images/events.webp",
    category: "Championship",
    icon: Trophy,
    color: "from-lahoma-orange to-leonard-yellow"
  },
  {
    title: "Tuesday Night Trap League",
    description: "Weekly 16-yard trap competition. All skill levels welcome!",
    date: "Every Tuesday",
    time: "6:00 PM - 8:00 PM",
    fee: "$120 Season",
    attendees: "40 Shooters",
    image: "/images/training.webp",
    category: "Weekly League",
    icon: Target,
    color: "from-brand-green to-brand-green-light"
  },
  {
    title: "Summer Youth Training Camp",
    description: "5-day intensive training for young shooters ages 12-18.",
    date: "July 8-12, 2025",
    time: "9:00 AM - 3:00 PM",
    fee: "$250 (includes targets)",
    attendees: "Limited to 20 Youth",
    image: "/images/membership.webp",
    category: "Youth Program",
    icon: Users,
    color: "from-brand-blue to-brand-blue-dark"
  }
];

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-bg-primary text-text-primary">
      <PageHero
        title="Upcoming Events"
        subtitle="Club Events & Tournaments"
        description="Join us for competitive tournaments, training sessions, and family-friendly events. From weekly leagues to championship competitions - there's something for every shooter."
        primaryAction={{ text: 'View Full Calendar', onClick: () => console.log('View Calendar') }}
        secondaryAction={{ text: 'Tournament Results', onClick: () => console.log('View Results') }}
        icon={Calendar}
        backgroundPreset="gunclub"
        gradient="from-lahoma-orange to-leonard-yellow"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-text-primary mb-4">
              Featured Events
            </h2>
            <p className="text-lg text-text-secondary font-body max-w-2xl mx-auto">
              Championship tournaments, weekly leagues, and special events throughout the season.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEvents.map((event, index) => (
              <Card key={index} className="rounded-xl overflow-hidden group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
                <div className={`h-32 bg-gradient-to-r ${event.color} relative`}>
                  <Badge className="absolute top-4 left-4 bg-white/20 text-white border-white/30">
                    {event.category}
                  </Badge>
                  <event.icon className="absolute bottom-4 right-4 w-8 h-8 text-white/80" />
                </div>
                <CardHeader>
                  <CardTitle className="font-heading text-text-primary flex items-center gap-2">
                    <Target className="w-5 h-5 text-lahoma-orange" />
                    {event.title}
                  </CardTitle>
                  <CardDescription className="font-body text-text-secondary">
                    {event.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-text-secondary">
                      <Calendar className="w-4 h-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-text-secondary">
                      <Clock className="w-4 h-4" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-text-secondary">
                      <DollarSign className="w-4 h-4" />
                      {event.fee}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-text-secondary">
                      <Users className="w-4 h-4" />
                      {event.attendees}
                    </div>
                  </div>
                  <Button className="w-full bg-lahoma-orange hover:bg-leonard-yellow text-white">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
