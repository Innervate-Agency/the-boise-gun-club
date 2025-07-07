/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '1600px',
      },
      colors: {
        // Base colors using CSS variables
        background: 'var(--bg-primary)',
        backgroundSecondary: 'var(--bg-secondary)',
        text: 'var(--text-primary)',
        textSecondary: 'var(--text-secondary)',
        
        // Brand colors
        'leonard-yellow': 'var(--leonard-yellow)',
        'lahoma-orange': 'var(--lahoma-orange)',
        'dark-bg': 'var(--dark-bg)',
        
        // Accent colors
        accent: {
          primary: 'var(--accent-primary)',
          secondary: 'var(--accent-secondary)',
          tertiary: 'var(--accent-tertiary)',
          quaternary: 'var(--accent-quaternary)',
          gold: 'var(--accent-gold)',
          darkred: 'var(--accent-darkred)',
          olive: 'var(--accent-olive)',
          yellow: 'var(--accent-yellow)',
          orangered: 'var(--accent-orangered)',
          deepblue: 'var(--accent-deepblue)',
          darkteal: 'var(--accent-darkteal)',
        },
        
        // UI elements
        border: 'var(--border-accent)',
        terminalGreen: 'var(--terminal-green)',
        terminalAmber: 'var(--terminal-amber)',
      },
      fontFamily: {
        'heading': ['var(--font-heading)', 'Rajdhani', 'sans-serif'],
        'body': ['var(--font-body)', 'Noto Sans', 'sans-serif'],
        'vt323': ['VT323', 'monospace'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'], 
        'rajdhani': ['var(--font-heading)', 'Rajdhani', 'sans-serif'],
        'noto-sans': ['var(--font-body)', 'Noto Sans', 'sans-serif'],
      },
      fontSize: {
        'xs': ['14px', '1.5'],
        'sm': ['16px', '1.5'],
        'base': ['18px', '1.5'],
        'lg': ['20px', '1.5'],
        'xl': ['24px', '1.4'],
        '2xl': ['32px', '1.3'],
        '3xl': ['40px', '1.2'],
        '4xl': ['48px', '1.1'],
        '5xl': ['64px', '1.1'],
        '6xl': ['72px', '1'],
        '7xl': ['96px', '1'],
      },
      lineHeight: {
        'none': '1',
        'tight': '1.25',
        'snug': '1.375',
        'normal': '1.5',
        'relaxed': '1.625',
        'loose': '2',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-secondary': 'var(--gradient-secondary)',
        'gradient-retro': 'var(--gradient-retro)',
        'gradient-sunset': 'var(--gradient-sunset)',
        'gradient-orange': 'linear-gradient(to right, var(--lahoma-orange), #F25C05)',
        'gradient-blue': 'linear-gradient(to right, #5198cd, #4982A6)',
        'gradient-green': 'linear-gradient(to right, #6f7822, #3F6331)',
        'gradient-brand': 'linear-gradient(to right, var(--leonard-yellow), var(--lahoma-orange))',
        'gradient-red': 'linear-gradient(to right, #F23005, #8C394B)',
        'gradient-orange-red': 'linear-gradient(to right, #F25C05, #F23005)',
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'drift': 'drift 10s ease-in-out infinite',
        'gradient-slow': 'gradient 8s ease infinite',
        'marquee': 'marquee 30s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': {
            opacity: 1,
          },
          '50%': {
            opacity: 0.5,
          },
        },
        drift: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        gradient: {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
        marquee: {
          '0%': {
            transform: 'translateX(0%)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionDelay: {
        '1000': '1000ms',
        '2000': '2000ms',
      },
    },
  },
  plugins: [],
}