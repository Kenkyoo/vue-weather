export type Hour = {
  time_epoch: number;
  time: string;
  temp_c: number;
  condition: {
    text: string;
    icon: string;
  };
};

export type ForecastDay = {
  date_epoch: number;
  date: string;
  day: {
    avgtemp_c: number;
    maxtemp_c: number;
    mintemp_c: number;
    condition: {
      text: string;
      icon: string;
    };
  };
  astro: {
    sunrise: string;
    sunset: string;
  };
  hour: [Hour];
};

export interface WeatherData {
  location: {
    name: string;
    region: string;
    lat: number;
    lon: number;
    tz_id: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    uv: number;
    humidity: number;
    vis_km: number;
    feelslike_c: number;
  };
  forecast: {
    forecastday: ForecastDay[];
  };
  alerts: {
    headline: string;
    date: string;
    severity: string;
  }[];
}
