const VitePluginComponents = require('vite-plugin-components').default;
const { AntDesignVueResolver } = require('vite-plugin-components');
module.exports = {
  async viteFinal(config) {
    // suppress storybook error
    // https://github.com/storybookjs/storybook/issues/10887#issuecomment-901109891
    config.resolve.dedupe = ['@storybook/client-api'];
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
