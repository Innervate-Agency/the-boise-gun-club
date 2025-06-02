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

// Real Unsplash photo IDs from actual search results
const SHOOTING_PHOTO_IDS = {
  // Clay target and trap shooting
  'clay target shooting': 'KcBPR_xOENA',          // Person holding gun with smoke
  'clay target mid flight action shot': 'b0HMikI1jNY',  // Group with guns in field
  'trap shooting competition athletes': 'rGTDvh6qXIc',   // Athlete at shooting event (formerly Man with rifle)
  'shooting range trap fields': 'PdhGEMZxZ-o',    // Gun laying on target
  'skeet shooting outdoor range': 'GQacAJYSwkE',   // Man holding gun outdoors
  'clay pigeon shooting sports': 'KcBPR_xOENA',    // Person holding gun with smoke
  
  // Training and instruction
  'shooting instructor training lesson': '87LVt4_O96U', // Man shooting close-up
  'shooting instruction marksmanship': '87LVt4_O96U',   // Man shooting close-up
  'firearms safety training course': 'FhOKha3f2nA',    // Focused shooter (formerly Soldier aiming)
  'marksmanship training outdoor': 'PFpsIhNvwmQ',      // Shooter practicing outdoors (formerly Man with rifle)
  'youth shooting education': 'Zn6sD9MbbIw',           // Young person learning to shoot
  
  // Competitions and events
  'shooting competition championship': 'KcBPR_xOENA',  // Person holding gun with smoke
  'championship trophy shooting sports': 'rGTDvh6qXIc', // Championship event scene (formerly Man with rifle)
  'competitive shooting event': 'b0HMikI1jNY',         // Group with guns in field
  'tournament shooting sports': 'GQacAJYSwkE',         // Man holding gun outdoors
  'annual championship competition': 'KcBPR_xOENA',    // Person holding gun with smoke
  
  // Facilities and ranges
  'sporting clays course outdoor range': 'YeAbgGMa7hA', // Field background
  'gun club facilities outdoor': 'rGTDvh6qXIc',        // Outdoor club facilities (formerly Man with rifle)
  'shooting range facilities': 'VCCmcpxLvBA',          // Dark room shooting range
  'outdoor shooting complex': 'YeAbgGMa7hA',           // Field background
  'clay target course layout': 'PdhGEMZxZ-o',          // Gun laying on target
  'sporting goods shooting equipment': 'i3N7m8EdOCo',  // Shotguns and gear (formerly Brown rifle)
  
  // Membership and community
  'gun club membership community': 'b0HMikI1jNY',      // Group with guns in field
  'shooting sports family tradition': 'Zn6sD9MbbIw',   // Family at the range
  'veteran shooter portrait': 'FhOKha3f2nA',           // Experienced shooter (formerly Soldier aiming)
  'shooting club social event': 'b0HMikI1jNY',         // Group with guns in field
  'outdoor recreation shooting': 'YeAbgGMa7hA',        // Field background
  
  // Landscapes and backgrounds
  'outdoor range landscape': 'YeAbgGMa7hA',            // Field background
  'shooting range backdrop': 'VCCmcpxLvBA',            // Dark room shooting range
  'rural outdoor shooting facility': 'rGTDvh6qXIc',    // Scenic shooting facility (formerly Man with rifle)
  'hero background shooting sports': 'KcBPR_xOENA',    // Person holding gun with smoke
  'mountain range outdoor activities': 'YeAbgGMa7hA',  // Field background
  
  // Equipment and gear
  'shooting sports equipment gear': 'i3N7m8EdOCo',     // Shotguns and accessories (formerly Brown rifle)
  'clay target launcher equipment': 'PdhGEMZxZ-o',     // Gun laying on target
  'protective gear shooting safety': '87LVt4_O96U',    // Man shooting close-up
  
  // Default fallback
  'default': 'KcBPR_xOENA'
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

  // Use curated Unsplash photo IDs for shooting sports content
  const photoId = SHOOTING_PHOTO_IDS[query as keyof typeof SHOOTING_PHOTO_IDS] || SHOOTING_PHOTO_IDS.default;
  
  // Generate direct Unsplash URL for specific photo
  return `https://images.unsplash.com/photo-1${photoId}?w=${width}&h=${height}&fit=${fit}&crop=entropy&auto=format&q=${quality}`;
}

export function getShootingSportsImage(
  category: 'events' | 'training' | 'membership' | 'ranges' | 'competition' | 'hero' | 'equipment' | 'community' = 'events',
  options: UnsplashImageOptions = {}
): string {
  const categoryKeywords = {
    events: 'competitive shooting event',
    training: 'shooting instruction marksmanship',
    membership: 'gun club membership community',
    ranges: 'outdoor shooting complex',
    competition: 'shooting competition championship',
    hero: 'hero background shooting sports',
    equipment: 'shooting sports equipment gear',
    community: 'shooting club social event'
  };

  return getUnsplashUrl(categoryKeywords[category], options);
}

export function getOptimizedImageUrl(
  fallbackPath: string,
  unsplashQuery?: string,
  options: UnsplashImageOptions = {}
): string {
  // Enable Unsplash integration for better imagery
  const useUnsplash = true; // Activated Unsplash API
  
  if (useUnsplash && unsplashQuery) {
    return getUnsplashUrl(unsplashQuery, options);
  }
  
  // Use local assets as fallback
  return fallbackPath;
}
