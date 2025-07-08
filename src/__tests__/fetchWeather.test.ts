import axios from 'axios';
import { fetchWeather } from '@services/weatherService';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('fetchWeather', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks(); 
  });

  it('fetches weather data successfully', async () => {
    const mockData = { name: 'London' };

    mockedAxios.get.mockResolvedValueOnce({ data: mockData });

    const result = await fetchWeather('London');
    expect(result).toEqual(mockData);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      'https://api.openweathermap.org/data/2.5/weather',
      expect.objectContaining({
        params: expect.objectContaining({
          q: 'London',
        }),
      })
    );
  });

  it('throws error when API returns error response', async () => {
    const errorResponse = {
      response: {
        data: { message: 'City not found' },
      },
      isAxiosError: true,
    };

    mockedAxios.get.mockRejectedValueOnce(errorResponse);

   
    jest.spyOn(axios, 'isAxiosError').mockReturnValue(true);

    await expect(fetchWeather('invalid-city')).rejects.toThrow('City not found');
  });

  it('throws generic error on unexpected error', async () => {
    const error = new Error('Something bad');

    mockedAxios.get.mockRejectedValueOnce(error);


    jest.spyOn(axios, 'isAxiosError').mockReturnValue(false);

    await expect(fetchWeather('Paris')).rejects.toThrow('An unexpected error occurred');
  });
});
