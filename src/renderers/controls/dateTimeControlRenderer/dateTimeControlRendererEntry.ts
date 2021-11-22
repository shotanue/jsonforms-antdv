import { isDateTimeControl, JsonFormsRendererRegistryEntry, rankWith } from '@jsonforms/core';
import renderer from '@/renderers/controls/dateTimeControlRenderer/dateTimeControlRenderer.vue';

export const dateTimeControlRendererEntry: JsonFormsRendererRegistryEntry = {
  renderer,
  tester: rankWith(2, isDateTimeControl),
};
