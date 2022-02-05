---
to: src/renderers/layouts/<%= name %>LayoutRenderer/stories/<%= name %>LayoutRenderer.stories.ts
---
import <%= name %>LayoutRenderer from '@/renderers/layouts/<%= name %>LayoutRenderer/<%= name %>LayoutRenderer.vue';
import basicUiSchema from '@/renderers/layouts/<%= name %>LayoutRenderer/stories/basic/uiSchema.json';
import basicJsonSchema from '@/renderers/layouts/<%= name %>LayoutRenderer/stories/basic/schema.json';

import { jsonFormsTemplate } from '@/storybookUtils/jsonFormsTemplate';

export default {
  title: 'Basic/Layouts/<%= name %>LayoutRenderer',
  component: <%= name %>LayoutRenderer,
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

