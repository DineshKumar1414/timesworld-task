import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../src/features/authSlice';
import countryReducer from '../src/features/countrySlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    country: countryReducer,
  },
});

export default store;
