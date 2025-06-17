import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Template Page',
  description: 'A template page for the Boise Gun Club website',
}

export default function TemplatePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-text mb-6">
          Template Page
        </h1>
        <p className="font-body text-lg text-text-secondary">
          This is a template page. Replace this content with your actual page content.
        </p>
      </div>
    </main>
  )
}
