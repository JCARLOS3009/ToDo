import { configureStore } from '@reduxjs/toolkit'
import todoListReducer from '../slices/todo_list_slice';

export default configureStore({
  reducer: {
    todoList: todoListReducer
  }
})