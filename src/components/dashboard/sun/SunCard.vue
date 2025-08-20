<script setup lang="ts">
import { useWeatherStore } from '../../../stores/weather';
defineOptions({
  name: 'SunCard',
});
const weather = useWeatherStore();
</script>

<template>
  <q-card v-if="weather.data" flat bordered class="my-card shadow-24">
    <q-card-section>
      <div class="text-h6">Sunrise and sunset</div>
    </q-card-section>
    <div class="column">
      <div class="col">
        <q-card-section>
          <div class="sun text-body1">
            <div><q-icon name="sunny" size="15px" color="amber-9"/></div>
            <div>Sunrise</div>
            <div>{{ weather.data.forecast.forecastday[0]?.astro.sunrise }}</div>
          </div>
        </q-card-section>
      </div>
      <div class="col">
        <q-card-section>
          <div class="sun text-body1">
            <div><q-icon name="bedtime" size="15px" color="amber-9"/></div>
            <div>Sunset</div>
            <div>{{ weather.data.forecast.forecastday[0]?.astro.sunset }}</div>
          </div>
        </q-card-section>
      </div>
    </div>
    <div></div>
  </q-card>
</template>

<style>
.my-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
}
.sun {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 10px;
}
</style>
