'use client';

import { useEffect, useState } from 'react';
import { ThemeProvider } from '@/components/ui/ThemeContext';
import { NavigationProvider } from '@/components/navigation/NavigationContext';
import NavBar from '@/components/navigation/NavBar';
import Footer from '@/components/layout/Footer';
import AccessibilityFAB from '@/components/ui/AccessibilityFAB';
import NewThemeToggle from '@/components/ui/NewThemeToggle';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [mounted, setMounted] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Enhanced font loading detection with better fallback
    const checkFonts = async () => {
      try {
        // Set a reasonable timeout for font loading
        const fontTimeout = new Promise((resolve) => setTimeout(resolve, 1500));
        const fontReady = document.fonts.ready;
        
        await Promise.race([fontReady, fontTimeout]);
        
        // Check if our custom fonts loaded successfully
        const refrigeratorFont = document.fonts.check('1em "Refrigerator Deluxe", "DM Sans", sans-serif');
        const museoFont = document.fonts.check('1em "Museo Sans", "DM Sans", sans-serif');
        
        if (refrigeratorFont && museoFont) {
          setFontsLoaded(true);
          document.documentElement.classList.add('fonts-loaded');
          document.documentElement.classList.remove('fonts-loading');
        } else {
          console.warn('Custom fonts failed to load, using fallbacks');
          // Add fallback font class to body
          document.body.classList.add('fonts-fallback');
          setFontsLoaded(true);
          document.documentElement.classList.add('fonts-loaded');
          document.documentElement.classList.remove('fonts-loading');
        }
      } catch (error) {
        console.warn('Font checking not supported in this browser');
        // Show content immediately with fallback fonts
        setFontsLoaded(true);
        document.documentElement.classList.add('fonts-loaded');
        document.documentElement.classList.remove('fonts-loading');
      }
    };
    
    // Add initial loading class
    document.documentElement.classList.add('fonts-loading');
    checkFonts();
  }, []);

  // Add CSS for font loading states with better fallback
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const style = document.createElement('style');
      style.textContent = `
        .fonts-loading {
          opacity: 0.95;
          transition: opacity 0.3s ease-in-out;
        }
        .fonts-loaded {
          opacity: 1;
          transition: opacity 0.3s ease-in-out;
        }
        .fonts-fallback .font-heading {
          font-family: "Inter", "DM Sans", sans-serif !important;
        }
        .fonts-fallback .font-body {
          font-family: "DM Sans", "Inter", sans-serif !important;
        }
      `;
      document.head.appendChild(style);
      
      // Ensure content is visible after a maximum wait time
      const fallbackTimeout = setTimeout(() => {
        document.documentElement.classList.add('fonts-loaded');
        document.documentElement.classList.remove('fonts-loading');
        setFontsLoaded(true);
      }, 2000); // Show content after 2 seconds regardless
      
      return () => {
        clearTimeout(fallbackTimeout);
        if (style.parentNode) {
          style.parentNode.removeChild(style);
        }
      };
    }
  }, []);

  return (
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
  );
}
