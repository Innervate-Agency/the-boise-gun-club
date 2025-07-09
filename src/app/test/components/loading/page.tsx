'use client';

import { useState, useEffect } from 'react';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Skeleton } from '@/components/ui/skeleton';
import { Progress } from '@/components/ui/progress';
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
    <div className="bg-muted rounded-lg p-4 relative">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-muted-foreground font-mono">{title}</span>
        <Button
          onClick={handleCopy}
          variant="ghost"
          size="icon"
          title="Copy code"
        >
          {copied ? (
            <ClipboardDocumentCheckIcon className="w-4 h-4 text-green-400" />
          ) : (
            <ClipboardIcon className="w-4 h-4" />
          )}
        </Button>
      </div>
      <pre className="text-sm text-primary-foreground overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
}

// Skeleton components
function SkeletonCard() {
  return (
    <Card>
      <CardContent className="p-4 space-y-3">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-1/2" />
        <div className="space-y-2">
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-5/6" />
        </div>
        <div className="flex justify-between items-center pt-2">
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-8 w-24" />
        </div>
      </CardContent>
    </Card>
  );
}

function SkeletonList() {
  return (
    <div className="space-y-3">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="flex items-center space-x-3">
          <Skeleton className="w-12 h-12 rounded-full" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
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
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/test/components" className="inline-flex items-center gap-2 text-[var(--accent-primary)] hover:text-[var(--accent-primary)]/80 mb-4">
            <ArrowLeftIcon className="w-4 h-4" />
            Back to Components
          </Link>
          <h1 className="text-4xl font-bold font-heading text-primary-foreground mb-2">Loading States Playground</h1>
          <p className="text-muted-foreground">Spinners, skeletons, and progress indicators for better UX</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Interactive Demo */}
          <div className="lg:col-span-2 space-y-8">
            
            <Card>
              <CardHeader>
                <CardTitle>Spinner Customization</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Controls */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <Label htmlFor="spinner-size">Size</Label>
                    <Select value={selectedSize} onValueChange={setSelectedSize}>
                      <SelectTrigger id="spinner-size">
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sm">Small</SelectItem>
                        <SelectItem value="md">Medium</SelectItem>
                        <SelectItem value="lg">Large</SelectItem>
                        <SelectItem value="xl">Extra Large</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="spinner-color">Color</Label>
                    <Select value={selectedColor} onValueChange={setSelectedColor}>
                      <SelectTrigger id="spinner-color">
                        <SelectValue placeholder="Select color" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="primary">Primary</SelectItem>
                        <SelectItem value="secondary">Secondary</SelectItem>
                        <SelectItem value="white">White</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Live Preview */}
                <div className="bg-muted rounded-lg p-8 mb-6 flex items-center justify-center">
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
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>All Spinner Sizes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Primary Spinners */}
                <div>
                  <h3 className="text-lg font-medium text-primary-foreground mb-3">Primary Color</h3>
                  <div className="flex items-center gap-8">
                    <div className="text-center">
                      <LoadingSpinner size="sm" color="primary" />
                      <div className="text-xs text-muted-foreground mt-2">Small</div>
                    </div>
                    <div className="text-center">
                      <LoadingSpinner size="md" color="primary" />
                      <div className="text-xs text-muted-foreground mt-2">Medium</div>
                    </div>
                    <div className="text-center">
                      <LoadingSpinner size="lg" color="primary" />
                      <div className="text-xs text-muted-foreground mt-2">Large</div>
                    </div>
                    <div className="text-center">
                      <LoadingSpinner size="xl" color="primary" />
                      <div className="text-xs text-muted-foreground mt-2">Extra Large</div>
                    </div>
                  </div>
                </div>

                {/* Secondary Spinners */}
                <div>
                  <h3 className="text-lg font-medium text-primary-foreground mb-3">Secondary Color</h3>
                  <div className="flex items-center gap-8">
                    <div className="text-center">
                      <LoadingSpinner size="sm" color="secondary" />
                      <div className="text-xs text-muted-foreground mt-2">Small</div>
                    </div>
                    <div className="text-center">
                      <LoadingSpinner size="md" color="secondary" />
                      <div className="text-xs text-muted-foreground mt-2">Medium</div>
                    </div>
                    <div className="text-center">
                      <LoadingSpinner size="lg" color="secondary" />
                      <div className="text-xs text-muted-foreground mt-2">Large</div>
                    </div>
                    <div className="text-center">
                      <LoadingSpinner size="xl" color="secondary" />
                      <div className="text-xs text-muted-foreground mt-2">Extra Large</div>
                    </div>
                  </div>
                </div>

                {/* White Spinners (on dark background) */}
                <div>
                  <h3 className="text-lg font-medium text-primary-foreground mb-3">White (Dark Background)</h3>
                  <div className="bg-slate-800 rounded-lg p-4">
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
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Real-World Examples</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Form Loading States */}
                <div>
                  <h3 className="text-lg font-medium text-primary-foreground mb-3">Form Submission</h3>
                  <div className="bg-muted rounded-lg p-6">
                    <h4 className="font-semibold text-primary-foreground mb-4">Membership Application</h4>
                    <div className="space-y-4 mb-6">
                      <Input 
                        type="text" 
                        placeholder="Full Name" 
                        disabled={isFormLoading}
                      />
                      <Input 
                        type="email" 
                        placeholder="Email Address" 
                        disabled={isFormLoading}
                      />
                      <Select disabled={isFormLoading}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Membership Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="basic">Basic</SelectItem>
                          <SelectItem value="premium">Premium</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button 
                      disabled={isFormLoading}
                      onClick={handleFormSubmit}
                      className="flex items-center gap-2"
                    >
                      {isFormLoading && <LoadingSpinner size="sm" color="white" />}
                      {isFormLoading ? 'Submitting Application...' : 'Submit Application'}
                    </Button>
                  </div>
                </div>

                {/* Data Loading */}
                <div>
                  <h3 className="text-lg font-medium text-primary-foreground mb-3">Data Refresh</h3>
                  <div className="bg-muted rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-primary-foreground">Recent Events</h4>
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
                          <div className="text-sm text-muted-foreground mt-2">Loading events...</div>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between py-2 border-b">
                          <span className="text-primary-foreground">Monthly Competition</span>
                          <Badge variant="default">Tomorrow</Badge>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b">
                          <span className="text-primary-foreground">Safety Training</span>
                          <Badge variant="secondary">Next Week</Badge>
                        </div>
                        <div className="flex items-center justify-between py-2">
                          <span className="text-primary-foreground">Advanced Workshop</span>
                          <Badge variant="outline">Available</Badge>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Progress Loading */}
                <div>
                  <h3 className="text-lg font-medium text-primary-foreground mb-3">Progress Indicator</h3>
                  <div className="bg-muted rounded-lg p-6">
                    <h4 className="font-semibold text-primary-foreground mb-4">File Upload Progress</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">membership-documents.pdf</span>
                        <span className="text-sm font-medium text-primary-foreground">{loadingProgress}%</span>
                      </div>
                      <Progress value={loadingProgress} />
                      <Button 
                        size="sm"
                        onClick={handleProgressDemo}
                        disabled={loadingProgress > 0 && loadingProgress < 100}
                      >
                        {loadingProgress === 100 ? 'Upload Complete' : 'Start Upload'}
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Skeleton Loading */}
                <div>
                  <h3 className="text-lg font-medium text-primary-foreground mb-3">Skeleton Loading</h3>
                  <div className="bg-muted rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-primary-foreground">Member Directory</h4>
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
                            <div className="font-medium text-primary-foreground">Sarah Johnson</div>
                            <div className="text-sm text-muted-foreground">Premium Member</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold text-sm">MW</span>
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-primary-foreground">Mike Wilson</div>
                            <div className="text-sm text-muted-foreground">Basic Member</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Skeleton Grid */}
                <div>
                  <h3 className="text-lg font-medium text-primary-foreground mb-3">Skeleton Card Grid</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Documentation Sidebar */}
          <div className="space-y-6">
            
            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-green-500" />
                <CardTitle>Component Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Version</span>
                  <Badge>1.0.0</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status</span>
                  <Badge variant="secondary">Stable</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Performance</span>
                  <Badge variant="secondary">60 FPS</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>LoadingSpinner Props</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="font-mono text-sm text-blue-600 mb-1">size</div>
                  <div className="text-sm text-muted-foreground mb-1">'sm' | 'md' | 'lg' | 'xl'</div>
                  <div className="text-xs text-muted-foreground">Spinner size (16px to 64px)</div>
                </div>
                <div>
                  <div className="font-mono text-sm text-blue-600 mb-1">color</div>
                  <div className="text-sm text-muted-foreground mb-1">'primary' | 'secondary' | 'white'</div>
                  <div className="text-xs text-muted-foreground">Spinner color theme</div>
                </div>
                <div>
                  <div className="font-mono text-sm text-blue-600 mb-1">className</div>
                  <div className="text-sm text-muted-foreground mb-1">string</div>
                  <div className="text-xs text-muted-foreground">Additional CSS classes</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Usage Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-primary-foreground mb-1">Immediate Feedback</div>
                  <div className="text-muted-foreground">Show loading states for actions that take more than 0.5 seconds.</div>
                </div>
                <div>
                  <div className="font-medium text-primary-foreground mb-1">Progress Indication</div>
                  <div className="text-muted-foreground">Use progress bars for file uploads or multi-step processes.</div>
                </div>
                <div>
                  <div className="font-medium text-primary-foreground mb-1">Skeleton Loading</div>
                  <div className="text-muted-foreground">Use skeletons for content that has predictable structure.</div>
                </div>
                <div>
                  <div className="font-medium text-primary-foreground mb-1">Accessibility</div>
                  <div className="text-muted-foreground">Always include aria-label for screen readers.</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Import</CardTitle>
              </CardHeader>
              <CardContent>
                <CodeSnippet
                  title="Import Statement"
                  code={`import LoadingSpinner from '@/components/ui/LoadingSpinner';`}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 