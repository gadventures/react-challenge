import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchHotels } from './api';

const initialState = {
  loading: null,
  list: null,
};

export const fetchHotelsAsync = createAsyncThunk(
  'hotels/fetch',
  async (amount) => {
    const response = await fetchHotels();
    return response.data;
  }
);

export const slice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
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

// // export const { increment, decrement, incrementByAmount } = counterSlice.actions;
//
// // The function below is called a selector and allows us to select a value from
// // the state. Selectors can also be defined inline where they're used instead of
// // in the slice file. For example: `useSelector((state: RootState) => state.hotels.value)`
export const selectAllHotels = (state) => state.hotels.list;
export const selectHotelsStatus = (state) => state.hotels.status;
// export const selectHotelsStatus = (state) = state.hotels.status;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd = (amount) => (dispatch, getState) => {
//   const currentValue = selectCount(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };

export default slice.reducer;
