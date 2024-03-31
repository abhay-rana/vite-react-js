import { createAsyncThunk } from '@reduxjs/toolkit';

import { postApi } from '~/scripts/api-services';

export const userSignIn = createAsyncThunk('sign/user', async (payload) => {
    await postApi('');
});
