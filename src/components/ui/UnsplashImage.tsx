'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface LocalImageProps {
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

export default function LocalImage({
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
}: LocalImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Loading skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12" />
        </div>
      )}
      
      {/* Main image - always use local fallback */}
      <Image
        src={fallback}
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
      />
    </div>
  );
}

// Convenience components for common use cases
export function HeroImage({ className, alt = "Boise Gun Club", ...props }: Omit<LocalImageProps, 'fallback'>) {
  return (
    <LocalImage
      fallback="/images/hero-bg.webp"
      alt={alt}
      className={className}
      priority={true}
      {...props}
    />
  );
}

export function EventImage({ className, alt = "Shooting Event", ...props }: Omit<LocalImageProps, 'fallback'>) {
  return (
    <LocalImage
      fallback="/images/events.webp"
      alt={alt}
      className={className}
      {...props}
    />
  );
}

export function TrainingImage({ className, alt = "Training Session", ...props }: Omit<LocalImageProps, 'fallback'>) {
  return (
    <LocalImage
      fallback="/images/training.webp"
      alt={alt}
      className={className}
      {...props}
    />
  );
}

export function MembershipImage({ className, alt = "Club Membership", ...props }: Omit<LocalImageProps, 'fallback'>) {
  return (
    <LocalImage
      fallback="/images/membership.webp"
      alt={alt}
      className={className}
      {...props}
    />
  );
}
