import axios from 'axios';
import { Logout } from '~/redux/slices/container-slice';
import store from '~/redux/store';

import { ProjectUrl } from '~/env';

//* 2xx ->  Success
//* 4xx ->  client side error
//* 5xx ->  server side error
//** Axios reject the response if the status code belongs to 5xx and 4xx */
//! 401 Unauthorized -> you are not login
//! 403 Forbidden    ->    you are login but not have permissions
//! 400 Bad Request  -> error from client side check your arguments in body
//! 404 Not Found    -> endpoint does not exist
//! 500 Internal Server Error  -> error from the server side

const api = axios.create({
    baseURL: ProjectUrl,
    headers: {
        'Content-Type': 'application/json',
        // Add any other headers or configurations you need
    },
});

//! Add a request interceptor
api.interceptors.request.use(
    async (config) => {
        let token = store.getState().auth_store.token;
        //console.log("Token", token);
        if (token) {
            config.headers.Authorization = 'Bearer ' + token;
        }
        return config;
    },

    (error) => {
        return Promise.reject(error);
    }
);

const handleLogout = () => {
    const token = window.localStorage.getItem('token');
    if (token) {
        store.dispatch(Logout());
        // Clear any other relevant data upon logout
        localStorage.removeItem('token');
        localStorage.removeItem('refresh_token');
    }
};

const handleApiError = (error) => {
    if (
        error.response &&
        (error.response.status === 401 || error.response.status === 403)
    ) {
        handleLogout();
        return Promise.reject(error.response.data);
    }
    console.log('error', error.response.data);
    // Handle other errors as needed
    return Promise.reject(error.response.data);
};

api.interceptors.response.use(
    (response) => response,
    async function (error) {
        const originalRequest = error.config;

        if (error.response.status === 403 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const refresh_token = localStorage.getItem('refresh_token');
                const response = await axios.get(`${ProjectUrl}/refresh`, {
                    headers: { Authorization: `Bearer ${refresh_token}` },
                });

                const { token } = response.data;
                localStorage.setItem('token', token);

                // Retry the original request with the new token
                originalRequest.headers.Authorization = `Bearer ${token}`;
                return api(originalRequest);
            } catch (error) {
                handleLogout();
            }
        } else if (
            error.response.status === 401 ||
            error.response.status === 403
        ) {
            handleLogout();
        }

        return Promise.reject(error);
    }
);

export const postApi = async (
    path,
    data = {},
    headers = {
        Accept: 'application/json',
    },
    cancelToken
) => {
    try {
        const response = await api.post(path, data, {
            headers: headers,
            cancelToken,
        });
        return response;
    } catch (error) {
        return handleApiError(error);
    }
};

export const getApi = async (
    path,
    headers = {
        Accept: 'application/json',
    },
    cancelToken
) => {
    try {
        const response = await api.get(path, {
            headers: headers,
            cancelToken,
        });
        return response.data;
    } catch (error) {
        return handleApiError(error);
    }
};
