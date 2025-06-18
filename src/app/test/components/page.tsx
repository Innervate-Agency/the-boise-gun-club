'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import NewThemeToggle from '@/components/ui/NewThemeToggle';
import Link from 'next/link';
import { 
  Squares2X2Icon, 
  RectangleStackIcon, 
  TagIcon, 
  ArrowPathIcon, 
  SparklesIcon,
  CheckCircleIcon,
  CodeBracketIcon,
  PresentationChartLineIcon,
  SwatchIcon,
  BeakerIcon,
  ChartBarIcon,
  ClipboardIcon,
  ClipboardDocumentCheckIcon
} from '@heroicons/react/24/solid';
import FractalBackground from '@/components/effects/FractalBackground';
import { motion, useReducedMotion } from 'framer-motion';

// Interactive code snippet component
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

// Interactive prop controls
function PropControl({ label, value, onChange, options }: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-medium text-gray-600">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="text-sm border border-gray-200 rounded px-2 py-1 bg-white"
      >
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default function ComponentShowcase() {
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  // Interactive demo states
  const [buttonVariant, setButtonVariant] = useState('primary');
  const [buttonSize, setButtonSize] = useState('md');
  const [badgeVariant, setBadgeVariant] = useState('primary');
  const [loadingSize, setLoadingSize] = useState('md');
  const cardSpring = {
    type: 'spring',
    stiffness: 340,
    damping: 28,
    mass: 0.9,
  };
  const cardVariants = prefersReducedMotion
    ? { rest: { y: 0, boxShadow: '0 4px 24px 0 rgba(20,20,40,0.08)' }, hover: { y: 0, boxShadow: '0 8px 32px 0 rgba(20,20,40,0.12)' } }
    : {
        rest: { y: 0, boxShadow: '0 4px 24px 0 rgba(20,20,40,0.08)', scale: 1, filter: 'blur(0px)' },
        hover: { y: -8, boxShadow: '0 12px 40px 0 rgba(20,20,40,0.16)', scale: 1.012, filter: 'blur(0px)' },
      };

  return (
    <div className="relative min-h-screen bg-[#f6f9fc] p-0 overflow-x-hidden">
      {/* Fractal background layer */}
      <FractalBackground position="bottom-right" blurAmount={80} zIndex={0} />
      {/* PixelHeat overlay */}
      <div className="absolute inset-0 bg-[url('/images/PixelHeat/halfton-heat-FLAT-01.webp')] bg-cover opacity-10 mix-blend-overlay pointer-events-none z-10" />
      {/* Soft accent gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/0 to-[var(--accent-secondary)]/[0.03] mix-blend-overlay z-20" />
      {/* Main content */}
      <div className="relative z-30">
        {/* Ensure space below nav */}
        <div className="h-[120px] md:h-[150px] w-full" />
        {/* Hero/section title area */}
        <div className="max-w-4xl mx-auto px-4 mb-12 text-center">
          <div className="mb-2">
            <span className="inline-block uppercase text-xs font-bold tracking-wider text-[var(--accent-primary)] bg-[var(--bg-secondary)]/60 px-3 py-1 rounded-md">Quick Reference</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-left leading-tight">Gun Club Component Kit</h1>
          <p className="text-lg text-[var(--text-secondary)] font-normal max-w-2xl mx-auto text-left mt-2">
            Copy-paste ready components for building gun club pages faster. No docs, just working code you can use right now.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4">
          {/* Theme Toggle - top right, prominent */}
          <div className="flex justify-end items-center min-h-[80px] mb-8">
            <div className="relative z-10">
              <NewThemeToggle />
            </div>
          </div>
          {/* System Overview - Real Stats */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/40">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">35+</div>
                <div className="text-sm text-gray-600">Components Built</div>
                <div className="text-xs text-gray-500 mt-1">UI, Effects, Navigation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">7</div>
                <div className="text-sm text-gray-600">Component Categories</div>
                <div className="text-xs text-gray-500 mt-1">Organized & documented</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">4</div>
                <div className="text-sm text-gray-600">Playgrounds</div>
                <div className="text-xs text-blue-600 mt-1">Interactive demos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">TypeScript</div>
                <div className="text-sm text-gray-600">Type Safety</div>
                <div className="text-xs text-emerald-600 mt-1">Fully typed props</div>
              </div>
            </div>
          </div>

          {/* Stripe-style card grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Button Interactive Demo */}
            <motion.div
              className="relative bg-white rounded-2xl shadow-xl transition-all duration-200 p-6 flex flex-col gap-4 overflow-hidden focus:outline-none border border-gray-100/50 md:col-span-2"
              tabIndex={0}
              initial="rest"
              whileHover="hover"
              whileFocus="hover"
              animate="rest"
              variants={cardVariants}
              transition={cardSpring}
            >
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 bg-[var(--accent-primary)]/10 rounded-lg">
                      <Squares2X2Icon className="w-5 h-5 text-[var(--accent-primary)]" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold font-heading text-gray-900">Button Component</h2>
                      <p className="text-sm text-gray-600">Interactive demo with live props</p>
                    </div>
                  </div>
                  <Badge variant="primary" className="text-xs">TypeScript</Badge>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Interactive Demo */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-4">Live Demo</h3>
                    
                    {/* Prop Controls */}
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <PropControl
                          label="Variant"
                          value={buttonVariant}
                          onChange={setButtonVariant}
                          options={['primary', 'secondary']}
                        />
                        <PropControl
                          label="Size"
                          value={buttonSize}
                          onChange={setButtonSize}
                          options={['sm', 'md', 'lg']}
                        />
                      </div>
                      
                      {/* Live Preview */}
                      <div className="flex items-center justify-center p-6 bg-white rounded border border-gray-200">
                        <Button 
                          variant={buttonVariant as any} 
                          size={buttonSize as any}
                          onClick={() => alert('Button clicked!')}
                        >
                          Click me!
                        </Button>
                      </div>
                    </div>

                    {/* All Variants Preview */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-semibold text-gray-600 uppercase tracking-wide">All Variants</h4>
                      <div className="flex flex-wrap gap-2">
                        <Button variant="primary" size="sm">Primary</Button>
                        <Button variant="secondary" size="sm">Secondary</Button>
                        <Button variant="primary" size="sm" disabled>Disabled</Button>
                      </div>
                    </div>
                  </div>

                  {/* Code Examples */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-4">Code Examples</h3>
                    
                    <div className="space-y-4">
                      <CodeSnippet
                        title="Basic Usage"
                        code={`import Button from '@/components/ui/Button';

<Button variant="${buttonVariant}" size="${buttonSize}">
  Click me!
</Button>`}
                      />
                      
                      <CodeSnippet
                        title="With Click Handler"
                        code={`<Button 
  variant="primary" 
  onClick={() => handleSubmit()}
>
  Submit Form
</Button>`}
                      />
                      
                      <CodeSnippet
                        title="Disabled State"
                        code={`<Button variant="primary" disabled>
  Loading...
</Button>`}
                      />
                    </div>
                  </div>
                </div>

                {/* Props Documentation */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <h3 className="text-sm font-semibold text-gray-700 mb-4">Props</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 text-gray-600 font-medium">Prop</th>
                          <th className="text-left py-2 text-gray-600 font-medium">Type</th>
                          <th className="text-left py-2 text-gray-600 font-medium">Default</th>
                          <th className="text-left py-2 text-gray-600 font-medium">Description</th>
                        </tr>
                      </thead>
                      <tbody className="text-xs">
                        <tr className="border-b border-gray-100">
                          <td className="py-2 font-mono text-blue-600">variant</td>
                          <td className="py-2 text-gray-600">'primary' | 'secondary'</td>
                          <td className="py-2 text-gray-500">'primary'</td>
                          <td className="py-2 text-gray-600">Visual style variant</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 font-mono text-blue-600">size</td>
                          <td className="py-2 text-gray-600">'sm' | 'md' | 'lg'</td>
                          <td className="py-2 text-gray-500">'md'</td>
                          <td className="py-2 text-gray-600">Button size</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 font-mono text-blue-600">disabled</td>
                          <td className="py-2 text-gray-600">boolean</td>
                          <td className="py-2 text-gray-500">false</td>
                          <td className="py-2 text-gray-600">Disable the button</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-mono text-blue-600">onClick</td>
                          <td className="py-2 text-gray-600">() => void</td>
                          <td className="py-2 text-gray-500">-</td>
                          <td className="py-2 text-gray-600">Click handler function</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Cards Card */}
            <motion.div
              className="relative bg-white rounded-2xl shadow-xl transition-all duration-200 p-8 flex flex-col gap-6 overflow-hidden focus:outline-none border border-gray-100/50"
              tabIndex={0}
              initial="rest"
              whileHover="hover"
              whileFocus="hover"
              animate="rest"
              variants={cardVariants}
              transition={cardSpring}
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-[#F2CB05]/20 via-[#F28705]/10 to-[#5B7FFF]/10 rounded-full blur-2xl opacity-40 pointer-events-none z-0 transition-opacity duration-300" />
              <div className="relative z-10">
                {/* Header section */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 bg-[var(--accent-secondary)]/10 rounded-lg">
                      <RectangleStackIcon className="w-5 h-5 text-[var(--accent-secondary)]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">Cards</span>
                        <CheckCircleIcon className="w-3 h-3 text-emerald-500" />
                      </div>
                      <h2 className="text-2xl font-bold font-heading text-gray-900">Content Containers</h2>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs">3 types</Badge>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-3">Flexible card components with glassmorphism effects, gradients, and responsive layouts.</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                      <span>Glassmorphism</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                      <span>Gradient ready</span>
                    </div>
                  </div>
                </div>

                {/* Component preview */}
                <div className="space-y-3 mb-4">
                  <div className="bg-gray-50 rounded-lg p-3 text-center text-xs font-medium text-gray-700 border border-gray-100">Standard Card</div>
                  <div className="bg-gradient-to-r from-[var(--accent-primary)]/10 to-[var(--accent-secondary)]/10 rounded-lg p-3 text-center text-xs font-medium text-gray-700 border border-orange-100">Gradient Card</div>
                  <div className="backdrop-blur-md bg-white/70 rounded-lg p-3 text-center text-xs font-medium text-gray-700 border border-white/20">Glass Card</div>
                </div>

                {/* Usage stats */}
                <div className="grid grid-cols-2 gap-4 mb-4 py-3 border-t border-gray-100">
                  <div>
                    <div className="text-lg font-bold text-gray-900">6</div>
                    <div className="text-xs text-gray-500">Card variations</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">Glass</div>
                    <div className="text-xs text-gray-500">Morphism effects</div>
                  </div>
                </div>

                {/* Action */}
                <div className="flex items-center justify-between">
                  <Link href="/test/components/cards" className="text-sm font-medium text-[var(--accent-primary)] hover:text-[var(--accent-primary)]/80 flex items-center gap-2">
                    <SwatchIcon className="w-4 h-4" />
                    Explore styles
                  </Link>
                  <span className="text-xs text-gray-400">Updated 1 week ago</span>
                </div>
              </div>
            </motion.div>

            {/* Badge Interactive Demo */}
            <motion.div
              className="relative bg-white rounded-2xl shadow-xl transition-all duration-200 p-6 flex flex-col gap-4 overflow-hidden focus:outline-none border border-gray-100/50"
              tabIndex={0}
              initial="rest"
              whileHover="hover"
              whileFocus="hover"
              animate="rest"
              variants={cardVariants}
              transition={cardSpring}
            >
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 bg-yellow-100 rounded-lg">
                      <TagIcon className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold font-heading text-gray-900">Badge Component</h2>
                      <p className="text-sm text-gray-600">Status indicators & labels</p>
                    </div>
                  </div>
                  <Badge variant="gold" className="text-xs">Ready</Badge>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {/* Interactive Demo */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-3">Live Demo</h3>
                    
                    <div className="bg-gray-50 rounded-lg p-3 mb-3">
                      <PropControl
                        label="Variant"
                        value={badgeVariant}
                        onChange={setBadgeVariant}
                        options={['primary', 'secondary', 'info', 'gold', 'success', 'danger']}
                      />
                      
                      {/* Live Preview */}
                      <div className="flex items-center justify-center p-4 bg-white rounded border border-gray-200 mt-3">
                        <Badge variant={badgeVariant as any}>
                          {badgeVariant.charAt(0).toUpperCase() + badgeVariant.slice(1)}
                        </Badge>
                      </div>
                    </div>

                    {/* All Variants */}
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="primary" size="sm">Primary</Badge>
                      <Badge variant="secondary" size="sm">Secondary</Badge>
                      <Badge variant="info" size="sm">Info</Badge>
                      <Badge variant="gold" size="sm">Gold</Badge>
                    </div>
                  </div>

                  {/* Code & Usage */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-3">Usage</h3>
                    
                                         <CodeSnippet
                       title="Badge Example"
                       code={badgeVariant === 'primary' ? 
                         '<Badge variant="primary">Status</Badge>' :
                         '<Badge variant="' + badgeVariant + '">Status</Badge>'}
                     />

                    <div className="mt-3 text-xs space-y-1">
                      <div><strong>Use cases:</strong></div>
                      <div>• Status indicators</div>
                      <div>• Notification counts</div>
                      <div>• Category labels</div>
                      <div>• Feature flags</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Loading States Card */}
            <motion.div
              className="relative bg-white rounded-2xl shadow-xl transition-all duration-200 p-8 flex flex-col gap-6 overflow-hidden focus:outline-none border border-gray-100/50"
              tabIndex={0}
              initial="rest"
              whileHover="hover"
              whileFocus="hover"
              animate="rest"
              variants={cardVariants}
              transition={cardSpring}
            >
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#F2CB05]/10 via-[#F28705]/10 to-[#5B7FFF]/10 rounded-full blur-2xl opacity-30 pointer-events-none z-0 transition-opacity duration-300" />
              <div className="relative z-10">
                {/* Header section */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg">
                      <ArrowPathIcon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">Async UI</span>
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      </div>
                      <h2 className="text-2xl font-bold font-heading text-gray-900">Loading States</h2>
                    </div>
                  </div>
                  <Badge variant="info" className="text-xs">3 sizes</Badge>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-3">Smooth loading animations with consistent timing and reduced motion support.</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>60fps animations</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>Reduced motion</span>
                    </div>
                  </div>
                </div>

                {/* Component preview */}
                <div className="bg-gray-50/50 rounded-xl p-6 mb-4 border border-gray-100">
                  <div className="flex items-center justify-center gap-8">
                    <div className="text-center">
                      <LoadingSpinner size="sm" />
                      <div className="text-xs text-gray-500 mt-2">Small</div>
                    </div>
                    <div className="text-center">
                      <LoadingSpinner size="md" />
                      <div className="text-xs text-gray-500 mt-2">Medium</div>
                    </div>
                    <div className="text-center">
                      <LoadingSpinner size="lg" />
                      <div className="text-xs text-gray-500 mt-2">Large</div>
                    </div>
                  </div>
                </div>

                {/* Performance metrics */}
                <div className="mb-4 py-3 border-t border-gray-100">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Performance impact</span>
                    <span className="font-mono text-green-600">~0.2ms</span>
                  </div>
                </div>

                {/* Action */}
                <div className="flex items-center justify-between">
                  <Link href="/test/components/loading" className="text-sm font-medium text-[var(--accent-primary)] hover:text-[var(--accent-primary)]/80 flex items-center gap-2">
                    <ChartBarIcon className="w-4 h-4" />
                    View performance
                  </Link>
                  <span className="text-xs text-gray-400">Optimized</span>
                </div>
              </div>
            </motion.div>

            {/* Interactive Demo Card */}
            <motion.div
              className="relative bg-white rounded-2xl shadow-xl transition-all duration-200 p-8 flex flex-col gap-6 overflow-hidden focus:outline-none border border-gray-100/50 md:col-span-2"
              tabIndex={0}
              initial="rest"
              whileHover="hover"
              whileFocus="hover"
              animate="rest"
              variants={cardVariants}
              transition={cardSpring}
            >
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-[#F2CB05]/20 via-[#F28705]/15 to-[#5B7FFF]/10 rounded-full blur-3xl opacity-40 pointer-events-none z-0 transition-opacity duration-300" />
              <div className="relative z-10">
                {/* Header section */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl">
                      <SparklesIcon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">Showcase</span>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-xs text-green-600 font-medium">Live Demo</span>
                        </div>
                      </div>
                      <h2 className="text-3xl font-bold font-heading text-gray-900">Interactive Playground</h2>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="primary" className="text-xs">Featured</Badge>
                    <Badge variant="gold" className="text-xs">New</Badge>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <p className="text-lg text-gray-600 mb-4">Experience all component interactions, hover states, and animations in real-time. Test accessibility features and responsive behavior.</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-emerald-500" />
                      <span className="text-gray-600">Hover effects</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-emerald-500" />
                      <span className="text-gray-600">Focus states</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-emerald-500" />
                      <span className="text-gray-600">Touch gestures</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-emerald-500" />
                      <span className="text-gray-600">Animations</span>
                    </div>
                  </div>
                </div>

                {/* Interactive preview */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50/50 rounded-xl p-6 border border-gray-100">
                    <h4 className="text-sm font-semibold text-gray-700 mb-4">Button Interactions</h4>
                    <div className="space-y-3">
                      <Button variant="primary" onClick={() => alert('Primary button clicked!')} className="w-full">
                        Try Primary Action
                      </Button>
                      <Button variant="secondary" onClick={() => alert('Secondary button clicked!')} className="w-full">
                        Try Secondary Action
                      </Button>
                    </div>
                  </div>
                  <div className="bg-gray-50/50 rounded-xl p-6 border border-gray-100">
                    <h4 className="text-sm font-semibold text-gray-700 mb-4">Card States</h4>
                    <div className="space-y-3">
                      <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-100">
                        <div className="text-xs text-gray-500 mb-1">Hover me</div>
                        <div className="text-sm font-medium text-gray-900">Interactive Card</div>
                      </div>
                      <div className="bg-gradient-to-r from-[var(--accent-primary)]/10 to-[var(--accent-secondary)]/10 rounded-lg p-4 border border-orange-100">
                        <div className="text-xs text-gray-500 mb-1">Gradient style</div>
                        <div className="text-sm font-medium text-gray-900">Themed Card</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Usage statistics */}
                <div className="grid grid-cols-4 gap-6 mb-6 py-4 border-y border-gray-100">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">24+</div>
                    <div className="text-xs text-gray-500">Interactive components</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">98%</div>
                    <div className="text-xs text-gray-500">Accessibility score</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">60fps</div>
                    <div className="text-xs text-gray-500">Animation performance</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">100%</div>
                    <div className="text-xs text-gray-500">Mobile optimized</div>
                  </div>
                </div>

                {/* Action */}
                <div className="flex items-center justify-between">
                  <Link href="/test/components/interactive" className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--accent-primary)] text-white rounded-lg font-medium hover:bg-[var(--accent-primary)]/90 transition-colors">
                    <PresentationChartLineIcon className="w-4 h-4" />
                    Launch Full Playground
                  </Link>
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span>Last updated: Today</span>
                    <span>•</span>
                    <span>Version 2.1.0</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Forms & Inputs Card */}
            <motion.div
              className="relative bg-white rounded-2xl shadow-xl transition-all duration-200 p-8 flex flex-col gap-6 overflow-hidden focus:outline-none border border-gray-100/50"
              tabIndex={0}
              initial="rest"
              whileHover="hover"
              whileFocus="hover"
              animate="rest"
              variants={cardVariants}
              transition={cardSpring}
            >
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-emerald-300/20 via-blue-300/15 to-purple-300/10 rounded-full blur-2xl opacity-40 pointer-events-none z-0 transition-opacity duration-300" />
              <div className="relative z-10">
                {/* Header section */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 bg-emerald-100 rounded-lg">
                      <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">Input</span>
                        <CheckCircleIcon className="w-3 h-3 text-emerald-500" />
                      </div>
                      <h2 className="text-2xl font-bold font-heading text-gray-900">Forms & Inputs</h2>
                    </div>
                  </div>
                  <Badge variant="info" className="text-xs">Coming Soon</Badge>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-3">Advanced form controls with validation, error states, and real-time feedback.</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span>Auto validation</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Real-time feedback</span>
                    </div>
                  </div>
                </div>

                {/* Component preview */}
                <div className="bg-gray-50/50 rounded-xl p-4 mb-4 border border-gray-100">
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg px-3 py-2 border border-gray-200 text-sm text-gray-700">Email input field</div>
                    <div className="bg-white rounded-lg px-3 py-2 border border-gray-200 text-sm text-gray-700">Password input field</div>
                    <div className="bg-white rounded-lg px-3 py-2 border-2 border-blue-200 text-sm text-blue-700">Focused input state</div>
                  </div>
                </div>

                {/* Development status */}
                <div className="mb-4 py-3 border-t border-gray-100">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Development progress</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="w-3/4 h-full bg-blue-500 rounded-full"></div>
                      </div>
                      <span className="text-blue-600 text-xs font-medium">75%</span>
                    </div>
                  </div>
                </div>

                {/* Action */}
                <div className="flex items-center justify-between">
                  <Link href="/test/components/forms" className="text-sm font-medium text-[var(--accent-primary)] hover:text-[var(--accent-primary)]/80 flex items-center gap-2">
                    <BeakerIcon className="w-4 h-4" />
                    Preview beta
                  </Link>
                  <span className="text-xs text-gray-400">ETA: 2 weeks</span>
                </div>
              </div>
            </motion.div>

            {/* Navigation Components Card */}
            <motion.div
              className="relative bg-white rounded-2xl shadow-xl transition-all duration-200 p-8 flex flex-col gap-6 overflow-hidden focus:outline-none border border-gray-100/50"
              tabIndex={0}
              initial="rest"
              whileHover="hover"
              whileFocus="hover"
              animate="rest"
              variants={cardVariants}
              transition={cardSpring}
            >
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-indigo-300/20 via-cyan-300/15 to-blue-300/10 rounded-full blur-2xl opacity-40 pointer-events-none z-0 transition-opacity duration-300" />
              <div className="relative z-10">
                {/* Header section */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 bg-indigo-100 rounded-lg">
                      <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">Navigation</span>
                        <CheckCircleIcon className="w-3 h-3 text-emerald-500" />
                      </div>
                      <h2 className="text-2xl font-bold font-heading text-gray-900">Navigation Suite</h2>
                    </div>
                  </div>
                  <Badge variant="primary" className="text-xs">Production</Badge>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-3">Complete navigation system with mega menus, breadcrumbs, and mobile-first design.</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                      <span>Mega menu</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                      <span>Mobile optimized</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>Keyboard nav</span>
                    </div>
                  </div>
                </div>

                {/* Component preview - showing navigation structure */}
                <div className="bg-gray-50/50 rounded-xl p-4 mb-4 border border-gray-100">
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2 text-gray-800 font-medium">
                      <div className="w-2 h-2 bg-[var(--accent-primary)] rounded-full"></div>
                      MegaMenu Component
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 ml-4">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      NavBar
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 ml-4">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      MobileMenu
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 ml-4">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      NavLink (8 variants)
                    </div>
                  </div>
                </div>

                                {/* Navigation features */}
                <div className="grid grid-cols-2 gap-4 mb-4 py-3 border-t border-gray-100">
                  <div>
                    <div className="text-lg font-bold text-gray-900">Mega</div>
                    <div className="text-xs text-gray-500">Menu system</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">Mobile</div>
                    <div className="text-xs text-gray-500">First design</div>
                  </div>
                </div>

                {/* Action */}
                <div className="flex items-center justify-between">
                  <Link href="/test/components/navigation" className="text-sm font-medium text-[var(--accent-primary)] hover:text-[var(--accent-primary)]/80 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    View in production
                  </Link>
                  <span className="text-xs text-gray-400">v3.1.2 stable</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Technology Stack */}
          <div className="mb-12">
            <div className="max-w-4xl mx-auto mb-8">
              <h2 className="text-3xl font-bold font-heading text-gray-900 mb-2">Technology Stack</h2>
              <p className="text-gray-600">Modern tools and frameworks powering the design system.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* React & Next.js */}
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.47 0-.92.014-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.36.034.47 0 .92-.014 1.36-.034-.44.572-.895 1.095-1.36 1.56-.466-.464-.92-.988-1.36-1.56z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">React & Next.js</h3>
                    <p className="text-xs text-gray-500">Modern React framework</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Next.js</span>
                    <span className="font-mono text-blue-600">15.3.2</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">React</span>
                    <span className="font-mono text-blue-600">19.x</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">TypeScript</span>
                    <span className="text-xs text-emerald-600 font-medium">✓ Full support</span>
                  </div>
                </div>
              </div>

              {/* Styling & Animation */}
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <SwatchIcon className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Styling & Animation</h3>
                    <p className="text-xs text-gray-500">Modern CSS solutions</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Tailwind CSS</span>
                    <span className="font-mono text-purple-600">4.0</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Framer Motion</span>
                    <span className="font-mono text-purple-600">11.x</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Brand colors</span>
                    <span className="text-xs text-emerald-600 font-medium">✓ CSS Variables</span>
                  </div>
                </div>
              </div>

              {/* Developer Experience */}
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <CodeBracketIcon className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Developer Experience</h3>
                    <p className="text-xs text-gray-500">Development tools</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Component playground</span>
                    <span className="text-xs text-emerald-600 font-medium">✓ Interactive</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">TypeScript props</span>
                    <span className="text-xs text-emerald-600 font-medium">✓ Full typing</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Hot reload</span>
                    <span className="text-xs text-emerald-600 font-medium">✓ Fast refresh</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Component Roadmap Section */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto mb-8">
              <h2 className="text-3xl font-bold font-heading text-gray-900 mb-2">Development Roadmap</h2>
              <p className="text-gray-600">Upcoming components and feature releases planned for the design system.</p>
            </div>
            
            <div className="space-y-6">
              {/* Q1 2025 - Current Quarter */}
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <h3 className="text-lg font-semibold text-gray-900">Q1 2025 - In Progress</h3>
                  <Badge variant="primary" className="text-xs">Active Development</Badge>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3">New Components</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="w-3/4 h-full bg-blue-500 rounded-full"></div>
                        </div>
                        <span className="text-gray-600">Forms & Validation (75%)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="w-1/2 h-full bg-blue-500 rounded-full"></div>
                        </div>
                        <span className="text-gray-600">Data Tables (50%)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="w-1/4 h-full bg-blue-500 rounded-full"></div>
                        </div>
                        <span className="text-gray-600">Advanced Charts (25%)</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3">Feature Updates</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="w-3 h-3 text-emerald-500" />
                        Dark mode theme refinements
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="w-3 h-3 text-emerald-500" />
                        Animation performance optimizations
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-3 h-3 border border-gray-300 rounded-full"></div>
                        Component testing framework
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Q2 2025 - Next Quarter */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                  <h3 className="text-lg font-semibold text-gray-900">Q2 2025 - Planned</h3>
                  <Badge variant="secondary" className="text-xs">Design Phase</Badge>
                </div>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Advanced UI</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Multi-step forms</li>
                      <li>• File upload components</li>
                      <li>• Rich text editor</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Data Visualization</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Interactive charts</li>
                      <li>• Dashboard widgets</li>
                      <li>• Real-time metrics</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Mobile Components</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Touch gestures</li>
                      <li>• Mobile navigation</li>
                      <li>• PWA features</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Component Architecture */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto mb-8">
              <h2 className="text-3xl font-bold font-heading text-gray-900 mb-2">Component Architecture</h2>
              <p className="text-gray-600">How the design system is organized and structured for scalability.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Component Categories */}
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Component Categories</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[var(--accent-primary)]/10 rounded-lg flex items-center justify-center">
                        <Squares2X2Icon className="w-4 h-4 text-[var(--accent-primary)]" />
                      </div>
                      <span className="text-sm font-medium text-gray-800">UI Components</span>
                    </div>
                    <span className="text-sm text-gray-600">17 components</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                        <SparklesIcon className="w-4 h-4 text-purple-600" />
                      </div>
                      <span className="text-sm font-medium text-gray-800">Effects & Animation</span>
                    </div>
                    <span className="text-sm text-gray-600">9 components</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-800">Navigation</span>
                    </div>
                    <span className="text-sm text-gray-600">6 components</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-800">Layout & Pages</span>
                    </div>
                    <span className="text-sm text-gray-600">15+ components</span>
                  </div>
                </div>
              </div>

              {/* Design Principles */}
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Design Principles</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border border-green-100">
                    <div>
                      <div className="text-sm font-medium text-green-800">Accessibility First</div>
                      <div className="text-xs text-green-600">WCAG 2.1 AA compliance built-in</div>
                    </div>
                    <CheckCircleIcon className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border border-blue-100">
                    <div>
                      <div className="text-sm font-medium text-blue-800">TypeScript Native</div>
                      <div className="text-xs text-blue-600">Full type safety & IntelliSense</div>
                    </div>
                    <CheckCircleIcon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg border border-purple-100">
                    <div>
                      <div className="text-sm font-medium text-purple-800">Brand Consistency</div>
                      <div className="text-xs text-purple-600">Official gun club brand colors</div>
                    </div>
                    <CheckCircleIcon className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <div>
                      <div className="text-sm font-medium text-gray-800">Performance Focused</div>
                      <div className="text-xs text-gray-600">Optimized animations & bundle size</div>
                    </div>
                    <CheckCircleIcon className="w-5 h-5 text-gray-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Developer Resources */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto mb-8">
              <h2 className="text-3xl font-bold font-heading text-gray-900 mb-2">Developer Resources</h2>
              <p className="text-gray-600">Tools, documentation, and guides for using the design system effectively.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Design Tokens */}
              <div className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <SwatchIcon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Design Tokens</h3>
                <p className="text-sm text-gray-600 mb-4">Complete color palette, typography scale, spacing system, and brand variables.</p>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Colors</span>
                    <span className="font-mono text-gray-700">26 tokens</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Typography</span>
                    <span className="font-mono text-gray-700">12 scales</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Spacing</span>
                    <span className="font-mono text-gray-700">16 values</span>
                  </div>
                </div>
                <Link href="/design-tokens" className="inline-flex items-center gap-1 text-sm font-medium text-[var(--accent-primary)] hover:text-[var(--accent-primary)]/80 mt-4">
                  View tokens →
                </Link>
              </div>

              {/* Component API */}
              <div className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center mb-4">
                  <CodeBracketIcon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Component API</h3>
                <p className="text-sm text-gray-600 mb-4">TypeScript definitions, prop interfaces, and usage examples for all components.</p>
                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                  <code className="text-xs text-gray-700">
                    &lt;Button variant="primary" size="lg"&gt;<br/>
                    &nbsp;&nbsp;Click me<br/>
                    &lt;/Button&gt;
                  </code>
                </div>
                <Link href="/component-api" className="inline-flex items-center gap-1 text-sm font-medium text-[var(--accent-primary)] hover:text-[var(--accent-primary)]/80">
                  View API docs →
                </Link>
              </div>

              {/* Figma Plugin */}
              <div className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.015-4.49-4.491S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117v-6.038H8.148z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Figma Integration</h3>
                <p className="text-sm text-gray-600 mb-4">Design system components and tokens synced with Figma for seamless design-to-code workflow.</p>
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircleIcon className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm text-gray-600">Auto-sync enabled</span>
                </div>
                <Link href="/figma-plugin" className="inline-flex items-center gap-1 text-sm font-medium text-[var(--accent-primary)] hover:text-[var(--accent-primary)]/80">
                  Install plugin →
                </Link>
              </div>
            </div>
          </div>

          {/* Design System Status */}
          <div className="max-w-4xl mx-auto px-4 mb-16">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--accent-primary)]/20 to-[var(--accent-secondary)]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircleIcon className="w-8 h-8 text-[var(--accent-primary)]" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4">Design System Status</h3>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  All components follow the official Boise Gun Club brand guidelines with [consistent Stripe-like aesthetics][[memory:4609447173785363831]], 
                  comprehensive accessibility standards, and enterprise-grade performance optimization.
                </p>
                                 <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                   <div className="text-center">
                     <div className="text-2xl font-bold text-gray-900 mb-1">Official</div>
                     <div className="text-sm text-gray-600">Brand Colors</div>
                     <CheckCircleIcon className="w-4 h-4 text-emerald-500 mx-auto mt-1" />
                   </div>
                   <div className="text-center">
                     <div className="text-2xl font-bold text-gray-900 mb-1">WCAG</div>
                     <div className="text-sm text-gray-600">Accessibility</div>
                     <CheckCircleIcon className="w-4 h-4 text-emerald-500 mx-auto mt-1" />
                   </div>
                   <div className="text-center">
                     <div className="text-2xl font-bold text-gray-900 mb-1">TypeScript</div>
                     <div className="text-sm text-gray-600">Type Safety</div>
                     <CheckCircleIcon className="w-4 h-4 text-emerald-500 mx-auto mt-1" />
                   </div>
                   <div className="text-center">
                     <div className="text-2xl font-bold text-gray-900 mb-1">Mobile</div>
                     <div className="text-sm text-gray-600">First Design</div>
                     <CheckCircleIcon className="w-4 h-4 text-emerald-500 mx-auto mt-1" />
                   </div>
                 </div>
                                 <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/40">
                   <div className="text-xs text-gray-500 mb-2">Built with modern React & Next.js architecture</div>
                   <div className="flex items-center justify-center gap-4 text-sm">
                     <div className="flex items-center gap-1">
                       <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                       <span className="text-gray-700">Production ready</span>
                     </div>
                     <span className="text-gray-400">•</span>
                     <div className="flex items-center gap-1">
                       <span className="text-gray-700">Interactive demos</span>
                     </div>
                     <span className="text-gray-400">•</span>
                     <div className="flex items-center gap-1">
                       <span className="text-gray-700">Fully documented</span>
                     </div>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 