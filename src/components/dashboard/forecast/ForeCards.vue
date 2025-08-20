<script setup lang="ts">
import { date } from 'quasar';
import type { ForecastDay } from 'src/types/weather';

defineProps<{
  data: ForecastDay[];
}>();
</script>

<template>
  <div v-for="item in data" :key="item.date_epoch" class="col bg-dark">
    <q-card flat bordered class="my-card shadow-3">
      <q-card-section class="flex-column text-center flex-center">
        <div>{{ date.formatDate(item.date, 'dddd') }}</div>
        <div>
          <q-img
            class="rounded-borders icon"
            :src="'https:' + item.day.condition.icon"
            alt="icon"
          />
        </div>
        <div>{{ item.day.avgtemp_c }}</div>
      </q-card-section>
    </q-card>
  </div>
</template>
