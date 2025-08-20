<script setup lang="ts">
import { useWeatherStore } from '../../stores/weather';
import { date } from 'quasar';
defineOptions({
  name: 'WeatherCard',
});
const weather = useWeatherStore();
const hours = weather?.data?.forecast.forecastday[0]?.hour;
</script>

<template>
  <div v-for="item in hours" :key="item.time_epoch" class="col-12 col-md-2">
    <q-card flat bordered class="my-card shadow-3">
      <q-card-section>
        <div class="text-h6">{{ date.formatDate(item.time, 'HH:mm') }}</div>
      </q-card-section>

      <q-card-section class="padding">
        <q-img
          :src="'https:' + item.condition.icon"
          alt="icon"
          loading="lazy"
          spinner-color="white"
          height="60px"
          class="icon"
        />
        <div class="text-weight-bold text-center">{{ item.condition.text }}</div>
      </q-card-section>

      <q-separator inset />

      <q-card-section>
        <div class="text-weight-bold">{{ item.temp_c }}°C</div>
      </q-card-section>
    </q-card>
  </div>
</template>

<style>
.my-card {
  padding-left: 10px;
  padding-right: 10px;
}
.mb {
  margin-bottom: 10px;
}

.icon {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  padding: 20px;
}

.padding {
  padding: 30px;
}
</style>
