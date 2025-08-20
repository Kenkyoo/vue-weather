<template>
  <div class="q-pa-md">
    <div class="text-weight-bolder">
      {{ store?.data?.location.name }} {{ store?.data?.location.region }} ({{
        store?.data?.location.tz_id
      }})
    </div>
  </div>
</template>
<script setup lang="ts">
import { useWeatherStore } from 'src/stores/weather';

const store = useWeatherStore();

defineOptions({
  name: 'MyLocation',
});
</script>
