'use client'

import React from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { 
  Check,
  DollarSign,
  Users,
  Calendar,
  Trophy,
  Shield,
  Star,
  Gift,
  Clock
} from 'lucide-react';
import { PageHero } from '@/components/ui/page-hero';
import { FeatureGrid } from '@/components/ui/feature-grid';
import { PricingTable, samplePlans } from '@/components/ui/pricing-table';
import { TestimonialCarousel } from '@/components/ui/testimonial-carousel';

const membershipBenefits = [
  {
    icon: DollarSign,
    title: "Reduced Shooting Fees",
    description: "Save $2 per round - Members pay just $6 vs $8 daily rate",
  },
  {
    icon: Calendar,
    title: "Priority Registration",
    description: "First access to competition registration and special events",
  },
  {
    icon: Users,
    title: "Clubhouse Privileges",
    description: "Access to member lounge, pro shop discounts, and social events",
  },
  {
    icon: Trophy,
    title: "Competition Access",
    description: "Participate in member-only tournaments and league play",
  },
  {
    icon: Shield,
    title: "Equipment Storage",
    description: "Secure storage options for guns, ammo, and accessories",
  },
  {
    icon: Star,
    title: "Training Discounts", 
    description: "Special pricing on instruction and safety courses",
  },
  {
    icon: Gift,
    title: "Guest Privileges",
    description: "Bring friends and family at discounted guest rates",
  }
]

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Member since 2018",
    avatar: "/images/membership.webp",
    content: "The Boise Gun Club has become my second home. The community here is incredible, and I've improved my shooting tremendously thanks to the excellent instruction and regular practice opportunities.",
    badge: "State Champion 2022"
  },
  {
    name: "Mike Rodriguez", 
    role: "Member since 2015",
    avatar: "/images/training.webp",
    content: "As a beginner, I was nervous about joining a gun club. The welcoming atmosphere and patient instruction here made all the difference. Now I'm competing regularly!",
    badge: "League Champion"
  }
]

export default function MembershipPage() {
  return (
    <main className="min-h-screen bg-bg-primary text-text-primary">
      
      <PageHero
        title="Join Idaho's Premier Shooting Community"
        subtitle="Become a Member"
        description="Become part of a 125-year legacy. Experience world-class facilities, expert instruction, and a welcoming community that celebrates both tradition and excellence."
        primaryAction={{ text: 'View Membership Options', onClick: () => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }) }}
        secondaryAction={{ text: 'Explore Our Facilities', href: '/club-info' }}
        icon={Users}
        backgroundPreset="gunclub"
        gradient="from-color-lahoma-orange to-abe-red"
      />

      <FeatureGrid
        title="Why Choose Membership?"
        description="Membership pays for itself in just 19 rounds while unlocking exclusive benefits and community access."
        features={membershipBenefits}
        columns={3}
        cardVariant="glass"
        className="py-24 bg-bg-secondary"
      />

      <section id="pricing" className="py-24">
        <PricingTable
          plans={samplePlans}
          showAnnualDiscount={true}
          showFeatureComparison={true}
          variant="default"
        />
      </section>

      <TestimonialCarousel
        title="Member Stories"
        subtitle="Hear from fellow members about their experience at the club."
        testimonials={testimonials}
      />

      <section className="py-24 bg-gradient-to-r from-accent-primary to-accent-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <Clock className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-heading uppercase">
            Ready to Join<br />Our Family?
          </h2>
          <p className="text-xl text-white/90 mb-8 font-body font-light max-w-2xl mx-auto">
            Start your journey with Idaho's premier shotgun sports community today. 
            Experience the difference that 125 years of excellence makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-accent-primary hover:bg-gray-100 font-heading tracking-wide px-8 py-6 text-lg">
              <Link href="/auth/signup">START MEMBERSHIP</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-accent-primary font-heading tracking-wide px-8 py-6 text-lg">
              <Link href="/club-info">VISIT THE CLUB</Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/80 font-body font-light">
            Have questions? <Link href="/contact" className="underline hover:text-white">Contact us</Link> for more information.
          </p>
        </div>
      </section>
    </main>
  );
}
