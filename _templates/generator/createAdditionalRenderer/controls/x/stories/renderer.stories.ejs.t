---
to: src/renderers/additional/<%= name %>AdditionalRenderer/stories/<%= name %>AdditionalRenderer.stories.ts
---
import <%= name %>AdditionalRenderer from '@/renderers/additional/<%= name %>AdditionalRenderer/<%= name %>AdditionalRenderer.vue';
import basicUiSchema from '@/renderers/additional/<%= name %>AdditionalRenderer/stories/basic/uiSchema.json';
import basicJsonSchema from '@/renderers/additional/<%= name %>AdditionalRenderer/stories/basic/schema.json';

import { jsonFormsTemplate } from '@/storybookUtils/jsonFormsTemplate';

export default {
  title: 'Basic/Additional/<%= name %>AdditionalRenderer',
  component: <%= name %>AdditionalRenderer,
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

