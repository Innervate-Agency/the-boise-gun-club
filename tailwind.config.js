/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      maxWidth: {
        '8xl': '1600px',
      },
      colors: {
        background: 'var(--background)',
        backgroundSecondary: 'var(--background-secondary)',
        text: 'var(--text)',
        textSecondary: 'var(--text-secondary)',
        accent: 'var(--accent)',
        accentHover: 'var(--accent-hover)',
        border: 'var(--border)',
        terminalGreen: 'var(--terminal-green)',
        terminalAmber: 'var(--terminal-amber)',
      },
      fontFamily: {
        'heading': ['refrigerator-deluxe', 'DM Sans', 'serif'],
        'body': ['museo-sans', 'DM Sans', 'system-ui', 'sans-serif'],
        'vt323': ['VT323', 'monospace'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}