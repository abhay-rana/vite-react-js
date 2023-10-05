import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    is_login: false,
    token: '',
    role: '',
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducer: {
        setLogin: (state, action) => {},
    },
    extraReducers: {},
});

export const { setLogin } = authSlice.actions;
export default authSlice.reducer;
