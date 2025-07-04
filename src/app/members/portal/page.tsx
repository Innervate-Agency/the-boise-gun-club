'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  User, 
  Trophy, 
  Calendar, 
  DollarSign, 
  Clock, 
  Target,
  Users,
  FileText,
  CreditCard,
  Bell,
  Download,
  ExternalLink,
  TrendingUp,
  Award,
  Activity
} from 'lucide-react';

// Mock member data - would come from authentication/database
const memberData = {
  name: "John Anderson",
  memberNumber: "BGC-2018-0423",
  memberSince: "March 2018",
  membershipType: "Annual Premium",
  expirationDate: "March 15, 2025",
  status: "Active",
  volunteerHours: {
    completed: 12,
    required: 10,
    thisYear: 2024
  },
  recentScores: [
    { date: "Dec 8, 2024", discipline: "Trap", score: "24/25", location: "Field 3" },
    { date: "Dec 1, 2024", discipline: "Skeet", score: "23/25", location: "Field A" },
    { date: "Nov 24, 2024", discipline: "Sporting Clays", score: "89/100", location: "Course" }
  ],
  upcomingEvents: [
    { date: "Dec 15", event: "Winter Turkey Shoot", status: "Registered" },
    { date: "Dec 22", event: "Poker Shoot", status: "Available" },
    { date: "Jan 5", event: "New Year Sporting Clays", status: "Waitlist" }
  ],
  achievements: [
    { title: "Perfect Round", description: "25/25 Trap", earned: "Nov 2024" },
    { title: "Volunteer Champion", description: "15+ hours this year", earned: "Oct 2024" },
    { title: "Member Milestone", description: "6 years membership", earned: "Mar 2024" }
  ]
};

const quickActions = [
  { title: "Reserve Range Time", icon: Target, href: "/schedule/reservations", description: "Book your next shooting session" },
  { title: "Register for Events", icon: Calendar, href: "/events", description: "Sign up for competitions and fun shoots" },
  { title: "Update Profile", icon: User, href: "/profile", description: "Modify your contact information" },
  { title: "Pay Dues", icon: CreditCard, href: "/members/billing", description: "Manage your membership payments" },
  { title: "Log Volunteer Hours", icon: Clock, href: "/members/volunteer", description: "Record your community service" },
  { title: "View Documents", icon: FileText, href: "#documents", description: "Access bylaws, meeting minutes, reports" }
];

export default function MemberPortal() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-primary)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h1 className="font-['Rajdhani'] text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-2 uppercase">
                Welcome Back, <span className="text-[var(--accent-primary)]">{memberData.name.split(' ')[0]}</span>
              </h1>
              <p className="text-lg text-[var(--text-secondary)] font-['Noto Sans']">
                Member since {memberData.memberSince} • {memberData.memberNumber}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                {memberData.status}
              </Badge>
              <Badge variant="secondary">
                {memberData.membershipType}
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Quick Actions Grid */}
        <section className="mb-12">
          <h2 className="font-['Rajdhani'] text-2xl font-bold mb-6 uppercase">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={action.href}>
                  <Card className="h-full hover:scale-105 transition-all duration-300 bg-[var(--bg-secondary)] border-[var(--glass-border)] cursor-pointer">
                    <CardContent className="p-4 text-center">
                      <action.icon className="w-8 h-8 text-[var(--accent-primary)] mx-auto mb-3" />
                      <h3 className="font-['Rajdhani'] font-bold text-sm mb-1 uppercase">{action.title}</h3>
                      <p className="text-xs text-[var(--text-secondary)] font-['Noto Sans']">{action.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Dashboard Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Membership Status */}
            <Card className="bg-[var(--bg-secondary)] border-[var(--glass-border)]">
              <CardHeader>
                <CardTitle className="font-['Rajdhani'] uppercase flex items-center gap-2">
                  <User className="w-5 h-5 text-[var(--accent-primary)]" />
                  Membership Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-['Rajdhani'] font-bold mb-2 uppercase">Current Membership</h4>
                    <p className="text-[var(--text-secondary)] font-['Noto Sans'] mb-1">{memberData.membershipType}</p>
                    <p className="text-sm text-[var(--text-secondary)] font-['Noto Sans']">Expires: {memberData.expirationDate}</p>
                  </div>
                  <div>
                    <h4 className="font-['Rajdhani'] font-bold mb-2 uppercase">Volunteer Hours</h4>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex-1 bg-[var(--bg-primary)] rounded-full h-2">
                        <div 
                          className="bg-[var(--accent-primary)] h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${Math.min((memberData.volunteerHours.completed / memberData.volunteerHours.required) * 100, 100)}%` }}
                        />
                      </div>
                      <span className="text-sm font-['Noto Sans']">
                        {memberData.volunteerHours.completed}/{memberData.volunteerHours.required}
                      </span>
                    </div>
                    <p className="text-sm text-green-500 font-['Noto Sans']">
                      {memberData.volunteerHours.completed >= memberData.volunteerHours.required ? 'Requirement completed!' : `${memberData.volunteerHours.required - memberData.volunteerHours.completed} hours remaining`}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Shooting Scores */}
            <Card className="bg-[var(--bg-secondary)] border-[var(--glass-border)]">
              <CardHeader>
                <CardTitle className="font-['Rajdhani'] uppercase flex items-center gap-2">
                  <Target className="w-5 h-5 text-[var(--accent-primary)]" />
                  Recent Shooting Scores
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {memberData.recentScores.map((score, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-[var(--bg-primary)] rounded-lg">
                      <div>
                        <h4 className="font-['Rajdhani'] font-bold">{score.discipline}</h4>
                        <p className="text-sm text-[var(--text-secondary)] font-['Noto Sans']">{score.date} • {score.location}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-[var(--accent-primary)] font-['Rajdhani']">{score.score}</div>
                        <p className="text-xs text-[var(--text-secondary)] font-['Noto Sans']">
                          {score.discipline === 'Sporting Clays' ? 'out of 100' : 'out of 25'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button asChild variant="outline" className="w-full mt-4">
                  <Link href="/members/scores">View All Scores</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card className="bg-[var(--bg-secondary)] border-[var(--glass-border)]">
              <CardHeader>
                <CardTitle className="font-['Rajdhani'] uppercase flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[var(--accent-primary)]" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {memberData.upcomingEvents.map((event, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-[var(--bg-primary)] rounded-lg">
                      <div>
                        <h4 className="font-['Rajdhani'] font-bold">{event.event}</h4>
                        <p className="text-sm text-[var(--text-secondary)] font-['Noto Sans']">{event.date}</p>
                      </div>
                      <Badge variant={
                        event.status === 'Registered' ? 'default' : 
                        event.status === 'Waitlist' ? 'secondary' : 'outline'
                      }>
                        {event.status}
                      </Badge>
                    </div>
                  ))}
                </div>
                <Button asChild variant="outline" className="w-full mt-4">
                  <Link href="/events">View All Events</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Achievements */}
            <Card className="bg-[var(--bg-secondary)] border-[var(--glass-border)]">
              <CardHeader>
                <CardTitle className="font-['Rajdhani'] uppercase flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-[var(--accent-primary)]" />
                  Recent Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {memberData.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Award className="w-6 h-6 text-[var(--accent-primary)] mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-['Rajdhani'] font-bold text-sm">{achievement.title}</h4>
                        <p className="text-xs text-[var(--text-secondary)] font-['Noto Sans']">{achievement.description}</p>
                        <p className="text-xs text-[var(--text-secondary)] font-['Noto Sans'] mt-1">{achievement.earned}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Club Documents */}
            <Card className="bg-[var(--bg-secondary)] border-[var(--glass-border)]">
              <CardHeader>
                <CardTitle className="font-['Rajdhani'] uppercase flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[var(--accent-primary)]" />
                  Club Documents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Link href="#" className="flex items-center justify-between p-3 bg-[var(--bg-primary)] rounded-lg hover:bg-[var(--bg-tertiary)] transition-colors">
                    <span className="font-['Noto Sans'] text-sm">Club Bylaws (2024)</span>
                    <Download className="w-4 h-4 text-[var(--text-secondary)]" />
                  </Link>
                  <Link href="#" className="flex items-center justify-between p-3 bg-[var(--bg-primary)] rounded-lg hover:bg-[var(--bg-tertiary)] transition-colors">
                    <span className="font-['Noto Sans'] text-sm">Meeting Minutes (Nov)</span>
                    <Download className="w-4 h-4 text-[var(--text-secondary)]" />
                  </Link>
                  <Link href="#" className="flex items-center justify-between p-3 bg-[var(--bg-primary)] rounded-lg hover:bg-[var(--bg-tertiary)] transition-colors">
                    <span className="font-['Noto Sans'] text-sm">Annual Report (2024)</span>
                    <Download className="w-4 h-4 text-[var(--text-secondary)]" />
                  </Link>
                  <Link href="#" className="flex items-center justify-between p-3 bg-[var(--bg-primary)] rounded-lg hover:bg-[var(--bg-tertiary)] transition-colors">
                    <span className="font-['Noto Sans'] text-sm">Safety Guidelines</span>
                    <ExternalLink className="w-4 h-4 text-[var(--text-secondary)]" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card className="bg-[var(--bg-secondary)] border-[var(--glass-border)]">
              <CardHeader>
                <CardTitle className="font-['Rajdhani'] uppercase flex items-center gap-2">
                  <Bell className="w-5 h-5 text-[var(--accent-primary)]" />
                  Notifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/20 rounded-lg">
                    <p className="text-sm font-['Noto Sans']">Turkey Shoot registration closes tomorrow!</p>
                    <p className="text-xs text-[var(--text-secondary)] font-['Noto Sans'] mt-1">2 hours ago</p>
                  </div>
                  <div className="p-3 bg-[var(--bg-primary)] rounded-lg">
                    <p className="text-sm font-['Noto Sans']">New sporting clays course opening Jan 1st</p>
                    <p className="text-xs text-[var(--text-secondary)] font-['Noto Sans'] mt-1">1 day ago</p>
                  </div>
                  <div className="p-3 bg-[var(--bg-primary)] rounded-lg">
                    <p className="text-sm font-['Noto Sans']">Membership renewal reminder: expires March 15</p>
                    <p className="text-xs text-[var(--text-secondary)] font-['Noto Sans'] mt-1">3 days ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}