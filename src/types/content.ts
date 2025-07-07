// Comprehensive Content Data Structure Interfaces

export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: 'competition' | 'training' | 'social' | 'maintenance' | 'meeting' | 'fun shoot' | 'family';
  attendees?: number;
  isFeatured?: boolean;
  registrationOpen?: boolean;
  detailsLink?: string;
  image?: string;
}

export interface Announcement {
  id: string;
  title: string;
  date: string;
  category: string;
  priority: 'high' | 'medium' | 'low';
  content: string;
  expires: string;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

export interface AboutContent {
  title: string;
  description: string;
  stats: {
    founded: string;
    members: string;
    acres: string;
    disciplines: string;
  };
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  hours: {
    weekday: string;
    weekend: string;
  };
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Facility {
  id: number;
  name: string;
  description: string;
  features: string[];
  image: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  image: string;
  year: string;
}

export interface ClubInfo {
  name: string;
  founded: string;
  members: string;
  acres: string;
  address: string;
  phone: string;
  email: string;
}

export interface Hours {
  weekdays: string;
  weekends: string;
  holidays: string;
}

// Main ContentData type for the entire site
export interface ContentData {
  hero: HeroContent;
  about: AboutContent;
  events: Event[];
  announcements: Announcement[];
  contact: ContactInfo;
  team: TeamMember[];
  facilities: Facility[];
  gallery: GalleryItem[];
  clubInfo: ClubInfo;
  hours: Hours;
  lastUpdated: string;
}

// API Response types
export interface ContentApiResponse {
  data?: ContentData;
  error?: string;
  details?: string;
}

export interface SaveContentResponse {
  success: boolean;
  message?: string;
  error?: string;
  details?: string;
}

// Component prop types
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'destructive' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  asChild?: boolean;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'solid';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export interface AnimatedCardProps extends CardProps {
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
}

// Theme types
export type ThemeSetting = 'light' | 'dark' | 'system';

// Navigation types
export interface NavigationItem {
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  external?: boolean;
  children?: NavigationItem[];
}

// Form types
export interface FormFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
  className?: string;
}

// Animation types
export interface AnimationConfig {
  duration?: number;
  delay?: number;
  easing?: string;
  repeat?: boolean;
  direction?: 'normal' | 'reverse' | 'alternate';
}