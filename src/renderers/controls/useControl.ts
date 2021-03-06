import type { useJsonFormsControl, useJsonFormsEnumControl, useJsonFormsOneOfEnumControl } from '@jsonforms/vue';
import type { ComputedRef } from 'vue';
import { computed, isRef } from 'vue';
import clone from 'just-clone';
import type { ValidateInfo } from 'ant-design-vue/es/form/useForm';
import type { FormItemProps } from 'ant-design-vue';

type UseControl = (input: ReturnType<typeof useJsonFormsControl>) => {
  // An object binds to Input component(input, textarea, checkbox...),
  // allowing options defined in the corresponding Ant design component.
  inputBind: ComputedRef<Record<string, unknown>>;
  // An object binds to ControlWrapper component,
  // containing validation result and input meta data (label, required...).
  controlWrapperBind: ComputedRef<FormItemProps & ValidateInfo>;
  on: {
    // This dispatches value-changed event to JSONForms state.
    updateValue: (value: unknown) => void;
  };
};
export const useControl: UseControl = input => {
  const control = input.control;
  type Controls = typeof useJsonFormsControl & typeof useJsonFormsEnumControl & typeof useJsonFormsOneOfEnumControl;
  if (!isRef<ReturnType<Controls>['control']>(control)) {
    throw new Error('input.control should be Ref');
  }

  return {
    inputBind: computed(() => {
      return {
        ...clone(control.value.uischema.options ?? {}),
        // uischema.options.value must be overridden if it exists
        value: control.value.data,
        options: control.value.options,
      };
    }),
    controlWrapperBind: computed(() => ({
      label: control.value.label,
      autoLink: false,
      required: control.value.required,
      validateStatus: control.value.errors ? 'error' : '',
      help: control.value.errors.split('\n'),
    })),
    on: {
      updateValue: value => {
        input.handleChange(control.value.path, value);
      },
    },
  };
};
