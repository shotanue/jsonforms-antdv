import type { JsonFormsRendererRegistryEntry } from '@jsonforms/core';
import { isTimeControl, rankWith } from '@jsonforms/core';
import renderer from '@/renderers/controls/timeControlRenderer/timeControlRenderer.vue';

export const timeControlRendererEntry: JsonFormsRendererRegistryEntry = {
  renderer,
  tester: rankWith(2, isTimeControl),
};
