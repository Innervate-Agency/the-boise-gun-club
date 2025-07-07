'use client';

import { useEffect, useState } from 'react';
import NavBar from '../components/navigation/NavBar';
import Footer from '../components/layout/Footer';
import NewThemeToggle from '../components/ui/NewThemeToggle';

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
      <main className="flex-1 w-full min-h-screen">
        {children}
      </main>
      <Footer />
      <NewThemeToggle />
      {/* Theme and accessibility controls will be added here */}
    </>
  );
}
