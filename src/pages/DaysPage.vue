<script setup lang="ts">
import WeatherCard from 'src/components/days/WeatherCard.vue';
defineOptions({
  name: 'DaysPage',
});
</script>
<template>
  <div class="q-pa-md">
    <div class="text-h5 title">Extended weather</div>
    <div class="text-subtitle1 q-mb-md">3 Days</div>
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
