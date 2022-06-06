import { defineConfig } from 'cypress'
import viteConfig from './vite.config'

export default defineConfig(
  {
    component: {
      devServer: {
        framework: 'vue',
        bundler: 'vite',
        viteConfig,
      },
      specPattern: "src/*spec.{js,jsx,ts,tsx}",
      supportFile: false
    },
    e2e: {
      specPattern: "**/*spec.{ts,tsx,vue}",
      video: false,
      supportFolder: "cypress/support/*.{js,jsx,ts,tsx}"
    },
  }
)