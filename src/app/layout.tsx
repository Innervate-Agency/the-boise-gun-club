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
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Enhanced font loading detection
    const checkFonts = async () => {
      try {
        await document.fonts.ready;
        
        // Check if our custom fonts loaded successfully
        const refrigeratorFont = document.fonts.check('1em "Refrigerator Deluxe", "DM Sans", sans-serif');
        const museoFont = document.fonts.check('1em "Museo Sans", "DM Sans", sans-serif');
        
        if (refrigeratorFont && museoFont) {
          setFontsLoaded(true);
        } else {
          console.warn('Custom fonts failed to load, using fallbacks');
          // Add fallback font class to body
          document.body.classList.add('fonts-fallback');
        }
      } catch (error) {
        console.warn('Font checking not supported in this browser');
        // Assume fonts loaded after a delay for older browsers
        setTimeout(() => setFontsLoaded(true), 1000);
      }
    };
    
    checkFonts();
  }, []);
  return (
    <html lang="en" className={`h-full font-body ${fontsLoaded ? 'fonts-loaded' : 'fonts-loading'}`} suppressHydrationWarning={true}>
      <head>
        {/* Critical font preloading */}
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
        
        {/* Optimized critical images with better sizes */}
        <link rel="preload" as="image" href="/images/Grid/Grid (3).jpg" />
        <link rel="preload" as="image" href="/images/Smoke/Background_01.jpg" />
        
        {/* Enhanced fallback fonts with better coverage */}
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        
        {/* Font loading optimization */}
        <style dangerouslySetInnerHTML={{
          __html: `
            .fonts-loading {
              visibility: hidden;
            }
            .fonts-loaded {
              visibility: visible;
            }
            .fonts-fallback .font-heading {
              font-family: "Inter", "DM Sans", sans-serif !important;
            }
            .fonts-fallback .font-body {
              font-family: "DM Sans", "Inter", sans-serif !important;
            }
          `
        }} />
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
