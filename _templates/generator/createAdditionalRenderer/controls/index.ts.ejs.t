---
to: src/renderers/additional/index.ts
inject: true
skip_if: <%= name %>additionalRendererEntry,
after: export const additionalRenderers = \[
---
  <%= name %>additionalRendererEntry,