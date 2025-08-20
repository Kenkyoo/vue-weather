<script setup lang="ts">
import { useWeatherStore } from '../../../stores/weather';
defineOptions({
  name: 'FeelsCard',
});
const weather = useWeatherStore();
</script>

<template>
  <q-card v-if="weather.data" flat bordered class="my-card shadow-24">
    <q-card-section>
      <div class="text-h6">Feels Like</div>
    </q-card-section>
    <div class="column">
      <div class="col">
        <q-card-section>
          <div class="hum text-body2">
            <div>{{ weather.data.current.feelslike_c }}°C</div>
            <div><q-icon name="device_thermostat" size="30px" color="amber-9"/></div>
            <div>Feels like</div>
          </div>
        </q-card-section>
      </div>
    </div>
  </q-card>
</template>

<style>
.my-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
  width: "100%";
}
.hum {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

}
</style>
