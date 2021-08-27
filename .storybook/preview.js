import { app } from '@storybook/vue3';
import { Button, Form } from 'ant-design-vue';

app.use(Button);
app.use(Form);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
