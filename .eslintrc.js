/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['next/core-web-vitals', 'next/typescript', 'plugin:storybook/recommended'],
  root: true,
  ignorePatterns: [
    '.next/**',
    'out/**', 
    'node_modules/**',
    '.git/**',
    'public/**',
    'studio/**',
    '_project-guides/**',
  ],
  rules: {
    // React specific
    'react/no-unescaped-entities': 'warn',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    
    // Next.js specific
    '@next/next/no-img-element': 'warn',
    '@next/next/no-html-link-for-pages': 'error',
    
    // TypeScript (handled by next/typescript)
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-explicit-any': 'warn',
    
    // General code quality
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-debugger': 'warn',
    'prefer-const': 'error',
    'no-var': 'error',
  },
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
}
