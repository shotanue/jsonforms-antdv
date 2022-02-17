import horizontalLayoutRenderer from '@/renderers/layouts/horizontalLayoutRenderer/horizontalLayoutRenderer.vue';
import basicUiSchema from '@/renderers/layouts/horizontalLayoutRenderer/stories/basic/uiSchema.json';
import basicJsonSchema from '@/renderers/layouts/horizontalLayoutRenderer/stories/basic/schema.json';

import { jsonFormsTemplate } from '@/storybookUtils/jsonFormsTemplate';

export default {
  title: 'Basic/Layouts/horizontalLayoutRenderer',
  component: horizontalLayoutRenderer,
  argTypes: {
    onClick: {},
  },
};

export const Basic = jsonFormsTemplate.bind({});
Basic.args = {
  data: {
    prop: false,
  },
  schema: basicJsonSchema,
  uischema: basicUiSchema,
};
