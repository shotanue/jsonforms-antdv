import numberControlRenderer from '@/renderers/controls/numberControlRenderer/numberControlRenderer.vue';
import basicUiSchema from '@/renderers/controls/numberControlRenderer/stories/basic/uiSchema.json';
import basicJsonSchema from '@/renderers/controls/numberControlRenderer/stories/basic/schema.json';
import invalidNumberUiSchema from '@/renderers/controls/numberControlRenderer/stories/invalidNumber/uiSchema.json';
import invalidNumberJsonSchema from '@/renderers/controls/numberControlRenderer/stories/invalidNumber/schema.json';

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
    number: 0,
  },
  schema: basicJsonSchema,
  uischema: basicUiSchema,
};

export const InvalidNumber = jsonFormsTemplate.bind({});
InvalidNumber.args = {
  data: {
    number: 0,
  },
  schema: invalidNumberJsonSchema,
  uischema: invalidNumberUiSchema,
};
