import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

const r = (...args: string[]) => resolve(__dirname, ...args)

export default defineConfig(() => {
  return {
    build: {
      outDir: r('dist'),
      emptyOutDir: false,
      lib: {
        entry: r('src/index.ts'),
        name: 'jsonforms-antdv',
        fileName: format => `jsonforms-antdv.${format}.js`,
      },
      rollupOptions: {
        external: [
          'vue',
          'ant-design-vue',
          '@jsonforms/core',
          '@jsonforms/vue',
        ],
        output: {
          globals: {
            vue: 'Vue',
          },
        },
      },
    },
    plugins: [
      vue(),
      dts({
        outputDir: r('dist/types'),
        staticImport: true,
        insertTypesEntry: true,
      }),
    ],
  }
})
