import { ESLint } from 'eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: [
      '.next/**',
      'out/**',
      'node_modules/**',
      '.git/**',
      'public/**',
    ],
  },
];
