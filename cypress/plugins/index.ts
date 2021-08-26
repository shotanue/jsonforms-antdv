import path from 'path';
import { startDevServer } from '@cypress/vite-dev-server/dist';
import { UserConfigExport } from 'vite';

export default function (on: Cypress.PluginEvents) {
  on('dev-server:start', options => {
    const viteConfig: UserConfigExport = {
      plugins: [],
    };

    viteConfig.esbuild = viteConfig.esbuild || {};
    viteConfig.esbuild.jsxFactory = 'h';
    viteConfig.esbuild.jsxFragment = 'Fragment';
    viteConfig.logLevel = 'error';
    viteConfig.resolve = {
      alias: {
        vue: 'vue/dist/vue.esm-bundler.js',
        '@': path.resolve(__dirname, '/src'),
      },
    };

    return startDevServer({ options, viteConfig });
  });
}
