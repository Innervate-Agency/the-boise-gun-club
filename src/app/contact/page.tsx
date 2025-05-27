'use client';

import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline';

// Dynamically import effects for performance
const ParticleAnimation = dynamic(() => import('@/components/effects/ParticleAnimation'), { ssr: false });

// Contact form data interface
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactPage: FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPinIcon,
      title: 'Address',
      details: ['123 Gun Club Road', 'Boise, ID 83702'],
    },
    {
      icon: PhoneIcon,
      title: 'Phone',
      details: ['(208) 555-0123'],
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      details: ['info@boisegunclub.com'],
    },
    {
      icon: ClockIcon,
      title: 'Hours',
      details: ['Mon-Fri: 9AM-6PM', 'Sat-Sun: 8AM-8PM'],
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] relative overflow-hidden">
      {/* Background Effects */}
      <ParticleAnimation />
      
      {/* Hero Section */}
      <motion.section 
        className="relative z-10 pt-32 pb-16 px-4"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
          >
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6">
              GET IN <span className="text-[var(--accent-primary)]">TOUCH</span>
            </h1>
            <p className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              Ready to join Boise's premier shooting club? Have questions about our facilities or events? 
              We're here to help you get started on your shooting sports journey.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Information */}
            <motion.div 
              className="space-y-8"
              variants={fadeInUp}
            >
              <div>
                <h2 className="font-heading text-3xl font-bold mb-8 text-[var(--accent-primary)]">
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4 p-6 bg-[var(--bg-secondary)] rounded-lg border border-[var(--border)] backdrop-blur-sm"
                      variants={fadeInUp}
                      transition={{ delay: index * 0.1 }}
                    >
                      <item.icon className="w-6 h-6 text-[var(--accent-primary)] mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
                        {item.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-[var(--text-secondary)]">{detail}</p>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <motion.div 
                className="bg-[var(--bg-secondary)] rounded-lg border border-[var(--border)] h-64 flex items-center justify-center"
                variants={fadeInUp}
              >
                <div className="text-center">
                  <MapPinIcon className="w-12 h-12 text-[var(--accent-primary)] mx-auto mb-4" />
                  <p className="text-[var(--text-secondary)]">Interactive map coming soon</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={fadeInUp}>
              <h2 className="font-heading text-3xl font-bold mb-8 text-[var(--accent-primary)]">
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg focus:ring-2 focus:ring-[var(--accent-primary)] focus:border-transparent transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg focus:ring-2 focus:ring-[var(--accent-primary)] focus:border-transparent transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg focus:ring-2 focus:ring-[var(--accent-primary)] focus:border-transparent transition-all duration-200"
                      placeholder="(208) 555-0123"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg focus:ring-2 focus:ring-[var(--accent-primary)] focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select a subject</option>
                      <option value="membership">Membership Inquiry</option>
                      <option value="events">Events & Competitions</option>
                      <option value="training">Training Programs</option>
                      <option value="facilities">Facility Information</option>
                      <option value="general">General Question</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg focus:ring-2 focus:ring-[var(--accent-primary)] focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-8 bg-[var(--accent-primary)] text-black font-heading font-bold rounded-lg hover:bg-[var(--accent-hover)] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400"
                  >
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400"
                  >
                    Sorry, there was an error sending your message. Please try again.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactPage;
