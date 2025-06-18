'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { 
  ClipboardIcon,
  ClipboardDocumentCheckIcon,
  ArrowLeftIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  CalendarIcon
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

// Form Input Component
interface InputProps {
  label: string;
  type?: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
  icon?: React.ReactNode;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function FormInput({ label, type = 'text', placeholder, error, required, icon, value, onChange }: InputProps) {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <div className="text-gray-400 w-5 h-5">{icon}</div>
          </div>
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full ${icon ? 'pl-10' : 'pl-3'} pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] focus:border-transparent ${error ? 'border-red-500' : 'border-gray-300'}`}
        />
      </div>
      {error && (
        <div className="flex items-center gap-1 text-sm text-red-600">
          <ExclamationTriangleIcon className="w-4 h-4" />
          {error}
        </div>
      )}
    </div>
  );
}

export default function FormsPlayground() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    membershipType: '',
    experience: '',
    emergencyContact: '',
    emergencyPhone: '',
    birthDate: '',
    interests: [] as string[],
    agreement: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.membershipType) newErrors.membershipType = 'Please select a membership type';
    if (!formData.birthDate) newErrors.birthDate = 'Birth date is required';
    if (!formData.agreement) newErrors.agreement = 'You must agree to the terms';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 p-4 flex items-center justify-center">
        <Card variant="default" className="max-w-md w-full">
          <div className="p-8 text-center">
            <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h2>
            <p className="text-gray-600 mb-6">Thank you for your interest in joining Boise Gun Club. We'll review your application and get back to you within 2-3 business days.</p>
            <Button variant="primary" onClick={() => setSubmitted(false)}>
              Submit Another Application
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/test/components" className="inline-flex items-center gap-2 text-[var(--accent-primary)] hover:text-[var(--accent-primary)]/80 mb-4">
            <ArrowLeftIcon className="w-4 h-4" />
            Back to Components
          </Link>
          <h1 className="text-4xl font-bold font-heading text-gray-900 mb-2">Forms Playground</h1>
          <p className="text-gray-600">Input components, validation, and real-world form examples</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Interactive Demo */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Input Components */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Input Components</h2>
              
              <div className="space-y-6">
                {/* Basic Inputs */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Basic Inputs</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormInput
                      label="Text Input"
                      placeholder="Enter text here"
                    />
                    <FormInput
                      label="Email Input"
                      type="email"
                      placeholder="email@example.com"
                    />
                    <FormInput
                      label="Password Input"
                      type="password"
                      placeholder="Enter password"
                    />
                    <FormInput
                      label="Number Input"
                      type="number"
                      placeholder="Enter number"
                    />
                  </div>
                </div>

                {/* Inputs with Icons */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Inputs with Icons</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormInput
                      label="Name"
                      placeholder="Full Name"
                      icon={<UserIcon />}
                    />
                    <FormInput
                      label="Email"
                      type="email"
                      placeholder="email@example.com"
                      icon={<EnvelopeIcon />}
                    />
                    <FormInput
                      label="Phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      icon={<PhoneIcon />}
                    />
                    <FormInput
                      label="Date"
                      type="date"
                      icon={<CalendarIcon />}
                    />
                  </div>
                </div>

                {/* Error States */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Error States</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormInput
                      label="Required Field"
                      placeholder="This field is required"
                      error="This field is required"
                      required
                    />
                    <FormInput
                      label="Invalid Email"
                      type="email"
                      placeholder="invalid-email"
                      error="Please enter a valid email address"
                      value="invalid-email"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <CodeSnippet
                  title="Input Component Usage"
                  code={`<FormInput
  label="Email"
  type="email"
  placeholder="email@example.com"
  icon={<EnvelopeIcon />}
  error={errors.email}
  required
  value={formData.email}
  onChange={(e) => handleChange('email', e.target.value)}
/>`}
                />
              </div>
            </div>

            {/* Complete Membership Form */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Complete Membership Application</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Personal Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormInput
                      label="First Name"
                      placeholder="John"
                      required
                      icon={<UserIcon />}
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      error={errors.firstName}
                    />
                    <FormInput
                      label="Last Name"
                      placeholder="Smith"
                      required
                      icon={<UserIcon />}
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      error={errors.lastName}
                    />
                    <FormInput
                      label="Email Address"
                      type="email"
                      placeholder="john.smith@example.com"
                      required
                      icon={<EnvelopeIcon />}
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      error={errors.email}
                    />
                    <FormInput
                      label="Phone Number"
                      type="tel"
                      placeholder="(555) 123-4567"
                      required
                      icon={<PhoneIcon />}
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      error={errors.phone}
                    />
                    <FormInput
                      label="Date of Birth"
                      type="date"
                      required
                      icon={<CalendarIcon />}
                      value={formData.birthDate}
                      onChange={(e) => handleInputChange('birthDate', e.target.value)}
                      error={errors.birthDate}
                    />
                  </div>
                </div>

                {/* Membership Details */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Membership Details</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Membership Type <span className="text-red-500">*</span>
                      </label>
                      <div className="grid md:grid-cols-3 gap-3">
                        {[
                          { value: 'basic', label: 'Basic', price: '$50/month', description: 'Access to basic facilities' },
                          { value: 'premium', label: 'Premium', price: '$99/month', description: 'Full facility access + events' },
                          { value: 'vip', label: 'VIP', price: '$199/month', description: 'Everything + personal training' }
                        ].map((option) => (
                          <div
                            key={option.value}
                            className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                              formData.membershipType === option.value
                                ? 'border-[var(--accent-primary)] bg-orange-50'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                            onClick={() => handleInputChange('membershipType', option.value)}
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <input
                                type="radio"
                                name="membershipType"
                                value={option.value}
                                checked={formData.membershipType === option.value}
                                onChange={() => handleInputChange('membershipType', option.value)}
                              />
                              <div className="font-medium text-gray-900">{option.label}</div>
                            </div>
                            <div className="text-sm text-[var(--accent-primary)] font-semibold mb-1">{option.price}</div>
                            <div className="text-xs text-gray-600">{option.description}</div>
                          </div>
                        ))}
                      </div>
                      {errors.membershipType && (
                        <div className="flex items-center gap-1 text-sm text-red-600 mt-2">
                          <ExclamationTriangleIcon className="w-4 h-4" />
                          {errors.membershipType}
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Shooting Experience
                      </label>
                      <select
                        value={formData.experience}
                        onChange={(e) => handleInputChange('experience', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] focus:border-transparent"
                      >
                        <option value="">Select your experience level</option>
                        <option value="beginner">Beginner (0-1 years)</option>
                        <option value="intermediate">Intermediate (2-5 years)</option>
                        <option value="advanced">Advanced (5+ years)</option>
                        <option value="expert">Expert/Competitive</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Interests */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Areas of Interest</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      'Trap Shooting',
                      'Skeet Shooting',
                      'Sporting Clays',
                      'Rifle Shooting',
                      'Pistol Shooting',
                      'Archery',
                      'Hunting',
                      'Competitive Shooting',
                      'Safety Training',
                      'Youth Programs'
                    ].map((interest) => (
                      <label key={interest} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.interests.includes(interest)}
                          onChange={() => handleInterestChange(interest)}
                          className="rounded border-gray-300 text-[var(--accent-primary)] focus:ring-[var(--accent-primary)]"
                        />
                        <span className="text-sm text-gray-700">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Emergency Contact */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Emergency Contact</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormInput
                      label="Emergency Contact Name"
                      placeholder="Jane Smith"
                      icon={<UserIcon />}
                      value={formData.emergencyContact}
                      onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                    />
                    <FormInput
                      label="Emergency Contact Phone"
                      type="tel"
                      placeholder="(555) 987-6543"
                      icon={<PhoneIcon />}
                      value={formData.emergencyPhone}
                      onChange={(e) => handleInputChange('emergencyPhone', e.target.value)}
                    />
                  </div>
                </div>

                {/* Agreement */}
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="agreement"
                      checked={formData.agreement}
                      onChange={(e) => setFormData(prev => ({ ...prev, agreement: e.target.checked }))}
                      className="mt-1 rounded border-gray-300 text-[var(--accent-primary)] focus:ring-[var(--accent-primary)]"
                    />
                    <label htmlFor="agreement" className="text-sm text-gray-700">
                      I agree to the <a href="#" className="text-[var(--accent-primary)] hover:underline">Terms of Service</a>, 
                      <a href="#" className="text-[var(--accent-primary)] hover:underline ml-1">Privacy Policy</a>, and 
                      <a href="#" className="text-[var(--accent-primary)] hover:underline ml-1">Club Rules</a>. 
                      I understand that membership is subject to approval and background verification.
                    </label>
                  </div>
                  {errors.agreement && (
                    <div className="flex items-center gap-1 text-sm text-red-600 mt-2">
                      <ExclamationTriangleIcon className="w-4 h-4" />
                      {errors.agreement}
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <div className="flex justify-end gap-4 pt-6 border-t border-gray-200">
                  <Button
                    variant="secondary"
                    size="lg"
                    type="button"
                    onClick={() => setFormData({
                      firstName: '',
                      lastName: '',
                      email: '',
                      phone: '',
                      membershipType: '',
                      experience: '',
                      emergencyContact: '',
                      emergencyPhone: '',
                      birthDate: '',
                      interests: [],
                      agreement: false
                    })}
                  >
                    Clear Form
                  </Button>
                  <Button
                    variant="primary"
                    size="lg"
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center gap-2"
                  >
                    {isSubmitting && <LoadingSpinner size="sm" color="white" />}
                    {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                  </Button>
                </div>
              </form>

              <div className="mt-6">
                <CodeSnippet
                  title="Form Validation"
                  code={`const validateForm = () => {
  const newErrors = {};
  
  if (!formData.firstName.trim()) {
    newErrors.firstName = 'First name is required';
  }
  
  if (!formData.email.trim()) {
    newErrors.email = 'Email is required';
  } else if (!/\\S+@\\S+\\.\\S+/.test(formData.email)) {
    newErrors.email = 'Please enter a valid email';
  }
  
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};`}
                />
              </div>
            </div>

            {/* Quick Form Examples */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Form Examples</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Newsletter Signup */}
                <Card variant="glass">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Newsletter Signup</h3>
                    <p className="text-gray-600 text-sm mb-4">Stay updated with events and club news</p>
                    <div className="space-y-3">
                      <FormInput
                        label="Email Address"
                        type="email"
                        placeholder="your@email.com"
                        icon={<EnvelopeIcon />}
                      />
                      <Button variant="primary" size="md" className="w-full">
                        Subscribe
                      </Button>
                    </div>
                  </div>
                </Card>

                {/* Event Registration */}
                <Card variant="default">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Event Registration</h3>
                    <p className="text-gray-600 text-sm mb-4">Register for upcoming competition</p>
                    <div className="space-y-3">
                      <FormInput
                        label="Full Name"
                        placeholder="John Smith"
                        icon={<UserIcon />}
                      />
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Skill Level
                        </label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]">
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                        </select>
                      </div>
                      <Button variant="primary" size="md" className="w-full">
                        Register ($25)
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="mt-6">
                <CodeSnippet
                  title="Quick Form Pattern"
                  code={`<Card variant="glass">
  <div className="p-6">
    <h3 className="text-lg font-semibold mb-3">Newsletter Signup</h3>
    <div className="space-y-3">
      <FormInput
        label="Email Address"
        type="email"
        icon={<EnvelopeIcon />}
      />
      <Button variant="primary" className="w-full">
        Subscribe
      </Button>
    </div>
  </div>
</Card>`}
                />
              </div>
            </div>
          </div>

          {/* Documentation Sidebar */}
          <div className="space-y-6">
            
            {/* Component Status */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircleIcon className="w-5 h-5 text-green-500" />
                <h3 className="text-lg font-semibold text-gray-900">Form Components</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Input Types</span>
                  <Badge variant="primary">8 Types</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Validation</span>
                  <Badge variant="success">Built-in</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Accessibility</span>
                  <Badge variant="success">WCAG 2.1</Badge>
                </div>
              </div>
            </div>

            {/* Input Props */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">FormInput Props</h3>
              <div className="space-y-4">
                <div>
                  <div className="font-mono text-sm text-blue-600 mb-1">label</div>
                  <div className="text-sm text-gray-600 mb-1">string</div>
                  <div className="text-xs text-gray-500">Input field label</div>
                </div>
                <div>
                  <div className="font-mono text-sm text-blue-600 mb-1">type</div>
                  <div className="text-sm text-gray-600 mb-1">'text' | 'email' | 'password' | 'tel' | 'date' | 'number'</div>
                  <div className="text-xs text-gray-500">HTML input type</div>
                </div>
                <div>
                  <div className="font-mono text-sm text-blue-600 mb-1">error</div>
                  <div className="text-sm text-gray-600 mb-1">string</div>
                  <div className="text-xs text-gray-500">Error message to display</div>
                </div>
                <div>
                  <div className="font-mono text-sm text-blue-600 mb-1">icon</div>
                  <div className="text-sm text-gray-600 mb-1">ReactNode</div>
                  <div className="text-xs text-gray-500">Icon to display in input</div>
                </div>
                <div>
                  <div className="font-mono text-sm text-blue-600 mb-1">required</div>
                  <div className="text-sm text-gray-600 mb-1">boolean</div>
                  <div className="text-xs text-gray-500">Show required indicator</div>
                </div>
              </div>
            </div>

            {/* Validation Patterns */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Validation Patterns</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-gray-900 mb-1">Email Validation</div>
                  <div className="text-gray-600 font-mono text-xs">/\S+@\S+\.\S+/</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900 mb-1">Phone Validation</div>
                  <div className="text-gray-600 font-mono text-xs">/^\(\d{3}\) \d{3}-\d{4}$/</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900 mb-1">Required Fields</div>
                  <div className="text-gray-600">Check for .trim() length > 0</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900 mb-1">Real-time Validation</div>
                  <div className="text-gray-600">Clear errors on input change</div>
                </div>
              </div>
            </div>

            {/* Usage Guidelines */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Usage Guidelines</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-gray-900 mb-1">Required Fields</div>
                  <div className="text-gray-600">Always mark required fields with * and validate on submit</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900 mb-1">Error Messages</div>
                  <div className="text-gray-600">Be specific and helpful. Show what to fix, not just what's wrong</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900 mb-1">Loading States</div>
                  <div className="text-gray-600">Disable form and show loading during submission</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900 mb-1">Success States</div>
                  <div className="text-gray-600">Provide clear confirmation of successful submission</div>
                </div>
              </div>
            </div>

            {/* Quick Import */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Import</h3>
              <CodeSnippet
                title="Form Components"
                code={`// Use existing UI components
import Button from '@/components/ui/Button';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

// Icons from Heroicons
import { 
  UserIcon, 
  EnvelopeIcon, 
  PhoneIcon 
} from '@heroicons/react/24/solid';`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 