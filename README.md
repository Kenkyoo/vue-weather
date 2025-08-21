# Vue Weather Dashboard

Un **dashboard del clima** desarrollado con **Vue 3**, **Quasar Framework** y **Pinia**, que muestra información meteorológica actual, pronóstico extendido y detalles por horas. Incluye también un mapa interactivo para visualizar la ubicación seleccionada.

🌐 **Demo online**: [forecast-vue-app.netlify.app](https://forecast-vue-app.netlify.app/)
📦 **Repositorio**: [github.com/Kenkyoo/vue-weather](https://github.com/Kenkyoo/vue-weather)

---

## ✨ Características

* 🔍 Búsqueda de ciudad para obtener los datos del clima.
* 🌡️ Información actual: temperatura, condiciones y más.
* 📅 Pronóstico extendido de varios días.
* ⏰ Clima por horas.
* 🗺️ Mapa interactivo con la ubicación establecida (Leaflet).
* 📦 Manejo de estado centralizado con **Pinia** (fetch y almacenamiento único de datos).
* 🎨 Interfaz construida con **Quasar Framework**.

---

## 🛠️ Tecnologías utilizadas

* [Vue 3](https://vuejs.org/)
* [Quasar Framework](https://quasar.dev/)
* [Pinia](https://pinia.vuejs.org/)
* [Leaflet](https://leafletjs.com/)
* [Vue Router](https://router.vuejs.org/)
* [VueUse](https://vueuse.org/)

---

## 🚀 Instalación y uso

Clonar el repositorio:

```bash
git clone https://github.com/Kenkyoo/vue-weather.git
cd vue-weather
```

Instalar dependencias:

```bash
npm install
```

Ejecutar en modo desarrollo:

```bash
npm run dev
```

Compilar para producción:

```bash
npm run build
```

---


## 📌 Notas

* Necesitas una API key de [WeatherAPI](https://www.weatherapi.com/) para que la aplicación funcione correctamente.
* La API se consume una sola vez y los datos se almacenan en Pinia para evitar llamadas repetitivas.

---

## 👨‍💻 Autor

Creado por **Franco** ✨
📧 [frfantusatti@protonmail.com](mailto:frfantusatti@protonmail.com)

---

## 📄 Licencia

Este proyecto se distribuye bajo la licencia MIT.
