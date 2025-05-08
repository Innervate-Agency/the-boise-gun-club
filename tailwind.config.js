module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
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
      fontFamily: {
        inter: ['var(--font-inter)'],
        spaceGrotesk: ['var(--font-space-grotesk)'],
        dmSans: ['var(--font-dm-sans)'],
      }
    },
  },
  plugins: [],
}