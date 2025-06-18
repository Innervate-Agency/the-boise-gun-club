'use client';

import { useState } from 'react';
import ParticleAnimation from '@/components/effects/ParticleAnimation';
import MorningMistAnimation from '@/components/effects/MorningMistAnimation';
import ClayTarget from '@/components/effects/ClayTarget';
import ClayFragments from '@/components/effects/ClayFragments';
import WavyGridBackground from '@/components/effects/WavyGridBackground';
import FractalBackground from '@/components/effects/FractalBackground';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { 
  ClipboardIcon,
  ClipboardDocumentCheckIcon,
  ArrowLeftIcon,
  CheckCircleIcon,
  PlayIcon,
  StopIcon
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

export default function EffectsPlayground() {
  const [selectedEffect, setSelectedEffect] = useState('particles');
  const [particleCount, setParticleCount] = useState(50);
  const [particleSpeed, setParticleSpeed] = useState(0.5);
  const [showClayAnimation, setShowClayAnimation] = useState(false);
  const [mistIntensity, setMistIntensity] = useState(0.3);
  const [gridIntensity, setGridIntensity] = useState(0.5);

  const triggerClayAnimation = () => {
    setShowClayAnimation(true);
    setTimeout(() => setShowClayAnimation(false), 3000);
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
          <h1 className="text-4xl font-bold font-heading text-gray-900 mb-2">Effects & Animations Playground</h1>
          <p className="text-gray-600">Interactive animations and visual effects for immersive experiences</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Interactive Demo */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Effect Selection */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Interactive Effect Demo</h2>
              
              {/* Effect Selector */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Effect Type</label>
                  <select 
                    value={selectedEffect}
                    onChange={(e) => setSelectedEffect(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  >
                    <option value="particles">Particle Animation</option>
                    <option value="mist">Morning Mist</option>
                    <option value="grid">Wavy Grid</option>
                    <option value="fractal">Fractal Background</option>
                  </select>
                </div>
                <div>
                  {selectedEffect === 'particles' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Particle Count</label>
                      <input
                        type="range"
                        min="10"
                        max="100"
                        value={particleCount}
                        onChange={(e) => setParticleCount(Number(e.target.value))}
                        className="w-full"
                      />
                      <div className="text-xs text-gray-500 mt-1">{particleCount} particles</div>
                    </div>
                  )}
                  {selectedEffect === 'mist' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Mist Intensity</label>
                      <input
                        type="range"
                        min="0.1"
                        max="1"
                        step="0.1"
                        value={mistIntensity}
                        onChange={(e) => setMistIntensity(Number(e.target.value))}
                        className="w-full"
                      />
                      <div className="text-xs text-gray-500 mt-1">{Math.round(mistIntensity * 100)}% intensity</div>
                    </div>
                  )}
                  {selectedEffect === 'grid' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Grid Intensity</label>
                      <input
                        type="range"
                        min="0.1"
                        max="1"
                        step="0.1"
                        value={gridIntensity}
                        onChange={(e) => setGridIntensity(Number(e.target.value))}
                        className="w-full"
                      />
                      <div className="text-xs text-gray-500 mt-1">{Math.round(gridIntensity * 100)}% intensity</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Live Preview */}
              <div className="relative bg-gray-900 rounded-lg h-64 mb-6 overflow-hidden">
                {selectedEffect === 'particles' && (
                  <ParticleAnimation 
                    particleCount={particleCount}
                    colors={['#F28705', '#F2CB05', '#F25C05']}
                  />
                )}
                {selectedEffect === 'mist' && (
                  <MorningMistAnimation opacity={mistIntensity} />
                )}
                {selectedEffect === 'grid' && (
                  <WavyGridBackground opacity={gridIntensity} />
                )}
                {selectedEffect === 'fractal' && (
                  <FractalBackground />
                )}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-2xl font-bold mb-2">Effect Preview</h3>
                    <Badge variant="gold" size="md">{selectedEffect.charAt(0).toUpperCase() + selectedEffect.slice(1)}</Badge>
                  </div>
                </div>
              </div>

              {/* Generated Code */}
              <CodeSnippet
                title={`${selectedEffect.charAt(0).toUpperCase() + selectedEffect.slice(1)} Effect`}
                code={selectedEffect === 'particles' ? 
                  `<ParticleAnimation 
  particleCount={${particleCount}}
  colors={['#F28705', '#F2CB05', '#F25C05']}
/>` : 
                  selectedEffect === 'mist' ?
                  `<MorningMistAnimation opacity={${mistIntensity}} />` :
                  selectedEffect === 'grid' ?
                  `<WavyGridBackground opacity={${gridIntensity}} />` :
                  `<FractalBackground />`
                }
              />
            </div>

            {/* Clay Target Animation */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Clay Target Animation</h2>
              
              <div className="relative bg-sky-200 rounded-lg h-64 mb-6 overflow-hidden">
                {showClayAnimation && (
                  <>
                    <ClayTarget />
                    <ClayFragments />
                  </>
                )}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={triggerClayAnimation}
                    disabled={showClayAnimation}
                    className="flex items-center gap-2"
                  >
                    {showClayAnimation ? (
                      <>
                        <StopIcon className="w-5 h-5" />
                        Animation Running...
                      </>
                    ) : (
                      <>
                        <PlayIcon className="w-5 h-5" />
                        Trigger Clay Animation
                      </>
                    )}
                  </Button>
                </div>
              </div>

              <CodeSnippet
                title="Clay Target Animation"
                code={`<div className="relative bg-sky-200 rounded-lg h-64 overflow-hidden">
  <ClayTarget />
  <ClayFragments />
</div>`}
              />
            </div>

            {/* Background Effects Gallery */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Background Effects Gallery</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Particle Background */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Particle Animation</h3>
                  <div className="relative bg-gray-900 rounded-lg h-40 overflow-hidden">
                    <ParticleAnimation 
                      particleCount={30}
                      colors={['#F28705', '#F2CB05']}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white font-semibold">Hero Section</span>
                    </div>
                  </div>
                  <div className="mt-2">
                    <Badge variant="primary" size="sm">High Performance</Badge>
                    <Badge variant="info" size="sm" className="ml-2">60 FPS</Badge>
                  </div>
                </div>

                {/* Morning Mist */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Morning Mist</h3>
                  <div className="relative bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg h-40 overflow-hidden">
                    <MorningMistAnimation opacity={0.4} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white font-semibold">Atmospheric</span>
                    </div>
                  </div>
                  <div className="mt-2">
                    <Badge variant="success" size="sm">Subtle</Badge>
                    <Badge variant="secondary" size="sm" className="ml-2">CSS-based</Badge>
                  </div>
                </div>

                {/* Wavy Grid */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Wavy Grid</h3>
                  <div className="relative bg-gray-800 rounded-lg h-40 overflow-hidden">
                    <WavyGridBackground opacity={0.6} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white font-semibold">TRON Style</span>
                    </div>
                  </div>
                  <div className="mt-2">
                    <Badge variant="warning" size="sm">Retro</Badge>
                    <Badge variant="gold" size="sm" className="ml-2">Eye-catching</Badge>
                  </div>
                </div>

                {/* Fractal Background */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Fractal Pattern</h3>
                  <div className="relative bg-gray-900 rounded-lg h-40 overflow-hidden">
                    <FractalBackground />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white font-semibold">Complex</span>
                    </div>
                  </div>
                  <div className="mt-2">
                    <Badge variant="danger" size="sm">Heavy</Badge>
                    <Badge variant="info" size="sm" className="ml-2">Artistic</Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Real-World Usage Examples */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Real-World Usage Examples</h2>
              
              <div className="space-y-8">
                {/* Hero Section Example */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Hero Section Background</h3>
                  <div className="relative bg-gray-900 rounded-lg h-48 overflow-hidden">
                    <ParticleAnimation 
                      particleCount={40}
                      colors={['#F28705', '#F2CB05', '#F25C05']}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <h4 className="text-3xl font-bold mb-2">Welcome to Boise Gun Club</h4>
                        <p className="text-lg opacity-90">Premier shooting sports facility</p>
                        <Button variant="primary" size="lg" className="mt-4">Join Today</Button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <CodeSnippet
                      title="Hero Section"
                      code={`<section className="relative bg-gray-900 h-screen">
  <ParticleAnimation 
    particleCount={40}
    colors={['#F28705', '#F2CB05', '#F25C05']}
  />
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="text-center text-white">
      <h1 className="text-5xl font-bold mb-4">
        Welcome to Boise Gun Club
      </h1>
      <Button variant="primary" size="lg">Join Today</Button>
    </div>
  </div>
</section>`}
                    />
                  </div>
                </div>

                {/* Card with Mist Effect */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Enhanced Cards</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="relative">
                      <Card variant="glass">
                        <div className="absolute inset-0 rounded-lg overflow-hidden">
                          <MorningMistAnimation opacity={0.2} />
                        </div>
                        <div className="relative p-6 z-10">
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">Premium Membership</h4>
                          <p className="text-gray-600 mb-4">Access to all facilities and exclusive events</p>
                          <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-gray-900">$99/month</span>
                            <Button variant="primary" size="sm">Join Now</Button>
                          </div>
                        </div>
                      </Card>
                    </div>
                    
                    <div className="relative">
                      <Card variant="gradient">
                        <div className="absolute inset-0 rounded-lg overflow-hidden">
                          <WavyGridBackground opacity={0.3} />
                        </div>
                        <div className="relative p-6 z-10">
                          <h4 className="text-lg font-semibold text-white mb-2">VIP Experience</h4>
                          <p className="text-gray-100 mb-4">Exclusive access and personal training</p>
                          <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-white">$199/month</span>
                            <Button variant="secondary" size="sm">Learn More</Button>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                  <div className="mt-3">
                    <CodeSnippet
                      title="Enhanced Card"
                      code={`<Card variant="glass">
  <div className="absolute inset-0 rounded-lg overflow-hidden">
    <MorningMistAnimation opacity={0.2} />
  </div>
  <div className="relative p-6 z-10">
    <h4 className="text-lg font-semibold text-gray-900 mb-2">
      Premium Membership
    </h4>
    {/* Card content */}
  </div>
</Card>`}
                    />
                  </div>
                </div>

                {/* Interactive Competition Scene */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Competition Scene</h3>
                  <div className="relative bg-gradient-to-b from-sky-300 to-green-300 rounded-lg h-64 overflow-hidden">
                    <FractalBackground />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <h4 className="text-2xl font-bold text-gray-900 mb-4">Monthly Competition</h4>
                        <Button
                          variant="primary"
                          size="lg"
                          onClick={triggerClayAnimation}
                          disabled={showClayAnimation}
                        >
                          {showClayAnimation ? 'Shooting...' : 'Take Your Shot'}
                        </Button>
                      </div>
                    </div>
                    {showClayAnimation && (
                      <>
                        <ClayTarget />
                        <ClayFragments />
                      </>
                    )}
                  </div>
                  <div className="mt-3">
                    <CodeSnippet
                      title="Interactive Scene"
                      code={`<div className="relative bg-gradient-to-b from-sky-300 to-green-300 h-64">
  <FractalBackground />
  <div className="absolute inset-0 flex items-center justify-center">
    <Button onClick={triggerAnimation}>Take Your Shot</Button>
  </div>
  {showAnimation && (
    <>
      <ClayTarget />
      <ClayFragments />
    </>
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
                <h3 className="text-lg font-semibold text-gray-900">Effects Library</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Components</span>
                  <Badge variant="primary">8 Effects</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Performance</span>
                  <Badge variant="success">Optimized</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Framework</span>
                  <Badge variant="info">Framer Motion</Badge>
                </div>
              </div>
            </div>

            {/* Performance Notes */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Guide</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="font-medium text-green-700">Light Effects</span>
                  </div>
                  <div className="text-sm text-gray-600">MorningMist, WavyGrid - Use freely</div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="font-medium text-yellow-700">Medium Effects</span>
                  </div>
                  <div className="text-sm text-gray-600">ParticleAnimation - Limit particle count</div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="font-medium text-red-700">Heavy Effects</span>
                  </div>
                  <div className="text-sm text-gray-600">FractalBackground - Use sparingly</div>
                </div>
              </div>
            </div>

            {/* Usage Guidelines */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Usage Guidelines</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-gray-900 mb-1">Layering</div>
                  <div className="text-gray-600">Always use z-index to layer content over effects</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900 mb-1">Contrast</div>
                  <div className="text-gray-600">Ensure text remains readable over animated backgrounds</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900 mb-1">Motion Sensitivity</div>
                  <div className="text-gray-600">Respect prefers-reduced-motion settings</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900 mb-1">Mobile Performance</div>
                  <div className="text-gray-600">Reduce complexity on mobile devices</div>
                </div>
              </div>
            </div>

            {/* Available Effects */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Available Effects</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-900">ParticleAnimation</span>
                  <Badge variant="warning" size="sm">Dynamic</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-900">MorningMistAnimation</span>
                  <Badge variant="success" size="sm">Subtle</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-900">ClayTarget</span>
                  <Badge variant="info" size="sm">Interactive</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-900">ClayFragments</span>
                  <Badge variant="info" size="sm">Interactive</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-900">WavyGridBackground</span>
                  <Badge variant="primary" size="sm">Retro</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-900">FractalBackground</span>
                  <Badge variant="danger" size="sm">Heavy</Badge>
                </div>
              </div>
            </div>

            {/* Quick Import */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Imports</h3>
              <CodeSnippet
                title="Effect Imports"
                code={`import ParticleAnimation from '@/components/effects/ParticleAnimation';
import MorningMistAnimation from '@/components/effects/MorningMistAnimation';
import ClayTarget from '@/components/effects/ClayTarget';
import WavyGridBackground from '@/components/effects/WavyGridBackground';`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 