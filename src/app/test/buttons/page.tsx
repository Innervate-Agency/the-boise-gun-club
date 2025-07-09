'use client';

import { Button } from '@/components/ui/button';

export default function ButtonPreview() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-heading font-bold">Button Component Preview</h1>
          <p className="text-muted-foreground">Testing the new button design system with all variants and states.</p>
        </div>

        {/* Primary Buttons */}
        <div className="space-y-6">
          <h2 className="text-2xl font-heading font-bold">Primary Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="default" size="sm">Small</Button>
            <Button variant="default" size="default">Medium</Button>
            <Button variant="default" size="lg">Large</Button>
            <Button variant="default" disabled>Disabled</Button>
          </div>
        </div>

        {/* Secondary Buttons */}
        <div className="space-y-6">
          <h2 className="text-2xl font-heading font-bold">Secondary Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="secondary" size="sm">Small</Button>
            <Button variant="secondary" size="default">Medium</Button>
            <Button variant="secondary" size="lg">Large</Button>
            <Button variant="secondary" disabled>Disabled</Button>
          </div>
        </div>

        {/* Interactive Demo */}
        <div className="space-y-6">
          <h2 className="text-2xl font-heading font-bold">Interactive Demo</h2>
          <div className="flex flex-wrap gap-4">
            <Button 
              variant="default" 
              onClick={() => alert('Primary button clicked!')}
            >
              Click Me
            </Button>
            <Button 
              variant="secondary" 
              onClick={() => alert('Secondary button clicked!')}
            >
              Click Me Too
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 