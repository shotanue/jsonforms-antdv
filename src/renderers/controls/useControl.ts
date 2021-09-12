import { useJsonFormsControl } from '@jsonforms/vue';
import { computed, ComputedRef } from 'vue';
import { DispatchPropsOfControl } from '@jsonforms/core/src/util/renderer';
import clone from 'just-clone';
import { ValidateInfo } from 'ant-design-vue/es/form/useForm';
import { FormItemProps } from 'ant-design-vue';

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

// a-checkbox requires `checked` as value property, not `value`.
type ComposeBind = (args: { options: Record<string, any>; value: unknown }) => Record<string, unknown>;
export const _useControl = (input: ControlProps, bind: ComposeBind) => {
  if (!input.control.value.uischema?.options) {
    throw new Error('property required: input.control.value.uischema.options');
  }

  return {
    bind: computed(() => {
      return bind({
        options: removeValue(clone(input.control.value.uischema.options ?? {})),
        value: input.control.value.data,
      });
    }),
    formItemBind: computed<FormItemProps & ValidateInfo>(() => ({
      label: input.control.value.label,
      autoLink: false,
      required: input.control.value.required,
      validateStatus: input.control.value.errors ? 'error' : '',
      help: input.control.value.errors.split('\n'),
    })),
    on: {
      updateValue: (value: unknown) => {
        input.handleChange(input.control.value.path, value);
      },
    },
  };
};

export const useNumberControl = (input: ControlProps) => {
  return {
    ..._useControl(input, args => args),
  };
};

export const useBooleanControl = (input: ControlProps) => {
  return {
    ..._useControl(input, args => {
      return {
        options: args.options,
        checked: args.value,
      };
    }),
  };
};

export const useStringControl = (input: ControlProps) => {
  return {
    ..._useControl(input, args => args),
  };
};
