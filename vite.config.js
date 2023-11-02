import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

import path from 'path';
import EnvironmentPlugin from 'vite-plugin-environment';
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        format: 'system',
      },
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnable: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': `${path.resolve(__dirname, './src/')}`,
      '@Assets': `${path.resolve(__dirname, './src/Assets/')}`,
      '@Components': path.resolve(__dirname, './src/Components/'),
      '@Container': path.resolve(__dirname, './src/Container/'),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
  plugins: [EnvironmentPlugin('all', { prefix: 'VITE' }), react()],
  server: {
    port: 3000,
    hmr: true,
  },
});
