import verticalLayoutRenderer from '@/renderers/layouts/verticalLayoutRenderer/verticalLayoutRenderer.vue';
import basicUiSchema from '@/renderers/layouts/verticalLayoutRenderer/stories/basic/uiSchema.json';
import basicJsonSchema from '@/renderers/layouts/verticalLayoutRenderer/stories/basic/schema.json';

import { jsonFormsTemplate } from '@/storybookUtils/jsonFormsTemplate';

export default {
  title: 'Basic/Layouts/verticalLayoutRenderer',
  component: verticalLayoutRenderer,
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
