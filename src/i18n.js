import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    selectCity: 'Select City',
    weather: 'Weather',
    loading: 'Loading...',
    now: 'Now',
    temperature: 'degrees',
    pressure: 'hPa pressure',
    humidity: 'humidity',
    windSpeed: 'm/s wind speed',
    windDirection: 'direction',
    saveToFavorites: 'Save',
    removeFromFavorites: 'Remove',
    favorite: 'to favorite',
    favorites: 'Favorite Cities',
    delete: 'Delete',
    forecast: 'Weather Forecast',
    cities: {
      ekb: 'Yekaterinburg',
      msk: 'Moscow',
      ntagil: 'Nizhny Tagil'
    },
    weatherDesc: {
      few_clouds: 'few clouds',
      scattered_clouds: 'scattered clouds',
      broken_clouds: 'broken clouds',
      overcast_clouds: 'overcast clouds',
      clear_sky: 'clear sky',
      light_rain: 'light rain',
      moderate_rain: 'moderate rain',
      light_snow: 'light show'
    },
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
    weather: 'Погода',
    loading: 'Загрузка...',
    now: 'Сейчас',
    temperature: 'градусов',
    pressure: 'гПа давления',
    humidity: 'влажности',
    windSpeed: 'м/с скорость ветра',
    windDirection: 'направление',
    saveToFavorites: 'Сохранить',
    removeFromFavorites: 'Убрать',
    favorite: 'избранное',
    favorites: 'Избранные города',
    delete: 'Удалить',
    forecast: 'Прогноз погоды',
    cities: {
      ekb: 'Екатеринбург',
      msk: 'Москва',
      ntagil: 'Нижний Тагил'
    },
    weatherDesc: {
      few_clouds: 'малооблачно',
      scattered_clouds: 'облачно с прояснениями',
      broken_clouds: 'переменная облачность',
      overcast_clouds: 'пасмурно',
      clear_sky: 'ясно',
      light_rain: 'небольшой дождь',
      moderate_rain: 'умеренный дождь',
      light_snow: 'небольшой снег'
    },
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
  locale: 'ru',
  messages,
});

export default i18n;
