import type { Metadata } from 'next';
import { Rajdhani, Noto_Sans, Noto_Serif } from 'next/font/google';
import ClientLayout from './ClientLayout'; 
import './globals.css';

// Configure fonts using Next.js built-in system
const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
});

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-body',
  display: 'swap',
});

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Boise Gun Club - Premier Shooting Sports Facility',
  description: 'Idaho\'s premier shooting sports facility since 1898. Trap, skeet, and sporting clays ranges with professional instruction.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`h-full ${rajdhani.variable} ${notoSans.variable} ${notoSerif.variable}`} suppressHydrationWarning={true}>
      <head>
        {/* Optimized critical images */}
        <link rel="preload" as="image" href="/images/hero-bg.webp" />
        <link rel="preload" as="image" href="/images/events.webp" />
      </head>
      <body className="min-h-screen bg-bg-primary text-text-primary transition-colors duration-300 ease-in-out font-body" suppressHydrationWarning={true}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}