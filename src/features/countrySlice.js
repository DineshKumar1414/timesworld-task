import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCountries = createAsyncThunk(
  'country/fetchCountries',
  async () => {
    const response = await axios.get(
      'https://restcountries.com/v2/all?fields=name,region,flag'
    );
    return response.data;
  }
);

export const countrySlice = createSlice({
  name: 'country',
  initialState: {
    countries: [],
    visibleCountries: [],
    limit: 9, // Number of countries to show initially and on each load
  },
  reducers: {
    loadMoreCountries: (state) => {
      const remaining = state.countries.slice(
        state.visibleCountries.length,
        state.visibleCountries.length + state.limit
      );
      state.visibleCountries = [...state.visibleCountries, ...remaining];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      state.countries = action.payload;
      state.visibleCountries = action.payload.slice(0, state.limit);
    });
  },
});

export const { loadMoreCountries } = countrySlice.actions;

export default countrySlice.reducer;
