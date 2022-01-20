<template>
  <json-forms :data="data" :schema="schema" :uischema="uischema" :renderers="renderers" @change="onChagne" />
</template>

<script setup>
  import { JsonForms } from '@jsonforms/vue';
  import { markRaw } from 'vue';
  import { antdvRenderers } from '../dist/jsonforms-antdv.es';

  import uischema from './uischema.json';
  import schema from './schema.json';
  const renderers = markRaw([...antdvRenderers]);
  let data = {
    properties: {
      foo: '',
    },
  };

  const onChagne = event => {
    data = event.data;
  };
</script>
