import stringControlRenderer from '@/renderers/controls/stringControlRenderer/stringControlRenderer.vue';
import basicUiSchema from '@/renderers/controls/stringControlRenderer/stories/basic/uiSchema.json';
import basicJsonSchema from '@/renderers/controls/stringControlRenderer/stories/basic/schema.json';
import invalidTextUiSchema from '@/renderers/controls/stringControlRenderer/stories/invalidText/uiSchema.json';
import invalidTextJsonSchema from '@/renderers/controls/stringControlRenderer/stories/invalidText/schema.json';

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
    propB: 'bar',
  },
  schema: basicJsonSchema,
  uischema: basicUiSchema,
};

export const InvalidText = jsonFormsTemplate.bind({});
InvalidText.args = {
  data: {
    prop: 'foo',
  },
  schema: invalidTextJsonSchema,
  uischema: invalidTextUiSchema,
};
