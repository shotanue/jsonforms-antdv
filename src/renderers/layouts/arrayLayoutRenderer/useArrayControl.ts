import type { UISchemaElement } from '@jsonforms/core';
import { createDefaultValue, findUISchema } from '@jsonforms/core';
import type { useJsonFormsArrayControl } from '@jsonforms/vue';
import type { Ref } from 'vue';
import { isRef } from 'vue';

type Input = ReturnType<typeof useJsonFormsArrayControl>;
type UseArrayControl = (input: Input) => {
  control: Ref<Input['control']>;
  foundUiSchema: UISchemaElement;
  addElement: () => void;
};

export const useArrayControl: UseArrayControl = input => {
  const control = input.control;
  if (!isRef<Input['control']>(control)) {
    throw new Error('input.control should be Ref');
  }

  return {
    foundUiSchema: findUISchema(
      control.value.uischemas,
      control.value.schema,
      control.value.uischema.scope,
      control.value.path,
      undefined,
      control.value.uischema,
      control.value.rootSchema
    ),
    control,
    addElement: () => {
      input.addItem(control.value.path, createDefaultValue(control.value.schema))();
    },
  };
};
