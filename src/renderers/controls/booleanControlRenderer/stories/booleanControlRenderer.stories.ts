import booleanControlRenderer from '@/renderers/controls/booleanControlRenderer/booleanControlRenderer.vue';
import basicUiSchema from '@/renderers/controls/booleanControlRenderer/stories/basic/uiSchema.json';
import basicJsonSchema from '@/renderers/controls/booleanControlRenderer/stories/basic/schema.json';

import { jsonFormsTemplate } from '@/storybookUtils/jsonFormsTemplate';

export default {
  title: 'Basic/Controls/BooleanControlRenderer',
  component: booleanControlRenderer,
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
