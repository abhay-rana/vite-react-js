import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { todosApi } from '~/api-services/todo-services';

import authReducer from '~/reducers/auth-reducer';
import containerReducer from '~/reducers/container-reducer';
import counterReducer from '~/reducers/counter-reducer';
import taskReducer from '~/reducers/task-reducer';

import { APP_MODE } from '~/env';

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
    [todosApi.reducerPath]: todosApi.reducer,
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
        }).concat(todosApi.middleware),
});

export const persistor = persistStore(store);

export default store;
