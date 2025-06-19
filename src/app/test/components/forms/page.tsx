'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Mail, 
  Lock, 
  Phone, 
  Calendar, 
  MapPin, 
  Target, 
  Shield, 
  AlertCircle, 
  CheckCircle,
  Eye,
  EyeOff,
  Search,
  Filter
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { 
  ClipboardIcon,
  ClipboardDocumentCheckIcon,
  ArrowLeftIcon,
  EnvelopeIcon,
  UserIcon,
  PhoneIcon,
  CalendarIcon
} from '@heroicons/react/24/solid';
import Link from 'next/link';

// Form Input Component
function FormInput({ 
  label, 
  type = 'text', 
  value, 
  onChange, 
  error, 
  icon: Icon, 
  placeholder,
  required = false 
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  icon?: React.ComponentType<any>;
  placeholder?: string;
  required?: boolean;
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState(false);

  const inputType = type === 'password' && showPassword ? 'text' : type;

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
        )}
        <input
          type={inputType}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          className={`
            w-full px-4 py-3 ${Icon ? 'pl-11' : ''} ${type === 'password' ? 'pr-11' : ''} 
            border rounded-lg transition-all duration-200
            ${error 
              ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
              : focused 
                ? 'border-blue-500 focus:ring-blue-200' 
                : 'border-slate-300 dark:border-slate-600'
            }
            focus:outline-none focus:ring-2
            bg-white dark:bg-slate-800 text-slate-900 dark:text-white
            placeholder-slate-400 dark:placeholder-slate-500
          `}
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        )}
        {error && (
          <AlertCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-red-500" />
        )}
        {!error && value && (
          <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-500" />
        )}
      </div>
      {error && (
        <p className="text-sm text-red-600 flex items-center gap-1">
          <AlertCircle className="w-4 h-4" />
          {error}
        </p>
      )}
    </div>
  );
}

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

export default function FormsPlayground() {
  // Registration form state
  const [regForm, setRegForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    birthDate: '',
    address: '',
    emergencyContact: '',
    emergencyPhone: '',
    experience: 'beginner'
  });

  // Search form state
  const [searchForm, setSearchForm] = useState({
    query: '',
    category: 'all',
    date: '',
    location: ''
  });

  // Validation errors
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation functions
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
    return phoneRegex.test(phone);
  };

  const validatePassword = (password: string) => {
    return password.length >= 8;
  };

  // Real-time validation
  const validateField = (field: string, value: string) => {
    const newErrors = { ...errors };

    switch (field) {
      case 'email':
        if (value && !validateEmail(value)) {
          newErrors.email = 'Please enter a valid email address';
        } else {
          delete newErrors.email;
        }
        break;
      case 'phone':
        if (value && !validatePhone(value)) {
          newErrors.phone = 'Phone format: (123) 456-7890';
        } else {
          delete newErrors.phone;
        }
        break;
      case 'password':
        if (value && !validatePassword(value)) {
          newErrors.password = 'Password must be at least 8 characters';
        } else {
          delete newErrors.password;
        }
        break;
      case 'confirmPassword':
        if (value && value !== regForm.password) {
          newErrors.confirmPassword = 'Passwords do not match';
        } else {
          delete newErrors.confirmPassword;
        }
        break;
      case 'firstName':
        if (!value.trim()) {
          newErrors.firstName = 'First name is required';
        } else {
          delete newErrors.firstName;
        }
        break;
      case 'lastName':
        if (!value.trim()) {
          newErrors.lastName = 'Last name is required';
        } else {
          delete newErrors.lastName;
        }
        break;
    }

    setErrors(newErrors);
  };

  // Handle form field changes
  const handleRegFormChange = (field: string, value: string) => {
    setRegForm(prev => ({ ...prev, [field]: value }));
    validateField(field, value);
  };

  const handleSearchFormChange = (field: string, value: string) => {
    setSearchForm(prev => ({ ...prev, [field]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    alert('Registration submitted successfully!');
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
              <Shield className="h-16 w-16 text-[var(--accent-primary)] animate-pulse" />
            </div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
              SMART <span className="text-[var(--accent-primary)]">FORMS</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Intelligent form components with real-time validation, auto-completion, and seamless user experience. 
              Built for gun club registration, events, and member management.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Forms Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Membership Registration Form */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-8">
            <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
              <Target className="w-6 h-6 text-[var(--accent-primary)]" />
              Membership Registration
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Personal Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormInput
                    label="First Name"
                    value={regForm.firstName}
                    onChange={(value) => handleRegFormChange('firstName', value)}
                    error={errors.firstName}
                    icon={User}
                    placeholder="John"
                    required
                  />
                  <FormInput
                    label="Last Name"
                    value={regForm.lastName}
                    onChange={(value) => handleRegFormChange('lastName', value)}
                    error={errors.lastName}
                    icon={User}
                    placeholder="Smith"
                    required
                  />
                </div>

                <FormInput
                  label="Email Address"
                  type="email"
                  value={regForm.email}
                  onChange={(value) => handleRegFormChange('email', value)}
                  error={errors.email}
                  icon={Mail}
                  placeholder="john.smith@example.com"
                  required
                />

                <FormInput
                  label="Phone Number"
                  type="tel"
                  value={regForm.phone}
                  onChange={(value) => handleRegFormChange('phone', value)}
                  error={errors.phone}
                  icon={Phone}
                  placeholder="(123) 456-7890"
                  required
                />

                <FormInput
                  label="Date of Birth"
                  type="date"
                  value={regForm.birthDate}
                  onChange={(value) => handleRegFormChange('birthDate', value)}
                  icon={Calendar}
                  required
                />
              </div>

              {/* Security */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Account Security</h3>
                
                <FormInput
                  label="Password"
                  type="password"
                  value={regForm.password}
                  onChange={(value) => handleRegFormChange('password', value)}
                  error={errors.password}
                  icon={Lock}
                  placeholder="Minimum 8 characters"
                  required
                />

                <FormInput
                  label="Confirm Password"
                  type="password"
                  value={regForm.confirmPassword}
                  onChange={(value) => handleRegFormChange('confirmPassword', value)}
                  error={errors.confirmPassword}
                  icon={Lock}
                  placeholder="Re-enter password"
                  required
                />
              </div>

              {/* Emergency Contact */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Emergency Contact</h3>
                
                <FormInput
                  label="Emergency Contact Name"
                  value={regForm.emergencyContact}
                  onChange={(value) => handleRegFormChange('emergencyContact', value)}
                  icon={User}
                  placeholder="Emergency contact full name"
                  required
                />

                <FormInput
                  label="Emergency Contact Phone"
                  type="tel"
                  value={regForm.emergencyPhone}
                  onChange={(value) => handleRegFormChange('emergencyPhone', value)}
                  icon={Phone}
                  placeholder="(123) 456-7890"
                  required
                />
              </div>

              {/* Experience Level */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Shooting Experience Level <span className="text-red-500">*</span>
                </label>
                <select
                  value={regForm.experience}
                  onChange={(e) => handleRegFormChange('experience', e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                >
                  <option value="beginner">Beginner (0-1 years)</option>
                  <option value="intermediate">Intermediate (2-5 years)</option>
                  <option value="advanced">Advanced (5+ years)</option>
                  <option value="expert">Expert/Competitive</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || Object.keys(errors).length > 0}
                className="w-full bg-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/90 disabled:bg-slate-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Processing Registration...
                  </>
                ) : (
                  <>
                    <Shield className="w-5 h-5" />
                    Submit Registration
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Event Search Form & Examples */}
          <div className="space-y-8">
            {/* Event Search Form */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-8">
              <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Search className="w-6 h-6 text-[var(--accent-primary)]" />
                Event Search
              </h2>
              
              <div className="space-y-4">
                <FormInput
                  label="Search Events"
                  value={searchForm.query}
                  onChange={(value) => handleSearchFormChange('query', value)}
                  icon={Search}
                  placeholder="Competition, training, workshop..."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      Category
                    </label>
                    <select
                      value={searchForm.category}
                      onChange={(e) => handleSearchFormChange('category', e.target.value)}
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                    >
                      <option value="all">All Events</option>
                      <option value="competition">Competitions</option>
                      <option value="training">Training</option>
                      <option value="workshop">Workshops</option>
                      <option value="social">Social Events</option>
                    </select>
                  </div>

                  <FormInput
                    label="Date"
                    type="date"
                    value={searchForm.date}
                    onChange={(value) => handleSearchFormChange('date', value)}
                    icon={Calendar}
                  />
                </div>

                <FormInput
                  label="Location"
                  value={searchForm.location}
                  onChange={(value) => handleSearchFormChange('location', value)}
                  icon={MapPin}
                  placeholder="Range 1, Outdoor Field, etc."
                />

                <button className="w-full bg-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/80 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                  <Filter className="w-5 h-5" />
                  Search Events
                </button>
              </div>
            </div>

            {/* Form Validation Examples */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-8">
              <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-6">
                Validation Examples
              </h3>
              
              <div className="space-y-4">
                {/* Valid Input */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Valid Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      value="john@example.com"
                      readOnly
                      className="w-full px-4 py-3 pl-11 pr-11 border border-green-300 rounded-lg bg-green-50 dark:bg-green-900/20 text-slate-900 dark:text-white"
                    />
                    <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-500" />
                  </div>
                </div>

                {/* Invalid Input */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Invalid Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      value="invalid-email"
                      readOnly
                      className="w-full px-4 py-3 pl-11 pr-11 border border-red-300 rounded-lg bg-red-50 dark:bg-red-900/20 text-slate-900 dark:text-white"
                    />
                    <AlertCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-red-500" />
                  </div>
                  <p className="text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    Please enter a valid email address
                  </p>
                </div>

                {/* Focused Input */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Focused State
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      value=""
                      placeholder="Start typing..."
                      readOnly
                      className="w-full px-4 py-3 pl-11 border-2 border-blue-500 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white ring-2 ring-blue-200"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Guidelines */}
        <div className="mt-16">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-8">
            <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-6">
              Form Best Practices
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Validation Rules</h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li>• Real-time validation for immediate feedback</li>
                  <li>• Clear error messages with helpful guidance</li>
                  <li>• Visual indicators (icons, colors) for status</li>
                  <li>• Required field indicators (*)</li>
                  <li>• Password strength requirements</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">User Experience</h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li>• Logical grouping of related fields</li>
                  <li>• Progressive disclosure for complex forms</li>
                  <li>• Auto-completion and formatting</li>
                  <li>• Accessible labels and ARIA attributes</li>
                  <li>• Loading states for async operations</li>
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
                title="Basic Form Input"
                code={`<FormInput
  label="Email Address"
  type="email"
  value={email}
  onChange={setEmail}
  error={emailError}
  icon={Mail}
  placeholder="john@example.com"
  required
/>`}
              />
              <CodeSnippet
                title="Real-time Validation"
                code={`const validateEmail = (email: string) => {
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  return emailRegex.test(email);
};

const handleEmailChange = (value: string) => {
  setEmail(value);
  if (value && !validateEmail(value)) {
    setEmailError('Invalid email format');
  } else {
    setEmailError('');
  }
};`}
              />
              <CodeSnippet
                title="Form Submission"
                code={`const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    await submitForm(formData);
    showSuccess('Registration completed!');
  } catch (error) {
    showError('Registration failed');
  } finally {
    setIsSubmitting(false);
  }
};`}
              />
              <CodeSnippet
                title="Password Visibility Toggle"
                code={`const [showPassword, setShowPassword] = useState(false);

<div className="relative">
  <input 
    type={showPassword ? 'text' : 'password'}
    value={password}
    onChange={handlePasswordChange}
  />
  <button onClick={() => setShowPassword(!showPassword)}>
    {showPassword ? <EyeOff /> : <Eye />}
  </button>
</div>`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 