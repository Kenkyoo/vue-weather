<script setup lang="ts">
import { date } from 'quasar';

const now = Date.now();
const currentDate = date.formatDate(now, 'dddd D [de] MMMM [de] YYYY');
defineOptions({
  name: 'CurrentDate',
});
</script>

<template>
  <div class="text-weight-regular">
    {{ currentDate }}
  </div>
</template>
