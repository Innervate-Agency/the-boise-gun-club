'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ParticleAnimation from '@/components/effects/ParticleAnimation';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { MembershipImage } from '@/components/ui/UnsplashImage';

const MembershipPage: React.FC = () => {
  const pageTitle = "Become a Member";
  const annualFee = 75;
  const standardRoundPrice = 8;
  const memberRoundPrice = 6;
  const savingsPerRound = standardRoundPrice - memberRoundPrice;

  const benefits = [
    { 
      title: "Exclusive Event Access", 
      description: "Participate in member-only tournaments, leagues, and unique fun shoots like our popular 'glow shoots'." 
    },
    { 
      title: "Skill Enhancement Discounts", 
      description: "Receive special pricing on advanced training courses, guest instructor workshops, and firearm safety refreshers." 
    },
    { 
      title: "Community & Voice", 
      description: "Join a passionate community, attend club meetings, volunteer for initiatives, and help shape the club's future." 
    },
    { 
      title: "Guest Privileges", 
      description: "Bring friends and family along with discounted guest rates or a set number of complimentary guest passes annually." 
    },
    { 
      title: "Club Newsletter", 
      description: "Stay informed with regular updates on club news, upcoming events, member achievements, and important announcements." 
    },
    { 
      title: "Pro Shop Savings", 
      description: "Enjoy discounts on ammunition, shooting accessories, cleaning supplies, and official Boise Gun Club merchandise." 
    },
    { 
      title: "Support Our Legacy", 
      description: "Your membership directly contributes to the maintenance, improvement, and long-term preservation of our historic club." 
    },
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: "easeOut" }
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <div className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] overflow-hidden">
      <ParticleAnimation />
      
      {/* Header Section */}
      <motion.header 
        className="relative py-24 md:py-32 text-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/membership.jpg')" }}
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold font-['Rajdhani'] tracking-tight text-shadow-lg"
            variants={sectionVariants} custom={0}
          >
            {pageTitle}
          </motion.h1>
          <motion.p 
            className="mt-6 text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto font-['Noto Sans']"
            variants={sectionVariants} custom={1}
          >
            Join the Boise Gun Club family and unlock a world of benefits, savings, and community. While our ranges are open to the public, membership offers the best value and experience.
          </motion.p>
        </div>
      </motion.header>

      {/* Main Content Area */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 space-y-48 md:space-y-64">
        {/* Core Offer Section */}
        <motion.section 
          className="glass-premium p-8 md:p-12 rounded-xl shadow-2xl border border-white/20"
          variants={sectionVariants} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold font-['Rajdhani'] text-[var(--accent-primary)] mb-6">
            Membership At a Glance
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-5xl font-bold text-[var(--text-primary)]">${annualFee}<span className="text-xl font-normal text-[var(--text-secondary)]">/year</span></p>
              <p className="mt-2 text-[var(--text-secondary)] font-['Noto Sans']">
                Enjoy significant savings on every visit. Members pay just ${memberRoundPrice} per round of Skeet or Trap (25 shots), compared to the standard ${standardRoundPrice} – that's a ${savingsPerRound} saving per round!
              </p>
            </div>
            <div className="glass-premium p-6 rounded-lg text-center border border-white/10">
              <p className="text-lg font-['Noto Sans'] text-[var(--text-secondary)]">Non-Member Price: <span className="font-bold text-[var(--text-primary)]">${standardRoundPrice}/round</span></p>
              <p className="text-2xl font-bold font-['Noto Sans'] text-[var(--accent-primary)] my-2">Member Price: <span className="text-[var(--text-primary)]">${memberRoundPrice}/round</span></p>
              <p className="text-sm font-['Noto Sans'] text-[var(--text-secondary)]">(Skeet/Trap - 25 shots)</p>
            </div>
          </div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section
          variants={sectionVariants} custom={3} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold font-['Rajdhani'] text-center text-[var(--accent-primary)] mb-12">
            More Than Just Savings: Unlock Exclusive Perks
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index} 
                className="glass-premium p-6 rounded-lg shadow-xl border border-white/20 hover:shadow-[var(--accent-primary)]/30 hover:border-[var(--accent-primary)]/50 transition-all duration-300 transform hover:-translate-y-1"
                variants={sectionVariants} custom={index}
              >
                <h3 className="text-xl font-semibold font-['Rajdhani'] text-[var(--accent-primary)] mb-3">{benefit.title}</h3>
                <p className="text-[var(--text-secondary)] font-['Noto Sans'] text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action Section */}
        <motion.section 
          className="text-center py-12 bg-gradient-to-r from-[var(--accent-primary)]/80 to-[var(--accent-secondary)]/80 backdrop-blur-sm rounded-xl shadow-2xl border border-orange-400/50"
          variants={sectionVariants} custom={4} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-['Rajdhani'] text-black mb-6">
            Ready to Join?
          </h2>
          <p className="text-black font-['Noto Sans'] text-lg max-w-xl mx-auto mb-8">
            Become a part of the Boise Gun Club legacy today. Experience the best of shooting sports with unparalleled benefits and a welcoming community.
          </p>
          <motion.button 
            className="bg-black text-white font-semibold font-['Heading_Pro_Trial'] py-3 px-8 rounded-lg shadow-md hover:bg-gray-800 transition-colors duration-300 text-lg flex items-center justify-center mx-auto group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign Up for Membership 
            <ChevronRightIcon className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
          <p className="mt-6 text-sm text-black/80 font-['Noto Sans']">
            Have questions? Feel free to <a href="/contact" className="underline hover:text-black">contact us</a> for more information.
          </p>
        </motion.section>
      </div>
    </div>
  );
};

export default MembershipPage;
