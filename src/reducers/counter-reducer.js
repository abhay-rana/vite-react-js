import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    counter: 0,
};

const CounterReducer = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        AddTodo: (state, action) => {
            state.counter += 1;
        },
        DeleteTodo: (state, action) => {
            state.counter -= 1;
        },
    },
});

export const { AddTodo, DeleteTodo } = CounterReducer.actions;

export default CounterReducer.reducer;
