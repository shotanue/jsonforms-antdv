import { JsonFormsRendererRegistryEntry, rankWith, uiTypeIs } from '@jsonforms/core';
import renderer from '@/renderers/layouts/verticalLayoutRenderer/verticalLayoutRenderer.vue';

export const verticalLayoutRendererEntry: JsonFormsRendererRegistryEntry = {
  renderer,
  tester: rankWith(1, uiTypeIs('VerticalLayout')),
};
