'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

// Environment-based password - more secure
const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'boise2025';

// Rate limiting for login attempts
const MAX_LOGIN_ATTEMPTS = 5;
const LOCKOUT_DURATION = 15 * 60 * 1000; // 15 minutes
const loginAttempts = new Map<string, { count: number; lockoutUntil?: number }>();

const getClientId = () => {
  // Simple client fingerprinting for rate limiting
  return `${navigator.userAgent}_${window.screen.width}x${window.screen.height}`;
};

interface ContentData {
  events: Array<{
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
  }>;
  clubInfo: {
    name: string;
    founded: string;
    members: string;
    acres: string;
    address: string;
    phone: string;
    email: string;
  };
  hours: {
    weekdays: string;
    weekends: string;
    holidays: string;
  };
  gallery: Array<{
    id: number;
    title: string;
    image: string;
    year: string;
  }>;
}

const AdminPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  const [content, setContent] = useState<ContentData | null>(null);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');

  // Load content on mount
  useEffect(() => {
    fetchContent();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchContent = async () => {
    try {
      const response = await fetch('/api/content');
      if (response.ok) {
        const data = await response.json();
        setContent(data);
      } else {
        // Fallback to default content
        loadDefaultContent();
      }
    } catch (error) {
      console.error('Error fetching content:', error);
      loadDefaultContent();
    }
  };

  const loadDefaultContent = () => {
    const defaultContent: ContentData = {
      events: [
        {
          id: 1,
          title: "Winter Shoot Championship",
          date: "2025-12-15",
          time: "9:00 AM",
          location: "Main Range",
          description: "Annual winter championship competition"
        },
        {
          id: 2,
          title: "Monthly Club Meeting",
          date: "2026-01-03",
          time: "7:00 PM",
          location: "Clubhouse",
          description: "Monthly member meeting and updates"
        }
      ],
      clubInfo: {
        name: "Boise Gun Club",
        founded: "1898",
        members: "1200+",
        acres: "320",
        address: "123 Gun Club Road, Boise, ID 83702",
        phone: "(208) 555-0123",
        email: "info@boisegunclub.com"
      },
      hours: {
        weekdays: "Monday - Friday: 9:00 AM - 6:00 PM",
        weekends: "Saturday - Sunday: 8:00 AM - 8:00 PM",
        holidays: "Closed on major holidays"
      },
      gallery: [
        {
          id: 1,
          title: "Championship Winner 1978",
          image: "/images/clay1.jpg",
          year: "1978"
        },
        {
          id: 2,
          title: "Main Range",
          image: "/images/range1.jpg",
          year: "2023"
        }
      ]
    };
    setContent(defaultContent);
  };
  const [isLockedOut, setIsLockedOut] = useState(false);
  const [lockoutTimeRemaining, setLockoutTimeRemaining] = useState(0);

  // Check for existing lockout on mount
  useEffect(() => {
    checkLockoutStatus();
    const interval = setInterval(() => {
      if (isLockedOut && lockoutTimeRemaining > 0) {
        setLockoutTimeRemaining(prev => {
          if (prev <= 1) {
            setIsLockedOut(false);
            return 0;
          }
          return prev - 1;
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isLockedOut, lockoutTimeRemaining]);

  const checkLockoutStatus = () => {
    const clientId = getClientId();
    const attempts = loginAttempts.get(clientId);
    if (attempts?.lockoutUntil && Date.now() < attempts.lockoutUntil) {
      setIsLockedOut(true);
      setLockoutTimeRemaining(Math.ceil((attempts.lockoutUntil - Date.now()) / 1000));
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    const clientId = getClientId();
    const attempts = loginAttempts.get(clientId) || { count: 0 };
    
    // Check if locked out
    if (attempts.lockoutUntil && Date.now() < attempts.lockoutUntil) {
      setIsLockedOut(true);
      setLockoutTimeRemaining(Math.ceil((attempts.lockoutUntil - Date.now()) / 1000));
      return;
    }

    // Sanitize password input
    const cleanPassword = password.trim();
    
    if (cleanPassword === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
      // Reset attempts on successful login
      loginAttempts.delete(clientId);
    } else {
      // Increment failed attempts
      attempts.count++;
      
      if (attempts.count >= MAX_LOGIN_ATTEMPTS) {
        attempts.lockoutUntil = Date.now() + LOCKOUT_DURATION;
        setIsLockedOut(true);
        setLockoutTimeRemaining(LOCKOUT_DURATION / 1000);
        alert(`❌ Too many failed attempts. Account locked for ${LOCKOUT_DURATION / 60000} minutes.`);
      } else {
        alert(`❌ Wrong password! ${MAX_LOGIN_ATTEMPTS - attempts.count} attempts remaining.`);
      }
      
      loginAttempts.set(clientId, attempts);
    }
    
    setPassword(''); // Clear password field
  };

  const handleSave = async () => {
    if (!content) return;
    
    setSaveStatus('saving');
    try {
      const response = await fetch('/api/content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(content),
      });
      
      if (response.ok) {
        setSaveStatus('saved');
        setTimeout(() => setSaveStatus('idle'), 2000);
      } else {
        setSaveStatus('error');
        setTimeout(() => setSaveStatus('idle'), 3000);
      }
    } catch (error) {
      console.error('Error saving content:', error);
      setSaveStatus('error');
      setTimeout(() => setSaveStatus('idle'), 3000);
    }
  };

  const updateEvent = (index: number, field: keyof ContentData['events'][0], value: string) => {
    if (!content) return;
    const newContent = { ...content };
    newContent.events[index][field] = value as never;
    setContent(newContent);
  };

  const addEvent = () => {
    if (!content) return;
    const newEvent = {
      id: Date.now(),
      title: "New Event",
      date: "2025-06-01",
      time: "10:00 AM",
      location: "Main Range",
      description: "Event description"
    };
    setContent({
      ...content,
      events: [...content.events, newEvent]
    });
  };

  const deleteEvent = (index: number) => {
    if (!content) return;
    if (confirm('❓ Are you sure you want to delete this event?')) {
      const newEvents = content.events.filter((_, i) => i !== index);
      setContent({
        ...content,
        events: newEvents
      });
    }
  };

  const updateClubInfo = (field: string, value: string) => {
    if (!content) return;
    setContent({
      ...content,
      clubInfo: {
        ...content.clubInfo,
        [field]: value
      }
    });
  };

  const updateHours = (field: string, value: string) => {
    if (!content) return;
    setContent({
      ...content,
      hours: {
        ...content.hours,
        [field]: value
      }
    });
  };

  const updateGalleryItem = (index: number, field: keyof ContentData['gallery'][0], value: string) => {
    if (!content) return;
    const newContent = { ...content };
    newContent.gallery[index][field] = value as never;
    setContent(newContent);
  };

  const addGalleryItem = () => {
    if (!content) return;
    const newItem = {
      id: Date.now(),
      title: "New Photo",
      image: "/images/clay1.jpg",
      year: "2025"
    };
    setContent({
      ...content,
      gallery: [...content.gallery, newItem]
    });
  };

  const deleteGalleryItem = (index: number) => {
    if (!content) return;
    if (confirm('❓ Are you sure you want to delete this photo?')) {
      const newGallery = content.gallery.filter((_, i) => i !== index);
      setContent({
        ...content,
        gallery: newGallery
      });
    }
  };

  // Login Screen
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center p-4 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/5 to-[var(--accent-secondary)]/5" />
        <div className="absolute inset-0 bg-[url('/images/Smoke/Background_03.webp')] bg-cover bg-center opacity-10" />
        
        <motion.div 
          className="glass-premium rounded-3xl p-12 max-w-md w-full text-center relative z-10 border border-[var(--glass-border)]"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-[var(--accent-gold)] mb-8 font-heading">🎯</h1>
          <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-8 font-heading uppercase tracking-wide">
            BOISE GUN CLUB<br />WEBSITE EDITOR
          </h2>
            <form onSubmit={handleLogin} className="mb-6">
            <label className="block text-lg font-semibold text-[var(--text-secondary)] mb-3 font-body">
              Enter Password:
            </label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLockedOut}
              className="text-xl text-center disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder={isLockedOut ? `Locked out (${lockoutTimeRemaining}s)` : "Password"}
              required
              autoComplete="current-password"
            />
          </form>
          
          <Button
            onClick={(e) => {
              e.preventDefault();
              handleLogin(e);
            }}
            disabled={isLockedOut}
            className="w-full text-xl py-4"
            size="lg"
          >
            {isLockedOut ? `🔒 LOCKED (${lockoutTimeRemaining}s)` : '🔓 LOGIN'}
          </Button>
          
          <p className="text-sm text-[var(--text-tertiary)] mt-6 font-body">
            Need help? Call the web developer
          </p>
        </motion.div>
      </div>
    );
  }

  // Main Admin Interface
  if (!currentSection) {
    return (
      <div className="min-h-screen bg-[var(--bg-primary)] p-8 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/5 to-[var(--accent-secondary)]/5" />
        <div className="absolute inset-0 bg-[url('/images/Grid/Grid (1).webp')] bg-cover bg-center opacity-10" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-12"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <h1 className="text-5xl font-bold text-[var(--accent-gold)] mb-4 font-heading uppercase tracking-wide">🎯 WEBSITE EDITOR</h1>
            <p className="text-xl text-[var(--text-secondary)] font-body">Choose what you want to edit:</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              { icon: '📅', title: 'EDIT EVENTS', desc: 'Add or change upcoming events', section: 'events' },
              { icon: '📞', title: 'EDIT CONTACT INFO', desc: 'Change phone, address, hours', section: 'contact' },
              { icon: '📸', title: 'EDIT GALLERY', desc: 'Add or remove photos', section: 'gallery' },
              { icon: 'ℹ️', title: 'EDIT CLUB INFO', desc: 'Change basic club information', section: 'info' }
            ].map((item, index) => (
              <motion.button
                key={item.section}
                onClick={() => setCurrentSection(item.section)}
                className="glass-premium rounded-2xl p-8 text-center hover:scale-[1.02] transition-all duration-300 border border-[var(--glass-border)] group"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/10 to-[var(--accent-secondary)]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="text-6xl mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2 font-heading uppercase tracking-wide">{item.title}</h3>
                  <p className="text-[var(--text-secondary)] font-body">{item.desc}</p>
                </div>
              </motion.button>
            ))}
          </div>

          <div className="text-center">
            <Button
              onClick={() => setIsLoggedIn(false)}
              variant="destructive"
              size="lg"
            >
              🚪 LOGOUT
            </Button>
          </div>
        </div>
      </div>
    );
  }
  // Events Editor
  if (currentSection === 'events' && content) {
    return (
      <div className="min-h-screen bg-[var(--bg-primary)] p-8 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/5 to-[var(--accent-secondary)]/5" />
        <div className="absolute inset-0 bg-[url('/images/Grid/Grid (1).webp')] bg-cover bg-center opacity-10" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold text-[var(--accent-gold)] font-heading uppercase tracking-wide">📅 EDIT EVENTS</h1>
            <Button
              onClick={() => setCurrentSection(null)}
              variant="outline"
            >
              ← BACK
            </Button>
          </div>          <div className="space-y-6 mb-8">
            {content.events.map((event, index) => (              <div key={event.id} className="glass-premium rounded-xl p-6 border border-[var(--glass-border)]">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-[var(--accent-gold)] font-heading uppercase tracking-wide">{event.title || `Event ${index + 1}`}</h3>
                  <Button
                    onClick={() => deleteEvent(index)}
                    variant="destructive"
                  >
                    🗑️ DELETE
                  </Button>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-lg font-semibold mb-2 text-[var(--accent-primary)] font-body">Event Name:</label>
                    <Input
                      type="text"
                      value={event.title}
                      onChange={(e) => updateEvent(index, 'title', e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-lg font-semibold mb-2 text-[var(--accent-primary)] font-body">Date:</label>
                    <Input
                      type="date"
                      value={event.date}
                      onChange={(e) => updateEvent(index, 'date', e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-lg font-semibold mb-2 text-[var(--accent-primary)] font-body">Time:</label>
                    <Input
                      type="text"
                      value={event.time}
                      onChange={(e) => updateEvent(index, 'time', e.target.value)}
                      placeholder="9:00 AM"
                    />
                  </div>
                    <div>
                    <label className="block text-lg font-semibold mb-2 text-[var(--accent-primary)] font-body">Location:</label>
                    <Input
                      type="text"
                      value={event.location}
                      onChange={(e) => updateEvent(index, 'location', e.target.value)}
                      placeholder="Trap Fields 1-5"
                    />
                  </div>
                </div>
                
                <div className="col-span-2 mt-4">
                  <label className="block text-lg font-semibold mb-2 text-[var(--accent-primary)] font-body">Description:</label>
                  <Textarea
                    value={event.description}
                    onChange={(e) => updateEvent(index, 'description', e.target.value)}
                    rows={3}
                    placeholder="Event description..."
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-4 justify-center">
            <Button
              onClick={addEvent}
              variant="outline"
              className="border-green-500/30 text-green-400 hover:bg-green-500/10 hover:text-green-300"
            >
              ➕ ADD NEW EVENT
            </Button>
            
            <Button
              onClick={handleSave}
              disabled={saveStatus === 'saving'}
            >
              {saveStatus === 'saving' ? '💾 SAVING...' : 
               saveStatus === 'saved' ? '✅ SAVED!' : '💾 SAVE CHANGES'}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Contact Info Editor
  if (currentSection === 'contact' && content) {
    return (
      <div className="min-h-screen bg-[var(--bg-primary)] p-8 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/5 to-[var(--accent-secondary)]/5" />
        <div className="absolute inset-0 bg-[url('/images/Grid/Grid (1).webp')] bg-cover bg-center opacity-10" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold text-[var(--accent-gold)] font-heading uppercase tracking-wide">📞 EDIT CONTACT INFO</h1>
            <Button
              onClick={() => setCurrentSection(null)}
              variant="outline"
            >
              ← BACK
            </Button>
          </div>

          <div className="space-y-6 mb-8">
            {/* Club Information Section */}
            <div className="glass-premium rounded-xl p-6 border border-[var(--glass-border)]">
              <h3 className="text-2xl font-bold text-[var(--accent-gold)] mb-4 font-heading uppercase tracking-wide">📍 Club Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-lg font-semibold mb-2 text-[var(--accent-primary)] font-body">Club Name:</label>                  <Input
                    type="text"
                    value={content.clubInfo.name}
                    onChange={(e) => updateClubInfo('name', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-lg font-semibold mb-2 text-[var(--accent-primary)] font-body">Founded Year:</label>
                  <Input
                    type="text"
                    value={content.clubInfo.founded}
                    onChange={(e) => updateClubInfo('founded', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-lg font-semibold mb-2 text-[var(--accent-primary)] font-body">Number of Members:</label>
                  <Input
                    type="text"
                    value={content.clubInfo.members}
                    onChange={(e) => updateClubInfo('members', e.target.value)}
                    placeholder="1200+"
                  />
                </div>
                <div>
                  <label className="block text-lg font-semibold mb-2 text-[var(--accent-primary)] font-body">Property Size (acres):</label>
                  <Input
                    type="text"
                    value={content.clubInfo.acres}
                    onChange={(e) => updateClubInfo('acres', e.target.value)}
                    placeholder="320"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-lg font-semibold mb-2 text-[var(--accent-primary)] font-body">Address:</label>
                  <Input
                    type="text"
                    value={content.clubInfo.address}
                    onChange={(e) => updateClubInfo('address', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-lg font-semibold mb-2 text-[var(--accent-primary)] font-body">Phone Number:</label>
                  <Input
                    type="text"
                    value={content.clubInfo.phone}
                    onChange={(e) => updateClubInfo('phone', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-lg font-semibold mb-2 text-[var(--accent-primary)] font-body">Email Address:</label>
                  <Input
                    type="email"
                    value={content.clubInfo.email}
                    onChange={(e) => updateClubInfo('email', e.target.value)}
                  />
                </div>
              </div>
            </div>            {/* Hours Section */}
            <div className="glass-premium rounded-xl p-6 border border-[var(--glass-border)]">
              <h3 className="text-2xl font-bold text-[var(--accent-gold)] mb-4 font-heading uppercase tracking-wide">🕒 Operating Hours</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-lg font-semibold mb-2 text-[var(--accent-primary)] font-body">Weekdays:</label>
                  <Input
                    type="text"
                    value={content.hours.weekdays}
                    onChange={(e) => updateHours('weekdays', e.target.value)}
                    placeholder="Monday - Friday: 9:00 AM - 6:00 PM"
                  />
                </div>
                <div>
                  <label className="block text-lg font-semibold mb-2 text-[var(--accent-primary)] font-body">Weekends:</label>
                  <Input
                    type="text"
                    value={content.hours.weekends}
                    onChange={(e) => updateHours('weekends', e.target.value)}
                    placeholder="Saturday - Sunday: 8:00 AM - 8:00 PM"
                  />
                </div>
                <div>
                  <label className="block text-lg font-semibold mb-2 text-[var(--accent-primary)] font-body">Holidays:</label>
                  <Input
                    type="text"
                    value={content.hours.holidays}
                    onChange={(e) => updateHours('holidays', e.target.value)}
                    placeholder="Closed on major holidays"
                  />                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              onClick={handleSave}
              disabled={saveStatus === 'saving'}
              size="lg"
            >
              {saveStatus === 'saving' ? '💾 SAVING...' : 
               saveStatus === 'saved' ? '✅ SAVED!' : '💾 SAVE CHANGES'}
            </Button>
          </div>
        </div>
      </div>
    );
  }
  // Gallery Editor
  if (currentSection === 'gallery' && content) {
    return (
      <div className="min-h-screen bg-[var(--bg-primary)] p-8 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/5 to-[var(--accent-secondary)]/5" />
        <div className="absolute inset-0 bg-[url('/images/Smoke/Background_03.webp')] bg-cover bg-center opacity-10" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold text-[var(--accent-gold)] font-heading uppercase tracking-wide">📸 EDIT GALLERY</h1>
            <Button
              onClick={() => setCurrentSection(null)}
              variant="outline"
            >
              ← BACK
            </Button>
          </div>

          <div className="glass-premium rounded-xl p-4 mb-6 border border-[var(--accent-primary)]/30 bg-[var(--accent-primary)]/10">
            <p className="text-lg font-semibold text-[var(--accent-primary)] font-body">
              📝 NOTE: To add new images, you&apos;ll need to upload them to the /public/images/ folder first, 
              then use the file path like: /images/your-photo.jpg
            </p>
          </div>

          <div className="space-y-6 mb-8">
            {content.gallery.map((item, index) => (
              <div key={item.id} className="glass-premium rounded-xl p-6 border border-[var(--glass-border)]">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-[var(--accent-gold)] font-heading uppercase tracking-wide">{item.title || `Photo ${index + 1}`}</h3>
                  <Button
                    onClick={() => deleteGalleryItem(index)}
                    variant="destructive"
                  >
                    🗑️ DELETE
                  </Button>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-lg font-semibold mb-2 text-[var(--accent-primary)] font-body">Photo Title:</label>
                    <Input
                      type="text"
                      value={item.title}                      onChange={(e) => updateGalleryItem(index, 'title', e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-lg font-semibold mb-2 text-[var(--accent-primary)] font-body">Year:</label>
                    <Input
                      type="text"
                      value={item.year}
                      onChange={(e) => updateGalleryItem(index, 'year', e.target.value)}
                      placeholder="2025"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-lg font-semibold mb-2 text-[var(--accent-primary)] font-body">Image Path:</label>
                    <Input
                      type="text"
                      value={item.image}
                      onChange={(e) => updateGalleryItem(index, 'image', e.target.value)}
                      placeholder="/images/your-photo.jpg"
                    />
                  </div>
                </div>

                {/* Image Preview */}
                <div className="mt-4">
                  <p className="text-sm font-semibold text-[var(--text-secondary)] mb-2 font-body">Preview:</p>
                  <div className="w-32 h-24 border-2 border-[var(--glass-border)] rounded-lg overflow-hidden glass-premium">
                    <Image 
                      src={item.image} 
                      alt={item.title}
                      width={128}
                      height={96}
                      className="w-full h-full object-cover"
                      onError={() => {
                        // Fallback handled by Next.js Image component
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>          <div className="flex gap-4 justify-center">
            <Button
              onClick={addGalleryItem}
              variant="outline"
            >
              ➕ ADD NEW PHOTO
            </Button>
            
            <Button
              onClick={handleSave}
              disabled={saveStatus === 'saving'}
            >
              {saveStatus === 'saving' ? '💾 SAVING...' : 
               saveStatus === 'saved' ? '✅ SAVED!' : '💾 SAVE CHANGES'}
            </Button>
          </div>
        </div>
      </div>
    );
  }
  // Club Info Editor
  if (currentSection === 'info' && content) {
    return (
      <div className="min-h-screen bg-[var(--bg-primary)] p-8 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/5 to-[var(--accent-secondary)]/5" />
        <div className="absolute inset-0 bg-[url('/images/Smoke/Background_03.webp')] bg-cover bg-center opacity-10" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold text-[var(--accent-gold)] font-heading uppercase tracking-wide">ℹ️ EDIT CLUB INFO</h1>
            <Button
              onClick={() => setCurrentSection(null)}
              variant="outline"
            >
              ← BACK
            </Button>
          </div>

          <div className="glass-premium rounded-xl p-6 mb-8 border border-[var(--glass-border)]">
            <h3 className="text-2xl font-bold text-[var(--accent-gold)] mb-6 font-heading uppercase tracking-wide">🏛️ Basic Club Information</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-lg font-semibold mb-2 text-[var(--accent-primary)] font-body">Club Name:</label>
                <Input
                  type="text"
                  value={content.clubInfo.name}
                  onChange={(e) => updateClubInfo('name', e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-lg font-semibold mb-2 text-[var(--accent-primary)] font-body">Founded Year:</label>                <Input
                  type="text"
                  value={content.clubInfo.founded}
                  onChange={(e) => updateClubInfo('founded', e.target.value)}
                  placeholder="1898"
                />
              </div>
              
              <div>
                <label className="block text-lg font-semibold mb-2 text-[var(--accent-primary)] font-body">Number of Members:</label>
                <Input
                  type="text"
                  value={content.clubInfo.members}
                  onChange={(e) => updateClubInfo('members', e.target.value)}
                  placeholder="1200+"
                />
              </div>
              
              <div>
                <label className="block text-lg font-semibold mb-2 text-[var(--accent-primary)] font-body">Property Size (acres):</label>
                <Input
                  type="text"
                  value={content.clubInfo.acres}
                  onChange={(e) => updateClubInfo('acres', e.target.value)}
                  placeholder="320"
                />
              </div>
            </div>
            
            <div className="mt-6 p-4 glass-premium rounded-lg border border-[var(--accent-primary)]/30 bg-[var(--accent-primary)]/10">
              <h4 className="text-lg font-semibold text-[var(--accent-primary)] mb-2 font-body">📊 Current Stats Display:</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="glass-premium p-3 rounded border border-[var(--glass-border)]">
                  <div className="text-2xl font-bold text-[var(--accent-gold)] font-heading">{content.clubInfo.founded}</div>
                  <div className="text-sm text-[var(--text-secondary)] font-body">Founded</div>
                </div>
                <div className="glass-premium p-3 rounded border border-[var(--glass-border)]">
                  <div className="text-2xl font-bold text-[var(--accent-gold)] font-heading">{content.clubInfo.members}</div>
                  <div className="text-sm text-[var(--text-secondary)] font-body">Members</div>
                </div>
                <div className="glass-premium p-3 rounded border border-[var(--glass-border)]">
                  <div className="text-2xl font-bold text-[var(--accent-gold)] font-heading">{content.clubInfo.acres}</div>
                  <div className="text-sm text-[var(--text-secondary)] font-body">Acres</div>
                </div>                <div className="glass-premium p-3 rounded border border-[var(--glass-border)]">
                  <div className="text-2xl font-bold text-[var(--accent-gold)] font-heading">Idaho</div>
                  <div className="text-sm text-[var(--text-secondary)] font-body">State</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              onClick={handleSave}
              disabled={saveStatus === 'saving'}
              size="lg"
            >
              {saveStatus === 'saving' ? '💾 SAVING...' : 
               saveStatus === 'saved' ? '✅ SAVED!' : '💾 SAVE CHANGES'}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8 text-[var(--text-primary)] font-heading">🚧 Coming Soon</h1>
        <p className="text-xl text-[var(--text-secondary)] mb-8 font-body">This section is being built!</p>
        <Button
          onClick={() => setCurrentSection(null)}
          variant="outline"
        >
          ← BACK TO MAIN MENU
        </Button>
      </div>
    </div>
  );
};

export default AdminPage;
