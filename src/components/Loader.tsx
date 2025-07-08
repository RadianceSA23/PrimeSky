import React from 'react';
import { View, ActivityIndicator, StyleSheet, ViewStyle } from 'react-native';

interface LoaderProps {
  size?: 'small' | 'large'; 
  color?: string;           
  style?: ViewStyle;        
}

const Loader: React.FC<LoaderProps> = ({
  size = 'large',
  color = '#6200ea', 
  style = {},
}) => {
  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loader;
