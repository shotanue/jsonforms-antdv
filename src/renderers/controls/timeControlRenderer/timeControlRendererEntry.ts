import { isTimeControl, JsonFormsRendererRegistryEntry, rankWith } from '@jsonforms/core';
import renderer from '@/renderers/controls/timeControlRenderer/timeControlRenderer.vue';

export const timeControlRendererEntry: JsonFormsRendererRegistryEntry = {
  renderer,
  tester: rankWith(2, isTimeControl),
};
