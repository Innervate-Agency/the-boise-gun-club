import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Only apply to admin routes (but not the login page itself)
  if (request.nextUrl.pathname.startsWith('/admin') && request.nextUrl.pathname !== '/admin') {
    // Check for admin session
    const adminSession = request.cookies.get('admin-session');
    
    if (!adminSession) {
      // Redirect to login if no session
      return NextResponse.redirect(new URL('/admin', request.url));
    }
    
    // Verify session is valid (simple check - in production use JWT or similar)
    const sessionValue = adminSession.value;
    const expectedSession = process.env.ADMIN_SESSION_SECRET || 'boise2025-session';
    
    if (sessionValue !== expectedSession) {
      // Clear invalid session and redirect
      const response = NextResponse.redirect(new URL('/admin', request.url));
      response.cookies.delete('admin-session');
      return response;
    }
  }

  // Apply security headers to all routes
  const response = NextResponse.next();
  
  // Security headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  
  // HSTS for HTTPS
  if (request.nextUrl.protocol === 'https:') {
    response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  }
  
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 