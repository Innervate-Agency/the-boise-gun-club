'use client';

import { useEffect } from 'react';

export default function FontLoader() {
  useEffect(() => {
    // Find the stylesheet link and update its media attribute
    const link = document.querySelector('link[href*="fonts.googleapis.com"]');
    if (link) {
      (link as HTMLLinkElement).media = 'all';
    }
  }, []);

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link 
        href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&family=Noto+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Noto+Serif:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap&display=swap" 
        rel="stylesheet"
        media="print"
      />
    </>
  );
} 