import type { Preview } from '@storybook/nextjs-vite'
import '../src/app/globals.css'
import '../src/styles/themes.css'

// Add font CSS variables for Storybook
const fontStyleSheet = document.createElement('style');
fontStyleSheet.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700;800&family=Noto+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Noto+Serif:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
  
  :root {
    --font-heading: "Rajdhani", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    --font-body: "Noto Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    --font-serif: "Noto Serif", Georgia, "Times New Roman", serif;
  }
  
  /* Apply typography hierarchy */
  h1 {
    font-family: var(--font-heading);
    font-weight: 800;
    text-transform: uppercase;
  }
  
  h2 {
    font-family: var(--font-heading);
    font-weight: 600;
    text-transform: none;
  }
  
  h3 {
    font-family: var(--font-serif);
    font-weight: 600;
    text-transform: none;
  }
  
  h4, h5, h6 {
    font-family: var(--font-body);
    font-weight: 600;
    text-transform: none;
  }
  
  body, p, div, span {
    font-family: var(--font-body);
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