// ----------------- step 1 ----------------- 
import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  message: "Hello World from initial state (step 1)",
};

// more states
const helloSlice = createSlice({
  name: "hello",
  initialState,
  reducers: {},
});

export default helloSlice.reducer;
