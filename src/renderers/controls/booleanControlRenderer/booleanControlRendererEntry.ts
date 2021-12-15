import type { JsonFormsRendererRegistryEntry } from '@jsonforms/core';
import { isBooleanControl, rankWith } from '@jsonforms/core';
import renderer from '@/renderers/controls/booleanControlRenderer/booleanControlRenderer.vue';

export const booleanControlRendererEntry: JsonFormsRendererRegistryEntry = {
  renderer,
  tester: rankWith(1, isBooleanControl),
};
