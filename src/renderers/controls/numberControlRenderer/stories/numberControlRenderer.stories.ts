import numberControlRenderer from '@/renderers/controls/numberControlRenderer/numberControlRenderer.vue';
import basicUiSchema from '@/renderers/controls/numberControlRenderer/stories/basic/uiSchema.json';
import basicJsonSchema from '@/renderers/controls/numberControlRenderer/stories/basic/schema.json';
import withLabelUiSchema from '@/renderers/controls/numberControlRenderer/stories/withLabel/uiSchema.json';
import withLabelJsonSchema from '@/renderers/controls/numberControlRenderer/stories/withLabel/schema.json';
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

export const WithLabel = jsonFormsTemplate.bind({});
WithLabel.args = {
  data: {
    number: 0,
  },
  schema: withLabelJsonSchema,
  uischema: withLabelUiSchema,
};

export const InvalidNumber = jsonFormsTemplate.bind({});
InvalidNumber.args = {
  data: {
    number: 0,
  },
  schema: invalidNumberJsonSchema,
  uischema: invalidNumberUiSchema,
};
