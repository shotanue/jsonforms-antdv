import LayoutRenderer from '@/renderers/layouts/layoutRenderer/layoutRenderer.vue';
import verticalLayoutUiSchema from '@/renderers/layouts/layoutRenderer/stories/verticalLayout/uiSchema.json';
import verticalLayoutJsonSchema from '@/renderers/layouts/layoutRenderer/stories/verticalLayout/schema.json';
import horizontalLayoutUiSchema from '@/renderers/layouts/layoutRenderer/stories/horizontalLayout/uiSchema.json';
import horizontalLayoutJsonSchema from '@/renderers/layouts/layoutRenderer/stories/horizontalLayout/schema.json';
import { jsonFormsTemplate } from '@/storybookUtils/jsonFormsTemplate';

export default {
  title: 'Basic/Layouts/LayoutRenderer',
  component: LayoutRenderer,
  argTypes: {
    onClick: {},
  },
};

export const Vertical = jsonFormsTemplate.bind({});
Vertical.args = {
  data: {
    number: 5,
  },
  schema: verticalLayoutJsonSchema,
  uischema: verticalLayoutUiSchema,
};

export const Horizontal = jsonFormsTemplate.bind({});
Horizontal.args = {
  data: {
    number: 5,
  },
  schema: horizontalLayoutJsonSchema,
  uischema: horizontalLayoutUiSchema,
};
