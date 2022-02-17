---
to: src/renderers/additional/index.ts
inject: true
skip_if: import { <%= name %>AdditionalRendererEntry }
prepend: true
---
import { <%= name %>AdditionalRendererEntry } from '@/renderers/additional/<%= name %>AdditionalRenderer/<%= name %>AdditionalRendererEntry';