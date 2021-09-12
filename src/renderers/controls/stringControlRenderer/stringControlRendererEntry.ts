import { isStringControl, JsonFormsRendererRegistryEntry, rankWith } from '@jsonforms/core';
import renderer from '@/renderers/controls/stringControlRenderer/stringControlRenderer.vue';

export const stringControlRendererEntry: JsonFormsRendererRegistryEntry = {
  renderer,
  tester: rankWith(1, isStringControl),
};
