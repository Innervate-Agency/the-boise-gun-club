'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  ClipboardIcon,
  ClipboardDocumentCheckIcon,
  ArrowLeftIcon,
  CheckCircleIcon,
  CalendarIcon,
  UserIcon,
  MapPinIcon,
  ClockIcon,
  HeartIcon,
  ShareIcon
} from '@heroicons/react/24/solid';
import Link from 'next/link';
import Image from 'next/image';

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

export default function CardPlayground() {
  const [selectedVariant, setSelectedVariant] = useState('default');
  const [showImage, setShowImage] = useState(false);
  const [showFooter, setShowFooter] = useState(true);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/test/components" className="inline-flex items-center gap-2 text-[var(--accent-primary)] hover:text-[var(--accent-primary)]/80 mb-4">
            <ArrowLeftIcon className="w-4 h-4" />
            Back to Components
          </Link>
          <h1 className="text-4xl font-bold font-heading text-gray-900 mb-2">Card Playground</h1>
          <p className="text-gray-600">Flexible content containers with various layouts and styles</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Interactive Demo */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Live Demo Section */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Interactive Demo</h2>
              
              {/* Controls */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Variant</label>
                  <select 
                    value={selectedVariant}
                    onChange={(e) => setSelectedVariant(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  >
                    <option value="default">Default</option>
                    <option value="glass">Glass</option>
                    <option value="gradient">Gradient</option>
                  </select>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="showImage"
                    checked={showImage}
                    onChange={(e) => setShowImage(e.target.checked)}
                    className="mr-2"
                  />
                  <label htmlFor="showImage" className="text-sm font-medium text-gray-700">Include Image</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="showFooter"
                    checked={showFooter}
                    onChange={(e) => setShowFooter(e.target.checked)}
                    className="mr-2"
                  />
                  <label htmlFor="showFooter" className="text-sm font-medium text-gray-700">Show Footer</label>
                </div>
              </div>

              {/* Live Preview */}
              <div className="bg-gray-50 rounded-lg p-8 mb-6 flex items-center justify-center">
                <div className="w-80">
                  <Card variant={selectedVariant as any}>
                    {showImage && (
                      <div className="relative h-48 mb-4">
                        <Image
                          src="/images/events.webp" 
                          alt="Card demo"
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                    )}
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge>Demo</Badge>
                        <Badge>Interactive</Badge>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Sample Card Title</h3>
                      <p className="text-gray-600 mb-4">This is a sample card with {selectedVariant} styling. Adjust the controls to see different variations.</p>
                      {showFooter && (
                        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <CalendarIcon className="w-4 h-4" />
                            Today
                          </div>
                          <Button>View Details</Button>
                        </div>
                      )}
                    </div>
                  </Card>
                </div>
              </div>

              {/* Generated Code */}
              <CodeSnippet
                title="Current Configuration"
                code={`<Card>
  ${showImage ? `<div className="relative h-48 mb-4">
    <Image
      src="/images/events.webp"
      alt="Card demo"
      fill
      className="object-cover rounded-lg"
    />
  </div>` : ''}
  <div className="p-4">
    <h3 className="text-lg font-semibold text-gray-900 mb-2">
      Sample Card Title
    </h3>
    <p className="text-gray-600 mb-4">
      Card content goes here...
    </p>
    ${showFooter ? `<div className="flex items-center justify-between pt-4 border-t">
      <span className="text-sm text-gray-500">Today</span>
      <Button>View Details</Button>
    </div>` : ''}
  </div>
</Card>`}
              />
            </div>

            {/* Card Variants */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Card Variants</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Default Card</h3>
                  <Card>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Clean & Simple</h4>
                      <p className="text-gray-600 text-sm">Standard card with subtle shadow and clean styling.</p>
                    </div>
                  </Card>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Glass Card</h3>
                  <Card>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Modern Glass</h4>
                      <p className="text-gray-600 text-sm">Glassmorphism effect with blur and transparency.</p>
                    </div>
                  </Card>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Gradient Card</h3>
                  <Card>
                    <div className="p-4">
                      <h4 className="font-semibold text-white mb-2">Bold Gradient</h4>
                      <p className="text-gray-100 text-sm">Eye-catching gradient background for special content.</p>
                    </div>
                  </Card>
                </div>
              </div>
            </div>

            {/* Real-World Examples */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Real-World Examples</h2>
              
              <div className="space-y-8">
                {/* Event Card */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Event Cards</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card>
                      <div className="relative h-48">
                        <Image
                          src="/images/events.webp"
                          alt="Monthly Competition"
                          fill
                          className="object-cover rounded-t-lg"
                        />
                        <div className="absolute top-3 left-3">
                          <Badge>Registration Open</Badge>
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Monthly Competition</h4>
                        <p className="text-gray-600 text-sm mb-3">Join our monthly shooting competition. All skill levels welcome!</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                          <div className="flex items-center gap-1">
                            <CalendarIcon className="w-4 h-4" />
                            Sep 15, 2024
                          </div>
                          <div className="flex items-center gap-1">
                            <ClockIcon className="w-4 h-4" />
                            9:00 AM
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-medium text-gray-900">$25 Entry Fee</div>
                          <Button>Register Now</Button>
                        </div>
                      </div>
                    </Card>
                    
                    <Card>
                      <div className="relative h-48">
                        <Image
                          src="/images/training.webp"
                          alt="Safety Training"
                          fill
                          className="object-cover rounded-t-lg"
                        />
                        <div className="absolute top-3 left-3">
                          <Badge>Available</Badge>
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Safety Training Course</h4>
                        <p className="text-gray-600 text-sm mb-3">Comprehensive firearm safety training for all members.</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                          <div className="flex items-center gap-1">
                            <CalendarIcon className="w-4 h-4" />
                            Sep 20, 2024
                          </div>
                          <div className="flex items-center gap-1">
                            <ClockIcon className="w-4 h-4" />
                            2:00 PM
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-medium text-gray-900">Free for Members</div>
                          <Button>Sign Up</Button>
                        </div>
                      </div>
                    </Card>
                  </div>
                  <div className="mt-3">
                    <CodeSnippet
                      title="Event Card"
                      code={`<Card>
  <div className="relative h-48">
    <Image src="/images/events.webp" alt="Event" fill />
    <div className="absolute top-3 left-3">
      <Badge>Registration Open</Badge>
    </div>
  </div>
  <div className="p-4">
    <h4 className="text-lg font-semibold text-gray-900 mb-2">
      Monthly Competition
    </h4>
    <p className="text-gray-600 text-sm mb-3">
      Join our monthly shooting competition.
    </p>
    <div className="flex items-center justify-between">
      <div className="text-sm font-medium">$25 Entry Fee</div>
      <Button>Register Now</Button>
    </div>
  </div>
</Card>`}
                    />
                  </div>
                </div>

                {/* Member Profile Card */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Member Profile Cards</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card>
                      <div className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                            <UserIcon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Sarah Johnson</h4>
                            <p className="text-sm text-gray-600">Premium Member</p>
                          </div>
                          <div className="ml-auto">
                            <Badge>Champion</Badge>
                          </div>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Member Since</span>
                            <span className="text-gray-900">2021</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Competitions Won</span>
                            <span className="text-gray-900">12</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Safety Courses</span>
                            <span className="text-gray-900">8/8</span>
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <Button className="w-full">View Profile</Button>
                        </div>
                      </div>
                    </Card>
                    
                    <Card>
                      <div className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                            <UserIcon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Mike Wilson</h4>
                            <p className="text-sm text-gray-600">Basic Member</p>
                          </div>
                          <div className="ml-auto">
                            <Badge>Active</Badge>
                          </div>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Member Since</span>
                            <span className="text-gray-900">2023</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Events Attended</span>
                            <span className="text-gray-900">15</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Safety Courses</span>
                            <span className="text-gray-900">3/8</span>
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <Button className="w-full">View Profile</Button>
                        </div>
                      </div>
                    </Card>
                  </div>
                  <div className="mt-3">
                    <CodeSnippet
                      title="Member Profile"
                      code={`<Card>
  <div className="p-6">
    <div className="flex items-center gap-4 mb-4">
      <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
        <UserIcon className="w-6 h-6 text-white" />
      </div>
      <div>
        <h4 className="font-semibold text-gray-900">Sarah Johnson</h4>
        <p className="text-sm text-gray-600">Premium Member</p>
      </div>
      <Badge>Champion</Badge>
    </div>
    <!-- Member stats -->
  </div>
</Card>`}
                    />
                  </div>
                </div>

                {/* Stat Cards */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Statistics Dashboard</h3>
                  <div className="grid md:grid-cols-4 gap-4">
                    <Card>
                      <div className="p-4 text-center">
                        <div className="text-2xl font-bold text-[var(--accent-primary)] mb-1">247</div>
                        <div className="text-sm text-gray-600">Active Members</div>
                      </div>
                    </Card>
                    
                    <Card>
                      <div className="p-4 text-center">
                        <div className="text-2xl font-bold text-green-600 mb-1">12</div>
                        <div className="text-sm text-gray-600">Events This Month</div>
                      </div>
                    </Card>
                    
                    <Card>
                      <div className="p-4 text-center">
                        <div className="text-2xl font-bold text-blue-600 mb-1">98%</div>
                        <div className="text-sm text-gray-600">Safety Record</div>
                      </div>
                    </Card>
                    
                    <Card>
                      <div className="p-4 text-center">
                        <div className="text-2xl font-bold text-purple-600 mb-1">5</div>
                        <div className="text-sm text-gray-600">Ranges Available</div>
                      </div>
                    </Card>
                  </div>
                  <div className="mt-3">
                    <CodeSnippet
                      title="Stat Cards"
                      code={`<Card>
  <div className="p-4 text-center">
    <div className="text-2xl font-bold text-[var(--accent-primary)] mb-1">
      247
    </div>
    <div className="text-sm text-gray-600">Active Members</div>
  </div>
</Card>`}
                    />
                  </div>
                </div>

                {/* Social Media Card */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Social Media Card</h3>
                  <div className="max-w-md">
                    <Card>
                      <div className="relative h-48">
                        <Image
                          src="/images/membership.webp"
                          alt="Club photo"
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold text-sm">BGC</span>
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">Boise Gun Club</div>
                            <div className="text-sm text-gray-500">2 hours ago</div>
                          </div>
                        </div>
                        <p className="text-gray-800 mb-3">Great turnout at today's safety training! 32 new members completed their certification. 🎯</p>
                        <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                          <div className="flex items-center gap-4">
                            <button 
                              onClick={() => setIsLiked(!isLiked)}
                              className={`flex items-center gap-1 text-sm ${isLiked ? 'text-red-500' : 'text-gray-500'} hover:text-red-500 transition-colors`}
                            >
                              <HeartIcon className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                              {isLiked ? '48' : '47'}
                            </button>
                            <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-blue-500 transition-colors">
                              <ShareIcon className="w-4 h-4" />
                              Share
                            </button>
                          </div>
                          <Badge>Safety First</Badge>
                        </div>
                      </div>
                    </Card>
                  </div>
                  <div className="mt-3">
                    <CodeSnippet
                      title="Social Media Card"
                      code={`<Card>
  <div className="relative h-48">
    <Image src="/images/membership.webp" alt="Club photo" fill />
  </div>
  <div className="p-4">
    <div className="flex items-center gap-3 mb-3">
      <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full">
        <span className="text-white font-semibold text-sm">BGC</span>
      </div>
      <div>
        <div className="font-medium text-gray-900">Boise Gun Club</div>
        <div className="text-sm text-gray-500">2 hours ago</div>
      </div>
    </div>
    <p className="text-gray-800 mb-3">
      Great turnout at today's safety training!
    </p>
    <!-- Social actions -->
  </div>
</Card>`}
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
                  <Badge>1.0.0</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status</span>
                  <Badge>Stable</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Variants</span>
                  <Badge>3 Types</Badge>
                </div>
              </div>
            </div>

            {/* Props Documentation */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Props</h3>
              <div className="space-y-4">
                <div>
                  <div className="font-mono text-sm text-blue-600 mb-1">variant</div>
                  <div className="text-sm text-gray-600 mb-1">'default' | 'glass' | 'gradient'</div>
                  <div className="text-xs text-gray-500">Visual style variant</div>
                </div>
                <div>
                  <div className="font-mono text-sm text-blue-600 mb-1">children</div>
                  <div className="text-sm text-gray-600 mb-1">ReactNode</div>
                  <div className="text-xs text-gray-500">Card content</div>
                </div>
                <div>
                  <div className="font-mono text-sm text-blue-600 mb-1">className</div>
                  <div className="text-sm text-gray-600 mb-1">string</div>
                  <div className="text-xs text-gray-500">Additional CSS classes</div>
                </div>
                <div>
                  <div className="font-mono text-sm text-blue-600 mb-1">onClick</div>
                  <div className="text-sm text-gray-600 mb-1">() =&gt; void</div>
                  <div className="text-xs text-gray-500">Make card clickable</div>
                </div>
              </div>
            </div>

            {/* Usage Guidelines */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Usage Guidelines</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-gray-900 mb-1">Content Structure</div>
                  <div className="text-gray-600">Use consistent padding (p-4 or p-6) and spacing between elements.</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900 mb-1">Images</div>
                  <div className="text-gray-600">Always use Next.js Image component with proper aspect ratios.</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900 mb-1">Actions</div>
                  <div className="text-gray-600">Place primary actions in the footer, secondary in the header.</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900 mb-1">Accessibility</div>
                  <div className="text-gray-600">Ensure proper heading hierarchy and focus management.</div>
                </div>
              </div>
            </div>

            {/* Quick Import */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Import</h3>
              <CodeSnippet
                title="Import Statement"
                code={`import { Card } from '@/components/ui/card';`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 