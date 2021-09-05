<template>
  <a-form-item>
    <a-input-number v-bind="bind" @update:value="updateValue" />
  </a-form-item>
</template>

<script lang="ts" setup>
  import { rendererProps, useJsonFormsControl } from '@jsonforms/vue';
  import { ControlElement } from '@jsonforms/core';
  import { useNumberControl } from '@/renderers/controls/useControl';

  const props = defineProps({
    ...rendererProps<ControlElement>(),
  });

  const {
    bind,
    on: { updateValue },
  } =
    // @ts-ignore
    useNumberControl(useJsonFormsControl(props));
</script>
