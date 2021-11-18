---
to: src/renderers/controls/index.ts
inject: true
skip_if: import { <%= name %>ControlRendererEntry }
prepend: true
---
import { <%= name %>ControlRendererEntry } from '@/renderers/controls/<%= name %>ControlRenderer/<%= name %>ControlRendererEntry';