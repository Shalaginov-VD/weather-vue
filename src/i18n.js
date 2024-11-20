import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    selectCity: 'Select City',
    loading: 'Loading...',
    weather: 'Weather',
    temperature: 'degrees',
    pressure: 'hPa pressure',
    humidity: 'humidity',
    windSpeed: 'm/s wind speed',
    windDirection: 'direction',
    forecast: 'Weather Forecast',
  },
  ru: {
    selectCity: 'Выберите город',
    loading: 'Загрузка...',
    weather: 'Погода',
    temperature: 'градусов',
    pressure: 'гПа давления',
    humidity: 'влажности',
    windSpeed: 'м/с скорость ветра',
    windDirection: 'направление',
    forecast: 'Прогноз погоды',
  },
};

const i18n = createI18n({
  locale: 'en',
  messages,
});

export default i18n;
