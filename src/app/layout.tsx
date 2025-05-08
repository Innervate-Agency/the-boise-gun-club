import type { Metadata } from "next";
import { Inter, Space_Grotesk, DM_Sans, VT323 } from "next/font/google";
import "./globals.css";
import Layout from "@components/layout/Layout"; // Import the Layout component
import { NavigationProvider } from "@components/navigation/NavigationContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
});

export const metadata: Metadata = {
  title: "Boise Gun Club",
  description: "Home of Boise's premier shooting range and gun club",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${dmSans.variable} ${vt323.variable}`}>
      <body className="font-inter antialiased">
        <NavigationProvider>
          <Layout>{children}</Layout>
        </NavigationProvider>
      </body>
    </html>
  );
}
