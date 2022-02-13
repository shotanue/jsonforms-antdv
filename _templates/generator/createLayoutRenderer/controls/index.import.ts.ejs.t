---
to: src/renderers/layouts/index.ts
inject: true
skip_if: import { <%= name %>LayoutRendererEntry }
prepend: true
---
import { <%= name %>LayoutRendererEntry } from '@/renderers/layouts/<%= name %>LayoutRenderer/<%= name %>LayoutRendererEntry';