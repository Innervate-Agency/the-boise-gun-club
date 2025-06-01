'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { CalendarIcon, UserGroupIcon, ChatBubbleLeftRightIcon, ClockIcon, MapPinIcon, UserIcon } from '@heroicons/react/24/outline';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    {
      title: 'Club Schedule',
      icon: CalendarIcon,
      items: [
        { label: 'Weekly Shoot Schedule', href: '/schedule/weekly', description: 'Regular shooting hours and events' },
        { label: 'Competition Calendar', href: '/schedule/competitions', description: 'Upcoming tournaments and matches' },
        { label: 'Training Sessions', href: '/schedule/training', description: 'Instructor-led courses' },
        { label: 'Range Reservations', href: '/schedule/reservations', description: 'Book your shooting time' }
      ]
    },
    {
      title: 'Quick Access',
      icon: ClockIcon,
      items: [
        { label: 'Range Status', href: '/ranges/status', description: 'Live range availability' },
        { label: 'Weather Conditions', href: '/weather', description: 'Current shooting conditions' },
        { label: 'Club Rules', href: '/rules', description: 'Safety and facility guidelines' },
        { label: 'Emergency Info', href: '/emergency', description: 'Important contact numbers' }
      ]
    },
    {
      title: 'Member Services',
      icon: UserGroupIcon,
      items: [
        { label: 'Member Portal', href: '/members/portal', description: 'Access your account' },
        { label: 'Payment Center', href: '/members/billing', description: 'Dues and fee payments' },
        { label: 'Member Directory', href: '/members/directory', description: 'Connect with fellow members' },
        { label: 'Volunteer Opportunities', href: '/members/volunteer', description: 'Help support the club' }
      ]
    },
    {
      title: 'Community',
      icon: ChatBubbleLeftRightIcon,
      items: [
        { label: 'Discussion Forum', href: '/forum', description: 'Member discussions and Q&A' },
        { label: 'Buy/Sell/Trade', href: '/forum/marketplace', description: 'Equipment marketplace' },
        { label: 'Match Reports', href: '/forum/matches', description: 'Competition results and stories' },
        { label: 'General Discussion', href: '/forum/general', description: 'Shooting sports chat' }
      ]
    }
  ];

  const adminItems = [
    { label: 'Admin Login', href: '/admin/login', icon: UserIcon, description: 'Staff and officer access' },
    { label: 'Range Officer Portal', href: '/admin/range-officer', icon: MapPinIcon, description: 'Range management tools' }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Mega Menu Content */}
          <motion.div
            className="absolute top-full left-0 right-0 bg-[var(--bg-primary)]/95 backdrop-blur-md border-t border-[var(--accent-primary)]/20 shadow-2xl z-50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="max-w-7xl mx-auto px-6 py-8">
              {/* Main Menu Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                {menuItems.map((section, index) => (
                  <div key={index} className="space-y-4">
                    <div className="flex items-center space-x-2 mb-4">
                      <section.icon className="w-5 h-5 text-[var(--accent-primary)]" />
                      <h3 className="font-heading text-lg text-[var(--text-primary)] font-semibold">
                        {section.title}
                      </h3>
                    </div>
                    
                    <ul className="space-y-3">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <Link
                            href={item.href}
                            className="block group"
                            onClick={onClose}
                          >
                            <motion.div
                              className="p-3 rounded-lg hover:bg-[var(--accent-primary)]/10 transition-colors"
                              whileHover={{ x: 4 }}
                              transition={{ duration: 0.2 }}
                            >
                              <div className="font-medium text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                                {item.label}
                              </div>
                              <div className="text-sm text-[var(--text-secondary)] mt-1">
                                {item.description}
                              </div>
                            </motion.div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              
              {/* Admin Section */}
              <div className="border-t border-[var(--accent-primary)]/20 pt-6">
                <h3 className="font-heading text-lg text-[var(--text-primary)] font-semibold mb-4">
                  Administrative Access
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {adminItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="block group"
                      onClick={onClose}
                    >
                      <motion.div
                        className="flex items-center space-x-3 p-4 rounded-lg bg-[var(--bg-secondary)]/30 hover:bg-[var(--accent-primary)]/10 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <item.icon className="w-6 h-6 text-[var(--accent-primary)]" />
                        <div>
                          <div className="font-medium text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                            {item.label}
                          </div>
                          <div className="text-sm text-[var(--text-secondary)]">
                            {item.description}
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Quick Info Footer */}
              <div className="border-t border-[var(--accent-primary)]/20 pt-6 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="font-heading text-[var(--accent-primary)] font-semibold">Range Hours</div>
                    <div className="text-sm text-[var(--text-secondary)] mt-1">
                      Mon-Fri: 9AM-6PM<br />
                      Sat-Sun: 8AM-8PM
                    </div>
                  </div>
                  <div>
                    <div className="font-heading text-[var(--accent-primary)] font-semibold">Contact</div>
                    <div className="text-sm text-[var(--text-secondary)] mt-1">
                      (208) 555-0123<br />
                      info@boisegunclub.com
                    </div>
                  </div>
                  <div>
                    <div className="font-heading text-[var(--accent-primary)] font-semibold">Location</div>
                    <div className="text-sm text-[var(--text-secondary)] mt-1">
                      123 Gun Club Road<br />
                      Boise, ID 83702
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MegaMenu;
