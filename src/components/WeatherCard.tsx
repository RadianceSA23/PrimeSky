import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface WeatherCardProps {
  
  cityName: string;
  temperature: number;
  weatherCondition: string;
  description: string;
  humidity: number;
  pressure: number;
  windSpeed: number;
  feelsLike: number;
  tempMin: number;
  tempMax: number;
  country: string;
  icon:string;
}

// Map weather description to background color
const getBackgroundColor = (description: string): string => {
  const desc = description.toLowerCase();
  if (desc.includes('clear')) return '#ffe57f';
  if (desc.includes('cloud')) return '#cfd8dc';
  if (desc.includes('rain')) return '#90caf9';
  if (desc.includes('storm')) return '#b39ddb';
  if (desc.includes('snow')) return '#e1f5fe';
  if (desc.includes('mist') || desc.includes('fog')) return '#b0bec5';
  return '#f0f4ff';
};

// Map description to FontAwesome5 icon name
const getWeatherIconName = (description: string): string => {
  const desc = description.toLowerCase();
  if (desc.includes('clear')) return 'sun';
  if (desc.includes('cloud')) return 'cloud';
  if (desc.includes('rain')) return 'cloud-rain';
  if (desc.includes('storm')) return 'bolt';
  if (desc.includes('snow')) return 'snowflake';
  if (desc.includes('mist') || desc.includes('fog')) return 'smog';
  return 'sun';
};

const WeatherCard: React.FC<WeatherCardProps> = ({
  cityName,
  temperature,
  weatherCondition,
  description,
  humidity,
  pressure,
  windSpeed,
  feelsLike,
  tempMin,
  tempMax,
  country,
}) => {
  const backgroundColor = getBackgroundColor(description);
  const iconName = getWeatherIconName(description);

  return (
    <View style={[styles.card, { backgroundColor }]}>
      <Text style={styles.cityText}>{cityName}, {country}</Text>

      <View style={styles.topSection}>
        <Icon name={iconName} size={64} color="#333" style={styles.icon} />
        <View>
          <Text style={styles.tempText}>{temperature}°C</Text>
          <Text style={styles.feelsText}>Feels like: {feelsLike}°C</Text>
          <Text style={styles.descText}>{weatherCondition} ({description})</Text>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.infoRow}>
        <InfoItem label="Min" value={`${tempMin}°C`} />
        <InfoItem label="Max" value={`${tempMax}°C`} />
        <InfoItem label="Humidity" value={`${humidity}%`} />
      </View>

      <View style={styles.infoRow}>
        <InfoItem label="Pressure" value={`${pressure} hPa`} />
        <InfoItem label="Wind" value={`${windSpeed} m/s`} />
      </View>
    </View>
  );
};

const InfoItem = ({ label, value }: { label: string; value: string }) => (
  <View style={styles.infoItem}>
    <Text style={styles.infoLabel}>{label}</Text>
    <Text style={styles.infoValue}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    padding: 20,
    margin: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  cityText: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 12,
    color: '#333',
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginRight: 16,
  },
  tempText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0077b6',
  },
  feelsText: {
    fontSize: 14,
    color: '#555',
    marginTop: 2,
  },
  descText: {
    fontSize: 14,
    color: '#444',
    marginTop: 4,
    fontStyle: 'italic',
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 16,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  infoItem: {
    alignItems: 'center',
  },
  infoLabel: {
    fontSize: 13,
    color: '#666',
  },
  infoValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
    marginTop: 2,
  },
});

export default WeatherCard;
