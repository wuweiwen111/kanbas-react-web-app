// ----------------- step 1 -----------------
import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  count: 0,
};

// more states
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
