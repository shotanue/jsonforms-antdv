---
to: src/renderers/layouts/index.ts
inject: true
skip_if: <%= name %>LayoutRendererEntry,
after: export const layoutRenderers = \[
---
  <%= name %>LayoutRendererEntry,