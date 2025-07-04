import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Sanity client configuration
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
  token: process.env.SANITY_API_TOKEN, // Only needed for writes
});

// Image URL builder
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// Content types for type safety
export interface CMSEvent {
  _id: string;
  _type: 'event';
  title: string;
  slug: { current: string };
  description: string;
  date: string;
  endDate?: string;
  location: string;
  category: 'competition' | 'training' | 'social' | 'maintenance';
  registrationRequired: boolean;
  maxParticipants?: number;
  fee?: number;
  image?: {
    asset: {
      _ref: string;
    };
    alt?: string;
  };
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
  organizer: string;
  contactInfo: string;
  rules?: string;
  equipment?: string[];
  publishedAt: string;
  featured: boolean;
}

export interface CMSNews {
  _id: string;
  _type: 'news';
  title: string;
  slug: { current: string };
  excerpt: string;
  content: any[]; // Rich text content
  publishedAt: string;
  author: string;
  category: 'general' | 'safety' | 'competition' | 'facility';
  image?: {
    asset: {
      _ref: string;
    };
    alt?: string;
  };
  featured: boolean;
  tags?: string[];
}

export interface CMSGallery {
  _id: string;
  _type: 'gallery';
  title: string;
  images: {
    asset: {
      _ref: string;
    };
    alt: string;
    caption?: string;
  }[];
  category: 'events' | 'facilities' | 'training' | 'competitions';
  year: number;
  featured: boolean;
  createdAt: string;
}

export interface CMSPage {
  _id: string;
  _type: 'page';
  title: string;
  slug: { current: string };
  content: any[]; // Rich text content
  seoTitle?: string;
  seoDescription?: string;
  publishedAt: string;
  lastModified: string;
}

// Helper functions for fetching content
export async function getEvents(limit = 10): Promise<CMSEvent[]> {
  const query = `*[_type == "event" && publishedAt <= now()] | order(date desc)[0...${limit}] {
    _id,
    _type,
    title,
    slug,
    description,
    date,
    endDate,
    location,
    category,
    registrationRequired,
    maxParticipants,
    fee,
    image,
    status,
    organizer,
    contactInfo,
    rules,
    equipment,
    publishedAt,
    featured
  }`;
  
  return client.fetch(query);
}

export async function getFeaturedEvents(): Promise<CMSEvent[]> {
  const query = `*[_type == "event" && featured == true && publishedAt <= now()] | order(date desc)[0...3] {
    _id,
    _type,
    title,
    slug,
    description,
    date,
    endDate,
    location,
    category,
    registrationRequired,
    maxParticipants,
    fee,
    image,
    status,
    organizer,
    contactInfo,
    rules,
    equipment,
    publishedAt,
    featured
  }`;
  
  return client.fetch(query);
}

export async function getNews(limit = 10): Promise<CMSNews[]> {
  const query = `*[_type == "news" && publishedAt <= now()] | order(publishedAt desc)[0...${limit}] {
    _id,
    _type,
    title,
    slug,
    excerpt,
    content,
    publishedAt,
    author,
    category,
    image,
    featured,
    tags
  }`;
  
  return client.fetch(query);
}

export async function getFeaturedNews(): Promise<CMSNews[]> {
  const query = `*[_type == "news" && featured == true && publishedAt <= now()] | order(publishedAt desc)[0...3] {
    _id,
    _type,
    title,
    slug,
    excerpt,
    content,
    publishedAt,
    author,
    category,
    image,
    featured,
    tags
  }`;
  
  return client.fetch(query);
}

export async function getGalleryItems(category?: string): Promise<CMSGallery[]> {
  const categoryFilter = category ? `&& category == "${category}"` : '';
  const query = `*[_type == "gallery" ${categoryFilter}] | order(createdAt desc) {
    _id,
    _type,
    title,
    images,
    category,
    year,
    featured,
    createdAt
  }`;
  
  return client.fetch(query);
}