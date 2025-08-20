<script setup lang="ts">
import Locations from 'src/components/locations/Locations.vue';
import Map from 'src/components/locations/Map.vue';
import Search from 'src/components/locations/Search.vue';
defineOptions({
  name: 'LocationsPage',
});
</script>
<template>
  <div>
    <Search />
    <div class="text-h4">My Location</div>
    <Locations />
    <Map />
  </div>
</template>
