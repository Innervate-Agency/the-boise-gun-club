'use client';

import { useEffect } from 'react';

interface ChatwootSettings {
  hideMessageBubble?: boolean;
  position?: 'left' | 'right';
  locale?: string;
  type?: 'standard' | 'expanded_bubble';
  darkMode?: 'light' | 'dark' | 'auto';
}

interface ChatwootWidgetProps {
  websiteToken: string;
  baseUrl?: string;
  settings?: ChatwootSettings;
}

declare global {
  interface Window {
    chatwootSettings?: ChatwootSettings;
    $chatwoot?: {
      run: (method: string, ...args: any[]) => void;
      isLoaded: boolean;
    };
  }
}

export default function ChatwootWidget({
  websiteToken,
  baseUrl = 'https://app.chatwoot.com',
  settings = {}
}: ChatwootWidgetProps) {

  useEffect(() => {
    // Default settings with customization for gun club
    const defaultSettings: ChatwootSettings = {
      hideMessageBubble: false,
      position: 'right',
      locale: 'en',
      type: 'standard',
      darkMode: 'auto',
      ...settings
    };

    // Add Chatwoot settings to window
    window.chatwootSettings = defaultSettings;

    // Create and load Chatwoot script
    const script = document.createElement('script');
    script.defer = true;
    script.async = true;
    script.src = `${baseUrl}/packs/js/sdk.js`;
    
    script.onload = () => {
      if (window.$chatwoot) {
        window.$chatwoot.run('run', {
          websiteToken,
          baseUrl
        });
      }
    };

    // Add script to document
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      // Remove script on unmount
      const existingScript = document.querySelector(`script[src="${baseUrl}/packs/js/sdk.js"]`);
      if (existingScript) {
        existingScript.remove();
      }
      
      // Clean up global variables
      delete window.chatwootSettings;
      delete window.$chatwoot;
      
      // Remove Chatwoot elements
      const chatwootContainer = document.querySelector('#woot-widget-holder');
      if (chatwootContainer) {
        chatwootContainer.remove();
      }
    };
  }, [websiteToken, baseUrl, settings]);

  // Component doesn't render anything visible
  // Chatwoot creates its own DOM elements
  return null;
}