import { StyleSheet } from 'react-native';

export const COLORS = {
  primary: '#007AFF',
  secondary: '#5856D6',
  background: '#F2F2F2',
  card: '#FFFFFF',
  text: '#1C1C1E',
  error: '#FF3B30',
  border: '#D1D1D6',
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const FONT_SIZES = {
  small: 12,
  medium: 16,
  large: 20,
  title: 24,
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SPACING.md,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.sm,
    borderRadius: 8,
    fontSize: FONT_SIZES.medium,
    marginBottom: SPACING.md,
    backgroundColor: '#fff',
  },
  errorText: {
    color: COLORS.error,
    fontSize: FONT_SIZES.small,
    marginTop: SPACING.sm,
  },
  title: {
    fontSize: FONT_SIZES.title,
    fontWeight: '600',
    color: COLORS.text,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
