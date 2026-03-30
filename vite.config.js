import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react({
      babel: {
        presets: [
          [
            '@babel/preset-env',
            {
              forceAllTransforms: true,
              useBuiltIns: 'entry',
              corejs: 3,
              modules: false,
              exclude: ['transform-typeof-symbol']
            }
          ],
          [
            '@babel/preset-react',
            {
              development: true,
              useBuiltIns: true,
              runtime: 'automatic'
            }
          ]
        ],
        plugins: [
          'jsx-control-statements',
          [
            'module-resolver',
            {
              root: ['./'],
              alias: {
                '@app': path.resolve(__dirname, './src')
              }
            }
          ],
          [
            'inline-react-svg',
            {
              svgo: {
                plugins: [
                  {
                    name: 'removeAttrs',
                    params: { attrs: '(data-name)' }
                  }
                ]
              }
            }
          ]
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, './src')
    }
  },
  define: {
    'process.env': {}
  }
});
