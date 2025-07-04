'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    if (process.env.NODE_ENV === 'development') {
      console.error('Global error:', error);
    }
  }, [error]);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)] opacity-50">
      </div>
      
      {/* Grid background */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          backgroundImage: 'url(/images/Grid/Grid (3).jpg)',
          backgroundRepeat: 'repeat',
          backgroundSize: 'contain',
          opacity: 0.03,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Error icon */}
          <motion.div
            className="inline-block mb-8"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-32 h-32 bg-[var(--accent-darkred)] rounded-full relative flex items-center justify-center">
              <div className="text-white text-6xl font-bold">!</div>
            </div>
          </motion.div>
          
          <h1 className="font-heading text-4xl md:text-5xl uppercase text-[var(--text-primary)] mb-4">
            Something Went Wrong
          </h1>
          
          <p className="font-body text-lg md:text-xl text-[var(--text-secondary)] mb-8">
            We encountered an unexpected error. Don&apos;t worry, our team has been notified and we&apos;re working to fix it.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={reset}
              className="bg-[var(--accent-primary)] text-white px-8 py-4 rounded-lg font-body text-lg font-semibold uppercase tracking-wider hover:bg-[var(--accent-secondary)] transition-colors duration-300"
            >
              Try Again
            </button>
            
            <Link
              href="/"
              className="bg-transparent border-2 border-[var(--accent-primary)] text-[var(--accent-primary)] px-8 py-4 rounded-lg font-body text-lg font-semibold uppercase tracking-wider hover:bg-[var(--accent-primary)] hover:text-white transition-colors duration-300"
            >
              Go Home
            </Link>
          </div>
          
          {process.env.NODE_ENV === 'development' && (
            <details className="mt-8 text-left bg-[var(--bg-secondary)] p-4 rounded-lg">
              <summary className="cursor-pointer font-body text-[var(--text-secondary)] mb-2">
                Error Details (Development Only)
              </summary>
              <pre className="text-sm text-[var(--text-secondary)] overflow-auto">
                {error.message}
              </pre>
            </details>
          )}
        </motion.div>
      </div>
    </div>
  );
} 