'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './styles.css';
import { 
  Trophy, Target, Star, ArrowRight, MapPin, Users, Calendar, 
  ShoppingBag, MessageCircle, BookOpen, Building2, Shield, Mail, Send, Phone
} from 'lucide-react';

// Self-contained components with no external dependencies
const SimpleButton = ({ children, onClick, className = "" }: any) => (
  <button 
    onClick={onClick}
    className={`px-6 py-3 rounded-lg font-medium transition-all duration-150 ${className}`}
  >
    {children}
  </button>
);

const SimpleCard = ({ children, className = "" }: any) => (
  <div className={`bg-white rounded-xl p-6 shadow-card-default hover:shadow-card-hover transition-all duration-150 cursor-pointer ${className}`}>
    {children}
  </div>
);

const SimpleDialog = ({ isOpen, onClose, children }: any) => (
  isOpen ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  ) : null
);

export default function SplashStandalone() {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);

  const features = [
    { 
      icon: MapPin, 
      badgeTitle: "Directory & Marketplace",
      title: "Find Local Experts", 
      desc: "Complete directory of gun shops, ranges, instructors, and gunsmiths across Treasure Valley",
      colorClass: "idaho-sky-blue",
      detailedContent: {
        title: "Pillar 1: Directory & Marketplace",
        subtitle: "The comprehensive hub for every firearms business in Treasure Valley",
        content: [
          "Find trusted local gun shops, shooting ranges, certified instructors, and skilled gunsmiths all in one convenient searchable directory.",
          "Read reviews and ratings from fellow community members to make informed decisions about where to shop and train.",
          "Access detailed business profiles with services offered, hours, contact information, and specialties to find exactly what you need."
        ],
        features: ["Local Gun Shops", "Shooting Ranges", "Certified Instructors", "Gunsmith Services", "Equipment Appraisals", "Customer Reviews"]
      }
    },
    { 
      icon: Calendar, 
      badgeTitle: "Unified Events",
      title: "Never Miss Out", 
      desc: "All shooting events, competitions, and training from every club in the valley",
      colorClass: "wildeye-susan-yellow",
      detailedContent: {
        title: "Pillar 2: Unified Events",
        subtitle: "Every shooting event in Treasure Valley, all in one place",
        content: [
          "Browse upcoming competitions, training sessions, and special events from Boise Gun Club, Capitol City, and all regional shooting facilities.",
          "Get detailed event information including dates, entry fees, equipment requirements, and skill levels to find events perfect for you.",
          "Register online and receive reminders so you never miss your favorite competitions or training opportunities."
        ],
        features: ["Competition Calendar", "Training Sessions", "Club Events", "Online Registration", "Event Reminders", "Multi-Club Coverage"]
      }
    },
    { 
      icon: ShoppingBag, 
      badgeTitle: "Service Marketplace",
      title: "Expert Services", 
      desc: "Book gunsmith services, appraisals, training, and specialized services",
      colorClass: "lahoma-orange",
      detailedContent: {
        title: "Pillar 3: Service Marketplace",
        subtitle: "Professional firearms services at your fingertips",
        content: [
          "Book appointments with certified gunsmiths for repairs, modifications, and custom work with transparent pricing and timelines.",
          "Schedule professional appraisals for insurance, estate planning, or sales with certified experts who understand current market values.",
          "Connect with NRA-certified instructors for personalized training sessions, safety courses, and skill development programs."
        ],
        features: ["Gunsmith Booking", "Professional Appraisals", "Training Sessions", "Custom Work", "Transparent Pricing", "Certified Experts"]
      }
    },
    { 
      icon: MessageCircle, 
      badgeTitle: "Community Forum",
      title: "Connect & Share", 
      desc: "Join discussions, share experiences, and learn from fellow enthusiasts",
      colorClass: "sagebrush-silver",
      detailedContent: {
        title: "Pillar 4: Community Forum",
        subtitle: "Where Treasure Valley's shooting community comes together",
        content: [
          "Participate in discussions about equipment, techniques, local events, and shooting sports with fellow enthusiasts and experts.",
          "Share your experiences, ask questions, and get advice from experienced shooters and certified instructors in our community.",
          "Stay informed about local regulations, safety updates, and industry news affecting shooters in Idaho and the greater region."
        ],
        features: ["Discussion Forums", "Equipment Reviews", "Local Updates", "Safety Tips", "Event Discussions", "Expert Advice"]
      }
    },
    { 
      icon: BookOpen, 
      badgeTitle: "Content Engine",
      title: "Learn & Grow", 
      desc: "Educational content, safety guides, and skill development resources",
      colorClass: "rattlesnake-brown",
      detailedContent: {
        title: "Pillar 5: Content Engine",
        subtitle: "Educational resources for shooters at every level",
        content: [
          "Access comprehensive safety guides, shooting fundamentals, and advanced techniques created by certified instructors and industry experts.",
          "Watch instructional videos, read detailed articles, and follow step-by-step tutorials to improve your shooting skills and knowledge.",
          "Stay current with equipment reviews, industry news, and regulatory updates that affect recreational and competitive shooters."
        ],
        features: ["Safety Guides", "Skill Tutorials", "Equipment Reviews", "Video Content", "Industry News", "Regulatory Updates"]
      }
    },
    { 
      icon: Building2, 
      badgeTitle: "Brand & Apparel",
      title: "Represent Pride", 
      desc: "Official merchandise and apparel celebrating Idaho's shooting heritage",
      colorClass: "leonard-yellow",
      detailedContent: {
        title: "Pillar 6: Brand & Apparel",
        subtitle: "Celebrate Idaho's rich shooting sports heritage",
        content: [
          "Shop exclusive merchandise featuring designs that celebrate Idaho's shooting sports tradition and the strong community bonds of local clubs.",
          "Find high-quality apparel, accessories, and gear featuring club logos, regional designs, and Idaho-inspired artwork.",
          "Support local clubs and the broader shooting community with every purchase, as proceeds help fund youth programs and facility improvements."
        ],
        features: ["Club Merchandise", "Idaho-Themed Apparel", "Quality Accessories", "Community Support", "Youth Programs", "Heritage Designs"]
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-black font-heading text-gray-900 mb-6">
              BOISE GUN CLUB
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Idaho's Premier Shooting Sports Complex - Established 1898
            </p>
            <SimpleButton 
              className="bg-leonard-yellow hover:bg-lahoma-orange text-white text-lg px-8 py-4"
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
              Explore Our Vision
            </SimpleButton>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading text-gray-900 mb-4">
              Six Pillars of Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform serves every aspect of Treasure Valley's shooting community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <SimpleCard 
                    className="h-full hover:scale-105"
                    onClick={() => setSelectedFeature(index)}
                  >
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-leonard-yellow rounded-lg mr-4">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                          {feature.badgeTitle}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {feature.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{feature.desc}</p>
                    <div className="flex items-center text-leonard-yellow font-medium">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </SimpleCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold font-heading mb-4">
            Ready to Join the Community?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Connect with Idaho's premier shooting sports community today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <SimpleButton className="bg-leonard-yellow hover:bg-lahoma-orange text-white">
              <Mail className="w-5 h-5 mr-2" />
              Contact Us
            </SimpleButton>
            <SimpleButton className="border border-gray-600 hover:bg-gray-800 text-white">
              <Phone className="w-5 h-5 mr-2" />
              (208) 555-0123
            </SimpleButton>
          </div>
        </div>
      </section>

      {/* Feature Detail Dialog */}
      <SimpleDialog 
        isOpen={selectedFeature !== null} 
        onClose={() => setSelectedFeature(null)}
      >
        {selectedFeature !== null && (
          <div className="text-left">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {features[selectedFeature].detailedContent.title}
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              {features[selectedFeature].detailedContent.subtitle}
            </p>
            <div className="space-y-4 mb-6">
              {features[selectedFeature].detailedContent.content.map((paragraph, idx) => (
                <p key={idx} className="text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h3>
              <div className="grid grid-cols-2 gap-2">
                {features[selectedFeature].detailedContent.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    <Star className="w-4 h-4 text-leonard-yellow mr-2" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </SimpleDialog>
    </div>
  );
}