import type { JsonFormsRendererRegistryEntry } from '@jsonforms/core';
import { isLayout, rankWith } from '@jsonforms/core';
import LayoutRenderer from '@/renderers/layouts/layoutRenderer/layoutRenderer.vue';

export const layoutRendererEntry: JsonFormsRendererRegistryEntry = {
  renderer: LayoutRenderer,
  tester: rankWith(1, isLayout),
};