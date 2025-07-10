import type { Preview } from '@storybook/nextjs-vite'
import '../src/app/globals.css'
import '../src/styles/themes.css'

// Add font CSS variables and comprehensive styling for Storybook
const fontStyleSheet = document.createElement('style');
fontStyleSheet.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700;800&family=Noto+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Noto+Serif:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
  
  :root {
    --font-heading: "Rajdhani", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    --font-body: "Noto Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    --font-serif: "Noto Serif", Georgia, "Times New Roman", serif;
  }
  
  /* Apply typography hierarchy to all Storybook contexts */
  h1, .sbdocs-h1 {
    font-family: var(--font-heading) !important;
    font-weight: 800 !important;
    text-transform: uppercase !important;
  }
  
  h2, .sbdocs-h2 {
    font-family: var(--font-heading) !important;
    font-weight: 600 !important;
    text-transform: none !important;
  }
  
  h3, .sbdocs-h3 {
    font-family: var(--font-serif) !important;
    font-weight: 600 !important;
    text-transform: none !important;
  }
  
  h4, h5, h6, .sbdocs-h4, .sbdocs-h5, .sbdocs-h6 {
    font-family: var(--font-body) !important;
    font-weight: 600 !important;
    text-transform: none !important;
  }
  
  body, p, div, span, .sbdocs-p, .sbdocs-div {
    font-family: var(--font-body) !important;
  }
  
  /* Storybook docs specific styling */
  .docs-story {
    font-family: var(--font-body) !important;
  }
  
  .sbdocs-content {
    font-family: var(--font-body) !important;
  }
  
  /* Code blocks should remain monospace */
  code, pre, .sbdocs-code, .sbdocs-pre {
    font-family: 'Fira Code', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace !important;
  }
  
  /* Theme-aware styling for docs */
  .dark .sbdocs-content {
    color: var(--text-primary, #FDFDFD);
    background-color: var(--bg-primary, #2F3135);
  }
  
  .sbdocs-content {
    color: var(--text-primary, #372103);
    background-color: var(--bg-primary, #f8f6f1);
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
    },

    docs: {
      theme: undefined, // This will be set dynamically
      story: {
        inline: true,
        height: 'auto',
      },
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
      
      // Apply theme properly to both stories and docs
      if (typeof document !== 'undefined') {
        const root = document.documentElement;
        const body = document.body;
        
        if (theme === 'dark') {
          root.classList.add('dark');
          body.classList.add('dark');
          // Apply dark theme to Storybook's own elements
          const storybook = document.querySelector('#storybook-root');
          if (storybook) {
            storybook.classList.add('dark');
          }
          // Apply to docs container
          const docsContainer = document.querySelector('.docs-story');
          if (docsContainer) {
            docsContainer.classList.add('dark');
          }
        } else {
          root.classList.remove('dark');
          body.classList.remove('dark');
          const storybook = document.querySelector('#storybook-root');
          if (storybook) {
            storybook.classList.remove('dark');
          }
          const docsContainer = document.querySelector('.docs-story');
          if (docsContainer) {
            docsContainer.classList.remove('dark');
          }
        }
        
        root.setAttribute('data-theme', theme);
        body.setAttribute('data-theme', theme);
        
        // Apply theme-specific styling to Storybook UI
        const storybookUI = document.querySelector('.sidebar-container, .main-container');
        if (storybookUI) {
          storybookUI.setAttribute('data-theme', theme);
        }
        
        // Force CSS variable update for proper theme propagation
        root.style.setProperty('--sb-theme', theme);
        root.style.setProperty('--force-update', Math.random().toString());
      }
      
      return Story();
    },
  ],
};

export default preview;