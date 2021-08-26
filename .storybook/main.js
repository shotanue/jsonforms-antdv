const VitePluginComponents = require('vite-plugin-components').default;
const { AntDesignVueResolver } = require('vite-plugin-components');
const path = require('path');
module.exports = {
  async viteFinal(config) {
    // suppress storybook error
    // https://github.com/storybookjs/storybook/issues/10887#issuecomment-901109891
    config.resolve.dedupe = ['@storybook/client-api'];
    config.resolve.alias = {
      /*
      fix this issue
      [Vue warn]: Component provided template option but runtime compilation is not supported in this build of Vue.
      Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".
      * */
      vue: 'vue/dist/vue.esm-bundler.js',
      '@': path.resolve(__dirname, '/src'),
    };
    config.plugins.push(
      VitePluginComponents({
        customComponentResolvers: [AntDesignVueResolver()],
      })
    );

    return config;
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: 'storybook-builder-vite',
  },
};
