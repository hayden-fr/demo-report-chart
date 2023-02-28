import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/demo-report-chart/',
  build: {
    outDir: 'docs',
  },
  plugins: [vueJsx({})],
})
