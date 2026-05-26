import { defineConfig } from 'vite'

export default defineConfig({
  clearScreen: false,
  envPrefix: ['VITE_', 'TAURI_'],
  build: {
    target: ['es2021', 'chrome100', 'safari15'],
    minify: !process.env.TAURI_DEBUG,
    sourcemap: !!process.env.TAURI_DEBUG,
  },
  server: {
    strictPort: true,
    port: 5173,
    watch: {
      ignored: ['**/src-tauri/**'],
    },
  },
})