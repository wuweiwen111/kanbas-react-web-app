// ----------------- step 1 -----------------
import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  todos: [
    { id: "1", title: "learn react" },
    { id: "2", title: "learn node" },
  ],
  todo: { title: "learn mongo" }, // array
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // func 1: add
    addTodo: (state, action) => {
      const newTodos = [
        ...state.todos,
        { ...action.payload, id: new Date().getTime().toString() },
      ];
      state.todos = newTodos;
      state.todo = { title: "" };
    },

    // func 2: delete
    deleteTodo: (state, action) => {
      const newTodos = state.todos.filter((todo) => todo.id !== action.payload);
      state.todos = newTodos;
    },

    // func 3: update
    updateTodo: (state, action) => {
      const newTodos = state.todos.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      state.todos = newTodos;
      state.todo = { title: "" };
    },

    // func 4: set
    setTodo: (state, action) => {
      state.todo = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, setTodo } = todosSlice.actions;
export default todosSlice.reducer;
