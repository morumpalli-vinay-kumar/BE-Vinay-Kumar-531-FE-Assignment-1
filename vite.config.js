import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
    server: {
        port: 3000,
      },
  build: {
    outDir: 'dist', 
    assetsDir: 'assets', 
    minify: 'esbuild', 
    sourcemap: false, 
    rollupOptions: {
      input: {
        main: 'src/html/index.html', 
      },
      output: {
        chunkFileNames: 'assets/',
        entryFileNames: 'assets/',
        assetFileNames: 'assets/',
      },
    },
  },
  css: {
   
    postcss: {
     
    },
  },
  plugins: [
    eslintPlugin(),
  ],
});