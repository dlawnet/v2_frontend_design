import Axios, {InternalAxiosRequestConfig} from "axios";

import {API_URL} from "@app/lib/config";
import {useNotificationStore} from "@app/stores/notifications";
import sessionTokenStore from "@app/stores/session-token-store";

function authRequestInterceptor(
    config: InternalAxiosRequestConfig
) {
    const token = sessionTokenStore.getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    config.headers.Accept = 'application/json';
    return config;
}

export const axios = Axios.create({
    baseURL: API_URL,
});

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        const message =
            error.response?.data?.message || error.message;
        if (error?.response?.status === 401) {
            localStorage.removeItem('token');
            window.location.href = '/auth/login';
        }

        if (error?.code === 'ERR_NETWORK') {
            return;
        }

        // check if error is validation error
        if (error?.response?.data?.errors) {
            // create a list of error and notify user
            const errors = error.response.data.errors;
            const errorList = Object.keys(errors).map((key) => {
                return errors[key];
            });
            if (errorList.length > 0) {
                useNotificationStore.getState().addNotification({
                    type: 'error',
                    title: 'Validation Error',
                    message: errorList.join('\\r\\n'),
                });
            }
        } else {
            useNotificationStore.getState().addNotification({
                type: 'error',
                title: 'Error',
                message,
            });
        }

        return Promise.reject(error);
    }
);
