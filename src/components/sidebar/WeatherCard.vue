<script setup lang="ts">
import { useWeatherStore } from '../../stores/weather';
defineOptions({
  name: 'WeatherCard',
});
const weather = useWeatherStore();
</script>

<template>
  <q-card v-if="weather.data" flat bordered class="my-card">
    <q-card-section horizontal>
      <q-card-section class="q-pt-xs">
        <div class="text-h6">
          {{ weather.data.location.name }} {{ weather.data.location.region }}
        </div>
        <q-img
          class="rounded-borders icon"
          :src="'https:' + weather.data.current.condition.icon"
          :alt="weather.data.current.condition.text"
          style="height: 60px; max-width: 70px"
        />
        <div class="flex-class">
          <div class="text-h5 q-mt-sm q-mb-xs">{{ weather.data.current.temp_c }}°C</div>
          <div class="text-caption text-overline">
            {{ weather.data.current.condition.text }}
          </div>
        </div>
      </q-card-section>
    </q-card-section>
    <q-separator />
  </q-card>
</template>

<style>
.icon {
  object-fit: cover;
}
.my-card {
  border: none;
  margin-right: auto;
  margin-left: auto;
}
.flex-class {
  display: flex;
  justify-content: space-around;
  gap: 15px;
}
</style>
