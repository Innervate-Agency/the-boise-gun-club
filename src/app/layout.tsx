'use client';

import { useEffect, useState } from 'react';
import { ThemeProvider } from '@/components/ui/ThemeContext';
import { NavigationProvider } from '@/components/navigation/NavigationContext';
import NavBar from '@/components/navigation/NavBar';
import Footer from '@/components/layout/Footer';
import AccessibilityFAB from '@/components/ui/AccessibilityFAB';
import NewThemeToggle from '@/components/ui/NewThemeToggle';
import './globals.css';
import './fonts.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <html lang="en" className={`h-full font-body`} suppressHydrationWarning={true}>
      <head>
        {/* Preload critical local fonts */}
        <link
          rel="preload"
          href="/fonts/Refrigerator Deluxe.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/MuseoSans_500.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/MuseoSans_700.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        
        {/* Preload critical images */}
        <link rel="preload" as="image" href="/images/Grid/Grid (3).jpg" />
        <link rel="preload" as="image" href="/images/Smoke/Background_01.jpg" />
        
        {/* Fallback font for older browsers */}
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-body bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300 ease-in-out" suppressHydrationWarning={true}>
        <ThemeProvider>
          <NavigationProvider>
            <NavBar />
            <main className="flex-grow w-full">
              {/* Adjusted padding: removed pb-36 */}
              <div className="pt-24 md:pt-28 lg:pt-32 px-4 sm:px-6 lg:px-8">
                {children}
              </div>
            </main>
            <Footer />
            {mounted && (
              <>
                <NewThemeToggle />
                <AccessibilityFAB />
              </>
            )}
          </NavigationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
