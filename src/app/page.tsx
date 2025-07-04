'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Camera, Trophy, Users, Clock, MapPin, Calendar } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      {/* Hero Section - Clean and Modern */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with dynamic overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.webp"
            fill
            className="object-cover scale-105 transition-transform duration-[20s] ease-out"
            priority
            alt="Boise Gun Club"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-[var(--accent-primary)]/10" />
        </div>
        
        {/* Animated grid overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 text-white font-['Rajdhani'] uppercase tracking-tighter leading-[0.85]">
              Idaho's<br />
              <span className="text-[var(--accent-primary)] drop-shadow-2xl">Premier</span><br />
              Gun Club
            </h1>
            <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto font-['Noto Sans'] font-light">
              Experience world-class trap, skeet, and sporting clays at the Treasure Valley's most welcoming shooting sports community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] text-white font-['Rajdhani'] tracking-wide px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[var(--accent-primary)]/50">
                <Link href="/membership">BECOME A MEMBER</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-black font-['Rajdhani'] tracking-wide px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                <Link href="/club-info">LEARN MORE</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Photo Submission Incentive - Replace Gallery */}
      <section className="py-24 bg-[var(--bg-secondary)] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-[var(--accent-primary)]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-[var(--accent-secondary)]/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-primary)] font-['Rajdhani'] uppercase tracking-tight">
              Share Your Shot,<br />
              <span className="text-[var(--accent-primary)]">Become Our Hero!</span>
            </h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto font-['Noto Sans'] font-light">
              Submit your best shooting photos and we'll feature them as the hero image on our homepage! 
              Every month, we showcase a different member's photo as the first thing visitors see.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center group hover:scale-105 transition-all duration-300 bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)] border-0 shadow-xl hover:shadow-2xl">
              <CardContent className="p-8">
                <div className="relative">
                  <Camera className="w-12 h-12 text-[var(--accent-primary)] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-[var(--accent-primary)]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-['Rajdhani'] uppercase tracking-wide">Hero Homepage Feature</h3>
                <p className="text-[var(--text-secondary)] font-['Noto Sans'] font-light leading-relaxed">Monthly rotation of member photos as our main hero image</p>
              </CardContent>
            </Card>
            <Card className="text-center group hover:scale-105 transition-all duration-300 bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)] border-0 shadow-xl hover:shadow-2xl">
              <CardContent className="p-8">
                <div className="relative">
                  <Trophy className="w-12 h-12 text-[var(--accent-primary)] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-[var(--accent-primary)]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-['Rajdhani'] uppercase">Photo Contest Prizes</h3>
                <p className="text-[var(--text-secondary)] font-['Noto Sans']">Quarterly competitions with range time and gear prizes</p>
              </CardContent>
            </Card>
            <Card className="text-center group hover:scale-105 transition-all duration-300 bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)] border-0 shadow-xl hover:shadow-2xl">
              <CardContent className="p-8">
                <div className="relative">
                  <Users className="w-12 h-12 text-[var(--accent-primary)] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-[var(--accent-primary)]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-['Rajdhani'] uppercase">Member Spotlight</h3>
                <p className="text-[var(--text-secondary)] font-['Noto Sans']">Photo + story featured in newsletter and social media</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <Button asChild size="lg" className="bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] text-white px-8">
              <Link href="/photo-submission">Submit Your Photos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Membership CTA - Clean and Simple */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Join the Club
              </h2>
              <p className="text-xl text-[var(--text-secondary)] mb-8">
                $75 annual membership gives you access to reduced shooting fees, priority registration, 
                and a welcoming community of fellow shooting sports enthusiasts.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Badge className="bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]">$6/round</Badge>
                  <span>Member rate vs $8 daily rate</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className="bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]">Priority</Badge>
                  <span>Competition registration</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className="bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]">Community</Badge>
                  <span>Access to member events and forums</span>
                </div>
              </div>
              <Button asChild size="lg" className="bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] text-white">
                <Link href="/membership">Join Today</Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/images/membership.webp"
                width={600}
                height={400}
                className="rounded-xl"
                alt="Club Membership"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-primary)] font-['Rajdhani'] uppercase tracking-tight">
              Upcoming <span className="text-[var(--accent-primary)]">Events</span>
            </h2>
            <p className="text-xl text-[var(--text-secondary)] font-['Noto Sans'] font-light">
              From competitive shoots to casual fun days, there's always action at the club.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:scale-105 transition-all duration-500 bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)] border-0 shadow-xl hover:shadow-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="p-6 relative z-10">
                <Badge className="mb-3 bg-[var(--brand-red-action)]/10 text-[var(--brand-red-action)] border border-[var(--brand-red-action)]/20 group-hover:bg-[var(--brand-red-action)]/20 transition-colors duration-300">Competition</Badge>
                <h3 className="text-xl font-bold mb-3 font-['Rajdhani'] uppercase">Winter Turkey Shoot Classic</h3>
                <p className="text-[var(--text-secondary)] mb-4 font-['Noto Sans']">Traditional turkey shoot competition. Best score takes home the bird.</p>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)] mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>December 15th</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <Users className="w-4 h-4" />
                  <span>85 attending</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <Badge className="mb-3 bg-[var(--accent-tertiary)]/10 text-[var(--accent-tertiary)] border border-[var(--accent-tertiary)]/20 group-hover:bg-[var(--accent-tertiary)]/20 transition-colors duration-300">Fun Shoot</Badge>
                <h3 className="text-xl font-bold mb-3 font-['Rajdhani'] uppercase">Members-Only Poker Shoot</h3>
                <p className="text-[var(--text-secondary)] mb-4 font-['Noto Sans']">Five stands, five cards. Best poker hand wins the pot.</p>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)] mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>December 22nd</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <Users className="w-4 h-4" />
                  <span>60 attending</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <Badge className="mb-3 bg-[var(--brand-blue)]/10 text-[var(--brand-blue)] border border-[var(--brand-blue)]/20 group-hover:bg-[var(--brand-blue)]/20 transition-colors duration-300">Training</Badge>
                <h3 className="text-xl font-bold mb-3 font-['Rajdhani'] uppercase">Introduction to Trap Clinic</h3>
                <p className="text-[var(--text-secondary)] mb-4 font-['Noto Sans']">New to trap shooting? Learn the basics from certified instructors.</p>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)] mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>January 12th</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <Users className="w-4 h-4" />
                  <span>25 attending</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/events">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-primary)] font-['Rajdhani'] uppercase tracking-tight">
              Shooting <span className="text-[var(--accent-primary)]">Rates</span>
            </h2>
            <p className="text-xl text-[var(--text-secondary)] font-['Noto Sans'] font-light">
              Fair pricing for world-class facilities and instruction.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card className="relative">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 font-['Rajdhani'] uppercase">Daily Rate</h3>
                <div className="text-5xl font-bold text-[var(--accent-primary)] mb-4">$8</div>
                <p className="text-[var(--text-secondary)] mb-6">per round</p>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[var(--accent-primary)] rounded-full"></div>
                    <span>Access to all ranges</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[var(--accent-primary)] rounded-full"></div>
                    <span>Equipment rental available</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[var(--accent-primary)] rounded-full"></div>
                    <span>Guest privileges</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="relative border-2 border-[var(--accent-primary)]">
              <CardContent className="p-8 text-center">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[var(--accent-primary)] text-white">Popular</Badge>
                <h3 className="text-2xl font-bold mb-4 font-['Rajdhani'] uppercase">Member Rate</h3>
                <div className="text-5xl font-bold text-[var(--accent-primary)] mb-4">$6</div>
                <p className="text-[var(--text-secondary)] mb-6">per round + $75 annual fee</p>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[var(--accent-primary)] rounded-full"></div>
                    <span>$2 savings per round</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[var(--accent-primary)] rounded-full"></div>
                    <span>Priority competition registration</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[var(--accent-primary)] rounded-full"></div>
                    <span>Member events access</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[var(--accent-primary)] rounded-full"></div>
                    <span>Clubhouse privileges</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Member Testimonial */}
      <section className="py-24 bg-[var(--bg-secondary)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-[var(--text-primary)] font-['Rajdhani'] uppercase tracking-tight">
            Member <span className="text-[var(--accent-primary)]">Spotlight</span>
          </h2>
          
          <Card>
            <CardContent className="p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <Image
                  src="/images/membership.webp"
                  width={150}
                  height={150}
                  className="rounded-full"
                  alt="Jane Doe"
                />
                <div className="text-left">
                  <blockquote className="text-2xl font-light italic text-[var(--text-primary)] mb-6 font-['Noto Sans']">
                    "The Boise Gun Club is my second family. I have grown so much as a shooter and a person here. The welcoming community and excellent facilities make this the best place to enjoy shotgun sports."
                  </blockquote>
                  <div>
                    <p className="font-bold text-lg font-['Rajdhani'] uppercase">Jane Doe</p>
                    <p className="text-[var(--text-secondary)] font-['Noto Sans']">Member since 2015</p>
                    <div className="flex gap-2 mt-2">
                      <Badge>State Champion 2022</Badge>
                      <Badge>100 Straight Patch</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Club Rules Preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-['Rajdhani'] uppercase tracking-tight">
                Safety <span className="text-[var(--accent-primary)]">First</span>
              </h2>
              <p className="text-xl text-[var(--text-secondary)] mb-8 font-['Noto Sans'] font-light">
                Our comprehensive safety rules ensure everyone has a safe, enjoyable experience. We maintain the highest standards for shotgun sports.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--accent-primary)] flex items-center justify-center text-white text-sm font-bold mt-1">1</div>
                  <div>
                    <h4 className="font-bold font-['Rajdhani'] uppercase">Eye & Ear Protection Required</h4>
                    <p className="text-[var(--text-secondary)] font-['Noto Sans']">Safety glasses and hearing protection mandatory at all times</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--accent-primary)] flex items-center justify-center text-white text-sm font-bold mt-1">2</div>
                  <div>
                    <h4 className="font-bold font-['Rajdhani'] uppercase">Shotgun Ammunition Only</h4>
                    <p className="text-[var(--text-secondary)] font-['Noto Sans']">This is a shotgun-only facility - no rifle or pistol ammunition</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--accent-primary)] flex items-center justify-center text-white text-sm font-bold mt-1">3</div>
                  <div>
                    <h4 className="font-bold font-['Rajdhani'] uppercase">Range Officer Authority</h4>
                    <p className="text-[var(--text-secondary)] font-['Noto Sans']">Follow all range officer commands immediately</p>
                  </div>
                </div>
              </div>
              
              <Button asChild variant="outline" size="lg">
                <Link href="/rules">View All Safety Rules</Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/images/training.webp"
                width={600}
                height={400}
                className="rounded-xl"
                alt="Safety Training"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Map */}
      <section className="py-24 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-primary)] font-['Rajdhani'] uppercase tracking-tight">
              Get In <span className="text-[var(--accent-primary)]">Touch</span>
            </h2>
            <p className="text-xl text-[var(--text-secondary)] font-['Noto Sans'] font-light">
              Visit us at Idaho's premier shotgun sports facility.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <Clock className="w-8 h-8 text-[var(--accent-primary)] mb-4" />
                  <h3 className="text-xl font-bold mb-3 font-['Rajdhani'] uppercase">Range Hours</h3>
                  <div className="space-y-2 text-[var(--text-secondary)] font-['Noto Sans']">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday - Sunday: 8:00 AM - 8:00 PM</p>
                    <p>Closed major holidays</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <MapPin className="w-8 h-8 text-[var(--accent-primary)] mb-4" />
                  <h3 className="text-xl font-bold mb-3 font-['Rajdhani'] uppercase">Location</h3>
                  <div className="space-y-2 text-[var(--text-secondary)] font-['Noto Sans']">
                    <p>123 Gun Club Road</p>
                    <p>Boise, ID 83702</p>
                    <p>20 minutes from downtown Boise</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 font-['Rajdhani'] uppercase">Contact Info</h3>
                  <div className="space-y-2 text-[var(--text-secondary)] font-['Noto Sans']">
                    <p>Phone: (208) 555-0123</p>
                    <p>Email: info@boisegunclub.com</p>
                  </div>
                  <Button asChild className="mt-4 bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] text-white">
                    <Link href="/club-info">Get Directions</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="h-96 bg-gray-200 rounded-xl flex items-center justify-center">
              <p className="text-gray-500 font-['Noto Sans']">Interactive Map Coming Soon</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
