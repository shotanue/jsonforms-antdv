<template>
  <control-wrapper :form-item-bind="formItemBind">
    <a-checkbox v-bind="bind" :checked="bind.checked" @update:checked="updateValue" />
  </control-wrapper>
</template>

<script lang="ts" setup>
  import { rendererProps, useJsonFormsControl } from '@jsonforms/vue';
  import { ControlElement } from '@jsonforms/core';
  import { useBooleanControl } from '@/renderers/controls/useControl';
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
    useBooleanControl(useJsonFormsControl(props));
</script>
