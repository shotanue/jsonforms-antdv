import { JsonFormsRendererRegistryEntry, uiTypeIs, rankWith } from '@jsonforms/core';
import renderer from '@/renderers/layouts/horizontalLayoutRenderer/horizontalLayoutRenderer.vue';

export const horizontalLayoutRendererEntry: JsonFormsRendererRegistryEntry = {
  renderer,
  tester: rankWith(2, uiTypeIs('HorizontalLayout')),
};
