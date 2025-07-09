'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, 
  HelpCircle, 
  Target, 
  Users, 
  Shield, 
  Calendar, 
  CreditCard, 
  Phone, 
  MessageCircle,
  BookOpen,
  ChevronRight,
  Star,
  ThumbsUp,
  Clock,
  MapPin,
  Zap
} from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  tags?: string[];
  helpful?: number;
  featured?: boolean;
}

interface FAQCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
  categories?: FAQCategory[];
  showSearch?: boolean;
  showCategories?: boolean;
  showHelpfulVoting?: boolean;
  variant?: 'default' | 'compact' | 'card';
  className?: string;
}

interface FAQSearchProps {
  faqs: FAQItem[];
  onResults: (results: FAQItem[]) => void;
  className?: string;
}

interface FAQStatsProps {
  faqs: FAQItem[];
  className?: string;
}

// Default categories
const defaultCategories: FAQCategory[] = [
  {
    id: 'membership',
    title: 'Membership',
    description: 'Join, pricing, and member benefits',
    icon: Users,
    color: 'from-accent-primary to-brand-blue'
  },
  {
    id: 'safety',
    title: 'Safety',
    description: 'Rules, procedures, and guidelines',
    icon: Shield,
    color: 'from-brand-red-action to-accent-secondary'
  },
  {
    id: 'facilities',
    title: 'Facilities',
    description: 'Ranges, equipment, and amenities',
    icon: Target,
    color: 'from-brand-green to-brand-blue-dark'
  },
  {
    id: 'events',
    title: 'Events',
    description: 'Competitions, lessons, and activities',
    icon: Calendar,
    color: 'from-lahoma-orange to-accent-primary'
  },
  {
    id: 'billing',
    title: 'Billing',
    description: 'Payments, fees, and subscriptions',
    icon: CreditCard,
    color: 'from-brand-blue to-brand-blue-dark'
  },
  {
    id: 'general',
    title: 'General',
    description: 'Hours, location, and contact info',
    icon: HelpCircle,
    color: 'from-muted-foreground to-card-foreground'
  }
];

// FAQ Search Component
export function FAQSearch({ faqs, onResults, className }: FAQSearchProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    
    if (!term.trim()) {
      onResults(faqs);
      return;
    }

    const filtered = faqs.filter(faq =>
      faq.question.toLowerCase().includes(term.toLowerCase()) ||
      faq.answer.toLowerCase().includes(term.toLowerCase()) ||
      faq.tags?.some(tag => tag.toLowerCase().includes(term.toLowerCase()))
    );

    onResults(filtered);
  };

  return (
    <div className={cn('relative max-w-2xl mx-auto', className)}>
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
      <Input
        placeholder="Search frequently asked questions..."
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        className="pl-12 h-12 text-lg bg-card border-2 border-muted focus:border-accent-primary"
      />
      {searchTerm && (
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <Badge variant="secondary" className="text-xs">
            {faqs.filter(faq =>
              faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
              faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
            ).length} results
          </Badge>
        </div>
      )}
    </div>
  );
}

// FAQ Stats Component
export function FAQStats({ faqs, className }: FAQStatsProps) {
  const totalFAQs = faqs.length;
  const categoriesCount = new Set(faqs.map(faq => faq.category)).size;
  const mostHelpful = Math.max(...faqs.map(faq => faq.helpful || 0));
  const avgHelpfulness = faqs.reduce((acc, faq) => acc + (faq.helpful || 0), 0) / totalFAQs;

  return (
    <div className={cn('grid grid-cols-2 md:grid-cols-4 gap-4', className)}>
      {[
        { label: 'Total Questions', value: totalFAQs, icon: HelpCircle },
        { label: 'Categories', value: categoriesCount, icon: BookOpen },
        { label: 'Most Helpful', value: mostHelpful, icon: ThumbsUp },
        { label: 'Avg. Rating', value: avgHelpfulness.toFixed(1), icon: Star }
      ].map((stat, index) => (
        <Card key={index} className="text-center">
          <CardContent className="p-4">
            <stat.icon className="w-6 h-6 text-accent-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-card-foreground font-heading">
              {stat.value}
            </div>
            <div className="text-sm text-muted-foreground font-body">
              {stat.label}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

// Main FAQ Accordion Component
export function FAQAccordion({
  faqs,
  categories = defaultCategories,
  showSearch = true,
  showCategories = true,
  showHelpfulVoting = true,
  variant = 'default',
  className
}: FAQAccordionProps) {
  const [filteredFAQs, setFilteredFAQs] = useState(faqs);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [helpfulVotes, setHelpfulVotes] = useState<Record<string, number>>({});

  // Filter FAQs by category
  const categoryFilteredFAQs = selectedCategory === 'all' 
    ? filteredFAQs 
    : filteredFAQs.filter(faq => faq.category === selectedCategory);

  // Featured FAQs
  const featuredFAQs = categoryFilteredFAQs.filter(faq => faq.featured);
  const regularFAQs = categoryFilteredFAQs.filter(faq => !faq.featured);

  const handleHelpfulVote = (faqId: string) => {
    setHelpfulVotes(prev => ({
      ...prev,
      [faqId]: (prev[faqId] || 0) + 1
    }));
  };

  const renderFAQItem = (faq: FAQItem, index: number) => {
    const totalHelpful = (faq.helpful || 0) + (helpfulVotes[faq.id] || 0);

    if (variant === 'card') {
      return (
        <Card key={faq.id} className="border-0 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-start justify-between">
              <CardTitle className="text-lg font-heading font-semibold text-card-foreground pr-4">
                {faq.question}
              </CardTitle>
              {faq.featured && (
                <Badge className="bg-accent-primary text-[var(--card)]">
                  Featured
                </Badge>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              {faq.answer}
            </p>
            
            {/* Tags */}
            {faq.tags && faq.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {faq.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            {/* Helpful voting */}
            {showHelpfulVoting && (
              <div className="flex items-center justify-between pt-4 border-t">
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleHelpfulVote(faq.id)}
                    className="text-muted-foreground hover:text-accent-primary"
                  >
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    Helpful ({totalHelpful})
                  </Button>
                </div>
                <Badge variant="outline" className="text-xs">
                  {categories.find(c => c.id === faq.category)?.title || faq.category}
                </Badge>
              </div>
            )}
          </CardContent>
        </Card>
      );
    }

    return (
      <AccordionItem key={faq.id} value={faq.id} className={variant === 'compact' ? 'border-b py-2' : undefined}>
        <AccordionTrigger className="hover:no-underline group">
          <div className="flex items-start justify-between w-full pr-4">
            <span className="text-left font-heading font-semibold text-card-foreground group-hover:text-accent-primary transition-colors">
              {faq.question}
            </span>
            <div className="flex items-center gap-2 ml-4">
              {faq.featured && (
                <Badge className="bg-accent-primary text-[var(--card)] text-xs">
                  Featured
                </Badge>
              )}
              {totalHelpful > 0 && (
                <Badge variant="outline" className="text-xs">
                  {totalHelpful} helpful
                </Badge>
              )}
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="pt-2">
          <div className="space-y-4">
            <p className="text-muted-foreground font-body leading-relaxed">
              {faq.answer}
            </p>
            
            {/* Tags */}
            {faq.tags && faq.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {faq.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            {/* Helpful voting */}
            {showHelpfulVoting && (
              <div className="flex items-center justify-between pt-4 border-t">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleHelpfulVote(faq.id)}
                  className="text-muted-foreground hover:text-accent-primary"
                >
                  <ThumbsUp className="w-4 h-4 mr-1" />
                  Was this helpful? ({totalHelpful})
                </Button>
                <Badge variant="outline" className="text-xs">
                  {categories.find(c => c.id === faq.category)?.title || faq.category}
                </Badge>
              </div>
            )}
          </div>
        </AccordionContent>
      </AccordionItem>
    );
  };

  return (
    <div className={cn('space-y-8', className)}>
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-accent-primary to-brand-blue rounded-xl flex items-center justify-center">
            <HelpCircle className="w-6 h-6 text-[var(--card)]" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-card-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground font-body">
              Find answers to common questions about membership, safety, and facilities
            </p>
          </div>
        </div>

        {/* Search */}
        {showSearch && (
          <FAQSearch faqs={faqs} onResults={setFilteredFAQs} />
        )}
      </div>

      {/* Stats */}
      <FAQStats faqs={faqs} />

      {/* Categories */}
      {showCategories && (
        <div className="space-y-4">
          <h3 className="text-xl font-heading font-bold text-card-foreground text-center">
            Browse by Category
          </h3>
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            <TabsList className="grid grid-cols-3 lg:grid-cols-6 gap-1 w-full">
              <TabsTrigger value="all">All</TabsTrigger>
              {categories.slice(0, 5).map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="text-xs">
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {/* Category Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => {
              const categoryFAQs = faqs.filter(faq => faq.category === category.id);
              const IconComponent = category.icon;
              
              return (
                <Card
                  key={category.id}
                  className={cn(
                    'cursor-pointer border-0 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden',
                    selectedCategory === category.id 
                      ? 'ring-2 ring-accent-primary bg-accent-primary/5' 
                      : 'hover:scale-105'
                  )}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <CardContent className="p-4 text-center">
                    <div className={cn(
                      'w-10 h-10 rounded-lg mx-auto mb-3 flex items-center justify-center bg-gradient-to-br',
                      category.color
                    )}>
                      <IconComponent className="w-5 h-5 text-[var(--card)]" />
                    </div>
                    <h4 className="font-heading font-semibold text-card-foreground text-sm mb-1">
                      {category.title}
                    </h4>
                    <p className="text-xs text-muted-foreground font-body mb-2">
                      {category.description}
                    </p>
                    <Badge variant="outline" className="text-xs">
                      {categoryFAQs.length} questions
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      )}

      {/* Featured FAQs */}
      {featuredFAQs.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-heading font-bold text-card-foreground flex items-center gap-2">
            <Star className="w-5 h-5 text-accent-primary" />
            Featured Questions
          </h3>
          
          {variant === 'card' ? (
            <div className="grid gap-4">
              {featuredFAQs.map((faq, index) => renderFAQItem(faq, index))}
            </div>
          ) : (
            <Accordion type="single" collapsible className="w-full">
              {featuredFAQs.map((faq, index) => renderFAQItem(faq, index))}
            </Accordion>
          )}
        </div>
      )}

      {/* Regular FAQs */}
      {regularFAQs.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-heading font-bold text-card-foreground">
            {selectedCategory === 'all' ? 'All Questions' : 
             categories.find(c => c.id === selectedCategory)?.title + ' Questions'}
          </h3>
          
          {variant === 'card' ? (
            <div className="grid gap-4">
              {regularFAQs.map((faq, index) => renderFAQItem(faq, index))}
            </div>
          ) : (
            <Accordion type="single" collapsible className="w-full">
              {regularFAQs.map((faq, index) => renderFAQItem(faq, index))}
            </Accordion>
          )}
        </div>
      )}

      {/* No Results */}
      {categoryFilteredFAQs.length === 0 && (
        <Card className="text-center py-12">
          <CardContent>
            <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-heading font-semibold text-card-foreground mb-2">
              No questions found
            </h3>
            <p className="text-muted-foreground font-body mb-6">
              Try adjusting your search terms or browse different categories.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button variant="outline" onClick={() => setFilteredFAQs(faqs)}>
                Clear Search
              </Button>
              <Button variant="outline" onClick={() => setSelectedCategory('all')}>
                View All Categories
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Contact Support */}
      <Card className="bg-gradient-to-br from-accent-primary/10 to-brand-blue/10 border-0">
        <CardContent className="p-8 text-center">
          <MessageCircle className="w-12 h-12 text-accent-primary mx-auto mb-4" />
          <h3 className="text-xl font-heading font-bold text-card-foreground mb-2">
            Still need help?
          </h3>
          <p className="text-muted-foreground font-body mb-6">
            Can't find what you're looking for? Our team is here to help.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button asChild>
              <a href="/contact">
                <MessageCircle className="w-4 h-4 mr-2" />
                Contact Support
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="tel:+12083628686">
                <Phone className="w-4 h-4 mr-2" />
                Call Us
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Export sample FAQs for development
export const sampleFAQs: FAQItem[] = [
  {
    id: '1',
    question: 'What are your membership options and pricing?',
    answer: 'We offer three membership tiers: Basic ($49/month), Premium ($89/month), and Elite ($149/month). Annual memberships receive significant discounts. Each tier includes different levels of range access, equipment rental, and additional perks.',
    category: 'membership',
    tags: ['pricing', 'plans', 'benefits'],
    helpful: 24,
    featured: true
  },
  {
    id: '2',
    question: 'What safety equipment is required on the ranges?',
    answer: 'All shooters must wear proper eye and ear protection at all times on the ranges. We provide safety equipment rentals, but you\'re welcome to bring your own ANSI-approved gear. Hard-soled shoes are also required.',
    category: 'safety',
    tags: ['equipment', 'protection', 'rules'],
    helpful: 18,
    featured: true
  },
  {
    id: '3',
    question: 'Do you offer beginner shooting lessons?',
    answer: 'Yes! We offer comprehensive beginner courses that cover safety, basic shooting techniques, and range etiquette. Our certified instructors provide one-on-one and group lessons. Contact us to schedule your first lesson.',
    category: 'events',
    tags: ['lessons', 'training', 'beginners'],
    helpful: 15
  },
  {
    id: '4',
    question: 'What are your operating hours?',
    answer: 'We\'re open Monday-Friday 10AM-6PM, Saturday 9AM-7PM, and Sunday 10AM-5PM. Elite members have 24/7 access with their key card. Hours may vary on holidays.',
    category: 'general',
    tags: ['hours', 'schedule', 'access'],
    helpful: 12
  },
  {
    id: '5',
    question: 'Can I bring guests to the club?',
    answer: 'Yes, members can bring guests depending on their membership level. Basic members can bring 2 guests per month, Premium members can bring 4, and Elite members have unlimited guest privileges. Guests must complete a waiver and safety briefing.',
    category: 'membership',
    tags: ['guests', 'visitors', 'privileges'],
    helpful: 9
  }
];