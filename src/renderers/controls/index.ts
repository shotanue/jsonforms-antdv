import { dateTimeControlRendererEntry } from '@/renderers/controls/dateTimeControlRenderer/dateTimeControlRendererEntry';
import { dateControlRendererEntry } from '@/renderers/controls/dateControlRenderer/dateControlRendererEntry';
import { multiStringControlRendererEntry } from '@/renderers/controls/multiStringControlRenderer/multiStringControlRendererEntry';
import { numberControlRendererEntry } from '@/renderers/controls/numberControlRenderer/numberControlRendererEntry';
import { stringControlRendererEntry } from '@/renderers/controls/stringControlRenderer/stringControlRendererEntry';
import { booleanControlRendererEntry } from '@/renderers/controls/booleanControlRenderer/booleanControlRendererEntry';

export const controlRenderers = [
  dateTimeControlRendererEntry,
  dateControlRendererEntry,
  multiStringControlRendererEntry,
  numberControlRendererEntry,
  stringControlRendererEntry,
  booleanControlRendererEntry,
];
