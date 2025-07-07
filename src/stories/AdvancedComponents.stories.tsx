import type { Meta, StoryObj } from '@storybook/react';
import { BlogCard, BlogList, BlogDetail } from '@/components/ui/blog-article';
import { GalleryGrid, GalleryCard } from '@/components/ui/gallery-showcase';
import { PricingTable, PricingCard, samplePlans } from '@/components/ui/pricing-table';
import { FAQAccordion, sampleFAQs } from '@/components/ui/faq-accordion';

const meta: Meta = {
  title: 'Components/Advanced/Content Components',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Advanced content components including blog articles, image galleries, pricing tables, and FAQ sections for professional website building.',
      },
    },
  },
};

export default meta;

// Sample data for stories
const sampleArticles = [
  {
    id: '1',
    title: 'Mastering Trap Shooting: Tips from the Pros',
    excerpt: 'Learn essential techniques and strategies from professional trap shooters to improve your accuracy and consistency on the range.',
    content: '<p>Trap shooting is one of the most popular clay target sports, requiring precision, timing, and mental focus...</p>',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop',
    author: {
      name: 'Mike Rodriguez',
      title: 'Head Instructor',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      bio: 'Mike has been teaching shooting sports for over 15 years and is a certified NRA instructor.'
    },
    publishDate: '2024-01-15',
    readTime: 8,
    views: 1250,
    likes: 24,
    comments: 12,
    tags: ['trap shooting', 'techniques', 'training'],
    category: 'Training',
    featured: true
  },
  {
    id: '2',
    title: 'Safety First: Essential Range Rules Every Shooter Must Know',
    excerpt: 'A comprehensive guide to range safety protocols and best practices for new and experienced shooters.',
    image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=400&fit=crop',
    author: {
      name: 'Sarah Johnson',
      title: 'Safety Officer',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    },
    publishDate: '2024-01-10',
    readTime: 5,
    views: 890,
    likes: 18,
    comments: 8,
    tags: ['safety', 'rules', 'protocols'],
    category: 'Safety'
  },
  {
    id: '3',
    title: 'Club Championship Results: Record Breaking Scores',
    excerpt: 'Highlights from our annual championship tournament featuring exceptional performances and new club records.',
    image: 'https://images.unsplash.com/photo-1565034946487-077786996990?w=800&h=400&fit=crop',
    author: {
      name: 'Tom Wilson',
      title: 'Tournament Director',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    publishDate: '2024-01-05',
    readTime: 6,
    views: 645,
    likes: 15,
    comments: 20,
    tags: ['tournament', 'championship', 'results'],
    category: 'Events'
  }
];

const sampleImages = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop',
    alt: 'Shooter taking aim at clay targets',
    title: 'Championship Tournament 2024',
    description: 'Action shot from our annual championship tournament',
    photographer: 'Club Photography Team',
    date: '2024-01-15',
    category: 'Tournaments',
    tags: ['tournament', 'action', 'shooting'],
    likes: 24,
    downloads: 8,
    featured: true
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1565034946487-077786996990?w=600&h=600&fit=crop',
    alt: 'Clay target fragments in slow motion',
    title: 'Perfect Shot',
    description: 'Capturing the moment of impact in stunning detail',
    photographer: 'Mike Rodriguez',
    date: '2024-01-12',
    category: 'Action',
    tags: ['clay targets', 'action', 'slow motion'],
    likes: 18,
    downloads: 12
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=600&fit=crop',
    alt: 'Safety equipment and shooting gear',
    title: 'Safety First',
    description: 'Essential safety equipment for all shooters',
    photographer: 'Sarah Johnson',
    date: '2024-01-10',
    category: 'Safety',
    tags: ['safety', 'equipment', 'gear'],
    likes: 15,
    downloads: 6,
    type: 'image' as const
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=600&h=600&fit=crop',
    alt: 'Club facilities overview',
    title: 'World Class Facilities',
    description: 'Our state-of-the-art shooting ranges and amenities',
    photographer: 'Club Staff',
    date: '2024-01-08',
    category: 'Facilities',
    tags: ['facilities', 'ranges', 'amenities'],
    likes: 20,
    downloads: 10
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1544550285-f813152fb2fd?w=600&h=600&fit=crop',
    alt: 'Group lesson in progress',
    title: 'Professional Instruction',
    description: 'Our certified instructors providing expert guidance',
    photographer: 'Tom Wilson',
    date: '2024-01-05',
    category: 'Training',
    tags: ['instruction', 'learning', 'group'],
    likes: 12,
    downloads: 4
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
    alt: 'Training session video',
    title: 'Advanced Techniques Workshop',
    description: 'Video tutorial on advanced shooting techniques',
    photographer: 'Education Team',
    date: '2024-01-03',
    category: 'Training',
    tags: ['video', 'techniques', 'tutorial'],
    likes: 16,
    downloads: 7,
    type: 'video' as const
  }
];

// Blog Components Stories
export const BlogShowcase: StoryObj = {
  render: () => (
    <div className="min-h-screen bg-muted/20 py-16">
      <div className="container mx-auto px-4 space-y-16">
        {/* Blog Cards */}
        <div>
          <h2 className="text-3xl font-heading font-bold text-center mb-8">Blog Article Cards</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {sampleArticles.map((article) => (
              <BlogCard
                key={article.id}
                article={article}
                variant="default"
                showStats={true}
                showAuthor={true}
              />
            ))}
          </div>
          
          {/* Compact Variant */}
          <h3 className="text-xl font-heading font-semibold mb-4">Compact Variant</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <BlogCard
              article={sampleArticles[0]}
              variant="compact"
              showStats={false}
            />
            <BlogCard
              article={sampleArticles[1]}
              variant="minimal"
              showImage={false}
            />
          </div>
        </div>

        {/* Blog List */}
        <div>
          <h2 className="text-3xl font-heading font-bold text-center mb-8">Blog List Component</h2>
          <BlogList
            articles={sampleArticles}
            variant="grid"
            showFilters={true}
          />
        </div>
      </div>
    </div>
  ),
};

// Gallery Components Stories
export const GalleryShowcase: StoryObj = {
  render: () => (
    <div className="min-h-screen bg-muted/20 py-16">
      <div className="container mx-auto px-4 space-y-16">
        {/* Gallery Grid */}
        <div>
          <h2 className="text-3xl font-heading font-bold text-center mb-8">Image Gallery</h2>
          <GalleryGrid
            images={sampleImages}
            variant="grid"
            showFilters={true}
            showStats={true}
            columns={3}
          />
        </div>

        {/* Individual Gallery Cards */}
        <div>
          <h2 className="text-3xl font-heading font-bold text-center mb-8">Gallery Card Variants</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <GalleryCard
              image={sampleImages[0]}
              variant="default"
              showStats={true}
            />
            <GalleryCard
              image={sampleImages[1]}
              variant="compact"
              showStats={false}
            />
            <GalleryCard
              image={sampleImages[2]}
              variant="detailed"
              showStats={true}
            />
          </div>
        </div>
      </div>
    </div>
  ),
};

// Pricing Components Stories
export const PricingShowcase: StoryObj = {
  render: () => (
    <div className="min-h-screen bg-muted/20 py-16">
      <div className="container mx-auto px-4 space-y-16">
        {/* Full Pricing Table */}
        <div>
          <PricingTable
            plans={samplePlans}
            showAnnualDiscount={true}
            showFeatureComparison={true}
            variant="default"
          />
        </div>

        {/* Individual Pricing Cards */}
        <div>
          <h2 className="text-3xl font-heading font-bold text-center mb-8">Pricing Card Variants</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {samplePlans.map((plan) => (
              <PricingCard
                key={plan.id}
                plan={plan}
                isAnnual={false}
                variant="default"
                showFeatures={true}
              />
            ))}
          </div>
        </div>

        {/* Compact Pricing */}
        <div>
          <h3 className="text-xl font-heading font-semibold text-center mb-4">Compact Variant</h3>
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {samplePlans.map((plan) => (
              <PricingCard
                key={plan.id}
                plan={plan}
                isAnnual={true}
                variant="compact"
                showFeatures={false}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
};

// FAQ Components Stories
export const FAQShowcase: StoryObj = {
  render: () => (
    <div className="min-h-screen bg-muted/20 py-16">
      <div className="container mx-auto px-4">
        <FAQAccordion
          faqs={sampleFAQs}
          showSearch={true}
          showCategories={true}
          showHelpfulVoting={true}
          variant="default"
        />
      </div>
    </div>
  ),
};

// Combined Demo Story
export const CompleteContentDemo: StoryObj = {
  render: () => (
    <div className="min-h-screen bg-gradient-to-br from-muted/10 to-muted/30">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-accent-primary to-brand-blue text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Advanced Content Components
          </h1>
          <p className="text-xl font-body max-w-2xl mx-auto">
            Professional blog, gallery, pricing, and FAQ components for rapid website building
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 space-y-20">
        {/* Quick Pricing Preview */}
        <section>
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Membership Options</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {samplePlans.map((plan) => (
              <PricingCard
                key={plan.id}
                plan={plan}
                isAnnual={false}
                variant="compact"
                showFeatures={false}
              />
            ))}
          </div>
        </section>

        {/* Gallery Preview */}
        <section>
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Photo Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {sampleImages.slice(0, 6).map((image) => (
              <GalleryCard
                key={image.id}
                image={image}
                variant="default"
                showStats={false}
              />
            ))}
          </div>
        </section>

        {/* Blog Preview */}
        <section>
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleArticles.map((article) => (
              <BlogCard
                key={article.id}
                article={article}
                variant="compact"
                showStats={true}
                showAuthor={false}
              />
            ))}
          </div>
        </section>

        {/* FAQ Preview */}
        <section>
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Common Questions</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-4">
              {sampleFAQs.filter(faq => faq.featured).map((faq) => (
                <div key={faq.id} className="bg-card rounded-lg p-6 shadow-md">
                  <h3 className="font-heading font-semibold text-card-foreground mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  ),
};