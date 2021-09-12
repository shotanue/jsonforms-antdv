import { numberControlRendererEntry } from '@/renderers/controls/numberControlRenderer/numberControlRendererEntry';
import { stringControlRendererEntry } from '@/renderers/controls/stringControlRenderer/stringControlRendererEntry';
import { booleanControlRendererEntry } from '@/renderers/controls/booleanControlRenderer/booleanControlRendererEntry';

export const controlRenderers = [numberControlRendererEntry, stringControlRendererEntry, booleanControlRendererEntry];
