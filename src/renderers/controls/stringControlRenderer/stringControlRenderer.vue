<script lang="ts" setup>
  import { rendererProps, useJsonFormsControl } from '@jsonforms/vue';
  import type { ControlElement } from '@jsonforms/core';
  import { ref } from 'vue';
  import clone from 'just-clone';
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

  const suggestions = ref<string[]>(
    (() => {
      const items = inputBind.value?.suggestion;

      if (items === undefined) {
        return [];
      }

      if (!Array.isArray(items)) {
        throw new TypeError('[jsonforms antdv] suggestion type should be Array<string>');
      }
      items.forEach(suggestion => {
        if (typeof suggestion !== 'string') {
          throw new TypeError('[jsonforms antdv] suggestion type should be Array<string>');
        }
      });

      return items;
    })()
  );

  const result = ref<string[]>(clone(suggestions.value));

  const onSearch = (searchText: string) => {
    result.value = suggestions.value.filter((x: string) => {
      return x.toUpperCase().includes(searchText.toUpperCase());
    });
  };
</script>

<template>
  <control-wrapper :form-item-bind="controlWrapperBind">
    <a-input v-if="suggestions.length === 0" v-bind="inputBind" @update:value="updateValue" />
    <a-auto-complete
      v-else-if="suggestions.length > 0"
      v-bind="inputBind"
      @update:value="updateValue"
      @search="onSearch"
    >
      <template #options>
        <a-select-option v-for="option in result" :key="option">
          {{ option }}
        </a-select-option>
      </template>
    </a-auto-complete>
  </control-wrapper>
</template>
