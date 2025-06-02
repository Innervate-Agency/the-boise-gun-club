import type { Metadata } from 'next';
import ClientLayout from './ClientLayout'; 
import './globals.css';
// import './fonts.css'; // This file was deleted

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
  return (    <html lang="en" className="h-full" suppressHydrationWarning={true}>
      <head>
        {/* Google Fonts for official Boise Gun Club branding */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&family=Noto+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Noto+Serif:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" 
          rel="stylesheet" 
        />
        
        {/* Critical font preloading - REMOVED OLD FONTS */}
        
        {/* Optimized critical images */}
        <link rel="preload" as="image" href="/images/hero-bg.webp" />
        <link rel="preload" as="image" href="/images/events.webp" />
        
        {/* Enhanced fallback fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300 ease-in-out" suppressHydrationWarning={true}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
