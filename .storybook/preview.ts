import type { Preview } from '@storybook/nextjs-vite'
import '../src/app/globals.css'
import '../src/styles/themes.css'

// Add font CSS variables for Storybook
const fontStyleSheet = document.createElement('style');
fontStyleSheet.textContent = `
  :root {
    --font-heading: "Refrigerator Deluxe", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    --font-body: "Museo Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }
  
  @font-face {
    font-family: 'Refrigerator Deluxe';
    src: url('/fonts/Refrigerator Deluxe.otf') format('opentype');
    font-weight: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Refrigerator Deluxe';
    src: url('/fonts/Refrigerator Deluxe Bold.otf') format('opentype');
    font-weight: bold;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Museo Sans';
    src: url('/fonts/MuseoSans-300.otf') format('opentype');
    font-weight: 300;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Museo Sans';
    src: url('/fonts/MuseoSans_500.otf') format('opentype');
    font-weight: 500;
    font-display: swap;
  }
`;
if (typeof document !== 'undefined') {
  document.head.appendChild(fontStyleSheet);
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#f8f6f1',
        },
        {
          name: 'dark',
          value: '#2F3135',
        },
      ],
    },

    a11y: {
      test: 'todo'
    }
  },

  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },

  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'light';
      
      // Apply theme properly
      if (typeof document !== 'undefined') {
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        document.documentElement.setAttribute('data-theme', theme);
        
        // Force CSS variable update
        const root = document.documentElement;
        root.style.setProperty('--force-update', Math.random().toString());
      }
      
      return Story();
    },
  ],
};

export default preview;