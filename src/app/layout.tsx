import type { Metadata } from "next";
import { DM_Sans, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Layout from "../../components/layout/Layout"; // Import the Layout component
import { NavigationProvider } from "../../components/navigation/NavigationContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
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
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${dmSans.variable}`}>
      <body className="font-inter">
        <NavigationProvider>
          <Layout>{children}</Layout>
        </NavigationProvider>
      </body>
    </html>
  );
}
