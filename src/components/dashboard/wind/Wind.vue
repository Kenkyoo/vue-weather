<script setup lang="ts">
import { useWeatherStore } from '../../../stores/weather';
defineOptions({
  name: 'WindCard',
});
const weather = useWeatherStore();
</script>

<template>
  <q-card v-if="weather.data" flat bordered class="my-card">
    <q-card-section>
      <div class="text-h6">Wind Status</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div class="text-body1 text-left">Degree: {{ weather.data.current.wind_degree }}</div>
    </q-card-section>
    <q-card-section>
      <div class="flex">
        <q-icon class="icon-chart" name="show_chart" size="150px" color="amber-9" />
      </div>
    </q-card-section>
    <q-separator inset />

    <q-card-section>
      <div class="flex-class text-body2">
        <div>{{ weather.data.current.wind_kph }} km/h</div>
        <div>Dir: {{ weather.data.current.wind_dir }}</div>
      </div>
    </q-card-section>
  </q-card>
</template>

<style>
.icon-chart {
  width: 100%;
}
.my-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
}

.flex-class {
  display: flex;
  gap: 10px;
}
</style>
