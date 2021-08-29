import { useJsonFormsControl } from '@jsonforms/vue';
import { ComputedRef } from 'vue';
import { InputNumberProps } from 'ant-design-vue';
import { DispatchPropsOfControl } from '@jsonforms/core/src/util/renderer';

type ControlProps = {
  control: ComputedRef<ReturnType<typeof useJsonFormsControl>['control']>;
} & DispatchPropsOfControl;

type _NumberControlOptions = Partial<InputNumberProps>;

// this library should control value
export type NumberControlOptions = Omit<_NumberControlOptions, 'value'>;

export const useNumberControl = (input: ControlProps) => {
  const options = input.control.value.uischema.options as _NumberControlOptions;
  // delete value for sure
  delete options.value;

  return {
    bind: {
      ...options,
      value: input.control.value.data,
    },
    on: {
      updateValue: (value: number | null) => {
        input.handleChange(input.control.value.path, value);
      },
    },
  };
};
