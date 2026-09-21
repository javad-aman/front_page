import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves project sites from /<repo-name>/.
  // Update this to match your repository name exactly (case-sensitive),
  // or set it to '/' if you deploy to a <username>.github.io user/org site.
  base: '/front_page/',
})
