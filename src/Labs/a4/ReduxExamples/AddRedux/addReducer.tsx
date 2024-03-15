// ----------------- step 1 -----------------

import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  sum: 0,
};

// more state
const addSlice = createSlice({
  name: "add",
  initialState,
  reducers: {
    add: (state, action) => {
      state.sum = action.payload.a + action.payload.b;
    },
  },
});

export const {add} = addSlice.actions
export default addSlice.reducer