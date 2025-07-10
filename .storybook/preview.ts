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
  
  /* Comprehensive dark mode support for Storybook docs */
  .dark .sbdocs-content,
  .dark .docs-story,
  .dark #docs-root,
  .dark .sb-show-main {
    color: var(--text-primary, #FDFDFD) !important;
    background-color: var(--bg-primary, #2F3135) !important;
  }
  
  .dark .sbdocs-wrapper,
  .dark .sbdocs-container {
    background-color: var(--bg-primary, #2F3135) !important;
  }
  
  .dark .sbdocs-h1,
  .dark .sbdocs-h2,
  .dark .sbdocs-h3,
  .dark .sbdocs-h4,
  .dark .sbdocs-h5,
  .dark .sbdocs-h6 {
    color: var(--text-primary, #FDFDFD) !important;
  }
  
  .dark .sbdocs-p {
    color: var(--text-secondary, #EEF1F7) !important;
  }
  
  /* Light mode defaults */
  .sbdocs-content,
  .docs-story,
  #docs-root,
  .sb-show-main {
    color: var(--text-primary, #372103);
    background-color: var(--bg-primary, #f8f6f1);
  }
  
  .sbdocs-wrapper,
  .sbdocs-container {
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
        
        // Enhanced theme application with comprehensive targeting
        if (theme === 'dark') {
          root.classList.add('dark');
          body.classList.add('dark');
          
          // Target all Storybook containers
          const containers = [
            '#storybook-root',
            '.docs-story', 
            '#docs-root',
            '.sb-show-main',
            '.sbdocs-content',
            '.sbdocs-wrapper',
            '.sbdocs-container',
            '.sidebar-container',
            '.main-container'
          ];
          
          containers.forEach(selector => {
            const element = document.querySelector(selector);
            if (element) {
              element.classList.add('dark');
            }
          });
          
          // Use observer to catch dynamically added docs elements
          const observer = new MutationObserver(() => {
            containers.forEach(selector => {
              const elements = document.querySelectorAll(selector);
              elements.forEach(el => el.classList.add('dark'));
            });
          });
          
          observer.observe(document.body, { childList: true, subtree: true });
          
        } else {
          root.classList.remove('dark');
          body.classList.remove('dark');
          
          // Remove dark class from all containers
          const allDarkElements = document.querySelectorAll('.dark');
          allDarkElements.forEach(el => el.classList.remove('dark'));
        }
        
        root.setAttribute('data-theme', theme);
        body.setAttribute('data-theme', theme);
        
        // Force CSS variable update for proper theme propagation
        root.style.setProperty('--sb-theme', theme);
        root.style.setProperty('--force-update', Math.random().toString());
      }
      
      return Story();
    },
  ],
};

export default preview;