import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchHotels } from './api';

const initialState = {
  loading: null,
  list: null,
};

// Async reducer methods
export const fetchHotelsAsync = createAsyncThunk(
  'hotels/fetch',
  async (amount) => {
    const response = await fetchHotels();
    return response.data;
  }
);

// Reducer
export const slice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHotelsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchHotelsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.list = action.payload;
      });
  },
});

// Actions
export const actions = slice.actions;

// Selectors
export const selectAllHotels = (state) => state.hotels.list;
export const selectHotelsStatus = (state) => state.hotels.status;

export default slice.reducer;
