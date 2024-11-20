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
    favorites: 'Favorite Cities',
    saveToFavorites: 'Save',
    removeFromFavorites: 'Remove',
    delete: 'Delete',
    now: 'Now',
    favorite: 'to favorite',
    windDirections: {
      N: 'N',
      NE: 'NE',
      E: 'E',
      SE: 'SE',
      S: 'S',
      SW: 'SW',
      W: 'W',
      NW: 'NW'
    }
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
    favorites: 'Избранные города',
    saveToFavorites: 'Сохранить',
    removeFromFavorites: 'Убрать',
    delete: 'Удалить',
    now: 'Сейчас',
    favorite: 'избранное',
    windDirections: {
      N: 'С',
      NE: 'СВ',
      E: 'В',
      SE: 'ЮВ',
      S: 'Ю',
      SW: 'ЮЗ',
      W: 'З',
      NW: 'СЗ'
    }
  },
};

const i18n = createI18n({
  locale: 'en',
  messages,
});

export default i18n;
