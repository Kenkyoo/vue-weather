<template>
  <div class="q-pa-md">
    <Alert />
    <div class="text-h6 q-mb-md title">Welcome to your Dashboard</div>
    <div class="column dashboard">
      <div class="col">
        <div class="row section">
          <ForeCards
            v-if="store.data?.forecast.forecastday"
            :data="store.data.forecast.forecastday"
          />
        </div>
      </div>
      <div class="col-5">
        <div class="text-h6 q-mb-md title">Today Overview</div>
        <div class="row section">
          <div class="col bg-dark">
            <WindCard />
          </div>
          <div class="col bg-dark">
            <UvCard />
          </div>
          <div class="col bg-dark">
            <SunCard />
          </div>
        </div>
        <div class="row section">
          <div class="col bg-dark">
            <HumidityCard />
          </div>
          <div class="col bg-dark">
            <VisibilityCard />
          </div>
          <div class="col">
            <FeelsCard />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useWeatherStore } from 'src/stores/weather';
import { onMounted } from 'vue';
import ForeCards from 'src/components/dashboard/forecast/ForeCards.vue';
import WindCard from 'src/components/dashboard/wind/Wind.vue';
import UvCard from 'src/components/dashboard/uv/UvCard.vue';
import SunCard from 'src/components/dashboard/sun/SunCard.vue';
import HumidityCard from 'src/components/dashboard/humidity/HumidityCard.vue';
import VisibilityCard from 'src/components/dashboard/visibility/VisibilityCard.vue';
import FeelsCard from 'src/components/dashboard/feels/FeelsCard.vue';
import Alert from 'src/components/alerts/Alert.vue';

const store = useWeatherStore();
onMounted(() => {
  void store.initFromStorage();
});
defineOptions({
  name: 'DashboardPage',
});
</script>
<style>
.dashboard {
  margin-top: 20px;
  gap:20px;
}
.section {
  margin-top: 20px;
  gap: 20px;
}
.title {
  margin-top: 20px;
  margin-bottom: 40px;
}
.input {
  margin-bottom: 40px;
}
.col {
  border-radius: 10px;
}
</style>
