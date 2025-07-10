import type { Preview } from '@storybook/nextjs-vite'
import '../src/app/globals.css'
import '../src/styles/themes.css'

// Add font CSS variables and comprehensive styling for Storybook
const fontStyleSheet = document.createElement('style');
fontStyleSheet.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&family=Noto+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Noto+Serif:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
  
  :root {
    --font-heading: "Rajdhani", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    --font-body: "Noto Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    --font-serif: "Noto Serif", Georgia, "Times New Roman", serif;
  }
  
  /* Apply typography hierarchy using proper CSS specificity */
  .sb-show-main h1,
  .docs-story h1,
  .sbdocs-content h1,
  .sbdocs-h1 {
    font-family: var(--font-heading);
    font-weight: 700;
    text-transform: uppercase;
  }
  
  .sb-show-main h2,
  .docs-story h2,
  .sbdocs-content h2,
  .sbdocs-h2 {
    font-family: var(--font-heading);
    font-weight: 600;
    text-transform: none;
  }
  
  .sb-show-main h3,
  .docs-story h3,
  .sbdocs-content h3,
  .sbdocs-h3 {
    font-family: var(--font-body);
    font-weight: 600;
    text-transform: none;
  }
  
  .sb-show-main h4,
  .sb-show-main h5,
  .sb-show-main h6,
  .docs-story h4,
  .docs-story h5,
  .docs-story h6,
  .sbdocs-content h4,
  .sbdocs-content h5,
  .sbdocs-content h6,
  .sbdocs-h4,
  .sbdocs-h5,
  .sbdocs-h6 {
    font-family: var(--font-body);
    font-weight: 600;
    text-transform: none;
  }
  
  .sb-show-main,
  .docs-story,
  .sbdocs-content,
  .sbdocs-p,
  .sbdocs-div {
    font-family: var(--font-body);
  }
  
  /* Code blocks with proper specificity */
  .sb-show-main code,
  .sb-show-main pre,
  .docs-story code,
  .docs-story pre,
  .sbdocs-content code,
  .sbdocs-content pre,
  .sbdocs-code,
  .sbdocs-pre {
    font-family: 'Fira Code', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  }
  
  /* Dark mode support with proper specificity */
  html.dark .sbdocs-content,
  html.dark .docs-story,
  html.dark #docs-root,
  html.dark .sb-show-main {
    color: var(--text-primary, #FDFDFD);
    background-color: var(--bg-primary, #2F3135);
  }
  
  html.dark .sbdocs-wrapper,
  html.dark .sbdocs-container {
    background-color: var(--bg-primary, #2F3135);
  }
  
  html.dark .sbdocs-h1,
  html.dark .sbdocs-h2,
  html.dark .sbdocs-h3,
  html.dark .sbdocs-h4,
  html.dark .sbdocs-h5,
  html.dark .sbdocs-h6 {
    color: var(--text-primary, #FDFDFD);
  }
  
  html.dark .sbdocs-p {
    color: var(--text-secondary, #EEF1F7);
  }
  
  /* Light mode defaults with proper specificity */
  html:not(.dark) .sbdocs-content,
  html:not(.dark) .docs-story,
  html:not(.dark) #docs-root,
  html:not(.dark) .sb-show-main {
    color: var(--text-primary, #372103);
    background-color: var(--bg-primary, #f8f6f1);
  }
  
  html:not(.dark) .sbdocs-wrapper,
  html:not(.dark) .sbdocs-container {
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