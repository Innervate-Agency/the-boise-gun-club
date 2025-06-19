'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  ChevronRight, 
  Home, 
  Target, 
  Calendar, 
  Users, 
  Trophy,
  Settings,
  Search,
  Mic,
  MicOff,
  MapPin,
  Compass,
  Navigation,
  ArrowLeft,
  ArrowRight,
  Grid3X3,
  List,
  Layers,
  Bookmark,
  Star,
  Clock,
  Filter,
  SortAsc,
  Eye,
  Globe,
  Smartphone
} from 'lucide-react';

// Navigation data
const navigationItems = [
  {
    id: 'ranges',
    label: 'Shooting Ranges',
    icon: Target,
    href: '/ranges',
    description: 'Explore our world-class shooting facilities',
    featured: true,
    submenu: [
      { label: 'Trap Range', href: '/ranges/trap', description: 'Olympic-standard trap shooting' },
      { label: 'Skeet Range', href: '/ranges/skeet', description: 'Professional skeet courses' },
      { label: 'Sporting Clays', href: '/ranges/sporting-clays', description: 'Challenging clay courses' },
      { label: 'Sporting Clays', href: '/ranges/sporting-clays', description: 'Challenging field course' }
    ]
  },
  {
    id: 'events',
    label: 'Events & Competitions',
    icon: Calendar,
    href: '/events',
    description: 'Join our exciting competitions and events',
    featured: true,
    submenu: [
      { label: 'Upcoming Events', href: '/events/upcoming', description: 'See what\'s coming up' },
      { label: 'Competitions', href: '/events/competitions', description: 'Competitive tournaments' },
      { label: 'Training Sessions', href: '/events/training', description: 'Skill development' },
      { label: 'Social Events', href: '/events/social', description: 'Community gatherings' }
    ]
  },
  {
    id: 'membership',
    label: 'Membership',
    icon: Users,
    href: '/membership',
    description: 'Join our shooting community',
    featured: false,
    submenu: [
      { label: 'Membership Plans', href: '/membership/plans', description: 'Choose your membership' },
      { label: 'Benefits', href: '/membership/benefits', description: 'Member advantages' },
      { label: 'Application', href: '/membership/apply', description: 'Join today' }
    ]
  },
  {
    id: 'leaderboard',
    label: 'Leaderboard',
    icon: Trophy,
    href: '/leaderboard',
    description: 'See top performers',
    featured: false,
    submenu: []
  }
];

const breadcrumbData = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Ranges', href: '/ranges', icon: Target },
  { label: 'Trap Range', href: '/ranges/trap', icon: null },
  { label: 'Schedule', href: '/ranges/trap/schedule', icon: null }
];

// Advanced Navigation Components
const MegaMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          />
          
          {/* Mega Menu */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white dark:bg-slate-800 shadow-2xl border-t border-slate-200 dark:border-slate-700 z-50"
          >
            <div className="max-w-7xl mx-auto p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Featured Section */}
                <div className="md:col-span-1">
                  <h3 className="text-lg font-heading font-bold text-slate-900 dark:text-white mb-4">
                    Featured
                  </h3>
                  <div className="space-y-4">
                    {navigationItems.filter(item => item.featured).map((item) => {
                      const IconComponent = item.icon;
                      return (
                        <motion.div
                          key={item.id}
                          whileHover={{ x: 4 }}
                          className="group p-4 rounded-xl bg-gradient-to-r from-[var(--accent-primary)]/10 to-transparent border border-[var(--accent-primary)]/20 cursor-pointer"
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <IconComponent className="h-5 w-5 text-[var(--accent-primary)]" />
                            <h4 className="font-semibold text-slate-900 dark:text-white group-hover:text-[var(--accent-primary)] transition-colors">
                              {item.label}
                            </h4>
                          </div>
                          <p className="text-sm text-slate-600 dark:text-slate-300">
                            {item.description}
                          </p>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Navigation Grid */}
                <div className="md:col-span-2">
                  <h3 className="text-lg font-heading font-bold text-slate-900 dark:text-white mb-4">
                    Quick Navigation
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {navigationItems.map((item) => {
                      const IconComponent = item.icon;
                      return (
                        <div key={item.id} className="space-y-3">
                          <div className="flex items-center gap-2">
                            <IconComponent className="h-5 w-5 text-[var(--accent-primary)]" />
                            <h4 className="font-semibold text-slate-900 dark:text-white">
                              {item.label}
                            </h4>
                          </div>
                          <div className="space-y-2">
                            {item.submenu.map((subitem) => (
                              <motion.a
                                key={subitem.href}
                                href={subitem.href}
                                whileHover={{ x: 4 }}
                                className="block p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group"
                              >
                                <div className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-[var(--accent-primary)]">
                                  {subitem.label}
                                </div>
                                <div className="text-xs text-slate-500 dark:text-slate-400">
                                  {subitem.description}
                                </div>
                              </motion.a>
                            ))}
                          </div>
                        </div>
                      );
                    })}
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

const SmartBreadcrumbs = ({ items }: { items: typeof breadcrumbData }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <nav className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-lg border border-slate-200 dark:border-slate-700">
      <div className="flex items-center space-x-2">
        {items.map((item, index) => {
          const IconComponent = item.icon;
          const isLast = index === items.length - 1;
          
          return (
            <div key={item.href} className="flex items-center">
              <motion.a
                href={item.href}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{ scale: 1.05 }}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                  isLast 
                    ? 'text-[var(--accent-primary)] font-semibold bg-[var(--accent-primary)]/10' 
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                {IconComponent && (
                  <IconComponent className="h-4 w-4" />
                )}
                <span className="text-sm font-medium">{item.label}</span>
                
                {/* Hover tooltip */}
                <AnimatePresence>
                  {hoveredIndex === index && !isLast && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full mt-2 px-3 py-2 bg-slate-900 text-white text-xs rounded-lg whitespace-nowrap z-10"
                    >
                      Navigate to {item.label}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.a>
              
              {!isLast && (
                <ChevronRight className="h-4 w-4 text-slate-400 mx-1" />
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
};

const VoiceNavigation = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const toggleListening = () => {
    setIsListening(!isListening);
    if (!isListening) {
      // Simulate voice recognition
      setTimeout(() => {
        setTranscript('Navigate to trap range');
        setSuggestions(['Trap Range', 'Trap Schedule', 'Trap Leaderboard']);
      }, 2000);
    } else {
      setTranscript('');
      setSuggestions([]);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-3 mb-4">
        <Mic className="h-6 w-6 text-[var(--accent-primary)]" />
        <h3 className="text-lg font-heading font-bold text-slate-900 dark:text-white">
          Voice Navigation
        </h3>
      </div>

      <div className="text-center mb-6">
        <motion.button
          onClick={toggleListening}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-20 h-20 rounded-full flex items-center justify-center transition-all ${
            isListening
              ? 'bg-red-500 hover:bg-red-600 text-white animate-pulse'
              : 'bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] text-white'
          }`}
        >
          {isListening ? (
            <MicOff className="h-8 w-8" />
          ) : (
            <Mic className="h-8 w-8" />
          )}
        </motion.button>
        
        <div className="mt-4">
          <div className="text-sm text-slate-500 dark:text-slate-400 mb-2">
            {isListening ? 'Listening...' : 'Click to start voice navigation'}
          </div>
          
          {transcript && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-3 bg-slate-100 dark:bg-slate-700 rounded-lg"
            >
              <div className="text-sm font-medium text-slate-900 dark:text-white">
                "{transcript}"
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {suggestions.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-2"
        >
          <div className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Suggestions:
          </div>
          {suggestions.map((suggestion, index) => (
            <motion.button
              key={suggestion}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 4 }}
              className="w-full text-left p-3 rounded-lg bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors"
            >
              <div className="font-medium text-slate-900 dark:text-white">
                {suggestion}
              </div>
            </motion.button>
          ))}
        </motion.div>
      )}
    </div>
  );
};

const SpatialNavigation = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const gridItems = [
    { id: 1, label: 'Trap Range', icon: Target, color: 'bg-[var(--brand-blue)]' },
    { id: 2, label: 'Skeet Range', icon: Target, color: 'bg-[var(--brand-green)]' },
    { id: 3, label: 'Sporting Clays', icon: Target, color: 'bg-[var(--accent-secondary)]' },
    { id: 4, label: 'Events', icon: Calendar, color: 'bg-[var(--accent-primary)]' },
    { id: 5, label: 'Leaderboard', icon: Trophy, color: 'bg-yellow-500' },
    { id: 6, label: 'Members', icon: Users, color: 'bg-pink-500' },
    { id: 7, label: 'Training', icon: Star, color: 'bg-indigo-500' },
    { id: 8, label: 'Settings', icon: Settings, color: 'bg-gray-500' },
    { id: 9, label: 'Profile', icon: Users, color: 'bg-teal-500' }
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const gridCols = 3;
      const currentRow = Math.floor(selectedIndex / gridCols);
      const currentCol = selectedIndex % gridCols;

      switch (e.key) {
        case 'ArrowUp':
          e.preventDefault();
          if (currentRow > 0) {
            setSelectedIndex(selectedIndex - gridCols);
          }
          break;
        case 'ArrowDown':
          e.preventDefault();
          if (currentRow < Math.floor((gridItems.length - 1) / gridCols)) {
            setSelectedIndex(Math.min(selectedIndex + gridCols, gridItems.length - 1));
          }
          break;
        case 'ArrowLeft':
          e.preventDefault();
          if (currentCol > 0) {
            setSelectedIndex(selectedIndex - 1);
          }
          break;
        case 'ArrowRight':
          e.preventDefault();
          if (currentCol < gridCols - 1 && selectedIndex < gridItems.length - 1) {
            setSelectedIndex(selectedIndex + 1);
          }
          break;
        case 'Enter':
          e.preventDefault();
          // Handle selection
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, gridItems.length]);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-3 mb-6">
        <Compass className="h-6 w-6 text-[var(--accent-primary)]" />
        <h3 className="text-lg font-heading font-bold text-slate-900 dark:text-white">
          Spatial Navigation
        </h3>
        <div className="ml-auto text-xs text-slate-500 dark:text-slate-400">
          Use arrow keys to navigate
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {gridItems.map((item, index) => {
          const IconComponent = item.icon;
          const isSelected = index === selectedIndex;
          
          return (
            <motion.div
              key={item.id}
              onClick={() => setSelectedIndex(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative p-4 rounded-xl cursor-pointer transition-all ${
                isSelected
                  ? 'ring-4 ring-[var(--accent-primary)] ring-opacity-50 shadow-lg'
                  : 'hover:shadow-md'
              } ${item.color} text-white`}
            >
              <div className="text-center">
                <IconComponent className="h-6 w-6 mx-auto mb-2" />
                <div className="text-sm font-medium">{item.label}</div>
              </div>
              
              {isSelected && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-[var(--accent-primary)] rounded-full flex items-center justify-center"
                >
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
        <div className="text-sm text-slate-600 dark:text-slate-300">
          <div className="font-medium mb-2">Keyboard Navigation:</div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div>↑↓ Vertical navigation</div>
            <div>←→ Horizontal navigation</div>
            <div>Enter: Select item</div>
            <div>Tab: Focus navigation</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const tabs = [
    { id: 'overview', label: 'Overview', icon: Grid3X3 },
    { id: 'ranges', label: 'Ranges', icon: Target },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'members', label: 'Members', icon: Users },
    { id: 'stats', label: 'Statistics', icon: Trophy }
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
      {/* Tab Headers */}
      <div className="flex border-b border-slate-200 dark:border-slate-700">
        {tabs.map((tab) => {
          const IconComponent = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 font-medium transition-all relative ${
                activeTab === tab.id
                  ? 'text-[var(--accent-primary)] bg-[var(--accent-primary)]/5'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-700'
              }`}
            >
              <IconComponent className="h-4 w-4" />
              <span className="hidden sm:inline">{tab.label}</span>
              
              {/* Active indicator */}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--accent-primary)]"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-lg font-heading font-bold text-slate-900 dark:text-white mb-3">
              {tabs.find(tab => tab.id === activeTab)?.label} Content
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              This is the content for the {activeTab} tab. In a real implementation, 
              this would contain the specific content and functionality for each section.
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default function NavigationPlayground() {
  const [selectedDemo, setSelectedDemo] = useState('mega-menu');
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  const demos = [
    { id: 'mega-menu', label: 'Mega Menu', icon: Menu },
    { id: 'breadcrumbs', label: 'Smart Breadcrumbs', icon: Navigation },
    { id: 'voice', label: 'Voice Navigation', icon: Mic },
    { id: 'spatial', label: 'Spatial Navigation', icon: Compass },
    { id: 'tabs', label: 'Tab Navigation', icon: Layers }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex justify-center mb-4">
              <Navigation className="h-12 w-12 text-[var(--accent-primary)]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              NAVIGATION SYSTEMS ARSENAL
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Advanced navigation patterns including mega menus, spatial navigation, 
              voice controls, and intelligent breadcrumb systems for superior user experience.
            </p>
          </motion.div>
        </div>

        {/* Demo Mega Menu */}
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => setMegaMenuOpen(!megaMenuOpen)}
              className="mb-4 flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
            >
              <Menu className="h-4 w-4" />
              Demo Mega Menu
            </button>
          </div>
          <MegaMenu isOpen={megaMenuOpen} onClose={() => setMegaMenuOpen(false)} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Demo Selector */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {demos.map((demo) => {
              const IconComponent = demo.icon;
              return (
                <button
                  key={demo.id}
                  onClick={() => setSelectedDemo(demo.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedDemo === demo.id
                      ? 'bg-[var(--accent-primary)] text-white shadow-lg'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <IconComponent className="h-4 w-4" />
                  {demo.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Demo Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedDemo}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            {selectedDemo === 'breadcrumbs' && (
              <SmartBreadcrumbs items={breadcrumbData} />
            )}

            {selectedDemo === 'voice' && (
              <VoiceNavigation />
            )}

            {selectedDemo === 'spatial' && (
              <SpatialNavigation />
            )}

            {selectedDemo === 'tabs' && (
              <TabNavigation />
            )}

            {selectedDemo === 'mega-menu' && (
              <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-4">
                  Mega Menu Demo
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Click the "Demo Mega Menu" button in the header above to see the mega menu in action.
                  The mega menu features organized navigation with featured items, descriptions, and hover effects.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Features:</h4>
                    <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-300">
                      <li>• Organized category sections</li>
                      <li>• Featured item highlights</li>
                      <li>• Smooth animations and transitions</li>
                      <li>• Responsive design</li>
                      <li>• Keyboard navigation support</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Use Cases:</h4>
                    <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-300">
                      <li>• E-commerce product categories</li>
                      <li>• Service organization menus</li>
                      <li>• Content management systems</li>
                      <li>• Multi-level navigation structures</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Implementation Guide */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-200 dark:border-slate-700"
        >
          <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-6">
            Navigation Implementation Guide
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                Accessibility Features
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                  <div className="font-medium text-slate-900 dark:text-white">Keyboard Navigation</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Arrow keys, Tab, Enter support</div>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                  <div className="font-medium text-slate-900 dark:text-white">Voice Commands</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Speech recognition integration</div>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                  <div className="font-medium text-slate-900 dark:text-white">Screen Reader Support</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">ARIA labels and semantic HTML</div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                Technical Features
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <div className="w-2 h-2 bg-[var(--brand-green)] rounded-full"></div>
                  Responsive mega menu layouts
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <div className="w-2 h-2 bg-[var(--brand-blue)] rounded-full"></div>
                  Smart breadcrumb generation
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <div className="w-2 h-2 bg-[var(--accent-secondary)] rounded-full"></div>
                  Spatial navigation algorithms
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <div className="w-2 h-2 bg-[var(--accent-primary)] rounded-full"></div>
                  Voice recognition APIs
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  Smooth page transitions
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 