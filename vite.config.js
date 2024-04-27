import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // use base to tell build to set asset/style links relative to the index.html file
  // the option here says the asset/styles are in the same folder as index.html file
  base: './', 
  build: {
    outDir: 'docs' // specify a build out directory for publishing to Github Pages
  }
})

