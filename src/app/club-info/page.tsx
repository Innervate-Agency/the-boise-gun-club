'use client'

import { Suspense } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Section from '@/components/layout/Section'
import { getShootingSportsImage } from '@/utils/imageUtils'
import SectionHeader from '@/components/common/SectionHeader'
import PhotoGallery from '@/components/gallery/PhotoGallery'
import LoadingSpinner from '@/components/ui/LoadingSpinner'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' }
}

const facilityDetails = [
  {
    name: "Trap Fields",
    description: "Ten professional, ATA-registered trap fields equipped with Winchester Super-X machines. Lit for twilight and evening league play.",
    icon: '🎯'
  },
  {
    name: "Skeet Fields",
    description: "Five championship skeet fields with regulation high and low houses. Perfect for NSSA-certified competitions and weekly leagues.",
    icon: '🏆'
  },
  {
    name: "Sporting Clays",
    description: "A sprawling 15-station course weaving through natural terrain, offering challenging and varied target presentations for all skill levels.",
    icon: '🌲'
  },
  {
    name: "Clubhouse & Pro Shop",
    description: "Our modern clubhouse features a full-service pro shop, a comfortable lounge area, and registration services for all events.",
    icon: '🏠'
  }
]

const contactDetails = [
    {
        method: "Address",
        value: "1234 Shooting Range Road<br/>Boise, ID 83702",
        icon: '📍',
        link: "https://maps.google.com"
    },
    {
        method: "Phone",
        value: "(208) 555-0123",
        icon: '📞',
        link: "tel:+1-208-555-0123"
    },
    {
        method: "Email",
        value: "info@boisegunclub.com",
        icon: '✉️',
        link: "mailto:info@boisegunclub.com"
    }
]

export default function ClubInfoPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      
      {/* Hero Section */}
      <Section background="grid" className="pt-32 pb-20 text-center">
        <motion.div initial="initial" animate="animate" variants={fadeInUp}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold uppercase mb-4">
            Boise Gun Club
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            Idaho's premier shooting sports facility since 1965.
          </p>
        </motion.div>
      </Section>

      {/* About Section */}
      <Section background="mist">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
            <Image 
              src={getShootingSportsImage('community')} 
              alt="Club members socializing" 
              width={800} 
              height={600}
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="text-4xl font-bold uppercase mb-4 text-leonard-yellow">Our History & Mission</h2>
            <p className="text-lg text-gray-300 mb-4">
              Founded nearly six decades ago, our club was established to provide a safe, welcoming environment for shooters of all skill levels.
            </p>
            <p className="text-lg text-gray-300">
              Our mission is to promote the shooting sports through education, safety, and community, fostering a culture of responsibility, skill development, and camaraderie.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Facilities Section */}
      <Section background="grid">
        <SectionHeader
          title="World-Class Facilities"
          subtitle="Explore our premier ranges and amenities"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilityDetails.map((facility, index) => (
            <motion.div 
              key={facility.name}
              className="glass-premium p-6 rounded-lg text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl mb-4">{facility.icon}</div>
              <h3 className="text-xl font-bold uppercase mb-2 text-lahoma-orange">{facility.name}</h3>
              <p className="text-gray-300">{facility.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Gallery Section */}
      <Section background="mist">
        <SectionHeader
          title="Gallery"
          subtitle="See our facilities and community in action"
        />
        <Suspense fallback={<LoadingSpinner />}>
          <PhotoGallery />
        </Suspense>
      </Section>
      
      {/* Contact Section */}
      <Section background="grid">
        <SectionHeader
          title="Get In Touch"
          subtitle="We're here to help"
        />
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactDetails.map((detail, index) => (
                <motion.a 
                    key={detail.method}
                    href={detail.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block glass-premium p-6 rounded-lg text-center hover:bg-white/10 transition-colors"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <div className="text-4xl mb-4">{detail.icon}</div>
                    <h3 className="text-lg font-bold uppercase text-lahoma-orange">{detail.method}</h3>
                    <div className="text-gray-300" dangerouslySetInnerHTML={{ __html: detail.value }} />
                </motion.a>
            ))}
          </div>
        </div>
      </Section>
    </div>
  )
}