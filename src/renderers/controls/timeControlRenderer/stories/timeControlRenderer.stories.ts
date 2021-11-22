import timeControlRenderer from '@/renderers/controls/timeControlRenderer/timeControlRenderer.vue';
import basicUiSchema from '@/renderers/controls/timeControlRenderer/stories/basic/uiSchema.json';
import basicJsonSchema from '@/renderers/controls/timeControlRenderer/stories/basic/schema.json';

import { jsonFormsTemplate } from '@/storybookUtils/jsonFormsTemplate';

export default {
  title: 'Basic/Controls/timeControlRenderer',
  component: timeControlRenderer,
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
