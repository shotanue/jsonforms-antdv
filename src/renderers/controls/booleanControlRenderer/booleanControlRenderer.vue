<template>
  <control-wrapper :form-item-bind="controlWrapperBind">
    <a-checkbox v-bind="inputBind" :checked="inputBind.value" @update:checked="updateValue" />
  </control-wrapper>
</template>

<script lang="ts" setup>
  import { rendererProps, useJsonFormsControl } from '@jsonforms/vue';
  import { ControlElement } from '@jsonforms/core';
  import { useControl } from '@/renderers/controls/useControl';
  import ControlWrapper from '@/renderers/controls/controlWrapper.vue';

  const props = defineProps({
    ...rendererProps<ControlElement>(),
  });

  const {
    inputBind,
    controlWrapperBind,
    on: { updateValue },
  } = useControl(useJsonFormsControl(props));
</script>
