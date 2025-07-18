'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Camera, 
  Search, 
  Filter, 
  Grid3X3, 
  List, 
  Calendar, 
  User, 
  Download, 
  Heart, 
  Share2,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  Play,
  Video
} from 'lucide-react';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
  photographer?: string;
  date?: string;
  category?: string;
  tags?: string[];
  likes?: number;
  downloads?: number;
  featured?: boolean;
  type?: 'image' | 'video';
}

interface GalleryGridProps {
  images: GalleryImage[];
  variant?: 'masonry' | 'grid' | 'list';
  showFilters?: boolean;
  showStats?: boolean;
  columns?: 2 | 3 | 4 | 5;
  className?: string;
}

interface GalleryLightboxProps {
  images: GalleryImage[];
  initialIndex?: number;
  onClose?: () => void;
}

interface GalleryCardProps {
  image: GalleryImage;
  variant?: 'default' | 'compact' | 'detailed';
  showStats?: boolean;
  onImageClick?: (image: GalleryImage) => void;
  className?: string;
}

// Single Gallery Card Component
export function GalleryCard({
  image,
  variant = 'default',
  showStats = true,
  onImageClick,
  className
}: GalleryCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (onImageClick) {
      onImageClick(image);
    }
  };

  return (
    <Card 
      className={cn(
        'group overflow-hidden cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Overlay */}
        <div className={cn(
          'absolute inset-0 bg-[var(--bg-primary)]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center',
          isHovered && 'opacity-100'
        )}>
          <div className="flex items-center gap-2">
            {image.type === 'video' ? (
              <div className="w-12 h-12 bg-[var(--card)]/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Play className="w-6 h-6 text-[var(--card)] ml-1" />
              </div>
            ) : (
              <div className="w-12 h-12 bg-[var(--card)]/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <ZoomIn className="w-6 h-6 text-[var(--card)]" />
              </div>
            )}
          </div>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {image.featured && (
            <Badge className="bg-accent-primary text-[var(--card)]">
              Featured
            </Badge>
          )}
          {image.category && (
            <Badge variant="secondary" className="bg-[var(--bg-primary)]/50 text-[var(--card)] border-0">
              {image.category}
            </Badge>
          )}
          {image.type === 'video' && (
            <Badge variant="secondary" className="bg-[var(--bg-primary)]/50 text-[var(--card)] border-0">
              <Video className="w-3 h-3 mr-1" />
              Video
            </Badge>
          )}
        </div>

        {/* Stats */}
        {showStats && (
          <div className="absolute bottom-3 right-3 flex items-center gap-2">
            {image.likes && (
              <div className="flex items-center gap-1 bg-[var(--bg-primary)]/50 backdrop-blur-sm rounded-full px-2 py-1">
                <Heart className="w-3 h-3 text-[var(--card)]" />
                <span className="text-xs text-[var(--card)]">{image.likes}</span>
              </div>
            )}
            {image.downloads && (
              <div className="flex items-center gap-1 bg-[var(--bg-primary)]/50 backdrop-blur-sm rounded-full px-2 py-1">
                <Download className="w-3 h-3 text-[var(--card)]" />
                <span className="text-xs text-[var(--card)]">{image.downloads}</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Image Info */}
      {variant === 'detailed' && (
        <CardContent className="p-4">
          <h3 className="font-heading font-semibold text-card-foreground mb-1">
            {image.title || image.alt}
          </h3>
          {image.description && (
            <p className="text-sm text-muted-foreground font-body mb-2 line-clamp-2">
              {image.description}
            </p>
          )}
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              {image.photographer && (
                <div className="flex items-center gap-1">
                  <User className="w-3 h-3" />
                  {image.photographer}
                </div>
              )}
              {image.date && (
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {new Date(image.date).toLocaleDateString()}
                </div>
              )}
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  );
}

// Gallery Grid Component
export function GalleryGrid({
  images,
  variant = 'grid',
  showFilters = true,
  showStats = true,
  columns = 3,
  className
}: GalleryGridProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(images.map(img => img.category).filter(Boolean)))];

  // Filter images
  const filteredImages = images.filter(image => {
    const matchesSearch = image.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.alt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || image.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getGridClassName = () => {
    switch (variant) {
      case 'masonry':
        return `columns-2 md:columns-${columns} lg:columns-${columns + 1} gap-4 space-y-4`;
      case 'list':
        return 'space-y-4';
      default:
        return `grid grid-cols-2 md:grid-cols-${columns} lg:grid-cols-${columns + 1} gap-4`;
    }
  };

  const handleImageClick = (image: GalleryImage) => {
    const index = filteredImages.findIndex(img => img.id === image.id);
    setLightboxIndex(index);
  };

  return (
    <div className={cn('space-y-6', className)}>
      {/* Filters */}
      {showFilters && (
        <div className="space-y-4">
          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search photos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category Tabs */}
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-1 w-full">
              {categories.slice(0, 6).map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  className="text-xs capitalize"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      )}

      {/* Stats */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground font-body">
          {filteredImages.length} {filteredImages.length === 1 ? 'photo' : 'photos'}
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Grid3X3 className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="sm">
            <List className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className={getGridClassName()}>
        {filteredImages.map((image) => (
          <GalleryCard
            key={image.id}
            image={image}
            variant={variant === 'list' ? 'detailed' : 'default'}
            showStats={showStats}
            onImageClick={handleImageClick}
            className={variant === 'masonry' ? 'break-inside-avoid' : ''}
          />
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <GalleryLightbox
          images={filteredImages}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  );
}

// Gallery Lightbox Component
export function GalleryLightbox({
  images,
  initialIndex = 0,
  onClose
}: GalleryLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const currentImage = images[currentIndex];

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
    if (e.key === 'Escape') onClose?.();
  };

  return (
    <Dialog open={true} onOpenChange={() => onClose?.()}>
      <DialogContent 
        className="max-w-7xl w-full h-full max-h-[95vh] p-0 bg-[var(--bg-primary)]/95 border-0"
        onKeyDown={handleKeyDown}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Close Button */}
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-4 right-4 z-50 text-[var(--card)] hover:bg-[var(--card)]/20"
            onClick={onClose}
          >
            <X className="w-5 h-5" />
          </Button>

          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="sm"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-40 text-[var(--card)] hover:bg-[var(--card)]/20"
            onClick={goToPrevious}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-40 text-[var(--card)] hover:bg-[var(--card)]/20"
            onClick={goToNext}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Main Image */}
          <div className="relative w-full h-full flex items-center justify-center p-8">
            {currentImage.type === 'video' ? (
              <video
                src={currentImage.src}
                controls
                className="max-w-full max-h-full object-contain"
                autoPlay
              />
            ) : (
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                width={1200}
                height={800}
                className="max-w-full max-h-full object-contain"
              />
            )}
          </div>

          {/* Image Info */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start justify-between text-[var(--card)]">
                <div className="flex-1">
                  <h3 className="text-xl font-heading font-bold mb-2">
                    {currentImage.title || currentImage.alt}
                  </h3>
                  {currentImage.description && (
                    <p className="text-[var(--card)]/80 font-body mb-2">
                      {currentImage.description}
                    </p>
                  )}
                  <div className="flex items-center gap-4 text-sm text-[var(--card)]/60">
                    {currentImage.photographer && (
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {currentImage.photographer}
                      </div>
                    )}
                    {currentImage.date && (
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(currentImage.date).toLocaleDateString()}
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <Camera className="w-4 h-4" />
                      {currentIndex + 1} of {images.length}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 ml-4">
                  <Button variant="ghost" size="sm" className="text-[var(--card)] hover:bg-[var(--card)]/20">
                    <Heart className="w-4 h-4 mr-2" />
                    {currentImage.likes || 0}
                  </Button>
                  <Button variant="ghost" size="sm" className="text-[var(--card)] hover:bg-[var(--card)]/20">
                    <Share2 className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-[var(--card)] hover:bg-[var(--card)]/20">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="absolute bottom-20 left-0 right-0 px-6">
            <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2">
              {images.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    'relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all',
                    index === currentIndex 
                      ? 'border-accent-primary' 
                      : 'border-transparent hover:border-white/40'
                  )}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                  {image.type === 'video' && (
                    <div className="absolute inset-0 bg-[var(--bg-primary)]/40 flex items-center justify-center">
                      <Play className="w-4 h-4 text-[var(--card)]" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}