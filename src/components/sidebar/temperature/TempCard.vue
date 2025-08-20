<script setup lang="ts">
import { useWeatherStore } from '../../../stores/weather';
defineOptions({
  name: 'TempCard',
});
const weather = useWeatherStore();
</script>

<template>
  <q-card v-if="weather.data" flat bordered class="my-card">
    <q-card-section>
      <div class="text-h6">Temperature</div>
    </q-card-section>

    <q-card-section>
      <div class="flex">
        <q-icon class="icon-chart" name="bar_chart" size="100px" color="amber-9" />
      </div>
    </q-card-section>
    <q-separator inset />

    <q-card-section>
      <div class="flex-class text-body1">
        <div>Max: {{ weather.data.forecast.forecastday[0]?.day.maxtemp_c }}°C</div>
        <div>Min: {{ weather.data.forecast.forecastday[0]?.day.mintemp_c }}°C</div>
      </div>
    </q-card-section>
  </q-card>
</template>

<style>
.icon-chart {
  width: 100%;
}
.my-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 200px;
  width: 100%;
}

.flex-class {
  display: flex;
  gap: 20px;
}
</style>
