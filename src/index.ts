import { additionalRenderers } from '@/renderers/additional';
import { layoutRenderers } from '@/renderers/layouts';
import { controlRenderers } from '@/renderers/controls';

export const antdvRenderers = [...layoutRenderers, ...controlRenderers, ...additionalRenderers];
