import arrayLayoutRenderer from '@/renderers/layouts/arrayLayoutRenderer/arrayLayoutRenderer.vue';
import basicUiSchema from '@/renderers/layouts/arrayLayoutRenderer/stories/basic/uiSchema.json';
import basicJsonSchema from '@/renderers/layouts/arrayLayoutRenderer/stories/basic/schema.json';

import { jsonFormsTemplate } from '@/storybookUtils/jsonFormsTemplate';

export default {
  title: 'Basic/Layouts/arrayLayoutRenderer',
  component: arrayLayoutRenderer,
  argTypes: {
    onClick: {},
  },
};

export const Basic = jsonFormsTemplate.bind({});
Basic.args = {
  data: [],
  schema: basicJsonSchema,
  uischema: basicUiSchema,
};
