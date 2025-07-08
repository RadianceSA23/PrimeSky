import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { useWeatherFetch } from '@hooks/useWeatherFetch';
import Button from '@components/Button';
import Loader from '@components/Loader';
import WeatherCard from '@components/WeatherCard';
import { useTheme } from 'react-native-paper';

const HomeScreen = () => {
  const { city, setCity, fetchWeather, current, loading, error } = useWeatherFetch();
  const { colors } = useTheme();
  console.log("Weather fetch error:", error);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <TextInput
        placeholder="Enter city"
        placeholderTextColor={colors.onBackground}
        value={city}
        onChangeText={setCity}
        style={[styles.input, { color: colors.onBackground, borderColor: colors.primary }]}
      />

      <Button title="Fetch Weather" onPress={fetchWeather} isLoading={loading} />

      {loading && <Loader />}
      {error && !loading && (
        <Text style={[styles.errorText, { color: colors.error }]}>{error}</Text>
      )}

      {current && !loading && (
        <WeatherCard
          cityName={current.name}
          temperature={current.main.temp}
          weatherCondition={current.weather[0].main}
          description={current.weather[0].description}
          icon={current.weather[0].icon}
          humidity={current.main.humidity}
          pressure={current.main.pressure}
          windSpeed={current.wind.speed}
          feelsLike={current.main.feels_like}
          tempMin={current.main.temp_min}
          tempMax={current.main.temp_max}
          country={current.sys.country}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
  errorText: {
    marginTop: 10,
    fontSize: 14,
  },
});

export default HomeScreen;
