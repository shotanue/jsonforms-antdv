import type { JsonFormsRendererRegistryEntry } from '@jsonforms/core';
import { isDateTimeControl, rankWith } from '@jsonforms/core';
import renderer from '@/renderers/controls/dateTimeControlRenderer/dateTimeControlRenderer.vue';

export const dateTimeControlRendererEntry: JsonFormsRendererRegistryEntry = {
  renderer,
  tester: rankWith(2, isDateTimeControl),
};
