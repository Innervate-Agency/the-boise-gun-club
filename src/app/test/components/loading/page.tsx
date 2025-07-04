'use client';

import { useState, useEffect } from 'react';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ClipboardIcon,
  ClipboardDocumentCheckIcon,
  ArrowLeftIcon,
  CheckCircleIcon,
  ArrowPathIcon as RefreshIcon
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

// Skeleton components
function SkeletonCard() {
  return (
    <Card variant="default">
      <div className="p-4 space-y-3 animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
        <div className="space-y-2">
          <div className="h-3 bg-gray-200 rounded"></div>
          <div className="h-3 bg-gray-200 rounded w-5/6"></div>
        </div>
        <div className="flex justify-between items-center pt-2">
          <div className="h-6 bg-gray-200 rounded w-20"></div>
          <div className="h-8 bg-gray-200 rounded w-24"></div>
        </div>
      </div>
    </Card>
  );
}

function SkeletonList() {
  return (
    <div className="space-y-3">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="flex items-center space-x-3 animate-pulse">
          <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function LoadingPlayground() {
  const [selectedSize, setSelectedSize] = useState('md');
  const [selectedColor, setSelectedColor] = useState('primary');
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showSkeletons, setShowSkeletons] = useState(false);

  // Simulate form submission
  const handleFormSubmit = () => {
    setIsFormLoading(true);
    setTimeout(() => setIsFormLoading(false), 3000);
  };

  // Simulate data loading
  const handleDataRefresh = () => {
    setIsDataLoading(true);
    setTimeout(() => setIsDataLoading(false), 2000);
  };

  // Simulate progress loading
  const handleProgressDemo = () => {
    setLoadingProgress(0);
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  // Simulate skeleton loading
  const handleSkeletonDemo = () => {
    setShowSkeletons(true);
    setTimeout(() => setShowSkeletons(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/test/components" className="inline-flex items-center gap-2 text-[var(--accent-primary)] hover:text-[var(--accent-primary)]/80 mb-4">
            <ArrowLeftIcon className="w-4 h-4" />
            Back to Components
          </Link>
          <h1 className="text-4xl font-bold font-heading text-gray-900 mb-2">Loading States Playground</h1>
          <p className="text-gray-600">Spinners, skeletons, and progress indicators for better UX</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Interactive Demo */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Spinner Customization */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Spinner Customization</h2>
              
              {/* Controls */}
              <div className="grid grid-cols-2 gap-4 mb-6">
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
                    <option value="xl">Extra Large</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
                  <select 
                    value={selectedColor}
                    onChange={(e) => setSelectedColor(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  >
                    <option value="primary">Primary</option>
                    <option value="secondary">Secondary</option>
                    <option value="white">White</option>
                  </select>
                </div>
              </div>

              {/* Live Preview */}
              <div className="bg-gray-50 rounded-lg p-8 mb-6 flex items-center justify-center">
                <LoadingSpinner 
                  size={selectedSize as any} 
                  color={selectedColor as any}
                />
              </div>

              {/* Generated Code */}
              <CodeSnippet
                title="Spinner Configuration"
                code={`<LoadingSpinner size="${selectedSize}" color="${selectedColor}" />`}
              />
            </div>

            {/* All Spinner Sizes */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">All Spinner Sizes</h2>
              
              <div className="space-y-6">
                {/* Primary Spinners */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Primary Color</h3>
                  <div className="flex items-center gap-8">
                    <div className="text-center">
                      <LoadingSpinner size="sm" color="primary" />
                      <div className="text-xs text-gray-500 mt-2">Small</div>
                    </div>
                    <div className="text-center">
                      <LoadingSpinner size="md" color="primary" />
                      <div className="text-xs text-gray-500 mt-2">Medium</div>
                    </div>
                    <div className="text-center">
                      <LoadingSpinner size="lg" color="primary" />
                      <div className="text-xs text-gray-500 mt-2">Large</div>
                    </div>
                    <div className="text-center">
                      <LoadingSpinner size="xl" color="primary" />
                      <div className="text-xs text-gray-500 mt-2">Extra Large</div>
                    </div>
                  </div>
                </div>

                {/* Secondary Spinners */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Secondary Color</h3>
                  <div className="flex items-center gap-8">
                    <div className="text-center">
                      <LoadingSpinner size="sm" color="secondary" />
                      <div className="text-xs text-gray-500 mt-2">Small</div>
                    </div>
                    <div className="text-center">
                      <LoadingSpinner size="md" color="secondary" />
                      <div className="text-xs text-gray-500 mt-2">Medium</div>
                    </div>
                    <div className="text-center">
                      <LoadingSpinner size="lg" color="secondary" />
                      <div className="text-xs text-gray-500 mt-2">Large</div>
                    </div>
                    <div className="text-center">
                      <LoadingSpinner size="xl" color="secondary" />
                      <div className="text-xs text-gray-500 mt-2">Extra Large</div>
                    </div>
                  </div>
                </div>

                {/* White Spinners (on dark background) */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">White (Dark Background)</h3>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="flex items-center gap-8">
                      <div className="text-center">
                        <LoadingSpinner size="sm" color="white" />
                        <div className="text-xs text-gray-300 mt-2">Small</div>
                      </div>
                      <div className="text-center">
                        <LoadingSpinner size="md" color="white" />
                        <div className="text-xs text-gray-300 mt-2">Medium</div>
                      </div>
                      <div className="text-center">
                        <LoadingSpinner size="lg" color="white" />
                        <div className="text-xs text-gray-300 mt-2">Large</div>
                      </div>
                      <div className="text-center">
                        <LoadingSpinner size="xl" color="white" />
                        <div className="text-xs text-gray-300 mt-2">Extra Large</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Real-World Examples */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Real-World Examples</h2>
              
              <div className="space-y-8">
                {/* Form Loading States */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Form Submission</h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Membership Application</h4>
                    <div className="space-y-4 mb-6">
                      <input 
                        type="text" 
                        placeholder="Full Name" 
                        className="w-full border border-gray-300 rounded-lg px-3 py-2"
                        disabled={isFormLoading}
                      />
                      <input 
                        type="email" 
                        placeholder="Email Address" 
                        className="w-full border border-gray-300 rounded-lg px-3 py-2"
                        disabled={isFormLoading}
                      />
                      <select 
                        className="w-full border border-gray-300 rounded-lg px-3 py-2"
                        disabled={isFormLoading}
                      >
                        <option>Select Membership Type</option>
                        <option>Basic</option>
                        <option>Premium</option>
                      </select>
                    </div>
                    <Button 
                      variant="primary" 
                      size="md"
                      disabled={isFormLoading}
                      onClick={handleFormSubmit}
                      className="flex items-center gap-2"
                    >
                      {isFormLoading && <LoadingSpinner size="sm" color="white" />}
                      {isFormLoading ? 'Submitting Application...' : 'Submit Application'}
                    </Button>
                  </div>
                  <div className="mt-3">
                    <CodeSnippet
                      title="Form Loading State"
                      code={`<Button 
  variant="primary" 
  disabled={isLoading}
  onClick={handleSubmit}
  className="flex items-center gap-2"
>
  {isLoading && <LoadingSpinner size="sm" color="white" />}
  {isLoading ? 'Submitting...' : 'Submit'}
</Button>`}
                    />
                  </div>
                </div>

                {/* Data Loading */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Data Refresh</h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-gray-900">Recent Events</h4>
                      <Button 
                        variant="secondary" 
                        size="sm"
                        disabled={isDataLoading}
                        onClick={handleDataRefresh}
                        className="flex items-center gap-2"
                      >
                        {isDataLoading ? (
                          <LoadingSpinner size="sm" color="primary" />
                        ) : (
                          <RefreshIcon className="w-4 h-4" />
                        )}
                        {isDataLoading ? 'Refreshing...' : 'Refresh'}
                      </Button>
                    </div>
                    {isDataLoading ? (
                      <div className="flex items-center justify-center py-8">
                        <div className="text-center">
                          <LoadingSpinner size="lg" color="primary" />
                          <div className="text-sm text-gray-500 mt-2">Loading events...</div>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between py-2 border-b border-gray-200">
                          <span className="text-gray-900">Monthly Competition</span>
                          <Badge variant="warning" size="sm">Tomorrow</Badge>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-gray-200">
                          <span className="text-gray-900">Safety Training</span>
                          <Badge variant="success" size="sm">Next Week</Badge>
                        </div>
                        <div className="flex items-center justify-between py-2">
                          <span className="text-gray-900">Advanced Workshop</span>
                          <Badge variant="info" size="sm">Available</Badge>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="mt-3">
                    <CodeSnippet
                      title="Data Loading"
                      code={`{isLoading ? (
  <div className="flex items-center justify-center py-8">
    <div className="text-center">
      <LoadingSpinner size="lg" color="primary" />
      <div className="text-sm text-gray-500 mt-2">Loading...</div>
    </div>
  </div>
) : (
  <div>{/* Loaded content */}</div>
)}`}
                    />
                  </div>
                </div>

                {/* Progress Loading */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Progress Indicator</h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">File Upload Progress</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">membership-documents.pdf</span>
                        <span className="text-sm font-medium text-gray-900">{loadingProgress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-[var(--accent-primary)] h-2 rounded-full transition-all duration-300"
                          style={{ width: `${loadingProgress}%` }}
                        ></div>
                      </div>
                      <Button 
                        variant="primary" 
                        size="sm"
                        onClick={handleProgressDemo}
                        disabled={loadingProgress > 0 && loadingProgress < 100}
                      >
                        {loadingProgress === 100 ? 'Upload Complete' : 'Start Upload'}
                      </Button>
                    </div>
                  </div>
                  <div className="mt-3">
                    <CodeSnippet
                      title="Progress Bar"
                      code={`<div className="w-full bg-gray-200 rounded-full h-2">
  <div 
    className="bg-[var(--accent-primary)] h-2 rounded-full transition-all duration-300"
    style={{ width: \`\${progress}%\` }}
  ></div>
</div>`}
                    />
                  </div>
                </div>

                {/* Skeleton Loading */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Skeleton Loading</h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-gray-900">Member Directory</h4>
                      <Button 
                        variant="secondary" 
                        size="sm"
                        onClick={handleSkeletonDemo}
                      >
                        Demo Skeletons
                      </Button>
                    </div>
                    {showSkeletons ? (
                      <SkeletonList />
                    ) : (
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold text-sm">SJ</span>
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-gray-900">Sarah Johnson</div>
                            <div className="text-sm text-gray-500">Premium Member</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold text-sm">MW</span>
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-gray-900">Mike Wilson</div>
                            <div className="text-sm text-gray-500">Basic Member</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="mt-3">
                    <CodeSnippet
                      title="Skeleton Loading"
                      code={`function SkeletonCard() {
  return (
    <div className="animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
      <div className="h-3 bg-gray-200 rounded w-1/2 mb-4"></div>
      <div className="space-y-2">
        <div className="h-3 bg-gray-200 rounded"></div>
        <div className="h-3 bg-gray-200 rounded w-5/6"></div>
      </div>
    </div>
  );
}`}
                    />
                  </div>
                </div>

                {/* Card Skeleton Grid */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Skeleton Card Grid</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                  </div>
                  <div className="mt-3">
                    <CodeSnippet
                      title="Skeleton Grid"
                      code={`<div className="grid md:grid-cols-3 gap-4">
  {isLoading ? (
    <>
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </>
  ) : (
    data.map(item => <Card key={item.id} {...item} />)
  )}
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
                  <span className="text-gray-600">Performance</span>
                  <Badge variant="success">60 FPS</Badge>
                </div>
              </div>
            </div>

            {/* Props Documentation */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">LoadingSpinner Props</h3>
              <div className="space-y-4">
                <div>
                  <div className="font-mono text-sm text-blue-600 mb-1">size</div>
                  <div className="text-sm text-gray-600 mb-1">'sm' | 'md' | 'lg' | 'xl'</div>
                  <div className="text-xs text-gray-500">Spinner size (16px to 64px)</div>
                </div>
                <div>
                  <div className="font-mono text-sm text-blue-600 mb-1">color</div>
                  <div className="text-sm text-gray-600 mb-1">'primary' | 'secondary' | 'white'</div>
                  <div className="text-xs text-gray-500">Spinner color theme</div>
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
                  <div className="font-medium text-gray-900 mb-1">Immediate Feedback</div>
                  <div className="text-gray-600">Show loading states for actions that take more than 0.5 seconds.</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900 mb-1">Progress Indication</div>
                  <div className="text-gray-600">Use progress bars for file uploads or multi-step processes.</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900 mb-1">Skeleton Loading</div>
                  <div className="text-gray-600">Use skeletons for content that has predictable structure.</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900 mb-1">Accessibility</div>
                  <div className="text-gray-600">Always include aria-label for screen readers.</div>
                </div>
              </div>
            </div>

            {/* Quick Import */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Import</h3>
              <CodeSnippet
                title="Import Statement"
                code={`import LoadingSpinner from '@/components/ui/LoadingSpinner';`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 