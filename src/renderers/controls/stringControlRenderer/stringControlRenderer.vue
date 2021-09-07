<template>
  <a-form-item>
    <a-input v-bind="bind" @update:value="updateValue" />
  </a-form-item>
</template>

<script lang="ts" setup>
  import { rendererProps, useJsonFormsControl } from '@jsonforms/vue';
  import { ControlElement } from '@jsonforms/core';
  import { useStringControl } from '@/renderers/controls/useControl';

  const props = defineProps({
    ...rendererProps<ControlElement>(),
  });

  const {
    bind,
    on: { updateValue },
  } =
    // @ts-ignore
    useStringControl(useJsonFormsControl(props));
</script>
