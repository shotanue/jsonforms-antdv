---
to: src/renderers/controls/<%= name %>ControlRenderer/<%= name %>ControlRendererEntry.ts
---
import { JsonFormsRendererRegistryEntry, rankWith } from '@jsonforms/core';
import renderer from '@/renderers/controls/<%= name %>ControlRenderer/<%= name %>ControlRenderer.vue';

export const <%= name %>ControlRendererEntry: JsonFormsRendererRegistryEntry = {
  renderer,
  tester: rankWith(1, ), // todo implement me. ex) rankWith(1, isBooleanControl)
};
