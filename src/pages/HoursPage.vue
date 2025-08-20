<script setup lang="ts">
import WeatherCard from 'src/components/hours/WeatherCard.vue';
defineOptions({
  name: 'HoursPage',
});
</script>
<template>
  <div class="q-pa-md">
    <div class="text-h5 q-mb-md title">Weather per hours</div>
    <div class="row gap">
      <WeatherCard />
    </div>
  </div>
</template>
<style>
.gap {
  gap: 20px;
}
</style>
