<script lang="ts" setup>
  import { rendererProps, useJsonFormsControl } from '@jsonforms/vue';
  import type { ControlElement } from '@jsonforms/core';
  import { computed } from 'vue';
  import type { Moment } from 'moment';
  import moment from 'moment';
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
    on.updateValue(value === null ? undefined : value.toISOString());
  };
</script>

<template>
  <control-wrapper :form-item-bind="controlWrapperBind">
    <a-date-picker v-bind="inputBind" show-time @update:value="updateValue" />
  </control-wrapper>
</template>
