<script setup lang="ts">
import { useWeatherStore } from '../../../stores/weather';
defineOptions({
  name: 'VisibilityCard',
});
const weather = useWeatherStore();
</script>

<template>
  <q-card v-if="weather.data" flat bordered class="my-card shadow-24">
    <q-card-section>
      <div class="text-h6">Visibility</div>
    </q-card-section>
    <div class="column">
      <div class="col">
        <q-card-section>
          <div class="hum text-body2">
            <div>{{ weather.data.current.vis_km }}km</div>
            <div><q-icon name="visibility" size="20px" color="amber-9" /></div>
            <div>{{ weather.data.current.condition.text }}</div>
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
  justify-content: space-between;
  gap: 10px;
}
.hum {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
</style>
