import { NextRequest, NextResponse } from 'next/server';
import { randomBytes } from 'crypto';

// Simple in-memory store for CSRF tokens (in production, use Redis or database)
const csrfTokens = new Map<string, { token: string; expires: number }>();
const CSRF_TOKEN_EXPIRY = 60 * 60 * 1000; // 1 hour

// Clean up expired tokens periodically
setInterval(() => {
  const now = Date.now();
  for (const [key, value] of csrfTokens.entries()) {
    if (now > value.expires) {
      csrfTokens.delete(key);
    }
  }
}, 10 * 60 * 1000); // Clean up every 10 minutes

const generateClientId = (request: NextRequest): string => {
  const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
  const userAgent = request.headers.get('user-agent') || 'unknown';
  return `${ip}_${userAgent}`.slice(0, 100); // Limit length
};

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const clientId = generateClientId(request);
    const token = randomBytes(32).toString('hex');
    const expires = Date.now() + CSRF_TOKEN_EXPIRY;
    
    csrfTokens.set(clientId, { token, expires });
    
    return NextResponse.json({ 
      token,
      expires: expires 
    });
  } catch (error) {
    return NextResponse.json({ 
      error: 'Failed to generate CSRF token' 
    }, { status: 500 });
  }
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const { token } = await request.json();
    const clientId = generateClientId(request);
    const storedToken = csrfTokens.get(clientId);
    
    if (!storedToken) {
      return NextResponse.json({ 
        valid: false, 
        error: 'No CSRF token found' 
      }, { status: 400 });
    }
    
    if (Date.now() > storedToken.expires) {
      csrfTokens.delete(clientId);
      return NextResponse.json({ 
        valid: false, 
        error: 'CSRF token expired' 
      }, { status: 400 });
    }
    
    if (storedToken.token !== token) {
      return NextResponse.json({ 
        valid: false, 
        error: 'Invalid CSRF token' 
      }, { status: 400 });
    }
    
    // Token is valid, remove it to prevent reuse
    csrfTokens.delete(clientId);
    
    return NextResponse.json({ 
      valid: true 
    });
  } catch (error) {
    return NextResponse.json({ 
      valid: false, 
      error: 'Failed to validate CSRF token' 
    }, { status: 500 });
  }
}
