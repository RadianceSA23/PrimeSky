
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchWeather } from '@services/weatherService';
import { WeatherState } from '@utils/types';

export const getWeather = createAsyncThunk(
  'weather/getWeather',
  async (city: string, { rejectWithValue }) => {
    try {
      const data = await fetchWeather(city);
      return data;
    } catch (err: any) {
      console.log('Thunk error:', err.message); // Debug log
      return rejectWithValue(err.message || 'Failed to fetch weather');
    }
  }
);

const initialState: WeatherState = {
  current: null,
  loading: false,
  error: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getWeather.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.current = action.payload;
      })
      .addCase(getWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.current = null; // Optional: clear previous data on error
      });
  },
});

export default weatherSlice.reducer;

