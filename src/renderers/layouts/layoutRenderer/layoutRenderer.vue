<template>
  <a-form :layout="formLayout">
    <dispatch-renderer
      v-for="(element, index) in elements"
      :key="`${layout.path}-${index}`"
      :schema="layout.schema"
      :uischema="element"
      :path="layout.path"
      :enabled="layout.enabled"
      :renderers="layout.renderers"
      :cells="layout.cells"
    />
  </a-form>
</template>

<script lang="ts" setup>
  import { rendererProps, useJsonFormsLayout, DispatchRenderer } from '@jsonforms/vue';
  import { Layout } from '@jsonforms/core';
  import { useLayout } from '@/renderers/layouts/useLayout';

  const props = defineProps({
    ...rendererProps<Layout>(),
  });

  const { layout, elements, formLayout } = useLayout(useJsonFormsLayout(props));
</script>
