import type { Story } from '@storybook/vue3';
import type { JsonFormsProps } from '@jsonforms/core';
import { JsonForms } from '@jsonforms/vue';
import { markRaw } from 'vue';
import LayoutRenderer from '@/renderers/layouts/layoutRenderer/layoutRenderer.vue';
import { antdvRenderers } from '@/renderers';

export type JsonFormsTemplateProps = JsonFormsProps & {
  data: Record<string, unknown>;
  onChange: (ev: { data: Record<string, unknown> }) => void;
};

// if not export, stories which reference `jsonFormsTemplate` throws type error
export type JsonFormsTemplate = Story<JsonFormsTemplateProps>;

export const jsonFormsTemplate: JsonFormsTemplate = args => ({
  components: { JsonForms, LayoutRenderer },
  setup() {
    args.renderers = markRaw(antdvRenderers);
    return { args };
  },
  template: '<json-forms v-bind="args"/>',
});
