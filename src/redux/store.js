import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { APP_MODE } from 'env';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from '~/redux/slices/auth-slice';
import containerReducer from '~/redux/slices/container-slice';
import counterReducer from '~/redux/slices/counter-slice';
import taskReducer from '~/redux/slices/task-slice';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['store_name'],
};

const reducers = combineReducers({
    counter_store: counterReducer,
    container_store: containerReducer,
    auth_store: authReducer,
    tasks_store: taskReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    devTools: APP_MODE === 'development',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: true,
            serializableCheck: false,
            immutableCheck: false,
        }),
});

export const persistor = persistStore(store);

export default store;
