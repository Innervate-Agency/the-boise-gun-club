// Boise Gun Club Official Brand Colors
// Based on the official branding guide

// Light Theme: Spring Day Along The East Fork of The Owyhee River
export const lightThemeColors = {
  // Backgrounds
  cloudyDayWhite: '#f8f6f1',
  overcast: '#ede7de', 
  sandDuneBrown: '#c08051',
  
  // Text Colors
  cratersOfTheMoon: '#372103',
  desertCliffBrown: '#693e21',
  
  // Primary Brand Colors
  clayPidgeonOrange: '#F23005',
  gunclubOrange: '#f07b1d',
  wildeyeSusanYellow: '#E3C03C',
  idahoSkyBlue: '#5198cd',
  snakeriverBlue: '#3c81c0',
  owyheeFieldGreen: '#6f7822',
  boiseYardGreen: '#909233',
  scoringBenchRed: '#8C394B'
};

// Dark Theme: Misty Fall Morning in the Cascades  
export const darkThemeColors = {
  // Backgrounds
  kentSlateGray: '#2F3135',
  edCharcoal: '#4B4B4B',
  pigeonClayGray: '#494657',
  
  // Text Colors
  chesterWhite: '#FDFDFD',
  donGray: '#EEF1F7',
  
  // Primary Brand Colors
  leonardYellow: '#F2CB05',
  lahamaOrange: '#F28705',
  jerryOrange: '#F25C05',
  abeRed: '#F23005',
  clubHouseRoofBlue: '#4982A6',
  clubHouseWalkGray: '#C9D2EF',
  clubHouseLawnGreen: '#3F6331',
  scoringBenchRed: '#8C394B'
};

// Brand fonts from the official guide
export const brandFonts = {
  // Headers and Titles (H1-H6) & Logo Font
  headings: 'Rajdhani',
  
  // Body and Copy text
  body: 'Noto Sans',
  bodySerif: 'Noto Serif'
};

// Utility function to get CSS custom property
export const getCSSVar = (property: string) => `var(--${property})`;

// Color mapping for easier usage
export const brandColors = {
  // Primary brand colors (theme-aware)
  primary: getCSSVar('accent-primary'),
  secondary: getCSSVar('accent-secondary'), 
  tertiary: getCSSVar('accent-tertiary'),
  
  // UI colors (theme-aware)
  background: getCSSVar('bg-primary'),
  backgroundSecondary: getCSSVar('bg-secondary'),
  backgroundTertiary: getCSSVar('bg-tertiary'),
  text: getCSSVar('text-primary'),
  textSecondary: getCSSVar('text-secondary'),
  
  // Accent colors (theme-aware)
  blue: getCSSVar('accent-blue'),
  blueDark: getCSSVar('accent-blue-dark'),
  green: getCSSVar('accent-green'),
  greenLight: getCSSVar('accent-green-light'),
  red: getCSSVar('accent-red'),
  
  // Glass effects
  glass: getCSSVar('glass-bg'),
  glassBorder: getCSSVar('glass-border')
};

export default brandColors;
