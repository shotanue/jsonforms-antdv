import enumOneOfControlRenderer from '@/renderers/controls/enumOneOfControlRenderer/enumOneOfControlRenderer.vue';
import basicUiSchema from '@/renderers/controls/enumOneOfControlRenderer/stories/basic/uiSchema.json';
import basicJsonSchema from '@/renderers/controls/enumOneOfControlRenderer/stories/basic/schema.json';

import { jsonFormsTemplate } from '@/storybookUtils/jsonFormsTemplate';

export default {
  title: 'Basic/Controls/enumOneOfControlRenderer',
  component: enumOneOfControlRenderer,
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
