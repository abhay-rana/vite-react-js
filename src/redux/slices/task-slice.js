import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks: [
        {
            id: 1,
            name: 'hello this is abhay',
            descriptions: 'this is abhay descriptions',
        },
        {
            id: 2,
            name: 'hello this is aditi',
            descriptions: 'this is aditi descriptions',
        },
        {
            id: 3,
            name: 'hello this is rahul jakka',
            descriptions: 'this is rahul jakka descriptions',
        },
    ],
};

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        getTasks: (state, action) => {
            state;
        },
    },
});

export const { getTasks } = taskSlice.actions;
export default taskSlice.reducer;
