'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  Download, 
  Heart, 
  Share, 
  Settings, 
  Plus, 
  Trash2, 
  Edit,
  Target,
  Zap,
  Loader2
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// Code snippet component
function CodeSnippet({ title, code }: { title: string; code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-900 rounded-lg p-4 relative">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-slate-400 font-mono">{title}</span>
        <button
          onClick={handleCopy}
          className="text-slate-400 hover:text-white transition-colors p-1"
          title="Copy code"
        >
          {copied ? '✓' : '📋'}
        </button>
      </div>
      <pre className="text-sm text-slate-300 overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
}

// Interactive prop controls
function PropControl({ label, value, onChange, options }: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-medium text-slate-600 dark:text-slate-400">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="text-sm border border-slate-200 dark:border-slate-700 rounded px-2 py-1 bg-white dark:bg-slate-800"
      >
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default function ButtonsPlayground() {
  const [variant, setVariant] = useState('primary');
  const [size, setSize] = useState('md');
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleAsyncAction = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoading(false);
    alert('Action completed!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('/images/Grid/Grid(1).webp')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <Target className="h-16 w-16 text-[var(--accent-primary)] animate-pulse" />
            </div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
              BUTTON <span className="text-[var(--accent-primary)]">ARSENAL</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Interactive button components with micro-interactions, loading states, and advanced animations. 
              Perfect for building engaging gun club interfaces.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Interactive Demo Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Live Demo Panel */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-8">
            <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-6">
              Interactive Demo
            </h2>
            
            {/* Prop Controls */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <PropControl
                label="Variant"
                value={variant}
                onChange={setVariant}
                options={['primary', 'secondary']}
              />
              <PropControl
                label="Size"
                value={size}
                onChange={setSize}
                options={['sm', 'md', 'lg']}
              />
            </div>

            {/* Toggle Controls */}
            <div className="flex gap-4 mb-8">
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={disabled}
                  onChange={(e) => setDisabled(e.target.checked)}
                  className="rounded"
                />
                Disabled
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={loading}
                  onChange={(e) => setLoading(e.target.checked)}
                  className="rounded"
                />
                Loading
              </label>
            </div>

            {/* Live Preview */}
            <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-8 mb-6">
              <div className="flex items-center justify-center">
                <Button
                  variant={variant as any}
                  size={size as any}
                  disabled={disabled || loading}
                  onClick={() => alert('Button clicked!')}
                  className="relative"
                >
                  {loading && <Loader2 className="w-4 h-4 animate-spin mr-2" />}
                  {loading ? 'Processing...' : 'Click Me!'}
                </Button>
              </div>
            </div>

            {/* Code Output */}
            <CodeSnippet
              title="Generated Code"
              code={`<Button 
  variant="${variant}"
  size="${size}"${disabled ? '\n  disabled' : ''}${loading ? '\n  loading' : ''}
  onClick={() => handleClick()}
>
  ${loading ? 'Processing...' : 'Click Me!'}
</Button>`}
            />
          </div>

          {/* Examples Panel */}
          <div className="space-y-8">
            {/* Basic Variants */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-8">
              <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-6">
                Button Variants
              </h3>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary" size="sm">
                    <Play className="w-4 h-4 mr-2" />
                    Primary Small
                  </Button>
                  <Button variant="primary" size="md">
                    <Download className="w-4 h-4 mr-2" />
                    Primary Medium
                  </Button>
                  <Button variant="primary" size="lg">
                    <Target className="w-5 h-5 mr-2" />
                    Primary Large
                  </Button>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button variant="secondary" size="sm">
                    <Heart className="w-4 h-4 mr-2" />
                    Secondary Small
                  </Button>
                  <Button variant="secondary" size="md">
                    <Share className="w-4 h-4 mr-2" />
                    Secondary Medium
                  </Button>
                  <Button variant="secondary" size="lg">
                    <Settings className="w-5 h-5 mr-2" />
                    Secondary Large
                  </Button>
                </div>
              </div>
            </div>

            {/* Gun Club Specific Examples */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-8">
              <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-6">
                Gun Club Actions
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Button variant="primary" onClick={() => alert('Registering for event...')}>
                    <Plus className="w-4 h-4 mr-2" />
                    Register for Event
                  </Button>
                  <Button variant="secondary" onClick={() => alert('Booking range time...')}>
                    <Target className="w-4 h-4 mr-2" />
                    Book Range Time
                  </Button>
                  <Button variant="primary" onClick={() => alert('Joining membership...')}>
                    <Zap className="w-4 h-4 mr-2" />
                    Join Membership
                  </Button>
                  <Button variant="secondary" onClick={() => alert('Viewing scores...')}>
                    <Download className="w-4 h-4 mr-2" />
                    Download Scores
                  </Button>
                </div>
              </div>
            </div>

            {/* Async Action Example */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-8">
              <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-6">
                Async Actions
              </h3>
              <div className="space-y-4">
                <Button 
                  variant="primary" 
                  onClick={handleAsyncAction}
                  disabled={loading}
                  className="w-full"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin mr-2" />
                      Processing Registration...
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4 mr-2" />
                      Submit Registration
                    </>
                  )}
                </Button>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  This button demonstrates async loading states with proper feedback.
                </p>
              </div>
            </div>

            {/* State Examples */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-8">
              <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-6">
                Button States
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Button variant="primary">
                    <Edit className="w-4 h-4 mr-2" />
                    Normal State
                  </Button>
                  <Button variant="primary" disabled>
                    <Trash2 className="w-4 h-4 mr-2" />
                    Disabled State
                  </Button>
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Hover over buttons to see interaction states and animations.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Guidelines */}
        <div className="mt-16">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-8">
            <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-6">
              Usage Guidelines
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Best Practices</h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li>• Use primary buttons for main actions</li>
                  <li>• Use secondary buttons for alternative actions</li>
                  <li>• Include loading states for async operations</li>
                  <li>• Add icons to improve clarity and visual appeal</li>
                  <li>• Ensure proper contrast for accessibility</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Gun Club Context</h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li>• "Register for Event" - Event participation</li>
                  <li>• "Book Range Time" - Range reservations</li>
                  <li>• "Join Membership" - Membership signup</li>
                  <li>• "Download Scores" - Competition results</li>
                  <li>• "Submit Registration" - Form submissions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Code Examples */}
        <div className="mt-16">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-8">
            <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-6">
              Implementation Examples
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <CodeSnippet
                title="Basic Button"
                code={`import { Button } from '@/components/ui/button';

<Button variant="primary" size="md">
  Click Me
</Button>`}
              />
              <CodeSnippet
                title="Button with Icon"
                code={`import { Target } from 'lucide-react';

<Button variant="primary">
  <Target className="w-4 h-4 mr-2" />
  Book Range
</Button>`}
              />
              <CodeSnippet
                title="Async Button"
                code={`const [loading, setLoading] = useState(false);

<Button 
  variant="primary"
  disabled={loading}
  onClick={handleSubmit}
>
  {loading ? 'Processing...' : 'Submit'}
</Button>`}
              />
              <CodeSnippet
                title="Event Registration"
                code={`<Button 
  variant="primary" 
  size="lg"
  onClick={() => registerForEvent(eventId)}
>
  <Plus className="w-5 h-5 mr-2" />
  Register for Competition
</Button>`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 