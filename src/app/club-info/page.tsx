'use client'

import { Suspense } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Section from '@/components/layout/Section'
import SectionHeader from '@/components/common/SectionHeader'
import PhotoGallery from '@/components/gallery/PhotoGallery'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import { FaCrosshairs, FaTrophy, FaTree, FaHome, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' }
}

const facilityDetails = [
  {
    name: "Trap Fields",
    description: "Ten professional, ATA-registered trap fields equipped with Winchester Super-X machines. Lit for twilight and evening league play.",
    Icon: FaCrosshairs
  },
  {
    name: "Skeet Fields",
    description: "Five championship skeet fields with regulation high and low houses. Perfect for NSSA-certified competitions and weekly leagues.",
    Icon: FaTrophy
  },
  {
    name: "Sporting Clays",
    description: "A sprawling 15-station course weaving through natural terrain, offering challenging and varied target presentations for all skill levels.",
    Icon: FaTree
  },
  {
    name: "Clubhouse & Pro Shop",
    description: "Our modern clubhouse features a full-service pro shop, a comfortable lounge area, and registration services for all events.",
    Icon: FaHome
  }
]

const contactDetails = [
    {
        method: "Address",
        value: "1234 Shooting Range Road<br/>Boise, ID 83702",
        Icon: FaMapMarkerAlt,
        link: "https://maps.google.com"
    },
    {
        method: "Phone",
        value: "(208) 555-0123",
        Icon: FaPhone,
        link: "tel:+1-208-555-0123"
    },
    {
        method: "Email",
        value: "info@boisegunclub.com",
        Icon: FaEnvelope,
        link: "mailto:info@boisegunclub.com"
    }
]

export default function ClubInfoPage() {
  return (
    <div className="min-h-screen bg-dark-bg text-gray-200">
      
      {/* Hero Section */}
      <Section background="grid" className="pt-40 pb-24 text-center relative overflow-hidden">
        <motion.div initial="initial" animate="animate" variants={fadeInUp} className="relative z-10">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-wider mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-leonard-yellow to-lahoma-orange">
              Boise Gun Club
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Idaho's premier destination for shooting sports excellence, community, and safety since 1965.
          </p>
        </motion.div>
        <div className="absolute inset-0 bg-black/50 z-0"></div>
      </Section>

      {/* About Section */}
      <Section background="mist">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.5 }} variants={fadeInUp}>
            <Image 
              src={'/images/membership.webp'} 
              alt="Club members socializing" 
              width={800} 
              height={600}
              className="rounded-lg shadow-2xl object-cover w-full h-full"
            />
          </motion.div>
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.5 }} variants={fadeInUp}>
            <h2 className="text-4xl font-bold uppercase mb-6 tracking-wide">Our History & Mission</h2>
            <div className="space-y-4 text-lg text-gray-300">
              <p>
                Founded nearly six decades ago by a dedicated group of sporting enthusiasts, the Boise Gun Club was established to provide a safe, welcoming, and world-class environment for shooters of all disciplines and skill levels.
              </p>
              <p>
                Our mission is to champion the shooting sports through comprehensive education, unwavering commitment to safety, and fostering a vibrant community. We strive to cultivate a culture of responsibility, continuous skill development, and lasting camaraderie among our members.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Facilities Section */}
      <Section background="grid">
        <SectionHeader
          title="World-Class Facilities"
          subtitle="Explore our premier ranges and amenities designed for an unparalleled shooting experience"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilityDetails.map((facility, index) => (
            <motion.div 
              key={facility.name}
              className="bg-gray-800/20 backdrop-blur-sm border border-gray-700/50 p-8 rounded-xl text-center flex flex-col items-center transition-all duration-300 hover:bg-gray-800/50 hover:border-leonard-yellow/50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <facility.Icon className="text-5xl mb-6 text-leonard-yellow" />
              <h3 className="text-xl font-bold uppercase mb-3 text-white tracking-wider">{facility.name}</h3>
              <p className="text-gray-400 flex-grow">{facility.description}</p>
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
          <div className="max-w-7xl mx-auto">
            <PhotoGallery />
          </div>
        </Suspense>
      </Section>
      
      {/* Contact Section */}
      <Section background="grid">
        <SectionHeader
          title="Get In Touch"
          subtitle="We're here to help. Reach out with any questions or to plan your visit."
        />
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactDetails.map((detail, index) => (
                <motion.a 
                    key={detail.method}
                    href={detail.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800/20 backdrop-blur-sm border border-gray-700/50 p-8 rounded-xl flex flex-col items-center text-center transition-all duration-300 hover:bg-gray-800/50 hover:border-lahoma-orange/50"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <detail.Icon className="text-4xl mb-5 text-lahoma-orange" />
                    <h3 className="text-lg font-bold uppercase text-white tracking-wider">{detail.method}</h3>
                    <div className="text-gray-400 mt-2" dangerouslySetInnerHTML={{ __html: detail.value }} />
                </motion.a>
            ))}
          </div>
        </div>
      </Section>
    </div>
  )
}