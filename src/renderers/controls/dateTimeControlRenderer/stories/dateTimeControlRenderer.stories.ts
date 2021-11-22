import dateTimeControlRenderer from '@/renderers/controls/dateTimeControlRenderer/dateTimeControlRenderer.vue';
import basicUiSchema from '@/renderers/controls/dateTimeControlRenderer/stories/basic/uiSchema.json';
import basicJsonSchema from '@/renderers/controls/dateTimeControlRenderer/stories/basic/schema.json';

import { jsonFormsTemplate } from '@/storybookUtils/jsonFormsTemplate';

export default {
  title: 'Basic/Controls/dateTimeControlRenderer',
  component: dateTimeControlRenderer,
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
