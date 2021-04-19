import { Weather } from '../interfaces/weather';
export const serializeWeather = (data: any) => {
  const weather: Weather = {
    coord: {
      longitude: data.coord.lon,
      latitude: data.coord.lat,
    },
    weather: {
      main: data.weather[0].main,
      description: data.weather[0].description,
    },
    main: {
      temperature: parseFloat((data.main.temp - 273).toFixed(2)),
      pressure: data.main.pressure,
      humidity: data.main.humidity,
    },
    wind: {
      speed: data.wind.speed,
    },
    sys: {
      country: data.sys.country,
    },
    name: data.name,
    time: new Date().getTime(),
    timezone: data.timezone,
  };

  return weather;
};
