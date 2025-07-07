'use client';

import { PageHero } from '@/components/ui/page-hero';
import { BlogList } from '@/components/ui/blog-article';
import { Newspaper } from 'lucide-react';

const sampleArticles = [
  {
    id: '1',
    title: 'Mastering Trap Shooting: Tips from the Pros',
    excerpt: 'Learn essential techniques and strategies from professional trap shooters to improve your accuracy and consistency on the range.',
    image: '/images/events.webp',
    author: {
      name: 'Mike Rodriguez',
      title: 'Head Instructor',
      avatar: '/avatars/01.png'
    },
    publishDate: '2024-01-15',
    readTime: 8,
    category: 'Training',
    featured: true
  },
  {
    id: '2',
    title: 'Safety First: Essential Range Rules Every Shooter Must Know',
    excerpt: 'A comprehensive guide to range safety protocols and best practices for new and experienced shooters.',
    image: '/images/training.webp',
    author: {
      name: 'Sarah Johnson',
      title: 'Safety Officer',
      avatar: '/avatars/02.png'
    },
    publishDate: '2024-01-10',
    readTime: 5,
    category: 'Safety'
  },
  {
    id: '3',
    title: 'Club Championship Results: Record Breaking Scores',
    excerpt: 'Highlights from our annual championship tournament featuring exceptional performances and new club records.',
    image: '/images/membership.webp',
    author: {
      name: 'Tom Wilson',
      title: 'Tournament Director',
      avatar: '/avatars/03.png'
    },
    publishDate: '2024-01-05',
    readTime: 6,
    category: 'Events'
  },
  {
    id: '4',
    title: 'Choosing Your First Shotgun: A Beginner\'s Guide',
    excerpt: 'A comprehensive guide to selecting your first shotgun, with recommendations for trap, skeet, and sporting clays.',
    image: '/images/hero-bg.webp',
    author: {
      name: 'Boise Gun Club',
      title: 'Staff',
      avatar: '/images/bgcv3-shattered-clay.svg'
    },
    publishDate: '2023-12-20',
    readTime: 10,
    category: 'Equipment'
  },
  {
    id: '5',
    title: 'The Mental Game of Competitive Shooting',
    excerpt: 'Learn how to stay focused, manage pressure, and build the mental toughness required for competitive success.',
    image: '/images/events.webp',
    author: {
      name: 'Dr. Emily Chen',
      title: 'Sports Psychologist',
      avatar: '/avatars/04.png'
    },
    publishDate: '2023-12-15',
    readTime: 12,
    category: 'Training'
  },
  {
    id: '6',
    title: 'A Look Back at the 2023 Season',
    excerpt: 'A recap of the 2023 season, including tournament winners, club improvements, and community highlights.',
    image: '/images/training.webp',
    author: {
      name: 'Boise Gun Club',
      title: 'Staff',
      avatar: '/images/bgcv3-shattered-clay.svg'
    },
    publishDate: '2023-12-01',
    readTime: 7,
    category: 'Club News'
  }
];

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-bg-primary text-text-primary">
      <PageHero
        title="News & Announcements"
        subtitle="The latest updates from Boise Gun Club"
        description="Stay up-to-date with the latest news, events, and announcements from the club."
        icon={Newspaper}
        backgroundPreset="cool"
        gradient="from-brand-blue to-brand-blue-dark"
      />
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <BlogList articles={sampleArticles} />
        </div>
      </section>
    </main>
  );
}