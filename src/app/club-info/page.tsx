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
import { MegaHero } from '@/components/ui/mega-hero';
import { StatsShowcase } from '@/components/ui/stats-showcase';
import { FeatureGrid } from '@/components/ui/feature-grid';
import { ContactForm } from '@/components/ui/contact-form';

const facilityDetails = [
  {
    title: "Trap Fields",
    description: "10 ATA-registered trap fields equipped with Winchester Super-X machines. Lit for twilight and evening league play.",
    icon: Target,
    badge: "ATA Regulation",
  },
  {
    title: "Skeet Fields", 
    description: "5 Championship skeet fields with regulation high and low houses. Perfect for NSSA-certified competitions and weekly leagues.",
    icon: Trophy,
    badge: "NSSA Certified",
  },
  {
    title: "Sporting Clays",
    description: "A sprawling 15-station course weaving through natural terrain, offering challenging and varied target presentations for all skill levels.",
    icon: Trees,
    badge: "NSCA Compliant",
  },
  {
    title: "Clubhouse & Pro Shop",
    description: "Our modern clubhouse features a full-service pro shop, comfortable lounge area, and registration services for all events.",
    icon: Home,
    badge: "Full Service",
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
    <main className="min-h-screen bg-bg-primary text-text-primary">
      
      <MegaHero
        title="Idaho's Premier Shotgun Sports Destination"
        subtitle="Experience world-class facilities, expert instruction, and a welcoming community at the Treasure Valley's most established gun club since 1898."
        primaryCTA={{ text: 'Join The Club', onClick: () => console.log('Join Today') }}
        secondaryCTA={{ text: 'Explore Facilities', onClick: () => console.log('Explore Facilities') }}
        icon={<Target />}
        backgroundPreset="gunclub"
        gradient="from-color-lahoma-orange to-abe-red"
      />

      <StatsShowcase
        stats={clubStats}
        layout="inline"
        className="py-16 bg-bg-secondary"
      />

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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading uppercase tracking-tight text-text-primary">
                Our Legacy &<br />
                <span className="text-accent-primary">Mission</span>
              </h2>
              <div className="space-y-6 text-lg text-text-secondary font-body font-light leading-relaxed">
                <p>
                  Founded in 1898 by dedicated sporting enthusiasts, the Boise Gun Club has been Idaho&apos;s premier destination for shotgun sports for over 125 years. We&apos;ve built our reputation on providing a safe, welcoming environment for shooters of all skill levels.
                </p>
                <p>
                  Our mission is simple: champion the shooting sports through comprehensive education, unwavering commitment to safety, and fostering a vibrant community that celebrates both tradition and progress.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild className="bg-accent-primary hover:bg-accent-secondary text-white">
                  <Link href="/museum">Explore Our History</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FeatureGrid
        title="World-Class Facilities"
        description="Explore our premier ranges and amenities designed for an unparalleled shooting experience across 320 acres of pristine Idaho landscape."
        features={facilityDetails}
        columns={2}
        cardVariant="glass"
        className="py-24 bg-bg-secondary"
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ContactForm
            title="Visit Our Club"
            subtitle="Get In Touch"
            description="Located just 20 minutes from downtown Boise in the beautiful Idaho foothills."
            formType="contact"
            showContactInfo={true}
          />
        </div>
      </section>
    </main>
  );
}
