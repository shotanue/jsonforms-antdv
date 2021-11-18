---
to: src/renderers/controls/<%= name %>ControlRenderer/stories/<%= name %>ControlRenderer.stories.ts
---
import <%= name %>ControlRenderer from '@/renderers/controls/<%= name %>ControlRenderer/<%= name %>ControlRenderer.vue';
import basicUiSchema from '@/renderers/controls/<%= name %>ControlRenderer/stories/basic/uiSchema.json';
import basicJsonSchema from '@/renderers/controls/<%= name %>ControlRenderer/stories/basic/schema.json';

import { jsonFormsTemplate } from '@/storybookUtils/jsonFormsTemplate';

export default {
  title: 'Basic/Controls/<%= name %>ControlRenderer',
  component: <%= name %>ControlRenderer,
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

