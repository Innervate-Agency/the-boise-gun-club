'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { 
  Calendar, 
  Clock, 
  User, 
  Eye, 
  Heart, 
  Share2, 
  Bookmark, 
  ArrowRight,
  Tag,
  MessageSquare
} from 'lucide-react';

interface BlogAuthor {
  name: string;
  avatar?: string;
  bio?: string;
  title?: string;
}

interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  image?: string;
  author: BlogAuthor;
  publishDate: string;
  readTime: number;
  views?: number;
  likes?: number;
  comments?: number;
  tags?: string[];
  category?: string;
  featured?: boolean;
}

interface BlogCardProps {
  article: BlogArticle;
  variant?: 'default' | 'featured' | 'compact' | 'minimal';
  showStats?: boolean;
  showAuthor?: boolean;
  showImage?: boolean;
  className?: string;
}

interface BlogListProps {
  articles: BlogArticle[];
  variant?: 'grid' | 'list' | 'masonry';
  showFilters?: boolean;
  className?: string;
}

interface BlogDetailProps {
  article: BlogArticle;
  relatedArticles?: BlogArticle[];
  showSidebar?: boolean;
  className?: string;
}

// Single Blog Card Component
export function BlogCard({
  article,
  variant = 'default',
  showStats = true,
  showAuthor = true,
  showImage = true,
  className
}: BlogCardProps) {
  const getCardClassName = () => {
    switch (variant) {
      case 'featured':
        return 'border-0 shadow-xl bg-gradient-to-br from-accent-primary/5 to-brand-blue/5';
      case 'compact':
        return 'border-0 shadow-md';
      case 'minimal':
        return 'border-0 bg-transparent shadow-none';
      default:
        return 'border-0 shadow-lg hover:shadow-xl transition-shadow duration-300';
    }
  };

  return (
    <Card className={cn(getCardClassName(), 'group overflow-hidden', className)}>
      {/* Article Image */}
      {showImage && article.image && (
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {article.featured && (
            <Badge className="absolute top-4 left-4 bg-accent-primary text-white">
              Featured
            </Badge>
          )}
          {article.category && (
            <Badge 
              variant="secondary" 
              className="absolute top-4 right-4 bg-black/50 text-white border-0"
            >
              {article.category}
            </Badge>
          )}
        </div>
      )}

      <CardHeader className={variant === 'compact' ? 'pb-2' : 'pb-3'}>
        {/* Tags */}
        {article.tags && article.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-2">
            {article.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>
        )}

        <CardTitle className={cn(
          'font-heading font-bold text-card-foreground group-hover:text-accent-primary transition-colors line-clamp-2',
          variant === 'compact' ? 'text-lg' : 'text-xl md:text-2xl'
        )}>
          <Link href={`/blog/${article.id}`}>
            {article.title}
          </Link>
        </CardTitle>

        <CardDescription className={cn(
          'font-body text-muted-foreground line-clamp-3',
          variant === 'compact' ? 'text-sm' : 'text-base'
        )}>
          {article.excerpt}
        </CardDescription>
      </CardHeader>

      <CardContent className={variant === 'compact' ? 'pt-0' : undefined}>
        {/* Author and Date */}
        <div className="flex items-center justify-between mb-4">
          {showAuthor && (
            <div className="flex items-center gap-3">
              <Avatar className="w-8 h-8">
                <AvatarImage src={article.author.avatar} alt={article.author.name} />
                <AvatarFallback className="text-xs">
                  {article.author.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="text-sm font-medium text-card-foreground font-heading">
                  {article.author.name}
                </div>
                {article.author.title && (
                  <div className="text-xs text-muted-foreground font-body">
                    {article.author.title}
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="flex items-center gap-4 text-xs text-muted-foreground font-body">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {new Date(article.publishDate).toLocaleDateString()}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {article.readTime} min read
            </div>
          </div>
        </div>

        {/* Stats */}
        {showStats && (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              {article.views && (
                <div className="flex items-center gap-1">
                  <Eye className="w-3 h-3" />
                  {article.views.toLocaleString()}
                </div>
              )}
              {article.likes && (
                <div className="flex items-center gap-1">
                  <Heart className="w-3 h-3" />
                  {article.likes}
                </div>
              )}
              {article.comments && (
                <div className="flex items-center gap-1">
                  <MessageSquare className="w-3 h-3" />
                  {article.comments}
                </div>
              )}
            </div>

            <Button variant="ghost" size="sm" asChild>
              <Link href={`/blog/${article.id}`}>
                Read More
                <ArrowRight className="w-3 h-3 ml-1" />
              </Link>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// Blog List Component
export function BlogList({
  articles,
  variant = 'grid',
  showFilters = false,
  className
}: BlogListProps) {
  const getGridClassName = () => {
    switch (variant) {
      case 'list':
        return 'space-y-6';
      case 'masonry':
        return 'columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6';
      default:
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';
    }
  };

  return (
    <div className={cn('space-y-8', className)}>
      {/* Featured Article */}
      {articles.find(article => article.featured) && (
        <div className="mb-12">
          <h2 className="text-2xl font-heading font-bold text-card-foreground mb-6">
            Featured Article
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <BlogCard
              article={articles.find(article => article.featured)!}
              variant="featured"
              className="lg:col-span-2"
            />
          </div>
        </div>
      )}

      {/* Recent Articles */}
      <div>
        <h2 className="text-2xl font-heading font-bold text-card-foreground mb-6">
          Recent Articles
        </h2>
        <div className={getGridClassName()}>
          {articles
            .filter(article => !article.featured)
            .map((article) => (
              <BlogCard
                key={article.id}
                article={article}
                variant={variant === 'list' ? 'compact' : 'default'}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

// Blog Detail Component
export function BlogDetail({
  article,
  relatedArticles = [],
  showSidebar = true,
  className
}: BlogDetailProps) {
  return (
    <div className={cn('container mx-auto px-4 py-8', className)}>
      <div className={cn('grid gap-8', showSidebar ? 'lg:grid-cols-4' : 'max-w-4xl mx-auto')}>
        {/* Main Content */}
        <article className={showSidebar ? 'lg:col-span-3' : 'w-full'}>
          {/* Article Header */}
          <div className="mb-8">
            {article.category && (
              <Badge className="mb-4" variant="secondary">
                {article.category}
              </Badge>
            )}
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-card-foreground mb-4">
              {article.title}
            </h1>
            
            <p className="text-xl text-muted-foreground font-body mb-6">
              {article.excerpt}
            </p>

            {/* Author and Meta */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={article.author.avatar} alt={article.author.name} />
                  <AvatarFallback>
                    {article.author.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium text-card-foreground font-heading">
                    {article.author.name}
                  </div>
                  <div className="text-sm text-muted-foreground font-body">
                    {article.author.title}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(article.publishDate).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {article.readTime} min read
                </div>
              </div>
            </div>

            {/* Featured Image */}
            {article.image && (
              <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>

          {/* Article Content */}
          {article.content && (
            <div className="prose prose-lg max-w-none font-body text-card-foreground">
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>
          )}

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="mt-8 pt-6 border-t">
              <h3 className="text-lg font-heading font-semibold text-card-foreground mb-4">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Share and Actions */}
          <div className="mt-8 pt-6 border-t">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm">
                  <Heart className="w-4 h-4 mr-2" />
                  Like ({article.likes || 0})
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
                <Button variant="outline" size="sm">
                  <Bookmark className="w-4 h-4 mr-2" />
                  Bookmark
                </Button>
              </div>

              <div className="text-sm text-muted-foreground">
                {article.views && `${article.views.toLocaleString()} views`}
              </div>
            </div>
          </div>
        </article>

        {/* Sidebar */}
        {showSidebar && (
          <aside className="space-y-6">
            {/* Author Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-heading">About the Author</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={article.author.avatar} alt={article.author.name} />
                    <AvatarFallback>
                      {article.author.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-card-foreground font-heading mb-1">
                      {article.author.name}
                    </div>
                    <div className="text-sm text-muted-foreground font-body mb-2">
                      {article.author.title}
                    </div>
                    {article.author.bio && (
                      <p className="text-sm text-muted-foreground font-body">
                        {article.author.bio}
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-heading">Related Articles</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {relatedArticles.slice(0, 3).map((relatedArticle) => (
                    <div key={relatedArticle.id}>
                      <Link 
                        href={`/blog/${relatedArticle.id}`}
                        className="block group"
                      >
                        <h4 className="font-medium text-card-foreground group-hover:text-accent-primary transition-colors font-heading mb-1 line-clamp-2">
                          {relatedArticle.title}
                        </h4>
                        <div className="text-xs text-muted-foreground font-body">
                          {new Date(relatedArticle.publishDate).toLocaleDateString()} • {relatedArticle.readTime} min read
                        </div>
                      </Link>
                      {relatedArticles.indexOf(relatedArticle) < relatedArticles.length - 1 && (
                        <Separator className="mt-4" />
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}
          </aside>
        )}
      </div>
    </div>
  );
}