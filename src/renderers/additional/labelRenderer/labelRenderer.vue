<template>
  <a-typography>
    <a-typography-title :level="5">{{ text }}</a-typography-title>
  </a-typography>
</template>

<script lang="ts" setup>
  import { rendererProps, useJsonFormsLayout } from '@jsonforms/vue';
  import type { LabelElement, Layout, UISchemaElement } from '@jsonforms/core';
  import { ref } from 'vue';
  import { useLayout } from '@/renderers/layouts/useLayout';

  const props = defineProps({
    ...rendererProps<Layout>(),
  });
  const assertUiSchemaElement = (uiSchemaElement: UISchemaElement): uiSchemaElement is LabelElement => {
    return 'text' in uiSchemaElement;
  };

  const pickText = (uiSchemaElement: UISchemaElement): string => {
    if (assertUiSchemaElement(uiSchemaElement)) {
      return uiSchemaElement.text;
    }
    return '';
  };
  const { layout } = useLayout(useJsonFormsLayout(props));
  const text = ref(pickText(layout.value.uischema));
</script>
