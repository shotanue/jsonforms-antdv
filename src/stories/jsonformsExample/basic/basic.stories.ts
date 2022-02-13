import { jsonFormsTemplate } from '@/storybookUtils/jsonFormsTemplate';
import schema from '@/stories/jsonformsExample/basic/schema.json';
import uischema from '@/stories/jsonformsExample/basic/uischema.json';

export default {
  title: 'Examples/jsonforms.io',
  // component: LayoutRenderer,
  argTypes: {
    onClick: {},
  },
};

export const Basic = jsonFormsTemplate.bind({});
Basic.args = {
  data: {
    name: 'John Doe',
    vegetarian: false,
    birthDate: '1985-06-02',
    personalData: {
      age: 34,
    },
    postalCode: '12345',
  },
  schema,
  uischema,
};
