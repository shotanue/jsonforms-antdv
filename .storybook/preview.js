import { app } from '@storybook/vue3';
import { Button } from 'ant-design-vue';
app.use(Button);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
