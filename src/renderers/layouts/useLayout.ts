import { computed, isRef } from 'vue';
import type { useJsonFormsLayout } from '@jsonforms/vue';
import type { Layout, UISchemaElement } from '@jsonforms/core';
import type { FormLayout } from 'ant-design-vue/lib/form/Form';

const assertLayout = (arg: UISchemaElement): arg is Layout => {
  return 'elements' in arg;
};
export const useLayout = (input: ReturnType<typeof useJsonFormsLayout>) => {
  const layout = input.layout;
  if (!isRef<ReturnType<typeof useJsonFormsLayout>['layout']>(layout)) {
    throw new Error('input.control should be Ref');
  }
  const elements = computed(() => {
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
    ...input,
    elements,
    formLayout,
  };
};
