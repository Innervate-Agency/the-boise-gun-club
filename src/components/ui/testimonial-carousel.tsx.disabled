'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company?: string;
  avatar?: string;
  content: string;
  rating?: number;
  badge?: string;
}

interface TestimonialCarouselProps {
  title?: string;
  subtitle?: string;
  testimonials: Testimonial[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  variant?: 'default' | 'glass' | 'minimal';
  className?: string;
}

export function TestimonialCarousel({
  title,
  subtitle,
  testimonials,
  autoPlay = true,
  autoPlayInterval = 5000,
  showDots = true,
  showArrows = true,
  variant = 'default',
  className
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const getCardClassName = () => {
    switch (variant) {
      case 'glass':
        return 'bg-[var(--card)]/10 backdrop-blur-md border-white/20';
      case 'minimal':
        return 'border-0 bg-transparent';
      default:
        return 'shadow-xl';
    }
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className={cn('py-16 md:py-24', className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-16 max-w-3xl mx-auto">
            {subtitle && (
              <p className="text-lg text-accent-primary font-heading font-semibold mb-4 uppercase tracking-wider">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-card-foreground mb-6">
                {title}
              </h2>
            )}
          </div>
        )}

        <div className="relative max-w-4xl mx-auto">
          <Card className={cn(
            'transition-all duration-500 ease-in-out',
            getCardClassName()
          )}>
            <CardContent className="p-8 md:p-12 text-center">
              {/* Quote Icon */}
              <Quote className="w-12 h-12 text-accent-primary mx-auto mb-6 opacity-50" />
              
              {/* Rating */}
              {currentTestimonial.rating && (
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        'w-5 h-5',
                        i < currentTestimonial.rating!
                          ? 'text-[var(--color-leonard-yellow)] fill-current'
                          : 'text-[var(--muted-foreground)]'
                      )}
                    />
                  ))}
                </div>
              )}

              {/* Content */}
              <div className="text-xl md:text-2xl font-body font-light text-card-foreground leading-relaxed mb-8 italic">
                "{currentTestimonial.content}"
              </div>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={currentTestimonial.avatar} />
                  <AvatarFallback className="bg-accent-primary text-[var(--card)] font-heading font-bold text-lg">
                    {currentTestimonial.name
                      .split(' ')
                      .map(n => n[0])
                      .join('')
                      .toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                
                <div className="text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="font-heading font-bold text-lg text-card-foreground">
                      {currentTestimonial.name}
                    </div>
                    {currentTestimonial.badge && (
                      <Badge variant="secondary" className="text-xs">
                        {currentTestimonial.badge}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="text-muted-foreground font-body">
                    {currentTestimonial.role}
                    {currentTestimonial.company && (
                      <span> • {currentTestimonial.company}</span>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Arrows */}
          {showArrows && testimonials.length > 1 && (
            <>
              <Button
                variant="outline"
                size="sm"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full w-12 h-12 p-0 bg-[var(--card)]/10 backdrop-blur-sm border-white/20 hover:bg-[var(--card)]/20"
                onClick={goToPrevious}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full w-12 h-12 p-0 bg-[var(--card)]/10 backdrop-blur-sm border-white/20 hover:bg-[var(--card)]/20"
                onClick={goToNext}
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </>
          )}
        </div>

        {/* Dots Navigation */}
        {showDots && testimonials.length > 1 && (
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  'w-3 h-3 rounded-full transition-all duration-300',
                  index === currentIndex
                    ? 'bg-accent-primary scale-125'
                    : 'bg-[var(--muted)] hover:bg-[var(--muted)]/80'
                )}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}