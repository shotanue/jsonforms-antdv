import type { JsonFormsRendererRegistryEntry } from '@jsonforms/core';
import { isOneOfEnumControl, rankWith } from '@jsonforms/core';
import renderer from '@/renderers/controls/enumOneOfControlRenderer/enumOneOfControlRenderer.vue';

export const enumOneOfControlRendererEntry: JsonFormsRendererRegistryEntry = {
  renderer,
  tester: rankWith(2, isOneOfEnumControl),
};
