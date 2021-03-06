import type { JsonFormsRendererRegistryEntry } from '@jsonforms/core';
import { isEnumControl, rankWith } from '@jsonforms/core';
import renderer from '@/renderers/controls/enumControlRenderer/enumControlRenderer.vue';

export const enumControlRendererEntry: JsonFormsRendererRegistryEntry = {
  renderer,
  tester: rankWith(2, isEnumControl),
};
