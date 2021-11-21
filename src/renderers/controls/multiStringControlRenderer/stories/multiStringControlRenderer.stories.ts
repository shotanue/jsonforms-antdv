import multiStringControlRenderer from '@/renderers/controls/multiStringControlRenderer/multiStringControlRenderer.vue';
import basicUiSchema from '@/renderers/controls/multiStringControlRenderer/stories/basic/uiSchema.json';
import basicJsonSchema from '@/renderers/controls/multiStringControlRenderer/stories/basic/schema.json';

import { jsonFormsTemplate } from '@/storybookUtils/jsonFormsTemplate';

export default {
  title: 'Basic/Controls/multiStringControlRenderer',
  component: multiStringControlRenderer,
  argTypes: {
    onClick: {},
  },
};

export const Basic = jsonFormsTemplate.bind({});
Basic.args = {
  data: {
    prop: '',
  },
  schema: basicJsonSchema,
  uischema: basicUiSchema,
};
