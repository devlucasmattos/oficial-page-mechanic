import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/oficial-page-mechanic/', 
  plugins: [react()],
  build: {
    assetsInclude: ['**/*.webp']
  }
});
