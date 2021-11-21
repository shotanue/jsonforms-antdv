import { and, isMultiLineControl, isStringControl, JsonFormsRendererRegistryEntry, rankWith } from '@jsonforms/core';
import renderer from '@/renderers/controls/multiStringControlRenderer/multiStringControlRenderer.vue';

export const multiStringControlRendererEntry: JsonFormsRendererRegistryEntry = {
  renderer,
  tester: rankWith(2, and(isStringControl, isMultiLineControl)),
};
