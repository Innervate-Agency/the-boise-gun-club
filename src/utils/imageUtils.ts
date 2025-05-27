/**
 * Unsplash Image Utility
 * Generates optimized Unsplash URLs for the Boise Gun Club website
 */

interface UnsplashImageOptions {
  width?: number;
  height?: number;
  quality?: number;
  fit?: 'crop' | 'fill' | 'scale' | 'max';
  auto?: 'format' | 'compress' | 'enhance';
}

// Curated high-quality shooting sports photo IDs from Unsplash
const SHOOTING_PHOTO_IDS = {
  // Clay target and trap shooting
  'clay target shooting': 'photo-1566479179817-0ddb5fa87cd9',
  'clay target mid flight action shot': 'photo-1566479179817-0ddb5fa87cd9',
  'trap shooting competition athletes': 'photo-1595590424283-b8f17842773f',
  'shooting range trap fields': 'photo-1566479179817-0ddb5fa87cd9',
  
  // Training and instruction
  'shooting instructor training lesson': 'photo-1595590424283-b8f17842773f',
  'shooting instruction marksmanship': 'photo-1595590424283-b8f17842773f',
  
  // Competitions and events
  'shooting competition championship': 'photo-1584819399096-8f9c5bdb0e19',
  'championship trophy shooting sports': 'photo-1584819399096-8f9c5bdb0e19',
  
  // Facilities and ranges
  'sporting clays course outdoor range': 'photo-1584819399096-8f9c5bdb0e19',
  'gun club facilities outdoor': 'photo-1584819399096-8f9c5bdb0e19',
  'shooting range facilities': 'photo-1584819399096-8f9c5bdb0e19',
  
  // People and portraits
  'veteran shooter portrait': 'photo-1507003211169-0a1dd7228f2d',
  'family shooting tradition': 'photo-1500648767791-00dcc994a43e',
  
  // Default fallback
  'default': 'photo-1566479179817-0ddb5fa87cd9'
};

export function getUnsplashUrl(
  query: string,
  options: UnsplashImageOptions = {}
): string {
  const {
    width = 800,
    height = 600,
    quality = 85,
    fit = 'crop',
  } = options;

  const accessKey = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;
  
  if (!accessKey) {
    console.warn('Unsplash access key not found, using fallback image');
    return `/images/hero-bg.webp`;
  }

  // Find matching photo ID or use default
  const photoId = SHOOTING_PHOTO_IDS[query as keyof typeof SHOOTING_PHOTO_IDS] || SHOOTING_PHOTO_IDS.default;
  
  // Build proper Unsplash URL with correct photo ID format
  const params = new URLSearchParams({
    w: width.toString(),
    h: height.toString(),
    q: quality.toString(),
    fit,
    fm: 'webp' // Force WebP format for better performance
  });

  return `https://images.unsplash.com/${photoId}?${params.toString()}`;
}

export function getShootingSportsImage(
  category: 'events' | 'training' | 'membership' | 'ranges' | 'competition' = 'events',
  options: UnsplashImageOptions = {}
): string {
  const categoryKeywords = {
    events: 'clay target shooting competition',
    training: 'shooting instruction marksmanship',
    membership: 'gun club facilities outdoor',
    ranges: 'shooting range trap skeet',
    competition: 'shooting sports championship'
  };

  return getUnsplashUrl(categoryKeywords[category], options);
}

export function getOptimizedImageUrl(
  fallbackPath: string,
  unsplashQuery?: string,
  options: UnsplashImageOptions = {}
): string {
  // Always use local assets for reliability
  // In the future, you can enable Unsplash by changing this condition
  const useUnsplash = false; // Set to true to enable Unsplash integration
  
  if (useUnsplash && process.env.NODE_ENV === 'development' && unsplashQuery) {
    return getUnsplashUrl(unsplashQuery, options);
  }
  
  // Use local assets for now
  return fallbackPath;
}
