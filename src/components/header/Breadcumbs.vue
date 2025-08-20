<template>
  <q-breadcrumbs class="breadcrumbs text-body2">
    <q-breadcrumbs-el label="Dashboard" icon="home" to="/" class="link"/>
    <q-breadcrumbs-el label="Forecast" icon="filter_drama" to="/forecast" class="link"/>
    <q-breadcrumbs-el label="Hours" icon="punch_clock" to="/hours" class="link"/>
  </q-breadcrumbs>
</template>
<script setup lang="ts">
defineOptions({
  name: 'BreadCumbs',
});
</script>
<style>
.breadcrumbs {
  display: flex;
  gap: 30px;
  margin-right: 20px;
}
.link {
  color: white;
  margin-right: 10px;
}
</style>
