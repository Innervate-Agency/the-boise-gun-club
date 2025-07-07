'use client';

import Image from 'next/image';
import { Calendar, Clock, MapPin, Users, Trophy, Target, DollarSign, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-tertiary">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/events.webp"
            alt="Boise Gun Club Events"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-lahoma-orange/20 to-leonard-yellow/20" />
        </div>
        
        {/* Floating Background Effects */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-lahoma-orange/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-leonard-yellow/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-leonard-yellow/20 text-leonard-yellow border-leonard-yellow/30">
              <Calendar className="w-4 h-4 mr-2" />
              Club Events & Tournaments
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 dark:text-white mb-6">
              UPCOMING EVENTS
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto font-body">
              Join us for competitive tournaments, training sessions, and family-friendly events. 
              From weekly leagues to championship competitions - there's something for every shooter.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-lahoma-orange hover:bg-leonard-yellow text-white dark:text-white font-heading">
                <Calendar className="w-5 h-5 mr-2" />
                View Full Calendar
              </Button>
              <Button variant="outline" size="lg" className="border-leonard-yellow text-leonard-yellow hover:bg-leonard-yellow/10">
                <Trophy className="w-5 h-5 mr-2" />
                Tournament Results
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Integration Section */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-white mb-4">
              LIVE EVENT CALENDAR
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 font-body">
              Our directors update this calendar in real-time with new events, schedule changes, and tournament announcements.
            </p>
          </div>
          
          {/* Google Calendar Embed Placeholder */}
          <div className="bg-card/95 backdrop-blur-xl rounded-2xl border border-border/20 p-8 shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-leonard-yellow/5 to-lahoma-orange/5 rounded-xl border border-leonard-yellow/20 flex items-center justify-center">
              <div className="text-center">
                <Calendar className="w-16 h-16 text-leonard-yellow mx-auto mb-4" />
                <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-2">
                  Google Calendar Integration
                </h3>
                <p className="text-gray-600 dark:text-gray-300 font-body">
                  Live calendar will be embedded here, managed by club directors
                </p>
                <Badge className="mt-4 bg-brand-green/20 text-brand-green border-brand-green/30">
                  Real-time Updates
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-white mb-4">
              FEATURED EVENTS
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 font-body max-w-2xl mx-auto">
              Championship tournaments, weekly leagues, and special events throughout the season.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Idaho State Sporting Clays Championship */}
            <Card className="rounded-xl overflow-hidden group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
              <div className="h-32 bg-gradient-to-r from-lahoma-orange to-leonard-yellow relative">
                <Badge className="absolute top-4 left-4 bg-white/20 text-white dark:text-white border-white/30">
                  Championship
                </Badge>
                <Trophy className="absolute bottom-4 right-4 w-8 h-8 text-white/80" />
              </div>
              <CardHeader>
                <CardTitle className="font-heading text-gray-900 dark:text-white flex items-center gap-2">
                  <Target className="w-5 h-5 text-lahoma-orange" />
                  Idaho State Sporting Clays Championship
                </CardTitle>
                <CardDescription className="font-body text-gray-600 dark:text-gray-300">
                  Premier sporting clays competition featuring 100 targets across 15 stations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <Calendar className="w-4 h-4" />
                    March 15-16, 2025
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <Clock className="w-4 h-4" />
                    8:00 AM - 6:00 PM
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <DollarSign className="w-4 h-4" />
                    $85 Entry Fee
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <Users className="w-4 h-4" />
                    150 Shooters Expected
                  </div>
                </div>
                <Button className="w-full bg-lahoma-orange hover:bg-leonard-yellow text-white dark:text-white">
                  Register Now
                </Button>
              </CardContent>
            </Card>

            {/* Weekly Trap League */}
            <Card className="rounded-xl overflow-hidden group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
              <div className="h-32 bg-gradient-to-r from-brand-green to-brand-green-light relative">
                <Badge className="absolute top-4 left-4 bg-white/20 text-white dark:text-white border-white/30">
                  Weekly League
                </Badge>
                <Target className="absolute bottom-4 right-4 w-8 h-8 text-white/80" />
              </div>
              <CardHeader>
                <CardTitle className="font-heading text-gray-900 dark:text-white flex items-center gap-2">
                  <Target className="w-5 h-5 text-brand-green" />
                  Tuesday Night Trap League
                </CardTitle>
                <CardDescription className="font-body text-gray-600 dark:text-gray-300">
                  Weekly 16-yard trap competition. All skill levels welcome!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <Calendar className="w-4 h-4" />
                    Every Tuesday
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <Clock className="w-4 h-4" />
                    6:00 PM - 8:00 PM
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <DollarSign className="w-4 h-4" />
                    $120 Season
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <Users className="w-4 h-4" />
                    40 Shooters
                  </div>
                </div>
                <Button className="w-full bg-brand-green hover:bg-brand-green-light text-white dark:text-white">
                  Join League
                </Button>
              </CardContent>
            </Card>

            {/* Youth Training Camp */}
            <Card className="rounded-xl overflow-hidden group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
              <div className="h-32 bg-gradient-to-r from-brand-blue to-brand-blue-dark relative">
                <Badge className="absolute top-4 left-4 bg-white/20 text-white dark:text-white border-white/30">
                  Youth Program
                </Badge>
                <User className="absolute bottom-4 right-4 w-8 h-8 text-white/80" />
              </div>
              <CardHeader>
                <CardTitle className="font-heading text-gray-900 dark:text-white flex items-center gap-2">
                  <User className="w-5 h-5 text-brand-blue" />
                  Summer Youth Training Camp
                </CardTitle>
                <CardDescription className="font-body text-gray-600 dark:text-gray-300">
                  5-day intensive training for young shooters ages 12-18
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <Calendar className="w-4 h-4" />
                    July 8-12, 2025
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <Clock className="w-4 h-4" />
                    9:00 AM - 3:00 PM
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <DollarSign className="w-4 h-4" />
                    $250 (includes targets)
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <Users className="w-4 h-4" />
                    Limited to 20 Youth
                  </div>
                </div>
                <Button className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white dark:text-white">
                  Register Youth
                </Button>
              </CardContent>
            </Card>

            {/* Ladies Day */}
            <Card className="rounded-xl overflow-hidden group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
              <div className="h-32 bg-gradient-to-r from-leonard-yellow to-lahoma-orange relative">
                <Badge className="absolute top-4 left-4 bg-white/20 text-white dark:text-white border-white/30">
                  Special Event
                </Badge>
                <Users className="absolute bottom-4 right-4 w-8 h-8 text-white/80" />
              </div>
              <CardHeader>
                <CardTitle className="font-heading text-gray-900 dark:text-white flex items-center gap-2">
                  <Users className="w-5 h-5 text-leonard-yellow" />
                  Ladies Day Sporting Clays
                </CardTitle>
                <CardDescription className="font-body text-gray-600 dark:text-gray-300">
                  Special event designed for women shooters with professional instruction
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <Calendar className="w-4 h-4" />
                    April 5, 2025
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <Clock className="w-4 h-4" />
                    10:00 AM - 4:00 PM
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <DollarSign className="w-4 h-4" />
                    $45 (lunch included)
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <Users className="w-4 h-4" />
                    30 Participants
                  </div>
                </div>
                <Button className="w-full bg-leonard-yellow hover:bg-lahoma-orange text-black dark:text-black">
                  Register Now
                </Button>
              </CardContent>
            </Card>

            {/* Corporate Team Building */}
            <Card className="rounded-xl overflow-hidden group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
              <div className="h-32 bg-gradient-to-r from-brand-red-action to-lahoma-orange relative">
                <Badge className="absolute top-4 left-4 bg-white/20 text-white dark:text-white border-white/30">
                  Corporate
                </Badge>
                <Users className="absolute bottom-4 right-4 w-8 h-8 text-white/80" />
              </div>
              <CardHeader>
                <CardTitle className="font-heading text-gray-900 dark:text-white flex items-center gap-2">
                  <Users className="w-5 h-5 text-brand-red-action" />
                  Corporate Team Building
                </CardTitle>
                <CardDescription className="font-body text-gray-600 dark:text-gray-300">
                  Custom corporate events with professional instruction and catering
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <Calendar className="w-4 h-4" />
                    By Appointment
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <Clock className="w-4 h-4" />
                    Half or Full Day
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <DollarSign className="w-4 h-4" />
                    Custom Pricing
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <Users className="w-4 h-4" />
                    10-50 People
                  </div>
                </div>
                <Button className="w-full bg-brand-red-action hover:bg-lahoma-orange text-white dark:text-white">
                  Get Quote
                </Button>
              </CardContent>
            </Card>

            {/* Veterans Day Tribute */}
            <Card className="rounded-xl overflow-hidden group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
              <div className="h-32 bg-gradient-to-r from-brand-blue-dark to-brand-red-action relative">
                <Badge className="absolute top-4 left-4 bg-white/20 text-white dark:text-white border-white/30">
                  Special Tribute
                </Badge>
                <Trophy className="absolute bottom-4 right-4 w-8 h-8 text-white/80" />
              </div>
              <CardHeader>
                <CardTitle className="font-heading text-gray-900 dark:text-white flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-brand-blue-dark" />
                  Veterans Day Memorial Shoot
                </CardTitle>
                <CardDescription className="font-body text-gray-600 dark:text-gray-300">
                  Honoring our veterans with a special tribute sporting clays event
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <Calendar className="w-4 h-4" />
                    November 11, 2025
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <Clock className="w-4 h-4" />
                    9:00 AM - 5:00 PM
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <DollarSign className="w-4 h-4" />
                    Free for Veterans
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <Users className="w-4 h-4" />
                    All Welcome
                  </div>
                </div>
                <Button className="w-full bg-brand-blue-dark hover:bg-brand-red-action text-white dark:text-white">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-lahoma-orange/10 to-leonard-yellow/10 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-white mb-6">
            READY TO COMPETE?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 font-body">
            Join our vibrant shooting community and participate in events that challenge and inspire. 
            From beginner-friendly leagues to championship competitions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-lahoma-orange hover:bg-leonard-yellow text-white dark:text-white font-heading">
              <Trophy className="w-5 h-5 mr-2" />
              View Tournament Schedule
            </Button>
            <Button variant="outline" size="lg" className="border-leonard-yellow text-leonard-yellow hover:bg-leonard-yellow/10">
              <Users className="w-5 h-5 mr-2" />
              Join a League
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}