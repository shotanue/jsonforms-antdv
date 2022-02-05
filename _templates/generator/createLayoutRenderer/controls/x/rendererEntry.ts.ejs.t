---
to: src/renderers/layouts/<%= name %>LayoutRenderer/<%= name %>LayoutRendererEntry.ts
---
import { JsonFormsRendererRegistryEntry, rankWith } from '@jsonforms/core';
import renderer from '@/renderers/layouts/<%= name %>LayoutRenderer/<%= name %>LayoutRenderer.vue';

export const <%= name %>LayoutRendererEntry: JsonFormsRendererRegistryEntry = {
  renderer,
  tester: rankWith(1, ), // todo implement me. ex) rankWith(1, isBooleanControl)
};
