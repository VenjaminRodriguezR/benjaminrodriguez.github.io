import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// If you rename the repository to VenjaminRodriguezR.github.io, change this to '/'.
// With the current repo name, GitHub Pages serves it as a project site.
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true'

export default defineConfig({
  plugins: [vue()],
  base: isGitHubActions ? '/benjaminrodriguez.github.io/' : '/',
})
