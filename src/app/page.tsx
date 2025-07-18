'use client';

import React from 'react';
import { SplashPage } from '@/components/splash/SplashPage';

export default function HomePage() {
  return (
    <div className="absolute inset-0 z-50 bg-cloudy-day-white dark:bg-kent-slate-gray">
      <SplashPage />
    </div>
  );
}