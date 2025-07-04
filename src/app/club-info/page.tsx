'use client'

import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
  Trees, 
  Home,
  Calendar,
  Users,
  Shield
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' }
}

const facilityDetails = [
  {
    name: "Trap Fields",
    count: "10 Professional Fields",
    description: "ATA-registered trap fields equipped with Winchester Super-X machines. Lit for twilight and evening league play.",
    Icon: Target,
    features: ["ATA Regulation", "Electronic Scoring", "Evening Lighting"]
  },
  {
    name: "Skeet Fields", 
    count: "5 Championship Fields",
    description: "Championship skeet fields with regulation high and low houses. Perfect for NSSA-certified competitions and weekly leagues.",
    Icon: Trophy,
    features: ["NSSA Certified", "Regulation Houses", "Competition Ready"]
  },
  {
    name: "Sporting Clays",
    count: "15-Station Course", 
    description: "A sprawling course weaving through natural terrain, offering challenging and varied target presentations for all skill levels.",
    Icon: Trees,
    features: ["NSCA Compliant", "Natural Terrain", "All Skill Levels"]
  },
  {
    name: "Clubhouse & Pro Shop",
    count: "Full Service Center",
    description: "Our modern clubhouse features a full-service pro shop, comfortable lounge area, and registration services for all events.",
    Icon: Home,
    features: ["Pro Shop", "Member Lounge", "Event Registration"]
  }
]

const clubStats = [
  { label: "Founded", value: "1898", icon: Calendar },
  { label: "Members", value: "1,200+", icon: Users },
  { label: "Acres", value: "320", icon: Trees },
  { label: "Safety Record", value: "Exemplary", icon: Shield }
]

export default function ClubInfoPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.webp"
            fill
            className="object-cover scale-105 transition-transform duration-[20s] ease-out"
            priority
            alt="Boise Gun Club Facilities"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-[var(--accent-primary)]/10" />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <motion.div {...fadeInUp}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white font-['Rajdhani'] uppercase tracking-tight leading-none">
              Idaho's Premier<br />
              <span className="text-[var(--accent-primary)]">Shotgun Sports</span><br />
              Destination
            </h1>
            <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-8 max-w-3xl mx-auto font-['Noto Sans'] font-light leading-relaxed">
              Experience world-class facilities, expert instruction, and a welcoming community at the Treasure Valley's most established gun club since 1898.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] text-white font-['Rajdhani'] tracking-wide px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300">
                <Link href="/membership">JOIN THE CLUB</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-black font-['Rajdhani'] tracking-wide px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                <Link href="#facilities">EXPLORE FACILITIES</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Club Stats */}
      <section className="py-16 bg-[var(--bg-secondary)] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clubStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <stat.icon className="w-8 h-8 text-[var(--accent-primary)] mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] font-['Rajdhani'] mb-1">
                  {stat.value}
                </div>
                <div className="text-[var(--text-secondary)] font-['Noto Sans'] font-light">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image 
                src="/images/membership.webp" 
                alt="Boise Gun Club History" 
                width={600}
                height={400}
                className="rounded-xl shadow-2xl object-cover w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-['Rajdhani'] uppercase tracking-tight text-[var(--text-primary)]">
                Our Legacy &<br />
                <span className="text-[var(--accent-primary)]">Mission</span>
              </h2>
              <div className="space-y-6 text-lg text-[var(--text-secondary)] font-['Noto Sans'] font-light leading-relaxed">
                <p>
                  Founded in 1898 by dedicated sporting enthusiasts, the Boise Gun Club has been Idaho's premier destination for shotgun sports for over 125 years. We've built our reputation on providing a safe, welcoming environment for shooters of all skill levels.
                </p>
                <p>
                  Our mission is simple: champion the shooting sports through comprehensive education, unwavering commitment to safety, and fostering a vibrant community that celebrates both tradition and progress.
                </p>
                <p>
                  From beginners taking their first shot to seasoned competitors chasing perfect scores, every member finds their place in our supportive community of passionate shooters.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild className="bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] text-white">
                  <Link href="/museum">Explore Our History</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-24 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-primary)] font-['Rajdhani'] uppercase tracking-tight">
              World-Class <span className="text-[var(--accent-primary)]">Facilities</span>
            </h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto font-['Noto Sans'] font-light">
              Explore our premier ranges and amenities designed for an unparalleled shooting experience across 320 acres of pristine Idaho landscape.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {facilityDetails.map((facility, index) => (
              <motion.div
                key={facility.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)] border-0">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="relative">
                        <facility.Icon className="w-12 h-12 text-[var(--accent-primary)]" />
                        <div className="absolute inset-0 bg-[var(--accent-primary)]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2 font-['Rajdhani'] uppercase text-[var(--text-primary)]">
                          {facility.name}
                        </h3>
                        <Badge className="bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/20">
                          {facility.count}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-[var(--text-secondary)] font-['Noto Sans'] font-light leading-relaxed mb-6">
                      {facility.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {facility.features.map((feature) => (
                        <Badge key={feature} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Location */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-primary)] font-['Rajdhani'] uppercase tracking-tight">
              Visit <span className="text-[var(--accent-primary)]">Our Club</span>
            </h2>
            <p className="text-xl text-[var(--text-secondary)] font-['Noto Sans'] font-light">
              Located just 20 minutes from downtown Boise in the beautiful Idaho foothills.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-[var(--accent-primary)] mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-2 font-['Rajdhani'] uppercase">Location</h3>
                      <p className="text-[var(--text-secondary)] font-['Noto Sans'] font-light">
                        123 Gun Club Road<br />
                        Boise, ID 83702<br />
                        20 minutes from downtown Boise
                      </p>
                      <Button asChild className="mt-4 bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] text-white">
                        <Link href="https://maps.google.com" target="_blank">Get Directions</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-[var(--accent-primary)] mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-2 font-['Rajdhani'] uppercase">Range Hours</h3>
                      <div className="space-y-1 text-[var(--text-secondary)] font-['Noto Sans'] font-light">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday - Sunday: 8:00 AM - 8:00 PM</p>
                        <p>Closed major holidays</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Phone className="w-5 h-5 text-[var(--accent-primary)]" />
                      <div>
                        <p className="font-bold font-['Rajdhani']">Phone</p>
                        <Link href="tel:+1-208-555-0123" className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
                          (208) 555-0123
                        </Link>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Mail className="w-5 h-5 text-[var(--accent-primary)]" />
                      <div>
                        <p className="font-bold font-['Rajdhani']">Email</p>
                        <Link href="mailto:info@boisegunclub.com" className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
                          info@boisegunclub.com
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Interactive Map Placeholder */}
            <div className="h-96 bg-[var(--bg-secondary)] rounded-xl flex items-center justify-center border-2 border-dashed border-[var(--accent-primary)]/20">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-[var(--accent-primary)] mx-auto mb-4" />
                <p className="text-[var(--text-secondary)] font-['Noto Sans'] font-light">
                  Interactive Map Coming Soon
                </p>
                <p className="text-sm text-[var(--text-secondary)]/70 font-['Noto Sans'] font-light mt-2">
                  Full directions and satellite view
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-['Rajdhani'] uppercase">
            Ready to Experience<br />Excellence?
          </h2>
          <p className="text-xl text-white/90 mb-8 font-['Noto Sans'] font-light max-w-2xl mx-auto">
            Join Idaho's premier shotgun sports community and discover why we've been the Treasure Valley's choice for over 125 years.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[var(--accent-primary)] hover:bg-gray-100 font-['Rajdhani'] tracking-wide px-8 py-6 text-lg">
              <Link href="/membership">BECOME A MEMBER</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-[var(--accent-primary)] font-['Rajdhani'] tracking-wide px-8 py-6 text-lg">
              <Link href="/schedule/weekly">VIEW SCHEDULE</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}