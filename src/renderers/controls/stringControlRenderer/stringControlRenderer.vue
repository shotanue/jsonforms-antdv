<template>
  <control-wrapper :form-item-bind="formItemBind">
    <a-input v-bind="bind" @update:value="updateValue" />
  </control-wrapper>
</template>

<script lang="ts" setup>
  import { rendererProps, useJsonFormsControl } from '@jsonforms/vue';
  import { ControlElement } from '@jsonforms/core';
  import { useStringControl } from '@/renderers/controls/useControl';
  import ControlWrapper from '@/renderers/controls/controlWrapper.vue';

  const props = defineProps({
    ...rendererProps<ControlElement>(),
  });

  const {
    bind,
    formItemBind,
    on: { updateValue },
  } =
    // @ts-ignore
    useStringControl(useJsonFormsControl(props));
</script>
