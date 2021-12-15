import type { JsonFormsRendererRegistryEntry } from '@jsonforms/core';
import { isNumberControl, rankWith } from '@jsonforms/core';
import renderer from '@/renderers/controls/numberControlRenderer/numberControlRenderer.vue';

export const numberControlRendererEntry: JsonFormsRendererRegistryEntry = {
  renderer,
  tester: rankWith(1, isNumberControl),
};
