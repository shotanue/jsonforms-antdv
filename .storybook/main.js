const VitePluginComponents = require('vite-plugin-components').default;
const { AntDesignVueResolver } = require('vite-plugin-components');
const path = require('path');
module.exports = {
  async viteFinal(config) {
    // https://issueexplorer.com/issue/eirslett/storybook-builder-vite/55
    config.root = path.dirname(require.resolve('storybook-builder-vite'));

    // build-storybook does not give config.server
    let buildingStorybook = config.server === undefined;
    if (buildingStorybook) {
      if (process.env.BUILD_BASE_URL !== undefined) {
        config.base = process.env.BUILD_BASE_URL;
      }
    } else {
      config.server.fsServe = undefined;
    }

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
      '@': path.join(path.dirname(__dirname), 'src'),
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
