import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import HomeScreen from '@screens/HomeScreen';
import { useWeatherFetch } from '@hooks/useWeatherFetch';
import { Provider as PaperProvider } from 'react-native-paper';


jest.mock('@hooks/useWeatherFetch');

const mockedUseWeatherFetch = useWeatherFetch as jest.MockedFunction<typeof useWeatherFetch>;

const renderWithTheme = (ui: React.ReactElement) => (
  render(<PaperProvider>{ui}</PaperProvider>)
);

describe('HomeScreen', () => {
  it('renders correctly and allows city input', () => {
    mockedUseWeatherFetch.mockReturnValue({
      city: '',
      setCity: jest.fn(),
      fetchWeather: jest.fn(),
      current: null,
      loading: false,
      error: '',
    });

    const { getByPlaceholderText } = renderWithTheme(<HomeScreen />);
    const input = getByPlaceholderText('Enter city');
    expect(input).toBeTruthy();
  });

  it('shows loading when fetching weather', () => {
    mockedUseWeatherFetch.mockReturnValue({
      city: 'London',
      setCity: jest.fn(),
      fetchWeather: jest.fn(),
      current: null,
      loading: true,
      error: '',
    });

    const { getByTestId } = renderWithTheme(<HomeScreen />);
    expect(getByTestId('loader')).toBeTruthy(); 
  });

  it('displays error message when there is an error', () => {
    mockedUseWeatherFetch.mockReturnValue({
      city: 'London',
      setCity: jest.fn(),
      fetchWeather: jest.fn(),
      current: null,
      loading: false,
      error: 'City not found',
    });

    const { getByText } = renderWithTheme(<HomeScreen />);
    expect(getByText('City not found')).toBeTruthy();
  });

  it('displays weather card when data is fetched', () => {
    mockedUseWeatherFetch.mockReturnValue({
      city: 'Paris',
      setCity: jest.fn(),
      fetchWeather: jest.fn(),
      loading: false,
      error: '',
      current: {
        name: 'Paris',
        main: {
          temp: 25,
          feels_like: 26,
          temp_min: 20,
          temp_max: 28,
          humidity: 60,
          pressure: 1010,
        },
        weather: [
          {
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d',
          },
        ],
        wind: {
            speed: 5,
            deg: 180,     
            gust: 7.5,      
          },
        sys: {
          country: 'FR',
        },
      },
    });

    const { getByText } = renderWithTheme(<HomeScreen />);
    expect(getByText(/Paris/)).toBeTruthy(); 
    expect(getByText(/Clouds/)).toBeTruthy();
  });
});
