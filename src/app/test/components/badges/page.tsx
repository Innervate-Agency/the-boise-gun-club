'use client';

import { useState } from 'react';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { 
  ClipboardIcon,
  ClipboardDocumentCheckIcon,
  ArrowLeftIcon,
  CheckCircleIcon,
  UserIcon,
  CalendarIcon,
  TrophyIcon
} from '@heroicons/react/24/solid';
import Link from 'next/link';

// Code snippet component
function CodeSnippet({ title, code }: { title: string; code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gray-900 rounded-lg p-4 relative">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-gray-400 font-mono">{title}</span>
        <button
          onClick={handleCopy}
          className="text-gray-400 hover:text-white transition-colors p-1"
          title="Copy code"
        >
          {copied ? (
            <ClipboardDocumentCheckIcon className="w-4 h-4 text-green-400" />
          ) : (
            <ClipboardIcon className="w-4 h-4" />
          )}
        </button>
      </div>
      <pre className="text-sm text-gray-300 overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default function BadgePlayground() {
  const [selectedVariant, setSelectedVariant] = useState('primary');
  const [selectedSize, setSelectedSize] = useState('md');

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/test/components" className="inline-flex items-center gap-2 text-[var(--accent-primary)] hover:text-[var(--accent-primary)]/80 mb-4">
            <ArrowLeftIcon className="w-4 h-4" />
            Back to Components
          </Link>
          <h1 className="text-4xl font-bold font-heading text-gray-900 mb-2">Badge Playground</h1>
          <p className="text-gray-600">Status indicators, labels, and notification components</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Interactive Demo */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Live Demo Section */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Interactive Demo</h2>
              
              {/* Controls */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Variant</label>
                  <select 
                    value={selectedVariant}
                    onChange={(e) => setSelectedVariant(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  >
                    <option value="primary">Primary</option>
                    <option value="secondary">Secondary</option>
                    <option value="success">Success</option>
                    <option value="danger">Danger</option>
                    <option value="warning">Warning</option>
                    <option value="info">Info</option>
                    <option value="gold">Gold</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
                  <select 
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  >
                    <option value="sm">Small</option>
                    <option value="md">Medium</option>
                    <option value="lg">Large</option>
                  </select>
                </div>
              </div>

              {/* Live Preview */}
              <div className="bg-gray-50 rounded-lg p-8 mb-6 flex items-center justify-center">
                <Badge 
                  variant={selectedVariant as any} 
                  size={selectedSize as any}
                >
                  {selectedVariant.charAt(0).toUpperCase() + selectedVariant.slice(1)} Badge
                </Badge>
              </div>

              {/* Generated Code */}
              <CodeSnippet
                title="Current Configuration"
                code={`<Badge variant="${selectedVariant}" size="${selectedSize}">
  ${selectedVariant.charAt(0).toUpperCase() + selectedVariant.slice(1)} Badge
</Badge>`}
              />
            </div>

            {/* All Variants Grid */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">All Variants & Sizes</h2>
              
              <div className="space-y-6">
                {/* Small Badges */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Small Badges</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="primary" size="sm">Primary</Badge>
                    <Badge variant="secondary" size="sm">Secondary</Badge>
                    <Badge variant="success" size="sm">Success</Badge>
                    <Badge variant="danger" size="sm">Danger</Badge>
                    <Badge variant="warning" size="sm">Warning</Badge>
                    <Badge variant="info" size="sm">Info</Badge>
                    <Badge variant="gold" size="sm">Gold</Badge>
                  </div>
                </div>

                {/* Medium Badges */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Medium Badges</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="primary" size="md">Primary</Badge>
                    <Badge variant="secondary" size="md">Secondary</Badge>
                    <Badge variant="success" size="md">Success</Badge>
                    <Badge variant="danger" size="md">Danger</Badge>
                    <Badge variant="warning" size="md">Warning</Badge>
                    <Badge variant="info" size="md">Info</Badge>
                    <Badge variant="gold" size="md">Gold</Badge>
                  </div>
                </div>

                {/* Large Badges */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Large Badges</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="primary" size="lg">Primary</Badge>
                    <Badge variant="secondary" size="lg">Secondary</Badge>
                    <Badge variant="success" size="lg">Success</Badge>
                    <Badge variant="danger" size="lg">Danger</Badge>
                    <Badge variant="warning" size="lg">Warning</Badge>
                    <Badge variant="info" size="lg">Info</Badge>
                    <Badge variant="gold" size="lg">Gold</Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Real-World Examples */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Real-World Examples</h2>
              
              <div className="space-y-8">
                {/* Member Status */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Member Status Indicators</h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <UserIcon className="w-8 h-8 text-gray-400" />
                          <div>
                            <div className="font-medium text-gray-900">John Smith</div>
                            <div className="text-sm text-gray-600">Member since 2021</div>
                          </div>
                        </div>
                        <Badge variant="gold" size="sm">Premium Member</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <UserIcon className="w-8 h-8 text-gray-400" />
                          <div>
                            <div className="font-medium text-gray-900">Sarah Johnson</div>
                            <div className="text-sm text-gray-600">Member since 2023</div>
                          </div>
                        </div>
                        <Badge variant="primary" size="sm">Basic Member</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <UserIcon className="w-8 h-8 text-gray-400" />
                          <div>
                            <div className="font-medium text-gray-900">Mike Wilson</div>
                            <div className="text-sm text-gray-600">Membership expired</div>
                          </div>
                        </div>
                        <Badge variant="danger" size="sm">Expired</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <CodeSnippet
                      title="Member Status"
                      code={`<Badge variant="gold" size="sm">Premium Member</Badge>
<Badge variant="primary" size="sm">Basic Member</Badge>
<Badge variant="danger" size="sm">Expired</Badge>`}
                    />
                  </div>
                </div>

                {/* Event Categories */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Event Categories</h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <CalendarIcon className="w-8 h-8 text-gray-400" />
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">Monthly Competition</div>
                          <div className="text-sm text-gray-600">September 15, 2024</div>
                        </div>
                        <div className="flex gap-2">
                          <Badge variant="info" size="sm">Competition</Badge>
                          <Badge variant="warning" size="sm">Registration Open</Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <CalendarIcon className="w-8 h-8 text-gray-400" />
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">Safety Training</div>
                          <div className="text-sm text-gray-600">September 20, 2024</div>
                        </div>
                        <div className="flex gap-2">
                          <Badge variant="success" size="sm">Training</Badge>
                          <Badge variant="primary" size="sm">Available</Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <CalendarIcon className="w-8 h-8 text-gray-400" />
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">Advanced Workshop</div>
                          <div className="text-sm text-gray-600">September 25, 2024</div>
                        </div>
                        <div className="flex gap-2">
                          <Badge variant="secondary" size="sm">Workshop</Badge>
                          <Badge variant="danger" size="sm">Full</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <CodeSnippet
                      title="Event Categories"
                      code={`<Badge variant="info" size="sm">Competition</Badge>
<Badge variant="warning" size="sm">Registration Open</Badge>
<Badge variant="success" size="sm">Training</Badge>
<Badge variant="danger" size="sm">Full</Badge>`}
                    />
                  </div>
                </div>

                {/* Achievement Badges */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Achievement System</h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <TrophyIcon className="w-8 h-8 text-gold-500" />
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">Champion Shooter</div>
                          <div className="text-sm text-gray-600">Won 3 monthly competitions</div>
                        </div>
                        <Badge variant="gold" size="md">Master</Badge>
                      </div>
                      <div className="flex items-center gap-3">
                        <TrophyIcon className="w-8 h-8 text-gray-400" />
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">Safety First</div>
                          <div className="text-sm text-gray-600">Completed all safety courses</div>
                        </div>
                        <Badge variant="success" size="md">Certified</Badge>
                      </div>
                      <div className="flex items-center gap-3">
                        <TrophyIcon className="w-8 h-8 text-gray-400" />
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">Team Player</div>
                          <div className="text-sm text-gray-600">Participated in 10 events</div>
                        </div>
                        <Badge variant="info" size="md">Active</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <CodeSnippet
                      title="Achievements"
                      code={`<Badge variant="gold" size="md">Master</Badge>
<Badge variant="success" size="md">Certified</Badge>
<Badge variant="info" size="md">Active</Badge>`}
                    />
                  </div>
                </div>

                {/* Notification Count */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Notification Badges</h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="flex gap-4">
                      <div className="relative">
                        <Button variant="secondary" size="md">Messages</Button>
                        <Badge variant="danger" size="sm" className="absolute -top-2 -right-2">3</Badge>
                      </div>
                      <div className="relative">
                        <Button variant="secondary" size="md">Events</Button>
                        <Badge variant="warning" size="sm" className="absolute -top-2 -right-2">12</Badge>
                      </div>
                      <div className="relative">
                        <Button variant="secondary" size="md">Notifications</Button>
                        <Badge variant="info" size="sm" className="absolute -top-2 -right-2">99+</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <CodeSnippet
                      title="Notification Count"
                      code={`<div className="relative">
  <Button variant="secondary">Messages</Button>
  <Badge variant="danger" size="sm" className="absolute -top-2 -right-2">
    3
  </Badge>
</div>`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Documentation Sidebar */}
          <div className="space-y-6">
            
            {/* Component Status */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircleIcon className="w-5 h-5 text-green-500" />
                <h3 className="text-lg font-semibold text-gray-900">Component Status</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Version</span>
                  <Badge variant="primary">1.0.0</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status</span>
                  <Badge variant="success">Stable</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Variants</span>
                  <Badge variant="info">7 Types</Badge>
                </div>
              </div>
            </div>

            {/* Props Documentation */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Props</h3>
              <div className="space-y-4">
                <div>
                  <div className="font-mono text-sm text-blue-600 mb-1">variant</div>
                  <div className="text-sm text-gray-600 mb-1">'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'gold'</div>
                  <div className="text-xs text-gray-500">Visual style variant</div>
                </div>
                <div>
                  <div className="font-mono text-sm text-blue-600 mb-1">size</div>
                  <div className="text-sm text-gray-600 mb-1">'sm' | 'md' | 'lg'</div>
                  <div className="text-xs text-gray-500">Badge size</div>
                </div>
                <div>
                  <div className="font-mono text-sm text-blue-600 mb-1">animate</div>
                  <div className="text-sm text-gray-600 mb-1">boolean</div>
                  <div className="text-xs text-gray-500">Enable pulse animation</div>
                </div>
                <div>
                  <div className="font-mono text-sm text-blue-600 mb-1">className</div>
                  <div className="text-sm text-gray-600 mb-1">string</div>
                  <div className="text-xs text-gray-500">Additional CSS classes</div>
                </div>
              </div>
            </div>

            {/* Usage Guidelines */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Usage Guidelines</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-gray-900 mb-1">Success</div>
                  <div className="text-gray-600">Completed actions, certifications, positive status</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900 mb-1">Danger</div>
                  <div className="text-gray-600">Expired items, errors, urgent attention needed</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900 mb-1">Warning</div>
                  <div className="text-gray-600">Caution items, pending actions, moderate priority</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900 mb-1">Gold</div>
                  <div className="text-gray-600">Premium features, achievements, special status</div>
                </div>
              </div>
            </div>

            {/* Quick Import */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Import</h3>
              <CodeSnippet
                title="Import Statement"
                code={`import Badge from '@/components/ui/Badge';`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 