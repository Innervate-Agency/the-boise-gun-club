'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Mail, 
  Phone, 
  User, 
  MessageSquare, 
  Calendar, 
  Target, 
  CheckCircle2, 
  AlertCircle,
  Loader2
} from 'lucide-react';

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  description?: string;
  variant?: 'default' | 'glass' | 'minimal';
  showContactInfo?: boolean;
  formType?: 'contact' | 'membership' | 'event' | 'lesson';
  onSubmit?: (data: FormData) => Promise<void>;
  className?: string;
}

interface FormData {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  experience?: string;
  eventDate?: string;
  agreeToTerms: boolean;
  newsletter: boolean;
}

const formTypes = {
  contact: {
    title: 'Get In Touch',
    subtitle: 'Contact Us',
    description: 'Send us a message and we\'ll get back to you within 24 hours.',
    submitText: 'Send Message',
    subjects: [
      'General Inquiry',
      'Membership Question',
      'Event Information',
      'Facility Tour',
      'Private Lessons',
      'Group Events',
      'Safety Certification',
      'Other'
    ]
  },
  membership: {
    title: 'Join The Club',
    subtitle: 'Membership Application',
    description: 'Start your membership application. We\'ll contact you to complete the process.',
    submitText: 'Apply for Membership',
    subjects: [
      'Individual Membership',
      'Family Membership',
      'Corporate Membership',
      'Student Membership',
      'Military/Veteran Discount',
      'Senior Discount'
    ]
  },
  event: {
    title: 'Event Registration',
    subtitle: 'Register for Event',
    description: 'Register for upcoming events and competitions.',
    submitText: 'Register for Event',
    subjects: [
      'Weekly Trap Shoot',
      'Monthly Tournament',
      'Safety Course',
      'Private Group Event',
      'Corporate Event',
      'Birthday Party'
    ]
  },
  lesson: {
    title: 'Book a Lesson',
    subtitle: 'Private Instruction',
    description: 'Schedule one-on-one instruction with our certified professionals.',
    submitText: 'Book Lesson',
    subjects: [
      'Beginner Trap Shooting',
      'Advanced Trap Techniques',
      'Skeet Shooting',
      'Sporting Clays',
      'Competition Preparation',
      'Safety Certification'
    ]
  }
};

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '(208) 362-8686',
    link: 'tel:+12083628686'
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@boisegunclub.com',
link: 'mailto:info@boisegunclub.com'
  },
  {
    icon: Target,
    label: 'Address',
    value: '13570 W Flamingo Rd, Boise, ID 83713',
    link: 'https://maps.google.com/?q=13570+W+Flamingo+Rd,+Boise,+ID+83713'
  }
];

export function ContactForm({
  title,
  subtitle,
  description,
  variant = 'default',
  showContactInfo = true,
  formType = 'contact',
  onSubmit,
  className
}: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    experience: '',
    eventDate: '',
    agreeToTerms: false,
    newsletter: true
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const config = formTypes[formType];
  const displayTitle = title || config.title;
  const displaySubtitle = subtitle || config.subtitle;
  const displayDescription = description || config.description;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
      setIsSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateFormData = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const getCardClassName = () => {
    switch (variant) {
      case 'glass':
        return 'bg-[var(--card)]/10 backdrop-blur-md border-white/20';
      case 'minimal':
        return 'border-0 bg-transparent shadow-none';
      default:
        return 'shadow-xl';
    }
  };

  if (isSubmitted) {
    return (
      <Card className={cn(getCardClassName(), 'text-center', className)}>
        <CardContent className="p-8">
          <CheckCircle2 className="w-16 h-16 text-accent-primary mx-auto mb-4" />
          <h3 className="text-2xl font-heading font-bold text-card-foreground mb-2">
            Message Sent!
          </h3>
          <p className="text-muted-foreground font-body mb-6">
            Thank you for contacting us. We'll get back to you within 24 hours.
          </p>
          <Button 
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
                experience: '',
                eventDate: '',
                agreeToTerms: false,
                newsletter: true
              });
            }}
            variant="outline"
          >
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className={cn('grid gap-8', showContactInfo ? 'lg:grid-cols-3' : 'max-w-2xl mx-auto', className)}>
      {/* Contact Form */}
      <Card className={cn(getCardClassName(), showContactInfo ? 'lg:col-span-2' : 'w-full')}>
        <CardHeader>
          {displaySubtitle && (
            <Badge className="w-fit mb-2" variant="secondary">
              {displaySubtitle}
            </Badge>
          )}
          <CardTitle className="text-2xl md:text-3xl font-heading font-bold text-card-foreground">
            {displayTitle}
          </CardTitle>
          {displayDescription && (
            <CardDescription className="text-lg font-body">
              {displayDescription}
            </CardDescription>
          )}
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">
                  Full Name <span className="text-[var(--brand-red-action)]">*</span>
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="name"
                    type="text"
                    required
                    className="pl-10"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => updateFormData('name', e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">
                  Email Address <span className="text-[var(--brand-red-action)]">*</span>
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    required
                    className="pl-10"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Phone and Subject Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="phone"
                    type="tel"
                    className="pl-10"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => updateFormData('phone', e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">
                  Subject <span className="text-[var(--brand-red-action)]">*</span>
                </Label>
                <Select
                  required
                  value={formData.subject}
                  onValueChange={(value) => updateFormData('subject', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a topic" />
                  </SelectTrigger>
                  <SelectContent>
                    {config.subjects.map((subject) => (
                      <SelectItem key={subject} value={subject}>
                        {subject}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Experience Level (for lessons/membership) */}
            {(formType === 'lesson' || formType === 'membership') && (
              <div className="space-y-2">
                <Label htmlFor="experience">Experience Level</Label>
                <Select
                  value={formData.experience}
                  onValueChange={(value) => updateFormData('experience', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner (0-1 years)</SelectItem>
                    <SelectItem value="intermediate">Intermediate (2-5 years)</SelectItem>
                    <SelectItem value="advanced">Advanced (5+ years)</SelectItem>
                    <SelectItem value="expert">Expert/Competitive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Event Date (for events) */}
            {formType === 'event' && (
              <div className="space-y-2">
                <Label htmlFor="eventDate">Preferred Date</Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="eventDate"
                    type="date"
                    className="pl-10"
                    value={formData.eventDate}
                    onChange={(e) => updateFormData('eventDate', e.target.value)}
                  />
                </div>
              </div>
            )}

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message">
                Message <span className="text-[var(--brand-red-action)]">*</span>
              </Label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Textarea
                  id="message"
                  required
                  className="pl-10 min-h-[120px] resize-none"
                  placeholder={
                    formType === 'lesson' 
                      ? "Tell us about your goals and any specific areas you'd like to focus on..."
                      : formType === 'membership'
                      ? "Tell us about your shooting experience and interest in joining..."
                      : "Tell us how we can help you..."
                  }
                  value={formData.message}
                  onChange={(e) => updateFormData('message', e.target.value)}
                />
              </div>
            </div>

            {/* Checkboxes */}
            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => updateFormData('agreeToTerms', checked as boolean)}
                  required
                />
                <Label htmlFor="terms" className="text-sm text-muted-foreground">
                  I agree to the{' '}
                  <a href="/terms" className="text-accent-primary hover:text-accent-secondary underline">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="/privacy" className="text-accent-primary hover:text-accent-secondary underline">
                    Privacy Policy
                  </a>
                  <span className="text-[var(--brand-red-action)] ml-1">*</span>
                </Label>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="newsletter"
                  checked={formData.newsletter}
                  onCheckedChange={(checked) => updateFormData('newsletter', checked as boolean)}
                />
                <Label htmlFor="newsletter" className="text-sm text-muted-foreground">
                  Subscribe to our newsletter for event updates and shooting tips
                </Label>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting || !formData.agreeToTerms}
              className="w-full bg-accent-primary hover:bg-accent-secondary text-[var(--card)] font-heading font-semibold text-lg py-6"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                config.submitText
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Contact Information Sidebar */}
      {showContactInfo && (
        <div className="space-y-6">
          <Card className={getCardClassName()}>
            <CardHeader>
              <CardTitle className="text-xl font-heading font-bold text-card-foreground">
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <info.icon className="w-5 h-5 text-accent-primary mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-medium text-card-foreground font-heading">
                      {info.label}
                    </div>
                    <div className="text-sm text-muted-foreground font-body">
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </CardContent>
          </Card>

          <Card className={getCardClassName()}>
            <CardHeader>
              <CardTitle className="text-xl font-heading font-bold text-card-foreground">
                Hours of Operation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="font-medium text-card-foreground">Monday - Friday</span>
                <span className="text-muted-foreground">10:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-card-foreground">Saturday</span>
                <span className="text-muted-foreground">9:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-card-foreground">Sunday</span>
                <span className="text-muted-foreground">10:00 AM - 5:00 PM</span>
              </div>
              <div className="pt-2 mt-4 border-t">
                <p className="text-sm text-muted-foreground font-body">
                  Hours may vary on holidays. Call ahead to confirm.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}