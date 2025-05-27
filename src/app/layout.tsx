import type { Metadata } from 'next';
import ClientLayout from './ClientLayout'; 
import './globals.css';
import './fonts.css';

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
    <html lang="en" className="h-full font-body" suppressHydrationWarning={true}>
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
        
        {/* Optimized critical images */}
        <link rel="preload" as="image" href="/images/hero-bg.webp" />
        <link rel="preload" as="image" href="/images/events.webp" />
        
        {/* Enhanced fallback fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-body bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300 ease-in-out" suppressHydrationWarning={true}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
