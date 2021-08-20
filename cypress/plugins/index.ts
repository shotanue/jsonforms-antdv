import { startDevServer } from '@cypress/vite-dev-server';
import { UserConfigExport } from 'vite';

export default function (on) {
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
      },
    };
    return startDevServer({ options, viteConfig });
  });
}
