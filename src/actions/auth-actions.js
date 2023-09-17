import { createAsyncThunk } from '@reduxjs/toolkit';

import Alertify from '~/scripts/alertify';
import { postApi } from '~/scripts/api-services';

export const SignInUser = createAsyncThunk('signIn', (payload) => {
    return postApi('/api/email/login', { ...payload })
        .then((data) => {
            console.log('data', data);
            return data;
        })
        .catch((error) => {
            console.log(error);
            if (typeof error.message === 'string') {
                Alertify.error(error.message);
            }
            return Promise.reject(error);
        });
});
