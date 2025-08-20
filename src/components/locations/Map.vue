<template>
  <div v-if="store?.data?.location" id="map" style="height: 400px; width: 100%"></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useWeatherStore } from 'src/stores/weather';

const store = useWeatherStore();
onMounted(() => {
  if (!store?.data?.location) {
    return;
  }
  const map = L.map('map').setView([store?.data?.location.lat, store?.data?.location.lon], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
  }).addTo(map);

  L.marker([-34.6037, -58.3816]).addTo(map).bindPopup('Buenos Aires');
});

defineOptions({
  name: 'MapComponent',
});
</script>
