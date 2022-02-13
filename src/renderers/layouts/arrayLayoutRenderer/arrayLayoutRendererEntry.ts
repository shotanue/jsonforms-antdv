import type { JsonFormsRendererRegistryEntry } from '@jsonforms/core';
import { rankWith, schemaTypeIs } from '@jsonforms/core';
import renderer from '@/renderers/layouts/arrayLayoutRenderer/arrayLayoutRenderer.vue';

export const arrayLayoutRendererEntry: JsonFormsRendererRegistryEntry = {
  renderer,
  tester: rankWith(1, schemaTypeIs('array')),
};
