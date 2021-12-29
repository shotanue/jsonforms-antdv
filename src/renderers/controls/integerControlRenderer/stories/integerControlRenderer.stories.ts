import integerControlRenderer from '@/renderers/controls/integerControlRenderer/integerControlRenderer.vue';
import basicUiSchema from '@/renderers/controls/integerControlRenderer/stories/basic/uiSchema.json';
import basicJsonSchema from '@/renderers/controls/integerControlRenderer/stories/basic/schema.json';

import { jsonFormsTemplate } from '@/storybookUtils/jsonFormsTemplate';

export default {
  title: 'Basic/Controls/integerControlRenderer',
  component: integerControlRenderer,
  argTypes: {
    onClick: {},
  },
};

export const Basic = jsonFormsTemplate.bind({});
Basic.args = {
  data: {
    prop: 0,
  },
  schema: basicJsonSchema,
  uischema: basicUiSchema,
};
