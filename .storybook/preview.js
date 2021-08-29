import { app } from '@storybook/vue3';
import { Button, Form, InputNumber } from 'ant-design-vue';

app.use(Button);
app.use(Form);
app.use(InputNumber);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
