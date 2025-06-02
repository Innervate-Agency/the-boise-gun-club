'use client'

import { Suspense } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import SectionHeader from '@/components/common/SectionHeader'
import PhotoGallery from '@/components/gallery/PhotoGallery'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import ClayFragments from '@/components/effects/ClayFragments'
import SmokeAnimation from '@/components/effects/SmokeAnimation'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function ClubInfoPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <ClayFragments />
      <SmokeAnimation />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial="initial"
              animate="animate"
              variants={fadeInUp}
            >
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-black text-[var(--text-primary)] mb-6">
                Club <span className="text-accent-primary">Information</span>
              </h1>
              <p className="font-body text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
                Everything you need to know about Boise Gun Club - our history, facilities, gallery, and how to reach us.
              </p>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="About Us"
              subtitle="Learn about our rich history and mission"
            />
            
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp}>
                <Card className="p-8">
                  <h3 className="font-heading text-2xl font-bold text-[var(--text-primary)] mb-6">Our History</h3>
                  <div className="space-y-4 text-[var(--text-secondary)]">
                    <p>
                      Founded in 1965, Boise Gun Club has been a cornerstone of the Idaho shooting sports community for nearly six decades. What began as a small group of enthusiasts has grown into one of the premier shooting facilities in the Pacific Northwest.
                    </p>
                    <p>
                      Our club was established with the vision of providing a safe, welcoming environment for shooters of all skill levels to practice, compete, and enjoy the shooting sports.
                    </p>
                  </div>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="p-8">
                  <h3 className="font-heading text-2xl font-bold text-[var(--text-primary)] mb-6">Our Mission</h3>
                  <div className="space-y-4 text-[var(--text-secondary)]">
                    <p>
                      To promote the shooting sports through education, safety, and community. We believe in fostering a culture of responsibility, skill development, and camaraderie among our members.
                    </p>
                    <p>
                      Whether you're a seasoned competitor or just starting your shooting journey, Boise Gun Club provides the resources, training, and community support you need to excel.
                    </p>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Facilities Section */}
        <section id="facilities" className="py-20 bg-black/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="Our Facilities"
              subtitle="World-class ranges and training facilities"
            />
            
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp}>
                <Card className="p-6 h-full">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-accent-primary rounded-lg flex items-center justify-center mb-4">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-[var(--text-primary)] mb-2">Trap Range</h3>
                  </div>
                  <p className="text-[var(--text-secondary)] mb-4">
                    Professional trap shooting facility with automated clay target systems and covered shooting positions.
                  </p>
                  <ul className="text-[var(--text-secondary)] text-sm space-y-1">
                    <li>• 5 shooting stations</li>
                    <li>• Automated clay throwers</li>
                    <li>• Weather protection</li>
                  </ul>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="p-6 h-full">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-accent-primary rounded-lg flex items-center justify-center mb-4">
                      <span className="text-2xl">🔫</span>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-[var(--text-primary)] mb-2">Rifle Range</h3>
                  </div>
                  <p className="text-[var(--text-secondary)] mb-4">
                    Precision rifle range with distances from 50 to 300 yards, perfect for hunting preparation and competition.
                  </p>
                  <ul className="text-[var(--text-secondary)] text-sm space-y-1">
                    <li>• 50-300 yard distances</li>
                    <li>• Bench rest shooting</li>
                    <li>• Target retrieval system</li>
                  </ul>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="p-6 h-full">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-accent-primary rounded-lg flex items-center justify-center mb-4">
                      <span className="text-2xl">🎪</span>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-[var(--text-primary)] mb-2">Skeet Field</h3>
                  </div>
                  <p className="text-[var(--text-secondary)] mb-4">
                    Championship skeet field with high and low houses for American skeet shooting competition and practice.
                  </p>
                  <ul className="text-[var(--text-secondary)] text-sm space-y-1">
                    <li>• 8 shooting stations</li>
                    <li>• High & low houses</li>
                    <li>• Competition standard</li>
                  </ul>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="Gallery"
              subtitle="See our facilities and community in action"
            />
            
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Suspense fallback={<LoadingSpinner />}>
                <PhotoGallery />
              </Suspense>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-black/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="Contact Us"
              subtitle="Get in touch with our team"
            />
            
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12"
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp}>
                <Card className="p-8">
                  <h3 className="font-heading text-2xl font-bold text-[var(--text-primary)] mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-accent-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-sm">📍</span>
                      </div>
                      <div>
                        <h4 className="font-body font-semibold text-[var(--text-primary)] mb-1">Address</h4>
                        <p className="text-[var(--text-secondary)]">
                          1234 Shooting Range Road<br/>
                          Boise, ID 83702
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-accent-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-sm">📞</span>
                      </div>
                      <div>
                        <h4 className="font-body font-semibold text-[var(--text-primary)] mb-1">Phone</h4>
                        <p className="text-[var(--text-secondary)]">(208) 555-0123</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-accent-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-sm">✉️</span>
                      </div>
                      <div>
                        <h4 className="font-body font-semibold text-[var(--text-primary)] mb-1">Email</h4>
                        <p className="text-[var(--text-secondary)]">info@boisegunclub.com</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-[var(--border)]">
                    <div className="flex flex-wrap gap-4">
                      <Link href="/membership">
                        <Button variant="primary">Become a Member</Button>
                      </Link>
                      <Link href="/events">
                        <Button variant="secondary">View Events</Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="p-8">
                  <h3 className="font-heading text-2xl font-bold text-[var(--text-primary)] mb-6">Send us a Message</h3>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-accent-primary transition-colors"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-accent-primary transition-colors"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-[var(--text-primary)] placeholder-slate-400 focus:outline-none focus:border-accent-primary transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-accent-primary transition-colors resize-none"
                        placeholder="Tell us how we can help..."
                      ></textarea>
                    </div>
                    
                    <Button type="submit" variant="primary" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}