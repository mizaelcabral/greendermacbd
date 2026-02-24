import { defineConfig } from 'vite';

export default defineConfig({
  // Hostinger will run 'npm run build', which invokes 'vite build'.
  // We simply configure Vite to copy our index.html into the 'dist' folder.
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
});
