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
  selectedRegion: null,
  limit: 9,
},

  reducers: {
    loadMoreCountries: (state) => {
      const remaining = state.countries.slice(
        state.visibleCountries.length,
        state.visibleCountries.length + state.limit
      );
      state.visibleCountries = [...state.visibleCountries, ...remaining];
    },
    filterByRegion: (state, action) => {
    const region = action.payload;
    state.selectedRegion = region;
    const filtered = state.countries.filter(c => region ? c.region === region : true);
    state.visibleCountries = filtered.slice(0, state.limit);
  },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      state.countries = action.payload;
      state.visibleCountries = action.payload.slice(0, state.limit);
    });
  },
});

export const { loadMoreCountries, filterByRegion } = countrySlice.actions;

export default countrySlice.reducer;
