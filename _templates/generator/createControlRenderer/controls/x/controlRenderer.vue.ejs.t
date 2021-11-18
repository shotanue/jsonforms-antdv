---
to: src/renderers/controls/<%= name %>ControlRenderer/<%= name %>ControlRenderer.vue
---
<template>
  <control-wrapper :form-item-bind="formItemBind">
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
  import { useBooleanControl } from '../../../../../src/renderers/controls/useControl';
  import ControlWrapper from '../../../../../src/renderers/controls/controlWrapper.vue';

  const props = defineProps({
    ...rendererProps<ControlElement>(),
  });

  const {
    bind,
    formItemBind,
    on: { updateValue },
  } =
          // @ts-ignore todo implement here. use valid useXXXControl.
          useBooleanControl(useJsonFormsControl(props));
</script>

