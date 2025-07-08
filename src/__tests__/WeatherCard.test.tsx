import React from 'react';
import { render } from '@testing-library/react-native';
import WeatherCard from '../components/WeatherCard';

describe('WeatherCard', () => {
  it('renders weather data correctly', () => {
    const { getByText } = render(
      <WeatherCard
        cityName="London"
        country="GB"
        temperature={22.9}
        weatherCondition="Clear"
        description="clear sky"
        icon="01d"
        humidity={39}
        pressure={1018}
        windSpeed={3.2}
        feelsLike={22.2}
        tempMin={21.5}
        tempMax={24.0}
      />
    );

    expect(getByText('London, GB')).toBeTruthy();
    expect(getByText('Clear (clear sky)')).toBeTruthy();
    expect(getByText('Humidity: 39%')).toBeTruthy();
  });
});
