<template>
  <control-wrapper :form-item-bind="formItemBind">
    <a-input-number v-bind="bind" @update:value="updateValue" />
  </control-wrapper>
</template>

<script lang="ts" setup>
  import { rendererProps, useJsonFormsControl } from '@jsonforms/vue';
  import { ControlElement } from '@jsonforms/core';
  import { useNumberControl } from '@/renderers/controls/useControl';
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
    useNumberControl(useJsonFormsControl(props));
</script>
