// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ command,mode,  ssrBuild }) => {
  console.log(ssrBuild)
  return {
    plugins: [react()],
  };
});
