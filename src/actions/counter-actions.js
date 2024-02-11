import { createAsyncThunk } from '@reduxjs/toolkit';

export function prom1() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log('abhay');
            res(5000);
        }, 5000);
    });
}

export function prom2() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log('abhay');
            res(3000);
        }, 8000);
    });
}

export function prom3() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log('abhay');
            rej(1);
        }, 1);
    });
}

export const FetchCounter = createAsyncThunk('fetchCounters', async () => {
    try {
        const res = await Promise.allSettled([prom1(), prom2(), prom3()]);
        return res;
    } catch (error) {
        console.error(error);
        return Promise.reject(error);
    }
});
