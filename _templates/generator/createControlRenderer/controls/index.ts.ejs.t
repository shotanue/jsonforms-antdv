---
to: src/renderers/controls/index.ts
inject: true
skip_if: <%= name %>ControlRendererEntry,
after: export const controlRenderers = \[
---
  <%= name %>ControlRendererEntry,