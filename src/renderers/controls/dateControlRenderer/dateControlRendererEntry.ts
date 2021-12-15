import type { JsonFormsRendererRegistryEntry } from '@jsonforms/core';
import { isDateControl, rankWith } from '@jsonforms/core';
import renderer from '@/renderers/controls/dateControlRenderer/dateControlRenderer.vue';

export const dateControlRendererEntry: JsonFormsRendererRegistryEntry = {
  renderer,
  tester: rankWith(2, isDateControl),
};
