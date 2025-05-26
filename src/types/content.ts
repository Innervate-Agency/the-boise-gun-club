// Content data structure interfaces

export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

export interface Announcement {
  id: number;
  text: string;
  active: boolean;
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

export interface ContentData {
  hero: HeroContent;
  about: AboutContent;
  events: Event[];
  announcements: Announcement[];
  contact: ContactInfo;
  team: TeamMember[];
  facilities: Facility[];
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

// Gallery types for admin panel compatibility
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

// Extended content data for admin panel
export interface AdminContentData {
  events: Event[];
  clubInfo: ClubInfo;
  hours: Hours;
  gallery: GalleryItem[];
  lastUpdated: string;
}

// Component prop types
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
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
export type EffectiveTheme = 'light' | 'dark';

export interface ThemeContextType {
  themeSetting: ThemeSetting;
  effectiveTheme: EffectiveTheme;
  setTheme: (theme: ThemeSetting) => void;
}

// Navigation types
export interface NavigationItem {
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  external?: boolean;
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