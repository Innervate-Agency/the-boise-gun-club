import type { Meta, StoryObj } from '@storybook/react';
import { ContactForm } from '@/components/ui/contact-form';
import { SiteNavigation } from '@/components/ui/site-navigation';
import { SiteFooter } from '@/components/ui/site-footer';

const meta: Meta = {
  title: 'Components/Site/Layout Components',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Complete site layout components including navigation, contact forms, and footer for professional website building.',
      },
    },
  },
};

export default meta;

// Contact Form Showcase
export const ContactFormShowcase: StoryObj = {
  render: () => (
    <div className="min-h-screen bg-muted/20 py-16">
      <div className="container mx-auto px-4 space-y-16">
        {/* Default Contact Form */}
        <div>
          <h2 className="text-3xl font-heading font-bold text-center mb-8">Default Contact Form</h2>
          <ContactForm
            formType="contact"
            showContactInfo={true}
          />
        </div>

        {/* Membership Application Form */}
        <div>
          <h2 className="text-3xl font-heading font-bold text-center mb-8">Membership Application</h2>
          <ContactForm
            formType="membership"
            showContactInfo={false}
            className="max-w-2xl mx-auto"
          />
        </div>

        {/* Glass Variant */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-lahoma-orange/20 to-brand-blue/20 rounded-2xl" />
          <div className="relative p-8">
            <h2 className="text-3xl font-heading font-bold text-center mb-8 text-white">Glass Contact Form</h2>
            <ContactForm
              title="Book a Lesson"
              formType="lesson"
              variant="glass"
              showContactInfo={true}
            />
          </div>
        </div>

        {/* Event Registration */}
        <div>
          <h2 className="text-3xl font-heading font-bold text-center mb-8">Event Registration</h2>
          <ContactForm
            formType="event"
            showContactInfo={false}
            className="max-w-2xl mx-auto"
          />
        </div>
      </div>
    </div>
  ),
};

// Navigation Showcase
export const NavigationShowcase: StoryObj = {
  render: () => (
    <div className="space-y-0">
      {/* Default Navigation */}
      <div className="relative">
        <SiteNavigation variant="default" fixed={false} />
        <div className="h-32 bg-gradient-to-r from-muted to-muted/50 flex items-center justify-center">
          <p className="text-muted-foreground font-body">Default Navigation (Scrolled Background)</p>
        </div>
      </div>

      {/* Glass Navigation */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/30 to-brand-blue/30" />
        <div className="relative">
          <SiteNavigation variant="glass" fixed={false} />
          <div className="h-32 flex items-center justify-center">
            <p className="text-white font-body">Glass Navigation (Over Gradient)</p>
          </div>
        </div>
      </div>

      {/* Solid Navigation */}
      <div className="relative">
        <SiteNavigation variant="solid" fixed={false} />
        <div className="h-32 bg-card flex items-center justify-center">
          <p className="text-card-foreground font-body">Solid Navigation</p>
        </div>
      </div>

      {/* Without Logo */}
      <div className="relative">
        <SiteNavigation variant="default" showLogo={false} fixed={false} />
        <div className="h-32 bg-muted flex items-center justify-center">
          <p className="text-muted-foreground font-body">Navigation Without Logo</p>
        </div>
      </div>
    </div>
  ),
};

// Footer Showcase
export const FooterShowcase: StoryObj = {
  render: () => (
    <div className="space-y-0">
      {/* Default Footer */}
      <div className="min-h-[400px] bg-muted/20 flex items-end">
        <div className="w-full">
          <div className="h-32 bg-gradient-to-t from-transparent to-muted/50 flex items-center justify-center">
            <p className="text-muted-foreground font-body">Page Content Above Footer</p>
          </div>
          <SiteFooter variant="default" />
        </div>
      </div>

      {/* Glass Footer */}
      <div className="min-h-[400px] bg-gradient-to-br from-accent-primary/20 to-brand-blue/20 flex items-end">
        <div className="w-full">
          <div className="h-32 flex items-center justify-center">
            <p className="text-white font-body">Glass Footer Over Gradient</p>
          </div>
          <SiteFooter variant="glass" />
        </div>
      </div>

      {/* Minimal Footer */}
      <div className="min-h-[400px] bg-card flex items-end">
        <div className="w-full">
          <div className="h-32 flex items-center justify-center">
            <p className="text-card-foreground font-body">Minimal Footer</p>
          </div>
          <SiteFooter 
            variant="minimal" 
            showNewsletter={false} 
            showSocial={false} 
          />
        </div>
      </div>
    </div>
  ),
};

// Complete Page Layout
export const CompletePageLayout: StoryObj = {
  render: () => (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <SiteNavigation variant="default" fixed={false} />
      
      {/* Page Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-accent-primary/10 to-brand-blue/10 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-card-foreground mb-6">
              Complete Page Layout
            </h1>
            <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto mb-8">
              This demonstrates a complete page layout with navigation, content, contact form, and footer.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <ContactForm
              title="Get Started Today"
              subtitle="Ready to Join?"
              description="Contact us to learn more about membership opportunities and schedule your facility tour."
              formType="membership"
              showContactInfo={true}
            />
          </div>
        </div>

        {/* Additional Content */}
        <div className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-heading font-bold text-card-foreground mb-6">
              More Content Here
            </h2>
            <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
              This section shows how the layout flows with multiple content sections before the footer.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <SiteFooter variant="default" />
    </div>
  ),
};

// Mobile Responsive Test
export const MobileResponsiveLayout: StoryObj = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  render: () => (
    <div className="min-h-screen flex flex-col">
      <SiteNavigation variant="default" fixed={false} />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-heading font-bold text-card-foreground mb-6">
            Mobile Layout Test
          </h1>
          
          <ContactForm
            formType="contact"
            showContactInfo={true}
            className="mb-8"
          />
        </div>
      </main>

      <SiteFooter 
        variant="default" 
        showNewsletter={false}
      />
    </div>
  ),
};