import { isLayout, JsonFormsRendererRegistryEntry, rankWith } from '@jsonforms/core';
import LayoutRenderer from '@/renderers/layouts/layoutRenderer/layoutRenderer.vue';

export const entry: JsonFormsRendererRegistryEntry = {
  renderer: LayoutRenderer,
  tester: rankWith(1, isLayout),
};
