<template>
<img alt="Vue logo" src="./assets/logo.png"><br />
<select v-model="selectedCity" @change="fetchWeather">
  <option value="">{{ $t('selectCity') }}</option>
  <option value="ekb">{{ $t('cities.ekb') }}</option>
  <option value="msk">{{ $t('cities.msk') }}</option>
  <option value="ntagil">{{ $t('cities.ntagil') }}</option>
</select>

<h1>{{ $t('weather') }} {{ selectedCityName }}</h1>
<div>
    <h3 v-if="!weather">{{ $t('loading') }}</h3>
    <h3 v-else-if="weather">
    {{ $t('now') }} {{ weather['main']['temp'] }} {{ $t('temperature') }}, <br />
    {{ $t(`weatherDesc.${weather.weather[0].description.replace(/ /g, '_')}`) }}
    <img :src="`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`" alt="weather icon"/><br />
    {{ weather['main']['pressure'] }} {{ $t('pressure') }}<br />
    {{ weather['main']['humidity'] }}% {{ $t('humidity') }}<br />
    {{ weather['wind']['speed'] }} {{ $t('windSpeed') }} 
    {{ getWindDirection(weather['wind']['deg']) }} {{ $t('windDirection') }}
  </h3>
  <button v-if="selectedCity" @click="toggleUnits">{{ metrics }} °</button>
  <button v-if="selectedCity" @click="saveCity">{{ isCitySaved ? $t('removeFromFavorites') : $t('saveToFavorites') }} {{ $t('favorite') }}</button>
  <button @click="toggleLanguage">{{ currentLanguage === 'en' ? 'RU' : 'EN' }}</button>
  
  <div class="user-favorites">
    <UserFavorites v-if="favoriteCities.length" :cities="favoriteCities" @removeCity="removeCity" />
  </div>
</div>

<weather-forecast v-if="selectedCity" :city="selectedCity" :metrics="metrics" />
</template>

<script>
import WeatherForecast from './components/WeatherForecast.vue'
import UserFavorites from './components/UserFavorites.vue'

export default {
  name: 'App',
  components: {
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
    fetchWeather() {
      if (this.selectedCity) {
        this.selectedCityName = this.$t(`cities.${this.selectedCity}`);
        const { lat, lon } = this.cities[this.selectedCity];

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7d44d3f288627d47a09f48d8806ed066&units=metric`)
        .then(resp => resp.json())
        .then(json => {
          this.weather = json;
        });
      }
    },
    getWindDirection(deg) {
      const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
      const index = Math.round(deg / 45) % 8;
      const direction = directions[index];
    
      return this.$t(`windDirections.${direction}`);
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
      this.currentLanguage = this.currentLanguage === 'en' ? 'ru' : 'en';
      this.$i18n.locale = this.currentLanguage;
      this.selectedCityName = this.$t(`cities.${this.selectedCity}`);
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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@media (max-width: 768px) {
  #app {
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
  }

  h3 {
    font-size: 18px;
  }

  select, button {
    width: 100%;
    margin: 10px 0;
  }
}

img {
  max-width: 100%;
  height: auto;
}
</style>