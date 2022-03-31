<script lang="ts" setup>
  import { DispatchRenderer, rendererProps, useJsonFormsArrayControl } from '@jsonforms/vue';
  import type { ControlElement } from '@jsonforms/core';
  import { composePaths } from '@jsonforms/core';
  import { useArrayControl } from '@/renderers/layouts/arrayLayoutRenderer/useArrayControl';

  const props = defineProps({
    ...rendererProps<ControlElement>(),
  });

  const { addElement, control, foundUiSchema } = useArrayControl(useJsonFormsArrayControl(props));
</script>

<template>
  <div>
    <a-button type="default" @click="addElement">+</a-button>
    <a-list :data-source="control.data">
      <template #renderItem="{ index }">
        <a-list-item>
          <dispatch-renderer
            :schema="control.schema"
            :uischema="foundUiSchema"
            :path="composePaths(control.path, `${index}`)"
            :enabled="control.enabled"
            :renderers="control.renderers"
            :cells="control.cells"
          />
        </a-list-item>
      </template>
    </a-list>
  </div>
</template>
