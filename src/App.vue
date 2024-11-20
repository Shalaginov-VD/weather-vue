<template>
  <img alt="Vue logo" src="./assets/logo.png"><br />
  <select v-model="selectedCity" @change="mounted">
    <option value="">{{ $t('selectCity') }}</option>
    <option value="ekb">{{ cities.ekb.name }}</option>
    <option value="msk">{{ cities.msk.name }}</option>
    <option value="ntagil">{{ cities.ntagil.name }}</option>
  </select>

  <h1>{{ $t('weather') }} {{ selectedCityName }}</h1>
  <h3 v-if="!weather">{{ $t('loading') }}</h3>
  <h3 v-else-if="weather">
    {{ $t('now') }} {{ weather['main']['temp'] }} {{ $t('temperature') }},
    {{ weather['weather'][0]['description'] }}
    <img :src="`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`" alt="weather icon"/><br />
    {{ weather['main']['pressure'] }} {{ $t('pressure') }}<br />
    {{ weather['main']['humidity'] }}% {{ $t('humidity') }}<br />
    {{ weather['wind']['speed'] }} {{ $t('windSpeed') }} 
    {{ getWindDirection(weather['wind']['deg']) }} {{ $t('windDirection') }}
  </h3>
  <button v-if="selectedCity" @click="toggleUnits">{{ metrics }} °</button>
  <button v-if="selectedCity" @click="saveCity">{{ isCitySaved ? $t('removeFromFavorites') : $t('saveToFavorites') }} {{ $t('favorite') }}</button>
  <button @click="toggleLanguage">{{ currentLanguage === 'ru' ? 'EN' : 'RU' }}</button>

  <weather-forecast v-if="selectedCity" :city="selectedCity" :metrics="metrics" />
  <UserFavorites v-if="selectedCity" :cities="favoriteCities" @removeCity="removeCity" />
</template>

<script>
import WeatherForecast from './components/WeatherForecast.vue'
import UserFavorites from './components/UserFavorites.vue'
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    WeatherForecast,
    UserFavorites
  },
  data() {
    return {
      selectedCity: '',
      selectedCityName: '',
      weather: null,
      metrics: 'C',
      favoriteCities: this.loadFavorites(),
      cities: {
        ekb: { name: 'Екатеринбург', lat: 56.8519, lon: 60.6122 },
        msk: { name: 'Москва', lat: 55.7522, lon: 37.6156 },
        ntagil: { name: 'Нижний Тагил', lat: 57.9194, lon: 59.965 },
      }
    }
  },
  computed: {
    isCitySaved() {
      return this.favoriteCities.includes(this.selectedCity);
    }
  },
  methods: {
    mounted() {
      if (this.selectedCity) {
        this.selectedCityName = this.cities[this.selectedCity].name;
        const { lat, lon } = this.cities[this.selectedCity];

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7d44d3f288627d47a09f48d8806ed066&units=metric&lang=ru`)
        .then(resp=>resp.json())
        .then(json=>{
          this.weather = json;
        });
      }
    },
    getWindDirection(deg) {
      const directions = ['С', 'СВ', 'В', 'ЮВ', 'Ю', 'ЮЗ', 'З', 'СЗ'];
      return directions[Math.round(deg / 45) % 8];
    },
    toggleUnits() {
      this.metrics = this.metrics === 'C' ? 'F' : 'C';
      if (this.weather) {
        if (this.metrics === 'C') {
          this.weather.main.temp = parseFloat(((this.weather.main.temp - 32) * 5 / 9).toFixed(2));
        } else {
          this.weather.main.temp = parseFloat(((this.weather.main.temp * 9 / 5) + 32).toFixed(2));
        }
      }
    },
    toggleLanguage() {
      this.currentLanguage = this.currentLanguage === 'ru' ? 'en' : 'ru';
      this.$i18n.locale = this.currentLanguage;
    },
    saveCity() {
      if (this.isCitySaved) {
        this.favoriteCities = this.favoriteCities.filter(city => city !== this.selectedCity);
      } else {
        this.favoriteCities.push(this.selectedCity);
      }
      this.saveFavorites(this.favoriteCities);
    },
    saveFavorites(cities) {
      localStorage.setItem('favoriteCities', JSON.stringify(cities));
    },
    loadFavorites() {
      const cities = localStorage.getItem('favoriteCities');
      return cities ? JSON.parse(cities) : [];
    },
    removeCity(city) {
      this.favoriteCities = this.favoriteCities.filter(c => c !== city);
      this.saveFavorites(this.favoriteCities);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>