import labelRenderer from '@/renderers/additional/labelRenderer/labelRenderer.vue';
import basicUiSchema from '@/renderers/additional/labelRenderer/stories/basic/uiSchema.json';
import basicJsonSchema from '@/renderers/additional/labelRenderer/stories/basic/schema.json';

import { jsonFormsTemplate } from '@/storybookUtils/jsonFormsTemplate';

export default {
  title: 'Basic/Controls/labelRenderer',
  component: labelRenderer,
  argTypes: {
    onClick: {},
  },
};

export const Basic = jsonFormsTemplate.bind({});
Basic.args = {
  data: {},
  schema: basicJsonSchema,
  uischema: basicUiSchema,
};
