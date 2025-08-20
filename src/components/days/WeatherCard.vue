<script setup lang="ts">
import { useWeatherStore } from '../../stores/weather';
import { date } from 'quasar';
defineOptions({
  name: 'WeatherCard',
});
const weather = useWeatherStore();
const days = weather?.data?.forecast.forecastday;
</script>

<template>
  <div v-for="item in days" :key="item.date_epoch" class="col bg-dark">
    <q-card flat bordered class="my-card shadow-3">
      <q-card-section>
        <div class="text-h6">{{ date.formatDate(item.date, 'dddd') }}</div>
      </q-card-section>

      <q-card-section>
        <q-img
          :src="'https:' + item.day.condition.icon"
          alt="icon"
          loading="lazy"
          spinner-color="white"
          height="60px"
          class="icon"
        />
        <div class="margin">{{ item.day.condition.text }}</div>
      </q-card-section>

      <q-separator inset />

      <q-card-section>
        <div class="text-weight-bold mb">Max: {{ item.day.maxtemp_c }}°C</div>
        <div class="text-weight-bold">Min: {{ item.day.mintemp_c }}°C</div>
      </q-card-section>
    </q-card>
  </div>
</template>

<style>

.col {
  border-radius: 10px;
}

.my-card {
  padding: 20px;
}

.margin {
  margin-top: 10px;
}

.mb {
  margin-bottom: 20px;
}

.icon {
  margin-left: auto;
  margin-right: auto;
}
</style>
