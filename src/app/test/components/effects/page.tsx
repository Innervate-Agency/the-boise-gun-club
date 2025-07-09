'use client';

import { useState } from 'react';
import ParticleAnimation from '@/components/effects/ParticleAnimation';
import MorningMistAnimation from '@/components/effects/MorningMistAnimation';
import ClayTarget from '@/components/effects/ClayTarget';
import ClayFragments from '@/components/effects/ClayFragments';
import WavyGridBackground from '@/components/effects/WavyGridBackground';
import FractalBackground from '@/components/effects/FractalBackground';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
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

export default function EffectsPlayground() {
  const [selectedEffect, setSelectedEffect] = useState('particles');
  const [particleCount, setParticleCount] = useState(50);
  const [mistIntensity, setMistIntensity] = useState(0.3);
  const [gridIntensity, setGridIntensity] = useState(0.5);
  const [showClayAnimation, setShowClayAnimation] = useState(false);

  const triggerClayAnimation = () => {
    setShowClayAnimation(true);
    setTimeout(() => setShowClayAnimation(false), 3000);
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
          <h1 className="text-4xl font-bold font-heading text-primary-foreground mb-2">Effects & Animations Playground</h1>
          <p className="text-muted-foreground">Interactive animations and visual effects for immersive experiences</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Interactive Demo */}
          <div className="lg:col-span-2 space-y-8">
            
            <Card>
              <CardHeader>
                <CardTitle>Interactive Effect Demo</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Effect Selector */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <Label htmlFor="effect-type">Effect Type</Label>
                    <Select value={selectedEffect} onValueChange={setSelectedEffect}>
                      <SelectTrigger id="effect-type">
                        <SelectValue placeholder="Select an effect" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="particles">Particle Animation</SelectItem>
                        <SelectItem value="mist">Morning Mist</SelectItem>
                        <SelectItem value="grid">Wavy Grid</SelectItem>
                        <SelectItem value="fractal">Fractal Background</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    {selectedEffect === 'particles' && (
                      <div>
                        <Label htmlFor="particle-count">Particle Count ({particleCount})</Label>
                        <Slider
                          id="particle-count"
                          min={10}
                          max={100}
                          step={1}
                          value={[particleCount]}
                          onValueChange={(value) => setParticleCount(value[0])}
                        />
                      </div>
                    )}
                    {selectedEffect === 'mist' && (
                      <div>
                        <Label htmlFor="mist-intensity">Mist Intensity ({Math.round(mistIntensity * 100)}%)</Label>
                        <Slider
                          id="mist-intensity"
                          min={0.1}
                          max={1}
                          step={0.1}
                          value={[mistIntensity]}
                          onValueChange={(value) => setMistIntensity(value[0])}
                        />
                      </div>
                    )}
                    {selectedEffect === 'grid' && (
                      <div>
                        <Label htmlFor="grid-intensity">Grid Intensity ({Math.round(gridIntensity * 100)}%)</Label>
                        <Slider
                          id="grid-intensity"
                          min={0.1}
                          max={1}
                          step={0.1}
                          value={[gridIntensity]}
                          onValueChange={(value) => setGridIntensity(value[0])}
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Live Preview */}
                <div className="relative bg-slate-900 rounded-lg h-64 mb-6 overflow-hidden">
                  {selectedEffect === 'particles' && (
                    <ParticleAnimation 
                      particleCount={particleCount}
                      colors={['var(--accent-primary)', 'var(--accent-secondary)', 'var(--accent-tertiary)']}
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
                      <Badge variant="secondary">{selectedEffect.charAt(0).toUpperCase() + selectedEffect.slice(1)}</Badge>
                    </div>
                  </div>
                </div>

                {/* Generated Code */}
                <CodeSnippet
                  title={`${selectedEffect.charAt(0).toUpperCase() + selectedEffect.slice(1)} Effect`}
                  code={selectedEffect === 'particles' ? 
                    `<ParticleAnimation 
  particleCount={${particleCount}}
  colors={['var(--accent-primary)', 'var(--accent-secondary)', 'var(--accent-tertiary)']}
/>` : 
                    selectedEffect === 'mist' ?
                    `<MorningMistAnimation opacity={${mistIntensity}} />` :
                    selectedEffect === 'grid' ?
                    `<WavyGridBackground opacity={${gridIntensity}} />` :
                    `<FractalBackground />`
                  }
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Clay Target Animation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative bg-sky-200 rounded-lg h-64 mb-6 overflow-hidden">
                  {showClayAnimation && (
                    <>
                      <ClayTarget />
                      <ClayFragments />
                    </>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button
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
              </CardContent>
            </Card>
            
            {/* Other sections would be refactored similarly */}

          </div>

          {/* Documentation Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-green-500" />
                <CardTitle>Effects Library</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Components</span>
                  <Badge variant="default">8 Effects</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Performance</span>
                  <Badge variant="outline">Optimized</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Framework</span>
                  <Badge variant="secondary">Framer Motion</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Other cards would be refactored similarly */}
          </div>
        </div>
      </div>
    </div>
  );
} 