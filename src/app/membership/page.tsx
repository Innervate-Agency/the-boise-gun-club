'use client'

import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Check,
  DollarSign,
  Users,
  Calendar,
  Trophy,
  Shield,
  Star,
  Target,
  Clock,
  Gift
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' }
}

const membershipBenefits = [
  {
    icon: DollarSign,
    title: "Reduced Shooting Fees",
    description: "Save $2 per round - Members pay just $6 vs $8 daily rate",
    highlight: true
  },
  {
    icon: Calendar,
    title: "Priority Registration",
    description: "First access to competition registration and special events",
    highlight: true
  },
  {
    icon: Users,
    title: "Clubhouse Privileges",
    description: "Access to member lounge, pro shop discounts, and social events",
    highlight: false
  },
  {
    icon: Trophy,
    title: "Competition Access",
    description: "Participate in member-only tournaments and league play",
    highlight: false
  },
  {
    icon: Shield,
    title: "Equipment Storage",
    description: "Secure storage options for guns, ammo, and accessories",
    highlight: false
  },
  {
    icon: Star,
    title: "Training Discounts", 
    description: "Special pricing on instruction and safety courses",
    highlight: false
  },
  {
    icon: Gift,
    title: "Guest Privileges",
    description: "Bring friends and family at discounted guest rates",
    highlight: false
  }
]

const pricingTiers = [
  {
    name: "Daily Visitor",
    price: 8,
    period: "per round",
    description: "Perfect for occasional visitors",
    features: [
      "Access to all ranges",
      "Equipment rental available", 
      "Guest privileges",
      "Safety orientation included"
    ],
    popular: false,
    cta: "Visit Today",
    ctaLink: "/schedule/weekly"
  },
  {
    name: "Annual Member",
    price: 75,
    period: "per year",
    description: "Best value for regular shooters",
    features: [
      "Only $6 per round (save $2)",
      "Priority competition registration",
      "Clubhouse and lounge access",
      "Member events and tournaments",
      "Equipment storage options",
      "Training course discounts",
      "Pro shop member pricing",
      "Voting rights in club decisions"
    ],
    popular: true,
    cta: "Join the Club",
    ctaLink: "/auth/signup"
  }
]

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Member since 2018",
    image: "/images/membership.webp",
    quote: "The Boise Gun Club has become my second home. The community here is incredible, and I've improved my shooting tremendously thanks to the excellent instruction and regular practice opportunities.",
    achievements: ["State Champion 2022", "100 Straight Patch"]
  },
  {
    name: "Mike Rodriguez", 
    role: "Member since 2015",
    image: "/images/training.webp",
    quote: "As a beginner, I was nervous about joining a gun club. The welcoming atmosphere and patient instruction here made all the difference. Now I'm competing regularly!",
    achievements: ["League Champion", "Safety Instructor"]
  }
]

export default function MembershipPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/membership.webp"
            fill
            className="object-cover scale-105 transition-transform duration-[20s] ease-out"
            priority
            alt="Boise Gun Club Membership"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-[var(--accent-primary)]/10" />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <motion.div {...fadeInUp}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white font-['Rajdhani'] uppercase tracking-tight leading-none">
              Join Idaho's<br />
              <span className="text-[var(--accent-primary)]">Premier</span><br />
              Shooting Community
            </h1>
            <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-8 max-w-3xl mx-auto font-['Noto Sans'] font-light leading-relaxed">
              Become part of a 125-year legacy. Experience world-class facilities, expert instruction, and a welcoming community that celebrates both tradition and excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] text-white font-['Rajdhani'] tracking-wide px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300">
                <Link href="#pricing">VIEW MEMBERSHIP OPTIONS</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-black font-['Rajdhani'] tracking-wide px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                <Link href="/club-info">EXPLORE OUR FACILITIES</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-primary)] font-['Rajdhani'] uppercase tracking-tight">
              Why Choose <span className="text-[var(--accent-primary)]">Membership?</span>
            </h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto font-['Noto Sans'] font-light">
              Membership pays for itself in just 19 rounds while unlocking exclusive benefits and community access.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {membershipBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${
                  benefit.highlight 
                    ? 'border-2 border-[var(--accent-primary)] bg-gradient-to-br from-[var(--accent-primary)]/5 to-transparent' 
                    : 'bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)] border-0'
                }`}>
                  <CardContent className="p-8 text-center">
                    <div className="relative inline-block mb-6">
                      <benefit.icon className={`w-12 h-12 ${benefit.highlight ? 'text-[var(--accent-primary)]' : 'text-[var(--accent-secondary)]'}`} />
                      {benefit.highlight && (
                        <div className="absolute inset-0 bg-[var(--accent-primary)]/20 rounded-full blur-xl opacity-50" />
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-3 font-['Rajdhani'] uppercase text-[var(--text-primary)]">
                      {benefit.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] font-['Noto Sans'] font-light leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="pricing" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-primary)] font-['Rajdhani'] uppercase tracking-tight">
              Choose Your <span className="text-[var(--accent-primary)]">Plan</span>
            </h2>
            <p className="text-xl text-[var(--text-secondary)] font-['Noto Sans'] font-light">
              Fair pricing for world-class facilities and instruction.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`relative h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${
                  tier.popular 
                    ? 'border-2 border-[var(--accent-primary)] bg-gradient-to-br from-[var(--accent-primary)]/5 to-transparent scale-105' 
                    : 'bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)] border-0'
                }`}>
                  {tier.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[var(--accent-primary)] text-white px-6 py-1">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center pb-4">
                    <h3 className="text-2xl font-bold font-['Rajdhani'] uppercase text-[var(--text-primary)] mb-2">
                      {tier.name}
                    </h3>
                    <div className="mb-4">
                      <span className="text-5xl font-bold text-[var(--accent-primary)]">${tier.price}</span>
                      <span className="text-[var(--text-secondary)] font-['Noto Sans'] font-light ml-2">{tier.period}</span>
                    </div>
                    <p className="text-[var(--text-secondary)] font-['Noto Sans'] font-light">
                      {tier.description}
                    </p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-[var(--accent-primary)] mt-0.5 flex-shrink-0" />
                          <span className="text-[var(--text-secondary)] font-['Noto Sans'] font-light">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className={`w-full ${
                      tier.popular 
                        ? 'bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] text-white' 
                        : 'bg-[var(--bg-secondary)] hover:bg-[var(--accent-primary)] text-[var(--text-primary)] hover:text-white border border-[var(--accent-primary)]/20'
                    }`}>
                      <Link href={tier.ctaLink}>{tier.cta}</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Value Calculator */}
          <motion.div
            className="mt-16 text-center p-8 bg-gradient-to-r from-[var(--accent-primary)]/10 to-[var(--accent-secondary)]/10 rounded-xl border border-[var(--accent-primary)]/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Target className="w-12 h-12 text-[var(--accent-primary)] mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4 font-['Rajdhani'] uppercase text-[var(--text-primary)]">
              Membership Pays for Itself
            </h3>
            <p className="text-lg text-[var(--text-secondary)] font-['Noto Sans'] font-light mb-6 max-w-2xl mx-auto">
              With just 19 rounds per year, your membership pays for itself. Shoot more than that? 
              You're saving money while enjoying all the exclusive member benefits.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--accent-primary)] font-['Rajdhani']">$75</div>
                <div className="text-[var(--text-secondary)] font-['Noto Sans'] font-light">Annual Fee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--accent-primary)] font-['Rajdhani']">$38</div>
                <div className="text-[var(--text-secondary)] font-['Noto Sans'] font-light">Savings at 19 rounds</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--accent-primary)] font-['Rajdhani']">$100+</div>
                <div className="text-[var(--text-secondary)] font-['Noto Sans'] font-light">Savings at 50+ rounds</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Member Testimonials */}
      <section className="py-24 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-primary)] font-['Rajdhani'] uppercase tracking-tight">
              Member <span className="text-[var(--accent-primary)]">Stories</span>
            </h2>
            <p className="text-xl text-[var(--text-secondary)] font-['Noto Sans'] font-light">
              Hear from fellow members about their experience at the club.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)] border-0">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6 mb-6">
                      <Image
                        src={testimonial.image}
                        width={80}
                        height={80}
                        className="rounded-full object-cover"
                        alt={testimonial.name}
                      />
                      <div>
                        <h3 className="text-xl font-bold font-['Rajdhani'] uppercase text-[var(--text-primary)] mb-1">
                          {testimonial.name}
                        </h3>
                        <p className="text-[var(--text-secondary)] font-['Noto Sans'] font-light mb-3">
                          {testimonial.role}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {testimonial.achievements.map((achievement) => (
                            <Badge key={achievement} variant="outline" className="text-xs">
                              {achievement}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <blockquote className="text-lg text-[var(--text-primary)] font-['Noto Sans'] font-light italic leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <Clock className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-['Rajdhani'] uppercase">
            Ready to Join<br />Our Family?
          </h2>
          <p className="text-xl text-white/90 mb-8 font-['Noto Sans'] font-light max-w-2xl mx-auto">
            Start your journey with Idaho's premier shooting sports community today. 
            Experience the difference that 125 years of excellence makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[var(--accent-primary)] hover:bg-gray-100 font-['Rajdhani'] tracking-wide px-8 py-6 text-lg">
              <Link href="/auth/signup">START MEMBERSHIP</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-[var(--accent-primary)] font-['Rajdhani'] tracking-wide px-8 py-6 text-lg">
              <Link href="/club-info">VISIT THE CLUB</Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/80 font-['Noto Sans'] font-light">
            Have questions? <Link href="/contact" className="underline hover:text-white">Contact us</Link> for more information.
          </p>
        </div>
      </section>
    </main>
  );
}