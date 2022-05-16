import { configureStore } from '@reduxjs/toolkit';
import hotelReducer from '../hotels/slice';

export const store = configureStore({
  reducer: {
    hotels: hotelReducer,
  },
});
