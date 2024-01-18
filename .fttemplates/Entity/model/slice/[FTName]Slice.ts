import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { [FTName]Schema } from '../types/[FTName]Schema';

const initialState: [FTName]Schema = {
  isLoading: false,
};

export const [FTName]Slice = createSlice({
  name: '[FTName]',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSomething.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchSomething.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(fetchSomething.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: [FTName]Actions } = [FTName]Slice;
export const { reducer: [FTName]Reducer } = [FTName]Slice;
