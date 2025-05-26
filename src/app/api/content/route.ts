import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { ContentData, ContentApiResponse, SaveContentResponse } from '@/types/content';

// Input validation and sanitization
const sanitizeString = (input: string): string => {
  if (typeof input !== 'string') return '';
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove script tags
    .replace(/javascript:/gi, '') // Remove javascript: protocols
    .replace(/on\w+\s*=/gi, '') // Remove event handlers
    .trim()
    .slice(0, 10000); // Limit length
};

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
};

const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
};

const validateUrl = (url: string): boolean => {
  try {
    new URL(url);
    return url.startsWith('http://') || url.startsWith('https://') || url.startsWith('/');
  } catch {
    return false;
  }
};

// Rate limiting (simple in-memory store)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 10;

const checkRateLimit = (ip: string): boolean => {
  const now = Date.now();
  const userLimit = rateLimitStore.get(ip);
  
  if (!userLimit || now > userLimit.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }
  
  if (userLimit.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }
  
  userLimit.count++;
  return true;
};

const CONTENT_FILE_PATH = path.join(process.cwd(), 'src/data/content.json');

// Custom error handler that doesn't use console in production
const handleError = (error: unknown, context: string) => {
  const errorMessage = error instanceof Error ? error.message : 'Unknown error';
  
  // In development, we might want to see errors
  if (process.env.NODE_ENV === 'development') {
    console.error(`[${context}]`, error);
  }
  
  return errorMessage;
};

export async function GET(): Promise<NextResponse<ContentData | ContentApiResponse>> {
  try {
    const fileContent = fs.readFileSync(CONTENT_FILE_PATH, 'utf8');
    const data: ContentData = JSON.parse(fileContent);
    return NextResponse.json(data);
  } catch (error) {
    const errorMessage = handleError(error, 'GET /api/content');
    return NextResponse.json({ 
      error: 'Failed to read content',
      details: process.env.NODE_ENV === 'development' ? errorMessage : undefined
    }, { status: 500 });
  }
}

export async function POST(request: NextRequest): Promise<NextResponse<SaveContentResponse>> {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    if (!checkRateLimit(ip)) {
      return NextResponse.json({ 
        success: false,
        error: 'Too many requests. Please try again later.' 
      }, { status: 429 });
    }

    // Content-Type validation
    const contentType = request.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      return NextResponse.json({ 
        success: false,
        error: 'Invalid content type. Expected application/json.' 
      }, { status: 400 });
    }

    const rawData = await request.json();
    
    // Input size validation
    const dataSize = JSON.stringify(rawData).length;
    if (dataSize > 1024 * 1024) { // 1MB limit
      return NextResponse.json({ 
        success: false,
        error: 'Content too large. Maximum size is 1MB.' 
      }, { status: 413 });
    }

    // Sanitize and validate the data
    const data: ContentData = {
      ...rawData,
      lastUpdated: new Date().toISOString()
    };

    // Validate and sanitize events
    if (data.events && Array.isArray(data.events)) {
      data.events = data.events.map(event => ({
        ...event,
        title: sanitizeString(event.title || ''),
        description: sanitizeString(event.description || ''),
        location: sanitizeString(event.location || ''),
        time: sanitizeString(event.time || ''),
        date: sanitizeString(event.date || '')
      }));
    }

    // Validate and sanitize contact info
    if (data.contact) {
      data.contact = {
        ...data.contact,
        phone: data.contact.phone ? sanitizeString(data.contact.phone) : '',
        email: data.contact.email ? sanitizeString(data.contact.email) : '',
        address: {
          ...data.contact.address,
          street: sanitizeString(data.contact.address?.street || ''),
          city: sanitizeString(data.contact.address?.city || ''),
          state: sanitizeString(data.contact.address?.state || ''),
          zip: sanitizeString(data.contact.address?.zip || '')
        }
      };

      // Validate email and phone if provided
      if (data.contact.email && !validateEmail(data.contact.email)) {
        return NextResponse.json({ 
          success: false,
          error: 'Invalid email address format.' 
        }, { status: 400 });
      }

      if (data.contact.phone && !validatePhone(data.contact.phone)) {
        return NextResponse.json({ 
          success: false,
          error: 'Invalid phone number format.' 
        }, { status: 400 });
      }
    }

    // Validate and sanitize team members
    if (data.team && Array.isArray(data.team)) {
      data.team = data.team.map(member => ({
        ...member,
        name: sanitizeString(member.name || ''),
        role: sanitizeString(member.role || ''),
        bio: sanitizeString(member.bio || ''),
        image: sanitizeString(member.image || '')
      }));

      // Validate image URLs
      for (const member of data.team) {
        if (member.image && !validateUrl(member.image)) {
          return NextResponse.json({ 
            success: false,
            error: `Invalid team member image URL: ${member.image}` 
          }, { status: 400 });
        }
      }
    }

    // Validate and sanitize facilities
    if (data.facilities && Array.isArray(data.facilities)) {
      data.facilities = data.facilities.map(facility => ({
        ...facility,
        name: sanitizeString(facility.name || ''),
        description: sanitizeString(facility.description || ''),
        image: sanitizeString(facility.image || ''),
        features: facility.features ? facility.features.map(f => sanitizeString(f)) : []
      }));
    }

    // Validate required fields
    if (!data.events || !data.contact || !data.hero || !data.about) {
      return NextResponse.json({ 
        success: false,
        error: 'Missing required content fields' 
      }, { status: 400 });
    }
    
    // Create backup before writing
    const backupPath = path.join(process.cwd(), 'src/data/content.backup.json');
    if (fs.existsSync(CONTENT_FILE_PATH)) {
      fs.copyFileSync(CONTENT_FILE_PATH, backupPath);
    }

    // Write the updated content back to the file
    fs.writeFileSync(CONTENT_FILE_PATH, JSON.stringify(data, null, 2));
    
    return NextResponse.json({ 
      success: true, 
      message: 'Content saved successfully!' 
    });
  } catch (error) {
    const errorMessage = handleError(error, 'POST /api/content');
    return NextResponse.json({ 
      success: false,
      error: 'Failed to save content',
      details: process.env.NODE_ENV === 'development' ? errorMessage : undefined
    }, { status: 500 });
  }
}
