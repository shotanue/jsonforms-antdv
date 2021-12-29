import type { JsonFormsRendererRegistryEntry } from '@jsonforms/core';
import { isIntegerControl, rankWith } from '@jsonforms/core';
import renderer from '@/renderers/controls/integerControlRenderer/integerControlRenderer.vue';

export const integerControlRendererEntry: JsonFormsRendererRegistryEntry = {
  renderer,
  tester: rankWith(1, isIntegerControl),
};
