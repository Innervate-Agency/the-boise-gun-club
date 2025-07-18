import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',  // Creates self-contained build with minimal dependencies
  /* Image optimization */
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    // Only allow local images from /public/images - no external domains
  },
  /* Performance optimizations */
  reactStrictMode: true,
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true,
  },

  /* Turbopack configuration */
  turbopack: {
    // Configure custom loaders for specific file types
    rules: {
      // SVG files - use @svgr/webpack to import as React components
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
      // YAML files
      '*.yaml': {
        loaders: ['yaml-loader'],
        as: '*.js',
      },
      '*.yml': {
        loaders: ['yaml-loader'],
        as: '*.js',
      },
      // Raw file imports
      '*.txt': {
        loaders: ['raw-loader'],
        as: '*.js',
      },
      // Add these to your rules:
      '*.md': {
         loaders: ['raw-loader'],
         as: '*.js' 
      },
      '*.glsl': {
         loaders: ['raw-loader'],
         as: '*.js'
      },
      '*.csv': {
         loaders: ['csv-loader'],
         as: '*.js'
      },
    },

    // Configure module resolution aliases
    resolveAlias: {
      // Add your project-specific aliases here
      '@components': './src/components',
      '@utils': './src/utils',
      '@styles': './src/styles',
      '@hooks': './src/hooks',
      '@lib': './src/lib',
      '@types': './src/types',
    },
    
    // Configure custom extension resolution order
    resolveExtensions: [
      '.tsx',
      '.ts',
      '.jsx',
      '.js',
      '.mjs',
      '.json',
      '.mdx',
    ],
  },
  
  /* Security headers */
  async headers() {
    return [
      {
        source: '/(.*)',        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://use.typekit.net https://fonts.googleapis.com",
              "style-src 'self' 'unsafe-inline' https://use.typekit.net https://fonts.googleapis.com",
              "img-src 'self' data: blob:",
              "font-src 'self' data: https://use.typekit.net https://fonts.gstatic.com",
              "connect-src 'self'",
              "media-src 'self'",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
              "upgrade-insecure-requests"
            ].join('; '),
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ]
      },
      {
        source: '/:path*.svg',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/:path*.{jpg,jpeg,png,webp,avif,gif,ico}',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/:path*.{js,css}',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/:path*.{woff,woff2,ttf,otf}',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ];
  },
  
  /* Webpack optimizations - These still apply when not using Turbopack */
  webpack: (config, { isServer }) => {
    // Optimize bundle splitting
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendors: false,
          vendor: {
            name: 'vendor',
            chunks: 'all',
            test: /node_modules/,
            priority: 20
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: 10,
            reuseExistingChunk: true,
            enforce: true
          }
        }
      };
    }
    
    return config;
  }
};

export default nextConfig;
