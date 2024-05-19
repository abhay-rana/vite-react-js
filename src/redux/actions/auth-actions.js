import { createAsyncThunk } from '@reduxjs/toolkit';
import { postApi } from '~/services/api-service';

export const userSignIn = createAsyncThunk('sign/user', async (payload) => {
    await postApi('');
});
