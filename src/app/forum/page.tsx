'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Mock auth hook - replace with your actual auth implementation
const useAuth = () => {
  // This should return actual user state from your auth system
  return {
    user: null, // Replace with actual user object when logged in
    isAuthenticated: false, // Replace with actual auth state
    isLoading: false
  };
};

export default function ForumPage() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    const redirectToForum = async () => {
      setRedirecting(true);
      
      if (isAuthenticated && user) {
        // Authenticated users get SSO redirect
        try {
          window.location.href = '/api/discourse/sso';
        } catch (error) {
          console.error('SSO redirect failed:', error);
          // Fallback to public forum
          window.location.href = process.env.NEXT_PUBLIC_DISCOURSE_URL || 'https://forum.boisegunclub.com';
        }
      } else {
        // Public access to forum
        window.location.href = process.env.NEXT_PUBLIC_DISCOURSE_URL || 'https://forum.boisegunclub.com';
      }
    };

    if (!isLoading) {
      // Small delay to show loading state
      setTimeout(redirectToForum, 1000);
    }
  }, [user, isAuthenticated, isLoading]);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Header */}
      <div className="bg-gradient-to-b from-[var(--bg-secondary)] to-[var(--bg-primary)] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-['Rajdhani'] text-5xl font-bold text-[var(--text-primary)] mb-4">
              Community Forum
            </h1>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              Connect with fellow members, share experiences, and stay updated on club activities.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Loading/Redirect State */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center">
          {isLoading ? (
            <>
              <div className="animate-spin w-8 h-8 border-2 border-[var(--accent-primary)] border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-[var(--text-secondary)]">Loading...</p>
            </>
          ) : redirecting ? (
            <>
              <div className="animate-spin w-8 h-8 border-2 border-[var(--accent-primary)] border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-[var(--text-secondary)] mb-4">
                {isAuthenticated ? 'Signing you into the forum...' : 'Redirecting to forum...'}
              </p>
              <p className="text-sm text-[var(--text-secondary)]">
                If you're not redirected automatically, <a href="https://forum.boisegunclub.com" className="text-[var(--accent-primary)] hover:underline">click here</a>
              </p>
            </>
          ) : (
            <div className="bg-[var(--bg-secondary)] rounded-lg p-8 border border-[var(--glass-border)] max-w-2xl mx-auto">
              <h2 className="font-['Rajdhani'] text-2xl font-bold text-[var(--text-primary)] mb-4">
                Forum Integration
              </h2>
              <p className="text-[var(--text-secondary)] mb-6">
                Our community forum is powered by Discourse and hosted separately for optimal performance.
              </p>
              
              <div className="space-y-4">
                <a
                  href="https://forum.boisegunclub.com"
                  className="bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] text-white px-6 py-3 rounded-lg font-medium transition-colors inline-block"
                >
                  Visit Forum
                </a>
                
                {!isAuthenticated && (
                  <div className="pt-4 border-t border-[var(--glass-border)]">
                    <p className="text-sm text-[var(--text-secondary)] mb-3">
                      Not a member yet?
                    </p>
                    <Link
                      href="/membership"
                      className="bg-[var(--bg-primary)] hover:bg-[var(--bg-tertiary)] text-[var(--text-primary)] px-6 py-3 rounded-lg font-medium transition-colors border border-[var(--glass-border)] inline-block"
                    >
                      Join the Club
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}