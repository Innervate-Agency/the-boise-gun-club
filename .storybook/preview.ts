import type { Preview } from '@storybook/nextjs-vite'
import { Rajdhani, Noto_Sans } from 'next/font/google'
import '../src/app/globals.css'
import '../src/styles/themes.css'

// Configure fonts for Storybook
const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
})

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-body',
  display: 'swap',
})

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
      
      // Apply theme and fonts properly
      if (typeof document !== 'undefined') {
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        document.documentElement.setAttribute('data-theme', theme);
        
        // Apply font classes
        document.documentElement.className = `${rajdhani.variable} ${notoSans.variable} ${document.documentElement.className}`;
      }
      
      return (
        <div className={`${rajdhani.variable} ${notoSans.variable} font-body`}>
          <Story />
        </div>
      );
    },
  ],
};

export default preview;