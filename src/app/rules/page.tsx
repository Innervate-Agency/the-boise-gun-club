'use client'

import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Shield,
  Eye,
  Ear,
  AlertTriangle,
  Clock,
  Users,
  Target,
  Phone,
  MapPin,
  CheckCircle,
  XCircle,
  Zap,
  Car,
  Heart
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' }
}

const coreRules = [
  {
    id: 1,
    title: "Eye & Ear Protection Required",
    description: "Safety glasses and hearing protection are mandatory at all times on club grounds",
    icon: Eye,
    critical: true
  },
  {
    id: 2,
    title: "Shotgun Ammunition Only", 
    description: "This is a shotgun-only facility. No rifle or pistol ammunition permitted under any circumstances",
    icon: Target,
    critical: true
  },
  {
    id: 3,
    title: "Range Officer Authority",
    description: "Follow all range officer commands immediately and without question",
    icon: Shield,
    critical: true
  },
  {
    id: 4,
    title: "Muzzle Control",
    description: "Always keep your firearm pointed in a safe direction - downrange or at the ground",
    icon: AlertTriangle,
    critical: true
  }
]

const safetyRules = [
  {
    category: "Firearm Safety",
    icon: Shield,
    rules: [
      "Always treat every firearm as if it were loaded",
      "Never point a firearm at anything you don't intend to destroy",
      "Keep your finger off the trigger until ready to shoot",
      "Be sure of your target and what's beyond it",
      "Action must remain open and unloaded until on the shooting station",
      "No handling of firearms behind the shooting line",
      "Only load when it's your turn to shoot",
      "Firearms must be unloaded when moving between stations"
    ]
  },
  {
    category: "Ammunition & Equipment",
    icon: Target,
    rules: [
      "Maximum shot size: 7.5 for lead, 6 for steel",
      "No slugs or buckshot permitted",
      "No reloads containing steel shot larger than #6",
      "Damaged or questionable ammunition must not be used",
      "Eye protection must be ANSI Z87.1 rated or better",
      "Hearing protection required - minimum 25 NRR rating",
      "Proper footwear required - no open-toed shoes"
    ]
  },
  {
    category: "Range Operations",
    icon: Clock,
    rules: [
      "Follow posted range hours strictly",
      "Sign in/out required for all shooters",
      "Maximum 5 shooters per squad",
      "No shooting during lightning or severe weather",
      "Range commands must be obeyed instantly",
      "No alcoholic beverages on club property",
      "No shooting under influence of medication that impairs judgment",
      "Cell phones on silent during shooting"
    ]
  },
  {
    category: "Guest & Visitor Policies",
    icon: Users,
    rules: [
      "Members are responsible for their guests at all times",
      "Maximum 2 guests per member per visit",
      "Guests must be accompanied by member",
      "All guests must complete safety orientation",
      "Guest fees must be paid before shooting",
      "Members liable for guest violations"
    ]
  },
  {
    category: "Emergency Procedures",
    icon: Heart,
    rules: [
      "Know locations of AED devices (clubhouse & field house)",
      "Emergency phone numbers posted at all ranges",
      "First aid kits available at each field",
      "Report all accidents immediately to range officer",
      "Call 911 for serious injuries",
      "Know evacuation routes and assembly points"
    ]
  }
]

const emergencyInfo = [
  {
    title: "Emergency Services",
    phone: "911",
    description: "Fire, Police, Medical Emergency"
  },
  {
    title: "Club Emergency Line",
    phone: "(208) 555-0911",
    description: "After-hours club emergencies"
  },
  {
    title: "Poison Control",
    phone: "1-800-222-1222",
    description: "24/7 poison emergency"
  }
]

const aedLocations = [
  {
    location: "Main Clubhouse",
    description: "Located near the main entrance, mounted on wall next to first aid station"
  },
  {
    location: "Field House",
    description: "Sporting clays staging area, mounted inside equipment room"
  },
  {
    location: "Trap Fields",
    description: "Central location between fields 5 & 6, weather-protected cabinet"
  }
]

export default function RulesPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/training.webp"
            fill
            className="object-cover scale-105 transition-transform duration-[20s] ease-out"
            priority
            alt="Safety Training at Boise Gun Club"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-[var(--accent-primary)]/10" />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <motion.div {...fadeInUp}>
            <div className="flex items-center justify-center mb-6">
              <Shield className="w-16 h-16 text-[var(--accent-primary)] mr-4" />
              <h1 className="text-5xl md:text-7xl font-bold text-white font-['Rajdhani'] uppercase tracking-tight leading-none">
                Safety <span className="text-[var(--accent-primary)]">First</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-8 max-w-3xl mx-auto font-['Noto Sans'] font-light leading-relaxed">
              Our comprehensive safety rules ensure everyone enjoys a safe, positive experience. 
              These rules are strictly enforced for the protection of all members and guests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] text-white font-['Rajdhani'] tracking-wide px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300">
                <Link href="#rules">READ ALL RULES</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-black font-['Rajdhani'] tracking-wide px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                <Link href="#emergency">EMERGENCY INFO</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Safety Rules */}
      <section className="py-24 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-primary)] font-['Rajdhani'] uppercase tracking-tight">
              Core <span className="text-[var(--accent-primary)]">Safety Rules</span>
            </h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto font-['Noto Sans'] font-light">
              These fundamental rules are absolutely mandatory and strictly enforced. 
              Violation of any core rule may result in immediate removal from the facility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {coreRules.map((rule, index) => (
              <motion.div
                key={rule.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-2 border-[var(--accent-primary)] bg-gradient-to-br from-[var(--accent-primary)]/5 to-transparent hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="relative">
                        <rule.icon className="w-12 h-12 text-[var(--accent-primary)]" />
                        <div className="absolute inset-0 bg-[var(--accent-primary)]/20 rounded-full blur-xl opacity-50" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge className="bg-[var(--accent-primary)] text-white">
                            Rule #{rule.id}
                          </Badge>
                          <Badge variant="outline" className="border-red-500 text-red-500">
                            CRITICAL
                          </Badge>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 font-['Rajdhani'] uppercase text-[var(--text-primary)]">
                          {rule.title}
                        </h3>
                        <p className="text-[var(--text-secondary)] font-['Noto Sans'] font-light leading-relaxed">
                          {rule.description}
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

      {/* Detailed Safety Rules */}
      <section id="rules" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-primary)] font-['Rajdhani'] uppercase tracking-tight">
              Complete Safety <span className="text-[var(--accent-primary)]">Guidelines</span>
            </h2>
            <p className="text-xl text-[var(--text-secondary)] font-['Noto Sans'] font-light">
              Comprehensive rules covering all aspects of safe operation at our facility.
            </p>
          </div>

          <div className="space-y-12">
            {safetyRules.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-[var(--accent-primary)]/10 to-[var(--accent-secondary)]/10 border-b border-[var(--accent-primary)]/20">
                    <div className="flex items-center gap-4">
                      <category.icon className="w-8 h-8 text-[var(--accent-primary)]" />
                      <h3 className="text-2xl font-bold font-['Rajdhani'] uppercase text-[var(--text-primary)]">
                        {category.category}
                      </h3>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      {category.rules.map((rule, ruleIndex) => (
                        <div key={ruleIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-[var(--accent-primary)] mt-0.5 flex-shrink-0" />
                          <span className="text-[var(--text-secondary)] font-['Noto Sans'] font-light leading-relaxed">
                            {rule}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Information */}
      <section id="emergency" className="py-24 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-primary)] font-['Rajdhani'] uppercase tracking-tight">
              Emergency <span className="text-[var(--accent-primary)]">Information</span>
            </h2>
            <p className="text-xl text-[var(--text-secondary)] font-['Noto Sans'] font-light">
              Critical information for emergency situations and medical emergencies.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Emergency Contacts */}
            <div>
              <h3 className="text-2xl font-bold mb-8 font-['Rajdhani'] uppercase text-[var(--text-primary)] flex items-center gap-3">
                <Phone className="w-6 h-6 text-[var(--accent-primary)]" />
                Emergency Contacts
              </h3>
              <div className="space-y-4">
                {emergencyInfo.map((contact, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-lg font-bold font-['Rajdhani'] uppercase text-[var(--text-primary)]">
                            {contact.title}
                          </h4>
                          <p className="text-[var(--text-secondary)] font-['Noto Sans'] font-light">
                            {contact.description}
                          </p>
                        </div>
                        <div className="text-right">
                          <Link 
                            href={`tel:${contact.phone.replace(/[^\d]/g, '')}`}
                            className="text-2xl font-bold text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] transition-colors font-['Rajdhani']"
                          >
                            {contact.phone}
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* AED Locations */}
            <div>
              <h3 className="text-2xl font-bold mb-8 font-['Rajdhani'] uppercase text-[var(--text-primary)] flex items-center gap-3">
                <Heart className="w-6 h-6 text-[var(--accent-primary)]" />
                AED Device Locations
              </h3>
              <div className="space-y-4">
                {aedLocations.map((location, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-bold font-['Rajdhani'] uppercase text-[var(--text-primary)] mb-2">
                        {location.location}
                      </h4>
                      <p className="text-[var(--text-secondary)] font-['Noto Sans'] font-light">
                        {location.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-[var(--accent-primary)]/10 to-transparent rounded-lg border border-[var(--accent-primary)]/20">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-[var(--accent-primary)] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold font-['Rajdhani'] uppercase text-[var(--text-primary)] mb-2">
                      Important Note
                    </h4>
                    <p className="text-[var(--text-secondary)] font-['Noto Sans'] font-light">
                      All range officers are trained in CPR and AED operation. 
                      In case of medical emergency, immediately notify the nearest range officer 
                      or call 911 if no officer is available.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rule Violations */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-primary)] font-['Rajdhani'] uppercase tracking-tight">
              Rule <span className="text-[var(--accent-primary)]">Enforcement</span>
            </h2>
            <p className="text-xl text-[var(--text-secondary)] font-['Noto Sans'] font-light">
              We take safety seriously. Here's what happens when rules are violated.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-2 border-yellow-500/20 bg-gradient-to-br from-yellow-500/5 to-transparent">
              <CardContent className="p-8">
                <AlertTriangle className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 font-['Rajdhani'] uppercase text-[var(--text-primary)]">
                  First Warning
                </h3>
                <p className="text-[var(--text-secondary)] font-['Noto Sans'] font-light">
                  Verbal warning and safety reminder. 
                  Documentation in club records.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-transparent">
              <CardContent className="p-8">
                <XCircle className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 font-['Rajdhani'] uppercase text-[var(--text-primary)]">
                  Second Violation
                </h3>
                <p className="text-[var(--text-secondary)] font-['Noto Sans'] font-light">
                  Immediate removal from range. 
                  Mandatory safety re-training required.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-red-500/20 bg-gradient-to-br from-red-500/5 to-transparent">
              <CardContent className="p-8">
                <Zap className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 font-['Rajdhani'] uppercase text-[var(--text-primary)]">
                  Serious Violations
                </h3>
                <p className="text-[var(--text-secondary)] font-['Noto Sans'] font-light">
                  Immediate expulsion. Possible membership 
                  revocation and permanent ban.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <Shield className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-['Rajdhani'] uppercase">
            Questions About<br />Safety Rules?
          </h2>
          <p className="text-xl text-white/90 mb-8 font-['Noto Sans'] font-light max-w-2xl mx-auto">
            Our range officers are here to help. Don't hesitate to ask questions about any safety rule or procedure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[var(--accent-primary)] hover:bg-gray-100 font-['Rajdhani'] tracking-wide px-8 py-6 text-lg">
              <Link href="/contact">CONTACT RANGE OFFICER</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-[var(--accent-primary)] font-['Rajdhani'] tracking-wide px-8 py-6 text-lg">
              <Link href="/schedule/training">SAFETY TRAINING</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}