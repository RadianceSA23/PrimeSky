import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeather } from '@redux/slices/weatherSlice';
import { RootState, AppDispatch } from '@redux/store';

export const useWeatherFetch = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [city, setCity] = useState('');
  const { current, loading, error } = useSelector((state: RootState) => state.weather);

  const fetchWeather = useCallback(() => {
    if (city.trim()) {
      dispatch(getWeather(city));
    }
  }, [dispatch, city]);

  return {
    city,
    setCity,
    fetchWeather,
    current,
    loading,
    error,
  };
};
