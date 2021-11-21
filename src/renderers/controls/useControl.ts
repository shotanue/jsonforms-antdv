import { useJsonFormsControl } from '@jsonforms/vue';
import { computed, ComputedRef } from 'vue';
import { DispatchPropsOfControl } from '@jsonforms/core/src/util/renderer';
import clone from 'just-clone';
import { ValidateInfo } from 'ant-design-vue/es/form/useForm';
import { FormItemProps } from 'ant-design-vue';

type UseControl = (
  input: {
    control: ComputedRef<ReturnType<typeof useJsonFormsControl>['control']>;
  } & DispatchPropsOfControl
) => {
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
  if (!input.control.value.uischema?.options) {
    throw new Error('property required: input.control.value.uischema.options');
  }

  return {
    inputBind: computed(() => {
      return {
        ...clone(input.control.value.uischema.options ?? {}),
        // uischema.options.value must be overridden if it exists
        value: input.control.value.data,
      };
    }),
    controlWrapperBind: computed(() => ({
      label: input.control.value.label,
      autoLink: false,
      required: input.control.value.required,
      validateStatus: input.control.value.errors ? 'error' : '',
      help: input.control.value.errors.split('\n'),
    })),
    on: {
      updateValue: value => {
        input.handleChange(input.control.value.path, value);
      },
    },
  };
};
