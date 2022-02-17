import type { JsonFormsRendererRegistryEntry } from '@jsonforms/core';
import { rankWith, uiTypeIs } from '@jsonforms/core';
import renderer from '@/renderers/additional/labelRenderer/labelRenderer.vue';

export const labelRendererEntry: JsonFormsRendererRegistryEntry = {
  renderer,
  tester: rankWith(1, uiTypeIs('Label')),
};
