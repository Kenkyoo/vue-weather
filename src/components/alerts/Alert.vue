<script setup lang="ts">
import { useWeatherStore } from 'src/stores/weather';

const store = useWeatherStore();

defineOptions({
  name: 'AlertComponent',
});
</script>
<template>
  <q-banner v-if="store?.data?.alerts.length === 0" inline-actions class="text-white bg-red">
    {{ store?.data?.alerts[0]?.headline }}
    <template v-slot:action>
      <q-btn flat color="white" label="Turn ON Wifi" />
    </template>
  </q-banner>
</template>
