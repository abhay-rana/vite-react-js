import { createAsyncThunk } from '@reduxjs/toolkit';

import Alertify from '~/scripts/alertify';
import { getApi, postApi } from '~/scripts/api-services';

function _ValidateLogin(payload) {
    let validate = true;
    if (!payload.email || !payload.password) {
        validate = false;
    }
    return validate;
}

export const SignInUser = createAsyncThunk(
    'post/signIn',
    (payload, { rejectWithValue, dispatch, getState }) => {
        if (_ValidateLogin(payload)) {
            return new Promise((res, rej) => {
                setTimeout(() => {
                    res('hello there');
                }, 4000);
            });
        } else {
            return rejectWithValue('there is an error in signup api');
        }

        // return postApi('/api/email/login', { ...payload })
        //     .then((data) => {
        //         console.log('data', data);
        //         return data;
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //         if (typeof error.message === 'string') {
        //             Alertify.error(error.message);
        //         }
        //         return rejectWithValue('payload');
        //     });
    }
);

export const GetUserProfile = createAsyncThunk(
    'get/userProfile',
    (payload, { rejectWithValue }) => {
        console.log('payload', payload);
        return getApi('/api/email/login')
            .then((data) => {
                console.log('data', data);
                return data;
            })
            .catch((error) => {
                console.log(error);
                if (typeof error.message === 'string') {
                    Alertify.error(error.message);
                }
                return rejectWithValue('hello abhay');
            });
    }
);
