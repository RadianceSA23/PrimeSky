import weatherReducer, { getWeather } from '@redux/slices/weatherSlice';

describe('weatherSlice', () => {
  const initialState = {
    current: null,
    loading: false,
    error: null,
  };

  it('should handle getWeather.pending', () => {
    const action = { type: getWeather.pending.type };
    const state = weatherReducer(initialState, action);
    expect(state.loading).toBe(true);
    expect(state.error).toBe(null);
  });

  it('should handle getWeather.fulfilled', () => {
    const mockPayload = { name: 'Paris' };
    const action = { type: getWeather.fulfilled.type, payload: mockPayload };
    const state = weatherReducer(initialState, action);
    expect(state.loading).toBe(false);
    expect(state.current).toEqual(mockPayload);
  });

  it('should handle getWeather.rejected', () => {
    const action = {
      type: getWeather.rejected.type,
      payload: 'City not found',
    };
    const state = weatherReducer(initialState, action);
    expect(state.loading).toBe(false);
    expect(state.error).toBe('City not found');
    expect(state.current).toBe(null);
  });
});
