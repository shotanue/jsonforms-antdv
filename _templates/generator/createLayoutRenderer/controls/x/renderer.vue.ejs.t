---
to: src/renderers/layouts/<%= name %>LayoutRenderer/<%= name %>LayoutRenderer.vue
---
<template>
  <section>
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
  </section>
</template>

<script lang="ts" setup>
  import { DispatchRenderer, rendererProps, useJsonFormsLayout } from '@jsonforms/vue';
  import type { Layout } from '@jsonforms/core';
  import { useLayout } from '@/renderers/layouts/useLayout';

  const props = defineProps({
    ...rendererProps<Layout>(),
  });

  const { layout, elements, formLayout } = useLayout(useJsonFormsLayout(props));
</script>
