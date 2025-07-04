'use client'

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Calendar,
  Clock,
  Users,
  Target,
  Trophy,
  Star,
  MapPin,
  Phone,
  AlertCircle,
  Sun,
  Moon,
  CloudRain
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' }
}

const scheduleData = {
  regularHours: {
    weekday: { open: "9:00 AM", close: "6:00 PM", days: "Monday - Friday" },
    weekend: { open: "8:00 AM", close: "8:00 PM", days: "Saturday - Sunday" },
    closed: "Major holidays and severe weather conditions"
  },
  
  dailySchedule: [
    {
      day: "Monday",
      dayCode: "MON",
      activities: [
        { time: "9:00 AM - 12:00 PM", activity: "Open Shooting", type: "general", fields: "All fields available" },
        { time: "1:00 PM - 5:00 PM", activity: "Trap League Practice", type: "league", fields: "Fields 1-5" },
        { time: "6:00 PM - 8:00 PM", activity: "Evening Open Shooting", type: "general", fields: "Fields 6-10" }
      ]
    },
    {
      day: "Tuesday", 
      dayCode: "TUE",
      activities: [
        { time: "9:00 AM - 12:00 PM", activity: "Open Shooting", type: "general", fields: "All fields available" },
        { time: "1:00 PM - 4:00 PM", activity: "Ladies League", type: "league", fields: "Fields 1-3" },
        { time: "5:00 PM - 8:00 PM", activity: "Skeet League", type: "league", fields: "Skeet fields 1-5" }
      ]
    },
    {
      day: "Wednesday",
      dayCode: "WED", 
      activities: [
        { time: "9:00 AM - 12:00 PM", activity: "Open Shooting", type: "general", fields: "All fields available" },
        { time: "1:00 PM - 3:00 PM", activity: "Junior Training", type: "training", fields: "Field 10 (Training)" },
        { time: "4:00 PM - 6:00 PM", activity: "Corporate Groups", type: "corporate", fields: "Fields 6-10" }
      ]
    },
    {
      day: "Thursday",
      dayCode: "THU",
      activities: [
        { time: "9:00 AM - 12:00 PM", activity: "Open Shooting", type: "general", fields: "All fields available" },
        { time: "1:00 PM - 5:00 PM", activity: "Trap League Competition", type: "competition", fields: "Fields 1-8" },
        { time: "6:00 PM - 8:00 PM", activity: "Evening Open Shooting", type: "general", fields: "Fields 9-10" }
      ]
    },
    {
      day: "Friday",
      dayCode: "FRI",
      activities: [
        { time: "9:00 AM - 12:00 PM", activity: "Open Shooting", type: "general", fields: "All fields available" },
        { time: "1:00 PM - 4:00 PM", activity: "Senior League", type: "league", fields: "Fields 1-5" },
        { time: "5:00 PM - 8:00 PM", activity: "Weekend Prep", type: "general", fields: "All fields available" }
      ]
    },
    {
      day: "Saturday",
      dayCode: "SAT",
      activities: [
        { time: "8:00 AM - 10:00 AM", activity: "Youth Training Program", type: "training", fields: "Fields 8-10" },
        { time: "10:30 AM - 2:00 PM", activity: "Weekend Tournament", type: "competition", fields: "All trap fields" },
        { time: "2:30 PM - 6:00 PM", activity: "Open Shooting", type: "general", fields: "All fields available" },
        { time: "6:30 PM - 8:00 PM", activity: "Sporting Clays", type: "general", fields: "15-station course" }
      ]
    },
    {
      day: "Sunday", 
      dayCode: "SUN",
      activities: [
        { time: "8:00 AM - 11:00 AM", activity: "Fun Shoot Events", type: "event", fields: "Various fields" },
        { time: "11:30 AM - 3:00 PM", activity: "Family Shooting Day", type: "family", fields: "All fields available" },
        { time: "3:30 PM - 6:00 PM", activity: "Open Shooting", type: "general", fields: "All fields available" },
        { time: "6:30 PM - 8:00 PM", activity: "Evening League", type: "league", fields: "Fields 1-5" }
      ]
    }
  ],

  leagues: [
    {
      name: "Monday Trap League",
      day: "Monday",
      time: "1:00 PM - 5:00 PM",
      season: "Year-round",
      level: "All skill levels",
      contact: "League Officer",
      description: "Weekly trap competition with handicap system"
    },
    {
      name: "Ladies League", 
      day: "Tuesday",
      time: "1:00 PM - 4:00 PM", 
      season: "Spring & Fall",
      level: "Women only",
      contact: "Mary Johnson",
      description: "Supportive environment for women shooters"
    },
    {
      name: "Skeet League",
      day: "Tuesday", 
      time: "5:00 PM - 8:00 PM",
      season: "Year-round",
      level: "Intermediate+", 
      contact: "Mike Rodriguez",
      description: "Competitive skeet league with NSSA rules"
    },
    {
      name: "Senior League",
      day: "Friday",
      time: "1:00 PM - 4:00 PM",
      season: "Year-round", 
      level: "55+ years",
      contact: "Bill Thompson",
      description: "Relaxed pace league for senior shooters"
    },
    {
      name: "Youth Program",
      day: "Saturday",
      time: "8:00 AM - 10:00 AM",
      season: "Year-round",
      level: "Ages 12-18",
      contact: "Sarah Mitchell",
      description: "Safety-focused training for young shooters"
    }
  ]
}

const getActivityIcon = (type: string) => {
  switch (type) {
    case 'league': return Trophy
    case 'competition': return Star
    case 'training': return Target
    case 'corporate': return Users
    case 'family': return Users
    case 'event': return Calendar
    default: return Clock
  }
}

const getActivityColor = (type: string) => {
  switch (type) {
    case 'league': return 'bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border-[var(--accent-primary)]/20'
    case 'competition': return 'bg-[var(--brand-red-action)]/10 text-[var(--brand-red-action)] border-[var(--brand-red-action)]/20'
    case 'training': return 'bg-[var(--brand-blue)]/10 text-[var(--brand-blue)] border-[var(--brand-blue)]/20'
    case 'corporate': return 'bg-[var(--brand-green)]/10 text-[var(--brand-green)] border-[var(--brand-green)]/20'
    case 'family': return 'bg-[var(--accent-tertiary)]/10 text-[var(--accent-tertiary)] border-[var(--accent-tertiary)]/20'
    case 'event': return 'bg-purple-500/10 text-purple-600 border-purple-500/20'
    default: return 'bg-[var(--bg-secondary)] text-[var(--text-secondary)] border-[var(--bg-secondary)]'
  }
}

export default function WeeklySchedulePage() {
  const [selectedDay, setSelectedDay] = useState('Monday')

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/events.webp"
            fill
            className="object-cover scale-105 transition-transform duration-[20s] ease-out"
            priority
            alt="Weekly Schedule at Boise Gun Club"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-[var(--accent-primary)]/10" />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <motion.div {...fadeInUp}>
            <div className="flex items-center justify-center mb-6">
              <Calendar className="w-16 h-16 text-[var(--accent-primary)] mr-4" />
              <h1 className="text-5xl md:text-7xl font-bold text-white font-['Rajdhani'] uppercase tracking-tight leading-none">
                Weekly <span className="text-[var(--accent-primary)]">Schedule</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-8 max-w-3xl mx-auto font-['Noto Sans'] font-light leading-relaxed">
              Plan your visit with our comprehensive weekly schedule. From leagues and competitions 
              to open shooting and training programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] text-white font-['Rajdhani'] tracking-wide px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300">
                <Link href="#schedule">VIEW THIS WEEK</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-black font-['Rajdhani'] tracking-wide px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                <Link href="/schedule/reservations">MAKE RESERVATION</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Operating Hours */}
      <section className="py-24 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-primary)] font-['Rajdhani'] uppercase tracking-tight">
              Range <span className="text-[var(--accent-primary)]">Hours</span>
            </h2>
            <p className="text-xl text-[var(--text-secondary)] font-['Noto Sans'] font-light">
              Our facility is open year-round with extended weekend hours.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-8">
                <Sun className="w-12 h-12 text-[var(--accent-primary)] mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4 font-['Rajdhani'] uppercase text-[var(--text-primary)]">
                  Weekdays
                </h3>
                <div className="space-y-2">
                  <p className="text-lg font-['Noto Sans'] font-light text-[var(--text-secondary)]">
                    {scheduleData.regularHours.weekday.days}
                  </p>
                  <p className="text-3xl font-bold text-[var(--accent-primary)] font-['Rajdhani']">
                    {scheduleData.regularHours.weekday.open} - {scheduleData.regularHours.weekday.close}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-[var(--accent-primary)] bg-gradient-to-br from-[var(--accent-primary)]/5 to-transparent">
              <CardContent className="p-8">
                <Moon className="w-12 h-12 text-[var(--accent-primary)] mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4 font-['Rajdhani'] uppercase text-[var(--text-primary)]">
                  Weekends
                </h3>
                <div className="space-y-2">
                  <p className="text-lg font-['Noto Sans'] font-light text-[var(--text-secondary)]">
                    {scheduleData.regularHours.weekend.days}
                  </p>
                  <p className="text-3xl font-bold text-[var(--accent-primary)] font-['Rajdhani']">
                    {scheduleData.regularHours.weekend.open} - {scheduleData.regularHours.weekend.close}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 p-4 bg-gradient-to-r from-[var(--accent-primary)]/10 to-transparent rounded-lg border border-[var(--accent-primary)]/20">
              <AlertCircle className="w-6 h-6 text-[var(--accent-primary)]" />
              <p className="text-[var(--text-secondary)] font-['Noto Sans'] font-light">
                <strong>Please Note:</strong> {scheduleData.regularHours.closed}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section id="schedule" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-primary)] font-['Rajdhani'] uppercase tracking-tight">
              Daily <span className="text-[var(--accent-primary)]">Activities</span>
            </h2>
            <p className="text-xl text-[var(--text-secondary)] font-['Noto Sans'] font-light">
              Click on any day to see detailed schedule and activities.
            </p>
          </div>

          {/* Day Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {scheduleData.dailySchedule.map((day) => (
              <button
                key={day.day}
                onClick={() => setSelectedDay(day.day)}
                className={`px-6 py-3 rounded-lg font-['Rajdhani'] uppercase font-bold tracking-wide transition-all duration-300 ${
                  selectedDay === day.day
                    ? 'bg-[var(--accent-primary)] text-white transform scale-105'
                    : 'bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:bg-[var(--accent-primary)]/10 hover:text-[var(--accent-primary)]'
                }`}
              >
                {day.dayCode}
              </button>
            ))}
          </div>

          {/* Selected Day Schedule */}
          {scheduleData.dailySchedule
            .filter(day => day.day === selectedDay)
            .map((day) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h3 className="text-3xl font-bold text-center mb-8 font-['Rajdhani'] uppercase text-[var(--text-primary)]">
                  {day.day} Schedule
                </h3>
                
                <div className="grid gap-6">
                  {day.activities.map((activity, index) => {
                    const IconComponent = getActivityIcon(activity.type)
                    return (
                      <Card key={index} className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="relative">
                              <IconComponent className="w-8 h-8 text-[var(--accent-primary)]" />
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-wrap items-center gap-3 mb-3">
                                <Badge className={getActivityColor(activity.type)}>
                                  {activity.type.charAt(0).toUpperCase() + activity.type.slice(1)}
                                </Badge>
                                <span className="text-[var(--text-secondary)] font-['Noto Sans'] font-light">
                                  {activity.time}
                                </span>
                              </div>
                              <h4 className="text-xl font-bold mb-2 font-['Rajdhani'] uppercase text-[var(--text-primary)]">
                                {activity.activity}
                              </h4>
                              <p className="text-[var(--text-secondary)] font-['Noto Sans'] font-light">
                                <strong>Location:</strong> {activity.fields}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </motion.div>
            ))}
        </div>
      </section>

      {/* League Information */}
      <section className="py-24 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-primary)] font-['Rajdhani'] uppercase tracking-tight">
              League <span className="text-[var(--accent-primary)]">Information</span>
            </h2>
            <p className="text-xl text-[var(--text-secondary)] font-['Noto Sans'] font-light">
              Join our competitive leagues and improve your skills with fellow shooters.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scheduleData.leagues.map((league, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)] border-0">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Trophy className="w-6 h-6 text-[var(--accent-primary)]" />
                      <Badge className="bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]">
                        {league.season}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold font-['Rajdhani'] uppercase text-[var(--text-primary)]">
                      {league.name}
                    </h3>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[var(--accent-secondary)]" />
                        <span className="text-[var(--text-secondary)] font-['Noto Sans'] font-light">
                          {league.day}s, {league.time}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-[var(--accent-secondary)]" />
                        <span className="text-[var(--text-secondary)] font-['Noto Sans'] font-light">
                          {league.level}
                        </span>
                      </div>
                      <p className="text-[var(--text-secondary)] font-['Noto Sans'] font-light leading-relaxed">
                        {league.description}
                      </p>
                      <div className="pt-4">
                        <p className="text-sm text-[var(--text-secondary)] font-['Noto Sans'] font-light">
                          <strong>Contact:</strong> {league.contact}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Weather & Conditions */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-primary)] font-['Rajdhani'] uppercase tracking-tight">
              Weather <span className="text-[var(--accent-primary)]">Policy</span>
            </h2>
            <p className="text-xl text-[var(--text-secondary)] font-['Noto Sans'] font-light">
              Safety first - we monitor weather conditions closely for all activities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-2 border-green-500/20 bg-gradient-to-br from-green-500/5 to-transparent">
              <CardContent className="p-8">
                <Sun className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 font-['Rajdhani'] uppercase text-[var(--text-primary)]">
                  Clear Conditions
                </h3>
                <p className="text-[var(--text-secondary)] font-['Noto Sans'] font-light">
                  All ranges open. Normal operating hours and activities.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-yellow-500/20 bg-gradient-to-br from-yellow-500/5 to-transparent">
              <CardContent className="p-8">
                <CloudRain className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 font-['Rajdhani'] uppercase text-[var(--text-primary)]">
                  Light Rain
                </h3>
                <p className="text-[var(--text-secondary)] font-['Noto Sans'] font-light">
                  Operations continue. Some outdoor activities may be modified.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-red-500/20 bg-gradient-to-br from-red-500/5 to-transparent">
              <CardContent className="p-8">
                <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 font-['Rajdhani'] uppercase text-[var(--text-primary)]">
                  Severe Weather
                </h3>
                <p className="text-[var(--text-secondary)] font-['Noto Sans'] font-light">
                  All outdoor activities suspended. Facility may close temporarily.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button asChild className="bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] text-white">
              <Link href="/weather">Check Current Conditions</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact & Reservations */}
      <section className="py-24 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <Phone className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-['Rajdhani'] uppercase">
            Questions About<br />The Schedule?
          </h2>
          <p className="text-xl text-white/90 mb-8 font-['Noto Sans'] font-light max-w-2xl mx-auto">
            Need to make a reservation or have questions about league participation? 
            Our staff is here to help plan your visit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[var(--accent-primary)] hover:bg-gray-100 font-['Rajdhani'] tracking-wide px-8 py-6 text-lg">
              <Link href="/schedule/reservations">MAKE RESERVATION</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-[var(--accent-primary)] font-['Rajdhani'] tracking-wide px-8 py-6 text-lg">
              <Link href="/contact">CONTACT US</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}