<template>
  <img alt="Vue logo" src="./assets/logo.png"><br />
  <select v-model="selectedCity" @change="mounted">
    <option value="">Выберите город</option>
    <option value="ekb">Екатеринбург</option>
    <option value="msk">Москва</option>
    <option value="ntagil">Нижний Тагил</option>
  </select>

  <h1>Погода {{ selectedCityName }}</h1>
  <h3 v-if="!weather">Загрузка...</h3>
  <h3 v-else-if="weather">
    Сейчас {{ (weather['main']['temp'] - 273.15).toFixed(2) }} градусов Цельсия,<br />
    {{ weather['main']['pressure'] }} гПа давление
  </h3>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data() {
    return {
      selectedCity: '',
      selectedCityName: '',
      weather: null,
      cities: {
        ekb: { name: 'Екатеринбург', lat: 56.8519, lon: 60.6122 },
        msk: { name: 'Москва', lat: 55.7522, lon: 37.6156 },
        ntagil: { name: 'Нижний Тагил', lat: 57.9194, lon: 59.965 },
      }
    }
  },
  methods: {
    mounted() {
      if (this.selectedCity) {
        this.selectedCityName = this.cities[this.selectedCity].name;
        const { lat, lon } = this.cities[this.selectedCity];

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7d44d3f288627d47a09f48d8806ed066`)
        .then(resp=>resp.json())
        .then(json=>{
          this.weather = json;
        });
      }
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