import numberControlRenderer from '@/renderers/controls/numberControlRenderer/numberControlRenderer.vue';
import basicUiSchema from '@/renderers/controls/numberControlRenderer/stories/basic/uiSchema.json';
import basicJsonSchema from '@/renderers/controls/numberControlRenderer/stories/basic/schema.json';

import { jsonFormsTemplate } from '@/storybookUtils/jsonFormsTemplate';

export default {
  title: 'Basic/Controls/NumberControlRenderer',
  component: numberControlRenderer,
  argTypes: {
    onClick: {},
  },
};

export const Basic = jsonFormsTemplate.bind({});
Basic.args = {
  data: {
    number: 1,
  },
  schema: basicJsonSchema,
  uischema: basicUiSchema,
};
