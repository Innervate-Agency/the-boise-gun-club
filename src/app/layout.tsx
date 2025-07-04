import type { Metadata } from 'next';
import ClientLayout from './ClientLayout'; 
import FontLoader from './components/FontLoader';
import { ThemeProvider } from '../components/ui/ThemeContext';
import './globals.css';

export const metadata: Metadata = {
  title: 'Boise Gun Club - Premier Shooting Sports Facility',
  description: 'Idaho\'s premier shooting sports facility since 1973. Trap, skeet, and sporting clays ranges with professional instruction.',
  other: {
    'preload-fonts': 'true'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning={true}>
      <head>
        <FontLoader />
        
        {/* Optimized critical images */}
        <link rel="preload" as="image" href="/images/hero-bg.webp" />
        <link rel="preload" as="image" href="/images/events.webp" />
        
        {/* Fallback font loading */}
        <style dangerouslySetInnerHTML={{
          __html: `
            @font-face {
              font-family: 'Rajdhani';
              font-style: normal;
              font-weight: 400;
              font-display: swap;
              src: local('Rajdhani Regular'), local('Rajdhani-Regular');
            }
            @font-face {
              font-family: 'Noto Sans';
              font-style: normal;
              font-weight: 400;
              font-display: swap;
              src: local('Noto Sans Regular'), local('Noto Sans-Regular');
            }
          `
        }} />
      </head>
      <body className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300 ease-in-out" suppressHydrationWarning={true}>
        <ThemeProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
