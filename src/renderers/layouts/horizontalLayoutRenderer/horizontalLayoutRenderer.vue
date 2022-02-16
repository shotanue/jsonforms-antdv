<template>
  <a-card :bordered="false" :hoverable="true">
    <a-row>
      <a-col v-for="(element, index) in elements">
        <dispatch-renderer
          :key="`${layout.path}-${index}`"
          :schema="layout.schema"
          :uischema="element"
          :path="layout.path"
          :enabled="layout.enabled"
          :renderers="layout.renderers"
          :cells="layout.cells"
        />
      </a-col>
    </a-row>
  </a-card>
</template>

<script lang="ts" setup>
  import { DispatchRenderer, rendererProps, useJsonFormsLayout } from '@jsonforms/vue';
  import type { Layout } from '@jsonforms/core';
  import { useLayout } from '@/renderers/layouts/useLayout';

  const props = defineProps({
    ...rendererProps<Layout>(),
  });

  const { layout, elements } = useLayout(useJsonFormsLayout(props));
</script>
