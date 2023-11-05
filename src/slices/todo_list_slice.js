import { createSlice } from '@reduxjs/toolkit';

import { TODO_FILTERS } from '../utils/constants';

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState: { 
    filter: TODO_FILTERS.ALL,
    list: [] 
  },
  reducers: {
    addTodo: (state, action) => {
      state.list.push(action.payload);
    },
    updateTodo: (state, action) => {
      state.list.forEach((todo) => {
        if (todo.id === action.payload.id) {
          todo.title = action.payload.title;
          todo.date = action.payload.date;
          todo.completed = action.payload.completed;
        }
      });
    },
    deleteTodo: (state, action) => {
      state.list = state.list.filter((task) => task.id !== action.payload.id);
    },
    updateTodoFilter: (state, action) => {
      state.filter = action.payload;
    }
  }
});

export const { addTodo, updateTodo, deleteTodo, updateTodoFilter } = todoListSlice.actions;
export default todoListSlice.reducer;