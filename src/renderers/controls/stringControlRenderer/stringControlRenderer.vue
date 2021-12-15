<template>
  <control-wrapper :form-item-bind="controlWrapperBind">
    <a-input v-bind="inputBind" @update:value="updateValue" />
  </control-wrapper>
</template>

<script lang="ts" setup>
  import { rendererProps, useJsonFormsControl } from '@jsonforms/vue';
  import type { ControlElement } from '@jsonforms/core';
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
