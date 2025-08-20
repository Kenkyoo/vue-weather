import { defineStore } from 'pinia';
import { LocalStorage } from 'quasar';
import type { WeatherData } from 'src/types/weather';

export const useWeatherStore = defineStore('clima', {
  state: () => ({
    query: '', // empieza vacío
    data: null as WeatherData | null,
  }),

  actions: {
    async fetchWeather() {
      if (!this.query) return;
      const apiKey = import.meta.env.VITE_API_KEY;
      const API_URL = import.meta.env.VITE_API_URL;
      const endpoint = 'forecast.json';
      const days = 3;
      const res = await fetch(
        `${API_URL}${endpoint}?key=${apiKey}&q=${this.query}&days=${days}&lang=es&alerts=yes`,
      );
      this.data = await res.json();

      // guardar la última localidad buscada
      LocalStorage.set('query', this.query);
    },

    // 🚀 inicializar desde LocalStorage
    async initFromStorage() {
      const saved = LocalStorage.getItem('query');
      if (saved) {
        this.query = String(LocalStorage.getItem('query') || '');
        await this.fetchWeather();
      }
    },
  },
});
