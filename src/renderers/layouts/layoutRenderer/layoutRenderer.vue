<template>
  <a-form :layout="formLayout">
    <template v-for="element in elements" :key="element.options.antdvFormUuid">
      <dispatch-renderer
        :schema="layout.schema"
        :uischema="element"
        :path="layout.path"
        :enabled="layout.enabled"
        :renderers="layout.renderers"
        :cells="layout.cells"
      />
    </template>
  </a-form>
</template>

<script lang="ts" setup>
  import { rendererProps, useJsonFormsLayout, DispatchRenderer } from '@jsonforms/vue';
  import { Layout } from '@jsonforms/core';
  import { useLayout } from '@/renderers/layouts/useLayout';

  const props = defineProps({
    ...rendererProps<Layout>(),
  });

  const { layout, elements, formLayout } =
    // @ts-ignore
    useLayout(useJsonFormsLayout(props));
</script>
