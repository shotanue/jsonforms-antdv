import booleanControlRenderer from '@/renderers/controls/booleanControlRenderer/booleanControlRenderer.vue';
import basicUiSchema from '@/renderers/controls/booleanControlRenderer/stories/basic/uiSchema.json';
import basicJsonSchema from '@/renderers/controls/booleanControlRenderer/stories/basic/schema.json';
import withLabelUiSchema from '@/renderers/controls/booleanControlRenderer/stories/withLabel/uiSchema.json';
import withLabelJsonSchema from '@/renderers/controls/booleanControlRenderer/stories/withLabel/schema.json';

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

export const WithLabel = jsonFormsTemplate.bind({});
WithLabel.args = {
  data: {
    prop: false,
  },
  schema: withLabelJsonSchema,
  uischema: withLabelUiSchema,
};
