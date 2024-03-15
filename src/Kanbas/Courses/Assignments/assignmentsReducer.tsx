// 1. reducer: have all functions together

import { createSlice } from "@reduxjs/toolkit";
import * as db from "../../Database";

const initialState = {
  assignments: db.assignments,
  assignment: { name: "New Assignment", description: "New Description" },
};

const assignmentSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      const newAssignment = {
        ...action.payload,
        _id: new Date().getTime().toString(), // Ensure this generates a unique ID
      };
      state.assignments.push(newAssignment);
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (eachAss) => eachAss._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((eachAss) => {
        if (eachAss._id === action.payload._id) {
          return action.payload;
        } else {
          return eachAss;
        }
      });
    },
    selectAssignment: (state, action) => {
      state.assignment = action.payload;
    },
  },
});

export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  selectAssignment,
} = assignmentSlice.actions;
export default assignmentSlice.reducer;
