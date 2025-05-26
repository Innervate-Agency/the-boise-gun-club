import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://boisegunclub.com';
  
  // Get current date for lastModified
  const now = new Date();
  const lastWeek = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: lastWeek,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ranges`,
      lastModified: lastWeek,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/events`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/membership`,
      lastModified: lastWeek,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: lastWeek,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/training`,
      lastModified: lastWeek,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/safety`,
      lastModified: lastWeek,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ];

  // TODO: Add dynamic event pages when individual event routes are implemented
  // const events = await getEvents();
  // const eventPages = events.map(event => ({
  //   url: `${baseUrl}/events/${event.id}`,
  //   lastModified: new Date(event.lastModified),
  //   changeFrequency: 'weekly' as const,
  //   priority: 0.6,
  // }));

  return staticPages;
} 