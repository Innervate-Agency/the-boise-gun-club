'use client';

import React, { useState } from 'react';
import Image from 'next/image';
// import { getOptimizedImageUrl, getShootingSportsImage } from '@/utils/imageUtils';

interface UnsplashImageProps {
  category?: 'events' | 'training' | 'membership' | 'ranges' | 'competition' | 'hero' | 'equipment' | 'community';
  query?: string;
  fallback: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  fill?: boolean;
  sizes?: string;
  loading?: 'lazy' | 'eager';
}

export default function UnsplashImage({
  category,
  query,
  fallback,
  alt,
  width = 800,
  height = 600,
  className = '',
  priority = false,
  quality = 85,
  fill = false,
  sizes,
  loading = 'lazy'
}: UnsplashImageProps) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Determine the image source
  const getImageSource = () => {
    if (imageError) {
      return fallback;
    }
    
    // if (category) {
    //   return getShootingSportsImage(category, { width, height, quality });
    // }
    
    // if (query) {
    //   return getOptimizedImageUrl(fallback, query, { width, height, quality });
    // }
    
    return fallback;
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    console.warn(`Failed to load Unsplash image, falling back to: ${fallback}`);
    setImageError(true);
    setIsLoading(false);
  };

  const imageSource = getImageSource();

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Loading skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-shimmer" />
        </div>
      )}
      
      {/* Main image */}
      <Image
        src={imageSource}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        priority={priority}
        quality={quality}
        sizes={sizes}
        loading={priority ? 'eager' : loading}
        className={`transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        } ${fill ? 'object-cover' : ''}`}
        onLoad={handleImageLoad}
        onError={handleImageError}
        unoptimized={imageSource.includes('unsplash.com')}
      />
      
      {/* Error fallback indicator (for development) */}
      {imageError && process.env.NODE_ENV === 'development' && (
        <div className="absolute top-2 left-2 bg-yellow-500 text-black text-xs px-2 py-1 rounded opacity-75">
          Fallback
        </div>
      )}
    </div>
  );
}

// Convenience components for common use cases
export function HeroImage({ className, alt = "Boise Gun Club", ...props }: Omit<UnsplashImageProps, 'category' | 'fallback'>) {
  return (
    <UnsplashImage
      category="hero"
      fallback="/images/hero-bg.webp"
      alt={alt}
      className={className}
      priority={true}
      {...props}
    />
  );
}

export function EventImage({ className, alt = "Shooting Event", ...props }: Omit<UnsplashImageProps, 'category' | 'fallback'>) {
  return (
    <UnsplashImage
      category="events"
      fallback="/images/events.webp"
      alt={alt}
      className={className}
      {...props}
    />
  );
}

export function TrainingImage({ className, alt = "Training Session", ...props }: Omit<UnsplashImageProps, 'category' | 'fallback'>) {
  return (
    <UnsplashImage
      category="training"
      fallback="/images/training.webp"
      alt={alt}
      className={className}
      {...props}
    />
  );
}

export function MembershipImage({ className, alt = "Club Membership", ...props }: Omit<UnsplashImageProps, 'category' | 'fallback'>) {
  return (
    <UnsplashImage
      category="membership"
      fallback="/images/membership.webp"
      alt={alt}
      className={className}
      {...props}
    />
  );
}
