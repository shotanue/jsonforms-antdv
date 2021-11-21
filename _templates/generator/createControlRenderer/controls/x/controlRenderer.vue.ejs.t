---
to: src/renderers/controls/<%= name %>ControlRenderer/<%= name %>ControlRenderer.vue
---
<template>
  <control-wrapper :form-item-bind="controlWrapperBind">
    <!--
    todo implement me
    sample)
    <a-checkbox v-bind="bind" :checked="bind.checked" @update:checked="updateValue" />
    -->
    <%= name %>
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

