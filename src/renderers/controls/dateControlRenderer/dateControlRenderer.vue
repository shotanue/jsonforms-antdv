<template>
  <control-wrapper :form-item-bind="controlWrapperBind">
    <a-date-picker v-bind="inputBind" @update:value="updateValue" />
  </control-wrapper>
</template>

<script lang="ts" setup>
  import { rendererProps, useJsonFormsControl } from '@jsonforms/vue';
  import { ControlElement } from '@jsonforms/core';
  import moment, { Moment } from 'moment';
  import { computed } from 'vue';
  import { useControl } from '@/renderers/controls/useControl';
  import ControlWrapper from '@/renderers/controls/controlWrapper.vue';

  const props = defineProps({
    ...rendererProps<ControlElement>(),
  });

  const { inputBind: _inputBind, controlWrapperBind, on } = useControl(useJsonFormsControl(props));
  const inputBind = computed(() => {
    let value;

    if (typeof _inputBind.value?.value === 'string') {
      value = moment(_inputBind.value.value);
    }

    return { ..._inputBind.value, value };
  });
  const updateValue = (value: Moment | null) => {
    if (value === null) {
      on.updateValue(undefined);
    } else {
      on.updateValue(value.format('y-M-D'));
    }
  };
</script>
