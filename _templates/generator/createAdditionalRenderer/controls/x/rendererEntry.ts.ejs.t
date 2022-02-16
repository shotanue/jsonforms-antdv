---
to: src/renderers/additional/<%= name %>AdditionalRenderer/<%= name %>AdditionalRendererEntry.ts
---
import { JsonFormsRendererRegistryEntry, rankWith, uiTypeIs } from '@jsonforms/core';
import renderer from '@/renderers/additional/<%= name %>AdditionalRenderer/<%= name %>AdditionalRenderer.vue';

export const <%= name %>AdditionalRendererEntry: JsonFormsRendererRegistryEntry = {
  renderer,
  tester: rankWith(1, uiTypeIs('__INVALID__')),
};
