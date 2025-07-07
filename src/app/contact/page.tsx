'use client';

import { PageHero } from '@/components/ui/page-hero';
import { ContactForm } from '@/components/ui/contact-form';
import { Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-bg-primary text-text-primary">
      <PageHero
        title="Contact Us"
        subtitle="Get In Touch"
        description="We're here to help. Whether you have questions about membership, events, or facilities, our team is ready to assist you."
        icon={Phone}
        backgroundPreset="cool"
        gradient="from-brand-blue to-brand-blue-dark"
      />
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm
            formType="contact"
            showContactInfo={true}
          />
        </div>
      </section>
    </main>
  );
}