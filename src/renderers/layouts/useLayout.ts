import { computed, ComputedRef } from 'vue';
import { v4 } from 'uuid';
import { useJsonFormsLayout } from '@jsonforms/vue';
import { Layout, UISchemaElement } from '@jsonforms/core';
import { FormLayout } from 'ant-design-vue/lib/form/Form';

type LayoutProps = {
  layout: ComputedRef<ReturnType<typeof useJsonFormsLayout>['layout']>;
};

const assertLayout = (arg: UISchemaElement): arg is Layout => {
  return 'elements' in arg;
};
export const useLayout = (input: LayoutProps) => {
  const elements = computed(() => {
    if (assertLayout(input.layout.value.uischema)) {
      return input.layout.value.uischema.elements.map(element => {
        element.options = element.options || {};
        element.options.antdvFormUuid = v4();
        return element;
      });
    }

    return [];
  });

  const formLayout = computed((): FormLayout => {
    switch (input.layout.value.direction) {
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
