import type { Story } from '@storybook/vue3';
import type { JsonFormsProps } from '@jsonforms/core';
import { JsonForms } from '@jsonforms/vue';
import { markRaw } from 'vue';
import { Form } from 'ant-design-vue';
import { antdvRenderers } from '@/index';

export type JsonFormsTemplateProps = JsonFormsProps & {
  data: Record<string, unknown> | Array<unknown>;
  onChange: (ev: { data: Record<string, unknown> }) => void;
};

// if not export, stories which reference `jsonFormsTemplate` throws type error
export type JsonFormsTemplate = Story<JsonFormsTemplateProps>;

export const jsonFormsTemplate: JsonFormsTemplate = args => ({
  // import a-form explicitly or else component resolving fails
  components: { JsonForms, 'a-form': Form },
  setup() {
    args.renderers = markRaw(antdvRenderers);
    return { args };
  },
  template: `<a-form layout="vertical"><json-forms v-bind="args"/></a-form>`,
});
