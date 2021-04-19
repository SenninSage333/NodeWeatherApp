interface Weather {
  coord: {
    longitude: number;
    latitude: number;
  };
  weather: {
    main: string;
    description: string;
  };
  main: {
    temperature: number;
    pressure: number;
    humidity: string;
  };
  wind: {
    speed: string;
  };
  sys: {
    country: string;
  };
  name: string;
  time: number;
  timezone: number;
}

export { Weather };
