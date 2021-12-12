import enumControlRenderer from '@/renderers/controls/enumControlRenderer/enumControlRenderer.vue';
import basicUiSchema from '@/renderers/controls/enumControlRenderer/stories/basic/uiSchema.json';
import basicJsonSchema from '@/renderers/controls/enumControlRenderer/stories/basic/schema.json';

import { jsonFormsTemplate } from '@/storybookUtils/jsonFormsTemplate';

export default {
  title: 'Basic/Controls/enumControlRenderer',
  component: enumControlRenderer,
  argTypes: {
    onClick: {},
  },
};

export const Basic = jsonFormsTemplate.bind({});
Basic.args = {
  data: {
    prop: undefined,
  },
  schema: basicJsonSchema,
  uischema: basicUiSchema,
};
