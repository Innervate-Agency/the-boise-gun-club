'use client';

import { useEffect, useState } from 'react';
import { getEvents, getFeaturedEvents, getNews, getFeaturedNews, type CMSEvent, type CMSNews } from '@/lib/sanity';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { urlFor } from '@/lib/sanity';

interface CMSContentProps {
  type: 'events' | 'news' | 'featured-events' | 'featured-news';
  limit?: number;
  className?: string;
}

export default function CMSContent({ type, limit = 3, className = '' }: CMSContentProps) {
  const [content, setContent] = useState<(CMSEvent | CMSNews)[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchContent() {
      try {
        setLoading(true);
        let data;
        
        switch (type) {
          case 'events':
            data = await getEvents(limit);
            break;
          case 'featured-events':
            data = await getFeaturedEvents();
            break;
          case 'news':
            data = await getNews(limit);
            break;
          case 'featured-news':
            data = await getFeaturedNews();
            break;
          default:
            data = [];
        }
        
        setContent(data);
      } catch (err) {
        console.error('Error fetching CMS content:', err);
        setError('Failed to load content');
        // Fall back to static content if CMS fails
        setContent([]);
      } finally {
        setLoading(false);
      }
    }

    fetchContent();
  }, [type, limit]);

  if (loading) {
    return (
      <div className={`space-y-4 ${className}`}>
        {Array.from({ length: limit }).map((_, index) => (
          <Card key={index} className="animate-pulse">
            <CardContent className="p-6">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2 mb-4"></div>
              <div className="h-20 bg-gray-200 rounded"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className={`text-center p-6 ${className}`}>
        <p className="text-[var(--text-secondary)]">
          Content temporarily unavailable. Please check back later.
        </p>
      </div>
    );
  }

  if (content.length === 0) {
    return (
      <div className={`text-center p-6 ${className}`}>
        <p className="text-[var(--text-secondary)]">
          No content available at this time.
        </p>
      </div>
    );
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {content.map((item) => {
        if (item._type === 'event') {
          const event = item as CMSEvent;
          return (
            <Card key={event._id} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  {event.image && (
                    <div className="relative w-20 h-20 flex-shrink-0">
                      <Image
                        src={urlFor(event.image).width(80).height(80).url()}
                        alt={event.image.alt || event.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={getEventCategoryColor(event.category)}>
                        {getEventCategoryIcon(event.category)} {event.category}
                      </Badge>
                      {event.featured && (
                        <Badge className="bg-[var(--accent-primary)] text-white">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                      {event.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] mb-3">
                      {event.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-secondary)]">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(event.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {new Date(event.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {event.location}
                      </div>
                      {event.fee && (
                        <div className="flex items-center gap-1">
                          <span className="text-[var(--accent-primary)] font-semibold">
                            ${event.fee}
                          </span>
                        </div>
                      )}
                    </div>
                    {event.registrationRequired && (
                      <div className="mt-3">
                        <Button size="sm" className="bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)]">
                          Register Now
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        } else {
          const news = item as CMSNews;
          return (
            <Card key={news._id} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  {news.image && (
                    <div className="relative w-20 h-20 flex-shrink-0">
                      <Image
                        src={urlFor(news.image).width(80).height(80).url()}
                        alt={news.image.alt || news.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={getNewsCategoryColor(news.category)}>
                        {getNewsCategoryIcon(news.category)} {news.category}
                      </Badge>
                      {news.featured && (
                        <Badge className="bg-[var(--accent-primary)] text-white">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                      {news.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] mb-3">
                      {news.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-[var(--text-secondary)]">
                      <span>By {news.author}</span>
                      <span>{new Date(news.publishedAt).toLocaleDateString()}</span>
                    </div>
                    <div className="mt-3">
                      <Button variant="outline" size="sm">
                        Read More
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        }
      })}
    </div>
  );
}

function getEventCategoryColor(category: string) {
  switch (category) {
    case 'competition':
      return 'bg-[var(--brand-red-action)]/10 text-[var(--brand-red-action)]';
    case 'training':
      return 'bg-[var(--brand-blue)]/10 text-[var(--brand-blue)]';
    case 'social':
      return 'bg-[var(--brand-green)]/10 text-[var(--brand-green)]';
    case 'maintenance':
      return 'bg-gray-500/10 text-gray-600';
    default:
      return 'bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]';
  }
}

function getEventCategoryIcon(category: string) {
  switch (category) {
    case 'competition':
      return '🏆';
    case 'training':
      return '🎯';
    case 'social':
      return '🎉';
    case 'maintenance':
      return '🔧';
    default:
      return '📅';
  }
}

function getNewsCategoryColor(category: string) {
  switch (category) {
    case 'safety':
      return 'bg-red-500/10 text-red-600';
    case 'competition':
      return 'bg-[var(--brand-red-action)]/10 text-[var(--brand-red-action)]';
    case 'facility':
      return 'bg-[var(--brand-blue)]/10 text-[var(--brand-blue)]';
    case 'general':
    default:
      return 'bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]';
  }
}

function getNewsCategoryIcon(category: string) {
  switch (category) {
    case 'safety':
      return '🛡️';
    case 'competition':
      return '🏆';
    case 'facility':
      return '🏢';
    case 'general':
    default:
      return '📢';
  }
}