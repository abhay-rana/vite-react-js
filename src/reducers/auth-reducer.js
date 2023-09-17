import { createSlice } from '@reduxjs/toolkit';

import { SignInUser } from '~/actions/auth-actions';

const initialState = {
    is_login: null,
    token: null,
    fcm_token: '',
    // details for the user signup and sign-in
    user_details: {
        name: '',
        email: '',
        user_id: '',
        age: '',
        password: '',
        confirm_password: '',
    },
};

const AuthReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(SignInUser.fulfilled, (state, action) => {
                console.log('action', action);
                state.is_login = !state.is_login;
            })
            .addCase(SignInUser.rejected, (state, action) => {
                console.log('action', action);
                state.is_login = !state.is_login;
            });
    },
});

export const { GetUser } = AuthReducer.actions;

export default AuthReducer.reducer;
