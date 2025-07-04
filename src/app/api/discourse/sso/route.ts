import { NextRequest, NextResponse } from 'next/server';
import { DiscourseSSO } from '@/lib/discourse-sso';

// Mock function - replace with your actual auth verification
async function getCurrentUser(request: NextRequest) {
  // This should verify the user's session/JWT and return user data
  // For now, returning null (unauthenticated)
  // Replace with your actual auth implementation
  return null;
  
  // Example of what this should return when implemented:
  // return {
  //   id: 123,
  //   email: 'user@example.com',
  //   username: 'shooter123',
  //   name: 'John Doe',
  //   isAdmin: false,
  //   isModerator: false
  // };
}

export async function GET(request: NextRequest) {
  try {
    const user = await getCurrentUser(request);
    
    if (!user) {
      // Redirect unauthenticated users to public forum
      const publicForumUrl = process.env.NEXT_PUBLIC_DISCOURSE_URL || 'https://forum.boisegunclub.com';
      return NextResponse.redirect(publicForumUrl);
    }

    // Generate SSO URL for authenticated users
    const discourse = new DiscourseSSO();
    const ssoUrl = discourse.generateSSO(user);
    
    return NextResponse.redirect(ssoUrl);
  } catch (error) {
    console.error('SSO generation failed:', error);
    
    // Fallback to public forum on error
    const publicForumUrl = process.env.NEXT_PUBLIC_DISCOURSE_URL || 'https://forum.boisegunclub.com';
    return NextResponse.redirect(publicForumUrl);
  }
}

export async function POST(request: NextRequest) {
  try {
    const { user } = await request.json();
    
    if (!user) {
      return NextResponse.json({ error: 'User data required' }, { status: 400 });
    }

    const discourse = new DiscourseSSO();
    const ssoUrl = discourse.generateSSO(user);
    
    return NextResponse.json({ ssoUrl });
  } catch (error) {
    console.error('SSO generation failed:', error);
    return NextResponse.json({ error: 'SSO generation failed' }, { status: 500 });
  }
}