import type { ComputedRef, Ref } from 'vue';
import { computed, isRef } from 'vue';
import type { useJsonFormsLayout } from '@jsonforms/vue';
import type { Layout, UISchemaElement } from '@jsonforms/core';
import type { FormLayout } from 'ant-design-vue/lib/form/Form';

const assertLayout = (arg: UISchemaElement): arg is Layout => {
  return 'elements' in arg;
};
type Input = ReturnType<typeof useJsonFormsLayout>;

type UseLayout = (input: Input) => {
  layout: Ref<Input['layout']>;
  elements: ComputedRef<Array<UISchemaElement>>;
  formLayout: ComputedRef<FormLayout>;
};
export const useLayout: UseLayout = (input: Input) => {
  const layout = input.layout;
  if (!isRef<Input['layout']>(layout)) {
    throw new Error('input.control should be Ref');
  }
  const elements = computed((): Array<UISchemaElement> => {
    if (assertLayout(layout.value.uischema)) {
      return layout.value.uischema.elements.map(element => {
        element.options = element.options || {};
        return element;
      });
    }

    return [];
  });

  const formLayout = computed((): FormLayout => {
    switch (layout.value.direction) {
      case 'row':
        return 'horizontal';
      case 'column':
        return 'vertical';
    }
    return 'horizontal';
  });

  return {
    layout,
    elements,
    formLayout,
  };
};
