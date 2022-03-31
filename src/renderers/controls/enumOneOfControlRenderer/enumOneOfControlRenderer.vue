<script lang="ts" setup>
  import { rendererProps, useJsonFormsOneOfEnumControl } from '@jsonforms/vue';
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
  } = useControl(useJsonFormsOneOfEnumControl(props));
</script>

<template>
  <control-wrapper :form-item-bind="controlWrapperBind">
    <a-select v-bind="inputBind" @update:value="updateValue" />
  </control-wrapper>
</template>
