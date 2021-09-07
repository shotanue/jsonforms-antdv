import stringControlRenderer from '@/renderers/controls/stringControlRenderer/stringControlRenderer.vue';
import basicUiSchema from '@/renderers/controls/stringControlRenderer/stories/basic/uiSchema.json';
import basicJsonSchema from '@/renderers/controls/stringControlRenderer/stories/basic/schema.json';

import { jsonFormsTemplate } from '@/storybookUtils/jsonFormsTemplate';

export default {
  title: 'Basic/Controls/StringControlRenderer',
  component: stringControlRenderer,
  argTypes: {
    onClick: {},
  },
};

export const Basic = jsonFormsTemplate.bind({});
Basic.args = {
  data: {
    prop: 'foo',
  },
  schema: basicJsonSchema,
  uischema: basicUiSchema,
};
