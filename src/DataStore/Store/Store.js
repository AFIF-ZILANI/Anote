import { configureStore } from '@reduxjs/toolkit';
import TodoReducer from '../Reducers/TodoSlice';

export const Store = configureStore({
    reducer: TodoReducer
});

