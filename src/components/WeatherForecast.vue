<template>
<div>
    <h1>{{ $t('forecast') }}</h1>
    <ul v-if="forecast">
        <h3 v-for="day in forecast.list" :key="day.dt">
            {{ formatDate(day.dt * 1000) }}: {{ convertTemp(day.main.temp) }} {{ $t('temperature') }}, {{ day.weather[0].description }}
            <img :src="`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`" alt="weather icon"/><br />
            {{ day.main.pressure }} {{ $t('pressure') }}<br />
            {{ day.main.humidity }}% {{ $t('humidity') }}<br />
            {{ day.wind.speed }} {{ $t('windSpeed') }} 
            {{ getWindDirection(day.wind.deg) }} {{ $t('windDirection') }}
        </h3>
    </ul>
    <h3 v-else>{{ $t('loading') }}</h3>
</div>
</template>  
  
<script>
export default {
    name: 'WeatherForecast',
    props: {
        city: String,
        metrics: String
    },
    data() {
        return {
            forecast: null,
        };
    },
    created() {
        this.fetchForecast();
    },
    methods: {
        fetchForecast() {
            const citiesData = {
                ekb: { lat: 56.8519, lon: 60.6122 },
                msk: { lat: 55.7522, lon: 37.6156 },
                ntagil: { lat: 57.9194, lon: 59.965 },
            };
            const { lat, lon } = citiesData[this.city];
            
            fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=7d44d3f288627d47a09f48d8806ed066&units=metric&lang=ru`)
            .then(resp => resp.json())
            .then(json => {
                this.forecast = json;
            });
        },
        formatDate(timestamp) {
            return new Date(timestamp).toLocaleDateString();
        },
        getWindDirection(deg) {
            const directions = ['С', 'СВ', 'В', 'ЮВ', 'Ю', 'ЮЗ', 'З', 'СЗ'];
            return directions[Math.round(deg / 45) % 8];
        },
        convertTemp(temp) {
            if (this.metrics === 'C') {
                return temp.toFixed(2);
            } else {
                return ((temp * 9/5) + 32).toFixed(2);
            }
        }
    }
}
</script>
