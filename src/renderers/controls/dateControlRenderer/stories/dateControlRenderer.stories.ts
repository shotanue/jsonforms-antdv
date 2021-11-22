import dateControlRenderer from '@/renderers/controls/dateControlRenderer/dateControlRenderer.vue';
import basicUiSchema from '@/renderers/controls/dateControlRenderer/stories/basic/uiSchema.json';
import basicJsonSchema from '@/renderers/controls/dateControlRenderer/stories/basic/schema.json';

import { jsonFormsTemplate } from '@/storybookUtils/jsonFormsTemplate';

export default {
  title: 'Basic/Controls/dateControlRenderer',
  component: dateControlRenderer,
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
