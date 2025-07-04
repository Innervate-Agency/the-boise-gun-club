'use client';

import { useEffect, useState } from 'react';
import NavBar from '../components/navigation/NavBar';
import Footer from '../components/layout/Footer';
import NewThemeToggle from '../components/ui/NewThemeToggle';
import AccessibilityFAB from '../components/ui/AccessibilityFAB';
import ChatwootWidget from '../components/chat/ChatwootWidget';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Basic font loading classes, can be removed if still broken
    document.documentElement.classList.add('fonts-loading');
    document.fonts.ready.then(() => {
      document.documentElement.classList.remove('fonts-loading');
      document.documentElement.classList.add('fonts-loaded');
    }).catch(() => {
      // Fallback if document.fonts.ready fails or is not supported
      document.documentElement.classList.remove('fonts-loading');
      document.documentElement.classList.add('fonts-loaded');
    });
  }, []);

  return (
    <>
      <NavBar />
      <main className="flex-1 w-full min-h-screen pt-[80px] md:pt-[90px]">
        {children}
      </main>
      <Footer />
      <NewThemeToggle />
      <AccessibilityFAB />
      {mounted && (
        <ChatwootWidget 
          websiteToken={process.env.NEXT_PUBLIC_CHATWOOT_WEBSITE_TOKEN || 'demo-token'}
          settings={{
            hideMessageBubble: false,
            position: 'right',
            locale: 'en',
            type: 'standard',
            darkMode: 'auto'
          }}
        />
      )}
    </>
  );
}
