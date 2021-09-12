import { useJsonFormsControl } from '@jsonforms/vue';
import { computed, ComputedRef } from 'vue';
import { DispatchPropsOfControl } from '@jsonforms/core/src/util/renderer';
import clone from 'just-clone';

type ControlProps = {
  control: ComputedRef<ReturnType<typeof useJsonFormsControl>['control']>;
} & DispatchPropsOfControl;

// this library should control value
export type ControlOptions<T> = Omit<Partial<T>, 'value'>;
const removeValue = <T extends Record<string | 'value', any>>(options: T): ControlOptions<T> => {
  // delete value for sure
  delete options.value;
  return options;
};

export const _useControl = (input: ControlProps) => {
  if (!input.control.value.uischema?.options) {
    throw new Error('property required: input.control.value.uischema.options');
  }

  const options: Record<string, any> = removeValue(clone(input.control.value.uischema.options));

  return {
    bind: computed(() => ({
      ...options,
      value: input.control.value.data,
    })),
    errors: computed(() => input.control.value.errors),
    on: {
      updateValue: (value: unknown) => {
        input.handleChange(input.control.value.path, value);
      },
    },
  };
};

export const useNumberControl = (input: ControlProps) => {
  return {
    ..._useControl(input),
  };
};

export const useStringControl = (input: ControlProps) => {
  return {
    ..._useControl(input),
  };
};
