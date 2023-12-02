import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => ({
  plugins: [
    react({
      include: ['**/*.tsx', '**/*.jsx'],
    }),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      components: path.resolve(__dirname, 'src/components'),
      types: path.resolve(__dirname, 'src/@types'),
      utils: path.resolve(__dirname, 'src/utils'),
      hooks: path.resolve(__dirname, 'src/hooks'),
      contexts: path.resolve(__dirname, 'src/contexts'),
      constants: path.resolve(__dirname, 'src/constants'),
      config: path.resolve(__dirname, 'src/config'),
    },
  },
  optimizeDeps: {
    exclude: ['@butter-technologies/dish'],
  },
  server: {
    host: '0.0.0.0',
    port: 8090,
  },
}));
