<template>
  <q-input
    rounded
    outlined
    v-model="store.query"
    label="Buscar ciudad"
    class="input search"
    type="search"
  >
    <template v-slot:append>
      <q-icon name="search" />
    </template>
  </q-input>
</template>
<script setup lang="ts">
import { watch } from 'vue';
import { useDebounceFn } from '@vueuse/core';
import { useWeatherStore } from 'src/stores/weather';
import { QInput } from 'quasar';

const store = useWeatherStore();

const fetch = useDebounceFn(() => {
  void store.fetchWeather();
}, 1000);

watch(
  () => store.query,
  () => {
    void fetch();
  },
);

defineOptions({
  name: 'SearchComponent',
});
</script>
<style>
.search {
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
}
</style>
