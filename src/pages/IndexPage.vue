<template>
  <header class="sans-serif">
    <div
      class="cover bg-left bg-center-l"
      style="
        background-image: url(https://raw.githubusercontent.com/dracula/wallpaper/refs/heads/master/second-collection/leaves/dracula-leaves-44475a.png);
      "
    >
      <div class="bg-black-80 pb5 pb6-m pb7-l">
        <nav class="dt w-100 mw8 center">
          <div class="dtc w2 v-mid pa3">
            <q-icon name="ac_unit" style="color: white; font-size: 2rem;"/>
          </div>
          <div class="dtc v-mid tr pa3">
            <a class="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" href="https://github.com/Kenkyoo"
              >
              <q-icon name="commit" style="color: white; font-size: 2rem;"/>
              Kenkyo</a
            >
            <a class="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" href="https://github.com/Kenkyoo?tab=repositories"
              >
               <q-icon name="archive" style="color: white; font-size: 2rem;"/>
              My repos</a
            >
          </div>
        </nav>
        <div class="tc-l mt4 mt5-m mt6-l ph3">
          <h1 class="f2 f1-l fw2 white-90 mb0 lh-title">Weather Dashboard</h1>
          <h2 class="fw1 f3 white-80 mt3 mb4">
            Set your location and go to dashboard for more details
          </h2>
          <div>
            <q-input
              rounded
              outlined
              v-model="store.query"
              label="Buscar ciudad"
              class="input search"
              type="search"
            >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </div>
          <div v-if="store.data" class="flex-center">
            <div class="tc pv4 avenir">
              <h4 class="fw1 f3 white-80 mt3 mb4">Is this your city?</h4>
              <q-img
                style="width: 100px; height: 100px"
                class="rounded-borders"
                :src="'https:' + store.data.current.condition.icon"
                :alt="store.data.current.condition.text"
              />
              <h4 class="mt2 mb0 f6 fw4 ttu tracked">{{ store.data.current.temp_c }} ºC</h4>
              <h1 class="mt2 mb0 baskerville i fw1 f1">
                {{ store.data.location.name }} {{ store.data.location.region }}
              </h1>
              <h2 class="mt2 mb0 f6 fw4 ttu tracked">
                {{ store.data.current.condition.text }}
              </h2>
            </div>
            <q-btn @click="saveLocation" color="white" outline rounded>
            <RouterLink to="/dashboard" class="links">Yes, Let Go!</RouterLink>
            </q-btn>
            <span class="dib v-mid ph3 white-70 mb3">or</span>
            <q-btn color="white" outline label="No? Try again" rounded/>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { useDebounceFn } from '@vueuse/core';
import { useWeatherStore } from 'src/stores/weather';
import { LocalStorage } from 'quasar';

const store = useWeatherStore();

const fetch = useDebounceFn(() => {
  void store.fetchWeather();
}, 1000);

watch(
  () => store.query,
  () => {
    void fetch();
  },
);

function saveLocation() {
  LocalStorage.set('query', store.query);
}

defineOptions({
  name: 'IndexPage',
});
</script>
<style>
border-box {
  box-sizing: border-box;
}

.cover {
  background-size: cover !important;
}

.bg-left {
  background-repeat: no-repeat;
  background-position: center left;
}

.ba {
  border-style: solid;
  border-width: 1px;
}

.b--white {
  border-color: #fff;
}

.b--white-90 {
  border-color: rgba(255, 255, 255, 0.9);
}

.b--blue {
  border-color: #357edd;
}

.dn {
  display: none;
}

.dib {
  display: inline-block;
}

.dt {
  display: table;
}

.dtc {
  display: table-cell;
}

.sans-serif {
  font-family:
    -apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'helvetica neue', helvetica, ubuntu,
    roboto, noto, 'segoe ui', arial, sans-serif;
}

.fw1 {
  font-weight: 100;
}

.fw2 {
  font-weight: 200;
}

.fw4 {
  font-weight: 400;
}

.h2 {
  height: 2rem;
}

.lh-title {
  line-height: 1.25;
}

.link {
  text-decoration: none;
  transition: color 0.15s ease-in;
}

.link:link,
.link:visited {
  transition: color 0.15s ease-in;
}

.link:hover {
  transition: color 0.15s ease-in;
}

.link:active {
  transition: color 0.15s ease-in;
}

.link:focus {
  transition: color 0.15s ease-in;
  outline: 1px dotted currentColor;
}

.links {
  text-decoration: none;
}

.mw8 {
  max-width: 64rem;
}

.w2 {
  width: 2rem;
}

.w-100 {
  width: 100%;
}

.white-90 {
  color: rgba(255, 255, 255, 0.9);
}

.white-80 {
  color: rgba(255, 255, 255, 0.8);
}

.white-70 {
  color: rgba(255, 255, 255, 0.7);
}

.white {
  color: #fff;
}

.bg-black-80 {
  background-color: rgba(0, 0, 0, 0.8);
}

.bg-blue {
  background-color: #357edd;
}

.hover-white:hover {
  color: #fff;
}

.hover-white:focus {
  color: #fff;
}

.pa1 {
  padding: 0.25rem;
}

.pa3 {
  padding: 1rem;
}

.pb5 {
  padding-bottom: 4rem;
}

.pv2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.ph3 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.ml2 {
  margin-left: 0.5rem;
}

.mb0 {
  margin-bottom: 0;
}

.mb3 {
  margin-bottom: 1rem;
}

.mb4 {
  margin-bottom: 2rem;
}

.mt3 {
  margin-top: 1rem;
}

.mt4 {
  margin-top: 2rem;
}

.no-underline {
  text-decoration: none;
}

.tr {
  text-align: right;
}

.f2 {
  font-size: 2.25rem;
}

.f3 {
  font-size: 1.5rem;
}

.f6 {
  font-size: 0.875rem;
}

.center {
  margin-right: auto;
  margin-left: auto;
}

.v-mid {
  vertical-align: middle;
}

.grow {
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;
}

.grow:hover,
.grow:focus {
  transform: scale(1.05);
}

.grow:active {
  transform: scale(0.9);
}

.grow-large {
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: transform 0.25s ease-in-out;
}

.grow-large:hover,
.grow-large:focus {
  transform: scale(1.2);
}

.grow-large:active {
  transform: scale(0.95);
}

.ba {
  border-style: solid;
  border-width: 1px;
}

.bt {
  border-top-style: solid;
  border-top-width: 1px;
}

.bb {
  border-bottom-style: solid;
  border-bottom-width: 1px;
}

.b--black {
  border-color: #000;
}

.br-100 {
  border-radius: 100%;
}

.dib {
  display: inline-block;
}

.avenir {
  font-family: 'avenir next', avenir, sans-serif;
}

.baskerville {
  font-family: baskerville, serif;
}

.i {
  font-style: italic;
}

.fw1 {
  font-weight: 100;
}

.fw4 {
  font-weight: 400;
}

.h2 {
  height: 2rem;
}

.tracked {
  letter-spacing: 0.1em;
}

.link {
  text-decoration: none;
  transition: color 0.15s ease-in;
}

.link:link,
.link:visited {
  transition: color 0.15s ease-in;
}

.link:hover {
  transition: color 0.15s ease-in;
}

.link:active {
  transition: color 0.15s ease-in;
}

.link:focus {
  transition: color 0.15s ease-in;
  outline: 1px dotted currentColor;
}

.mw7 {
  max-width: 48rem;
}

.w2 {
  width: 2rem;
}

.black-80 {
  color: rgba(0, 0, 0, 0.8);
}

.white {
  color: #fff;
}

.bg-black-80 {
  background-color: rgba(0, 0, 0, 0.8);
}

.bg-white {
  background-color: #fff;
}

.hover-bg-light-yellow:hover {
  background-color: #fbf1a9;
}

.hover-bg-light-yellow:focus {
  background-color: #fbf1a9;
}

.hover-bg-light-pink:hover {
  background-color: #ffa3d7;
}

.hover-bg-light-pink:focus {
  background-color: #ffa3d7;
}

.hover-bg-light-green:hover {
  background-color: #9eebcf;
}

.hover-bg-light-green:focus {
  background-color: #9eebcf;
}

.hover-bg-light-blue:hover {
  background-color: #76c4e2;
}

.hover-bg-light-blue:focus {
  background-color: #76c4e2;
}

.hover-bg-lightest-blue:hover {
  background-color: #cdecff;
}

.hover-bg-lightest-blue:focus {
  background-color: #cdecff;
}

.pa3 {
  padding: 1rem;
}

.pv4 {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.mb0 {
  margin-bottom: 0;
}

.mt2 {
  margin-top: 0.5rem;
}

.mt4 {
  margin-top: 2rem;
}

.tc {
  text-align: center;
}

.ttu {
  text-transform: uppercase;
}

.f1 {
  font-size: 3rem;
}

.f6 {
  font-size: 0.875rem;
}

.center {
  margin-right: auto;
  margin-left: auto;
}

.bg-animate,
.bg-animate:hover,
.bg-animate:focus {
  transition: background-color 0.15s ease-in-out;
}

@media screen and (min-width: 60em) {
  .ph4-l {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .f5-l {
    font-size: 1rem;
  }
}

@media screen and (min-width: 30em) {
  .dib-ns {
    display: inline-block;
  }
}

@media screen and (min-width: 30em) and (max-width: 60em) {
  .pb6-m {
    padding-bottom: 8rem;
  }

  .mt5-m {
    margin-top: 4rem;
  }
}

@media screen and (min-width: 60em) {
  .bg-center-l {
    background-repeat: no-repeat;
    background-position: center center;
  }

  .dib-l {
    display: inline-block;
  }

  .pb7-l {
    padding-bottom: 16rem;
  }

  .mt6-l {
    margin-top: 8rem;
  }

  .tc-l {
    text-align: center;
  }

  .f1-l {
    font-size: 3rem;
  }
}

.my-card {
  width: 400px;
}

.search {
  width: 100%;
  max-width: 1000px;
  margin: auto;
}
</style>
