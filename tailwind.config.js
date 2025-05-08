/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        'space-grotesk': ['var(--font-space-grotesk)'],
        'dm-sans': ['var(--font-dm-sans)'],
        'vt323': ['var(--font-vt323)', 'monospace'],
      },
      colors: {
        terminal: {
          bg: '#0A3200',
          text: '#FFB000',
          accent: '#FFD700',
          muted: '#FFB000',
        },
        'leonard-yellow': '#F2CB05',
        'lahoma-orange': '#F28705',
        'jerry-orange': '#F25C05',
        'abe-red': '#F23005',
        'don-gray': '#EEF1F7',
        'ed-charcoal': '#4B4B4B',
        'chester-white': '#FDFDFD',
        'kent-slate-gray': '#2F3135',
        // Add your other colors here
      },
      animation: {
        'terminal-blink': 'blink 1s step-end infinite',
        'scanline': 'scanline 8s linear infinite',
        scrollIndicator: 'scrollDown 2s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        scrollDown: {
          '0%': { transform: 'translateY(-100%)' },
          '50%': { transform: 'translateY(100%)' },
          '51%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },
    },
  },
  plugins: [],
}