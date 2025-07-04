'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Wrench, 
  Target, 
  Calendar, 
  Coffee, 
  Medal,
  Clock,
  DollarSign,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const volunteerRoles = [
  {
    id: 'range-officer',
    title: 'Range Safety Officer',
    commitment: '4 hours/month',
    description: 'Ensure safe shooting practices and assist shooters during events. Requires certification training.',
    requirements: ['RSO certification (provided)', 'Confident communication', 'Weekend availability'],
    benefits: ['Free range time', 'Leadership development', 'Community respect'],
    urgency: 'high',
    spots: 3
  },
  {
    id: 'trap-puller',
    title: 'Trap Machine Operator',
    commitment: '3 hours/event',
    description: 'Operate trap machines during competitions and practice sessions. Training provided.',
    requirements: ['Basic mechanical aptitude', 'Reliable attendance', 'Early morning availability'],
    benefits: ['Behind-the-scenes access', 'Technical skills', 'Free competition entry'],
    urgency: 'high',
    spots: 8
  },
  {
    id: 'registration',
    title: 'Event Registration',
    commitment: '2-3 hours/event',
    description: 'Check in shooters, collect fees, and manage scorecards for tournaments.',
    requirements: ['Customer service skills', 'Basic computer knowledge', 'Attention to detail'],
    benefits: ['Meet all members', 'Event coordination experience', 'Flexible scheduling'],
    urgency: 'medium',
    spots: 6
  },
  {
    id: 'grounds',
    title: 'Grounds Maintenance',
    commitment: '2-4 hours/week',
    description: 'Maintain shooting areas, repair targets, and keep facilities clean and professional.',
    requirements: ['Physical ability', 'Basic tools knowledge', 'Pride in appearance'],
    benefits: ['Outdoor work', 'Skill development', 'Immediate visual impact'],
    urgency: 'ongoing',
    spots: 12
  },
  {
    id: 'youth-mentor',
    title: 'Youth Program Assistant',
    commitment: '2 hours/week',
    description: 'Help coach young shooters, set up equipment, and support our next generation.',
    requirements: ['Patience with kids', 'Safety-focused', 'Background check'],
    benefits: ['Shape future shooters', 'Coaching skills', 'Family connections'],
    urgency: 'high',
    spots: 4
  },
  {
    id: 'social-events',
    title: 'Social Event Coordinator',
    commitment: '5 hours/event',
    description: 'Plan and execute member social events, dinners, and family activities.',
    requirements: ['Event planning experience', 'Social skills', 'Creative thinking'],
    benefits: ['Event management skills', 'Community building', 'Creative outlet'],
    urgency: 'medium',
    spots: 2
  }
];

const completedProjects = [
  { project: 'New clubhouse deck construction', volunteers: 15, hours: 120 },
  { project: 'Trap field lighting upgrade', volunteers: 8, hours: 64 },
  { project: 'Youth program equipment setup', volunteers: 12, hours: 36 },
  { project: 'Annual banquet organization', volunteers: 25, hours: 200 }
];

export default function VolunteerOpportunities() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-primary)]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="font-['Rajdhani'] text-5xl md:text-6xl font-bold text-[var(--text-primary)] mb-6 uppercase">
              Power the <span className="text-[var(--accent-primary)]">Community</span>
            </h1>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto font-['Noto Sans'] leading-relaxed">
              Our club runs on member volunteers who keep costs low, facilities pristine, and community strong. 
              Join 200+ volunteers making shotgun sports accessible to everyone.
            </p>
          </motion.div>
          
          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center p-6 bg-[var(--bg-primary)] border-[var(--glass-border)]">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-[var(--accent-primary)] font-['Rajdhani']">200+</div>
                <p className="text-[var(--text-secondary)] font-['Noto Sans']">Active Volunteers</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-[var(--bg-primary)] border-[var(--glass-border)]">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-[var(--accent-primary)] font-['Rajdhani']">2,400</div>
                <p className="text-[var(--text-secondary)] font-['Noto Sans']">Hours Contributed</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-[var(--bg-primary)] border-[var(--glass-border)]">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-[var(--accent-primary)] font-['Rajdhani']">$48,000</div>
                <p className="text-[var(--text-secondary)] font-['Noto Sans']">Value Generated</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-[var(--bg-primary)] border-[var(--glass-border)]">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-[var(--accent-primary)] font-['Rajdhani']">$200</div>
                <p className="text-[var(--text-secondary)] font-['Noto Sans']">Work Fee Alternative</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Volunteer Requirements */}
      <section className="py-16 bg-[var(--bg-primary)]">
        <div className="max-w-6xl mx-auto px-6">
          <Card className="p-8 bg-gradient-to-r from-[var(--accent-primary)]/10 to-[var(--accent-secondary)]/10 border-[var(--accent-primary)]/20">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="font-['Rajdhani'] text-2xl font-bold mb-4">Member Volunteer Requirement</h3>
                  <p className="text-[var(--text-secondary)] font-['Noto Sans'] mb-4">
                    Every member contributes to our community in one of two ways:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span><strong>10 volunteer hours per year</strong> (just 50 minutes per month!)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <DollarSign className="w-5 h-5 text-[var(--accent-primary)]" />
                      <span><strong>$200 work fee</strong> if you prefer not to volunteer</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-6xl font-bold text-[var(--accent-primary)] font-['Rajdhani']">10</div>
                  <p className="text-xl text-[var(--text-primary)] font-['Rajdhani'] uppercase">Hours Per Year</p>
                  <p className="text-[var(--text-secondary)] font-['Noto Sans']">That's less than one afternoon!</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Available Opportunities */}
      <section className="py-20 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-['Rajdhani'] text-4xl font-bold text-[var(--text-primary)] mb-4 uppercase">
              Find Your <span className="text-[var(--accent-primary)]">Perfect Role</span>
            </h2>
            <p className="text-lg text-[var(--text-secondary)] font-['Noto Sans']">
              From technical roles to social coordination - there's something for every skill set and schedule.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {volunteerRoles.map((role, index) => (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:scale-105 transition-all duration-300 bg-[var(--bg-primary)] border-[var(--glass-border)]">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="font-['Rajdhani'] text-xl font-bold mb-2 uppercase">{role.title}</h3>
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="w-4 h-4 text-[var(--accent-primary)]" />
                          <span className="text-sm text-[var(--text-secondary)] font-['Noto Sans']">{role.commitment}</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <Badge variant={role.urgency === 'high' ? 'destructive' : 'secondary'} className="text-xs">
                          {role.urgency === 'high' ? 'Urgent' : role.urgency === 'medium' ? 'Needed' : 'Ongoing'}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {role.spots} spots
                        </Badge>
                      </div>
                    </div>
                    
                    <p className="text-[var(--text-secondary)] font-['Noto Sans'] mb-4">{role.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-['Rajdhani'] font-bold text-sm mb-2 uppercase">Requirements:</h4>
                      <ul className="text-sm text-[var(--text-secondary)] space-y-1">
                        {role.requirements.map((req, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-[var(--accent-primary)] rounded-full"></div>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-['Rajdhani'] font-bold text-sm mb-2 uppercase">Benefits:</h4>
                      <ul className="text-sm text-[var(--text-secondary)] space-y-1">
                        {role.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle className="w-3 h-3 text-green-500" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button className="w-full bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] text-white">
                      Apply for Role <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-16 bg-[var(--bg-primary)]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-['Rajdhani'] text-3xl font-bold text-center mb-12 uppercase">
            Recent <span className="text-[var(--accent-primary)]">Volunteer Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {completedProjects.map((project, index) => (
              <Card key={index} className="p-6 bg-[var(--bg-secondary)] border-[var(--glass-border)]">
                <CardContent className="p-0">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-['Rajdhani'] font-bold">{project.project}</h3>
                    <Medal className="w-6 h-6 text-[var(--accent-primary)]" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-[var(--accent-primary)] font-['Rajdhani']">{project.volunteers}</div>
                      <p className="text-sm text-[var(--text-secondary)] font-['Noto Sans']">Volunteers</p>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[var(--accent-primary)] font-['Rajdhani']">{project.hours}</div>
                      <p className="text-sm text-[var(--text-secondary)] font-['Noto Sans']">Total Hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-['Rajdhani'] text-4xl font-bold text-white mb-6 uppercase">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-white/90 mb-8 font-['Noto Sans']">
            Join our volunteer community and help build the future of shotgun sports in Idaho. 
            Your time and skills make our club the premier destination for shooting sports.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[var(--accent-primary)] hover:bg-gray-100">
              <Link href="/contact">Contact Volunteer Coordinator</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[var(--accent-primary)]">
              <Link href="/members/portal">Log Volunteer Hours</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}