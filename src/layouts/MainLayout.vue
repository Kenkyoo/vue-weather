<template>
  <div class="q-pa-md body body--dark">
    <q-banner inline-actions class="bg-indigo-14 text-white">
      Puedes volver aquí la próxima vez y usaremos esta localidad para establecer el clima
      <template v-slot:action>
        <q-btn flat color="white" label="Ok" />
      </template>
    </q-banner>
    <q-layout view="hHh Lpr lff" container style="height: 100vh" class="rounded-borders">
      <q-header :class="$q.dark.isActive ? 'drawer' : 'bg-black'">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title>
            <Date />
          </q-toolbar-title>
          <BreadCumbs />
        </q-toolbar>
      </q-header>

      <q-drawer v-model="drawer" show-if-above :width="300" :breakpoint="300" dark class="drawer">
        <q-scroll-area
          style="height: calc(100% - 150px); margin-top: 20px; border-right: 1px solid #ddd"
        >
          <div class="sidebar">
            <div class="column flex-class">
              <div class="col">
                <q-list padding class="text-body2">
                  <q-item clickable v-ripple>
                    <q-item-section avatar>
                      <q-icon name="dashboard" color="amber-9"/>
                    </q-item-section>

                    <q-item-section>
                      <RouterLink to="/dashboard" class="links">Dashboard</RouterLink>
                    </q-item-section>
                  </q-item>

                  <q-item active clickable v-ripple>
                    <q-item-section avatar>
                      <q-icon name="punch_clock" color="amber-9"/>
                    </q-item-section>

                    <q-item-section>
                      <RouterLink to="/hours" class="links">Per hours</RouterLink>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-ripple>
                    <q-item-section avatar>
                      <q-icon name="filter_drama" color="amber-9" />
                    </q-item-section>

                    <q-item-section>
                      <RouterLink to="/forecast" class="links">Forecast</RouterLink>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-ripple>
                    <q-item-section avatar>
                      <q-icon name="location_on" color="amber-9"/>
                    </q-item-section>

                    <q-item-section>
                      <RouterLink to="/locations" class="links">Location</RouterLink>
                    </q-item-section>
                  </q-item>
                </q-list>
              </div>
              <q-separator />
              <div class="col bg-dark">
                <WeatherCard />
              </div>
              <q-separator />
              <div class="col bg-dark"><TempCard /></div>
            </div>
          </div>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <q-page padding>
          <router-view></router-view>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import WeatherCard from 'src/components/sidebar/WeatherCard.vue';
import TempCard from 'src/components/sidebar/temperature/TempCard.vue';
import Date from 'src/components/header/date/Date.vue';
import BreadCumbs from 'src/components/header/Breadcumbs.vue';
import 'victormono';

const drawer = ref(false);
</script>

<style>
.body {
  font-family: 'Victor Mono';
}
.drawer {
  background-color: #121212;
}
.sidebar {
  padding-left: 20px;
  padding-right: 20px;
}
.links {
  text-decoration: none;
  color: white;
}
.flex-class {
  gap: 20px;
}
</style>
