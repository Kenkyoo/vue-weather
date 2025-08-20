<script setup lang="ts">
import { useWeatherStore } from '../../../stores/weather';
defineOptions({
  name: 'UvCard',
});
const weather = useWeatherStore();
</script>

<template>
  <q-card v-if="weather.data" flat bordered class="my-card">
    <q-card-section>
      <div class="text-h6">UV Index</div>
    </q-card-section>
    <q-card-section>
      <div class="flex">
        <q-icon class="icon-chart" name="data_usage" color="amber-9" size="200px" />
      </div>
    </q-card-section>
    <q-separator inset />

    <q-card-section>
      <div class="flex flex-center text-body2 gap-x-sm">
        <div>{{ weather.data.current.uv }} UV</div>
      </div>
    </q-card-section>
  </q-card>
</template>

<style>
.my-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
</style>
